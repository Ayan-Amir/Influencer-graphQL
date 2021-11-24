import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";
import Vue from "vue";

import { ValidationObserver, ValidationProvider,extend} from "vee-validate";
import * as rules from "vee-validate/dist/rules"


Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

extend('min', value => {
  return value.length >= 3;
  }
);


const requireComponent = require.context(
  "./base",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
