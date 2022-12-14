var introduction = document.getElementById("introduction");
var questions = document.getElementById("question");
var scores = document.getElementById("scores");
var highscores = document.getElementById("highscores");
var startButtom = document.getElementById("start-quiz");
var questionArray = [{
    question:"Commonly used data types DO NOT include:",
    choices:["strings","booleans","alerts","numbers"],
    solution:"alerts"

},
{
    question:"The condition in an if/else statement is enclosed with ___.", 
    choices:["quotes","curly brackets","parentheses","square brackets"],
    solution:"parentheses"
}
]
startButtom.addEventListener("click", function(){
    introduction.classList.add("hide");
    questions.classList.remove("hide");

})

