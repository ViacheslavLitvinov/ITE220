var stamfordHotel = {
	name : "Stamford Hotel",
	rooms : 150,
	booked : 34,
	checkAvailability : function() {
		return this.rooms - this.booked;
	}
};

var hotelName = document.getElementById("hotelName");
hotelName.textContent = stamfordHotel.name;

var roomsLeft = document.getElementById("rooms");
roomsLeft.textContent = stamfordHotel.checkAvailability();
