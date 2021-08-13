import { spawnCards, valueUpdater } from './spawn-cards';

export const fetchResultsJSON = async (url) => {
  const response = await fetch(url);
  const results = await response.json();
  return results;
};

export const fetchfromAPI = async (target, section, url, from, many) => {
  fetchResultsJSON(url).then((results) => {
    results.splice(from, many);
    const total = spawnCards(results, target);
    valueUpdater(section, total);
  });
};

export const Appcreation = () => {
  const request = new XMLHttpRequest();
  const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  request.open('POST', requestURL, true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send();
};
