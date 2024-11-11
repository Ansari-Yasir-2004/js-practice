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