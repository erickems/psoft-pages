let dados
let index = 0

document.querySelector("#button").addEventListener("click", click)

async function main(){
    dados = await (await fetch("dados.json")).json()
}
main()

function click(){
    if(index < 20){
        document.querySelector("#piada").innerText = dados[index].value.joke
        index++
    }
    else{
        document.querySelector("#piada").innerText = "cabou as piada"
    }
}


