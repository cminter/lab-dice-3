function resetGame () {
    prevRoll = 0
    playing = 1
}
function showRoll (roll: number) {
    if (roll == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (roll == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (roll == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (roll == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (roll == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (roll == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
}
function showWin (die1: number, die2: number) {
    while (playing == 0) {
        basic.showIcon(IconNames.Fabulous)
        showRoll(die1)
        showRoll(die2)
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    resetGame()
    while (!(input.isGesture(Gesture.ScreenUp))) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (playing == 1) {
        roll = randint(1, 6)
        showRoll(roll)
        if (prevRoll + roll == 7) {
            playing = 0
            showWin(prevRoll, roll)
        }
        prevRoll = roll
    }
})
let roll = 0
let playing = 0
let prevRoll = 0
resetGame()
basic.showString("Dice 7")
