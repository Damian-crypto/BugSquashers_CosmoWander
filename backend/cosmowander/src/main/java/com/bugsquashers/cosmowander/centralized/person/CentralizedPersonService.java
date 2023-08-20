package com.bugsquashers.cosmowander.centralized.person;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CentralizedPersonService {

    private final CentralizedPersonRepository centralizedPersonRepository;

    public CentralizedPerson getPerson(String sid) {
        return centralizedPersonRepository.findById(sid)
                .orElseThrow(() -> new IllegalStateException("There is no person with this sid(" + sid + ") in this universe! Please check for next universe."));
    }
}
