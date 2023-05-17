input.onButtonPressed(Button.A, function () {
    kitronik_servo_lite.backward()
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.showArrow(ArrowNames.South)
})
input.onSound(DetectedSound.Loud, function () {
    kitronik_servo_lite.forward()
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showArrow(ArrowNames.North)
})
input.onSound(DetectedSound.Quiet, function () {
    kitronik_servo_lite.stop()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    kitronik_servo_lite.stop()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
	
})
