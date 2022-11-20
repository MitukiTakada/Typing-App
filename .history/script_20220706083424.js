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

typeInput.addEventListener("input", () => {

  typeSound.play()
  typeSound.currentTime = 0;

  const sentenceArray = typeDisplay.querySelectorAll("span")
  const arrayValue = typeInput.value.split("")
  let correct = true;
  sentenceArray.forEach((characterSpan, index) => {
    if ((arrayValue[index] == null)){
      characterSpan.classList.remove("correct")
      characterSpan.classList.remove("incorrect")
      correct = false;
    } else if(characterSpan.innerText == arrayValue[index]) {
      characterSpan.classList.add("correct")
      characterSpan.classList.remove("incorrect")
    } else {
      characterSpan.classList.add("incorrect")
      characterSpan.classList.remove("correct")
      wrongSound.volume = 0.1
      wrongSound.play();
      wrongSound.currentTime = 0;
      correct = false;
    }
  });

  if(correct == true ) {
    correctgSound.play()
    correctgSound.currentTime = 0;
    RenderNextSentence()
  }
})

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
originTime = 30;
function StartTimer() {
  startTime = new Date()
  setInterval(() => {
    timer.innerText = originTime - getTimer()
  }, 1000)
  if(timer.innerText >= 0) {
    timeUp()
  }
  function getTimer() {
    return Math f(new Date() - startTime)
  }
}
function timeUp() {
  RenderNextSentence()
}

RenderNextSentence();
