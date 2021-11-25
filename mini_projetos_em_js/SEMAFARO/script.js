const imagem = document.getElementById('desligado')
const buttons = document.getElementById('buttons')


const trafficLight = (event) => {
    turnOn[event.target.id]();
}

const changeColor = () => {
    const color = 'red';;
    turnOn[color](); 
}

const turnOn = {
    'red': () => imagem.src = './img/vermelho.png',
    'yellow': () => imagem.src = './img/amarelo.png',
    'green': () => imagem.src = './img/verde.png',
    'automatic': () => setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight)
