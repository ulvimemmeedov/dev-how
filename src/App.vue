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
import { api } from "./axios";
import { mapState } from "vuex";
import SocketioService from "./socket.js";
import { io } from "socket.io-client";
const socket = io("http://localhost:2000/");

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  computed: {
    ...mapState(["posts"]),
    ...mapState(["user"]),
  },
  mounted() {
    api
      .get(`/api/users/me?token=${localStorage.getItem("token")}`)
      .then((res) => {
        if (res.data.token == undefined) {
          this.$store.commit("token", false);
        }else{
          this.$store.commit("change", res.data.user);
          this.$store.commit("token", true);
        }
      });
    setTimeout(() => {
      api
        .get(`/api/posts/userpost?username=${this.user.username} `)
        .then((res) => {
          this.$store.commit("postchange", res.data.post);

          socket.emit("username", this.user);
        });
    }, 1000);
  }
};
</script>

<style>
body {
  margin-left: 30px;
  background: #fff;
  overflow: auto;
  margin-bottom: 25px;
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  border-radius: 10px;
}

body::-webkit-scrollbar {
  background-color: #030303;
  width: 10px !important;
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  opacity: 0.6 !important;
  border: 1px solid darkgreen;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
}

body::-webkit-scrollbar-thumb:hover {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  /* background-color: darkgreen; */
}
.pr-div {
  height: calc(100vh - (139px + 56px));
}
input {
  border: 2px solid transparent !important;
  background: transparent !important;
  color: #fafafa !important;
  margin: 15px !important;
  border-radius: 20px !important;
}
input:hover {
  border: 2px solid darkgreen !important;
}
input:focus {
  outline: none;
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
* {
  transition: all 0.5s !important;
}
</style>
