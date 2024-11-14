# Project related to DOM

## Project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-vhuqfz?file=1-colorChanger%2Fchaiaurcode.js)

#  Solution Code

## Project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    switch (e.target.id) {
      case "grey" :
        body.style.backgroundColor = e.target.id;
        break;
      case "white" :
        body.style.backgroundColor = e.target.id;
        break;
      case "blue" :
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow" :
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

##  Project 2 

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  function calOfBmi(weight, height) {
    let bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    return bmi;
  }

  const bmi = calOfBmi(weight, height);

  if (height == ' ' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height `;
  } else if (weight == ' ' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight `;
  } else if (bmi < 18.6) {
    result.innerHTML = `<span>${bmi}</span><br><p>You are under weight</p>`;
  } else if (bmi > 18.6 && bmi < 24.9) {
    result.innerHTML = `<span>${bmi}</span><br><p>Your weight is normal</p>`;
  } else if (bmi > 24.9) {
    result.innerHTML = `<span>${bmi}</span><br><p>You are over weight</p>`;
  }
});

```

## Project 3

```javascript

const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSolt = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let newGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    valdiateGuess(guess);
  });
}

function valdiateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 0`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 101`);
  } else {
    prevGuess.push(guess);
    if (newGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is lower than random number`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is higher than random number`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSolt.innerHTML += `${guess}   `;
  newGuess++;
  remaining.innerHTML = `${11 - newGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGuess = 1;
    displayMessage(``);
    guessSolt.innerHTML = '';
    remaining.innerHTML = `${11 - newGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 5

```javascript

const insertId = document.querySelector('#insert');

window.addEventListener('keydown', function (e) {
  insertId.innerHTML = `
    <div class ="color">
      <table>
        <tr>
        <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});

```

## Project 6

```javascript

// generate a random color

const randomColor = function () {
  const hex = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 100);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
document.querySelector('#start').addEventListener('click', startChangingColor);

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
