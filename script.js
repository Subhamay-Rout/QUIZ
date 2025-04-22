// Question information 
const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Elephant",correct:false},
            {text:"Horse",correct:false},
            {text:"Blue whale",correct:true},
        ]
    },{
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Elephant",correct:false},
            {text:"Horse",correct:false},
            {text:"Blue whale",correct:true},
        ]
    },{
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Elephant",correct:false},
            {text:"Horse",correct:false},
            {text:"Blue whale",correct:true},
        ]
    },{
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Elephant",correct:false},
            {text:"Horse",correct:false},
            {text:"Blue whale",correct:true},
        ]
    }
];

//Declaration or Initialization
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next");

let currentQuestionindex=0;
let score=0;

function startQuiz(){
    currentQuestionindex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestions();
}

// To Show the Questions and Answer
function showQuestions(){
    resetState();
    let currentQuestion=questions[currentQuestionindex];
    let questionNo=currentQuestionindex+1;
    questionElement.innerHTML=questionNo +". "+currentQuestion.question;
    
    //To update the answer button's answer
    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

//To remove the previous stated answer
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
// To check the correct Answer
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
//to show score
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
// To change the Queston
function handleNextbutton(){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length)
    {
        showQuestions();
    }
    else{
        showScore();
    }
}
//next button working mechanism
nextButton.addEventListener("click",()=>{
if(currentQuestionindex<questions.length){
    handleNextbutton();
}else{
    startQuiz();
}
});

startQuiz();