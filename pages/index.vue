<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="fullpageOptions" ref="example">
      <!-- <div class="page-1 page">-->
      <div id="section1" class="section">
        <!-- <p class="part-1" v-animate="{value: 'bounceInLeft'}">111111</p> -->
        <!-- <img src="~assets/1.jpg"/>  -->
      </div>
      <div id="section2" class="section">
        <v-carousel
          cycle
          height="100%"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(slide, i) in 3" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <div v-if="i == 0" class="slide slide1"></div>
              <div v-if="i == 1" class="slide slide2"></div>
              <div v-if="i == 2" class="slide slide3"></div>
              <!-- <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row> -->
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <!--
        <div v-if="section2PageNum == 0" class="slide slide1"></div>
        <div v-if="section2PageNum == 1" class="slide slide2"></div>
        <div v-if="section2PageNum == 2" class="slide slide3"></div>
        <button class="my-arrow left" @click="movePrev()">
          <svg
            width="60px"
            height="80px"
            viewBox="0 0 50 80"
            xml:space="preserve"
          >
            <polyline
              fill="none"
              stroke="#FFFFFF"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="
                    45.63,75.8 0.375,38.087 45.63,0.375 "
            ></polyline>
          </svg>
        </button>
        <button class="my-arrow right" @click="moveNext()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="60px"
            height="80px"
            viewBox="0 0 50 80"
            xml:space="preserve"
          >
            <polyline
              fill="none"
              stroke="#FFFFFF"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="
                    0.375,0.375 45.63,38.087 0.375,75.8 "
            ></polyline>
          </svg>
        </button>
        -->
      </div>
      <div id="section3" class="section"></div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  layout: "vuetify",
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4"
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    section2PageNum: 0,
    mainStyle: "padding:0px",
    vueName: "index",
    fullpageOptions: {
      start: 0,
      duration: 500,
      crollingSpeed: 500,
      anchors: ["firstPage", "secondPage", "thirdPage"],
      navigation: true,
      navigationTooltips: ["first", "second", "thrid"],
      slidesNavigation: true,
      slidesNavPosition: "bottom",
      autoScrolling: true,
      fitToSection: true,
      scrollBar: false,
      slideSelector: ".slide",
      loopBottom: true,
      beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
      afterChange: function(currentSlideEl, currenIndex) {}
    }
  }),
  methods: {
    moveNext() {
      // this.$refs.example.$fullpage.moveNext(); //Move to the next page
      this.section2PageNum = this.section2PageNum + 1;
      if (this.section2PageNum > 2) {
        this.section2PageNum = 0;
      }
    },
    movePrev() {
      // this.$refs.example.$fullpage.movePrev(); //Move to the next page
      this.section2PageNum = this.section2PageNum - 1;
      if (this.section2PageNum < 0) {
        this.section2PageNum = 2;
      }
    }
  },
  destroyed() {
    console.log("destroy = " + this.vueName);
  },
  created() {
    console.log("created = " + this.vueName);
  }
};
</script>

<style>
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#section1 {
  background: url("~assets/1.jpg") no-repeat center / cover;
  max-width: 100%;
  height: auto;
}

#section2 {
  max-width: 100%;
  height: auto;
}
#section3 {
  background: url("~assets/3.jpg") no-repeat center / cover;
  max-width: 100%;
  height: auto;
}

.slide {
  width: 100%;
  height: 100%;
}

.slide1 {
  background: url("~assets/2-1.jpg") no-repeat center / cover;
  max-width: 100%;
}

.slide2 {
  background: url("~assets/2-2.jpg") no-repeat center / cover;
  max-width: 100%;
}

.slide3 {
  background: url("~assets/2-3.jpg") no-repeat center / cover;
  max-width: 100%;
}

/* 스크롤 라인 애니메이션*/
.company_box.active-page.type01 #section1_scroll {
  opacity: 1;
}
#section1_scroll {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 99;
  opacity: 0;
}
#section1_scroll .line {
  position: relative;
  width: 2px;
  height: 70px;
  margin: 0 auto;
  display: inline-block;
  background-color: #8e8e8e;
  overflow: hidden;
}
#section1_scroll .line:after {
  content: "";
  position: absolute;
  top: -20px;
  left: 0;
  width: 2px;
  height: 20px;
  background-color: #ffffff;
  animation: scroll-animate 2s infinite;
}

/* .nav a:hover { background: rgba(255, 255, 255, 0.7);} */
.nav a:hover {
  background: rgba(255, 255, 255, 0.7);
}

@keyframes scroll-animate {
  0% {
    top: -16px;
  }
  100% {
    top: 72px;
  }
}

/** section 구역  */
.my-arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -45px;
  width: 70px;
  height: 90px;
  z-index: 99;
  -webkit-appearance: none;
  background: 0 0;
  border: 0;
  outline: 0;
}
.my-arrow.left {
  left: 20px;
}
.my-arrow.right {
  right: 20px;
}
.my-arrow svg {
  padding: 5px;
}
button {
  text-rendering: auto;
  color: -internal-light-dark-color(buttontext, rgb(170, 170, 170));
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
  font: 400 13.3333px Arial;
}
</style>
