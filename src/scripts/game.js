const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounterText');
const scoreText = document.getElementById('scoreText');
//const endPage = document.getElementById('end-page');
//const homePage = document.querySelector('#home');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
// let questions = [{
//         question: "Inside which HTML element do we put the JavaScript?",
//         choice1: "<script>",
//         choice2: "<javascript>",
//         choice3: "<js>",
//         choice4: "<scripting>",
//         answer: 1
//     },
//     {
//         question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
//         choice1: "<script href='xxx.js'>",
//         choice2: "<script name='xxx.js'>",
//         choice3: "<script src='xxx.js'>",
//         choice4: "<script file='xxx.js'>",
//         answer: 3
//     },
//     {
//         question: " How do you write 'Hello World' in an alert box?",
//         choice1: "msgBox('Hello World');",
//         choice2: "alertBox('Hello World');",
//         choice3: "msg('Hello World');",
//         choice4: "alert('Hello World');",
//         answer: 4
//     }
// ];

let questions = [];

fetch(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    )
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions.results);
        questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            });
            console.log(formattedQuestion);
            return formattedQuestion;
        });
        startGame();
    })
    .catch(err => {
        console.error(err);
    });


//*******************//
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;
const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    //console.log(availableQuestions);
    getNewQuestion();
};

const displayEndPage = () => {
    return document.body.innerHTML = `<section id="end-page" class="container-end-page" style = "display:flex">
    <h1 id="finalScore"></h1>
    <form>
      <input type="text" name="username" id="username" placeholder="username">
      <button type="submit" class="button" id="saveScoreButton" disabled>Save</button>
    </form>
    <a id="playAgain" class="button" href="">Play Again</a>
    <a id="goHome" class="button" href="">Go Home</a>
  </section>`
};



const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        displayEndPage();
        const username = document.getElementById('username');
        const finalScore = document.getElementById('finalScore');
        const saveScoreButton = document.getElementById('saveScoreButton');
        const mostRecentScore = localStorage.getItem('mostRecentScore');
        //Save High Scores in LS-Begin
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

        const saveHighScore = e => {
            e.preventDefault();
            const MAX_HIGH_SCORES = 5;
            const scoreObj = {
                username: username.value,
                score: score
            }

            highScores.push(scoreObj);

            highScores.sort((a, b) => b.score - a.score);
            highScores.splice(MAX_HIGH_SCORES);
            localStorage.setItem("highScores", JSON.stringify(highScores));
        }




        //Save High Scores in LS-End

        finalScore.innerText = mostRecentScore;
        username.addEventListener('keyup', () => {
            saveScoreButton.disabled = !username.value;
        });
        saveScoreButton.addEventListener('click', saveHighScore);
        return true;
    }

    questionCounter++;
    questionCounterText.innerHTML = `${questionCounter} / ${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    //console.log(currentQuestion);
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1);
    //console.log(availableQuestions);
    acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        //console.log(classToApply);
        //console.log(selectedAnswer);
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS)
        };

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

const incrementScore = number => {
    score += number;
    scoreText.innerHTML = score;
}

export default startGame;