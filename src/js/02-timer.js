import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDateEl: document.querySelector('#datetime-picker'),
  buttonStartEl: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onInputDate(selectedDates[0]);
  },
};

const fp = flatpickr('#datetime-picker', options);

refs.buttonStartEl.setAttribute('disabled', 'disabled');

let timeId = null;
const INTERVAL = 1000;

/** functions */

function onInputDate(selectedDates) {
  if (selectedDates <= Date.now()) {
    alert('Please choose a date in the future');
  } else {
    refs.buttonStartEl.removeAttribute('disabled', 'disabled');
    createTimer(selectedDates);
  }
}

function createTimer(selectedDates) {
  const parsedSelectedDate = Date.parse(selectedDates);
  let timerValueInMs = parsedSelectedDate - Date.now();
  let objTimerValue = convertMs(timerValueInMs);

  refs.buttonStartEl.addEventListener('click', () => {
    timeId = setInterval(() => {
      if (timerValueInMs <= 0) {
        clearInterval(timeId);
        return;
      }

      objTimerValue = convertMs(timerValueInMs);
      refs.daysEl.textContent = objTimerValue.days;
      refs.hoursEl.textContent = objTimerValue.hours;
      refs.minutesEl.textContent = objTimerValue.minutes;
      refs.secondsEl.textContent = objTimerValue.seconds;
      timerValueInMs -= INTERVAL;
    }, INTERVAL);
  });
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
