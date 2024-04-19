// creating the questions..............................
const questionBank = [
  {
    question:
      "In which book of the Bible does God reveal His glory to Moses on Mount Sinai ?",
    options: ["Genesis", "Exodus", "Leviticus", "Deuteronomy"],
    answer: "Exodus",
  },
  {
    question:
      "Who wrote the following words: ' The heavens declare the glory of God; the skies proclaim the work of his hands ' ? ",
    options: [" Moses", "David", "Solomon", "Isaiah"],
    answer: "David",
  },
  {
    question: " Which prophet saw a vision of God's glory in the temple ? ",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Ezekiel",
  },
  {
    question:
      "Who said, ' Holy, holy, holy is the Lord Almighty; the whole earth is full of his glory ' ?",
    options: ["David", "Solomon", "Isaiah", "Jeremiah"],
    answer: "Isaiah",
  },
  {
    question:
      "Complete this verse: Arise, shine; for thy light is come and the ' ...... ' of the Lord is risen upon thee (Isaiah 60:1)",
    options: ["Favor", "Mercy", "Glory", "Power"],
    answer: "Glory",
  },
  {
    question:
      "In the book of Romans, it is written, ' For all have sinned and fall short of the glory of God. ' Who wrote this ?",
    options: ["Paul", "Peter", "John", "James"],
    answer: "Paul",
  },
  {
    question:
      "Which of the Ten Commandments focuses on bringing glory to God ?",
    options: [
      " You shall not steal.",
      "You shall not commit adultery.",
      "You shall not bear false witness against your neighbor.",
      "You shall not have other gods before me.",
    ],
    answer: "You shall not have other gods before me.",
  },
  {
    question:
      "Who did God choose to lead the Israelites out of Egypt, proclaiming His glory through miracles and signs ?",
    options: ["Moses", "Aaron", "Joshua", "Joseph"],
    answer: "Moses",
  },
  {
    question:
      "Which Old Testament prophet was taken up to heaven in a whirlwind, witnessing God's glory ?",
    options: ["Elijah", "Elisha", "Isaiah", "Amos"],
    answer: "Elijah",
  },
  {
    question:
      "In which book of the Bible do we find the phrase ' For from him and through him and to him are all things. To him be the glory forever ' ?",
    options: ["Genesis", "Psalms", "Romans", "Revelation"],
    answer: "Romans",
  },
  {
    question:
      "Who proclaimed, 'The heavens declare the glory of God; the firmament shows His handiwork'?",
    options: ["David", "Solomon", "Isaiah", "Jeremiah"],
    answer: "David",
  },
  {
    question: "Which of Jesus' miracles revealed His glory to His disciples ?",
    options: [
      " Turning water into wine",
      "Feeding the five thousand",
      "Healing a leper",
      "Calming the storm",
    ],
    answer: " Turning water into wine",
  },
  {
    question:
      "Who praised God's glory with the words, ' Great and marvelous are your deeds, Lord God Almighty ' ?",
    options: ["Moses", "David", "Solomon", "Isaiah"],
    answer: "Isaiah",
  },
  {
    question:
      "Which prophet saw a vision of God's glory on a high and exalted throne ?",
    options: ["Jeremiah", "Ezekiel", "Daniel", "Micah"],
    answer: "Ezekiel",
  },
  {
    question: " Who said, ' You are the Christ, the Son of the living God ' ?",
    options: ["Peter", "James", "John", "Andrew"],
    answer: "Peter",
  },
  {
    question:
      "Who said ' Glory to God in the highest, and on earth peace, goodwill to men ' ?",
    options: ["Wise men", "Angels", "Mary", "Elizabeth"],
    answer: "Angels",
  },
  {
    question:
      "Who received a vision of God's glory while in exile on the island of Patmos ?",
    options: ["John", "Peter", "James", "Paul"],
    answer: "John",
  },
  {
    question:
      "In which book of the Bible do we find the parable of the prodigal son, which highlights God's glory through His forgiveness ?",
    options: ["Matthew", "Mark", "Luke", "John"],
    answer: "Luke",
  },
  {
    question: "How does Psalm 96 say we should worship God ?",
    options: [
      "In the beauty of holiness",
      "With deep awe and love",
      "With a pure heart",
      "In righteous fear",
    ],
    answer: "In the beauty of holiness",
  },
  {
    question:
      "Which part of Himself did God say Moses would see when God's glory passed by Moses ?",
    options: ["His feet", "His face", "His hands", "His back"],
    answer: "His back",
  },
];

