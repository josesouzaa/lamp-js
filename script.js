const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const lamp = document.querySelector('#lamp');

function isBroken() {
  return lamp.src.indexOf('quebrada') > -1;
};

function lampOn() {
  if (!isBroken()) {
    lamp.src = './img/ligada.jpg';
  }
};

function lampOff() {
  if (!isBroken()) {
    lamp.src = './img/desligada.jpg';
  }
};

function lampBroken() {
  lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);