package com.bugsquashers.cosmowander.auth;

import com.bugsquashers.cosmowander.centralized.person.CentralizedPerson;
import com.bugsquashers.cosmowander.centralized.person.CentralizedPersonService;
import com.bugsquashers.cosmowander.config.JwtService;
import com.bugsquashers.cosmowander.user.Role;
import com.bugsquashers.cosmowander.user.User;
import com.bugsquashers.cosmowander.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repo;
    private final CentralizedPersonService centralizedPersonService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegistrationRequest req) {

        CentralizedPerson person = centralizedPersonService.getPerson(req.getSid());

        User user = User.builder()
                .firstName(person.getFirstName())
                .lastName(person.getLastName())
                .email(person.getEmailAddress())
                .location(person.getLocation())
                .sid(req.getSid())
                .role(Role.USER)
                .build();

        repo.save(user);

        String jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder().jwtToken(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest req) {

        CentralizedPerson person = centralizedPersonService.getPerson(req.getSid());

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(person.getEmailAddress(), req.getSid())
        );

        User user = repo.findBySid(req.getSid()).orElseThrow(() -> new IllegalStateException("Invalid sid: " + req.getSid()));

        String jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder().jwtToken(jwtToken).build();
    }
}
