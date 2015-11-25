//GREETING PART

var time = new Date().getHours();

var myName = document.getElementById("name");
myName.textContent = "Viacheslav";

var greetings = document.getElementById("greeting");

if (time >= 6 && time < 12) {
	greetings.textContent = "Good morning";
}
else if (time >= 12 && time < 18) {
	greetings.textContent = "Good afternoon";
}
else if (time >= 18 && time < 23) {
	greetings.textContent = "Good evening"
}
else {
	greetings.textContent = "Good night"
}


//PRODUCT PART

var products = ["Stamford T-shirt", "Stamford Notebook", "Stamford Wristband"];
var price = [10, 5, 1];
var total = 0;
var 


var productList = document.getElementById("productList");
for (var i = 0; i < products.length; i++) {
	productList.innerHTML += "<li>" + products[i] + ": $" + price[i] + "</li>";
	total += price[i];

}

var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;
