package com.bugsquashers.cosmowander.service;

import com.bugsquashers.cosmowander.dto.request.BookingSaveRequestDTO;

public interface BookingService {
    String saveBooking(BookingSaveRequestDTO bookingSaveRequestDTO);
}
