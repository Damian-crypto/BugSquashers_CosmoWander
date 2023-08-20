package com.bugsquashers.cosmowander.service;

import com.bugsquashers.cosmowander.entity.Spaceship;

import java.util.List;

public interface SpaceshipService {

    public Spaceship createSpaceship(Spaceship spaceship);

    public List<Spaceship> getSpaceships();
}
