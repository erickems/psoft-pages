/*var nome = 'Ana'
console.log(`\"nome:\" ${nome}`)
console.log('\"nome:\" ' + nome)

var num = '33'
console.log(typeof(num/1))
console.log(num)

var x = 11.5889
console.log(typeof(x))
console.log(parseFloat(x))*/

// const nome = 'Erick'
// const promise = new Promise((resolve, reject) =>{
//     console.log('Iniciando...')
//     if (nome == 'Erick'){
//         resolve()
//     } 
//     reject()
// }).then(() => (
//     console.log(`${nome} construiu esse script`)
// )).catch(() => (
//     console.log(`${nome} NÃO construiu esse script`)
// ))

var numero = 0
var interval

function comecar(){
    interval = setInterval(() => {
        contagem.innerText = numero
        numero += 1
    }, 1000)
}

function resetar(){
    numero = 0
}

function pausar(){
    clearInterval(interval)
    contagem.innerText = numero
}

function addEventos(){
    window.document.getElementById('comecar').addEventListener('click', comecar)
    window.document.getElementById('resetar').addEventListener('click', resetar)
    window.document.getElementById('pausar').addEventListener('click', pausar)
}

window.addEventListener("load", addEventos)

