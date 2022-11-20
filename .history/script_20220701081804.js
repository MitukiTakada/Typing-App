const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random"

function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) => response.json())
  .then((data) => console.log(data.content))
}

function RenderNextSentence() {
  const sentence = GetRandomSentence
}

GetRandomSentence();