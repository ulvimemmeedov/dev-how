<template>
  <div class=" topics-div-span row">
    <div class="col-md-1"><span style="color:#fff;">Topics</span></div>
    <div class="topics-div col-md-9">
      <VueSlickCarousel v-bind="settings">
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
        <div class="topics">
          <span class="sliderCatHeading">rasim</span>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Categoru",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    };
  },
};
</script>
<style scoped>

.sliderCatHeading {
  color: #fafafa;
}

.topics:hover {
  border: 2px solid darkgreen;
}

.topics-div-span {
  padding: 5px;
  height: 100%;
  align-items: center;
  background-color: transparent;
}
.topics {
  background-color: transparent;
  border: 2px solid;
  border-radius: 55px;
}
.topics-div {
  margin-left: 25px;
  padding: 10px;
  height: 100%;
  align-items: center;
  background-color: transparent;
}

@media (max-width: 880px) {
  .topics-div {
    margin: 5px;
    padding: 0 55px 0 55px;
    height: 100%;
    align-items: center;
    background-color: transparent;
  }
}
</style>
