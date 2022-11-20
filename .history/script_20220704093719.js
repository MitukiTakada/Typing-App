const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random"
const typeDisplay = document.getElementById("typeDisplay")
const typeInput = document.getElementById("typeInput")
const timer = document.getElementById("timer")

function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) => response.json())
  .then((data) => data.content);
}

typeInput.addEventListener("input", () => {
  const sentenceArray = typeDisplay.querySelectorAll("span")
  const arrayValue = typeInput.value.split("")
  sentenceArray.forEach((characterSpan, index) => {
    if ((arrayValue[index] == null)){
      characterSpan.classList.remove("correct")
      characterSpan.classList.remove("incorrect")
    } else if(characterSpan.innerText == arrayValue[index]) {
      characterSpan.classList.add("correct")
      characterSpan.classList.remove("incorrect")
    } else {
      characterSpan.classList.add("incorrect")
      characterSpan.classList.remove("correct")
    }
  })
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
   })
   typeInput.innerText = "";

   StartTimer();
}

let startTime;
let originTime = 30;

function StartTimer () {
  timer.innerText = originTime;
  startTime = new Date()
  setInterval(() => {
    timer.innerText = originTime - getTimerTime();
    if(timer.innerText <= 0) t
  }, 1000)
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

RenderNextSentence();