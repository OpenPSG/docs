# Snore Microphone

The Snore Microphone is a driver that allows capturing low-frequency audio data 
from a microphone designed to detect snoring.

It uses the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) for audio processing and analysis.

Audio data is downsampled to 500 Hz to focus on low-frequency sounds typical of 
snoring. You will need to ensure that the microphone is capable of capturing
the required frequency range (internal microphones often have very limited 
low-frequency sensitivity).

## Source

[GitHub - OpenPSG/OpenPSG](https://github.com/OpenPSG/OpenPSG/blob/main/src/lib/drivers/snore-mic.ts)

### Implementation Details

Frequency band: 20 Hz to 250 Hz (with optional mains hum filter).

## Supported Sensors

### The t.bone SC400

The cheapest option on the market is probably Thomann's t.bone SC400, which is a
large-diaphragm condenser microphone (25mm). It has an integrated low-cut filter
at 100Hz, but this can be disabled by unscrewing the microphone case and toggling 
a switch.

You will need a USB audio interface (with 48v phantom power) to connect it to 
your computer. A very affordable, but sufficient option (albeit rather cheaply 
made) is the Behringer U-Phoria UM2, also available at Thomann.