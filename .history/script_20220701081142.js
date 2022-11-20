const RANDOM_SENTENCE_URL_API = "https:///api.quotable.io/random"

function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
}