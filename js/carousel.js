/* ====================================================
   Variables
   ==================================================== */

const mySiema = new Siema({ draggable: false, multipleDrag: false });
const buttons = Array.from(document.querySelectorAll(".btn"));
const buttonContainer = document.querySelector(".buttons");
const siemaContainer = document.querySelector("#text");

/* ====================================================
   Functions
   ==================================================== */
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

/* ====================================================
   Inits and Event Listeners
   ==================================================== */

buttonContainer.style.display = "block";
document.addEventListener("click", clickHander);
