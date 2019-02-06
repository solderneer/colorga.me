// Importing basic assets
import 'normalize.css'
import './main.css'

// Logic imports
import randomColor from 'randomcolor'

let randArray = ['one', 'two', 'three']
const startShift = 50
let correctColor = ''
let counter = 0;

function setColor() {
  let newColor = randomColor()

  // Setting to random color
  document.querySelector('.container').style.backgroundColor = newColor
  
  for (const elem of document.querySelectorAll('.option')) {
    elem.style.backgroundColor = newColor
  }

  let wrongOptionOne = Math.floor(Math.random() * 3)
  let wrongOptionTwo = Math.floor(Math.random() * 3)
  
  while (wrongOptionOne === wrongOptionTwo)
    wrongOptionTwo = Math.floor(Math.random() * 3)

	const shift = Math.max((startShift - (counter * 3)), 8)
	correctColor = randArray[(3 - wrongOptionOne - wrongOptionTwo)]
	
	document.querySelector(`#${randArray[wrongOptionOne]}`).style.filter = `hue-rotate(${shift}deg)`
  document.querySelector(`#${randArray[wrongOptionTwo]}`).style.filter = `hue-rotate(-${shift}deg)`
	document.querySelector(`#${correctColor}`).style.filter = ""
}

function checkColor(buttonId) {
	if (correctColor === buttonId) {
		counter++
	} else {
		counter = 0
	}

	document.querySelector('#counter').innerText = counter.toString()
	setColor()
}

document.addEventListener("DOMContentLoaded", function(event) { 	
	setColor()
	
	// Setting up all the event listeners
	for (const elem of document.querySelectorAll('.option')) {
		elem.addEventListener('click', (elem) => {
			checkColor(elem.target.id)
		})	
	}	
});
