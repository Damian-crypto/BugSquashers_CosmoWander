package com.bugsquashers.cosmowander.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class JourneyDTO {
    private int journeyId;
    private String startingStationId;
    private LocalDate startingDate;
    private LocalTime startingTime;
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
