const quiz_Data = [
    {
        question: "HTML Stands For",
        a: "Hyper Text Markup Language",
        b: "Hype Test Marup Language ",
        c: "High Tood Markup Language",
        d: "Hyper Tan Markup Language",
        correct: "a"
    },
    {
        question : "Which HTML attribute is used to define inline styles?",
        a: "Styles",
        b: "Style",
        c: "Font",
        d: "Class",
        correct: "b"
    },
    {
        question : "Choose the correct HTML element for the largest heading",
        a: "<heading>",
        b: "<h1>",
        c: "<head>",
        d: "<h6>",
        correct: "b"
    },
    {
        question : " CSS Stands For",
        a: "Cascading Style Sheet",
        b: "Color Full Style Sheet",
        c: "Computer Style Sheet",
        d: "Creative Style Sheet",
        correct: "a"
    },
    {
        question : "Who is making the Web standards",
        a: "Google",
        b: "Micorsoft",
        c: "World Wide Web Consortium",
        d: "Mozilla",
        correct: "c"  
    }
]

const questionEl = document.getElementById('questions')
const answerEl = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById("b_text")
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const button = document.getElementById('button')

let currentQuiz  = 0;
let score = 0
loadQuiz();

function loadQuiz(){
deleteCheck()
const currentQuizData = quiz_Data[currentQuiz]
if(currentQuizData){
questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}
}

function checkAnswer(){
    let answer = undefined
    answerEl.forEach(el =>{
        if(el.checked){
            answer =  el.id;
        }  
    } );
         return answer
}

function deleteCheck(){
    answerEl.forEach(el =>{
        el.checked = false;   
    } )
}

button.addEventListener("click", ()=>{
    const answer = checkAnswer()
    if(answer){
        
        if(answer === quiz_Data[currentQuiz].correct){
            score++
        }
        currentQuiz++;
        if(currentQuiz < quiz_Data.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h2>your score ${score} / ${quiz_Data.length}</h2> <button onclick="location.reload()">Reload</button>`
        }
    }
    
}) 