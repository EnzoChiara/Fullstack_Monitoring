package com.monitoring.device_monitoring.controllers;

import com.monitoring.device_monitoring.dtos.DeviceRecordDto;
import com.monitoring.device_monitoring.entities.Device;
import com.monitoring.device_monitoring.repositories.DeviceRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class DeviceController {

    @Autowired
    private DeviceRepository deviceRepository;

    @GetMapping("/devices")
    public ResponseEntity<List<Device>> getAllDevice() {
        return ResponseEntity.status(HttpStatus.OK).body(deviceRepository.findAll());
    }

    @GetMapping("/devices/{id}")
    public ResponseEntity<Object> getOneDevice(@PathVariable(value = "id") UUID id) {
        Optional<Device> deviceO = deviceRepository.findById(id);
        if (deviceO.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(deviceO.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ID não encontrado");
    }

    @PostMapping("/CreateDevices")
    public ResponseEntity<Device> saveDevice(@RequestBody @Validated DeviceRecordDto deviceRecordDto) {
        var device = new Device();
        BeanUtils.copyProperties(deviceRecordDto, device);
        return ResponseEntity.status(HttpStatus.CREATED).body(deviceRepository.save(device));
    }

    @PutMapping("/devices/{id}")
    public ResponseEntity<Object> updateDevice(@PathVariable(value = "id") UUID id,
                                               @RequestBody @Validated DeviceRecordDto deviceRecordDto) {
        Optional<Device> deviceO = deviceRepository.findById(id);
        if (deviceO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ID não encontrado");
        }
        var existingDevice = deviceO.get();

        // Copiar apenas as propriedades que foram atualizadas no DTO
        BeanUtils.copyProperties(deviceRecordDto, existingDevice, getNullPropertyNames(deviceRecordDto));

        return ResponseEntity.status(HttpStatus.OK).body(deviceRepository.save(existingDevice));
    }

    @DeleteMapping("/devices/{id}")
    public ResponseEntity<Object> deleteDevice(@PathVariable(value = "id") UUID id) {
        Optional<Device> deviceO = deviceRepository.findById(id);
        if (deviceO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ID não encontrado");
        }
        deviceRepository.delete(deviceO.get());
        return ResponseEntity.status(HttpStatus.OK).body("ID deletada com sucesso");
    }

    // Método para obter nomes de propriedades nulas no DTO
    private String[] getNullPropertyNames(DeviceRecordDto source) {
        return Arrays.stream(BeanUtils.getPropertyDescriptors(source.getClass()))
                .map(pd -> {
                    try {
                        return pd.getReadMethod().invoke(source) == null ? pd.getName() : null;
                    } catch (Exception e) {
                        return null;
                    }
                })
                .filter(Objects::nonNull)
                .toArray(String[]::new);
    }
}
