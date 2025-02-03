import "./style.css";
import { attachEmailEventListener } from "./form-validation/email-validation";
import { attachCountryEventListener } from "./form-validation/country-validation";
import { attachZipEventListeners } from "./form-validation/zip-validation";
import { attachPasswordEventListener, attachConfirmPassEventListener } from "./form-validation/password";

attachEmailEventListener();
attachCountryEventListener();
attachZipEventListeners();
attachPasswordEventListener();
attachConfirmPassEventListener();
