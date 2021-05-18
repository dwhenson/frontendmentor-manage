const mySiema = new Siema();
// const btn0 = document.querySelector(".btn0");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");

// btn0.addEventListener("click", () => mySiema.goTo(0));
// btn1.addEventListener("click", () => mySiema.goTo(1));
// btn2.addEventListener("click", () => mySiema.goTo(2));
// btn3.addEventListener("click", () => mySiema.goTo(3));

const buttons = Array.from(document.querySelectorAll(".btn"));

function updateStyles(event) {
	buttons.forEach(function (button) {
		button.classList.remove("selected");
	});
	event.target.classList.add("selected");
}

function clickHander(event) {
	if (!event.target.closest(".buttons")) return;
	buttons.forEach(function (button, index) {
		if (event.target === button) {
			mySiema.goTo(index);
			updateStyles(event);
		}
	});
}

document.addEventListener("click", clickHander);
