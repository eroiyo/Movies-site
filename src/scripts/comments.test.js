import fetchResultsJSON from './__mocks__/comments';

function isPromise(p) {
  return p && Object.prototype.toString.call(p) === "[object Promise]";
}

describe('test comment', () => {
  test('should fetch comments for a show and return a promise', () => {
    const results = fetchResultsJSON('Inside Comedy');
    expect(isPromise(results)).toBe(true);
  });
});