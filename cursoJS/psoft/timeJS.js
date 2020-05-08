let a 

function contador(inicio, fim, msegundos){
    a = setInterval(()=>{
        console.log(inicio++)
    }, msegundos)
    setTimeout(()=>{
        clearInterval(a)
    },fim)
    
}
contador(7,2000,400)