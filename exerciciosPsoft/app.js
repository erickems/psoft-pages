/*algo que calcule e imprima algo com dados fornecidos pelo usuário, tipo IMC, conversores de unidades, etc; fica a critério de cada um de vocês*/

let form = document.querySelector("form")
let resposta = document.querySelector("#resposta")
let velocidade = document.querySelector("#velocidade")


function getValue(){
    let input = document.querySelector("#input").value
    let data = new FormData(form)
    let metrica = "";
    
    for(const entrada of data){
        metrica = metrica + entrada[1] 
    }
    
    resposta.innerText = conversor(input, metrica)
    velocidade.innerText = "Velocidade de destino:"
}

function conversor(input, metrica){
    let saida = ""

    if(metrica == "metros/s"){
        saida += (input * 2.23694).toFixed(2) + " mph" + "\n" +
            (input * 0.001).toFixed(2) + " km/s" + "\n" +
            (input * 3.6).toFixed(2) + " km/h"
    }
    else if (metrica == "milhas/h"){
        saida += (input * 0.44704).toFixed(2) + " m/s" + "\n" +
            (input * 0.00045).toFixed(2) + " km/s" + "\n" +
            (input * 1.60934).toFixed(2) + " km/h" 
    }
    else if (metrica == "kilometros/s"){
        saida += (input * 1000).toFixed(2) + " m/s" + "\n" +
            (input * 2236.93).toFixed(2) + " mph" + "\n" +
            (input * 3600).toFixed(2) + " km/h"
    }
    else{
        saida += (input * 0.277).toFixed(2) + " m/s" + "\n" +
            (input * 0.621).toFixed(2) + " mph" + "\n" +
            (input * 0.00028).toFixed(2) + " km/s"
    }
    return saida
}


