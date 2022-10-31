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
    new Question("Look at the picture below. The strength of the magnetic field at point P is &hellip; . <br> <img src='https://lh6.googleusercontent.com/z3vpnADVMx7mdmeLCUHWXELuQMuQAJPSNDKaSkUXtENjlfI5RXzwugicGUFV4gmOffm1iamQGbrIcYxGOh4BeC7645dbwrlTayYJzGIMiJJQ7itE2jHZnHWaRlWuPRQBxbW7pXbM1lb3kcT2Hr2HpE7VbkOTuxx2sjHz3AvUq3GSX4U397iuIapKlYM' style='height:145px; width:221px' />", ["1.10<sup>-7</sup> Tesla", "2.10<sup>-7</sup> Tesla","3.10<sup>-7</sup> Tesla", "4.10<sup>-7</sup> Tesla"], "1.10<sup>-7</sup> Tesla"),

    new Question("Look at the picture below. The direction of the magnetic field at point P is &hellip; . <br> <img src='https://lh6.googleusercontent.com/z3vpnADVMx7mdmeLCUHWXELuQMuQAJPSNDKaSkUXtENjlfI5RXzwugicGUFV4gmOffm1iamQGbrIcYxGOh4BeC7645dbwrlTayYJzGIMiJJQ7itE2jHZnHWaRlWuPRQBxbW7pXbM1lb3kcT2Hr2HpE7VbkOTuxx2sjHz3AvUq3GSX4U397iuIapKlYM' style='height:145px; width:221px' />", ["to the right", "to the left","entering the reading screen", "out of the reading screen"], "entering the reading screen"),
    

    new Question("The electric current I flows on the conductor wire. The magnetic induction at the center of the circle is … . (µ<sub>o</sub> = 4π.10<sup>-7</sup> Wb.m<sup>-1</sup>.A<sup>-1</sup>)<br><img src='https://lh6.googleusercontent.com/rKVXm6i8mnfCX6ggDWKLBcyt7PgMhux_Du8yMd4vauFzmR9AFwuOkOkr6xTKxZTW06Kjkp4rMw-mSPj5lc6HsrIQT9U3bVa0jbM0ujc7ytIxucFPh_pikb3u-3GVzKWX_IIvb2LT6UPKFfz5GY5FLqP8rCY731nLFmr0Y9-n51Z4z1rrcjmidMA1uKM' style='height:239px; width:240px' />", ["4π x 10<sup>-5</sup> Tesla", "3π x 10<sup>-9</sup> Tesla","2π x 10<sup>-5</sup> Tesla", "2π x 10<sup>-7</sup> Tesla"], "2π x 10<sup>-5</sup> Tesla"),
    

    new Question("A solenoid consists of 1000 windings and is 0.500 cm long. A current of 2.00 amps is supplied to the windings. The magnitude of the strong, constant magnetic field which runs through the center of the solenoid is &hellip; .", ["0.308 T", "0.407 T","0.503 T", "0.500 T"], "0.503 T"),
    
    new Question("A current of 1.5 A flows through the windings of a large, thin toroid with 200 turns per meter and a radius of 1 meter. The magnetic field within it is &hellip; .", ["3 x 10<sup>5</sup> T", "6 x 10<sup>5</sup> T","1.2 x 10<sup>4</sup> T", "1.8 x 10<sup>4</sup> T"], "6 x 10<sup>5</sup> T"),

    new Question("A current of 1.5 A flows through the windings of a large, thin toroid with 200 turns per meter and a radius of 1 meter. If the toroid is filled with iron for which &chi;=3.0&times;10<sup>3</sup>, the magnetic field within it is &hellip; .", ["0.09 T","0.12 T","0.15 T","0.18 T"], "0.18 T"),

    new Question("Two long, straight wires are parallel and 10 cm apart. One carries a current of 2.0 A, the other a current of 5.0 A. If the two currents flow in opposite directions, the magnitude and direction of the force per unit length of one wire on the other is &hellip; .", ["5 x 10<sup>-6</sup> , toward the other wire","5 x 10<sup>-6</sup> , away from the other wire","2 x 10<sup>-6</sup> , away from the other wire","2 x 10<sup>-6</sup> , toward the other wire"], "2 x 10<sup>-6</sup> , away from the other wire"),

];


var quiz = new Quiz(questions);


populate();





