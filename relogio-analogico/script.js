var horas = document.getElementById("hours")
var minutos = document.getElementById("minutes")
var segundos = document.getElementById('seconds')

function relogio(){
    var time = new Date()
    var gethoras = (360 / 12) * time.getHours()
    var getminutos = (360 / 60) * time.getMinutes()
    var getsegundos = (360 / 60) * time.getSeconds()

    segundos.style.transform = `rotate(${getsegundos}deg)`
    minutos.style.transform = `rotate(${getminutos}deg)`
    horas.style.transform = `rotate(${gethoras}deg)`
}

setInterval(function(){
    relogio()
}, 1000)