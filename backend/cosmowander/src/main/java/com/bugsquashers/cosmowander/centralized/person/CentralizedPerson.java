package com.bugsquashers.cosmowander.centralized.person;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CentralizedPerson {
    @Id
    private String sid;
    private String firstName;
    private String lastName;
    private String location;
    private String emailAddress;
    private String contactNumber;
    private char gender;
}
