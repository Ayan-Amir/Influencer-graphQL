import { required, confirmed, min, email } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "{field} is required"
});

extend("email", {
  ...email,
  message: "{field} must be a valid email"
});

extend("confirmed", {
  ...confirmed,
  message: "This field confirmation does not match"
});

extend("min", {
  ...length,
  message: "{field} must be at least {min} characters"
});