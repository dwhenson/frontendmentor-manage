/* =================== Variables ====================== */
/* ==================================================== */

const form = document.querySelector("form");
const submitForm = document.querySelector(".submit");
const emailField = document.querySelector("#email");
const errorField = document.querySelector("#errorMessage");

/* =================== Functions ====================== */
/* ==================================================== */

/**
 * Check if email address is valid
 * @param      {string}   The email
 * @return     {boolean}  The result of the test
 */
function emailIsValid(email) {
	return /\S+@\S+\.\S+/.test(email);
}

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
function validateEmailSubmission(inputToCheck) {
	if (emailIsValid(inputToCheck.value)) {
		form.submit();
	} else {
		errorField.classList.add("error");
		inputToCheck.addEventListener("keydown", validateEmailKeydown);
	}
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

submitForm.addEventListener("click", function (event) {
	event.preventDefault();
	form.setAttribute("novalidate", "");
	validateEmailSubmission(emailField);
});

/* Set up carousel - order of JS matters?
 */

const siemaContainerTest = document.querySelector("#text");
let width = window.matchMedia("(max-width: 45em)");
if (width.matches) {
	console.log(siemaContainerTest);
	siemaContainerTest.classList.add("siema");
}
