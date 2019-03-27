'use strict'
//let red = 127
//let green = 127
//let blue = 127
let newRgb
let newRgba
let answer = 0
let display = ''
let input
let button
//Daniel Miller helped me get started on 
function addValueToDisplay(input) {
    display += input
    console.log(display)
    return display
}
function doTheMath(display) {
    answer = eval(display)
    document.querySelector('.display').innerText = answer
    return answer
}
function changeButtonColor(button) {
    console.log(newRgb)
    if (button === '.button0') {
        newRgb = "rgb(119, 255, 255)"
        console.log(newRgb)
        return document.body.style.backgroundColor = newRgb
    }
}


document.querySelector('.button0').addEventListener('click', function (event) {
    button = '.button0'
    changeButtonColor(button)
    console.log("pushed 0 button", 0)
    document.querySelector('.display').innerText += 0
    input = 0
    addValueToDisplay(input)

},)
document.querySelector('.button1').addEventListener('click', function (event) {
    newRgb = "rgb(127, 255, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(1)
    document.querySelector('.display').innerText += 1
    input = 1
    addValueToDisplay(input)
})
document.querySelector('.button2').addEventListener('click', function (event) {
    newRgb = "rgb(119, 119, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(2)
    document.querySelector('.display').innerText += 2
    input = 2
    addValueToDisplay(input)
})
document.querySelector('.button3').addEventListener('click', function (event) {
    newRgb = "rgb(119, 119, 119)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(3)
    document.querySelector('.display').innerText += 3
    input = 3
    addValueToDisplay(input)
})
document.querySelector('.button4').addEventListener('click', function (event) {
    newRgb = "rgb(63, 255, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(4)
    document.querySelector('.display').innerText += 4
    input = 4
    addValueToDisplay(input)
})
document.querySelector('.button5').addEventListener('click', function (event) {
    newRgb = "rgb(63, 63, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(5)
    document.querySelector('.display').innerText += 5
    input = 5
    addValueToDisplay(input)
})
document.querySelector('.button6').addEventListener('click', function (event) {
    newRgb = "rgb(63, 63, 63)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(6)
    document.querySelector('.display').innerText += 6
    input = 6
    addValueToDisplay(input)
})
document.querySelector('.button7').addEventListener('click', function (event) {
    newRgb = "rgb(0, 255, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(7)
    document.querySelector('.display').innerText += 7
    input = 7
    addValueToDisplay(input)
})
document.querySelector('.button8').addEventListener('click', function (event) {
    newRgba = "rgba(0, 0, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgba
    console.log(8)
    document.querySelector('.display').innerText += 8
    input = 8
    addValueToDisplay(input)
})
document.querySelector('.button9').addEventListener('click', function (event) {
    newRgb = "rgb(225, 255, 0)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(9)
    document.querySelector('.display').innerText += 9
    input = 9
    addValueToDisplay(input)
})
document.querySelector('.add').addEventListener('click', function (event) {
    newRgb = "rgb(85, 170, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log('+')
    document.querySelector('.display').innerText += '+'
    input = '+'
    addValueToDisplay(input)
})
document.querySelector('.sub').addEventListener('click', function (event) {
    newRgb = "rgb(225, 170, 85)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(' - ')
    document.querySelector('.display').innerText += '-'
    input = '-'
    addValueToDisplay(input)
})
document.querySelector('.multiply').addEventListener('click', function (event) {
    newRgb = "rgb(15, 17, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(' x ')
    document.querySelector('.display').innerText += 'x'
    input = '*'
    addValueToDisplay(input)
})
document.querySelector('.divide').addEventListener('click', function (event) {
    newRgb = "rgb(225, 170, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log(' / ')
    document.querySelector('.display').innerText += '/'
    input = '/'
    addValueToDisplay(input)
})
document.querySelector('.decimal').addEventListener('click', function (event) {
    newRgb = "rgb(225, 170, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log('.')
    document.querySelector('.display').innerText += '.'
    input = '.'
    addValueToDisplay(input)
})
document.querySelector('.buttonClear').addEventListener('click', function (event) {
    newRgb = "rgb(225, 255, 255)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log('clear')
    document.querySelector('.display').innerText = ''
    display = ''
})
document.querySelector('.equal').addEventListener('click', function (event) {
    newRgb = "rgb(0, 0, 0)"
    console.log(newRgb)
    document.body.style.backgroundColor = newRgb
    console.log('=')
    document.querySelector('.display').innerText = ''
    doTheMath(display)
    display = ''
})
