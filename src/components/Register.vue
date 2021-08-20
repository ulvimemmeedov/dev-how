<template>
  <div class="form-div container">
    <div v-if="showSuccess == true" >
      <h4>Check Email</h4>
    </div>
 <div v-if="showSuccess == false">
      <form>
      <div class="form-group">
        <input
          style="height:40px"
          type="text"
          class="form-control"
          id="fullname"
          name="fullname"
          aria-describedby="fullname"
          placeholder="Full Name"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          aria-describedby="Email"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <input
          style="height:40px"
          type="text"
          class="form-control"
          id="username"
          name="username"
          aria-describedby="username"
          placeholder="Username"
        />
      </div>

      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <button type="button" @click="register()" class=" btn-login btn btn-dark btn-lg btn-block">
        Register
      </button>
    </form>
 </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showSuccess:false,
      username:'',
      email:'',
      pass:'',
      fullname:'',
      
    }
  },
  methods:{
    register () {
      this.showSuccess=true
    }
  }
};
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
