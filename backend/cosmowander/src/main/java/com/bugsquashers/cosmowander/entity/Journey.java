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
    private String startingStationId;
    private LocalDate startingDate;
    private LocalDate startingTime;
    private String stationId;
    private LocalDate arrivalDate;
    private int duration;
    private int distance;
    private int noOfPassengers;
    private int noOfInterchanges;
    private int totalCost;
    private int weight;
    private LocalDate departureDate;
    private LocalTime departureTime;
}
