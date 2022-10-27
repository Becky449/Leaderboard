// import _ from 'lodash';
import './style.css';

const array = [
  {
    name: 'Name',
    score: 90,
  },

  {
    name: 'Name',
    score: 90,
  },

  {
    name: 'Name',
    score: 90,
  },

  {
    name: 'Name',
    score: 90,
  },

  {
    name: 'Name',
    score: 90,
  },

  {
    name: 'Name',
    score: 90,
  },
  {
    name: 'Name',
    score: 90,
  },
  {
    name: 'Name',
    score: 90,
  },
  {
    name: 'Name',
    score: 90,
  },
];

// const display = document.querySelector('#listing');
const element = document.createElement('li');

const render = () => {
  array.forEach((a, index) => {
    element.innerHTML += `
    <li class='litem ${index % 2 !== 0 ? 'item' : 'item1'}' >
      <label class='lname'> ${a.name} : </label> 
      <label class='lscore'> ${a.score} </label>
    </li>
    `;
  });
};
window.onload = () => {
  render();
  document.querySelector('#list').appendChild(element);
};