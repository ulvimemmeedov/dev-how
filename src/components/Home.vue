<template>
  <div id="post-section" class="home container">
<Category/>
    <div v-if="showPost == false" class="post-section container">
      <!-- posts -->
  <div class="w-33 position-relative">
        <div class="squared pt-100">
          <div class="squared_resize">
            <div class="box">
              <div class="profile-section-img-div">
                <img
                  class="profile-post-img"
                  src="../assets/posts.jpg"
                  alt="profile menu posts"
                />
              </div>
              <div class="profile-section-h1-div">
                <div class="profile-div-section-h1-div-2">
                  <h1 class="">
                    <a class="h122 d-inline-block text-decoration-none" href="/article">dustur</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import Category from './Category.vue'
export default {
  name: "Home",
  components:{
    Category,
  },
  data(){
    return{
      showPost:false
    }
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.profile-post-img {
  width: 100%;
  height: 100%;
}
.post-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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

.h122 {
  color: white;
  display: inline-block;
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
@media (max-width: 880px) {
  
  .w-33{
    width: 90% !important;
    height: 100% !important;
  }

}
</style>
