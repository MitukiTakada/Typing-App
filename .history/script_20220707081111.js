const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random"
const typeDisplay = document.getElementById("typeDisplay")
const typeInput = document.getElementById("typeInput")
const timer = document.getElementById("timer")
const typeSound = new Audio("./audio/typing-sound.mp3")
const wrongSound = new Audio("./audio/wrong.mp3")
const correctgSound = new Audio("./audio/correct.mp3")

function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) => response.json())
  .then((data) => data.content)
}

typeInput.addEventListener

async function RenderNextSentence () {
  const sentence = await GetRandomSentence();
  typeDisplay.innerText = "";
  let oneText = sentence.split("")
  oneText.forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    typeDisplay.appendChild(characterSpan)
  })
  typeInput.value= ""

  StartTimer()
}

let startTime;
let originTime = 30;
function StartTimer() {
  startTime = new Date()
  timer.innerText = originTime;
  setInterval(() => {
    timer.innerText = originTime - getTimer()
    if(timer.innerText <= 0) {
      timeUp()
    }
  }, 1000)
  function getTimer() {
    return Math.floor((new Date() - startTime) / 1000);
  }
}
function timeUp() {
  RenderNextSentence()
}

