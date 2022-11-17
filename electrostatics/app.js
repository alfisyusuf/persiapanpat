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
    new Question("A particle physicist analyzes the results of her particle collider experiment. The analysis shows that a nucleus involved in the collision had a charge of 8.8 x 10<sup>-19</sup> C ± 0.2 x 10<sup>-19</sup> C. The magnitude of an electron's charge is e = 1.60 x 10<sup>-19</sup> C. About the validity of the experimental results, the particle physicist should … .", ["not be concerned, since the observed charge is greater than e","not be concerned, since the observed charge is a multiple of e","be concerned, since it is not possible to have an observed charge greater than 5e","be concerned, since the observed charge is not an integer multiple of e"], "be concerned, since the observed charge is not an integer multiple of e"),

    new Question("A researcher is analyzing a particle decay process. The data for one experiment shows a particle of charge -3e decaying to form two new particles. One of the new particles has a charge of -e.<br><img src='https://lh3.googleusercontent.com/whLUBILKOFSGrSsAsDX4-qBYQLLAWKXqPQKaG7oVpgDWVPkv8edPPkKr5hCEWHtjCMbDWXdyj1CsFxHr0xoCvXttTaFTh6hS62ACHUJT48lS0P1KL3HWDVLPVHojXUuOKu1_3Nkkdvwcia7KoEjT6m5JKYIYcdo9pK7ffQwP-fPQdxx1qFQqOTovDVE4uGicdnz2ouNi_A' style='height:195px; width:275px' /><br>The charge of the particle Q, is … .", ["-2e","-3e","e","2e"], "-2e"),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

];


var quiz = new Quiz(questions);


populate();





