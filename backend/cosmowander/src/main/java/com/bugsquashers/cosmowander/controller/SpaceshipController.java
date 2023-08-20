package com.bugsquashers.cosmowander.controller;

import com.bugsquashers.cosmowander.entity.Spaceship;
import com.bugsquashers.cosmowander.repository.SpaceshipRepo;
import com.bugsquashers.cosmowander.service.SpaceshipService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/spaceship")
@RequiredArgsConstructor
public class SpaceshipController {

    private final SpaceshipService spaceshipService;

    @PostMapping
    public Spaceship createSpaceship(Spaceship spaceship) {
        return spaceshipService.createSpaceship(spaceship);
    }

    @GetMapping
    public List<Spaceship> getSpaceships() {
        return spaceshipService.getSpaceships();
    }
}
