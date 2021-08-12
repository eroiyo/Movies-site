/* eslint-disable no-console */
import '../style.css';


import  {fetchfromAPI} from '../scripts/fetch'

const target = document.querySelector('.card-container');
const targetTwo = document.querySelector('.card-container-two');
const comedy = document.querySelector('.comedy');
const drama = document.querySelector('.tv');

// eslint-disable-next-line no-unused-vars
const fetch = require('node-fetch');

// eslint-disable-next-line no-unused-vars

fetchfromAPI(target, comedy)


async function fetchDramResultsJSON() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=drama#');
  const results = await response.json();
  return results;
}

fetchDramResultsJSON().then((results) => {
  console.log(results); // fetched movies
  results.splice(8, 1);
  const total = spawnCards(results, targetTwo);
  valueUpdater(drama, total);
  updateLikes();
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.card-container').style.display = 'flex';
  document.querySelector('.comments_container').style.display = 'none';
  document.querySelector('.card-container').style.display = 'grid';
  document.querySelector('main').style.display = 'flex';
});

document.querySelector('.submit_button').addEventListener('click', () => {
  const itemId = document.querySelector('.mname').textContent;
  const userName = document.querySelector('.your_name').value;
  const commentContent = document.querySelector('textarea').value;
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments', {

    // Adding method type
    method: 'POST',

    // Adding body or contents to send
    body: JSON.stringify({
      item_id: itemId,
      username: userName,
      comment: commentContent,
    }),

    // Adding headers to the request
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

    .then((response) => response.json())
  // eslint-disable-next-line no-console
    .then((json) => console.log(json));
  document.querySelector('.your_name').value = '';
  document.querySelector('textarea').value = '';
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
});

document.querySelector('.comedy').addEventListener('click', () => {
  document.querySelector('.comments_container').style.display = 'none';
  document.querySelector('.card-container-two').style.display = 'none';
  document.querySelector('.card-container').style.display = 'grid';
  document.querySelector('main').style.display = 'flex';
});

document.querySelector('.drama').addEventListener('click', () => {
  document.querySelector('.comments_container').style.display = 'none';
  document.querySelector('.card-container').style.display = 'none';
  document.querySelector('.card-container-two').style.display = 'grid';
  document.querySelector('main').style.display = 'flex';
});