import { postLike } from './likes';

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
  likes.textContent = '';
  likes.id =`like-${movie.show.name}`;

  const star = document.createElement('i');
  star.classList.add('fa');
  star.classList.add('fa-star');
  star.addEventListener('click', ()=> {
    let temp = likes.textContent.split(' ');
    temp = parseInt(temp[1]);
    temp += 1;
    likes.textContent = `Likes: ${temp}`;

    postLike(movie.show.name);
  })

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comments';
  commentButton.classList.add('button');
  commentButton.classList.add('card-button');
  commentButton.type ="button"
  commentButton.readOnly = true;

  commentButton.addEventListener('click', () => {
    document.querySelector('.card-container').style.display = 'none';
    document.querySelector('.mname').textContent = cardTitle.textContent;
    document.querySelector('.movie_cover').src = image.src;
    document.querySelector('.summary_text').innerHTML = movie.show.summary;
    document.querySelector('.comments_container').style.display = 'block';
    document.querySelector('main').style.height = '30%';
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
