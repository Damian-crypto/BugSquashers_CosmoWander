package com.bugsquashers.cosmowander.repository;

import com.bugsquashers.cosmowander.entity.Mode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModeRepo extends JpaRepository<Mode, Integer> {
}