// variable declaration .................................
const startBtn = document.getElementById("start-btn-js");
const infoBox = document.getElementById("info-box-js");
const quitBtn = document.getElementById("quit-js");
const continueBtn = document.getElementById("continue-js");
const questionSection = document.getElementById("container-js");
const playersInfo = document.getElementById("players-info-container-js");
const outterContainerBorder = document.getElementById("outter-container-js");
const timeLeft = document.getElementById("time-left-js");
const timeSec = document.getElementById("timer-sec-js");
const timeLine = document.getElementById("time-line-js");
const timerContainer = document.getElementById("timer-js");
const gameOverEl = document.getElementById("game-over-js");
const topLogo = document.getElementById("top-span");
const questionButton = document.querySelectorAll(".button-quiz"); // all of the button element which is held as an array in the variable
const questionDisplay = document.getElementById("question-display"); // h1 element to display the question
const option0 = document.getElementById("option0"); // span element holding option 1
const option1 = document.getElementById("option1"); // span element holding option 2
const option2 = document.getElementById("option2"); // span element holding option 3
const option3 = document.getElementById("option3"); // span element holding option 4
const selectedQuestion = document.getElementById("selected-question"); // p element for the display of selected question number position
let score01 = document.getElementById("point-0");
let score02 = document.getElementById("point-1");
const optionButton = document.querySelectorAll("#option"); // list element holding the span option
const optionList = document.getElementById("options-list"); // ordered list element holding the option list
const player1El = document.querySelector(".player01");
const player2El = document.querySelector(".player02");
let playerScores = [0, 0]; // variable to hold player scores which Player One's score is at index 0 and Player Two's score is at index 1
let i = 0;
let questionCounter = 0;
let scoreAllocation = 0;
let totalButton = 20;
let counter;
let currentQuestion;
let activeName = 1;
let playerQuestionNum = { player01QesNum: [], player02QesNum: [] };
// variable to hold the selected question number by each player.
const { player01QesNum, player02QesNum } = playerQuestionNum;
const player01Name = document.getElementById("player-1-name"); //variable to hold player-01 name
const player02Name = document.getElementById("player-2-name"); //variable to hold player-02 name
// const nameInputEl = document.querySelectorAll(".name-input");

// Function to show the interfaces of the game ....................
startBtn.addEventListener("click", () => {
  infoBox.classList.add("active-info");
  startBtn.classList.add("inactive-start");
  gameOverEl.classList.add("active");
}); // to show the rules infomation of the game

quitBtn.addEventListener("click", () => {
  infoBox.classList.remove("active-info");
  startBtn.classList.remove("inactive-start");
}); // to exit the rules

continueBtn.addEventListener("click", () => {
  infoBox.classList.remove("active-info");
  questionSection.classList.add("active-container");
  playersInfo.classList.add("active-players-info");
  startBtn.classList.add("active");
  outterContainerBorder.classList.add("active-outter");
  gameOverEl.classList.add("active");
}); // to exit the rules and show the game

