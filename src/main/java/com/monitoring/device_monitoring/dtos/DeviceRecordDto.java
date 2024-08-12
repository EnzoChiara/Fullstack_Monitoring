package com.monitoring.device_monitoring.dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record DeviceRecordDto(
         UUID id,
         String name,
         String status,
         LocalDateTime lastPing,
         String location) {
}
