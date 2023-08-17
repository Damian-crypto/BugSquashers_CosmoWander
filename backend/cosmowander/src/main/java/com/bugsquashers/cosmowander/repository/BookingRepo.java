package com.bugsquashers.cosmowander.repository;

import com.bugsquashers.cosmowander.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface BookingRepo extends JpaRepository<Booking,Integer> {

}
