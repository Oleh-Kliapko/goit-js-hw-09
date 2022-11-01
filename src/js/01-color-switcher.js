const refs = {
  bodyEl: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

let timeId = null;

refs.startButton.addEventListener('click', onPushStart);
refs.stopButton.addEventListener('click', onPushStop);

function onPushStart(evt) {
  refs.startButton.setAttribute('disabled', 'disabled');
  timeId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onPushStop(evt) {
  refs.startButton.removeAttribute('disabled');
  clearInterval(timeId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
