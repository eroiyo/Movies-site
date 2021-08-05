/* eslint-disable no-console */
import '../style.css';

const fetch = require('node-fetch');

const fillTable = (data) => { // the curly brace opens a multiline function
  const highestUser = document.querySelector('.highest');
  const highestScore = document.querySelector('.highest_score');
  highestUser.textContent = Object.values(data)[0][0].user;
  highestScore.textContent = Object.values(data)[0][0].score;
  const shighestUser = document.querySelector('.shighest');
  const shighestScore = document.querySelector('.shighest_score');
  shighestUser.textContent = Object.values(data)[0][1].user;
  shighestScore.textContent = Object.values(data)[0][1].score;
  const lhighestUser = document.querySelector('.lhighest');
  const lhighestScore = document.querySelector('.lhighest_score');
  lhighestUser.textContent = Object.values(data)[0][2].user;
  lhighestScore.textContent = Object.values(data)[0][2].score;
  const ehighestUser = document.querySelector('.ehighest');
  const ehighestScore = document.querySelector('.ehighest_score');
  ehighestUser.textContent = Object.values(data)[0][3].user;
  ehighestScore.textContent = Object.values(data)[0][3].score;
  const fhighestUser = document.querySelector('.fhighest');
  const fhighestScore = document.querySelector('.fhighest_score');
  fhighestUser.textContent = Object.values(data)[0][4].user;
  fhighestScore.textContent = Object.values(data)[0][4].score;
  const thighestUser = document.querySelector('.thighest');
  const thighestScore = document.querySelector('.thighest_score');
  thighestUser.textContent = Object.values(data)[0][5].user;
  thighestScore.textContent = Object.values(data)[0][5].score;
  if (Object.values(data)[0][6] !== undefined) {
    const yhighestUser = document.querySelector('.yhighest');
    const yhighestScore = document.querySelector('.yhighest_score');
    yhighestUser.textContent = Object.values(data)[0][6].user;
    yhighestScore.textContent = Object.values(data)[0][6].score;
  }
  if (Object.values(data)[0][7] !== undefined) {
    const khighestUser = document.querySelector('.khighest');
    const khighestScore = document.querySelector('.khighest_score');
    khighestUser.textContent = Object.values(data)[0][7].user;
    khighestScore.textContent = Object.values(data)[0][7].score;
  }
  if (Object.values(data)[0][8] !== undefined) {
    const zhighestUser = document.querySelector('.zhighest');
    const zhighestScore = document.querySelector('.zhighest_score');
    zhighestUser.textContent = Object.values(data)[0][8].user;
    zhighestScore.textContent = Object.values(data)[0][8].score;
  }
};

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {

  // Adding method type
  method: 'POST',

  // Adding body or contents to send
  body: JSON.stringify({
    name: 'Erez"s coolest game to date',
  }),

  // Adding headers to the request
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  .then((response) => response.json())
  // eslint-disable-next-line no-console
  .then((json) => console.log(json));

document.querySelector('.align').addEventListener('click', () => {
  const guser = document.querySelector('.gname').value;
  const gscore = document.querySelector('.gscore').value;

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zH4REzKr0jGOXCuqG8YJ/scores', {

    // Adding method type
    method: 'POST',

    // Adding body or contents to send
    body: JSON.stringify({
      user: guser,
      score: gscore,
    }),

    // Adding headers to the request
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

    .then((response) => response.json())
    .then((json) => console.log(json));
  document.querySelector('.gname').value = '';
  document.querySelector('.gscore').value = '';
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
});

async function fetchResultsJSON() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zH4REzKr0jGOXCuqG8YJ/scores/');
  const results = await response.json();
  return results;
}

fetchResultsJSON().then((results) => {
  fillTable(results); // fetched movies
});

document.querySelector('.refresh').addEventListener('click', () => {
  fetchResultsJSON().then((results) => {
    fillTable(results); // fetched movies
  });
  document.querySelector('.refresh').className = 'animate';
});
