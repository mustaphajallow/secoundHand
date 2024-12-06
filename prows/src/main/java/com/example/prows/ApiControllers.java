package com.example.prows;

import com.example.prows.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiControllers {

    @Autowired
    private UserRepo userRepo;


@GetMapping(value = "/")
    public String getPage(){
    return "welcome";
}

@GetMapping(value = "/users")
    public List<User> getUser(){
      return userRepo.findAll();
    }

    @PostMapping(value = "/users/save")
    public String saveUser(@RequestBody User user){
        System.out.println(user);
    userRepo.save(user);

    return "saved ..";
    }
    @PutMapping(value = "update/{id}")
    public String updateUser(@PathVariable long id , @RequestBody  User user){
    User updateUser = userRepo.findById(id).get();
    updateUser.setFirstName(user.getFirstName());
    updateUser.setLastName(user.getLastName());
    updateUser.setOccupation(user.getOccupation());
    updateUser.setAge(user.getAge());
     updateUser.setEmail(user.getEmail());
     updateUser.setPassword(user.getPassword());
    userRepo.save(updateUser);
    return "updated ...";
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteUser(@PathVariable long id){
    User deleteUser = userRepo.findById(id).get();
    userRepo.delete(deleteUser);
    return "deleted ....";
    }


}

