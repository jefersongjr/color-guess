let color1 = ` ${ Math.floor(Math.random() * 254)}, ${ Math.floor(Math.random() * 254)} , ${ Math.floor(Math.random() * 254)}`

const section = document.getElementById('text');
function createP(){
    const p = document.createElement('p');
    p.innerHTML = color1;
    p.id = 'rgb-color';
    section.appendChild(p);
}
createP();

const section2 = document.getElementById('colors');

function createColors(ball){
    const div = document.createElement('div');
    div.classList = ball;
    div.innerHTML = ''
    return div;
}

function appendColors(){
    for(let index = 1 ; index <= 6; index += 1){
        section2.appendChild(createColors('ball'))
    }
}
appendColors();

const balls = document.querySelectorAll('.ball');
 
const ball1 = document.querySelectorAll('.ball')[0];
const ball2 = document.querySelectorAll('.ball')[1];
const ball3 = document.querySelectorAll('.ball')[2];
const ball4 = document.querySelectorAll('.ball')[3];
const ball5 = document.querySelectorAll('.ball')[4];
const ball6 = document.querySelectorAll('.ball')[5];

ball1.style.backgroundColor =  `rgb(${ Math.floor(Math.random() * 254)}, ${ Math.floor(Math.random() * 254)} , ${ Math.floor(Math.random() * 254)})`;
ball2.style.backgroundColor = `rgb(${ Math.floor(Math.random() * 254)}, ${ Math.floor(Math.random() * 254)} , ${ Math.floor(Math.random() * 254)})`;;
ball3.style.backgroundColor = `rgb(${ Math.floor(Math.random() * 254)}, ${ Math.floor(Math.random() * 254)} , ${ Math.floor(Math.random() * 254)})`;;
ball4.style.backgroundColor = `rgb(${ Math.floor(Math.random() * 254)}, ${ Math.floor(Math.random() * 254)} , ${ Math.floor(Math.random() * 254)})`;;
ball5.style.backgroundColor =`rgb(${ Math.floor(Math.random() * 254)}, ${ Math.floor(Math.random() * 254)} , ${ Math.floor(Math.random() * 254)})`;
ball6.style.backgroundColor = `rgb(${ Math.floor(Math.random() * 254)}, ${ Math.floor(Math.random() * 254)} , ${ Math.floor(Math.random() * 254)})`;