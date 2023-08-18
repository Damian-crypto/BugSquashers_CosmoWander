package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "cabin")
public class Cabin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String cabinTypeId;
    private int noOfSeatsOfCabin;
    private int costOfaSeat;
    private int remainingSeats;
    private String cabinName;
    private String cabinDescription;
}
