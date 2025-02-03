const form = document.getElementById("form");
const passwordInput = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

function checkPassword(event) {
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        event.preventDefault();
        passwordError.textContent =
            "Password must be at least 8 characters long and include at least one letter and one number.";
        passwordError.className = "error active";
    } else {
        passwordError.textContent = "";
        passwordError.className = "error";
    }
}

export function attachPasswordEventListener() {
    form.addEventListener("submit", checkPassword);
    passwordInput.addEventListener("input", checkPassword);
}

const confirmPassInput = document.getElementById("confirm-password");
const confirmPassError = document.querySelector(
    "#confirm-password + span.error"
);

function checkConfirmPass(event) {
    const passValue = document.getElementById("password").value;
    if (confirmPassInput.value !== passValue) {
        event.preventDefault();
        confirmPassError.textContent = "Passwords do not match";
        confirmPassError.className = "error active";
    } else {
        confirmPassError.textContent = "";
        confirmPassError.className = "error";
    }
}

export function attachConfirmPassEventListener() {
    form.addEventListener("submit", checkConfirmPass);
    confirmPassInput.addEventListener("input", checkConfirmPass);
}
