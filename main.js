console.log("JS file is connected to HTML! Woo!")
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "King";
//var cardFour = "King";
//if(cardOne === cardTwo){
	//alert('You found a match!');
//}
//else if(cardThree === cardFour){
	//alert('You found another match!');
//}
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var createCards = function(i){
for (var i=0; i < cards.length; i++) {
	var board = document.getElementById('game-board');
	var newCardElement = document.createElement('div');
	newCardElement.className = ('card');
	newCardElement.setAttribute('data-card', cards[i]);
	newCardElement.addEventListener('click', isTwoCards);
	board.appendChild(newCardElement);
}
}
createCards();

function refreshPage(){
    window.location.reload();
} 
//checks to see if there are cards in play
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png'>"; //queen
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
    
  } else {
    alert("Sorry, try again.");
  }	

}
