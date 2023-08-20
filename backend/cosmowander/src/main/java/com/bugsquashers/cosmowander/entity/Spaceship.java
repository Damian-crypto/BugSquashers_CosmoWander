package com.bugsquashers.cosmowander.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

    @OneToOne(mappedBy = "spaceship")
    @JsonIgnore
    private Journey journey;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="spaceship")
    private Mode mode;

    @OneToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name="cabinTypeId")
    private List<Cabin> cabin;

    public Spaceship(String spaceshipId, String spaceshipName) {
        this.spaceshipId = spaceshipId;
        this.spaceshipName = spaceshipName;
    }

    public Spaceship(String spaceshipId, String spaceshipName, Mode mode) {
        this.spaceshipId = spaceshipId;
        this.spaceshipName = spaceshipName;
        this.mode = mode;
    }

    public Spaceship(String spaceshipId, String spaceshipName, int totalSeatCapacity, int spaceshipSpeed, Mode mode) {
        this.spaceshipId = spaceshipId;
        this.spaceshipName = spaceshipName;
        this.mode = mode;
    }
}
