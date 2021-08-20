<template>
  <div class="container">
    <div class="row gutters">
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="account-settings">
              <div class="user-profile">
                <div class="user-avatar">
                  <img src="../assets/logo.png" alt="Maxwell Admin" />
                </div>
                <h5 class="user-name">{{this.user.username}}</h5>
                <h6 class="user-email">{{this.user.email}}</h6>
              </div>
              <div class="about">
                <h5 class="mb-2">biography</h5>
                <p>
                  this.user.bio
                  <br>
                  I'm Ulvi. Full Stack Developer I enjoy coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h1 class="mb-3">Personal Details</h1>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="fullName">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fullName"
                    :placeholder="this.user.fullName"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="eMail">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="eMail"
                    :placeholder="this.user.email"
                  />
                </div>
              </div>
              <h1 class="h1">Password</h1>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="password">Old password</label>
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter old password"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="website">New password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="newpassword"
                    placeholder="New password"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="row gutters"></div> -->
            <div class="row gutters btn">
              <div
                class=" btn-update col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
              >
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  class=" btn-settings btn btn-dark btn-lg btn-block"
                >
                  Update
                </button>
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  class=" btn-delete btn btn-danger btn-lg btn-block"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:
  {
    ...mapState(['user'])
  },
  mounted() {
    const elementArr = Array.from(document.getElementsByClassName("navi-item"));
    elementArr.forEach(element=>{
        element.style.display = "none"
    })
  },
};
</script>
<style scoped>
.h1 {
  margin-top: 15px;
}
.btn-settings {
  margin-top: 15px;
  border: 2px solid #000;
  background: transparent;
  border-radius: 25px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  padding-top: 10px;
  margin-right: 55px;
}
.btn-settings:hover {
  color: #5cb85c;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);
}
.btn-delete {
  margin-top: 15px;
  border: 2px solid #000;
  background: transparent;
  border-radius: 25px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  padding-top: 10px;
}
.btn-delete:hover {
  color: #d9534f;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);
}
.container {
  color: #fafafa;
}

.account-settings .user-profile {
  margin: 0 0 1rem 0;
  padding-bottom: 1rem;
  text-align: center;
}
.account-settings .user-profile .user-avatar {
  margin: 0 0 1rem 0;
}
.account-settings .user-profile .user-avatar img {
  width: 90px;
  height: 90px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
}
.account-settings .user-profile h5.user-name {
  margin: 0 0 0.5rem 0;
}
.account-settings .user-profile h6.user-email {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
}
.account-settings .about {
  margin: 1rem 0 0 0;
  font-size: 0.8rem;
  text-align: center;
}
.card {
  background: transparent;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 0;
  margin-bottom: 1rem;
}
.form-control {
  border: 1px solid black;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 0.825rem;
  background: #fafafa;
  color: #000;
}
</style>
