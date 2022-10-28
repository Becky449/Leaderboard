import './style.css';
import { renderContainer, toAddScore } from './modules/data.js';

let gameIdentity = '';
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {

  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    name: 'Handball tx',
  }),
}).then((res) => res.json())
  .then((gameID) => {
    const response = gameID.result;
    gameIdentity = response.substring(14, response.lastIndexOf(' '));
  });

const refresh = document.querySelector('.r-btn');

refresh.addEventListener('click', () => {
  renderContainer(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameIdentity}/scores`);
});

const submitscore = document.getElementById('submit');
const yourName = document.getElementById('name');
const score = document.getElementById('score');
submitscore.addEventListener('click', (e) => {
  e.preventDefault();
  if (yourName.value !== '' && score.value !== '') {
    submitscore.classList.add('onfocuss');
    toAddScore(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameIdentity}/scores`, yourName.value, score.value);
    document.forms[0].reset();
  }
});