import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("alert", ["error", "clear"]),
    handleError(e) {
      let error = e.message;
      if (e.networkError) {
        if (e.networkError.result.errors) {
          error = e.networkError.result.errors[0].message;
        }
      } else if (e.graphQLErrors) {
        error = e.graphQLErrors[0].message;
      }
      this.error(error);
    },
  },
};
