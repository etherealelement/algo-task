//Написать функцию duplicate которая вернет список повторяющихся email'ов

const emails = [
	'lyhxr@example.com',
	'lyhxr@example.com',
	'masha@example.com',
	'fedya@example.com',
	'katya@example.com',
	'fedya@example.com',
	'katya@example.com',
	'lyhxr@example.com',
];

const duplicate = (arr = emails) => {
	let map = {};
	arr.forEach(email => (map[email] ? map[email]++ : (map[email] = 1)));
	return Object.entries(map)
		.filter(email => email[1] > 1)
		.map(item => item[0]);
};

const val = duplicate(emails);
console.log(val); // [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com']
