basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
basic.forever(function () {
    if (input.lightLevel() < 5) {
        cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 255, 255, 255)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 0, 0, 0)
    }
    basic.pause(1000)
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(20, 10)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(10, 20)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(20, 20)
    }
})
