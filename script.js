let questions = [

{
question: "If A = {1,2,3} and B = {3,4,5}, what is A ∩ B ?",
choices: ["{1,2}", "{3}", "{1,2,3}", "{4,5}"],
answer: 1
},

{
question: "If relation R relates a set to itself, it is called?",
choices: ["Binary relation", "Equivalence relation", "Reflexive relation", "Universal relation"],
answer: 0
},

{
question: "If f(x) = x², what is f(3)?",
choices: ["6", "9", "3", "12"],
answer: 1
},

{
question: "If p = True and q = False, what is p ∧ q?",
choices: ["True", "False", "Undefined", "Both"],
answer: 1
},

{
question: "A group must satisfy closure, identity, inverse and?",
choices: ["Division", "Associativity", "Equality", "Mapping"],
answer: 1
}

]

let currentQuestion = 0
let score = 0

function startGame(){

let name = document.getElementById("playerName").value

if(name == ""){
alert("Enter your name first")
return
}

document.getElementById("startScreen").classList.add("hidden")
document.getElementById("gameScreen").classList.remove("hidden")

loadQuestion()

}

function loadQuestion(){

let q = questions[currentQuestion]

document.getElementById("question").innerText = q.question

let buttons = document.querySelectorAll(".choice")

for(let i=0;i<buttons.length;i++){

buttons[i].innerText = q.choices[i]

}

}

function checkAnswer(choice){

let correct = questions[currentQuestion].answer

if(choice == correct){

score++

document.getElementById("correctSound").play()

}else{

document.getElementById("wrongSound").play()

}

currentQuestion++

document.getElementById("score").innerText = "Score: " + score

if(currentQuestion < questions.length){

loadQuestion()

}else{

endGame()

}

}

function endGame(){

document.getElementById("gameScreen").classList.add("hidden")
document.getElementById("resultScreen").classList.remove("hidden")

document.getElementById("finalScore").innerText =
"Your Score: " + score + " / " + questions.length

}

function restart(){

location.reload()

}
