let number1 = 0
let number2 = 0
let answer = 0

document.querySelector('.button0').onclick = function (event) {
    console.log("push 0 button", 0)
    document.querySelector('.display').innerText += 0
}
document.querySelector('.button1').onclick = function (event) {
    console.log(1)
    document.querySelector('.display').innerText += 1
}
document.querySelector('.button2').onclick = function (event) {
    console.log(2)
    document.querySelector('.display').innerText += 2
}
document.querySelector('.button3').onclick = function (event) {
    console.log(3)
    document.querySelector('.display').innerText += 3
}
document.querySelector('.button4').onclick = function (event) {
    console.log(4)
    document.querySelector('.display').innerText += 4
}
document.querySelector('.button5').onclick = function (event) {
    console.log(5)
    document.querySelector('.display').innerText += 5
}
document.querySelector('.button6').onclick = function (event) {
    console.log(6)
    document.querySelector('.display').innerText += 6
}
document.querySelector('.button7').onclick = function (event) {
    console.log(7)
    document.querySelector('.display').innerText += 7
}
document.querySelector('.button8').onclick = function (event) {
    console.log(8)
    document.querySelector('.display').innerText += 8
}
document.querySelector('.button9').onclick = function (event) {
    console.log(9)
    document.querySelector('.display').innerText += 9
}
document.querySelector('.add').onclick = function (event) {
    console.log('+')
    document.querySelector('.display').innerText += '+'
}
document.querySelector('.sub').onclick = function (event) {
    console.log(' - ')
    document.querySelector('.display').innerText += '-'
}
document.querySelector('.multiply').onclick = function (event) {
    console.log(' x ')
    document.querySelector('.display').innerText += '-'
}
document.querySelector('.divide').onclick = function (event) {
    console.log(' / ')
    document.querySelector('.display').innerText += '/'
}
document.querySelector('.decimal').onclick = function (event) {
    console.log('.')
    document.querySelector('.display').innerText += '.'
}

