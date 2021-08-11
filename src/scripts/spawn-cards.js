import { dropRight, result } from "lodash";

export const spawnCard = (movie, target) => {

const fetchComments = () => { // the curly brace opens a multiline function
    async function fetchResultsJSON() {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments?item_id=Inside%20Comedy');
      const results = await response.json();
      return results;
    }

    fetchResultsJSON().then((results) => { // fetched movies
      results.splice(8, 1);
      console.log(results);
      const commentsContent = document.querySelector('.comments_content');
      for (let i = 0; i < results.length - 1; i += 1) {
        const commentDiv = document.createElement('div');
        
        const username = results[i].username;
        const date = results[i].creation_date;
        const content = results[i].comment;


        const userNameDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        const contentDiv = document.createElement('div');
        
        userNameDiv.textContent = username;
        dateDiv.textContent = date;
        contentDiv.textContent = content;

        commentDiv.appendChild(userNameDiv);
        commentDiv.appendChild(dateDiv);
        commentDiv.appendChild(contentDiv);
        commentDiv.style.display = 'flex';
        commentsContent.appendChild(commentDiv);
        userNameDiv.style.marginRight = '60px';
        dateDiv.style.marginRight = '60px';
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
    fetchComments();
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



'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments?item_id=Comedy%20Legends



Comedy Legends