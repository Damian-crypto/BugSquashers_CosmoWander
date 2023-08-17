package com.bugsquashers.cosmowander.controller;

import com.bugsquashers.cosmowander.dto.request.BookingSaveRequestDTO;
import com.bugsquashers.cosmowander.service.BookingService;
import com.bugsquashers.cosmowander.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/booking")
@CrossOrigin
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping("/save")
    public ResponseEntity<StandardResponse> saveBooking(@RequestBody BookingSaveRequestDTO bookingSaveRequestDTO){
        String id = bookingService.saveBooking(bookingSaveRequestDTO);

        return new ResponseEntity<StandardResponse>(
                new StandardResponse(201,"Success",id),
                HttpStatus.CREATED
        );
    }


}
