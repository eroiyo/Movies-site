import '../style.css';

const fetch = require('node-fetch');

fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/", {
      
    // Adding method type
    method: "POST",
      
    // Adding body or contents to send
    body: JSON.stringify({
        name: "my new amazing game",
    }),
      
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
  
// Converting to JSON
.then(response => response.json())
  
// Displaying results to console
.then(json => console.log(json));


document.querySelector('.submit').addEventListener('click', () => {
});
