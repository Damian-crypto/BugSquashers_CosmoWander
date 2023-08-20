package com.bugsquashers.cosmowander.controller;

import com.bugsquashers.cosmowander.dto.BookingDTO;
import com.bugsquashers.cosmowander.dto.request.BookingSaveRequestDTO;
import com.bugsquashers.cosmowander.dto.request.BookingUpdateDTO;
import com.bugsquashers.cosmowander.service.BookingService;
import com.bugsquashers.cosmowander.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping(
            path = "/get-by-id",
            params = "id"
    )
    public BookingDTO getBookingById(@RequestParam(value = "id") int bookingRefId){
        BookingDTO bookingDTO = bookingService.getBookingById(bookingRefId);
        return bookingDTO;
    }

    @GetMapping(
            path = "/get-all-bookings"
    )
    public ResponseEntity<StandardResponse> getAllBookings(){
        List<BookingDTO> allBookings = bookingService.getAllBookings();
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200,"Success",allBookings),
                HttpStatus.OK
        );
    }

    @DeleteMapping(
            path = "/delete-booking/{id}"
    )
    public String deleteBooking(@PathVariable(value = "id") int bookingRefId){
        String deleted = bookingService.deleteBooking(bookingRefId);
        return deleted;
    }

    @PutMapping("/update")
    public String updateBooking(@RequestBody BookingUpdateDTO bookingUpdateDTO){
        String message = bookingService.updateBooking(bookingUpdateDTO);
        return message;
    }
}
