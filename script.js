let equal_pressed = 0

// refer all buttons excluding AC & DEL
let button_input = document.querySelectorAll('.input-button')

// refer input, equal, clear & erase
let input = document.getElementById('input')
let equal = document.getElementById('equal')
let clear = document.getElementById('clear')
let erase = document.getElementById('erase')

window.onload = () => {
  input.value = ''
}

// accessing each value using forEach
button_input.forEach((buttonClass) => {
  buttonClass.addEventListener('click', () => {
    if(equal_pressed == 1){
      input.value = ''
      equal_pressed = 0
    }
    // display value of each button
    input.value += buttonClass.value
  })
})


// solve the user's input when clicked on equal sign
equal.addEventListener('click', () => {
  equal_pressed = 1
  let inp_val = input.value
  try{
    // evaluate user's input
    let solution = eval(inp_val)
    // true for natural numbers
    // false for decimals
    if(Number.isInteger(solution)){
      input.value = solution
    }
    else{
      input.value = solution.toFixed(2)
    }
  }
  catch(err) {
    // if user has entered invalid input
    alert('Invalid Input')
  }
})

// clear whole input
clear.addEventListener('click', () => {
  input.value = ''
})

// erase single value
erase.addEventListener('click', () => {
  input.value = input.value.substr(0, input.value.length - 1)
})