import { required, confirmed, email } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: `{_field_} is required`,
});

extend("email", {
  ...email,
  message: "{_field_} must be a valid email",
});

extend("confirmed", {
  ...confirmed,
  message: "This field confirmation does not match",
});

extend("min", {
  ...length,
  message: "{_field_} must be at least {_min_} characters",
});
