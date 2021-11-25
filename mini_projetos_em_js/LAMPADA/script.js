const ligar = document.getElementById('ligar');
//const desligar = document.getElementById('desligar');
const img = document.getElementById('imagem');

function taQuebrada() {
    return img.src.indexOf('quebrada') > -1;
}

function ligou() {
    if (!taQuebrada()) {
        img.src = './img/ligada.jpg';
        //img.setAttribute('src', './img/ligada.jpg');
    }
}

function desligou() {
    if (!taQuebrada()) {
        img.setAttribute('src', './img/desligada.jpg')
    }
}

function quebrou() {
    if (!taQuebrada()) {
        img.setAttribute('src', './img/quebrada.jpg')
    }
}

ligar.addEventListener('click', ligou)
desligar.addEventListener('click', desligou)
//img.addEventListener('mouseout', desligou)
//img.addEventListener('mouseenter', ligou)
img.addEventListener('dblclick', quebrou)

img.addEventListener('mouseleave', desligou)
img.addEventListener('mouseover', ligou)

