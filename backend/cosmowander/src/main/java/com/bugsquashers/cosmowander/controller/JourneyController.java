package com.bugsquashers.cosmowander.controller;

import com.bugsquashers.cosmowander.dto.JourneyDTO;
import com.bugsquashers.cosmowander.dto.request.JourneyFilterRequestDTO;
import com.bugsquashers.cosmowander.dto.request.JourneySaveRequestDTO;
import com.bugsquashers.cosmowander.entity.Journey;
import com.bugsquashers.cosmowander.entity.Spaceship;
import com.bugsquashers.cosmowander.service.JourneyService;
import com.bugsquashers.cosmowander.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/journey")
@CrossOrigin
@RequiredArgsConstructor
public class JourneyController {

    private final JourneyService journeyService;

    @GetMapping
    public List<Journey> getJourneys() {
        return journeyService.getAll();
    }

    @GetMapping("/filter")
    public List<Journey> getFilteredJourneys(@RequestBody JourneyFilterRequestDTO journeyReq) {
        return journeyService.filterJourneys(journeyReq);
    }

    @GetMapping("/{journeyId}")
    public Journey getJourneyById(@PathVariable String journeyId) {
        return journeyService.getJourneyById(journeyId);
    }

    @GetMapping("/ship/mode")
    public List<String> getJourneysByMode(@RequestBody JourneyFilterRequestDTO journeyReq) {
        return journeyService.filterJourneysByShipMode(journeyReq);
    }

    @PostMapping
    public void createJourney(@RequestBody JourneySaveRequestDTO journeySaveRequestDTO) {
        journeyService.createJourney(journeySaveRequestDTO);
    }

//    @PostMapping("/save")
//    public ResponseEntity<StandardResponse> saveJourney(@RequestBody JourneySaveRequestDTO journeySaveRequestDTO){
//        String id = journeyService.saveJourney(journeySaveRequestDTO);
//
//        return new ResponseEntity<StandardResponse>(
//                new StandardResponse(201,"Success",id),
//                HttpStatus.CREATED
//        );
//    }
}
