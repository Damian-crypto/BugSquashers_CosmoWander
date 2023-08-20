package com.bugsquashers.cosmowander.service;

import com.bugsquashers.cosmowander.dto.JourneyDTO;
import com.bugsquashers.cosmowander.dto.request.JourneyFilterRequestDTO;
import com.bugsquashers.cosmowander.dto.request.JourneySaveRequestDTO;
import com.bugsquashers.cosmowander.entity.Journey;
import com.bugsquashers.cosmowander.entity.Spaceship;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface JourneyService {

    List<Journey> filterJourneys(JourneyFilterRequestDTO filterRequest);

    List<String> filterJourneysByShipMode(JourneyFilterRequestDTO filterRequest);

    List<Journey> getAll();

//    String saveJourney(JourneySaveRequestDTO journeySaveRequestDTO);

    void createJourney(JourneySaveRequestDTO journeySaveRequestDTO);

    Journey getJourneyById(String journeyId);
}
