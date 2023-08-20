package com.bugsquashers.cosmowander.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "mode")
public class Mode {
    @Id
    @Column(name="modeId")
    private Integer modeId;

    private String modeName;

    @OneToOne(mappedBy = "mode")
    @JsonIgnore
    private Spaceship spaceship;

    public Mode(int modeId, String modeName) {
        this.modeId = modeId;
        this.modeName = modeName;
    }
}