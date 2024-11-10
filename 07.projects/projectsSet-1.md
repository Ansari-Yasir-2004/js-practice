# Project related to DOM

## Project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

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

  if (height == ' ' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height `;
  } else if (weight == ' ' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight `;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span`;
  }
});

```