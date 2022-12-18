var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var indexNum = 0;
var marks = 0;
var main = document.getElementById("main");

var questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 6,
    question: "What does CAD stand for?",
    answer: "Computer Aided Design",
    options: [
      "Compile Accumulated Design",
      "Computer Audio Drafting",
      "Computer Aided Design",
      "Complex Aided Design"
    ]
  },
  {
    numb: 7,
    question: "What does CC stand for?",
    answer: "Carbon Copy",
    options: [
      "Carbon Copy",
      "Computer Complexcity",
      "Compact Cycle",
      "Compact Clock"
    ]
  },
  {
    numb: 8,
    question: "What does DAT stand for?",
    answer: "Digital Audio Tape",
    options: [
      "Design Audio Tape",
      "Digital Access Timer",
      "Design Auxiliary Todo",
      "Digital Audio Tape"
    ]
  },
  {
    numb: 9,
    question: "What does DOC stand for?",
    answer: "Data Optimizing Computer",
    options: [
      "Digital Optimizing Command",
      "Disk Operating Clock",
      "Data Optimizing Computer",
      "Digital Optimizing Computer"
    ]
  },
  {
    numb: 10,
    question: "What does CMD stand for?",
    answer: "Command",
    options: [
      "Computerize Manufacturing Data",
      "Command",
      "Comment",
      "Complexcity"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  // {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

function showQuestion() {
  question.innerHTML = questions[indexNum].question;
  questionNum.innerHTML =
    "Question # " + (indexNum + 1) + "/" + questions.length;
  ansParent.innerHTML = "";
  for (var i = 0; i < questions[indexNum].options.length; i++) {
    ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-primary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`;
  }
}
showQuestion();

function nextQuestion() {
  indexNum++;
  showQuestion();
}

function checkAns(a, b) {
  if (a == b) {
    marks++;
  }
  if (indexNum + 1 == questions.length) {
    main.innerHTML = `YOUR MARKs is ${marks}`;
  } else {
    nextQuestion();
  }
}
