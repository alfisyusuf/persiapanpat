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

    new Question("A metal cube with a positive charge +Q<sub>1</sub> is brought into contact with a cylinder of a positive charge +Q<sub>2</sub> where |Q<sub>1</sub>|<|Q<sub>2</sub>|.<br><img src='https://lh3.googleusercontent.com/yJ9bEDcA0GIyg3-PiQc3n5ovfxALCDQJNdIQAWYX9CWGYKOD8xLaXtD2nEuViS_qOBN9J2oLw_F8Fid2woazVUJSISijGEVy2SihVen-KnygPYoZKCn4zfC2xzQ6WUXsb7tVY4yHJsk0JbCTEbNNlkSWWxiPL2h73N-URZBxdH4fBpkDdgUafaXHg9_FBhoKe-DIxDLn_A' style='width:275px' /><br>A correct choice describing the net movement of charges is … .", ["Electrons move from the cube to the cylinder.","Protons move from the cube to the cylinder.","Electrons move from the cylinder to the cube.","Protons move from the cylinder to the cube."], "Electrons move from the cube to the cylinder."),

    new Question("In the vicinity of point charge q, we place a 0.208 μC-charge so that a force of 5.00 x 10<sup>-5</sup> N applied on it due to the charge q. The electric field produced by this unknown charge q is … .<br>(k = 8.99 x 10<sup>9</sup> Nm<sup>2</sup>/C<sup>2</sup>)", ["240 N/C","300 N/C","200 N/C","220 N/C"], "240 N/C"),

    new Question("Three equal charges +q are each placed at the corners of a square with side length r as shown in the figure. The force magnitude on the charge B is … .<br><img src='' style='width:225px'", ["<img src='https://lh6.googleusercontent.com/ej369K14aq1w2oe31VTgv1bDKHlRpJaDs2a0Ojl387AfRvjUCVfcZQA3m7hhuDM4WSnM5LbyKB9-LoeNQpwje1gRMBPiWzgFOKkMNQlMaC7c1mczLh18Z8SMb_wLWDfvh25ZMVbGmKfzIfFOqnm5k9_jDNHPASodeP2cf1GZO3AxVyvmQIfS_Vt9kQoEY-JeI_Yt3ZjTaA' style='width:50px' />","<img src='https://lh4.googleusercontent.com/XBCzJ61bFjqcOXOepw02Q5ciodxLF6qTynCNq2K9weVXpZp4nZKQXh4UjAw5ctc-UIsUncWvDxnL0iQBMNSy01jAx319tw4U9sMk0U_7N7l0bze8Uan9tauhyQZhsp-ZQ6jcndydU6ecZoeZj853XBq0a7GsI0K1prYGgDxH-0p5YkPdO0fyEp94gQDe_HK4GclrJKW8aQ' style='width:79px' />","<img src='https://lh5.googleusercontent.com/1JNHjXK2UZIKxbc2pIBlkOiVFkOVWydP_DnsUv5HAgOR-RVJ3I745tO1AfPiZDUWJdZT-g3k5bZL_ypffJgg7m7I3Oa_e9tyyRS3kRny-CiZsMb5dlJfRMUXbxHj0_c0QrHfM9jn_VwFXThtYm5EQVWIDMebrgYPApwP_jSt3wVIBX5mpBG5zNvQ-OqZ0_PPGCHSTFCaXw' style='width:59px' />","<img src='https://lh3.googleusercontent.com/eG2_4i92CtkF1qnxPBXejpLiDRxCnNP7aY0o5LL1WYCInmSd0ns1Gy-PZAgr7h5niDrNb5wP7_oFVkbSNj4hK-zRWBpNyLHO90ujiiUd2GFTLPqu2zV5FU5fAdg9kFUirc4k9kQy-VHqT2LxwNXfPQiWAxzU_Gv9zCARZ3q5FkrQ64DbllTgBCgJWoPXxkzwgKtwSlHdMQ' style='width:79px' />"], "<img src='https://lh4.googleusercontent.com/XBCzJ61bFjqcOXOepw02Q5ciodxLF6qTynCNq2K9weVXpZp4nZKQXh4UjAw5ctc-UIsUncWvDxnL0iQBMNSy01jAx319tw4U9sMk0U_7N7l0bze8Uan9tauhyQZhsp-ZQ6jcndydU6ecZoeZj853XBq0a7GsI0K1prYGgDxH-0p5YkPdO0fyEp94gQDe_HK4GclrJKW8aQ' style='width:79px' />"),

];


var quiz = new Quiz(questions);


populate();





