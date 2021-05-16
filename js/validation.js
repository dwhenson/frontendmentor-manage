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
	console.log(emailIsValid(event.target.value));
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
function validateEmailSubmission(event) {
	// CHECK: Why is this always false??
	console.log(emailIsValid(event.target.value));
	if (emailIsValid(event.target.value)) {
		form.submit();
	} else {
		errorField.classList.add("error");
		emailField.addEventListener("keydown", validateEmailKeydown);
	}
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

submitForm.addEventListener("click", function (event) {
	event.preventDefault();
	// TODO: add in fix to check if already exists
	form.setAttribute("novalidate", "");
	validateEmailSubmission(event);
});
