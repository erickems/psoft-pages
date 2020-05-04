
let myRequest =  new Request("./dados.json")
let form = document.querySelector("form")
let button = document.querySelector("#button").addEventListener("click", getValue)
let inputRadio = ""
let jsonValor = ""
let arrayDoencas
let arraySintomas
let click = 0
let dica = 1 //indice da dica. A dica[0] já foi usada na inicializacao
let randomDoenca

async function carregaPagina(){
    let json = await (await fetch(myRequest)).json()
    
    arrayDoencas = json  
    randomDoenca = parseInt((Math.random() * 10) % arrayDoencas.length) //escolhi o indice da doença
    
    start()
}

function start(){
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
    
    for (const f of data){
        inputRadio = f[1]
    }

    jsonValor = arrayDoencas[randomDoenca].nome
    verifica(arrayDoencas[randomDoenca].dicas)

    click++
}

function verifica(dicas){
    let sintoma = dicas[dica]
    let queryId = `#dica${dica+1}`
    
    if ((inputRadio != jsonValor) && click < 3){
        document.querySelector(queryId).innerText = "Dica " + (dica+1) + ": " + sintoma
    }
    else if (inputRadio == jsonValor){
        document.querySelector("#acertou").innerText = "Você acertou!"
        setTimeout(()=>{
            selecionaNovaDoenca()
            click = 0
            dica = 1
        },700)
    }
    else if ((inputRadio != jsonValor) && click >= 3){
        document.querySelector("#acertou").innerText = "Acabou as dicas. Você Errou!"
        setTimeout(()=>{
            selecionaNovaDoenca()
            click = 0
            dica = 1
        },700)
    }
    dica += 1
}
carregaPagina()