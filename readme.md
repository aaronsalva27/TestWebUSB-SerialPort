Test WebUsb-SerialPort
==========

Test de Webusb con standard firmata.js, comunicacion serial.

Requisitos: tener funcionando Webusb en chrome (habilitar flags, tener normas udev para habilitar los permisos del dispositivo usb, instalar firmata con incorporacion de las librerias webusb modificadas como en la demo de Arduino...)

Make sure the "Experimental Web Platform Features" flag is enabled in chrome://flags/#enable-experimental-web-platform-features.
Install at least version 1.6.11 of the Arduino IDE.
The WebUSB library provides all the extra low-level USB code necessary for WebUSB support except for one thing: Your device must be upgraded from USB 2.0 to USB 2.1. To do this go into the SDK installation directory and open hardware/arduino/avr/cores/arduino/USBCore.h. Then find the line #define USB_VERSION 0x200 and change 0x200 to 0x210. That's it!
Copy (or symlink) the library/WebUSB directory from this repository into the libraries folder in your sketchbooks directory.
Launch the Arduino IDE. You should see "WebUSB" as an option under "Sketch > Include Library".
Load up demos/rgb/sketch/sketch.ino and program it to your device.
When the sketch is finished uploading you should see a notification from Chrome: "Go to https://webusb.github.io/arduino/demos/ to connect." Try it out!

+ Cargar sketch a arduino
+ Desplegar la carpeta en lite-server o apache



