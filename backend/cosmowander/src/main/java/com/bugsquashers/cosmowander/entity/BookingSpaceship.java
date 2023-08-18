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
@Table(name = "booking_spaceship")
public class BookingSpaceship {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String spaceshipRegId;
    private String spaceshipName;
    private int totalSeatCapacity;
}
