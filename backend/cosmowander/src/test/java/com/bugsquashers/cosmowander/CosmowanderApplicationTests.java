package com.bugsquashers.cosmowander;

import com.bugsquashers.cosmowander.centralized.person.CentralizedPerson;
import com.bugsquashers.cosmowander.centralized.person.CentralizedPersonRepository;
import com.bugsquashers.cosmowander.entity.Journey;
import com.bugsquashers.cosmowander.entity.Mode;
import com.bugsquashers.cosmowander.entity.Spaceship;
import com.bugsquashers.cosmowander.repository.JourneyRepo;
import com.bugsquashers.cosmowander.repository.ModeRepo;
import com.bugsquashers.cosmowander.repository.SpaceshipRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class CosmowanderApplicationTests {

	@Autowired
	private CentralizedPersonRepository centralizedPersonRepository;

	@Autowired
	private ModeRepo modeRepo;

	@Autowired
	private SpaceshipRepo spaceshipRepo;

	@Autowired
	private JourneyRepo journeyRepo;

	private final CentralizedPerson alienJohn = new CentralizedPerson(
			"n5e4i3l2a1john",
			"John",
			"Doe",
			"MilkyWay.Earth.SriLanka.1.123123123+32.432423",
			"john.doe@universe.com",
			"43245356436545224",
			'M'
	);

	private final CentralizedPerson alienMax = new CentralizedPerson(
			"n5e4i3l2a1max",
			"Max",
			"Ten",
			"MilkyWay.Earth.USA.NY.5.2131231+2132.123123123",
			"john.doe@universe.com",
			"43245356436545228",
			'M'
	);

	@Test
	public void testCentralizedPerson() {
		centralizedPersonRepository.saveAll(List.of(alienJohn, alienMax));

		assertNotNull(centralizedPersonRepository.findById("n5e4i3l2a1max").get());
		assertNotNull(centralizedPersonRepository.findById("n5e4i3l2a1john").get());
	}

	@Test
	public void testJourney() {
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

		journeyRepo.saveAll(List.of(j1, j2, j3));
	}
}
