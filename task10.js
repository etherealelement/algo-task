class Clock {
	constructor({ template }) {
		this.template = template;
	}
	render() {
		let date = new Date();
		let hours = date.getHours();
		let mins = date.getMinutes();
		let sec = date.getSeconds();

		if (hours < 10) hours = '0' + hours;
		if (mins < 10) mins = '0' + mins;
		if (sec < 10) sec = '0' + sec;

		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', sec);
		console.log(output);
	}
	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	}
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
