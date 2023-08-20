package com.bugsquashers.cosmowander.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class JourneyFilterRequestDTO {
    private int destinationId;
    private LocalDate departure;
    private int journeyMode;
}
