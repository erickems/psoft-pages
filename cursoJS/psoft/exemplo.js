/*let segundos = 0;
console.log(segundos);*/

/*function sleep(){
    for(let i=0; i<1000000000; i++){ /*espera ocupada; rouba a 
        thread do navegador
    }
}

for(let i=0; i<=120; i++){
    console.log(i)
    sleep(1000)
}*/

let segundos = 0
function seila(){
    segundos += 1
    console.log(segundos)
}

console.log(0)
//setTimeout(seila, 1000)
setInterval(seila, 1000);
console.log('pronto')