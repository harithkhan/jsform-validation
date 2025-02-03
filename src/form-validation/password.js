const form = document.getElementById("form");
const passwordInput = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

function checkPassword(event) {  
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        event.preventDefault();
        passwordError.textContent = "Password must be at least 8 characters long and include at least one letter and one number.";
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