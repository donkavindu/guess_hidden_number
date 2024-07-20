let hiddenNumber = Math.trunc(Math.random() * 25) + 1;
let chances = 10;
let fullHightScore = 1000;
let hightScore = 0;
let marks;

document.querySelector(".chances").textContent = chances;
document.querySelector(".high-score").textContent = hightScore;

document.querySelector(".check-quesing").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    document.querySelector(".massage").textContent = "No Quessing";
  } else if (guessNumber >= 1 && guessNumber <= 25) {
    if (hiddenNumber === guessNumber) {
      highScoreFunction(guessNumber);
      if (hightScore < marks) {
        document.querySelector(".new-record").style.display = "block";
        document.querySelector(".new-record-marks").textContent = marks;
        hightScore = marks;
        document.querySelector('.high-score').textContent=hightScore;
        console.log("high", hightScore);
        console.log("mark", marks);
      } else {
        document.querySelector(".win").style.display = "block";
      }
    } else if (hiddenNumber < guessNumber) {
      if (chances > 1) {
        document.querySelector(".massage").textContent = "Quessing is too high";
        chances--;
        document.querySelector(".chances").textContent = chances;
        highScoreFunction(guessNumber);
        document.querySelector(".mark").textContent = marks;
      } else {
        document.querySelector(".lost").style.display = "block";
      }
    } else if (hiddenNumber > guessNumber) {
      if (chances > 1) {
        document.querySelector(".massage").textContent = "Quessing is too low";
        chances--;
        document.querySelector(".chances").textContent = chances;
        highScoreFunction(guessNumber);
        document.querySelector(".mark").textContent = marks;
      } else {
        document.querySelector(".lost").style.display = "block";
      }
    }
  } else {
    document.querySelector(".massage").textContent = "Quess Between 1-25";
  }
});

const highScoreFunction = function (guessNumber) {
  fullHightScore =
    fullHightScore - Math.abs(hiddenNumber - Math.abs(guessNumber));
  marks = fullHightScore;
};

document.querySelector(".win-playagain").addEventListener("click", function () {
    reset();
});
document.querySelector(".record-playagain").addEventListener("click", function () {
    reset();

  });
document.querySelector(".lost-tryagain").addEventListener("click", function () {
    reset();
});
const reset = function () {
  document.querySelector(".new-record").style.display = "none";
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lost").style.display = "none";
  chances=10;
  document.querySelector(".chances").textContent = chances;
  document.querySelector(".massage").textContent = "GUESS THE HIDDEN NUMBER ...";
  hiddenNumber = Math.trunc(Math.random() * 25) + 1;
  document.querySelector(".guess").value="";
  fullHightScore = 1000;

};
