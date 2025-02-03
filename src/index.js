import "./style.css";
import { attachEmailEventListener } from "./form-validation/email-validation";
import { attachCountryEventListener } from "./form-validation/country-validation";
import { attachZipEventListeners } from "./form-validation/zip-validation";

attachEmailEventListener();
attachCountryEventListener();
attachZipEventListeners();
