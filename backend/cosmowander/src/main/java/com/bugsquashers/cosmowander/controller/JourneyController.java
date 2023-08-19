package com.bugsquashers.cosmowander.controller;

import com.bugsquashers.cosmowander.dto.JourneyDTO;
import com.bugsquashers.cosmowander.dto.request.JourneySaveRequestDTO;
import com.bugsquashers.cosmowander.service.JourneyService;
import com.bugsquashers.cosmowander.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/journey")
@CrossOrigin
public class JourneyController {
    @Autowired
    private JourneyService journeyService;

    @PostMapping("/save")
    public ResponseEntity<StandardResponse> saveJourney(@RequestBody JourneySaveRequestDTO journeySaveRequestDTO){
        String id = journeyService.saveJourney(journeySaveRequestDTO);

        return new ResponseEntity<StandardResponse>(
                new StandardResponse(201,"Success",id),
                HttpStatus.CREATED
        );
    }

    @GetMapping(
            path = "/get-by-id",
            params = "id"
    )
    public JourneyDTO getJourneyById(@RequestParam(value = "id") int journeyId){
        JourneyDTO journeyDTO = journeyService.getJourneyById(journeyId);
        return journeyDTO;
    }

    @GetMapping(
            path = "/get-all-journeys"
    )
    public ResponseEntity<StandardResponse> getAllJourneys(){
        List<JourneyDTO> allJourneys = journeyService.getAllJourneys();
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200,"Success",allJourneys),
                HttpStatus.OK
        );
    }
}
