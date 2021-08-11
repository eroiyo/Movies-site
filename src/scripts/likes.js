const fetch = require('node-fetch');


fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/likes', {
    method: 'POST',
    // Adding body or contents to send
    body: JSON.stringify({
      item_id: 'Comedy Showroom',
    }),

    // Adding headers to the request
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  .then((response) => response.json())
  .then((json) => console.log(json));