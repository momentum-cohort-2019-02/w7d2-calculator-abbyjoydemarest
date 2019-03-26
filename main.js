'use strict'

let number1 = 0
let number2 = 0
let answer = 0

document.querySelector('.button0').addEventListener('click', function (event) {
    console.log("pushed 0 button", 0)
    document.querySelector('.display').innerText += 0
    document.querySelector('button0').addEventListener('click', )
})
document.querySelector('.button1').addEventListener('click', function (event) {
    console.log(1)
    document.querySelector('.display').innerText += 1
})
document.querySelector('.button2').addEventListener('click', function (event) {
    console.log(2)
    document.querySelector('.display').innerText += 2
})
document.querySelector('.button3').addEventListener('click', function (event) {
    console.log(3)
    document.querySelector('.display').innerText += 3
})
document.querySelector('.button4').addEventListener('click',function (event) {
    console.log(4)
    document.querySelector('.display').innerText += 4
})
document.querySelector('.button5').addEventListener('click', function (event) {
    console.log(5)
    document.querySelector('.display').innerText += 5
})
document.querySelector('.button6').addEventListener('click', function (event) {
    console.log(6)
    document.querySelector('.display').innerText += 6
})
document.querySelector('.button7').addEventListener('click', function (event) {
    console.log(7)
    document.querySelector('.display').innerText += 7
})
document.querySelector('.button8').addEventListener('click', function (event) {
    console.log(8)
    document.querySelector('.display').innerText += 8
})
document.querySelector('.button9').addEventListener('click', function (event) {
    console.log(9)
    document.querySelector('.display').innerText += 9
})
document.querySelector('.add').addEventListener('click', function (event) {
    console.log('+')
    document.querySelector('.display').innerText += '+'
})
document.querySelector('.sub').addEventListener('click', function (event) {
    console.log(' - ')
    document.querySelector('.display').innerText += '-'
})
document.querySelector('.multiply').addEventListener('click', function (event) {
    console.log(' x ')
    document.querySelector('.display').innerText += '-'
})
document.querySelector('.divide').addEventListener('click', function (event) {
    console.log(' / ')
    document.querySelector('.display').innerText += '/'
})
document.querySelector('.decimal').addEventListener('click', function (event) {
    console.log('.')
    document.querySelector('.display').innerText += '.'
})
document.querySelector('.buttonClear').addEventListener('click', function (event) {
    console.log('clear')
    document.querySelector('.display').innerText = ''
})

