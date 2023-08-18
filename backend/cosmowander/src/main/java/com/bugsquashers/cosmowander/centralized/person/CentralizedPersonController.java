package com.bugsquashers.cosmowander.centralized.person;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(path="/api/v1/universe")
public class CentralizedPersonController {

    private final CentralizedPersonService centralizedPersonService;

    @GetMapping(path="{personId}")
    public CentralizedPerson getPerson(@PathVariable("personId") String sid) {
        return centralizedPersonService.getPerson(sid);
    }
}
