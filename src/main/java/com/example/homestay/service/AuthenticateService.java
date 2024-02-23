package com.example.homestay.service;

import com.example.homestay.dto.AuthenticateRequest;
import com.example.homestay.dto.AuthenticateResponse;
public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
