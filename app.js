// Get the input element and button element from the DOM
const inputEl = document.querySelector("#email");
const btn = document.querySelector("#submit");

// Define the regular expression to validate the email address
const RegEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// Get the error icon and error message elements from the DOM
const iconErrorEl = document.querySelector(".icon-error");
const textErrorEl = document.querySelector(".text-error");
const fromGroupEl = document.querySelector(".form-group");

// Add a click event listener to the button
btn.addEventListener("click", (e) => {
  // Call the validateEmail function
  validateEmail();
});

// Add an input event listener to the input element
inputEl.addEventListener("input", validateEmail);

// Function to validate the email address
function validateEmail() {
  // Get the email value from the input element
  const email = inputEl.value;

  // Initialize an empty array to store the errors
  const errors = [];

  // Check if the email is empty or undefined
  if (email == "" || email === undefined) {
    // Push an error message to the errors array
    errors.push("Please provide us your email");
  } else if (!email.match(RegEmail)) {
    // Check if the email does not match the regular expression
    errors.push("Please provide us your valid email");
  }

  // Check if there are errors
  if (errors.length > 0) {
    // Show the error icon
    iconErrorEl.style.display = "block";
    // Set the error message
    textErrorEl.textContent = errors[0];
    // Remove the "text-success" class
    textErrorEl.classList.toggle("text-success", false);
    inputEl.classList.add("error");
  } else {
    iconErrorEl.style.display = "none";
    // Set the success message
    textErrorEl.textContent = "Thank you for subscribing to our newsletter.";
    // Add the "text-success" class
    textErrorEl.classList.toggle("text-success", true);
    inputEl.classList.remove("error");
  }
}
