
let myRequest =  new Request("./dados.json")
let form = document.querySelector("form")
let inputRadio = ""
let jsonValor = ""
let click = 0
let random 
let resultadoJson

async function carregaJson(){
    let json = await (await fetch(myRequest)).json()
    resultadoJson = json

    random = parseInt((Math.random()*10)%4)

    switch(random){
        case 0:
            document.querySelector("#dica1").innerText = "Dica 1: " + json.covid[0]
            break
        case 1:
            document.querySelector("#dica1").innerText = "Dica 1: " + json.gripe[0]
            break
        case 2:
            document.querySelector("#dica1").innerText = "Dica 1: " + json.dengue[0]
            break
        default:
            document.querySelector("#dica1").innerText = "Dica 1: " + json.alergia[0]
            break
    }

}
carregaJson()

function getValue(){

    let data = new FormData(form)
    
    for (const f of data){
        inputRadio = f[1]
    }
    
    switch(random){
        case 0:
            jsonValor = "Covid-19"
            verifica(resultadoJson.covid)
            break
        case 1:
            jsonValor = "Gripe"
            verifica(resultadoJson.gripe)
            break
        case 2:
            jsonValor = "Dengue"
            verifica(resultadoJson.dengue)
            break
        case 3:
            jsonValor = "Alergia"
            verifica(resultadoJson.alergia)
            break
    }
    click++
}

function verifica(json){
    if ((inputRadio != jsonValor) && click < 3){
        switch(click){
            case 0:
                document.querySelector("#dica2").innerText = "Dica 2: " + json[1]
                break
            case 1:
                document.querySelector("#dica3").innerText = "Dica 3: " + json[2]
                break
            default:
                document.querySelector("#dica4").innerText = "Dica 4: " + json[3]
                break
        }
    }
    else if (inputRadio == jsonValor){
        document.querySelector("#acertou").innerText = "Você acertou!"
        setTimeout(()=>{document.location.reload()},700)
        
    }
    else if ((inputRadio != jsonValor) && click >= 3){
        document.querySelector("#acertou").innerText = "Acabou as dicas. Você Errou!"
        setTimeout(()=>{document.location.reload()},700)
    }
}