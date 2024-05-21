let mainContainer = document.getElementById('game')
let scoreDiv = document.getElementById('score')
let questionsCountDiv = document.getElementById('questions-count')
let answerInput = document.getElementById('answer')
let questionsDiv = document.getElementById('questions')
let solutionDiv = document.getElementById('solution')
let proceedButton = document.getElementById('proceed-button')
let answerButton = document.getElementById("answer-button")

let score = 0
let question
let questionsAnswered = 0

let questions = [{"question": 'donrn yoy thibnk youve made this plafe kind of prosion like?', "answer": "Don't you think you've made this place kind of prison like?"}, 
{"question": 'i wtaryae curisng in clals', "answer": "I started cursing in class"}, 
{"question": 'my shcodk is jsur right nextsh to a candlsl in not afridso', "answer": "My school is just right next to a canal I'm not afraid"}, 
{"question": "so u abuse yr pksuehies also?", "answer": "So you abuse your plushies also?"},
{"question": "i so nor eat socks", "answer": "I do not eat socks"},
{"question": "exvusue uouo", "answer": "Excuse you"},
{"question": "j are a sock acsue piepw on the itnentet tolf em tod os so", "answer": "I ate a sock because people on the Internet told me to"},
{"question": "wgen arw we plannjng our nexy ttrip?", "answer": "When are we planning our next trip?"},
{"question": "cantn wait to ahnh out thsi weekend", "answer": "Can't wait to hang out this weekend"},
{"question": "anu idehaus on whar we shoulf fo?", "answer": "Any ideas on what we should do?"},
{"question": "j for that tickets for thayd concert we were tlakjnf abour", "answer": "I got the tickets for that concert we've been talking about!"},
{"question": "jusr wanted top drop by and sau ho", "answer": "Just wanted to drop by and say hi"},
{"question": "wanr to genan a cofftr ans catch yo?", "answer": "want to get a coffee and catch up?"},
{"question": "rmemeber thay embarasing mkmemtn we shatetr?", "answer": "remember that embarrassing moment we shared?"},
{"question":"i forgor jow she loom likr", "answer": "I forgot how she looks like"},
{"question": "at is go grwta abour firdyabthe thirntnwth", "answer": "What is so great about Friday the thirteenth"},
{"question": "um going tofaik everything now", "answer": "I'm going to fail everything now"},
{"question": "a sfam i mistbsay", "answer":"A scam I must say"},
{"question": "i cant jusr make typod without heing tolf whafat to say", "answer":"I can't just make typos without being told what to say"},
{"question": "are uou actuallu makkinf a gamr", "answer":"Are you actually making a game"},
{"question": "ill lairjen to it alwte", "answer":"I'll listen to it later"},
{"question": "butbi leep having onterests", "answer":"But I keep having interests"},
{"question": "wre uouo prouf of ew", "answer": "Are you proud of me"},
{"question": "u out slat on brbesd?", "answer": "You put salt on bread?"},
{"question": "it ywlld hy itself thi", "answer": "It falls by itself though"}
]

console.log(questions.length)

function Random(highest, lowest = 0) {
  return Math.floor(Math.random() * (highest + 1 - lowest)) + lowest
}

function Choose(array) {
  return array[Random(array.length - 1)]
}

function MakeQuestion() {
  question = Choose(questions)
  questionsDiv.innerHTML = question.question
}

function CheckAnswer() {
  let solutionArray = question.answer.split(' ')
  let markArray = new Array(solutionArray.length)
  let answerArray = answerInput.value.trim().split(' ')
  
  for (let i = 0; i < solutionArray.length; i++) {
    if (answerArray[i] == undefined) {
      break
    }
    if (solutionArray[i].toLowerCase() == answerArray[i].toLowerCase()) {
      markArray[i] = 'T'
      score += 1
    }
  }

  let solutionText = ''

  for (let i = 0; i < solutionArray.length; i++) {
    let text = solutionArray[i]
    if (markArray[i] == 'T') {
      text = `<span style="color:#3BAE0A">${solutionArray[i]}</span>`
    }
    text += ' '
    solutionText += text
  }
  
  questionsAnswered += 1
  proceedButton.disabled = false
  answerButton.disabled = true

  solutionDiv.innerHTML = solutionText
  scoreDiv.innerHTML = `Score: ${score}`
  questionsCountDiv.innerHTML = `Questions: ${questionsAnswered}`
}

function NextQuestion() {
  proceedButton.disabled = true
  answerButton.disabled = false
  answerInput.value = ''
  solutionDiv.innerHTML = ''
  MakeQuestion()
}

MakeQuestion()