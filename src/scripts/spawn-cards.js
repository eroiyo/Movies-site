import { postLike } from './likes';
import { spawnComments, summonComment } from './spawnComments';

const spawnCard = (movie, target) => {
  const fetchComments = (itemId) => { // the curly brace opens a multiline function
    async function fetchResultsJSON() {
      itemId = itemId.replace(/\s/g, '%20');
      const api = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments?item_id=${itemId}`;
      const response = await fetch(api);
      const results = await response.json();
      return results;
    }
    fetchResultsJSON().then((results) => { spawnComments(results); })
  };
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('card-image');
  if (movie.show.image !== null) {
    image.src = movie.show.image.medium;
  } else {
    image.src = '../src/img/404.jpg';
  }

  const cardTitle = document.createElement('h5');
  cardTitle.textContent = movie.show.name;

  const likeContainer = document.createElement('div');
  likeContainer.classList.add('like-genre-container');

  const likes = document.createElement('h6');
  likes.textContent = 'Likes: 0';
  likes.id = `like-${movie.show.name}`;

  const star = document.createElement('i');
  star.classList.add('fa');
  star.classList.add('fa-star');
  star.addEventListener('click', () => {
    let temp = likes.textContent.split(' ');
    temp = parseInt(temp[1], 10);
    temp += 1;
    likes.textContent = `Likes: ${temp}`;

    postLike(movie.show.name);
  });

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comments';
  commentButton.classList.add('button');
  commentButton.classList.add('card-button');
  commentButton.type = 'button';
  commentButton.readOnly = true;

  commentButton.addEventListener('click', () => { summonComment(cardTitle.textContent, movie, image, fetchComments); });

  likeContainer.appendChild(likes);
  likeContainer.appendChild(star);

  card.appendChild(image);
  card.appendChild(cardTitle);
  card.appendChild(likeContainer);
  card.appendChild(commentButton);

  target.appendChild(card);
};

export const spawnCards = (array, target) => {
  let items = 0;
  array.forEach((movie) => {
    items += 1;
    spawnCard(movie, target);
  });
  return items;
};

export const valueUpdater = (element, number) => {
  element.value = `${element.value} (${number})`;
};
