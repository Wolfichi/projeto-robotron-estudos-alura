// const robotron = document.querySelector('.robo');

// robotron.addEventListener("click", () => {
//     alert('Cliquei no robo')
// });

// *** exemplo pra visualizar eventos ***
// robotron.addEventListener("click", (eventos) => {
//     console.log(eventos)
// });

// *** para uma função declarada ***
// robotron.addEventListener("click", dizOi)

// *** exemplo de função anonima tambem ***
// robotron.addEventListener("click", function() {
//     alert('Cliquei no robo')
// });

// function dizOi() {
//     console.log('oi');
//     console.log('Lindo');
// }

// dizOi()

// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");

// const braco = document.querySelector("#braco");

// const controle = document.querySelectorAll(".controle-ajuste");

const controle = document.querySelectorAll("[data-controle]");

const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// controle.forEach( (elemento) => {
//     elemento.addEventListener("click", (evento) => {
//         manipulaDados(evento.target.textContent, evento.target.parentNode);
//     })
// })

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

// somar.addEventListener("click", () => {manipulaDados("somar")})

// subtrair.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados(operacao, controle) {

    // const peca = controle.querySelector(".controle-contador");

    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}