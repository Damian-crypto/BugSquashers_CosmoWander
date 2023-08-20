package com.bugsquashers.cosmowander.dto.request;

import com.bugsquashers.cosmowander.entity.JourneyStation;
import com.bugsquashers.cosmowander.entity.Spaceship;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class JourneySaveRequestDTO {
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
    private String journeyId;
    private LocalDate departure;
    private int destinationId;
    private Spaceship spaceship;
    private List<JourneyStation> station;
}
