import { emailIsValid } from "./check-email.js";
import { errorField, form, buttons } from "./elements.js";

/* Validation
/* ==================================================== */

/**
 * Check input for valid email on key down
 * @param      {object}   The event object
 */
function validateEmailKeydown(event) {
	if (emailIsValid(event.target.value)) {
		errorField.classList.remove("error");
	} else {
		errorField.classList.add("error");
	}
}

/**
 * Check input for valid email on form submission
 * @param      {object}   The event object
 */
export function validateEmailSubmission(inputToCheck) {
	if (emailIsValid(inputToCheck.value)) {
		form.submit();
	} else {
		errorField.classList.add("error");
		inputToCheck.addEventListener("keydown", validateEmailKeydown);
	}
}

/* Carousel
/* ==================================================== */

export function updateStyles(event) {
	buttons.forEach(function (button) {
		button.classList.remove("selected");
	});
	event.target.classList.add("selected");
}
