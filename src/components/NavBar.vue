<template>
  <div class="container">

    <nav id="navibar" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div id="navi-item" class=" container-fluid">
        <a class="navbar-brand" href="/">Dev-How</a>
        <button
          id="navbar-mobile-button"
          class="navi-item navbar-toggler btn-nav collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navi-item">---</span>
          <span class="navi-item">---</span>
          <span class="navi-item">---</span>
        </button>
        <div v-if="this.token" class="circleBase profile-div">
          <a href="/profile">
            <img src="../assets/logo.png" alt="profile photo navbar" />
          </a>
        </div>

        <div
          class="navi-item collapse navbar-collapse"
          id="navbarSupportedContent"
        >
        <ul v-if="this.token" class="navi-item navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="searchIcon nav-link" @click="toogleSearch()" href="#"
                ><i id="searchIconToggle" class="fas fa-search"></i> Search</a
              >
            </li>
            <li class="nav-item">
              <a
                class=" notifiIcon nav-link"
                aria-current="page"
                href="/notification"
                ><i class=" far fa-bell"></i> Notification
              </a>
            </li>
            <li class="nav-item">
              <a class="newPostIcon nav-link" href="/newpost">
                <i class="fa fa-plus"></i> New post
              </a>
            </li>
            <li class="nav-item">
              <a class="settingsIcon nav-link" href="/settings">
                <i class="fas fa-sliders-h"></i> Settings</a
              >
            </li>
            <li class="nav-item">
              <a
                title="log out"
                class="settingsIcon nav-link"
                @click="logout()"
                href="#"
              >
                <i class="fas fa-sign-out-alt"></i> {{ this.user.username }}</a
              >
            </li>
          </ul>
          <ul v-else class="navi-item navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="userbtn nav-link" href="/login">Login </a>
            </li>
            <li class="nav-item">
              <a class="userbtn nav-link" href="/register">Register</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>

    <div v-if="showSearch == true">
      <form class="form-inline my-2 my-lg-0">
        <div class="input-group mb-3">
          <input
            type="text"
            class="search-from form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn search-btn" type="button" id="button-addon2">
            <i class=" fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:
  {
    ...mapState(['token']),
    ...mapState(['user'])
  },
  data() {
    return {
      showModal: false,
      showSearch: false,
     
    
    };
  },

  methods: {
    toogleSearch() {
      if (this.showSearch == false) {
        this.showModal = false;
        this.showSearch = true;
        document.getElementById("searchIconToggle").className =
          "searchIconToggle far fa-times-circle";
        document.getElementById("post-section").style.display = "none";
        document.getElementById("navbar-mobile-button").click();
      } else {
        document.getElementById("searchIconToggle").className =
          "searchIconToggle fas fa-search";
        document.getElementById("post-section").style.display = "block";
        document.getElementById("navbar-mobile-button").click();
        this.showSearch = false;
      }
    },
    logout() {
      localStorage.removeItem("token");
      location.reload();
    },
  },
};
</script>
<style scoped>
.search-from {
  margin-top: 5px;
}
.input-group {
  align-items: center !important;
}
.search-btn {
  opacity: 0.4;
  color: #fafafa;
  border: 1px solid #000;
  background: transparent;
  border-radius: 25px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.search-btn:hover {
  opacity: 0.9;
  color: #fafafa;
  border: 1px solid darkgreen;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);
}
.userbtn {
  border: 3px solid black;
  background-color: transparent;
  border-radius: 15px;
  margin-left: 15px !important;
}
.userbtn:hover {
  color: darkgreen !important;
  border: 3px solid darkgreen;
}
.settingsIcon {
  text-decoration: none;
  color: #fafafa;
  border: 1px solid transparent;
  border-radius: 15px;
}
.settingsIcon:hover {
  border: 1px solid darkgreen;
}
.newPostIcon {
  text-decoration: none;
  color: #fafafa;
  border: 1px solid transparent;
  border-radius: 15px;
}
.newPostIcon:hover {
  border: 1px solid darkgreen;
}
.searchIcon {
  text-decoration: none;
  color: #fafafa;
  border: 1px solid transparent;
  border-radius: 15px;
}
.searchIcon:hover {
  border: 1px solid darkgreen !important;
}
.notifiIcon {
  border: 1px solid transparent !important;
  border-radius: 15px;
}
.notifiIcon:hover {
  border: 1px solid darkgreen !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 5px solid transparent;
  border-radius: 15px;
  width: 80%;
}
.modal {
  display: block;
  position: fixed;
  z-index: 9999999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
nav {
  background-image: url("../assets/back.gif");
  background-repeat: no-repeat;
  background-size: cover;
}
.btn-nav {
  margin-left: auto;
}
.circleBase {
  border-radius: 50%;
}
.profile-div {
  width: 40px;
  height: 40px;
  border: 1px solid;
}
.profile-div img {
  position: relative;
  top: 6px;
  width: 30px;
  height: 30px;
}
.navbar-toggler {
  border: none !important;
  display: flex;
  flex-direction: column;
  transform: rotate(90deg);
  padding: 0.25rem;
  width: 28px;
  height: 28px;
  transition: all 0.3s;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: unset !important;
}
.navbar-toggler.collapsed {
  transform: rotate(0);
}
.navbar-toggler span {
  line-height: 2px;
  padding: 2px 0;
  height: 6px;
}
.navbar-brand {
  font-size: 35px;
  font-family: "VT323", monospace;
  order: 1;
}
.navbar-toggler {
  order: 3;
}
.profile-div {
  order: 4;
}
.navbar-collapse {
  order: 2;
}

@media (max-width: 992px) {
  .navbar-brand {
    order: 1;
  }
  .navbar-toggler {
    order: 2;
  }
  .profile-div {
    order: 3;
  }
  .navbar-collapse {
    order: 4;
  }
}
</style>
