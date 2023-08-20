package com.bugsquashers.cosmowander.centralized.person;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class CentralizedPersonConfig {
    @Bean
    CommandLineRunner generateAliens(CentralizedPersonRepository centralizedPersonRepository) {
        return args -> {
            CentralizedPerson alienJohn = new CentralizedPerson(
                    "n5e4i3l2a1john",
                    "John",
                    "Doe",
                    "MilkyWay.Earth.SriLanka.1.123123123+32.432423",
                    "john.doe@universe.com",
                    "43245356436545224",
                    'M'
            );

            CentralizedPerson alienMax = new CentralizedPerson(
                    "n5e4i3l2a1max",
                    "Max",
                    "Ten",
                    "MilkyWay.Earth.USA.NY.5.2131231+2132.123123123",
                    "john.doe@universe.com",
                    "43245356436545228",
                    'M'
            );

            centralizedPersonRepository.saveAll(List.of(alienJohn, alienMax));
        };
    }
}
