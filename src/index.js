import './style.css';
import { renderContainer, toAddScore } from './modules/data.js';

const refresh = document.querySelector('.r-btn');

refresh.addEventListener('click', () => {
  renderContainer('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zilCJ92DyR9p0QhPQKZI/scores');
});

const submitscore = document.getElementById('submit');
const yourName = document.getElementById('name');
const score = document.getElementById('score');
submitscore.addEventListener('click', (e) => {
  e.preventDefault();
  if (yourName.value !== '' && score.value !== '') {
    submitscore.classList.add('onfocuss');
    toAddScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zilCJ92DyR9p0QhPQKZI/scores', yourName.value, score.value);
    document.forms[0].reset();
  }
});