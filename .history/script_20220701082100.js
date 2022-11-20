const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random"
const typeDisplay = document.

function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) => response.json())
  .then((data) => data.content);
}

async function RenderNextSentence() {
  const sentence = await GetRandomSentence();
  console.log(sentence)
}
