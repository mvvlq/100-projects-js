const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hands = document.querySelectorAll(".hand");

class SetTime {
	constructor() {
		this.now = new Date();
	}

	seconds() {
		const sec = this.now.getSeconds();
		const secDegrees = (sec / 60) * 360 + 90;
		secHand.style.transform = `rotate(${secDegrees}deg)`;

		if (secDegrees === 90) {
			hands.forEach((hand) => {
				hand.style.transition = "none";
			});
		} else {
			hands.forEach((hand) => {
				hand.style.transition = "";
			});
		}
	}

	minutes() {
		const min = this.now.getMinutes();
		const minDegrees = (min / 60) * 360 + 90;
		minHand.style.transform = `rotate(${minDegrees}deg)`;
	}

	hours() {
		const hour = this.now.getHours();
		const hourDegrees = (hour / 12) * 360 + 90;
		hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	}

	setDate() {
		this.now;

		this.seconds();
		this.minutes();
		this.hours();
	}
}

setInterval(() => {
	let setTime = new SetTime();
	setTime.setDate();
}, 1000);
