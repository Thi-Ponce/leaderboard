import './index.css';
import * as app from './modules/app.js';

const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const submitBtn = document.getElementById('submit-btn');
const refreshBtn = document.getElementById('refresh-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  app.add({ user: inputName.value, score: inputScore.value });
  inputScore.value = '';
  inputName.value = '';
  setTimeout(() => {
    refreshBtn.click();
  }, 1500);
});

refreshBtn.addEventListener('click', () => {
  app.show();
});

window.addEventListener('load', () => {
  app.show();
});