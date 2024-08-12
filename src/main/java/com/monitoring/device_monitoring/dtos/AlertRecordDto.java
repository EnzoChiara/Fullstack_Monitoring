package com.monitoring.device_monitoring.dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record AlertRecordDto(
        UUID id,
        UUID deviceId,
        String alertType,
        String message, //
        Boolean triggered,
        LocalDateTime createdAt
) {
}
