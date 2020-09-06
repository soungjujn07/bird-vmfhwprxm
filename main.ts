input.onButtonPressed(Button.A, function () {
    radio.sendString("a")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("ab")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "a") {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (receivedString == "ab") {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("b")
})
radio.setGroup(1)
basic.forever(function () {
	
})
