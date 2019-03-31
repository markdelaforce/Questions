var page = sessionStorage.page;

var
bodyColour,
titleColour,
titleShadow,
buttonBG,
buttonColour,
buttonBorder;

var header = document.getElementById('header');
var button = document.getElementById('button');

switch (page) {
case 'advice':
	bodyColour = '#e8e0d8';
	titleColour = '#fff';
	titleShadow = '#ff1aff';
	buttonBG = '#fff';
	buttonColour = '#999';
	buttonBorder = '#ccc';
	break;
case 'breakfast':
	bodyColour = '#eaedf2';
	titleColour = '#eaedf2';
	titleShadow = '#b1c0ce';
	buttonBG = '#d8cdcA';
	buttonColour = '#974e85';
	buttonBorder = '#ac9fbb';
	break;
case 'howOften':
	bodyColour = '#cbcbcb';
	titleColour = '#fff';
	titleShadow = '#3c9cec';
	buttonBG = '#fff';
	buttonColour = '#999';
	buttonBorder = '#ccc';
	break;
case 'jobs':
	bodyColour = '#ebe3e0';
	titleColour = '#fff';
	titleShadow = '#2bc96a';
	buttonBG = '#fff';
	buttonColour = '#c93b2b';
	buttonBorder = '#c93b2b';
	break;
}

document.getElementById('body').style.background = bodyColour;
header.style.color = titleColour;
header.style.textShadow = '0 0 20px ' + titleShadow + ', 0 0 20px' + titleShadow;
button.style.background = buttonBG;
button.style.color = buttonColour;
button.style.border = '2px solid ' + buttonBorder;
