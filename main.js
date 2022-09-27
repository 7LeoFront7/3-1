let inputTask = document.querySelector('.js-input');
let buttonAddTask = document.querySelector('.js-button');
let todosNode = document.querySelector('.js-todosNode');

buttonAddTask.addEventListener('click', function () {
  let task = document.createElement('div');
  task.classList.add('task');

  let li = document.createElement('li');
  li.classList.add('todoText');
  li.innerHTML = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement('button');
  checkButton.classList.add('check');
  checkButton.innerHTML = `<i class='bx bx-check'></i>`;
  task.appendChild(checkButton);

  let deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.innerHTML = `<i class='bx bxs-trash' ></i>`;
  task.appendChild(deleteButton);

  checkButton.addEventListener('click', function () {
    li.style.textDecoration = 'line-through';
  });

  if (inputTask.value === '') {
    alert('Please enter a task ...');
  } else {
    todosNode.appendChild(task);
  }

  inputTask.value = '';

  deleteButton.addEventListener('click', function () {
    deleteButton.parentElement.remove();
  });
});

////////////////////////////////////////////////////////////////////

let timer = document.querySelector('.timer-containet');

let second = 0;
let minute = 0;
let hour = 0;

let lidingSecond = 0;
let lidingMinute = 0;
let lidingHour = 0;
let index = 0;

function timerout() {
  second--;

  if (second < 0) {
    second = 59;
    minute = minute - 1;

    if (minute < 0) {
      minute = 59;
      hour--;
    }
    if (hour < 0) {
      minute = 59;
    }
  }

  if (second < 10) {
    lidingSecond = '0' + second.toString();
  } else {
    lidingSecond = second;
  }
  if (minute < 10) {
    lidingMinute = '0' + minute.toString();
  } else {
    lidingMinute = minute;
  }
  if (hour < 10) {
    lidingHour = '0' + hour.toString();
  } else {
    lidingHour = hour;
  }

  if (lidingHour == 0 && lidingMinute == 0 && lidingSecond == 0) {
    soundClick();
    index++;

    if (index % 2 == 0) {
      lidingMinute = workCounter;
      minute = workCounter;
      setInterval(timerout, 1000);
    } else {
      lidingMinute = relaxCounter;
      minute = relaxCounter;
      setInterval(timerout, 1000);
    }
  }

  timer.innerHTML = `${lidingHour} : ${lidingMinute} : ${lidingSecond} `;
}

///// COUNTER

let timerPlus = document.querySelector('.js-timer-plus');
let timerCounter = document.querySelector('.js-timer-counter-num');
let timerMinus = document.querySelector('.js-timer-minus');

let timerPlusRelax = document.querySelector('.js-timer-plus-relax');
let timerCounterRelax = document.querySelector('.js-timer-counter-relax');
let timerMinusRelax = document.querySelector('.js-timer-minus-relax');

let workCounter = 25;
let relaxCounter = 10;

////////////////////////////////////////////////////////////////
function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'time.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
////////////////////////////////

timerPlus.addEventListener('click', function () {
  if (workCounter > 55) {
    return;
  } else {
    workCounter += 5;
    timerCounter.innerHTML = `${workCounter}`;
  }
});

timerMinus.addEventListener('click', function () {
  if (workCounter < 25) {
    return;
  } else {
    workCounter -= 5;
    timerCounter.innerHTML = `${workCounter}`;
  }
});

///

timerPlusRelax.addEventListener('click', function () {
  if (relaxCounter > 30) {
    return;
  } else {
    relaxCounter += 5;
    timerCounterRelax.innerHTML = `${relaxCounter}`;
  }
});

timerMinusRelax.addEventListener('click', function () {
  if (relaxCounter < 10) {
    return;
  } else {
    relaxCounter -= 5;
    timerCounterRelax.innerHTML = `${relaxCounter}`;
  }
});
let btnPlayMomodoro = document.querySelector('.button-play');

btnPlayMomodoro.addEventListener('click', function () {
  lidingMinute = workCounter;
  minute = workCounter;
  setInterval(timerout, 10);

  btnPlayMomodoro.classList.toggle('dis');
  btnPlayMomodoro.getAttribute('disabled');
  btnPlayMomodoro.innerHTML = "<i class='bx bxs-x-circle' ></i>";
  btnPlayMomodoro.style.background = `rgb(255, 136, 0)`;

  if (btnPlayMomodoro.classList != `button-play dis`) {
    location.reload();
  }
});
