//script for score counting(creating object)............................
let score = JSON.parse(localStorage.getItem("score")) || {
  // using OR to reset the value of game if the socre is null (default operator)
  Win: 0,
  Losses: 0,
  Tie: 0,
};

showScore();

//reset function for score.................................
function resetfunction() {
  score.Win = 0;
  score.Losses = 0;
  score.Tie = 0;
  localStorage.removeItem("score");
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
  showScore();
}
// creating function to generate random results....................................
function randomComputerMove() {
  const randomNumber = Math.random();

  let computerMove = ``;
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "scissor";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "paper";
  }
  return computerMove;
}
//creating autoplay using setInterval
let autoplayStatus=false;
let intervalId='';
function autoplay(){
      if(!autoplayStatus){intervalId=setInterval(function(){
        let automove=randomComputerMove();
        resultOfGame(automove);
      },1000);
      document.querySelector('.autoplay-button').innerHTML='STOP';
      console.log(autoplayStatus=true);

    }else{
      clearInterval(intervalId);
      document.querySelector('.autoplay-button').innerHTML='AUTOPLAY';
      autoplayStatus=false;
    }
}
//creating function to  get result(Nested if/else)..........................
function resultOfGame(playerMove) {
  const computerMove = randomComputerMove();
  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "You lose";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "scissor") {
      result = "You lose";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "scissor") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "rock") {
      result = "You lose";
    }
  }

  if (result === "You win") {
    score.Win += 1;
  } else if (result === "You lose") {
    score.Losses += 1;
  } else if (result === "Tie") {
    score.Tie += 1;
  }
  //saving the scores into localStorage
  localStorage.setItem("score", JSON.stringify(score));
  showScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You: ${playerMove} - Computer: ${computerMove}`;
}
//creating  function to show the score in the webpage using DOM
function showScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Win: ${score.Win}   Losses: ${score.Losses}   Ties: ${score.Tie}`;
}
function funny() {
  window.location.href = "fun.html";
}


//fun ..............................................................
function goBackfun() {
  window.location.href = "rockPaperScissors.html";
}