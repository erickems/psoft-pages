let segundos = 0

function seila(){
    console.log(segundos)
    segundos += 1
    setTimeout(seila, 1000) //não é recursivo, é um agendamento
}

seila(); //agenda as invocações; a cada um segundo chama essse código
console.log('pronto')