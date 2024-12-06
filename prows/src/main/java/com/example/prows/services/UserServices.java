//package com.example.prows.services;
//
//import com.example.prows.Repo.UserRepo;
//import jdk.internal.icu.impl.Punycode;
//import org.springframework.beans.factory.annotation.Autowired;
//
//public class UserServices {
//
//    @Autowired
//private UserRepo userRepo;
//
//    public User registerUser(String email, String password) {
//        User user = new User();
//        user.setEmail(email);
//
//        user.setPassword(password);
//        return userRepository.save(user);
//    }
//
//    public Optional<User> findByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//}
