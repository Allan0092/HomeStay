package com.example.homestay.controller;

import com.example.homestay.dto.AuthenticateRequest;
import com.example.homestay.dto.AuthenticateResponse;
import com.example.homestay.service.AuthenticateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthenticateController {

    private final AuthenticateService authenticateService;

    @PostMapping("/authenticate")
    public AuthenticateResponse authenticate(@RequestBody AuthenticateRequest authenticateRequest) {

        return authenticateService.authenticate(authenticateRequest);
    }

}
