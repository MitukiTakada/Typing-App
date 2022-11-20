const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random"
const typeDisplay = document.getElementById("typeDisplay")
const typeInput = document.getElementById("typeInput")

function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) => response.json())
  .then((data) => data.content);
}

typeInput.addEventListener("input", () => {
  const 
})

async function RenderNextSentence() {
  const sentence = await GetRandomSentence();
  console.log(sentence);
  typeDisplay.innerText = "";
   let oneText = sentence.split("")
   oneText.forEach((character) => {
    const characterSpan = document.createElement("span")
    characterSpan.innerText= character;
    console.log(characterSpan)
    typeDisplay.appendChild(characterSpan)
    characterSpan.classList.add("correct")
   })
   typeInput.innerText = "";
}

RenderNextSentence();