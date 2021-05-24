import { mySiema, buttons } from "./elements.js";
import { updateStyles } from "./lib.js";

/* Carousel
/* ==================================================== */

function carouselClickHandler(event) {
	if (!event.target.closest(".buttons")) return;
	buttons.forEach(function (button, index) {
		if (event.target === button) {
			mySiema.goTo(index);
			updateStyles(event);
		}
	});
}

export default carouselClickHandler;
