package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "booking_journey_spaceship")
public class BookingJourneySpaceship {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String journeyId;
}
