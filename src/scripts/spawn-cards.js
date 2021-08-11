import { dropRight, result } from "lodash";

export const spawnCard = (movie, target) => {
  const fetchComments = (itemId) => { // the curly brace opens a multiline function
    async function fetchResultsJSON() {
      itemId = itemId.replace(/\s/g, '%20');
      const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments?item_id=' + itemId
      const response = await fetch(api);
      const results = await response.json();
      return results;
    }

    fetchResultsJSON().then((results) => { // fetched movies
      const commentsContent = document.querySelector('.comments_content');
      while (commentsContent.firstChild) commentsContent.removeChild(commentsContent.firstChild);
      for (let i = 0; i < results.length; i += 1) {
        const commentDiv = document.createElement('div');
        commentDiv.style.display = 'flex';
        const username = results[i].username;
        const date = results[i].creation_date;
        const content = results[i].comment;
        const userNameDiv = document.createElement('div');
        userNameDiv.style.marginRight = '60px';
        const dateDiv = document.createElement('div');
        dateDiv.style.marginRight = '60px';
        const contentDiv = document.createElement('div');
        userNameDiv.textContent = username;
        dateDiv.textContent = date;
        contentDiv.textContent = content;
        commentDiv.appendChild(userNameDiv);
        commentDiv.appendChild(dateDiv);
        commentDiv.appendChild(contentDiv);
        commentsContent.appendChild(commentDiv);
      }
    });
  };

  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('card-image');
  image.src = movie.show.image.medium;

  const cardTitle = document.createElement('h5');
  cardTitle.textContent = movie.show.name;

  const likeContainer = document.createElement('div');
  likeContainer.classList.add('like-genre-container');

  const likes = document.createElement('h6');
  likes.textContent = 'Likes: 9';

  const star = document.createElement('i');
  star.classList.add('fa');
  star.classList.add('fa-star');

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comments';
  commentButton.classList.add('button');
  commentButton.classList.add('card-button');

  commentButton.addEventListener('click', () => {
    document.querySelector('.card-container').style.display = 'none';
    document.querySelector('.mname').textContent = cardTitle.textContent;
    document.querySelector('.movie_cover').src = image.src;
    document.querySelector('.summary_text').innerHTML = movie.show.summary;
    document.querySelector('.comments_container').style.display = 'block';
    document.querySelector('main').style.height = '30%';
    const itemId = cardTitle.textContent;
    fetchComments(itemId);
  });

  likeContainer.appendChild(likes);
  likeContainer.appendChild(star);

  card.appendChild(image);
  card.appendChild(cardTitle);
  card.appendChild(likeContainer);
  card.appendChild(commentButton);

  target.appendChild(card);
};

export const spawnCards = (array, target) => {
  array.forEach((movie) => {
    spawnCard(movie, target);
  });
};
