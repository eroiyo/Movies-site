const fetch = require('node-fetch');

fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments', {

  // Adding method type
  method: 'POST',

  // Adding body or contents to send
  body: JSON.stringify({
    item_id: 'Comedy',
    username: 'Erez',
    comment: 'One of the best show ever',
  }),

  // Adding headers to the request
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  .then((response) => response.json())
  // eslint-disable-next-line no-console
  .then((json) => console.log(json));