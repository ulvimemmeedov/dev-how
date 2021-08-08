<template>
  <div class="form-div container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="button" class=" btn-login btn btn-dark btn-lg btn-block">
        Login
      </button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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
  margin-top: 15px;
  border: 2px solid #000;
  background: transparent;
  border-radius: 25px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btn-login:hover {
  color: #5cb85c;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);
}

::placeholder {
  color: #000;
}
::-webkit-input-placeholder {
  color: #000;
}
:-moz-placeholder {
  color: #000;
}
::-moz-placeholder {
  color: #000;
}
:-ms-input-placeholder {
  color: #000;
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input:focus {
  border: 2px solid #5cb85c;
}
</style>
