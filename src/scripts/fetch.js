
import { spawnCards, valueUpdater } from './spawn-cards';
import { updateLikes } from './likes';


export const fetchResultsJSON = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=comedy#');
    const results = await response.json();
    return results;
  }

export const fetchfromAPI = async (target, section) => {
  
  fetchResultsJSON().then((results) => {
    console.log(results); // fetched movies
    results.splice(9, 1);
    const total = spawnCards(results, target);
    valueUpdater(section, total);
    updateLikes();
  });
}

export const Appcreation = () => {
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
