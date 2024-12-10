const iniciar = document.querySelector('.iniciar');
const pause = document.querySelector('.pause');
const reiniciar = document.querySelector('.reiniciar');
const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;


//Funções
function criaHora(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = criaHora(segundos);
    }, 1000);
}


//Eventos

iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    iniciarRelogio()
})

pause.addEventListener('click', function(event) {
    clearInterval(timer);
})

reiniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
})


