'strict use';

const secondHand = document.querySelector('.js-sec-hand');
const minHand = document.querySelector('.js-min-hand');
const hourHand = document.querySelector('.js-hour-hand');

function setDate() {
  /* debugger; */
  let now = new Date();

  const seconds = now.getSeconds(); //nos devuelve los segundos de un minuto
  const secondsDegrees = (seconds / 60) * 360 + 180; // cada segundo se multiplica por los 360 grados de la esfera del reloj
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 180;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  console.log(minutes);

  const hour = now.getHours();
  const hoursDegrees = (hour / 12) * 360 + (seconds / 60) * 30 + 180;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hour);
}

setInterval(setDate, 1000);
//set interval = se ejecuta cada x intervalo de tiempo
//recibe 2 parametros 1º la funcion que se va a ejecutar, el tiempo en milisegundos
