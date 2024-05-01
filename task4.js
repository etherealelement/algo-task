let amimal = {
	name: 'Slaves',
	walk() {
		console.log(`${this.name} is walking`);
	},
};

let rabbit = {
	__proto__: amimal,
	name: 'White Rabbit',
	eat() {
		console.log(`${this.name} is eating`);
	},
};

let longEar = {
	__proto__: rabbit,
	earLength: 20,
};

longEar.eat();

// true,null, undefined
