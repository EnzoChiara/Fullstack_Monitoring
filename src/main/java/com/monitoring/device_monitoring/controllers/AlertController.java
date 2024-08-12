package com.monitoring.device_monitoring.controllers;

import com.monitoring.device_monitoring.entities.Alert;
import com.monitoring.device_monitoring.repositories.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alerts")
public class AlertController {
    @Autowired
    private AlertRepository alertRepository;

    @GetMapping
    public List<Alert> getAllAlerts() {
        return alertRepository.findAll();
    }
}

