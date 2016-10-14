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
var createCards = function(i){
for (i=0; i < 4; i++) {
	var board = document.getElementById('game-board');
	var newCardElement = document.createElement('div');
	newCardElement.className = ('card');
	document.getElementById('game-board').appendChild(newCardElement);
}
}
createCards(4);
