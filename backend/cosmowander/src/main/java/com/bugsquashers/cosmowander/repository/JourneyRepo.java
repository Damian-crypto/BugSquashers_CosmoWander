package com.bugsquashers.cosmowander.repository;

import com.bugsquashers.cosmowander.entity.Journey;
import com.bugsquashers.cosmowander.entity.Spaceship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface JourneyRepo extends JpaRepository<Journey, String> {

    @Query("SELECT j FROM Journey j WHERE j.destinationId = ?1 AND j.departure > ?2 AND j.spaceship IN (SELECT s.spaceshipId FROM Spaceship s WHERE s.mode.modeId = ?3)")
    List<Journey> findJourneyByDestinationId(int destinationId, LocalDate departure, int modeId);

    @Query("SELECT s.spaceshipId FROM Spaceship s WHERE s.mode.modeId = ?1")
    List<String> findJourneyByModeId(int modeId);
}
