/* eslint-disable no-console */
import '../style.css';
import { updateLikes } from './likes';

import { fetchfromAPI } from './fetch';

const target = document.querySelector('.card-container');
const targetTwo = document.querySelector('.card-container-two');
const comedy = document.querySelector('.comedy');
const drama = document.querySelector('.drama');

// eslint-disable-next-line no-unused-vars
const fetch = require('node-fetch');

let page = 'Comedy';
// eslint-disable-next-line no-unused-vars

const init = async () => {
  await fetchfromAPI(target, comedy, 'https://api.tvmaze.com/search/shows?q=comedy#', 9, 1);
  await fetchfromAPI(targetTwo, drama, 'https://api.tvmaze.com/search/shows?q=drama#', 8, 1);
  await updateLikes();
};

init();

document.querySelector('.close').addEventListener('click', () => {
  if (page === 'Comedy') {
    document.querySelector('.comments_container').style.display = 'none';
    document.querySelector('.card-container-two').style.display = 'none';
    document.querySelector('.card-container').style.display = 'grid';
    document.querySelector('main').style.display = 'flex';
  } else {
    document.querySelector('.comments_container').style.display = 'none';
    document.querySelector('.card-container').style.display = 'none';
    document.querySelector('.card-container-two').style.display = 'grid';
    document.querySelector('main').style.display = 'flex';
  }
});

const postComment = (itemId, userName, commentContent) => {
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
};

document.querySelector('.submit_button').addEventListener('click', () => {
  const itemId = document.querySelector('.mname').textContent;
  const userName = document.querySelector('.your_name').value;
  const commentContent = document.querySelector('textarea').value;
  postComment(itemId, userName, commentContent);
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
  page = 'Comedy';
});

document.querySelector('.drama').addEventListener('click', () => {
  document.querySelector('.comments_container').style.display = 'none';
  document.querySelector('.card-container').style.display = 'none';
  document.querySelector('.card-container-two').style.display = 'grid';
  document.querySelector('main').style.display = 'flex';
  page = 'Drama';
});