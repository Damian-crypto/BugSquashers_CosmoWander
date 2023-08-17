package com.bugsquashers.cosmowander.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookingSaveRequestDTO {
    private Date bookingDate;
    private String bookingType;
}
