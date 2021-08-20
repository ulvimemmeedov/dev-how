<template>
  <div id="maindiv" class="form-div container">
    <form v-if="!token">
      <div id="emailbox" class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          @change="emailchange"
          type="email"
          class="form-control"
          id="InputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div id="passbox" class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          @change="passchange"
          type="password"
          class="form-control"
          id="InputPassword1"
          placeholder="Password"
        />
      </div>
      <button
        type="button"
        @click="login"
        class=" btn-login btn btn-dark btn-lg btn-block"
      >
        Login
      </button>
    </form>
  </div>
</template>
<script>
import { api } from "../axios";

export default {
  data() {
    return {
      email: "",
      pass: "",
      message: localStorage.getItem("message"),
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    if (this.token) {
        location.replace("/")
    }
    
  },
  methods: {
    emailchange: function(e) {
      this.email = e.target.value;

      const emailElement = document.getElementById("InputEmail1");

      emailElement.classList = "form-control";
    },
    passchange: function(e) {
      this.pass = e.target.value;

      const passwordElement = document.getElementById("InputPassword1");

      passwordElement.classList = "form-control";
    },
    login: function() {
      if (this.email.length < 1) {
        const emailElement = document.getElementById("InputEmail1");

        emailElement.classList = "red form-control";
      }
      if (this.pass.length < 9) {
        const passwordElement = document.getElementById("InputPassword1");

        passwordElement.classList = "red form-control";
      }
      api
        .post("/api/users/login", {
          password: this.pass,
          email: this.email,
        })
        .then((res) => {
           localStorage.setItem("token", res.data.token);
           localStorage.setItem("message", res.data.message);
           this.$store.commit('change', res.data.user)
            setTimeout(() => {
              location.replace("/")
            }, 3000);
         
        });
    },
  },
};
</script>
<style scoped>
.red {
  border: 1px solid red !important;
}
.form-div {
  color: #fafafa;
  border: 5px solid #000;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  padding: 5%;
  border-radius: 55px;
}
.btn-login {
  opacity: 0.3;
  margin-top: 15px;
  border: 1px solid #000;
  background: transparent;
  border-radius: 25px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btn-login:hover {
  opacity: 0.9;
  color: #fafafa;
  border: 1px solid darkgreen;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);
}
</style>
