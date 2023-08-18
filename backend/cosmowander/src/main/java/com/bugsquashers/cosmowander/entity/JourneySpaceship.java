package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "journey_spaceship")
public class JourneySpaceship {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String spaceshipRegId;
    private String spaceshipName;
    private String journeyId;
    private int costPerSeat;
}
