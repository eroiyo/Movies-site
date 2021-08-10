/* eslint-disable no-console */
import '../style.css';
import { spawnCards } from './spawn-cards';

const target = document.querySelector('.card-container');

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
  spawnCards(results, target);
});
