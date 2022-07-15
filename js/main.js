'use strict';
console.log('main.js');

//  nusitaikom
const formEl = document.forms[0];

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  console.log('js works');
}
