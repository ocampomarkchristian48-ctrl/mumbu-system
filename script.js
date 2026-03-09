let questions = [

{
q:"If A = {1,2,3} and B = {3,4,5}, what is A ∩ B ?",
c:["{1,2}","{3}","{1,2,3}","{4,5}"],
a:1
},

{
q:"If f(x)=x² what is f(4)?",
c:["8","12","16","4"],
a:2
},

{
q:"If p = True and q = False, what is p ∧ q?",
c:["True","False","Both","Undefined"],
a:1
},

{
q:"Which is a requirement of a group in group theory?",
c:["Associativity","Division","Inequality","Mapping"],
a:0
},

{
q:"A function must assign how many outputs for each input?",
c:["Many","One","Zero","Infinite"],
a:1
}

]

let current=0
let score=0

function startGame(){

let name=document.getElementById("playerName").value

if(name==""){
alert("Enter your name first")
return
}

document.getElementById("startScreen").classList.add("hidden")
document.getElementById("gameScreen").classList.remove("hidden")

loadQuestion()

}

function loadQuestion(){

let q=questions[current]

document.getElementById("question").innerText=q.q

let buttons=document.querySelectorAll(".choice")

for(let i=0;i<buttons.length;i++){

buttons[i].innerText=q.c[i]

}

}

function answer(choice){

if(choice==questions[current].a){

score++

}

current++

document.getElementById("score").innerText="Score: "+score

if(current<questions.length){

loadQuestion()

}else{

endGame()

}

}

function endGame(){

document.getElementById("gameScreen").classList.add("hidden")
document.getElementById("resultScreen").classList.remove("hidden")

document.getElementById("finalScore").innerText="Your Score: "+score+" / "+questions.length

}

function restartGame(){

location.reload()

}
