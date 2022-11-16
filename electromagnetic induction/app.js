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

    new Question("Find the Lorentz force of a charge 3 C having an electric field of 6 units and magnetic field of 9 units with a velocity 2 m/s.<br><br>use F=qE+q(v&#10005;B)", ["324","36","72","6"], "72"),

    new Question("The force on a conductor of length 14 cm having current 9 A and flux density 6.75 units at an angle of 60&deg; is", ["8.88","7.36","9.75","56"], "7.36"),

    new Question("The force per unit length of two conductors carrying equal currents of 7 A separated by a distance of 40 cm in air(in 10<sup>-6</sup> order)", ["1.225 x 10<sup>-5</sup>","1.225 x 10<sup>-6</sup>","7.225 x 10<sup>-5</sup>","1.65 x 10<sup>-7</sup>"], "1.225 x 10<sup>-5</sup>"),

    new Question("When currents are moving in the opposite direction in two conductors, then the force will be", ["attractive","repulsive","retracting","opposing"], "repulsive"),

    new Question("Find the flux density due to a conductor of length 6m and carrying a current of 30 A(in 10-7 order)<br><br><img src='/electromagnetic induction/img/CodeCogsEqn.svg'><br><br><img src='/electromagnetic induction/img/CodeCogsEqn(1).svg'>", ["1","10","100","0.1"], "10"),

    new Question("Find the maximum force of the conductor having length 70 cm, current 2.05 A and flux density of 13 units.", ["0.110","38.071","18.655","56.876"], "18.655"),

    new Question("For a transformer with primary turns 300, secondary turns 100, if 30 A current is flowing through primary, we will get ___________", ["90 A","10 A","60 A","120"], "90 A"),

    new Question("What is the function of a transformer?", ["Transformer is used to step down or up the DC voltages and currents","Transformer converts DC to AC voltages","Transformer converts AC to DC voltages","Transformer is used to step down or up the AC voltages and currents"], "Transformer is used to step down or up the AC voltages and currents"),

    new Question("Primary winding of a transformer ______________", ["Is always a low voltage winding","Cannot be determined","Could either be a low voltage or high voltage winding","Is always a high voltage winding"], "Could either be a low voltage or high voltage winding"),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

    new Question("", ["","","",""], ""),

];


var quiz = new Quiz(questions);


populate();





