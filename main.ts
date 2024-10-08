/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen
 * Created on: Oct 2024
 * This program Change color RGB LED
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)

    // Green light
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(3000)

    // Yellow light 
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(2000)

    // Red light
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.pause(3000)

    // Clear the screen after the sequence
    basic.clearScreen()

})