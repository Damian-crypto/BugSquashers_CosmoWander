package com.bugsquashers.cosmowander.repository;

import com.bugsquashers.cosmowander.entity.Spaceship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpaceshipRepo extends JpaRepository<Spaceship, String> {

}
