let dados
let index = 0

document.querySelector("#button").addEventListener("click", click)

async function main(){
    dados = await (await fetch("dados.json")).json()
    console.log(dados[index].value.joke)
}
main()

function click(){
    document.querySelector("#piada").innerText = dados[index].value.joke
    index++
}


