import "./style.css";
import { attachEmailEventListener } from "./form-validation/email-validation";
import { attachCountryEventListener } from "./form-validation/country-validation";
import { attachZipEventListeners } from "./form-validation/zip-validation";
import {
    attachPasswordEventListener,
    attachConfirmPassEventListener,
} from "./form-validation/password";

attachEmailEventListener();
attachCountryEventListener();
attachZipEventListeners();
attachPasswordEventListener();
attachConfirmPassEventListener();

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    const dialog = document.querySelector(".dialog");
    const passwordMatchError = document.querySelector(
        "#confirm-password + span.error"
    ).textContent;
    const passwordError = document.querySelector(
        "#password + span.error"
    ).textContent;
    const emailError = document.querySelector(
        "#email + span.error"
    ).textContent;
    const zipError = document.querySelector(
        "#zip-code + span.error"
    ).textContent;
    const countryError = document.querySelector(
        "#country + span.error"
    ).textContent;
    if (
        !form.checkValidity() ||
        passwordMatchError ||
        passwordError ||
        emailError ||
        zipError ||
        countryError
    ) {
        event.preventDefault();
    } else {
        dialog.showModal();
    }
});
