
let parando = false

function inicio() {


    if(!parando){
    set = setInterval(function(){

    var tempo = document.getElementById('tempo').innerHTML;
    var time = parseInt(tempo) + 1;

    document.getElementById('tempo').innerHTML = time

    }, 1000)
    }

    parando = true

}

function parar() {
    clearInterval(set)
    parando = false
}

function reiniciar() {
    document.getElementById('tempo').innerHTML = 0;
    parar()
}