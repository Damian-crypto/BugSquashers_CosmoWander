package com.bugsquashers.cosmowander.entity;

import jakarta.persistence.Id;

public class JourneyStationId {
    private Journey journey;
    private String stationId;

    public JourneyStationId(Journey journey, String stationId) {
        this.journey = journey;
        this.stationId = stationId;
    }
}
