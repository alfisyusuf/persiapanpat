function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Find the electric force when the charge (q) of 3C is subjected to an electric field (E) of 5 units.<br><br>use F=qE", ["15","30","45","50"], "15"),

    new Question("Find the magnetic force when a charge 7 C with flux density of 4 units is having a velocity of 2 m/s.", ["21","42","28","56"], "56"),

    new Question("Find the electric field when the velocity of the field is 12 m/s and the flux density is 3.75 units.", ["45","15","30","60"], "45"),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

];


var quiz = new Quiz(questions);


populate();





