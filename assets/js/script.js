var introduction = document.getElementById("introduction");
var questions = document.getElementById("question");
var scores = document.getElementById("scores");
var highScores = document.getElementById("highscores");
var startButtom = document.getElementById("start-quiz");
var time = document.getElementById("time");
var arriba = document.getElementById("head");
var clock = document.getElementById("clock");
var finalScore = document.getElementById("finalscore");
var playerScore = document.getElementById("playerscore")
var questionArray = [{
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    solution: "alerts"

},
{
    question: "The condition in an if/else statement is enclosed with ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    solution: "parentheses"
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    solution: "all of the above"
},
{
    question: "String values must be encloses within _____ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    solution: "quotes"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    solution: "console.log"
}
]
var scoresArray = JSON.parse(localStorage.getItem("highscore"))||[];
var user = document.getElementById("user");
var winners = document.getElementById("winners")
var timeRemaining = questionArray.length * 15;
var clockId;
startButtom.addEventListener("click", function () {
    introduction.classList.add("hide");
    questions.classList.remove("hide");
    clockId = setInterval(startTimer, 1000)
    displayQuestion();
})

var index = 0
function displayQuestion() {
    questions.innerHTML = `
    <h2>${questionArray[index].question}</h2>
    <ol>
        <li><button class="btn btn-secondary">${questionArray[index].choices[0]}</button></li>
        <li><button class="btn btn-secondary">${questionArray[index].choices[1]}</button></li>
        <li><button class="btn btn-secondary">${questionArray[index].choices[2]}</button></li>
        <li><button class="btn btn-secondary">${questionArray[index].choices[3]}</button></li>
    </ol>
    `
    var li = document.querySelectorAll("li");
    for (i = 0; i < li.length; i++) {
        li[i].addEventListener("click", nextQuestion)
    }


}

function nextQuestion() {
    console.log(this.textContent);

    if (questionArray[index].solution === this.textContent) {
        alert("correct")
    }
    else {
        alert("incorrect")
        timeRemaining = timeRemaining - 10
    }
    index++
    if (index >= questionArray.length) {
      scores.classList.remove("hide");
      questions.classList.add("hide");
      clearInterval(clockId)
      finalScore.textContent = clock.textContent
    
    }
    else {
        displayQuestion();
    }
}
function startTimer() {
    clock.textContent = timeRemaining--
}

playerScore.addEventListener("click",function(){
    scoresArray.push(user.value+"-"+clock.textContent);
    localStorage.setItem("highscore",JSON.stringify(scoresArray));
    scores.classList.add("hide");
    arriba.classList.add("hide");
    highScores.classList.remove("hide");
    winners.innerHTML="";
    for (var i=0; i<scoresArray.length;i++){
        var li= document.createElement("li");
        li.textContent=scoresArray[i];
        winners.appendChild(li);
 }  
})

var backButton = document.getElementById("back");
var clearScores= document.getElementById("clear");

backButton.addEventListener("click",function(){
    location.reload(); 
})

clearScores.addEventListener("click",function(){
    localStorage.setItem("highscore",JSON.stringify([]))
    winners.innerHTML="";
    
})

var checkScores = document.getElementById("checkScores");

checkScores.addEventListener("click",function(){
    introduction.classList.add("hide");
    questions.classList.add("hide");
    scores.classList.add("hide");
    arriba.classList.add("hide");
    highScores.classList.remove("hide");
    winners.innerHTML="";
    for (var i=0; i<scoresArray.length;i++){
        var li= document.createElement("li");
        li.textContent=scoresArray[i];
        winners.appendChild(li);
 }    
})