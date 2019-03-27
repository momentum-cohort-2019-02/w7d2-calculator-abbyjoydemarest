'use strict'

let number1 = 0
let number2 = 0
let answer = 0
let display = ''
let input
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



document.querySelector('.button0').addEventListener('click', function (event) {
    console.log("pushed 0 button", 0)
    document.querySelector('.display').innerText += 0
    input = 0
    addValueToDisplay(input)
})
document.querySelector('.button1').addEventListener('click', function (event) {
    console.log(1)
    document.querySelector('.display').innerText += 1
    input = 1
    addValueToDisplay(input)
})
document.querySelector('.button2').addEventListener('click', function (event) {
    console.log(2)
    document.querySelector('.display').innerText += 2
    input = 2
    addValueToDisplay(input)
})
document.querySelector('.button3').addEventListener('click', function (event) {
    console.log(3)
    document.querySelector('.display').innerText += 3
    input = 3
    addValueToDisplay(input)
})
document.querySelector('.button4').addEventListener('click',function (event) {
    console.log(4)
    document.querySelector('.display').innerText += 4
    input = 4
    addValueToDisplay(input)
})
document.querySelector('.button5').addEventListener('click', function (event) {
    console.log(5)
    document.querySelector('.display').innerText += 5
    input = 5
    addValueToDisplay(input)
})
document.querySelector('.button6').addEventListener('click', function (event) {
    console.log(6)
    document.querySelector('.display').innerText += 6
    input = 6
    addValueToDisplay(input)
})
document.querySelector('.button7').addEventListener('click', function (event) {
    console.log(7)
    document.querySelector('.display').innerText += 7
    input = 7
    addValueToDisplay(input)
})
document.querySelector('.button8').addEventListener('click', function (event) {
    console.log(8)
    document.querySelector('.display').innerText += 8
    input = 8
    addValueToDisplay(input)
})
document.querySelector('.button9').addEventListener('click', function (event) {
    console.log(9)
    document.querySelector('.display').innerText += 9
    input = 9
    addValueToDisplay(input)
})
document.querySelector('.add').addEventListener('click', function (event) {
    console.log('+')
    document.querySelector('.display').innerText += '+'
    input = '+'
    addValueToDisplay(input)
})
document.querySelector('.sub').addEventListener('click', function (event) {
    console.log(' - ')
    document.querySelector('.display').innerText += '-'
    input = '-'
    addValueToDisplay(input)
})
document.querySelector('.multiply').addEventListener('click', function (event) {
    console.log(' x ')
    document.querySelector('.display').innerText += 'x'
    input = '*'
    addValueToDisplay(input)
})
document.querySelector('.divide').addEventListener('click', function (event) {
    console.log(' / ')
    document.querySelector('.display').innerText += '/'
    input = '/'
    addValueToDisplay(input)
})
document.querySelector('.decimal').addEventListener('click', function (event) {
    console.log('.')
    document.querySelector('.display').innerText += '.'
    input = '.'
    addValueToDisplay(input)
})
document.querySelector('.buttonClear').addEventListener('click', function (event) {
    console.log('clear')
    document.querySelector('.display').innerText = ''
    display.splice(display)
})
document.querySelector('.equal').addEventListener('click', function (event) {
    console.log('=')
    document.querySelector('.display').innerText = ''
    doTheMath(display)
    //then evaluate the display
})
