<template>
  <div>
    <Toolbar></Toolbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import AppFooter from "./AppFooter.vue";

export default {
  components: {
    Toolbar,
    AppFooter
  }
};
</script>
