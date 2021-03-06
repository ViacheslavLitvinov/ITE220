var game = {
	answer: Math.round(Math.random()*100), // Need to random this value from 0-100
	init: function() {
		var self = this;
		// Number 1
		var ele = document.getElementById("one");
		ele.addEventListener("click", function(){
			self.click(1);
		}, false);

		// Number 2
		var ele = document.getElementById("two");
		ele.addEventListener("click", function(){
			self.click(2);
		}, false);

		// Number 3
		var ele = document.getElementById("three");
		ele.addEventListener("click", function(){
			self.click(3);
		}, false);

		// Number 4
		var ele = document.getElementById("four");
		ele.addEventListener("click", function(){
			self.click(4);
		}, false)
		
		// Number 5
		var ele = document.getElementById("five");
		ele.addEventListener("click", function(){
			self.click(5);
		}, false)
		
		// Number 6
		var ele = document.getElementById("six");
		ele.addEventListener("click", function(){
			self.click(6);
		}, false)
		
		// Number 7
		var ele = document.getElementById("seven");
		ele.addEventListener("click", function(){
			self.click(7);
		}, false)
		
		// Number 8
		var ele = document.getElementById("eight");
		ele.addEventListener("click", function(){
			self.click(8);
		}, false)
		5
		// Number 9
		var ele = document.getElementById("nine");
		ele.addEventListener("click", function(){
			self.click(9);
		}, false)
		
		// Number 0
		var ele = document.getElementById("null");
		ele.addEventListener("click", function(){
			self.click(0);
		}, false)

		// Guess!
		var ele = document.getElementById("guess");
		//ele.addEventListener("click", this.checkAnswer, false);
		ele.addEventListener("click", function(){
			self.checkAnswer(self);
		}, false)
	},
	click: function(value) {
		console.log(value + " clicked.");
		var userValueEle = document.getElementById("userValue");
		userValueEle.value += value;
	},
	checkAnswer: function(self) {
		//alert("This is not correct! Try again. ");
		var userValueEle = document.getElementById("userValue");
		if (userValueEle.value == self.answer) {
			alert("Congratulations! You win! \nRefresh the page to start a new game.");
			
		}
		else if (userValueEle.value > this.answer) {
			alert("Guessing number is less than the correct number")
			userValueEle.value="";
		}
		else {
			alert("Guessing number is more than the correct number")	
			userValueEle.value="";
		}
	}
};

game.init();