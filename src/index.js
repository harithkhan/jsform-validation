import "./style.css";
import { attachEmailEventListener } from "./form-validation/email-validation";
import { attachCountryEventListener } from "./form-validation/country-validation";

attachEmailEventListener();
attachCountryEventListener();
