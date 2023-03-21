
var timeLeft = document.getElementById("countdown");
var quizElement = document.getElementByClass("#quiz-question")
var buttonElement = document.getElementByClass("start-quiz")
var startTime = 30;
var quiz = [question1, question2, question3, question4,question5] 
var score = timeLeft
function setTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    startTime--;
    if (correctAnswer === true)
    startTime++;
    // Should decrement the timer faster by 2 seconds if there is a wrong answer
    else if (incorrectAnswer === false)
    startTime -- * 2 
    // if there is any time left it will go in the time left function
    else if (startTime <= 1)
    startTime = timeLeft;
    else (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
console.log(timeLeft);
}

function quizQuestion(event) {
    onclick.event
var question1 =  {
    prompt: "Which School of Magic has the least amount of cantrips",
        a: "Illusion", 
        b: "Evocation",
        c: "Necromancy",
        d: "Enchantment",
    answer: correctAnswer = a, incorrectAnswer = b,c,d
};
var question2 =  {
    prompt: "What is a warlock's go to spell",
        a: "Armor of Agathys", 
        b: "Hex",
        c: "Eldritch Blast",
        d: "Wish",
    answer: correctAnswer = c, incorrectAnswer = a,b,d
};
var question3 =  {
    prompt: "Which of these spells does NOT do cold damage",
        a: "Chill Touch", 
        b: "Frostbite",
        c: "Cone of Cold",
        d: "Ray of Frost",
    answer: correctAnswer = a, incorrectAnswer = b,c,d
};
 question4 =  {
    prompt: "Which of these spells is concentration",
        a: "Moonbeam", 
        b: "Haste",
        c: "Bless",
        d: "All of the above",
    answer: correctAnswer = d, incorrectAnswer = a,b,c
};
var question5 =  {
    prompt: "Which spell is infamous in terms of friendly fire",
        a: "Wild Magic", 
        b: "Magic Missile",
        c: "Fireball",
        d: "Spike Growth",
    answer: correctAnswer = c, incorrectAnswer = a,b,d
}
};