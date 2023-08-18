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
@Table(name = "journey")
public class Journey {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String journeyId;
    private String startingAt;
    private LocalDate startingDate;
    private String stopAt_1;
    private String stopAt_2;
    private String stopAt_3;
    private String stopAt_4;
    private int duration;
    private int distance;
    private LocalDate departureDate;
    private LocalTime departureTime;
    private int noOfPassengers;
}
