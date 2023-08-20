package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "journey")
public class Journey {
    @Id
    private String journeyId;
    private String startingStationId;
    private LocalDate startingDate;
    private LocalDate startingTime;
    private LocalDate arrivalDate;
    private int duration;
    private int distance;
    private int noOfPassengers;
    private int noOfInterchanges;
    private int totalCost;
    private int weight;
    private int destinationId;
    private LocalDate departure;

    @OneToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name="journey")
    private List<Station> station;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="spaceshipId")
    private Spaceship spaceship;

    public Journey(String journeyId, LocalDate departure, int destinationId) {
        this.departure = departure;
        this.destinationId = destinationId;
        this.journeyId = journeyId;
    }

    public Journey(String journeyId,LocalDate departure, int destinationId, Spaceship spaceship) {
        this.departure = departure;
        this.destinationId = destinationId;
        this.spaceship = spaceship;
        this.journeyId = journeyId;
    }
}
