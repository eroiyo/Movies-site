/**
 * @jest-environment jsdom
 */

import 'regenerator-runtime/runtime';

const spawnCards = require('../scripts/spawn-cards');
const spawnComments = require('../scripts/spawnComments');

document.body.innerHTML = `<body>
<header>
  <nav>
    <div class="nav-element"><input type="button" class="button comedy" value="Comedy"></div>
  </nav>
</header>
<div class="comments_container">
<div>
  <div class="movie_cover_container">
      <img src="../src/img/frozen.png" alt="movie_cover" class="movie_cover">
      <div><img src="../src/img/close-window.png" alt="close_window" class="close"></div>
  </div>
  <div class="movie_name">
      <h2 class="mname">Frozen</h2>
  </div>
</div>
<div class="data">
<div class="summary">
  <h4>summary</h4>
  <div class="summary_text"></div>
</div>
</div>
<div class="comments_number">Comments()</div>
<div class="comments_content">
<table class="comments_table">
</table>
</div>
<div class="comments_number"><h4>Add a comment</h4></div>
<form class="add_comment" id="add_comment">
  <input type="text" placeholder="Your name" class="your_name">
  <textarea name="comment">Your insights</textarea><br>
  <input type="submit" value="Comment" class="submit_button">
</form>
</div>
<main>
  <div class="card-container"></div>
</main>
</body>`;
const target = document.querySelector('.card-container');
const section = document.querySelector('.comedy');

describe('all the counters are working correctly', () => {
  test('the numbers of elements in the container should be the same as the outpot of the function', () => {
    const testing = [{ show: { image: { medium: 'example' }, name: 'example', summary: 'example' } }];
    const number = spawnCards.spawnCards(testing, target);
    spawnCards.valueUpdater(section, number);
    expect(section.value).toBe('Comedy (1)');
  });
  test('the numbers of comments in the container should be the same as the outpot of the function', () => {
    const testing = [{ username: 'example', date: 'example', content: 'example' }];
    spawnComments.spawnComments(testing);
    const number = document.querySelector('.comments_number');
    expect(number.textContent).toBe('Comments (1)');
  });
});