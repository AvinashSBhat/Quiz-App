// const questionsofbff = [
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these",
    ],
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these",
    ],
  },
  {
    id: 3,
    question: "What is the full form of E-mail?",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these",
    ],
  },
  {
    id: 4,
    question: "What is the full form of HTML?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "None of these",
    ],
  },
  {
    id: 5,
    question: "What is the full form of PHP?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "None of these",
    ],
  },
];
      
// const questionsoftechnology =
const tech = [
  {
    id: 1,
    question:"What is part of a database that holds only one type of information?",
    answer: "Field",
    options: ["Report", "Field", "Record", "File"],
  },
  {
    id: 2,
    question: "'.MOV' extension refers usually to what kind of file?",
    answer: "Animation/movie file",
    options: [
      "MS Office document",
      "Image file",
      "Animation/movie file",
      "Audio file",
    ],
  },
  {
    id: 3,
    question:"Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    answer: "Flash",
    options: ["FRAM", "Flash", "Flange", "Fury"],
  },
  {
    id: 4,
    question: "Who developed Yahoo?",
    answer: "David Filo and Jerry Yang",
    options: [
      "Dennis Ritchie and Ken Thompson",
      "David Filo and Jerry Yang",
      "Vint Cerf and Robert Kahn",
      "Steve Case and Jeff Bezos",
    ],
  },
  {
    id: 5,
    question: "What does the term PLC stand for?",
    answer: "Programmable Logic Controller",
    options: [
      "Programmable Lift Computer",
      "Program List Control",
      "Programmable Logic Controller",
      "Piezo Lamp Connector",
    ],
  },
];
      
// const questionsofsports =
const sports = [
  {
    id: 1,
    question:"Which was the 1st non Test playing country to beat India in an international match?",
    answer: "Sri Lanka",
    options: ["Bangladesh", "Zimbabwe", "Sri Lanka", "Canada"],
  },
  {
    id: 2,
    question:"Who is the first Indian woman to win an Asian Games gold in 400m run?",
    answer: "Kamaljit Sandhu",
    options: ["Kamaljit Sandhu", "K.Malleshwari", "M.L.Valsamma", "P.T.Usha"],
  },
  {
    id: 3,
    question: "Which country won the football FIFA WC 2022?",
    answer: "Argentina",
    options: ["Qatar", "Argentina", "Portugal", "Croatia"],
  },
  {
    id: 4,
    question: "Who is the captain of Indian cricket team?",
    answer: "Rohit Sharma",
    options: ["K L Rahul", "Virat Kohli", "Rohit Sharma", "M S Dhoni"],
  },
  {
    id: 5,
    question: "Which player has scored the most runs in a single Test innings?",
    answer: "Brian Lara",
    options: ["Matthew Hayden", "Agarkar", "Virender Sehwag", "Brian Lara"],
  },
];
      
// const questionsofcuraffairs =
const affairs = [
  {
    id: 1,
    question: "Who is the President of India?",
    answer: "Droupadi Murmu",
    options: [
    "Ramnath Kovind",
    "Droupadi Murmu",
    "Atal Bihari Vajpaye",
    "Manmohan Singh",
    ],
  },
  {
    id: 2,
    question: "Who is the Governor of Karnataka?",
    answer: "Thawar Chand Gehlot",
    options: [
      "Raghupathi Bhat",
      "B S Yediyurappa",
      "Devendra Fadnavis",
      "Thawar Chand Gehlot",
    ],
  },
  {
    id: 3,
    question: "Who is the Chief Minister of Karnataka?",
    answer: "Basavaraj Bommai",
    options: [
      "Jayalalitha",
      "Chandrababu Naidu",
      "Basavaraj Bommai",
      "Siddaramaiah",
    ],
  },
  {
    id: 4,
    question: "Who is the Prime Minister of India?",
    answer: "Narendra Modi",
    options: ["Amit Shah", "Narendra Modi", "Rahul Gandhi", "Arvind Kejriwal"],
  },
  {
    id: 5,
    question: "Who is known as the 'Iron Man' of India?",
    answer: "Vallabhbhai Patel",
    options: [
      "Vallabhbhai Patel",
      "Bhagat Singh",
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
    ],
  },
];
sessionStorage.setItem('points',0);
var a = sessionStorage.getItem("a");
a=parseInt(a);
switch (a) {
  case 0:
    questions = questions;
      break;
  case 1:
    questions = tech;
    break;
  case 2:
    questions = sports;
    break;
  case 3:
    questions = affairs;
    break;
}
      
let question_count = 0;
let points = 0;
      
window.onload = function () {
  show(question_count);
};
      
function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);
      
  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);
      
  question_count++;
  show(question_count);
}
      
function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
      
  question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
      <li class="option">${first}</li>
      <li class="option">${second}</li>
      <li class="option">${third}</li>
      <li class="option">${fourth}</li>
    </ul> 
    `;
  toggleActive();
}
      
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
      