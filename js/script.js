let timer;
let isPaused = true;
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

function startTimer() {
  if (isPaused) {
    isPaused = false;
    timer = setInterval(updateTime, 1000);
  }
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
}

function updateTime() {
  let hours = parseInt(hoursElement.textContent);
  let minutes = parseInt(minutesElement.textContent);
  let seconds = parseInt(secondsElement.textContent);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timer);
    playAlarm();
    return;
  }

  if (seconds === 0) {
    if (minutes === 0) {
      hours = Math.max(0, hours - 1);
      minutes = 59;
    } else {
      minutes--;
    }
    seconds = 59;
  } else {
    seconds--;
  }

  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');
}
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
}


function playAlarm() {
  const alarm = document.getElementById('alarm');
  alarm.play();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
// Adicionando manipuladores de eventos para rolagem do mouse em cada unidade de tempo
document.getElementById('timer').addEventListener('wheel', function(event) {
  event.preventDefault();
  const delta = event.deltaY;
  const increment = delta > 0 ? -1 : 1;
  if (event.target.id === 'hours') {
    let hours = parseInt(event.target.textContent) + increment;
    hours = Math.max(0, hours); 
    hours = Math.min(hours, 99); 
    event.target.textContent = hours.toString().padStart(2, '0'); // Adiciona zero à esquerda se necessário
  } else if (event.target.id === 'minutes') {
    let minutes = parseInt(event.target.textContent) + increment;
    minutes = Math.max(0, minutes); 
    minutes = Math.min(minutes, 59); 
    event.target.textContent = minutes.toString().padStart(2, '0'); // Adiciona zero à esquerda se necessário
  } else if (event.target.id === 'seconds') {
    let seconds = parseInt(event.target.textContent) + increment;
    seconds = Math.max(0, seconds); 
    seconds = Math.min(seconds, 59); 
    event.target.textContent = seconds.toString().padStart(2, '0'); // Adiciona zero à esquerda se necessário
  }
});
