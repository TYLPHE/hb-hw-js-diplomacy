'use strict';
const button = document.querySelector('button.color-changer');
button.addEventListener('click', () => {
  const elements = document.querySelectorAll('.color-change');
  for (const element of elements) {
    element.classList.add('red');
  }
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const numInput = Number(document.querySelector('#number-input').value);
  const formFeedback = document.querySelector('#formFeedback');
  if (isNaN(numInput) || numInput >= 10) {
    formFeedback.textContent = 'Please enter a smaller number.';
  } else {
    formFeedback.textContent = 'You are good to go!'
  }
})