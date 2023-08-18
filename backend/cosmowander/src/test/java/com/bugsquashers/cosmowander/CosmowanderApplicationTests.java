package com.bugsquashers.cosmowander;

import com.bugsquashers.cosmowander.centralized.person.CentralizedPerson;
import com.bugsquashers.cosmowander.centralized.person.CentralizedPersonRepository;
import com.bugsquashers.cosmowander.user.User;
import com.bugsquashers.cosmowander.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class CosmowanderApplicationTests {

	@Autowired
	private CentralizedPersonRepository centralizedPersonRepository;

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
}
