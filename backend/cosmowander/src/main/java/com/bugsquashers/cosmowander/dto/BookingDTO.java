package com.bugsquashers.cosmowander.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookingDTO {
    private int bookingRefId;
    private String cabinType;
    private int noOfPassengers;
    private int costPerSeat;
    private int totalCost;
    private char paymentMethod;
    private LocalDate departureDate;
    private LocalTime departureTime;
}
