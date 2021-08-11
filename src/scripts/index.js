/* eslint-disable no-console */
import '../style.css';
import { spawnCards, valueUpdater } from './spawn-cards';
import { updateLikes } from './likes';

const target = document.querySelector('.card-container');
const comedy = document.querySelector('.comedy');

// eslint-disable-next-line no-unused-vars
const fetch = require('node-fetch');

// eslint-disable-next-line no-unused-vars
const Appcreation = () => {
  const request = new XMLHttpRequest();
  const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  request.open('POST', requestURL, true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 201) {
      console.log(request.responseText);
    }
  };
  request.send();
};

async function fetchResultsJSON() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=comedy#');
  const results = await response.json();
  return results;
}

fetchResultsJSON().then((results) => {
  console.log(results); // fetched movies
  results.splice(8, 1);
  const total = spawnCards(results, target);
  valueUpdater(comedy, total);
  updateLikes();
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.comments_container').style.display = 'none';
  document.querySelector('.card-container').style.display = 'grid';
  document.querySelector('main').style.height = '80%';
});
