<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import {mapActions } from 'vuex'
export default {
  name: "App",
  components: {
      TheHeader,
  },
  methods: {
    ...mapActions({
        clearAlert: 'alert/clear' 
    })
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
