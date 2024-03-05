package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        try {
            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/", "postgres",
                    "postgres");
            Statement statement = connection.createStatement();
            statement
                    .executeQuery("SELECT count(*) FROM pg_database WHERE datname = '" + constants.DATABASE_NAME + "'");
            ResultSet resultSet = statement.getResultSet();
            resultSet.next();
            int count = resultSet.getInt(1);
            if (count != 1) {
                statement.executeUpdate("CREATE DATABASE " + constants.DATABASE_NAME);
                System.out.println("CREATED DATABASE");
            } else {
                System.out.println("DATABASE EXISTS");
            }
        } catch (SQLException e) {
            System.out.println("ERROR CREATING DATABASE" + e.getMessage());
        }

        SpringApplication.run(DemoApplication.class, args);
    }

}
