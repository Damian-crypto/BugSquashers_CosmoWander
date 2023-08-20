package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "passenger_booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int bookingRefId;
    private String cabinType;
    private int noOfPassengers;
    private int costPerSeat;
    private int totalCost;
    private char paymentMethod;
    private int paymnetId;
    private LocalDate departureDate;
    private LocalTime departureTime;
    private Integer journeyId;
}
