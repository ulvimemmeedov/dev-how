<template>
  <div id="app">
    <div>
      <Navbar />
      <router-view> </router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.pr-div {
  /* for footer */
  height: calc(100vh - (139px + 56px));
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: url("./assets/back.gif");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
