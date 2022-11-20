const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random"
const typeDisplay = document.getElementById("typeDisplay")
const typeInput = document.getElementById("typeInput")
const timer = document.getElementById("timer")
const typeSound = new Audio("./audio/typing-sound.mp3")
const wrongSound = new Audio("./audio/wrong.mp3")
const correctgSound = new Audio("./audio/correct.mp3")

function GetRandomSentence() {
  fetch(RANDOM_SENTENCE_URL_API)
  .then()
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
   typeInput.value = "";

   StartTimer();
}

let startTime;
let originTime = 30;

function StartTimer () {
  timer.innerText = originTime;
  startTime = new Date()
  setInterval(() => {
    timer.innerText = originTime - getTimerTime();
    if(timer.innerText <= 0) TimeUp()
  }, 1000)
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}
function TimeUp () {
  RenderNextSentence()
}

RenderNextSentence();