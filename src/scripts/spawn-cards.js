export const spawnCard = (movie, target) => {
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

  const commentButton = document.createElement('input');
  commentButton.value = 'Comments';
  commentButton.classList.add('button');
  commentButton.classList.add('card-button');

  likeContainer.appendChild(likes);
  likeContainer.appendChild(star);

  card.appendChild(image);
  card.appendChild(cardTitle);
  card.appendChild(likeContainer);
  card.appendChild(commentButton);

  target.appendChild(card);
};
export spawnCards = (array, target) => {
  array.forEach(movie => {
    spawnCard(movie, target);
  });
};

