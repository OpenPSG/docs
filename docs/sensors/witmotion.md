# WitMotion

WitMotion Shenzhen Co., Ltd., founded in 2015 and headquartered in Shenzhen, 
China, is a technology company focused on the research, manufacturing, sales, 
and service of high‑precision orientation and positioning sensors.

## AliExpress

[WitMotion Official Store](https://witmotion-global.aliexpress.com/store/912184914)

## WT9011DCL

The WT9011DCL is a small, wireless motion sensor that uses Bluetooth to send 
real-time data about movement and orientation. It combines sensors that detect 
acceleration, rotation, and magnetic direction to provide accurate measurements 
of tilt and heading. Battery life of approximately twelve hours and it's small
physical size make it excellent for wearable applications.

The WT9011DCL is fully supported by OpenPSG as an actigraphy sensor.

<figure>
  <img src="/img/wt9011dcl.jpg" alt="WT9011DCL IMU" width="500" />
  <figcaption>WT9011DCL Inertial Measurement Unit (IMU).</figcaption>
</figure>

<figure>
  <img src="/img/wt9011dcl_pcb.jpg" alt="WT9011DCL PCB" width="500" />
  <figcaption>PCB showing Bluetooth SoC and accelerometer/magnetometers.</figcaption>
</figure>

### Issues

#### Bluetooth Connection

The WT9011DCL Bluetooth connection handshake can be unreliable and may lead to 
connection failures. Retrying the connection will resolve the issue. If still 
not working, try resetting the device. This does not effect the reliability of 
the connection once it is established.

### Mounting

#### Limb Movements

For limb movements the best solution is to use a Velcro or elastic strap
to secure the WT9011DCL to the ankle. Oreintation of the sensor is not
important.

<figure>
  <img src="/img/wt9011dcl_band.jpg" alt="WT9011DCL ankle band" width="500" />
  <figcaption>Elastic strap (30mm) for securing the sensor to an ankle.</figcaption>
</figure>

#### Trunk Position

For trunk position, the WT9011DCL can be secured with medical, or kinesiology 
tape to the upper chest or abdomen. The WT9011DCL should be mounted in an upright 
position with the label facing outwards.