import {
  cardSectionStyle,
  redStyle,
  blueStyle,
  newCardData,
} from "./constants.js";

const cardContainer = document.querySelector(".card-container");

let currentPlayer = "player1";

const resultH1 = document.getElementById("resultH1");
const restartBtn = document.getElementById("restartBtn");

const resultDisplaySection = document.getElementById("resultDisplaySection");

const player1 = {
  score: 0,
  flipCount: 0,
  flippedCards: [],
};
const player2 = {
  score: 0,
  flipCount: 0,
  flippedCards: [],
};

const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");

const matchedCards = [];

const checkForGameEnd = () => {
  const allCards = document.querySelectorAll(".card");
  if (matchedCards.length === allCards.length) {
    resultH1.innerText = `Game Over! ${
      player1.score > player2.score ? "Player 1" : "Player 2"
    } wins!`;
    resultH1.classList.remove("hidden");
    restartBtn.classList.remove("hidden");
    resultDisplaySection.classList.remove("hidden");
  }
};

const nextPlayerTurn = () => {
  if (currentPlayer === "player1") {
    player1.flipCount = 0;
    player1.flippedCards = [];
    currentPlayer = "player2";
  } else {
    player2.flipCount = 0;
    player2.flippedCards = [];
    currentPlayer = "player1";
  }
  updateContainer();
};

const updateScore = () => {
  player1Score.innerText = player1.score;
  player2Score.innerText = player2.score;
};

const checkForMatch = (player) => {
  const [firstCard, secondCard] = player.flippedCards;
  if (firstCard?.dataset?.name === secondCard?.dataset?.name) {
    player.score += 10;
    matchedCards.push(firstCard, secondCard);
    player.flipCount = 0;
    setTimeout(() => {
      firstCard.classList.add("is-matched");
      secondCard.classList.add("is-matched");
      firstCard.querySelector(".back img")?.remove();
      secondCard.querySelector(".back img")?.remove();
      updateScore();
      updateContainer();
    }, 1000);
  } else {
    setTimeout(() => {
      firstCard.classList.remove("is-flipped");
      secondCard.classList.remove("is-flipped");
      nextPlayerTurn();
    }, 1000);
  }
  player.flippedCards = [];
  checkForGameEnd();
};

const updateContainer = () => {
  if (currentPlayer === "player1") {
    cardContainer.classList.remove(...blueStyle);
    cardContainer.classList.add(...redStyle);
  } else {
    cardContainer.classList.remove(...redStyle);
    cardContainer.classList.add(...blueStyle);
  }
};

const restartGame = () => {
  currentPlayer = "player1";
  player1.score = 0;
  player1.flipCount = 0;
  player1.flippedCards = [];
  player2.score = 0;
  player2.flipCount = 0;
  player2.flippedCards = [];
  matchedCards.length = 0;
  resultH1.innerText = "";
  resultH1.classList.add("hidden");
  restartBtn.classList.add("hidden");
  resultDisplaySection.classList.add("hidden");
  cardContainer.innerHTML = "";
  updateScore();
  renderBoard();
};

const renderBoard = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 4; i++) {
    const cardSection = document.createElement("section");
    cardSection.classList.add(...cardSectionStyle);

    for (let j = 0; j < 4; j++) {
      const card = document.createElement("div");
      card.innerHTML = `<div id="${j + i * 4}"
        class="card relative w-[3.2rem] h-[3.2rem] md:w-[4rem] md:h-[4rem]"
      >
        <div
          class="front bg-neutral-200 absolute w-full h-full rounded cursor-pointer"
        ></div>
        <div
          class="back bg-neutral-600 absolute w-full h-full rounded flex items-center justify-center cursor-pointer overflow-hidden "
        >
        <img class="w-full h-full" src=${newCardData[j + i * 4].image} />
        </div>`;
      if (card.children[0].dataset) {
        card.children[0].dataset.name = `${newCardData[j + i * 4].name}`;
      }
      cardSection.appendChild(card);
    }
    fragment.appendChild(cardSection);
  }
  cardContainer.appendChild(fragment);
  updateContainer();
};

renderBoard();

cardContainer.addEventListener("click", (e) => {
  const currentCard = e.target.closest(".card");

  if (
    currentCard &&
    !currentCard.classList.contains("is-matched") &&
    !currentCard.classList.contains("is-flipped")
  ) {
    if (currentPlayer === "player1") {
      if (player1.flipCount < 2) {
        player1.flipCount++;
        player1.flippedCards.push(currentCard);
        currentCard.classList.add("is-flipped");
      }
      if (player1.flipCount === 2) {
        checkForMatch(player1);
      }
    } else {
      if (player2.flipCount < 2) {
        player2.flipCount++;
        player2.flippedCards.push(currentCard);
        currentCard.classList.add("is-flipped");
      }
      if (player2.flipCount === 2) {
        checkForMatch(player2);
      }
    }
  }
});

restartBtn.addEventListener("click", () => {
  restartGame();
  updateScore();
});
