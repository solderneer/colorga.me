// Importing basic assets
import 'normalize.css'
import './main.css'

// Logic imports
import randomMC from 'random-material-color'

let randArray = ['one', 'two', 'three']

function setColor() {
  let newColor = randomMC.getColor()

  // Setting to random color
  document.querySelector('.container').style.backgroundColor = newColor
  
  for (const elem of document.querySelectorAll('.option')) {
    elem.style.backgroundColor = newColor
  }

  let wrongOptionOne = Math.floor(Math.random() * 3)
  let wrongOptionTwo = Math.floor(Math.random() * 3)
  
  while (wrongOptionOne === wrongOptionTwo)
    wrongOptionTwo = Math.floor((Math.random() * 3) + 1)

  document.querySelector(`#${randArray[wrongOptionOne]}`).style.filter = "hue-rotate(10deg)"
  document.querySelector(`#${randArray[wrongOptionTwo]}`).style.filter = "hue-rotate(-10deg)"


  return randArray[(3 - wrongOptionOne - wrongOptionTwo)]
}

console.log(setColor())
