let Anzahl_der_Schritte = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Anzahl_der_Schritte)
    basic.pause(1000)
    basic.showNumber(Anzahl_der_Schritte * 7)
})
input.onGesture(Gesture.Shake, function () {
    if (input.acceleration(Dimension.Strength) < 1000) {
        Anzahl_der_Schritte += 1
        basic.showNumber(Anzahl_der_Schritte)
    }
})
input.onButtonPressed(Button.B, function () {
    Anzahl_der_Schritte = 0
})
