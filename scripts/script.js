import {
  cardSectionStyle,
  cardStyle,
  redStyle,
  blueStyle,
} from "./constants.js";

const cardContainer = document.querySelector(".card-container");
const gameArea = document.querySelector(".gameArea");

const player1 = {
  chances: 2,
  score: 0,
};
const player2 = {
  chances: 2,
  score: 0,
};

let whosChance = "player1";

const flipCard = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      card.addEventListener("click", function () {
        card.classList.toggle("is-flipped");
      });
    });
  });
};

const changeTheChance = () => {
  whosChance = "player2";
};

const changeTheColor = () => {
  if (whosChance === "player1") {
    gameArea.classList.remove(...blueStyle);
    gameArea.classList.add(...redStyle);
  } else {
    gameArea.classList.remove(...redStyle);
    gameArea.classList.add(...blueStyle);
  }
};

(() => {
  const renderBoard = () => {
    const fragement = document.createDocumentFragment();

    for (let i = 0; i < 5; i++) {
      const cardSection = document.createElement("section");

      cardSection.classList.add(...cardSectionStyle);

      for (let j = 0; j < 5; j++) {
        const card = document.createElement("div");

        card.innerHTML = `<div
        class="card relative w-[3.2rem] h-[3.2rem] md:w-[4rem] md:h-[4rem]"
      >
        <div
          class="front bg-neutral-200 absolute w-full h-full rounded cursor-pointer"
        ></div>
        <div
          class="back bg-green-500 absolute w-full h-full rounded cursor-pointer"
        >
          
        </div>`;

        cardSection.appendChild(card);
      }
      fragement.appendChild(cardSection);
    }
    cardContainer.appendChild(fragement);
    flipCard();
    changeTheColor();
  };
  renderBoard();
})();
