package com.bugsquashers.cosmowander.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookingUpdateDTO {
    private int bookingRefId;
    private String cabinType;
    private int noOfPassengers;
    private char paymentMethod;
    private LocalDate departureDate;
    private LocalTime departureTime;
}
