let homeEl = document.getElementById("home-score-el");
let awayEl = document.getElementById("away-score-el");

let homeScore = 0;
let awayScore = 0;

function homeAddOne() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}

function homeAddThree() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}

function awayAddOne() {
  awayScore += 1;
  awayEl.textContent = awayScore;
}

function awayAddTwo() {
  awayScore += 2;
  awayEl.textContent = awayScore;
}

function awayAddThree() {
  awayScore += 3;
  awayEl.textContent = awayScore;
}

function reset() {
  homeScore = 0;
  awayScore = 0;

  homeEl.textContent = homeScore;
  awayEl.textContent = awayScore;
}
