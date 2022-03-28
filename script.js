const section2 = document.getElementById('colors');

function createColors(ball) {
  const div = document.createElement('div');
  div.classList = ball;
  div.innerHTML = '';
  div.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 254
  )}, ${Math.floor(Math.random() * 254)} , ${Math.floor(Math.random() * 254)})`;
  div.addEventListener('click', clickColor);
  return div;
}

function appendColors() {
  for (let index = 1; index <= 6; index += 1) {
    section2.appendChild(createColors('ball'));
  }
}
appendColors();
let i = Math.floor(Math.random() * 5);
const getCollor = document.querySelectorAll('.ball')[i];
const getRgb = window.getComputedStyle(getCollor);
const rgbValue = getRgb.getPropertyValue('background-color');

const section = document.getElementById('text');
function createSpan() {
  const span = document.createElement('span');
  span.innerHTML = `${rgbValue}`;
  span.id = 'rgb-color';
  section.appendChild(span);
}
createSpan();

const span = document.getElementById('rgb-color');
function createAnswer(x) {
  const answer = document.createElement('h2');
  answer.id = 'answer';
  answer.innerText = x;
  section2.appendChild(answer);
  return answer;
}

createAnswer('Escolha uma cor');

const h2 = document.getElementById('answer');
function clickColor(event) {
  let click = window.getComputedStyle(event.target);
  let click2 = click.getPropertyValue('background-color');
  if (click2 === rgbValue) {
    h2.innerText = 'Acertou!';
  } else if (click2 !== rgbValue) {
    h2.innerText = 'Errou! Tente novamente!';
  }
}

const btnReset = document.getElementById('reset-game');

function resetGame(event) {
  const getCollor = document.querySelectorAll('.ball');
  h2.innerText = 'Escolha uma cor';
  for (let index = 0; index < getCollor.length; index += 1) {
    getCollor[index].style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 254
    )}, ${Math.floor(Math.random() * 254)}, ${Math.floor(
      Math.random() * 254
    )})`;
    const getCollor1 = document.querySelectorAll('.ball')[index];
    const getRgb1 = window.getComputedStyle(getCollor1);
    const rgbValue1 = getRgb1.getPropertyValue('background-color');
    span.innerText = rgbValue1;
   
  }
}

btnReset.addEventListener('click', resetGame);
