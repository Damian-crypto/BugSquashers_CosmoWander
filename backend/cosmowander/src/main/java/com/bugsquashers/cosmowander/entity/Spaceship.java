package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "spaceship")
public class Spaceship {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String spaceshipRegId;

    private String spaceshipName;
}
