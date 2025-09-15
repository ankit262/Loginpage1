const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function toggleForm() {
  loginForm.classList.toggle("active");
  signupForm.classList.toggle("active");
}

// Demo submit
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Form submitted successfully!");
  });
});
