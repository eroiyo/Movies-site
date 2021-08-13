async function fetchResultsJSON(itemId) {
  itemId = itemId.replace(/\s/g, '%20');
  const api = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6FJ5Iv0xZsu9v3INtJx/comments?item_id=${itemId}`;
  const response = await fetch(api);
  const results = await response.json();
  return results;
}

export default fetchResultsJSON;