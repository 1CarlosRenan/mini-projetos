const botao = document.getElementById('botao');
const img = document.getElementById('imagem');

function taQuebrada() {
    return img.src.indexOf('quebrada') > -1
}

function verifica() {
    if (botao.innerHTML == 'Ligar') {
        return ligar();
    } else if (botao.innerHTML == 'Desligar') {
        return desligar();
    } else {
        location.reload()
    }
}

function ligar() {
    if (!taQuebrada()) {
        img.src = './img/ligada.jpg';
        botao.innerHTML = 'Desligar';
    }
}

function desligar() {
    if (!taQuebrada()) {
        img.src = './img/desligada.jpg';
        botao.innerHTML = 'Ligar';
    }
}

function quebrar() {
    img.src = './img/quebrada.jpg';
    botao.innerHTML = 'Troque a lâmpada!'
}

img.addEventListener('mouseenter', ligar);
img.addEventListener('mouseleave', desligar);
img.addEventListener('dblclick', quebrar);
botao.addEventListener('click', verifica);

