let number1 = Math.floor(Math.random() * 254);
let number2 = Math.floor(Math.random() * 254);
let number3 = Math.floor(Math.random() * 254);

const section = document.querySelector('#text');
function createP(){
    const p = document.createElement('p');
    p.innerHTML = `(${number1}, ${number2}, ${number3})`;
    p.id = 'rgb-color';
    section.appendChild(p);
}

createP();

