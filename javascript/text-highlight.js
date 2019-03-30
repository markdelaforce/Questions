var initialColour, highlightColour;
var page = sessionStorage.page;

switch (page) {
case 'advice':
	initialColour = "#8c1aff";
	highlightColour = "#e600e6";
	break;
case 'breakfast':
	initialColour = "#c289b4";
	highlightColour = "#62819d";
	break;
case 'howOften':
	initialColour = "#2d3b55";
	highlightColour = "#2e96ea";
	break;
case 'jobs':
	initialColour = '#2b8bc9';
	highlightColour = "#28bd64";
	break;
}

var state = 0;
var items = document.getElementsByClassName("item");
var listLength = items.length;

document.body.addEventListener('click', changeState);

function changeState() {
	if (state == 0) {
		state = 1;
	}
	else {
		state = 0;
		for (var i = 0; i < listLength; i++) {
			items[i].style.color = initialColour;
		}
	}
}

for (var i = 0; i < listLength; i++) {
	items[i].addEventListener('mouseover', highlight);
	items[i].addEventListener('mouseout', unhighlight);
}

function highlight() {
	if (state == 0) {
		this.style.color = highlightColour;
	}
}
function unhighlight () {
	if (state == 0) {
		this.style.color = initialColour;
	}
}
