package com.example.demo.services;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.request.AuthRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthResponse;
import com.example.demo.model.AdminModel;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.model.UserModel;
import com.example.demo.repository.AdminRepo;
import com.example.demo.repository.UserModelRepo;
import com.example.demo.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserModelRepo userModelRepository;
    private final AdminRepo adminModelRepository;
    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {
        User user = User
                .builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role((request.getUserRole().equals("user")) ? Role.USER : Role.ADMIN)
                .build();
        Optional<User> existing = userRepository.findByEmail(request.getEmail());
        if (!existing.isEmpty()) {
            return AuthResponse.builder()
                    .token("Email Already exists")
                    .build();
        }
        User savedUser = userRepository.save(user);

        if (request.getUserRole().equals("user")) {
            UserModel userModel = new UserModel();
            userModel.setMobileNumber(request.getMobileNumber());
            userModel.setUser(savedUser);
            userModelRepository.save(userModel);
        } else {
            AdminModel adminModel = new AdminModel();
            adminModel.setMobileNumber(request.getMobileNumber());
            adminModel.setUser(savedUser);
            adminModelRepository.save(adminModel);
        }

        return AuthResponse.builder()
                .token(jwtService.generateToken(user))
                .build();
    }

    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        if ((request.getRole().equals("admin") && user.getRole() != Role.ADMIN)
                || (request.getRole().equals("user") && user.getRole() != Role.USER)) {
            return AuthResponse.builder()
                    .token("Invalid Credentials")
                    .build();
        }
        return AuthResponse.builder()
                .token(jwtService.generateToken(user))
                .userRole((user.getRole() == Role.ADMIN) ? "admin" : "user")
                .build();
    }
}
