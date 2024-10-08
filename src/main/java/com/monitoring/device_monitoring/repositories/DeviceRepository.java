package com.monitoring.device_monitoring.repositories;

import com.monitoring.device_monitoring.entities.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface DeviceRepository extends JpaRepository<Device, UUID> {}
