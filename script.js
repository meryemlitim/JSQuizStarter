const quizData = [
  {
    question: "What does 'JS' stand for?",
    options: ["JavaScript", "JavaSoup", "JustScript", "JScript"],
    answer: "JavaScript"
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "/* */", "#"],
    answer: "//"
  },
  {
    question: "Which method logs output in JS?",
    options: ["console.log()", "print()", "alert()", "document.write()"],
    answer: "console.log()"
  },
  {
    question: "Which keyword declares a variable that can’t be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "What is the output of: `typeof []`?",
    options: ["array", "object", "list", "undefined"],
    answer: "object"
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },
  {
    question: "How do you create a function in JS?",
    options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "create function myFunc() {}"],
    answer: "function myFunc() {}"
  },
  {
    question: "Which method converts a JSON string to an object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toObject()"],
    answer: "JSON.parse()"
  },
  {
    question: "Which event triggers when a user clicks on an element?",
    options: ["onclick", "onhover", "onchange", "onfocus"],
    answer: "onclick"
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Character"],
    answer: "Character"
  }
];

startQuizPage=document.querySelector(".quizStart-page");
contentQuizPage=document.querySelector(".quizContent-page");

quizContent=document.querySelector(".quiz-content");
function start(){
    startQuizPage.style.display='none';
    contentQuizPage.style.display='flex';
    // alert('hhh');
}
let currentQuestion=0;
function quizStart(){
    quizContent.innerHTML =
     `
      <div class="quizContent-header">
    <h3>${currentQuestion+1}/${quizData.length}</h3>
    <h3>Timer:5s</h3>
  </div>

  <div class="quizContent-content">
  
    <h1 class="quiz-question">${quizData[currentQuestion].question}</h1>
    <div class="quiz-options">
      ${quizData[currentQuestion].options.map(op=>{
        return `
        <label>
        <input type="radio" name="q1" value="${op}" />
      ${op}
      </label>
        `;
      }).join("")
      }
    </div>
  </div>

  
    `;
}
quizStart();

    function nextQuestion(){
        console.log(currentQuestion);
        if(currentQuestion+1==quizData.length){
            document.querySelector(".next-btn").innerHTML="Submit"
        //  alert("quiz done");
            
            
        }else{
        currentQuestion++;
        console.log(currentQuestion);
        quizStart();
        }
    }


