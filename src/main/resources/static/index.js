var request = new XMLHttpRequest();
request.open("GET", "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json");
var swapiContainer = document.getElementById("results");
	
request.onload = function() {
	console.log(request.responseText);
	var data = JSON.parse(request.responseText);
	renderHTML(data);	
	console.log(data.complete);
	console.log(data.tiny);
};

request.send();

function renderHTML(data) {
	for (var i = 0; i < data.complete.length; i++) {
		var htmlString = "<p> " + data.complete[i].firstName + " "  + data.complete[i].lastName +
		" " + data.complete[i].innovation + " " + data.complete[i].year + 
		"</p>";
		console.log(data.complete[i].firstName);
	swapiContainer.insertAdjacentHTML("beforeend", htmlString);
	}		
}
