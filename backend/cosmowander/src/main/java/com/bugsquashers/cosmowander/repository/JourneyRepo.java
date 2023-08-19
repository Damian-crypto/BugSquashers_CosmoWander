package com.bugsquashers.cosmowander.repository;

import com.bugsquashers.cosmowander.entity.Journey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JourneyRepo extends JpaRepository<Journey,Integer> {
}
