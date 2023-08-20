package com.bugsquashers.cosmowander.config;

import com.bugsquashers.cosmowander.entity.Journey;
import com.bugsquashers.cosmowander.entity.Mode;
import com.bugsquashers.cosmowander.entity.Spaceship;
import com.bugsquashers.cosmowander.entity.Station;
import com.bugsquashers.cosmowander.repository.JourneyRepo;
import com.bugsquashers.cosmowander.repository.ModeRepo;
import com.bugsquashers.cosmowander.repository.SpaceshipRepo;
import com.bugsquashers.cosmowander.repository.StationRepo;
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

    @Autowired
    private StationRepo stationRepo;

    @Bean
    CommandLineRunner commandLineRunner(JourneyRepo journeyRepo) {
        return args -> {
            Mode mode1 = new Mode(1, "Passenger");
            Mode mode2 = new Mode(2, "Cargo");
            Mode mode3 = new Mode(3, "Passenger & Cargo");
            Mode mode4 = new Mode(4, "Special");

            modeRepo.saveAll(List.of(mode1, mode2, mode3, mode4));

            Station s1 = new Station("1M", "Mercury");
            Station s2 = new Station("2V", "Venus");
            Station s3 = new Station("3E", "Earth");
            Station s4 = new Station("4M", "Mars");
            Station s5 = new Station("5J", "Jupiter");
            Station s6 = new Station("6S", "Saturn");
            Station s7 = new Station("7U", "Uranus");
            Station s8 = new Station("8N", "Neptune");

            stationRepo.saveAll(List.of(s1, s2, s3, s4, s5, s6, s7, s8));

            Spaceship spaceship1 = new Spaceship(
                    "SAMT334212C",
                    "Mars Expeditor",
                    50,
                    9000000,
                    mode1
            );

            Spaceship spaceship2 = new Spaceship(
                    "SAKET311212C",
                    "Saturn Spectacular",
                    30,
                    8000000,
                    mode2
            );

            Spaceship spaceship3 = new Spaceship(
                    "HKKET319912C",
                    "Jupiter Retreat",
                    40,
                    9000000,
                    mode3
            );

            Spaceship spaceship4 = new Spaceship(
                    "POEET317712C",
                    "Red Planet Retreat",
                    28,
                    9000000,
                    mode4
            );

//            Spaceship spaceship5 = new Spaceship(
//                    "SAKET314452C",
//                    "Meteor Magic",
//                    70,
//                    9000000,
//                    mode4
//            );

            spaceshipRepo.saveAll(List.of(spaceship1, spaceship2, spaceship3, spaceship4));


            Journey j1 = new Journey(
                    "j1",
                    LocalDate.of(2321, 1, 2),
                    1,
                    spaceship1
            );
            j1.setStation(List.of(s1, s2, s3, s4));

            Journey j2 = new Journey(
                    "j2",
                    LocalDate.of(2161, 1, 2),
                    2,
                    spaceship2
            );
            j2.setStation(List.of(s1, s4, s5, s4));

            Journey j3 = new Journey(
                    "j3",
                    LocalDate.of(2165, 5, 6),
                    3,
                    spaceship3
            );
            j3.setStation(List.of(s1, s4, s5));

            Journey j4 = new Journey(
                    "j4",
                    LocalDate.of(2145, 5, 6),
                    3,
                    spaceship4
            );
            j4.setStation(List.of(s3, s4, s5));

            journeyRepo.saveAll(List.of(j1, j2, j3, j4));
        };
    }
}
