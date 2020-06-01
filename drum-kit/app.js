let keys = document.querySelectorAll(".key");

class AudioFuncs {
	constructor(audio, key) {
		this.audio = audio;
		this.key = key;
	}

	playAudio() {
		if (!this.audio) return;
		this.audio.currentTime = 0;
		this.audio.play();

		this.key.classList.add("playing");
		keys.forEach((key) =>
			key.addEventListener("transitionend", this.removeTransition)
		);
	}

	removeTransition(e) {
		if (e.propertyName !== "transform") return;
		this.classList.remove("playing");
	}
}

//Event Listeners
document.addEventListener("keydown", (e) => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	let keyPress = new AudioFuncs(audio, key);
	keyPress.playAudio();
});
