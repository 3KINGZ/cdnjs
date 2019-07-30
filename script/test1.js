let messages = [
	'happy birthday',
	'merry christmas my love',
	'a happy christmas to all the family',
	'you are all i want for christmas',
	'get well soon'
];
const list = document.querySelector('ul');

for (i = 0; i < messages.length; i++) {
	if (messages[i].indexOf('christmas') !== -1) {
		let lis = document.createElement('li');
		lis.appendChild(document.createTextNode(messages[i]));
		list.appendChild(lis);
	}
}