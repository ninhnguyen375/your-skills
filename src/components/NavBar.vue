<template>
  <nav class="nav-bar">
    <ul>
      <li>
        <router-link v-bind:class="path === '/' && 'active'" to="/">Home</router-link>
      </li>
      <li>
        <router-link v-bind:class="path === '/about' && 'active'" to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  watch: {
    $route(to, from) {
      this.path = to.path;
    }
  },
  mounted() {
    this.path = this.$route.path;
  },
  data() {
    return { path: this.$route.path };
  }
};
</script>

<style src="./styles/NavBar.scss" lang="scss">
</style>
