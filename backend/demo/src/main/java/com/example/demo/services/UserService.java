package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.model.UserModel;
import com.example.demo.repository.UserModelRepo;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
    UserModelRepo userRepository;
    @Autowired
    UserRepo userRepo;

    public String addUser(UserModel userModel) {
        userRepository.save(userModel);
        return "Successfully added";
    }

    public Optional<UserModel> getUser(String email) {
        return userRepository.findByUserEmail(email);
    }

    public List<UserModel> getAllUser() {
        return userRepository.findAll();
    }

    public String updateUserModel(UserModel userModel) {
        Optional<User> user = userRepo.findByEmail(userModel.getUser().getEmail());
        System.out.println(user);
        if (user.isEmpty()) {
            return "User Not Found";
        }
        user.get().setName(userModel.getUser().getName());
        userRepo.save(user.get());
        Optional<UserModel> userModelRepo = userRepository.findByUser(user.get());
        userModelRepo.get().setMobileNumber(userModel.getMobileNumber());
        userRepository.save(userModelRepo.get());
        return "Updated Successfully";
    }

}
