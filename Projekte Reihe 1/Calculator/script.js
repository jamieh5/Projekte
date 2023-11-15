const display = document.querySelector('.display')

// Document QuerySelectors for the num buttons
const btnZero = document.querySelector('.btn-zero')
const btnOne = document.querySelector('.btn-one')
const btnTwo = document.querySelector('.btn-two')
const btnThree = document.querySelector('.btn-three')
const btnFour = document.querySelector('.btn-four')
const btnFive = document.querySelector('.btn-five')
const btnSix = document.querySelector('.btn-six')
const btnSeven = document.querySelector('.btn-seven')
const btnEight = document.querySelector('.btn-eight')
const btnNine = document.querySelector('.btn-nine')

// QuerySelectors for the other buttons
const btnClear = document.querySelector('.btn-clear')
const btnEquals = document.querySelector('.btn-equals')
const btnDivide = document.querySelector('.btn-divide')
const btnMultiply = document.querySelector('.btn-multiply')
const btnMinus = document.querySelector('.btn-minus')
const btnPlus = document.querySelector('.btn-plus')

let displayText = ''

const clickEvent = function (btn, str) {
  btn.addEventListener('click', function () {
    displayText += str
    display.innerHTML = displayText
  })
}

clickEvent(btnOne, '1')
clickEvent(btnTwo, '2')
clickEvent(btnThree, '3')
clickEvent(btnFour, '4')
clickEvent(btnFive, '5')
clickEvent(btnSix, '6')
clickEvent(btnSeven, '7')
clickEvent(btnEight, '8')
clickEvent(btnNine, '9')
clickEvent(btnZero, '0')

// Functions for the other buttons
btnClear.addEventListener('click', function () {
  displayText = ''
  display.innerHTML = displayText
})

btnPlus.addEventListener('click', function () {
  displayText += ' + '
  display.innerHTML = displayText
})

btnMinus.addEventListener('click', function () {
  displayText += ' - '
  display.innerHTML = displayText
})

btnMultiply.addEventListener('click', function () {
  displayText += ' * '
  display.innerHTML = displayText
})

btnDivide.addEventListener('click', function () {
  displayText += ' / '
  display.innerHTML = displayText
})

btnEquals.addEventListener('click', function () {
  display.innerHTML = eval(displayText)
})
