const getLikes = async () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/likes', {
  method: 'GET',
  // Adding headers to the request
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => (json));

export const updateLikes = async () => {
  const array = await getLikes();
  array.forEach((likes) => {
    console.log(likes)
    const target = document.getElementById(`like-${likes.item_id}`);
    console.log(target);
    if(target !== null){
      target.textContent = `Likes: ${likes.likes}`;
    }
  });
};

export const postLike = async (id) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/likes', {
    method: 'POST',
    // Adding body or contents to send
    body: JSON.stringify({
      item_id: id,
    }),
    // Adding headers to the request
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};