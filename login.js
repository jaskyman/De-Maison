// Toggle password visibility
const togglePassword = document.querySelector(".toggle-password");
const passwordField = document.querySelector("#password");

togglePassword.addEventListener("click", () => {
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  togglePassword.classList.toggle("active");
});
