// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "<tr>"; //start the first row
var counter = 0;

for (var i = 1; i <= 31; i++) {
	if (counter === 7) {
		stringHTML += "</tr><tr>" + "<td>" + i + "</td>"; //when it is number 8 start the new row
		counter = 1; 
	}
	else {
		stringHTML += "<td>" + i + "</td>";
		counter++;
	}
}
stringHTML += "</tr>"; //close the last row

hotelTable.innerHTML += stringHTML;
