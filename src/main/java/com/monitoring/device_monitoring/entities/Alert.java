package com.monitoring.device_monitoring.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "alert")
public class Alert {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "CHAR(36)")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "device_id", nullable = false)
    private Device device;

    @Enumerated(EnumType.STRING)
    @Column(name = "alert_type", nullable = false)
    private AlertType alertType;

    @Column(name = "message", nullable = false)
    private String message;

    @Column(name = "triggered", nullable = false)
    private Boolean triggered;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;


    public enum AlertType {
        FAILURE, OFFLINE, ONLINE
    }
}
