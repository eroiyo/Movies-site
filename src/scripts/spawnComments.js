export const spawnComments = (results) => { // fetched movies
  const table = document.querySelector('.comments_table');
  while (table.firstChild) table.removeChild(table.firstChild);
  if (results.length > 0) {
    document.querySelector('.comments_number').textContent = `Comments (${results.length})`;
  } else {
    document.querySelector('.comments_number').textContent = 'Comments (0)';
  }
  const tr = document.createElement('tr');
  tr.classList.add('header_line');
  const thName = document.createElement('th');
  const thTime = document.createElement('th');
  const thComment = document.createElement('th');
  thName.textContent = 'usernamne';
  thTime.textContent = 'time';
  thComment.textContent = 'comment';
  tr.appendChild(thName);
  tr.appendChild(thTime);
  tr.appendChild(thComment);
  table.appendChild(tr);
  document.querySelector('.comments_number').style.fontSize = 'x-large';
  for (let i = results.length - 1; i >= 0; i -= 1) {
    const tr = document.createElement('tr');
    const { username } = results[i];
    const date = results[i].creation_date;
    const content = results[i].comment;
    const userNameDiv = document.createElement('td');
    const dateDiv = document.createElement('td');
    const contentDiv = document.createElement('td');
    userNameDiv.textContent = username;
    dateDiv.textContent = date;
    contentDiv.textContent = content;
    tr.appendChild(userNameDiv);
    tr.appendChild(dateDiv);
    tr.appendChild(contentDiv);
    table.appendChild(tr);
  }
};

export const summonComment = (itemId, movie, image, fetchComments) => {
  document.querySelector('.card-container').style.display = 'none';
  document.querySelector('.mname').textContent = itemId;
  document.querySelector('.movie_cover').src = image.src;
  document.querySelector('.summary_text').innerHTML = movie.show.summary;
  document.querySelector('.comments_container').style.display = 'block';
  document.querySelector('.card').style.display = 'block';
  document.querySelector('main').style.display = 'none';
  fetchComments(itemId);
};