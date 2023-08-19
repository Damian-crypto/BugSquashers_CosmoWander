package com.bugsquashers.cosmowander.service.impl;
import com.bugsquashers.cosmowander.dto.JourneyDTO;
import com.bugsquashers.cosmowander.dto.request.JourneySaveRequestDTO;
import com.bugsquashers.cosmowander.entity.Journey;
import com.bugsquashers.cosmowander.repository.JourneyRepo;
import com.bugsquashers.cosmowander.service.JourneyService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JourneyServiceIMPL implements JourneyService {

    @Autowired
    private JourneyRepo journeyRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String saveJourney(JourneySaveRequestDTO journeySaveRequestDTO) {
        Journey journey = modelMapper.map(journeySaveRequestDTO, Journey.class);
        if (!journeyRepo.existsById(journey.getJourneyId())) {
            journeyRepo.save(journey);
            return journey.getJourneyId() + " saved successfully";
        } else {
            throw new DuplicateKeyException("Already added");
        }
    }

    @Override
    public JourneyDTO getJourneyById(int journeyId) {
        if (journeyRepo.existsById(journeyId)) {
            Journey journey = journeyRepo.getReferenceById(journeyId);
            JourneyDTO journeyDTO = new JourneyDTO(
                    journey.getJourneyId(),
                    journey.getStartingStationId(),
                    journey.getStartingDate(),
                    journey.getStartingTime(),
                    journey.getStationId(),
                    journey.getArrivalDate(),
                    journey.getDuration(),
                    journey.getDistance(),
                    journey.getNoOfPassengers(),
                    journey.getNoOfInterchanges(),
                    journey.getTotalCost(),
                    journey.getWeight(),
                    journey.getDepartureDate(),
                    journey.getDepartureTime()
            );
            return journeyDTO;
        } else {
            throw new RuntimeException("No journey");
        }
    }

    @Override
    public List<JourneyDTO> getAllJourneys() {
        List<Journey> getAllJourneys = journeyRepo.findAll();
        List<JourneyDTO> journeyDTOList = new ArrayList<>();
        for (Journey journey : getAllJourneys) {
            JourneyDTO journeyDTO = new JourneyDTO(
                    journey.getJourneyId(),
                    journey.getStartingStationId(),
                    journey.getStartingDate(),
                    journey.getStartingTime(),
                    journey.getStationId(),
                    journey.getArrivalDate(),
                    journey.getDuration(),
                    journey.getDistance(),
                    journey.getNoOfPassengers(),
                    journey.getNoOfInterchanges(),
                    journey.getTotalCost(),
                    journey.getWeight(),
                    journey.getDepartureDate(),
                    journey.getDepartureTime()
            );
            journeyDTOList.add(journeyDTO);
        }
        return journeyDTOList;
//        }
    }
}
