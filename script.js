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
function createP() {
  const p = document.createElement('p');
  p.innerHTML = `${rgbValue}`;
  p.id = 'rgb-color';
  section.appendChild(p);
}
createP();

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
    h2.innerText = 'Acertou';
  } else if (click2 !== rgbValue) {
    h2.innerText = 'Errou';
  }
}

const btnReset = document.getElementById('reset-game');

btnReset.addEventListener('click',resetGame);


