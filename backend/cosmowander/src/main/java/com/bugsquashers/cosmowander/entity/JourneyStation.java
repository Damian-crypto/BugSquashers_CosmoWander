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
@Table(name = "journey_stations")
@IdClass(JourneyStationId.class)
public class JourneyStation {
    @Id
    @ManyToOne
    private Journey journey;
    @Id
    private String stationId;
}
