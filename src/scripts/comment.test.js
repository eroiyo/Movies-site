import submitFunction from './__mocks__/comment';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
describe('test the comment', () => {
  test('should post a comment', () => {
    const dom = new JSDOM('<body></body>');
    const itemId = document.createComment('div');
    itemId.classList.add('mname');
    const userId = document.createComment('div');
    userId.classList.add('your_name');
    const commentContent = document.createComment('textarea');
    itemId.value = 'Comedy Shorts';
    userId.value = 'Bandy';
    commentContent.value = 'too short';
  });
});
