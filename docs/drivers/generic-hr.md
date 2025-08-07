# Generic Heart Rate

This is a generic driver for Bluetooth Low Energy (BLE) heart rate monitors that 
implement the standard [Heart Rate Service (UUID: 0x180D)](https://www.bluetooth.com/specifications/specs/heart-rate-service-1-0/). 
It supports real-time heart rate measurement, optional heart rate variability (HRV) 
analysis, and sensor metadata such as contact status and energy expenditure.

## Source

[GitHub - OpenPSG/OpenPSG](https://github.com/OpenPSG/OpenPSG/blob/main/src/lib/drivers/generic-hr.ts)

## Supported Sensors

This driver is designed to work with any BLE heart rate sensor that conforms to the standard Heart Rate Service, including:

- ✅ COOSPO H9Z

Other compatible devices may include:

- Polar H10

  *(Note: not all tested yet—support depends on BLE spec compliance.)*