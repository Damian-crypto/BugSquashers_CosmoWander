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
public class JourneyStation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String journeyId;
    private String stationId;
}
