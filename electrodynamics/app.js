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
    new Question("The electric potential at a distance r from the charge Q is 794 V. The intensity of the field at that point is 438 N/C. If k= 8.99 x 10<sup>9</sup> Nm<sup>2</sup>/C<sup>2</sup>, then the charge Q is … .", ["4.6 x 10<sup>-6</sup> C","3.2 x 10<sup>-8</sup> C","2.4 x 10<sup>-7</sup> C","1.6 x 10<sup>-7</sup> C"], "1.6 x 10<sup>-7</sup> C"),

    new Question("Look at the circuit diagram below. The value of the unknown resistance R is … .<br><img src='https://lh5.googleusercontent.com/W63oga_5xJUnelaORE_3ZF69vmEuNPne4qw_zhS-8No4l3LbHYroyw6tBZCHfa4Tm7KsQ-e79Hxn4N6xArhk8wLoKetHBz9VRcXTYNYWEktVmKX1u5jmLheCmLPkX7i6crTlfYvz-z12z2583Mhb344mW8SFuTUJbP2BUZvv5qe3vPZcSBOGpBMu7CcMK5V2btRmsayLyQ' style='width:415px' />", ["3 Ω","6 Ω","9 Ω","12 Ω"], "6 Ω"),

    new Question("Look at the circuit diagram below. The equivalent resistance is … .<br><img src='https://lh4.googleusercontent.com/kN8Wcuq0KFXjj7MefU_RZY3gHm6mSrX9Og4Z_yVzuJCkF8Vd-XDzKUK6GntZeTrO5StDZCrZl60-turO4l6dlmklrGT2VISzDbPy1Ou7eY2wVc4WQX28d1u2lSeOTju04xChyTsoKaDvYk8HfS4H6cv2cbote5_Cdq_gXhOYNz1xsoBbusVAvsaGq6ubP1c91UxlygPmHw' style='width:500px' />", ["2 Ω","3 Ω","4 Ω","5 Ω"], "2 Ω"),

    new Question("The equivalent resistance across the voltage V in the electrical circuit below is … .<br><img src='https://lh4.googleusercontent.com/R1Tzbawe3NPw7WmBEe6t2o5eXd3YM86-ASmlKrCGhvCeQJtPnhjP-xdiQmKVdrgtdiEHUGJv43FIiMxv38NguUZOOGMbFuik-ZE1CsM-z0DW--qf-aLtGLfcUq3F0BGst8NE1PB8PZKstzN7_UBY10drKZNiY-Uj9-Q-87vluiEa3lx8mBMSCpH-BsMSj9a0G5DYXRRChA' style='width:500px' />", ["4 Ω","16 Ω","6 Ω","9 Ω"], "6 Ω"),

    new Question("The value of R in the circuit below is … .<br><img src='https://lh5.googleusercontent.com/0mq-Eq7zuZds2yy3YiXJgOVYKG6SeeKnH-k1PR0lhxqvX1lf8L4c5pD07qaQu2x7htY1i-xdSyjq8HG4kPX2zkBDQo-gmh7ngJPSYWL1OWWaTcpNPeFii055f5lGW6szRd38LBRwWGk_Dg8viahYWqXI0nc_b2MQh-efDsRmWIjB93HB2JQhqX1LMlO7A1n13Ugimu4dSg' style='width:460px' />", ["13.4 Ω","14.0 Ω","15.8 Ω","15.0 Ω"], "15.0 Ω"),

];


var quiz = new Quiz(questions);


populate();





