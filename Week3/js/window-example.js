var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	location: window.location.pathname,
	width: window.screen.width,
	height: window.screen.height,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;

		ele = document.getElementById("sy");
		ele.value = this.screenY;

		ele = document.getElementById("wid");
		ele.value = this.width;

		ele = document.getElementById("hgt");
		ele.value = this.height;
	}
};


myWindow.render();