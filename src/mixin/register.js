import { mapGetters } from "vuex";
import { MESSAGES } from "@/_helpers/notifications";
import store from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  created() {
    if (!this.isAuthenticated) {
      store.commit("alert/error", MESSAGES.LOGIN);
      this.$router.push("/user/login");
    }
  },
};
