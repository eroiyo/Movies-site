const submitFunction = (dom) => {
  const postComment = (itemId, userName, commentContent) => {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments', {

      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        item_id: itemId,
        username: userName,
        comment: commentContent,
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

      .then((response) => response.json())
    // eslint-disable-next-line no-console
      .then((json) => console.log(json));
  };

  //   once the event listener is activated this code will be executed
  const itemId = dom.window.document.querySelector('.mname').textContent;
  const userName = dom.windowdocument.querySelector('.your_name').value;
  const commentContent = dom.window.document.querySelector('textarea').value;
  postComment(itemId, userName, commentContent);
};

export default submitFunction;