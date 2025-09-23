// Quiz Data

const quizTopic = [
{   id: 0,
    topicName: "Java script",
    pic:"data:image/png;base64,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",
    topicPragh:"Test your JS skills and see what you know. Ready?",
    color:"rgb(240, 219, 79)"
},
{   id: 1,
    topicName: "Japanese",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3I6sdvD1sAr9Q9iEStqRFQ3D5neCyU2YumQ&s",
    topicPragh:"Challenge your Japanese knowledge!",
    color:"rgba(239, 50, 33, 1)"
    
},
{   id: 2,
    topicName: "Node js",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHwK2yU5_VCBV73DI_4re_wZfw7FOhAv2Tg&s",
    topicPragh:"Test your Node.js skills!",
    color:"rgba(108, 179, 232, 1)"
    
}
];

const quizData = [
 {
  id : 0,
  questions :[
     {
    question: "What does 'JS' stand for?",
    options: ["JavaScript", "JavaSoup", "JustScript", "JScript"],
    answer: ["JavaScript"]
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "/* */", "#"],
    answer: ["//"]
  },
  {
    question: "Which method logs output in JS?",
    options: ["console.log()", "print()", "alert()", "document.write()"],
    answer: ["console.log()"]
  },
  {
    question: "Which keyword declares a variable that can’t be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: ["const"]
  },
  {
    question: "What is the output of: `typeof []`?",
    options: ["array", "object", "list", "undefined"],
    answer: ["object"]
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["==", "=", "===", "!="],
    answer: ["==="]
  },
  {
    question: "How do you create a function in JS?",
    options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "create function myFunc() {}"],
    answer: ["function myFunc() {}"]
  },
  {
    question: "Which method converts a JSON string to an object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toObject()"],
    answer: ["JSON.parse()"]
  },
  {
    question: "Which event triggers when a user clicks on an element?",
    options: ["onclick", "onhover", "onchange", "onfocus"],
    answer: ["onclick"]
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Character"],
    answer: ["Boolean"]
  }
  ]
 },
 {
  id : 1,
  questions : [
     {
    question: "What does the kanji 木 mean?",
    options: ["Tree", "Water", "Fire", "Mountain"],
    answer: ["Tree"]
  },
  {
    question: "What does the kanji 水 mean?",
    options: ["Fire", "Water", "Earth", "Sky"],
    answer: ["Water"]

  },
  {
    question: "What does the kanji 火 mean?",
    options: ["Fire", "Wind", "Light", "Sun"],
    answer: ["Fire"]

  },
  {
    question: "What does the kanji 山 mean?",
    options: ["River", "Mountain", "House", "Sky"],
    answer: ["Mountain"]
  },
  {
    question: "What does the kanji 川 mean?",
    options: ["Mountain", "Tree", "River", "Path"],
    answer: ["River"]

  },
  {
    question: "What does the kanji 人 mean?",
    options: ["Person", "Child", "Sun", "Hand"],
    answer: ["Person"]
  },
  {
    question: "What does the kanji 日 mean?",
    options: ["Sun", "Day", "Star", "Fire"],
    answer: ["Sun","Day"]
    
  },
  {
    question: "What does the kanji 月 mean?",
    options: ["Moon", "Month", "Sky", "Night"],
    answer: ["Moon","Month"] 
  },
  {
    question: "What does the kanji 口 mean?",
    options: ["Eye", "Mouth", "Ear", "Hand"],
    answer: ["Mouth"]      
  },
  {
    question: "What does the kanji 学 mean?",
    options: ["School", "Work", "Language", "Learning"],
    answer: ["School","Learning"]  
  }
  ]
 },
 {
  id : 2,
  questions : [
     {
    question: "Which built-in module is used to create a web server in Node.js?",
    options: ["http", "fs", "url", "path"],
    answer: ["http"]
  },
  {
    question: "Which command is used to initialize a new Node.js project?",
    options: ["npm init", "node init", "npm start", "node start"],
    answer: ["npm init"]
  },
  {
    question: "Which keyword is used to import a module in Node.js (CommonJS)?",
    options: ["import", "require", "include", "use"],
    answer: ["require"]
  },
  {
    question: "Which built-in module is used to work with the file system in Node.js?",
    options: ["http", "fs", "os", "events"],
    answer: ["fs"]
  },
  {
    question: "Which file is commonly used to store project metadata in Node.js?",
    options: ["package.json", "index.js", "server.js", "config.json"],
    answer: ["index.js"]
  },
  {
    question: "Which built-in module is used to handle events in Node.js?",
    options: ["events", "stream", "util", "os"],
    answer:["events"]
  },
  {
    question: "Which method is used to output data to the console in Node.js?",
    options: ["console.write()", "print()", "console.log()", "log.console()"],
    answer: ["console.log()"]
  },
  {
    question: "Which command is used to install a package globally in Node.js?",
    options: ["npm install <package>", "npm install -g <package>", "node install <package>", "npm get <package>"],
    answer: ["npm install -g <package>"]
  },
  {
    question: "Which module is used to create and work with streams in Node.js?",
    options: ["stream", "buffer", "http", "events"],
    answer:["stream"]
  },
  {
    question: "Which function is used to delay execution in Node.js?",
    options: ["setTimeout()", "wait()", "delay()", "sleep()"],
    answer: ["setTimeout()"]
  }
  ]
 }
];

