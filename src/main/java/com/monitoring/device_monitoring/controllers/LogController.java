package com.monitoring.device_monitoring.controllers;

import com.monitoring.device_monitoring.entities.Log;
import com.monitoring.device_monitoring.repositories.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/devices/{deviceId}/logs")
public class LogController {
    @Autowired
    private LogRepository logRepository;

    @GetMapping
    public List<Log> getLogsByDeviceId(@PathVariable UUID deviceId) {
        return logRepository.findByDeviceId(deviceId);
    }
}

