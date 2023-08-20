package com.bugsquashers.cosmowander.service.impl;

import com.bugsquashers.cosmowander.dto.JourneyDTO;
import com.bugsquashers.cosmowander.dto.request.JourneyFilterRequestDTO;
import com.bugsquashers.cosmowander.dto.request.JourneySaveRequestDTO;
import com.bugsquashers.cosmowander.entity.Journey;
import com.bugsquashers.cosmowander.entity.Mode;
import com.bugsquashers.cosmowander.entity.Spaceship;
import com.bugsquashers.cosmowander.repository.JourneyRepo;
import com.bugsquashers.cosmowander.repository.ModeRepo;
import com.bugsquashers.cosmowander.repository.SpaceshipRepo;
import com.bugsquashers.cosmowander.service.JourneyService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JourneyServiceIMPL implements JourneyService {

    private final JourneyRepo journeyRepo;
    private final SpaceshipRepo spaceshipRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<Journey> filterJourneys(JourneyFilterRequestDTO filterRequest) {
        return journeyRepo.findJourneyByDestinationId(filterRequest.getDestinationId(), filterRequest.getDeparture(), filterRequest.getJourneyMode());
    }

    @Override
    public List<String> filterJourneysByShipMode(JourneyFilterRequestDTO filterRequest) {
        return journeyRepo.findJourneyByModeId(filterRequest.getJourneyMode());
    }

    @Transactional
    public void createJourney(JourneySaveRequestDTO journeySaveRequestDTO) {
        Spaceship spaceship = spaceshipRepo.getReferenceById(journeySaveRequestDTO.getSpaceship().getSpaceshipId());

        Journey journey = new Journey();
        journey.setJourneyId(journeySaveRequestDTO.getJourneyId());
        journey.setDeparture(journeySaveRequestDTO.getDeparture());
        journey.setDestinationId(journeySaveRequestDTO.getDestinationId());
        journey.setSpaceship(spaceship);

        journeyRepo.save(journey);
    }

    @Override
    public List<Journey> getAll() {
        return journeyRepo.findAll();
    }
}
