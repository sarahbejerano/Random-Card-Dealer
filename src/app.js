//function that we'll use to generate an array with the 52 plating cards
import "./style.css";
function deckBuilder() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

  // Next loop through the suits array whilst also looping through the values array and push the combined data into the cards array:

  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}
// a esta funcion le pasaremos los arrays de cards

function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;

  const cardBody =
    cardSuit === "Diamonds" ? "&diams;" : "&" + cardSuit.toLowerCase() + ";";

  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    '<span class="card-value-suit-top">' +
    cardBody +
    "</span>" +
    '<span class="card-value-center">' +
    cardValue +
    "</span>" +
    '<span class="card-value-suit-bot">' +
    cardBody +
    "</span>" +
    "</span>";
  document.body.appendChild(card);
}

const cards = deckBuilder();
randomCard(cards);
