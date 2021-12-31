<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  methods: {
    ...mapActions({
      clearAlert: "alert/clear",
    }),
  },
  //   watch: {
  //     $route (to, from){
  //         // clear alert on location change
  //         this.clearAlert();
  //     }
  //   }
};
</script>

<style lang="scss"></style>
