import '../style.css';

const fetch = require('node-fetch');

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {

  // Adding method type
  method: 'POST',

  // Adding body or contents to send
  body: JSON.stringify({
    name: 'My cool game',
  }),

  // Adding headers to the request
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  .then((response) => response.json())
  .then((json) => console.log(json));

document.querySelector('.align').addEventListener('click', () => {
  const guser = document.querySelector('.gname').value;
  const gscore = document.querySelector('.gscore').value;

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7BvSyhf1KA0jncm7oXBX/scores', {

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
  event.preventDefault();
});

document.querySelector('.refresh').addEventListener('click', () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7BvSyhf1KA0jncm7oXBX/scores')
    .then((response) => response.json())
    .then((data) => fillTable(data));
});

function fillTable(data) {
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
}
