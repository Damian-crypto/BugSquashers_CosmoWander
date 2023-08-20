package com.bugsquashers.cosmowander.config;

import com.bugsquashers.cosmowander.entity.Journey;
import com.bugsquashers.cosmowander.entity.Mode;
import com.bugsquashers.cosmowander.entity.Spaceship;
import com.bugsquashers.cosmowander.repository.JourneyRepo;
import com.bugsquashers.cosmowander.repository.ModeRepo;
import com.bugsquashers.cosmowander.repository.SpaceshipRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class JourneyConfig {

    @Autowired
    private ModeRepo modeRepo;

    @Autowired
    private SpaceshipRepo spaceshipRepo;

    @Bean
    CommandLineRunner commandLineRunner(JourneyRepo journeyRepo) {
        return args -> {
            Mode mode1 = new Mode(1, "Passenger");
            Mode mode2 = new Mode(2, "Cargo");
            Mode mode3 = new Mode(3, "Passenger & Cargo");
            Mode mode4 = new Mode(4, "Special");

            modeRepo.saveAll(List.of(mode1, mode2, mode3, mode4));

            Spaceship spaceship1 = new Spaceship(
                    "sp1",
                    "Mars Expeditor",
                    new Mode(
                            1,
                            "Passenger"
                    )
            );

            Spaceship spaceship2 = new Spaceship(
                    "sp2",
                    "Jupiter Retreat",
                    new Mode(
                            2,
                            "Cargo"
                    )
            );

            Spaceship spaceship3 = new Spaceship(
                    "sp3",
                    "Jupiter Retreat",
                    new Mode(
                            4,
                            "Special"
                    )
            );

            spaceshipRepo.saveAll(List.of(spaceship1, spaceship2, spaceship3));


            Journey j1 = new Journey(
                    "j1",
                    LocalDate.of(2321, 1, 2),
                    1,
                    new Spaceship(
                            "sp1",
                            "Mars Expeditor",
                            new Mode(
                                    1,
                                    "Passenger"
                            )
                    )
            );

            Journey j2 = new Journey(
                    "j2",
                    LocalDate.of(2161, 1, 2),
                    2,
                    new Spaceship(
                            "sp2",
                            "Jupiter Retreat",
                            new Mode(
                                    2,
                                    "Cargo"
                            )
                    )
            );

            Journey j3 = new Journey(
                    "j3",
                    LocalDate.of(2165, 5, 6),
                    3,
                    new Spaceship(
                            "sp3",
                            "Saturn Spectacular",
                            new Mode(
                                    3,
                                    "Passenger & Cargo"
                            )
                    )
            );

            Journey j4 = new Journey(
                    "j4",
                    LocalDate.of(2145, 5, 6),
                    3,
                    null
            );

            journeyRepo.saveAll(List.of(j1, j2, j3, j4));
        };
    }
}
