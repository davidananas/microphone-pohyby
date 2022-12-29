input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    kitronik_servo_lite.backward()
})
input.onSound(DetectedSound.Loud, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    kitronik_servo_lite.forward()
})
input.onSound(DetectedSound.Quiet, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    kitronik_servo_lite.stop()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    kitronik_servo_lite.stop()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
	
})