// Functions and methods for looping on the questions button and options display ......................
questionButton.forEach(function (eachButton, index) {
  const eachQuestion = questionBank[index].question; // a variable holding each question
  const option = questionBank[index].options; // a variable holding all the options as an array
  eachButton.addEventListener("click", function (e) {
    // assignig an eventlistener to each of the buttons to display the question
    questionDisplay.textContent = eachQuestion; // to display question
    eachButton.innerHTML = "<img src='icons/cancel-btn.png'  height='15px'>"; // to add cancel img on each button
    eachButton.style.backgroundColor = "red"; // to make the cancel button for each question red
    const nameInputOne = display01Name();
    const nameInputTwo = display02Name();
    if (activeName) {
      selectedQuestion.textContent = `${nameInputOne} has selected question ${
        index + 1
      }`;
      player01QesNum.push(index + 1);
      console.log(player01QesNum, player02QesNum);
      activeName--;
    } else {
      selectedQuestion.textContent = `${nameInputTwo} has selected question ${
        index + 1
      }`;
      player02QesNum.push(index + 1);
      console.log(player01QesNum, player02QesNum);
      activeName++;
    } // to display the number position of the question selected
    optionList.classList.add("ol-active");

    currentQuestion = index;
    resetTimerAndContent();

    // to display each option ...................
    optionList.innerHTML = ""; // to empty the ol element innerHTML content
    option.forEach((eachOption, index) => {
      const button = document.createElement("button"); // creating a new button element for each option
      button.classList.add("btn-options"); // assigning a class to style the newly created button element
      button.textContent = eachOption; // assigning each option to a button

      optionList.appendChild(button); // displaying the options which are saved in the button element

      button.addEventListener("click", (e) => {
        checkAnswer(eachOption, button);
        timerRestart();
        for (i = 0; i < option.length; i++) {
          optionList.children[i].setAttribute("disabled", true);
        }
      }); // assigning an eventlistener to each of the button and answer options
    });

    if (e.target.innerHTML === eachButton.innerHTML) {
      eachButton.disabled = true; // to disable each question button when selected
    }
  });
});

// Function for getting player-01 name input value
function display01Name() {
  const nameInputOne = document.getElementById("name01Input").value;
  player01Name.textContent = nameInputOne;
  player1El.textContent = nameInputOne;
  console.log(player01Name.textContent);
  return player01Name.textContent; // Return the player name
}

// Function for getting player-02 name input value
function display02Name() {
  const nameInputTwo = document.getElementById("name02Input").value;
  player02Name.textContent = nameInputTwo;
  player2El.textContent = nameInputTwo;
  console.log(player02Name.textContent);
  return player02Name.textContent; // Return the player name
}

// Function to update player's score
function updateScore(playerIndex, points) {
  playerScores[playerIndex] += points;
  // Update the score display for the corresponding player
  const selectedQuestion = document.getElementById("selected-question");
  const nameInputOne = display01Name();
  const nameInputTwo = display02Name();
  if (playerIndex === 0) {
    score01.textContent = playerScores[playerIndex];
    selectedQuestion.textContent = `${nameInputTwo} Select Your Question`;
  } else {
    score02.textContent = playerScores[playerIndex];
    selectedQuestion.textContent = `${nameInputOne} Select Your Question`;
  }
}

// Function to check the answer and update scores
function checkAnswer(eachOption, button) {
  const userAnswer = eachOption;
  const correctAnswer = questionBank[currentQuestion].answer;
  const correctAnswerOption = optionList.querySelector(
    `button:nth-child(${
      questionBank[currentQuestion].options.indexOf(correctAnswer) + 1
    })`
  );
  const nameInputOne = display01Name();
  const nameInputTwo = display02Name();
  let resultColorEl = document.querySelectorAll("#result-color-js");

  correctAnswerOption.style.backgroundColor = "green";
  const mainCorrectAnswer = correctAnswerOption.textContent;
  buttonTracker();

  if (userAnswer === mainCorrectAnswer) {
    currentPoint = 10;

    // Update score for the active player
    if (player1El.classList.contains("active-player")) {
      updateScore(0, currentPoint); // Update Player One's score
      resultColorEl[currentQuestion].textContent = nameInputOne;
      resultColorEl[currentQuestion].style.backgroundColor = "green";
    } else {
      updateScore(1, currentPoint); // Update Player Two's score
      resultColorEl[currentQuestion].textContent = nameInputTwo;
      resultColorEl[currentQuestion].style.backgroundColor = "green";
    }

    // Change active player
    player1El.classList.toggle("active-player");
    player2El.classList.toggle("active-player");
  } else {
    currentPoint = 0;
    if (player1El.classList.contains("active-player")) {
      updateScore(0, currentPoint); // Update Player One's score
      resultColorEl[currentQuestion].textContent = nameInputOne;
      resultColorEl[currentQuestion].style.backgroundColor = "red";
    } else {
      updateScore(1, currentPoint); // Update Player Two's score
      resultColorEl[currentQuestion].textContent = nameInputTwo;
      resultColorEl[currentQuestion].style.backgroundColor = "red";
    }
    // Change active player if the answer is incorrect
    player1El.classList.toggle("active-player");
    player2El.classList.toggle("active-player");
    button.style.backgroundColor = "red";
  }
}

