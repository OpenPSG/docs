# Browser Support

## Browser Compatibility

OpenPSG relies on the [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) 
to communicate with sensors.

Web Bluetooth is only supported by Chromium based browsers such as:

- [Google Chrome](https://www.google.com/chrome/)
- [Microsoft Edge](https://www.microsoft.com/en-us/edge)
- [Opera](https://www.opera.com/)

**Other browsers such as Firefox, Safari, and Internet Explorer cannot be used with OpenPSG.**

## Operating Systems

Web Bluetooth will work out of the box on most modern operating systems, including:

- Android
- Chrome OS
- Linux<sup>*</sup>
- Mac
- Windows

### Enabling on Linux

On Linux, you will need to manually enable Web Bluetooth support in Chromium 
based browsers. This is behind a feature flag due to historical compatibility 
issues with the Linux Bluetooth stack, however this should not be an issue on 
modern distributions.

To enable Web Bluetooth on Linux, follow these steps:

1. Open your Chromium based browser.
2. Navigate to `chrome://flags/#enable-web-bluetooth`.
3. Enable the "Web Bluetooth" flag.
4. Restart your browser.