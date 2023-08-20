package com.bugsquashers.cosmowander.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookingSaveRequestDTO {
    private String cabinType;
    private int noOfPassengers;
    private int totalCost;
    private char paymentMethod;
    private LocalDate departureDate;
    private LocalTime departureTime;
    private Integer journeyId;
}
