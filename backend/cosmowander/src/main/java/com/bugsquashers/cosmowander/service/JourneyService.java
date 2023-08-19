package com.bugsquashers.cosmowander.service;

import com.bugsquashers.cosmowander.dto.JourneyDTO;
import com.bugsquashers.cosmowander.dto.request.JourneySaveRequestDTO;

import java.util.List;

public interface JourneyService {
    String saveJourney(JourneySaveRequestDTO journeySaveRequestDTO);

    JourneyDTO getJourneyById(int journeyId);

    List<JourneyDTO> getAllJourneys();
}
