const horas = document.getElementByid('horas');

const minutos = document.getElementByid('minutos');

const segundos = document.getElementByid('segundos');

const relogio = setInterval (function time(){
    let dateToday = new Date();
    let hor = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    horas.textContent = hor;
    minutos.textContent = min;
    segundos.textContent = s;



})


