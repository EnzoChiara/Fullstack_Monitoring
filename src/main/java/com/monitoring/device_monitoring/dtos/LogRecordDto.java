package com.monitoring.device_monitoring.dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record LogRecordDto(
        UUID id,
        UUID deviceId,
        String message,
        LocalDateTime createdAt
) {
}
