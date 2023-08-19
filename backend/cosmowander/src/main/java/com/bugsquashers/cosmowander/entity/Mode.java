package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "mode")
public class Mode {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String modeId;
    private String modeName;
}