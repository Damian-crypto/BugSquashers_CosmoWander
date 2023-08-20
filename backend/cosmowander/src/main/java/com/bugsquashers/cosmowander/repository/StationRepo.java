package com.bugsquashers.cosmowander.repository;

import com.bugsquashers.cosmowander.entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StationRepo extends JpaRepository<Station, String> {
}
