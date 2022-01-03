import { required, confirmed, email ,field } from "vee-validate/dist/rules";
import { extend  , name} from "vee-validate";

extend("required", {
  ...required,
  message: `${field} is required`,
});

extend("email", {
  ...email,
  message: "{field} must be a valid email",
});

extend("confirmed", {
  ...confirmed,
  message: "This field confirmation does not match",
});

extend("min", {
  ...length,
  message: "{field} must be at least {min} characters",
});
