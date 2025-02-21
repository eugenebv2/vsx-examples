#!/usr/bin/env nodejs
////////////////////////////////////////
//	blinkLED.js
//      Blinks the USR LEDs and P9_14.
//	Wiring:	P9_14 connects to the plus lead of an LED.  The negative lead of the
//			LED goes to a 220 Ohm resistor.  The other lead of the resistor goes
//			to ground.
//	Setup:	
//	See:	
////////////////////////////////////////
const fs = require("fs");

// Look up P9.14 using show-pins.  gpio1.18 maps to 50
pin="50";
pin_in = "51";

GPIOPATH="/sys/class/gpio/";
// Make sure pin is exported
if(!fs.existsSync(GPIOPATH+"gpio"+pin)) {
    fs.writeFileSync(GPIOPATH+"export", pin);
}
if(!fs.existsSync(GPIOPATH+"gpio"+pin_in)) {
    fs.writeFileSync(GPIOPATH+"export", pin_in);
}
// Make it an output pin
fs.writeFileSync(GPIOPATH+"gpio"+pin+"/direction", "out");
// Make it an input pin
fs.writeFileSync(GPIOPATH+"gpio"+pin_in+"/direction", "in");

// Blink every 500ms
setInterval(toggle, 500);

state="1";
function toggle() {
    fs.writeFileSync(GPIOPATH+"gpio"+pin+"/value", state);
    in_status = fs.readFileSync(GPIOPATH+"gpio"+pin_in+"/value");
    if(state == "0") {
        state = "1";
    } else {
        state = "0";
    }
    
}
