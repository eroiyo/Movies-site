const fetch = require('node-fetch');

async function fetchResultsJSON() {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments?item_id=Inside%20Comedy');
    const results = await response.json();
    return results;
  }
  
  fetchResultsJSON().then((results) => {
    console.log(results); // fetched movies
    results.splice(8, 1);
  });
