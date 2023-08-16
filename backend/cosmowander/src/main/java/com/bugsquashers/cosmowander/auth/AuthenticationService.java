package com.bugsquashers.cosmowander.auth;

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
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(DTORegister req) {
        User user = User.builder()
                .name(req.getName())
                .email(req.getEmail())
                .password(passwordEncoder.encode(req.getPassword()))
                .role(Role.USER)
                .build();

        repo.save(user);

        String jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder().jwtToken(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest req) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword())
        );

        User user = repo.findByEmail(req.getEmail()).orElseThrow();

        String jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder().jwtToken(jwtToken).build();
    }
}
