var introduction = document.getElementById("introduction");
var questions = document.getElementById("question");
var scores = document.getElementById("scores");
var highScores = document.getElementById("highscores");
var startButtom = document.getElementById("start-quiz");
var time = document.getElementById("time");
var arriba = document.getElementById("head");                  // variables created for ids andd classes slectors //
var clock = document.getElementById("clock");
var finalScore = document.getElementById("finalscore");
var playerScore = document.getElementById("playerscore")
var questionArray = [{
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],    // Array variable created for questions, choices and solutions used on quiz //
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
var scoresArray = JSON.parse(localStorage.getItem("highscore")) || []; // creating a variable for user's scores transformed aready into JavaScript Object //
var user = document.getElementById("user");
var winners = document.getElementById("winners")
var timeRemaining = questionArray.length * 15; // starting Time variable created
var clockId;
startButtom.addEventListener("click", function () { // function to start the quiz
    introduction.classList.add("hide");
    questions.classList.remove("hide");
    clockId = setInterval(startTimer, 1000)
    displayQuestion();
})

var index = 0
function displayQuestion() { // function to show questions
    questions.innerHTML = `
    <h2>${questionArray[index].question}</h2>
    <ol>
        <li><button class="btn btn-secondary">${questionArray[index].choices[0]}</button></li>
        <li><button class="btn btn-secondary">${questionArray[index].choices[1]}</button></li>
        <li><button class="btn btn-secondary">${questionArray[index].choices[2]}</button></li>
        <li><button class="btn btn-secondary">${questionArray[index].choices[3]}</button></li>
    </ol>
    `
    var li = document.querySelectorAll(".btn-secondary");
    for (i = 0; i < li.length; i++) {

        li[i].addEventListener('keypress', function (event) {
            if (event.key === "Enter") {
                event.preventDefault();

            }
        })

        li[i].addEventListener("click", nextQuestion);



    }
}




function nextQuestion() { //function to check right answers and jump to next question
    console.log(this.textContent);

    if (questionArray[index].solution === this.textContent) {
        var correctAnswer = document.createElement("p");
        correctAnswer.textContent = "Correct!";
        const underLine = document.createElement("hr");
        correctAnswer.appendChild(underLine);
        questions.appendChild(correctAnswer);
    }
    else {
        var incorrectAnswer = document.createElement("p");
        incorrectAnswer.textContent = "Incorrect!";
        const underLine = document.createElement("hr");
        incorrectAnswer.appendChild(underLine)
        questions.appendChild(incorrectAnswer);

        timeRemaining = timeRemaining - 10
    }
    setTimeout(() => { 
        index++                          //stops timer and shows the finalscore page once questions are done
        if (index >= questionArray.length) {
            scores.classList.remove("hide");
            questions.classList.add("hide");
            clearInterval(clockId)
            finalScore.textContent = clock.textContent

        }
        else {
            displayQuestion();
        }

    }, 1000)


}
function startTimer() { // function that will give final score as clock time remaining
    if (timeRemaining === 0) {
        scores.classList.remove("hide");
        questions.classList.add("hide");
        clearInterval(clockId)
        finalScore.textContent = clock.textContent
    }
    clock.textContent = timeRemaining--
}

playerScore.addEventListener("click", function () { // function to save users' scores in Local Storage
    scoresArray.push(user.value + "-" + clock.textContent);
    localStorage.setItem("highscore", JSON.stringify(scoresArray));
    scores.classList.add("hide");
    arriba.classList.add("hide");
    highScores.classList.remove("hide");         
    winners.innerHTML = "";
    for (var i = 0; i < scoresArray.length; i++) {
        var li = document.createElement("li");
        li.textContent = scoresArray[i];
        winners.appendChild(li);
    }
})

var backButton = document.getElementById("back");
var clearScores = document.getElementById("clear");

backButton.addEventListener("click", function () { //function to go back to quiz front page
    location.reload();
})

clearScores.addEventListener("click", function () { // function to clear users' scores
    localStorage.setItem("highscore", JSON.stringify([]))
    winners.innerHTML = "";

})

var checkScores = document.getElementById("checkScores");

checkScores.addEventListener("click", function () { //function to check on users' scores
    introduction.classList.add("hide");
    questions.classList.add("hide");
    scores.classList.add("hide");
    arriba.classList.add("hide");
    highScores.classList.remove("hide");
    winners.innerHTML = "";
    for (var i = 0; i < scoresArray.length; i++) {
        var li = document.createElement("li");
        li.textContent = scoresArray[i];
        winners.appendChild(li);
    }
})