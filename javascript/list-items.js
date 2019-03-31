var page = sessionStorage.page;
var questions;
var itemColour;

switch (page) {
case 'advice':
	questions = [
		'What should I do with 250,000€ that I won ?',
		'What can I do to help save the planet ?',
		'I\'m new in town. How can I make new friends ?',
		'How can I help a friend who has a problem with alcohol ?',
		'What can I do to improve my memory ?',
		'How can I change my job ?',
		'How can I get more done in a day ?',
		'What should I do to lose weight ?',
		'How can I become rich ?',
		'How can I resolve a problem I\'m having with a neighbour ?',
		'What should I do with 1000€ I found ?',
		'A family member is not talking to me. What should I do ?',
		'How can I give up smoking ?'
	];
	itemColour = '#8c1aff';
	break;
case 'breakfast':
	questions = [
		'Do you drink coffee with breakfast ?',
		'What time do you usually eat breakfast ?',
		'Do you like to watch TV while you eat breakfast ?',
		'Do you have breakfast out when you are on holiday ?',
		'Do you make your own breakfast ?',
		'Have you ever eaten a full English breakfast ?',
		'Do you like the breakfast served in hotels ?',
		'What do you normally have for breakfast ?',
		'Do you like trying the breakfast of other countries ?',
		'Do you eat breakfast every day ?',
		'What did you have for breakfast when you were a child ?',
		'Do you like the same things for breakfast when on holiday ?',
		'Do you ever eat breakfast in bed ?'
	];
	itemColour = '#c289b4';
	break;
	
case 'howOften':
	questions = [
		'Go to a restaurant ?',
		'Speak with your cousins ?',
		'Visit the doctor\'s ?',
		'Watch videos on YouTube ?',
		'Eat chocolate ?',
		'Go for a walk ?',
		'Have your hair cut ?',
		'Get together with your family ?',
		'Listen to music ?',
		'Go to the cinema ?',
		'Go shopping for clothes ?',
		'Read a book ?',
		'Go out with your friends ?'
	];
	itemColour = '#2d3b55';
	break;
	
case 'jobs':
	questions = [
		'What jobs exist now that didn\'t exist in the past ?',
		'Which jobs do you think will dissappear in the future ?',
		'What new jobs will there be in 50 years time ?',
		'Which jobs do you think would be the best and why ?',
		'How does working in a big city compare with a smaller town ?',
		'Which jobs do you think would be the worst and why ?',
		'What jobs do you think will never disappear ?',
		'How do different country\'s working conditions compare with Spain ?',
		'How did you start working in your current job ?',
		'Would you like to work in another country ?',
		'Have you ever been unemployed ?',
		'What was your fist job ?',
		'What skills would you like to learn to help in your job ?'
	];
	itemColour = '#2b8bc9';
	break;
}
var items = questions.length;

for (var index = 0; index < items; index++) {
	var listItem = document.createElement('li');
	listItem.innerHTML = questions[index];
	listItem.classList.add("item");
	listItem.style.color = itemColour;
	document.getElementById('list-items').appendChild(listItem);
}