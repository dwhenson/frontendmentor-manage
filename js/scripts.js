import BurgerMenu from "./burger-menu.js";
import { submitForm, form, emailField, buttonContainer } from "./elements.js";
import { validateEmailSubmission } from "./lib.js";
import carouselClickHandler from "./handlers.js";

/* Carousel
/* ==================================================== */
buttonContainer.style.display = "block";
document.addEventListener("click", carouselClickHandler);

/* Form validation
/* ==================================================== */
submitForm.addEventListener("click", function (event) {
	event.preventDefault();
	form.setAttribute("novalidate", "");
	validateEmailSubmission(emailField);
});
