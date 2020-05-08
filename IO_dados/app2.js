let form = document.querySelector("#form")
let button = document.querySelector("#button").addEventListener("click", getValue)
let buttonsim = document.querySelector("#sim").addEventListener("click", sim)
let buttonnao = document.querySelector("#nao").addEventListener("click", nao)
let div = document.querySelector("#after")
div.style.visibility = "hidden"
let arrayDoencas
let arraySintomas
let click = 0
let dica = 1 
let pontos = 0
let randomDoenca

async function carregaPagina(){
    arrayDoencas = await (await fetch("./dados.json")).json()
 
    randomDoenca = parseInt((Math.random() * 10) % arrayDoencas.length) //escolhi o indice da doença
    
    start()
}

function start(){
    document.querySelector("#pontos").innerText = `Pontuação: ${pontos}`
    arraySintomas = arrayDoencas[randomDoenca].dicas  //peguei o array de sintomas da doenca escolhida
    document.querySelector("#dica1").innerText = "Dica 1: " + arraySintomas[0] // sintoma 1
}

function selecionaNovaDoenca(){
    for(let i = 1; i <= 4; i++){
        document.querySelector(`#dica${i}`).innerText = `Dica ${i}: `
    }
    document.querySelector("#acertou").innerText = ""

    arrayDoencas.splice(randomDoenca, 1)
    randomDoenca = parseInt((Math.random() * 10) % arrayDoencas.length) //escolhi o indice da nova doença
    start()
}

function getValue(){
    let data = new FormData(form)
    let inputSelecionado
    let nomeDaDoenca
    
    for (const f of data){
        inputSelecionado = f[1]
    }

    nomeDaDoenca = arrayDoencas[randomDoenca].nome
    verifica(inputSelecionado, nomeDaDoenca, arrayDoencas[randomDoenca].dicas)

    click++
}

function verifica(inputSelecionado, nomeDaDoenca, dicas){
    if ((inputSelecionado != nomeDaDoenca) && click < 3){
        document.querySelector(`#dica${dica+1}`).innerText = "Dica " + (dica+1) + ": " + dicas[dica]
        dica += 1
        return
    }
    else if (inputSelecionado == nomeDaDoenca){
        document.querySelector("#acertou").innerText = "Você acertou!"
        pontos += 4 - (dica - 1)
        if(arrayDoencas.length == 1){
            click = 0
            dica = 1
            div.style.visibility = "visible"
        } else {
            return setTimeout(()=>{
                        selecionaNovaDoenca()
                        click = 0
                        dica = 1
                    },700)
        }
    }
    else if ((inputSelecionado != nomeDaDoenca) && click >= 3){
        document.querySelector("#acertou").innerText = "Acabou as dicas. Você Errou!"
        if(arrayDoencas.length == 1){
            click = 0
            dica = 1
            div.style.visibility = "visible"
        } else {
            return setTimeout(()=>{
                        selecionaNovaDoenca()
                        click = 0
                        dica = 1
                    },700)
        }
    }
}

function sim(){
    let titulo = document.querySelector("#nome").value
    let pontuacao = pontos

    let blob = new Blob([pontuacao], {type: "text/plain;charset=uft-8"})

    saveAs(blob, titulo + ".txt")
}

function nao(){
    location.reload()
}

carregaPagina()