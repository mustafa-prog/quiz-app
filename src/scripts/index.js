// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import startGame from './game';


// \/ All of your javascript should go here \/

//Hide main page and display game page when we click on the play button
const playButton = document.querySelector('#play');
const homePage = document.querySelector('#home');
const gamePage = document.querySelector('#game-page');

const displayGamePageAndStartGame = (e) => {
    e.preventDefault();
    homePage.style.display = 'none';
    gamePage.style.display = 'flex';
    startGame();
}

playButton.addEventListener('click', displayGamePageAndStartGame);


// Hide main page and display high scores page when we click on the 'High Scores' button
const highScoresPage = document.querySelector('#highScores-page');
const highScoresButton = document.querySelector('#highScores-btn');

const displayHighScoresPageAndStartGame = e => {
    e.preventDefault();
    homePage.style.display = 'none';
    highScoresPage.style.display = 'flex';
}

highScoresButton.addEventListener('click', displayHighScoresPageAndStartGame);


//"Go Home" button in high scores page 
const homePageButton = document.querySelector('#goHome-btn');

const displayHomePage = e => {
    e.preventDefault();
    highScoresPage.style.display = 'none';
    homePage.style.display = 'flex';

}

homePageButton.addEventListener('click', displayHomePage);

// Get and display high scores
const highScoresList = document.getElementById("highScoresList");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//console.log(highScores);
highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.username}: ${score.score}</li>`;
    })
    .join("");