// function to keep track of the number of questions left
function buttonTracker() {
  totalButton--;
  console.log(totalButton);

  if (totalButton === 0) {
    setTimeout(gameOver, 10000);
  }
}

// function to set timeout for game over
function gameOver() {
  // console.log("Game is over");
  let showResultEl = document.getElementById("show-result-js");
  infoBox.classList.remove("active-info");
  questionSection.classList.remove("active-container");
  playersInfo.classList.remove("active-players-info");
  startBtn.classList.remove("active");
  outterContainerBorder.classList.remove("active-outter");
  selectedQuestion.textContent = ``;
  startBtn.style.display = "none";
  gameOverEl.textContent = "Quiz Completed";
  gameOverEl.classList.remove("active");
  showResultEl.classList.add("active-show-result");
  const [playerOneScore, playerTwoScore] = playerScores;
  const nameInputOne = display01Name();
  const nameInputTwo = display02Name();
  if (playerOneScore > playerTwoScore) {
    showResultEl.textContent = `Congratulations! !! !!! ${nameInputOne} 
you won the quiz game with a total point of ${playerOneScore}.
    `;
  } else if (playerOneScore < playerTwoScore) {
    showResultEl.textContent = `Congratulations! !! !!! ${nameInputTwo} 
you won the quiz game with a total point of ${playerTwoScore}.
    `;
  } else {
    showResultEl.textContent = `${nameInputOne} you have a total point of ${playerOneScore} and ${nameInputTwo} you have a total point of ${playerTwoScore},this quiz game is a tie.
Congratulations ! !! !!! ${nameInputOne} and ${nameInputTwo}`;
  }
}

// function to set timer........................................
function startTimer() {
  let timeInSec = 15; // timeInSec variable holds initial value
  counter = setInterval(function () {
    timeSec.textContent = timeInSec;
    timeInSec--;
    if (timeInSec < 9) {
      let addZero = timeSec.textContent;
      timeSec.textContent = `0${addZero}`;
    }
    if (timeInSec < 0) {
      timerRestart();
      //   topLogo.style.color = "red";
      timeLeft.textContent = "Time Over ";
      timeLeft.style.color = "white";
      timeLeft.classList.add("timeover");
      timeSec.style.display = "none";
      timerContainer.style.backgroundColor = "red";
      buttonTracker();
      const allOptionLength = optionList.children.length;
      const correctAnswer = questionBank[currentQuestion].answer;
      const selectedQuestion = document.getElementById("selected-question");
      const nameInputOne = display01Name();
      const nameInputTwo = display02Name();
      for (i = 0; i < allOptionLength; i++) {
        if (optionList.children[i].textContent === correctAnswer) {
          optionList.children[i].style.backgroundColor = "green";
          if (player1El.classList.contains("active-player")) {
            // Change active player
            selectedQuestion.textContent = `${nameInputTwo} Select Your Question`;
            player1El.classList.toggle("active-player");
            player2El.classList.toggle("active-player");
          } else {
            // Change active player if the answer is incorrect
            selectedQuestion.textContent = `${nameInputOne} Select Your Question`;
            player1El.classList.toggle("active-player");
            player2El.classList.toggle("active-player");
          }
        }
      }
      for (i = 0; i < allOptionLength; i++) {
        optionList.children[i].disabled = true;
      }
    }
  }, 1000);
}

// function to clear setInterval ...............................
function timerRestart() {
  clearInterval(counter);
}

// Function to reset timer and content ............................
function resetTimerAndContent() {
  timerRestart(); // Clear any existing intervals
  timeLeft.textContent = "Time Left ";
  timeLeft.style.color = "#00253a";
  timeLeft.classList.remove("timeover");
  timeSec.style.display = "block";
  timerContainer.style.backgroundColor = "white";
  startTimer(); // Start the timer again
}
