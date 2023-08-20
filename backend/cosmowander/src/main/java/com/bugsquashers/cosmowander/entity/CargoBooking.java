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
@Table(name = "cargo_booking")
public class CargoBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int bookingRefId;
    private int weight;
    private int totalCost;
    private char paymentMethod;
    private LocalDate arrivalDate;
    private LocalTime arrivalTime;
    private LocalDate departureDate;
    private LocalTime departureTime;
}
