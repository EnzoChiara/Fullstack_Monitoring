package com.monitoring.device_monitoring.repositories;

import com.monitoring.device_monitoring.entities.Alert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface AlertRepository extends JpaRepository<Alert, UUID> {}