const userAnswers = []; 
const UserQuizReview = [];
const startQuizPage=document.querySelector(".quizStart-page");
const contentQuizPage=document.querySelector(".quizContent-page");
const chooseUsernamePage=document.querySelector(".chooseUsername-page")
quizContent=document.querySelector(".quiz-content");
 let currentQuestion=0;
 let timerId;
 let timeLeft = 5;
 let usernameName;

// Choose The theme

const chooseTopicPage = document.querySelector(".chooseTopic-page");

chooseTopicPage.innerHTML=quizTopic.map(topic => {
return `
  <div class="choose-topic" onclick="chooseUsername(${topic.id})">
      <img class="topic-img" src="${topic.pic}" />
      <h3 class="topic-title">${topic.topicName}</h3>
  </div>
`;
}).join("");

// function ErabetaTopic(topicIndex){
//     // console.log(topicIndex);
//     const currentTopic = topicIndex;
//     // quizHome(currentTopic);
//     chooseTopicPage.style.display='none';

//     start(currentTopic);
// }

function chooseUsername(topicIndex){
   const currentTopic = topicIndex;
    chooseTopicPage.style.display='none';
   currentQuestion = 0; 

  chooseUsernamePage.style.display='flex';

 
  chooseUsernamePage.innerHTML=`
      <h2>Enter Your Username</h2>
      <input class="Username" type="text">
      <button class="quiz-start-btn hidden">START Quiz</button> 
  `;  
  const quizstarbtn=document.querySelector(".quiz-start-btn");
  const UsernameInput= document.querySelector(".Username");
  
  UsernameInput.addEventListener('input',()=>{
    if(UsernameInput.value.trim()===''){
          quizstarbtn.style.display="none";
          
    }else{
          quizstarbtn.style.display="block";
          quizstarbtn.addEventListener('click',()=>{
          chooseUsernamePage.style.display='none';
          usernameName= UsernameInput.value;
          console.log(usernameName);
          quizHome(currentTopic);
  
          })
    }
 
  })   
}

function quizHome(currentTopic){
    
    startQuizPage.style.display='flex';
    startQuizPage.innerHTML=`
     <div class="quiz-start">
        <img
          class="js-img"
          src="${quizTopic[currentTopic].pic}"
          alt=""
        />  
        <h1 class="quiz-title">${quizTopic[currentTopic].topicName}</h1>
        <p class="quiz-pragh">
          ${quizTopic[currentTopic].topicPragh}
        </p>
        <button class="start-btn" onclick="quizStart(${currentTopic})" style="background-color:${quizTopic[currentTopic].color} ;">START</button>
      </div>
    `;
}



// Start quiz

function quizStart(currentTopic){
  startQuizPage.style.display="none";
 if(timerId){
  clearInterval(timerId);
 }
  timeLeft=10;
  contentQuizPage.style.display='flex';
  // let correctAnwer_length= quizData[currentTopic].questions[currentQuestion].answer.length;
  // console.log("correctAnwer_length", correctAnwer_length);
  quizContent.innerHTML =
     `
  <div class="quizContent-header">
    <h3>${currentQuestion+1}/${quizData[currentTopic].questions.length}</h3>
    <h3 id="timer">Timer:10s</h3>
  </div>

  <div class="quizContent-content">
  
    <h1 class="quiz-question">${quizData[currentTopic].questions[currentQuestion].question}</h1>
    <div class="quiz-options">
      ${quizData[currentTopic].questions[currentQuestion].options.map((op,index)=>{
        return `
        <label>
        <input type="checkbox" class="anwser-input" name="q${currentQuestion+1}" value="${op}"  />
      ${op}
      </label> 
        `;
      }).join("")
      }
    </div>
    <div class="quizContent-footer">
        <button class="next-btn" onclick="nextQuestion(${currentTopic})">NEXT</button>
        <button class="submit-btn">submit</button>
    </div>
  </div>
  
  
    `;

  document.querySelectorAll(".anwser-input").forEach(input => {
  
  input.addEventListener('change', (e) => handleAnswers());
});

     timerId=setInterval(()=>{
                  console.log("Time left:", timeLeft); 
                  document.getElementById('timer').textContent= `Timer:${timeLeft}s`; 
                  timeLeft--;
            if(timeLeft<0){
                   clearInterval(timerId);
            if(currentQuestion+1 === quizData[currentTopic].questions.length){
            contentQuizPage.style.display="none";
            document.querySelector(".result-page").style.display="flex";
        }else{
          nextQuestion(currentTopic)  
        }
        
                  }
                 }
                      
              ,1000);
}

