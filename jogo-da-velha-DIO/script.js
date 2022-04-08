let temVencedor = false;

const quadrados = document.querySelectorAll('.quadrado');
const vezJogador = document.querySelector('.jogador');
const vencedor = document.querySelector('.vencedor');

let jogador = 'X';

quadrados.forEach((quadrado) => {
    quadrado.addEventListener('click', () => {
        escolherQuadrado(quadrado);
    })
})

function escolherQuadrado(element) {
    if (element.innerHTML !== '-') {
        return
    }

    element.innerHTML = jogador;
    element.style.color = '#000';

    mudarJogador();
    checarVencedor();
}

function mudarJogador() {
    if (jogador === 'X') jogador = 'O'
    else jogador = 'X'

    vezJogador.innerHTML = `Jogador: ${jogador}`;
}

function checarVencedor() {
    let arrVencedor = [
        quadrados[0].innerHTML !== '-' && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[0].innerHTML === quadrados[2].innerHTML,
        quadrados[3].innerHTML !== '-' && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[3].innerHTML === quadrados[5].innerHTML,
        quadrados[6].innerHTML !== '-' && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[6].innerHTML === quadrados[8].innerHTML,
        quadrados[0].innerHTML !== '-' && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[0].innerHTML === quadrados[6].innerHTML,
        quadrados[1].innerHTML !== '-' && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[1].innerHTML === quadrados[7].innerHTML,
        quadrados[2].innerHTML !== '-' && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[2].innerHTML === quadrados[8].innerHTML,
        quadrados[0].innerHTML !== '-' && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[0].innerHTML === quadrados[8].innerHTML,
        quadrados[2].innerHTML !== '-' && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[2].innerHTML === quadrados[6].innerHTML,
    ];

    temVencedor = arrVencedor.some((combinacao) => {
        return combinacao === true;
    })

    console.log(temVencedor)
    console.log(arrVencedor)


}
