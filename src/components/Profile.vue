<template>
  <div id="post-section" class="container">
    <!-- main -->
    <div v-if="this.token == true" id="main" class="main">
      <div class="profile-header">
        <div class="profile-photo">
          <div class="circleBase profile-div">
            <img
              class="profile-div-img"
              src="../assets/logo.png"
              alt="profile photo"
            />
          </div>
          <h1 class="username">{{ user.username }}</h1>
        </div>
      </div>
      <div class="container d-flex justify-content-around">
        <div class="profile-des-section">
          <span
            ><span class="profile-des-section-span-no-click"
              >{{ user.posts }} posts</span
            >
          </span>
          <a class="text-decoration-none"
            ><span class="profile-des-section-span" @click="showList = true"
              >{{ user.followers }} followers</span
            >
          </a>

          <a class=" text-decoration-none"
            ><span class="profile-des-section-span" @click="showList = true"
              >{{ user.following }} following</span
            >
          </a>
        </div>
      </div>
      <Lists v-if="showList == true" />
      <div class="container justify-content-around d-flex">
        <div class="bio-section">
          <p class="bio-section-p">
            {{ user.bio }}
          </p>
        </div>
      </div>
    </div>
    <div class="post-section container">
      <!-- posts -->
      <div v-for="post of this.posts" :key="post.id" class="w-33 position-relative">
        <div class="squared pt-100">
          <div class="squared_resize">
            <div class="box">
              <div class="profile-section-img-div">
                <img
                  class="profile-post-img"
                  :src="post.img"
                  :alt="post.title"
                />
              </div>
              <div class="profile-section-h1-div">
                <div class="profile-div-section-h1-div-2">
                  <h1 class="">
                    <a
                      class="h122 d-inline-block text-decoration-none"
                      href="/article"
                      >{{ post.title }}</a
                    >
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="log" v-if="this.token == false" >
      <h1><a class="a" href="/login">Go login</a></h1>
    </div>
  </div>
</template>
<script>
import Lists from "./Lists.vue";
import { mapState } from "vuex";

export default {
  computed: {
        ...mapState(["token"]),
    ...mapState(["user"]),
    ...mapState(["posts"]),
  },
  components: {
    Lists,
  },
  data() {
    return {
      showList: false,
      
    };
  }
};
</script>
<style scoped>
.log{
  margin-top:50%;
}
.a{
  text-decoration: none;
  color: #fafafa;
}
@media (max-width: 880px) {
  .profile-des-section {
    margin: 0 !important;
    padding: 10px !important;
  }
  .profile-des-section-span-no-click {
    font-size: 15px !important;
    margin: 3px !important;
  }
  .profile-des-section-span {
    font-size: 15px !important;
    margin: 3px !important;
  }
  .bio-section-p {
    font-size: 15px !important;
  }
  .w-33 {
    width: 100% !important;
    height: 100% !important;
  }
  .profile-div {
    margin: 0 !important;
    width: 100px !important;
    height: 100px !important;
  }
  .profile-div-img {
    top: 20% !important;
    width: 80px !important;
    height: 80px !important;
  }
}
.profile-des-section-span-no-click:hover {
  color: darkgreen;
}
.profile-des-section-span:hover {
  color: darkgreen;
}
.w-33:hover {
  width: calc(calc(100% / 2) - 30px);
  margin: 15px;
  border: 1px solid darkgreen;
  border-radius: 30px;
}
.h122 {
  margin-top: 1%;
  color: white;
  display: inline-block;
}
.h122:hover {
  color: darkgreen;
}
.profile-post-img {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  z-index: 3;
}
.w-33 {
  width: calc(calc(100% / 2) - 30px);
  margin: 15px;
  border: 5px solid transparent;
  border-radius: 30px;
}

.squared {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.squared_resize {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.pt-100 {
  padding-top: 100%;
}
.profile-section-img-div {
  position: absolute;
  width: 100%;
  height: 100%;
}
.profile-div-section-h1-div-2 {
  background: #030303;
  padding: 5px;
  border: 3px solid transparent;
  width: 100%;
  background-image: url("../assets/back.gif");
}
.profile-section-h1-div {
  position: relative;
  z-index: 9994;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
.profile-des-section {
  border-radius: 55px;
  margin: 15px;
  width: max-content;
  height: max-content;
  border: 2px solid #41b883;
  padding: 20px;
  background-color: transparent;
}
.profile-des-section span {
  margin: 10px;
  color: #fafafa;
}
.username {
  color: #fafafa;
}

.circleBase {
  border-radius: 50%;
}
.profile-div {
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 1px solid;
}
.profile-div img {
  position: relative;
  top: 30px;
  width: 110px;
  height: 110px;
}
.profile-photo {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-photo div {
  margin-top: 20px;
}
.profile-photo h1 {
  margin-top: 10px;
}
.post-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.bio-section {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.bio-section p {
  color: #fafafa;
  font-size: 100%;
}
</style>
