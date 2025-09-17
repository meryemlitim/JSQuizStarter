const quizData = [
 {
  id : 0,
  questions :[
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
  ]
 },
 {
  id : 1,
  questions : [
     {
    question: "What does the kanji 木 mean?",
    options: ["Tree", "Water", "Fire", "Mountain"],
    answer: "Tree"
  },
  {
    question: "What does the kanji 水 mean?",
    options: ["Fire", "Water", "Earth", "Sky"],
    answer: "Water"
  },
  {
    question: "What does the kanji 火 mean?",
    options: ["Fire", "Wind", "Light", "Sun"],
    answer: "Fire"
  },
  {
    question: "What does the kanji 山 mean?",
    options: ["River", "Mountain", "House", "Sky"],
    answer: "Mountain"
  },
  {
    question: "What does the kanji 川 mean?",
    options: ["Mountain", "Tree", "River", "Path"],
    answer: "River"
  },
  {
    question: "What does the kanji 人 mean?",
    options: ["Person", "Child", "Sun", "Hand"],
    answer: "Person"
  },
  {
    question: "What does the kanji 日 mean?",
    options: ["Sun/Day", "Moon", "Star", "Fire"],
    answer: "Sun/Day"
  },
  {
    question: "What does the kanji 月 mean?",
    options: ["Moon/Month", "Star", "Sky", "Night"],
    answer: "Moon/Month"
  },
  {
    question: "What does the kanji 口 mean?",
    options: ["Eye", "Mouth", "Ear", "Hand"],
    answer: "Mouth"
  },
  {
    question: "What does the kanji 学 mean?",
    options: ["School/Learning", "Work", "Language", "Teacher"],
    answer: "School/Learning"
  }
  ]
 },
 {
  id : 2,
  questions : [
     {
    question: "Which built-in module is used to create a web server in Node.js?",
    options: ["http", "fs", "url", "path"],
    answer: "http"
  },
  {
    question: "Which command is used to initialize a new Node.js project?",
    options: ["npm init", "node init", "npm start", "node start"],
    answer: "npm init"
  },
  {
    question: "Which keyword is used to import a module in Node.js (CommonJS)?",
    options: ["import", "require", "include", "use"],
    answer: "require"
  },
  {
    question: "Which built-in module is used to work with the file system in Node.js?",
    options: ["http", "fs", "os", "events"],
    answer: "fs"
  },
  {
    question: "Which file is commonly used to store project metadata in Node.js?",
    options: ["package.json", "index.js", "server.js", "config.json"],
    answer: "package.json"
  },
  {
    question: "Which built-in module is used to handle events in Node.js?",
    options: ["events", "stream", "util", "os"],
    answer: "events"
  },
  {
    question: "Which method is used to output data to the console in Node.js?",
    options: ["console.write()", "print()", "console.log()", "log.console()"],
    answer: "console.log()"
  },
  {
    question: "Which command is used to install a package globally in Node.js?",
    options: ["npm install <package>", "npm install -g <package>", "node install <package>", "npm get <package>"],
    answer: "npm install -g <package>"
  },
  {
    question: "Which module is used to create and work with streams in Node.js?",
    options: ["stream", "buffer", "http", "events"],
    answer: "stream"
  },
  {
    question: "Which function is used to delay execution in Node.js?",
    options: ["setTimeout()", "wait()", "delay()", "sleep()"],
    answer: "setTimeout()"
  }
  ]
 }
];

const quizTopic = [
{   id: 0,
    topicName: "JS Quiz Starter",
    pic:"data:image/png;base64,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",
    topicPragh:"Test your JS skills and see what you know. Ready?",
    color:"rgb(240, 219, 79)"
},
{   id: 1,
    topicName: "Japanese",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3I6sdvD1sAr9Q9iEStqRFQ3D5neCyU2YumQ&s",
    topicPragh:"Test your JS skills and see what you know. Ready?",
    color:"rgba(239, 50, 33, 1)"
    
},
{   id: 2,
    topicName: "Node js",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHwK2yU5_VCBV73DI_4re_wZfw7FOhAv2Tg&s",
    topicPragh:"Test your JS skills and see what you know. Ready?",
    color:"rgba(108, 179, 232, 1)"
    
}
];
const startQuizPage=document.querySelector(".quizStart-page");
const contentQuizPage=document.querySelector(".quizContent-page");

quizContent=document.querySelector(".quiz-content");
function start(currentTopic){
    startQuizPage.style.display='none';
    contentQuizPage.style.display='flex';
    // alert('hhh');
    // console.log(currentTopic);
    quizStart(currentTopic);
}
  let currentQuestion=0;
function quizStart(currentTopic){
  
    quizContent.innerHTML =
     `
      <div class="quizContent-header">
    <h3>${currentQuestion+1}/${quizData[currentTopic].questions.length}</h3>
    <h3>Timer:5s</h3>
  </div>

  <div class="quizContent-content">
  
    <h1 class="quiz-question">${quizData[currentTopic].questions[currentQuestion].question}</h1>
    <div class="quiz-options">
      ${quizData[currentTopic].questions[currentQuestion].options.map(op=>{
        return `
        <label>
        <input type="radio" name="q1" value="${op}" />
      ${op}
      </label>
        `;
      }).join("")
      }
    </div>
     <div class="quizContent-footer">
        <button class="next-btn" onclick="nextQuestion(${currentTopic})">NEXT</button>
      </div>
  </div>

  
    `;
}


    function nextQuestion(currentTopic ){
        console.log(currentQuestion);
        if(currentQuestion+1 === quizData[currentTopic].questions.length){
            document.querySelector(".next-btn").innerHTML="Submit"
        //  alert("quiz done");
            
            
        }else{
        currentQuestion++;
        // console.log(currentQuestion);
        quizStart(currentTopic);
        }
    }


const chooseTopicPage = document.querySelector(".chooseTopic-page");

chooseTopicPage.innerHTML=quizTopic.map(topic => {
return `
  <div class="choose-topic" onclick="ErabitaTopic(${topic.id})">
      <img class="topic-img" src="${topic.pic}" />
      <h3 class="topic-title">${topic.topicName}</h3>
    </div>
`;
}).join("");

function quizHome(currentTopic){
    // console.log(currentTopic);
    chooseTopicPage.style.display='none';
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
        <button class="start-btn" onclick="start(${currentTopic})" style="background-color:${quizTopic[currentTopic].color} ;">START</button>
      </div>
    `;
}

function ErabitaTopic(topicIndex){
    // console.log(topicIndex);
    const currentTopic = topicIndex;
    quizHome(currentTopic);
}

