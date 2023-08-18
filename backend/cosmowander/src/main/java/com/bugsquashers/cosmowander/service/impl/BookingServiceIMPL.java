package com.bugsquashers.cosmowander.service.impl;

import com.bugsquashers.cosmowander.dto.BookingDTO;
import com.bugsquashers.cosmowander.dto.request.BookingSaveRequestDTO;
import com.bugsquashers.cosmowander.dto.request.BookingUpdateDTO;
import com.bugsquashers.cosmowander.entity.Booking;
import com.bugsquashers.cosmowander.exception.NotFoundException;
import com.bugsquashers.cosmowander.repository.BookingRepo;
import com.bugsquashers.cosmowander.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class BookingServiceIMPL implements BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String deleteBooking(int bookingRefId) {
        if (bookingRepo.existsById(bookingRefId)) {
            bookingRepo.deleteById(bookingRefId);
            return "deleted successfully " + bookingRefId;
        } else {
            throw new RuntimeException("No Booking Found In That Id");
        }
    }

    @Override
    public String saveBooking(BookingSaveRequestDTO bookingSaveRequestDTO) {
        Booking booking = modelMapper.map(bookingSaveRequestDTO, Booking.class);
        if (!bookingRepo.existsById(booking.getBookingRefId())) {
            bookingRepo.save(booking);
            return booking.getBookingRefId() + " saved successfully";
        } else {
            throw new DuplicateKeyException("Already added");
        }
    }

    @Override
    public String updateBooking(BookingUpdateDTO bookingUpdateDTO) {
        if (bookingRepo.existsById(bookingUpdateDTO.getBookingRefId())) {
            Booking booking = bookingRepo.getReferenceById(bookingUpdateDTO.getBookingRefId());
            booking.setCabinType(bookingUpdateDTO.getCabinType());
            booking.setNoOfPassengers(bookingUpdateDTO.getNoOfPassengers());
            booking.setPaymentMethod(bookingUpdateDTO.getPaymentMethod());
            bookingRepo.save(booking);
            return bookingUpdateDTO.getBookingRefId() + " Updated Successfully";
        } else {
            throw new RuntimeException("No data");
        }
    }

    @Override
    public BookingDTO getBookingById(int bookingRefId) {
        if (bookingRepo.existsById(bookingRefId)) {
            Booking booking = bookingRepo.getReferenceById(bookingRefId);
            BookingDTO bookingDTO = new BookingDTO(
                    booking.getBookingRefId(),
                    booking.getCabinType(),
                    booking.getNoOfPassengers(),
                    booking.getCostPerSeat(),
                    booking.getTotalCost(),
                    booking.getPaymentMethod(),
                    booking.getDepartureDate(),
                    booking.getDepartureTime()
            );
            return bookingDTO;
        } else {
            throw new RuntimeException("No booking");
        }
    }

    @Override
    public List<BookingDTO> getAllBookings() {
        List<Booking> getAllBookings = bookingRepo.findAll();
//        if (getAllBookings().size() > 0) {
            List<BookingDTO> bookingDTOList = new ArrayList<>();
            for (Booking booking : getAllBookings) {
                BookingDTO bookingDTO = new BookingDTO(
                        booking.getBookingRefId(),
                        booking.getCabinType(),
                        booking.getNoOfPassengers(),
                        booking.getCostPerSeat(),
                        booking.getTotalCost(),
                        booking.getPaymentMethod(),
                        booking.getDepartureDate(),
                        booking.getDepartureTime()
                );
                bookingDTOList.add(bookingDTO);
            }
            return bookingDTOList;
//        }
    }
}