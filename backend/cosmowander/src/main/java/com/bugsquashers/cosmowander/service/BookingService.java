package com.bugsquashers.cosmowander.service;

import com.bugsquashers.cosmowander.dto.BookingDTO;
import com.bugsquashers.cosmowander.dto.request.BookingSaveRequestDTO;
import com.bugsquashers.cosmowander.dto.request.BookingUpdateDTO;

import java.util.List;

public interface BookingService {

    String deleteBooking(int bookingRefId);

    String saveBooking(BookingSaveRequestDTO bookingSaveRequestDTO);

    String updateBooking(BookingUpdateDTO bookingUpdateDTO);

    BookingDTO getBookingById(int bookingRefId);

    List<BookingDTO> getAllBookings();
}
