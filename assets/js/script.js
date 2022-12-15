var introduction = document.getElementById("introduction");
var questions = document.getElementById("question");
var scores = document.getElementById("scores");
var highscores = document.getElementById("highscores");
var startButtom = document.getElementById("start-quiz");
var clock = document.getElementById("clock")
var questionArray = [{
    question:"Commonly used data types DO NOT include:",
    choices:["strings","booleans","alerts","numbers"],
    solution:"alerts"

},
{
    question:"The condition in an if/else statement is enclosed with ____.", 
    choices:["quotes","curly brackets","parentheses","square brackets"],
    solution:"parentheses"
},
{
    question:"Arrays in JavaScript can be used to store _____.",
    choices:["numbers and strings","other arrays","booleans","all of the above"],
    solution:"all of the above"
},
{
    question:"String values must be encloses within _____ when being assigned to variables",
    choices:["commas","curly brackets","quotes","parentheses"],
    solution:"quotes"
},
{
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    choices:["JavaScript","terminal/bash","for loops","console.log"],
    solution:"console.log"
}
]
var timeRemaining= questionArray.length*15;
var clockId;
startButtom.addEventListener("click", function(){
    introduction.classList.add("hide");
    questions.classList.remove("hide");
clockId=setInterval(startTimer,1000)
displayQuestion();
})

var index=0
function displayQuestion(){
    questions.innerHTML=`
    <heading>${questionArray[index].question}</heading>
    <ol id ="choice-1">
        <li>${questionArray[index].choices[0]}</li>
        <li>${questionArray[index].choices[1]}</li>
        <li>${questionArray[index].choices[2]}</li>
        <li>${questionArray[index].choices[3]}</li>
    </ol>
    `
    var li= document.querySelectorAll("li");
    for (i=0; i<li.length; i++){
        li[i].addEventListener("click",nextQuestion)
    }
   
    
}

function nextQuestion(){
    console.log(this.textContent);

if (questionArray[index].solution===this.textContent){
    alert("correct")
}  
else {
    alert("incorrect")
    timeRemaining= timeRemaining-15
}
    index++
    displayQuestion();
} 
function startTimer(){
clock.textContent=timeRemaining--
}
