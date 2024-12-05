package com.example.prows;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import lombok.Data;


@Entity
@Data
public class User {


    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private long id;

    @Column
    @JsonProperty("firstName")
    private String firstName;


    @Column
    @JsonProperty("lastName")
    private String lastName;


    @Column
    @JsonProperty("age")
    private int age;


    @Column
    @JsonProperty("occupation")
    private String occupation;



    @Column
    @JsonProperty("email")
    private String email;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column
    @JsonProperty("password")
    private String password;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }
}
