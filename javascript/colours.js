var page = sessionStorage.page;

var
bodyColour,
titleColour,
titleShadow,
buttonBG,
buttonColour,
hoverColour,
buttonBorder,
hoverBorder,
hoverShadow,
hoverOpacity,
footerGradient;

var header = document.getElementById('header');
var button = document.getElementById('button');

switch (page) {
case 'advice':
	bodyColour = '#e8e0d8';
	titleColour = '#fff';
	titleShadow = '#ff1aff';
	buttonBG = '#fff';
	buttonColour = '#999';
	hoverColour = '#00ff00';
	buttonBorder = '#ccc';
	hoverBorder = '2px solid #ffff00';
	hoverShadow = '0 0 20px #ffff00, 0 0 20px #ffff00';
	hoverOpacity = '1';
	footerGradient = 'linear-gradient(#e8e0d8, #ffb3ff)';
	break;
case 'breakfast':
	bodyColour = '#eaedf2';
	titleColour = '#eaedf2';
	titleShadow = '#b1c0ce';
	buttonBG = '#d8cdcA';
	buttonColour = '#974e85';
	hoverColour = '#974e85';
	buttonBorder = '#ac9fbb';
	hoverBorder = '2px solid #ac9fbb';
	hoverShadow = '';
	hoverOpacity = '0.5';
	footerGradient = 'linear-gradient(#eaedf2, #b1c0ce)';
	break;
case 'howOften':
	bodyColour = '#cbcbcb';
	titleColour = '#fff';
	titleShadow = '#3c9cec';
	buttonBG = '#fff';
	buttonColour = '#999';
	hoverColour = '#0e6ba8';
	buttonBorder = '#ccc';
	hoverBorder = '2px solid #a2aebb';
	hoverShadow = '0 0 20px #a2aebb, 0 0 20px #a2aebb';
	hoverOpacity = '1';
	footerGradient = 'linear-gradient(#cbcbcb, #8bc4f4)';
	break;
case 'jobs':
	bodyColour = '#ebe3e0';
	titleColour = '#fff';
	titleShadow = '#2bc96a';
	buttonBG = '#fff';
	buttonColour = '#c93b2b';
	hoverColour = '#e600e6';
	buttonBorder = '#c93b2b';
	hoverBorder = '2px solid #c98a2b';
	hoverShadow = '0 0 20px #c98a2b, 0 0 20px #c98a2b';
	hoverOpacity = '1';
	footerGradient = 'linear-gradient(#ebe3e0, #abedc5)';
	break;
}

document.getElementById('body').style.background = bodyColour;
header.style.color = titleColour;
header.style.textShadow = '0 0 20px ' + titleShadow + ', 0 0 20px' + titleShadow;
button.style.background = buttonBG;
button.style.color = buttonColour;
button.style.border = '2px solid ' + buttonBorder;
button.addEventListener('mouseover', mouseIn);
button.addEventListener('mouseout', mouseOut);
document.getElementById('footer').style.backgroundImage = footerGradient;

function mouseIn() {
	button.style.color = hoverColour;
	button.style.border = hoverBorder;
	button.style.boxShadow = hoverShadow;
	button.style.opacity = hoverOpacity;
}

function mouseOut() {
	button.style.color = buttonColour;
	button.style.border = '2px solid ' + buttonBorder;
	button.style.boxShadow = '';
	button.style.opacity = '1';
}
