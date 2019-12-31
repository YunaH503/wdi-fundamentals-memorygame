alert("Hello, friends.");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2) {
	console.log("There are " + cardsInPlay.length + " cards in play.")
	if(cardOne === cardTwo) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
