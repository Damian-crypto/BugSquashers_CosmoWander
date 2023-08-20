package com.bugsquashers.cosmowander.service.impl;

import com.bugsquashers.cosmowander.entity.Spaceship;
import com.bugsquashers.cosmowander.repository.SpaceshipRepo;
import com.bugsquashers.cosmowander.service.SpaceshipService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SpaceshipServiceIMPL implements SpaceshipService {

    private final SpaceshipRepo spaceshipRepo;
    public Spaceship createSpaceship(Spaceship spaceship) {
        return spaceshipRepo.save(spaceship);
    }

    @Override
    public List<Spaceship> getSpaceships() {
        return spaceshipRepo.findAll();
    }
}
