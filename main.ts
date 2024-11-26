radio.onReceivedNumber(function (receivedNumber) {
    rock_paper_sisors = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    steen_papier_schaar = 1
})
input.onButtonPressed(Button.AB, function () {
    steen_papier_schaar = 3
})
input.onButtonPressed(Button.B, function () {
    steen_papier_schaar = 2
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("player 2", steen_papier_schaar)
})
let steen_papier_schaar = 0
let rock_paper_sisors = 0
radio.setGroup(13)
basic.forever(function () {
    if (rock_paper_sisors == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (rock_paper_sisors == 2) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (rock_paper_sisors == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    }
})
