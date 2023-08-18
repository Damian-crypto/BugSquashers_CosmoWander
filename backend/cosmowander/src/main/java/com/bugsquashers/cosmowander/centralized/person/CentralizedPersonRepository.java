package com.bugsquashers.cosmowander.centralized.person;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CentralizedPersonRepository extends JpaRepository<CentralizedPerson, String> {
}
