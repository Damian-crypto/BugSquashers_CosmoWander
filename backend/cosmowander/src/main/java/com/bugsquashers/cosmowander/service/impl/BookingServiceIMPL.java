package com.bugsquashers.cosmowander.service.impl;

import com.bugsquashers.cosmowander.dto.request.BookingSaveRequestDTO;
import com.bugsquashers.cosmowander.entity.Booking;
import com.bugsquashers.cosmowander.repository.BookingRepo;
import com.bugsquashers.cosmowander.service.BookingService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class BookingServiceIMPL implements BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String saveBooking(BookingSaveRequestDTO bookingSaveRequestDTO) {
        Booking booking = modelMapper.map(bookingSaveRequestDTO,Booking.class);
        if(!bookingRepo.existsById(booking.getBookingId())){
            bookingRepo.save(booking);
            return booking.getBookingType()+"saved successfully";
        }else{
            throw new DuplicateKeyException("Already added");
        }
    }
}
