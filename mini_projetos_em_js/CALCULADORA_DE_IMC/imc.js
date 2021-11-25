const calcularObj = document.getElementById('calcular');

function calcular() {
    const altura = document.getElementById('altura');
    const nome = document.getElementById('nome')
    const peso = document.getElementById('peso');
    const resultado = document.getElementById('resultado');

    if (nome.value === '' || peso.value === '' || altura.value === '') {
        resultado.innerHTML = 'Preencha todos os campos acima.'
    } else {
        const valorIMC = (Number(peso.value) / (Number(altura.value) ** 2)).toFixed(2);

        let classificacao;

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso';
        } else if(valorIMC < 25) {
            classificacao = 'com peso normal';
        } else if(valorIMC < 30) {
            classificacao = 'com sobrepeso';
        } else if(valorIMC < 35) {
            classificacao = 'com obesidade grau I';
        } else if(valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III ou Mórbida';
        }

        resultado.textContent = `${nome.value}, seu IMC é igual a ${valorIMC}. Você está ${classificacao}`
    }
}

calcularObj.addEventListener('click', calcular);