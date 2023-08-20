package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "spaceship")
public class Spaceship {
    @Id
    @Column(name="spaceshipId")
    private String spaceshipId;

    private String spaceshipName;
    private int totalSeatCapacity;
    private int spaceshipSpeed;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="modeId")
    private Mode mode;

    public Spaceship(String spaceshipId, String spaceshipName) {
        this.spaceshipId = spaceshipId;
        this.spaceshipName = spaceshipName;
    }

    public Spaceship(String spaceshipId, String spaceshipName, Mode mode) {
        this.spaceshipId = spaceshipId;
        this.spaceshipName = spaceshipName;
        this.mode = mode;
    }
}