// handle next btn

 function nextQuestion(currentTopic ){
      if(timerId){
        clearInterval(timerId);
        timerId=null;
      }
        console.log(currentQuestion);
        if(currentQuestion+1 === quizData[currentTopic].questions.length){
            document.querySelector(".next-btn").style.display="none";
            document.querySelector(".submit-btn").style.display="block";
            document.querySelector(".submit-btn").addEventListener('click',()=>{
          
            contentQuizPage.style.display="none";
            document.querySelector(".result-page").style.display="flex";
            console.log("result:", UserQuizReview); 
            
            checkAnwsers(userAnswers,currentTopic);                                                
            }) 
        }else{
        currentQuestion++;
        quizStart(currentTopic);
        }
    }

// stoke user answer 

function handleAnswers(){
//  const checkedCount = document.querySelectorAll('.anwser-input:checked').length;
// if(checkedCount === correctAnwer_length){
//   document.querySelectorAll(".anwser-input").forEach(input => {
//     input.disabled = true;
//   })

// }
const SelectedAnswer = [];
   document.querySelectorAll('.anwser-input:checked').forEach(input => {
    SelectedAnswer.push(input.value.trim());
  });

  
  
  userAnswers[currentQuestion] = {
    Question: currentQuestion,
    ChosenAnswer: SelectedAnswer
  };
  console.log(`Question ${currentQuestion + 1}: Selected answer index ${SelectedAnswer}`);  

}


// check the anwsers of the user

function checkAnwsers(userAnswers, currentTopic) {
  const correction = document.querySelector('.corrections');
  correction.innerHTML = ""; 
  let score = 0; 
  
  quizData.forEach(topic => {
    if (topic.id === currentTopic) {
      topic.questions.forEach((q, index) => {
        const userAnswer = userAnswers[index]?.ChosenAnswer || [];
        const correctAnswer = q.answer;
        
        
        let isCorrect = false;
        
        if (Array.isArray(correctAnswer)) {
          isCorrect = correctAnswer.length === userAnswer.length && 
                     correctAnswer.every(ans => userAnswer.includes(ans));
        } else {
          isCorrect = userAnswer.length === 1 && userAnswer[0] === correctAnswer;
        }
        
  if (isCorrect) {
  score++;
  correction.innerHTML += `
    <h3>${index + 1} - ${q.question}:</h3>
    <h3 style="color:green" class="correc">
      You answered: ${
        Array.isArray(userAnswer)
          ? (userAnswer.length > 0 ? userAnswer.join(", ") : "No answer")
          : (userAnswer ? userAnswer : "No answer")
      } (Correct)
    </h3>
  `;
} else {
  correction.innerHTML += `
    <h3>${index + 1} - ${q.question}:</h3>
    <h3 style="color:red" class="correc">
      You answered: ${
        Array.isArray(userAnswer)
          ? (userAnswer.length > 0 ? userAnswer.join(", ") : "No answer")
          : (userAnswer ? userAnswer : "No answer")
      }
    </h3>
    <h3 class="correc">
      Correct answer: ${
        Array.isArray(correctAnswer)
          ? (correctAnswer.length > 0 ? correctAnswer.join(", ") : "No answer")
          : (correctAnswer ? correctAnswer : "No answer")
      }
    </h3>
  `;
}

      });

      
      
      document.querySelector(".score").textContent = `Score: ${score}`;
      feedback(score);
    }
  });

  
  let now = new Date();
  let dateTime = now.toLocaleString();
  console.log("dateTime",dateTime); 

  
 let UserQuizReview = JSON.parse(localStorage.getItem("UserQuizReview")) || [];
  let newResult ={
  username : usernameName,
  date : dateTime,
  topic : currentTopic,
  answers : userAnswers,
  score : score
  };

  UserQuizReview.push(newResult);
  console.log("🔪🙂",UserQuizReview);

localStorage.setItem("UserQuizReview", JSON.stringify(UserQuizReview));
}

// for the quiz feedback

function feedback(score) {
  let message = '';

  if (score === 10) {
    message = `🏆 Feedback: ${usernameName}, Perfect score! You're amazing! 🌟`;
  } else if (score >= 8) {
    message = `🔥 Feedback: ${usernameName}, Great job! Almost perfect! 👏`;
  } else if (score >= 6) {
    message = `😊 Feedback: ${usernameName}, Good work! Keep it up! 💪`;
  } else if (score >= 4) {
    message = `📚 Feedback: ${usernameName}, Not bad! You need more practice! 🎯`;
  } else {
    message = `😅 Feedback: ${usernameName}, Don't give up! Practice makes perfect! 💡`;
  }

  document.querySelector('.feedback').textContent = message;
}

// back home (the choose topic page)

function backHome(){
  document.querySelector('.result-page').style.display="none";
  document.querySelector('.chooseTopic-page').style.display="flex";
}