<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name: "Main",
  components: {
    NavBar
  }
};
</script>

<style src="./Main.scss" lang="scss">
</style>

