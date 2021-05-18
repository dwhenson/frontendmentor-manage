const mySiema = new Siema();
const buttons = Array.from(document.querySelectorAll(".btn"));
const buttonContainer = document.querySelector(".buttons");
const siemaContainer = document.querySelector("#text");

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

// let width = window.matchMedia("(max-width: 45em)");
// if (width.matches) {
// 	console.log(siemaContainer);
// 	siemaContainer.classList.add("siema");
// }

buttonContainer.style.display = "block";
document.addEventListener("click", clickHander);
