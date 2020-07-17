<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="fullpageOptions" ref="example">
      <div id="section1" class="page">
        <!-- <p class="part-1" v-animate="{value: 'bounceInLeft'}">111111</p> -->
        <!-- <img src="~assets/1.jpg"/>  -->
        <div class="banner">
          <v-banner v-model="v0" single-line transition="slide-y-transition">
            홈페이지 OPEN EVENT
            <template v-slot:actions="{ dismiss }">
              <v-btn text color="gray" @click="dismiss">안보이기</v-btn>
            </template>
          </v-banner>
        </div>
      </div>

      <div id="section2" class="page">
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
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>

      <div id="section3" class="page">
        <magic-grid id="section3-container">
          <v-layout row>
            <v-card v-for="(card, i) in cards" :key="i" :class="card.title">
              <v-img
                class="white--text align-end"
                gradient=" rgba(0,0,0,.1), rgba(0,0,0,.5)"
                :id="card.title"
                @click="detailShow(card.code)"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
            </v-card>
          </v-layout>
        </magic-grid>

        <v-card id="section3-detail">
          <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item
              v-for="(item, i) in cardDetails"
              :key="i"
              v-if="item.code == codeNum"
              :class="item.title"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </div>
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
  scrollTop: true,
  data: () => ({
    colors: ["white", "white", "white"],
    slides: ["First", "Second", "Third"],
    mainStyle: "padding:0px",
    vueName: "index",
    codeNum: 1,
    fullpageOptions: {
      start: 0,
      duration: 500,
      crollingSpeed: 300,
      anchors: ["firstPage", "secondPage", "thirdPage"],
      navigation: true,
      navigationTooltips: ["first", "second", "thrid"],
      slidesNavigation: true,
      slidesNavPosition: "bottom",
      autoScrolling: true,
      fitToSection: true,
      scrollBar: false,
      loopBottom: true,
      beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
      afterChange: function(currentSlideEl, currenIndex) {}
    },
    v0: true,
    cards: [
      {
        title: "homes",
        flex: 3,
        code: 1
      },

      {
        title: "nature",
        flex: 3,
        code: 2
      },
      {
        title: "tools",
        flex: 3,
        code: 3
      },
      {
        title: "picnic",
        flex: 3,
        code: 4
      }
    ],
    cardDetails: [
      {
        title: "homes-1",
        code: 1
      },
      {
        title: "homes-2",
        code: 1
      },
      {
        title: "homes-3",
        code: 1
      },
      {
        title: "homes-4",
        code: 1
      },
      {
        title: "nature-1",
        code: 2
      },
      {
        title: "nature-2",
        code: 2
      },
      {
        title: "nature-3",
        code: 2
      },
      {
        title: "nature-4",
        code: 2
      },
      {
        title: "tools-1",
        code: 3
      },
      {
        title: "tools-2",
        code: 3
      },
      {
        title: "tools-3",
        code: 3
      },
      {
        title: "tools-4",
        code: 3
      },
      {
        title: "picnic-1",
        code: 4
      },
      {
        title: "picnic-2",
        code: 4
      },
      {
        title: "picnic-3",
        code: 4
      },
      {
        title: "picnic-4",
        code: 4
      }
    ]
  }),
  methods: {
    detailShow(param) {
      this.codeNum = param;
      console.log("codeNum: " + this.codeNum);
    }
    /*moveNext() {
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
    } */
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
  /*background: url("~assets/3.jpg") no-repeat center / cover;*/
  max-width: 100%;
  height: 100%;
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

.banner {
  background-color: bisque;
}

.row--dense > .col,
.row--dense > [class*="col-"] {
  background-color: transparent;
}

@keyframes scroll-animate {
  0% {
    top: -16px;
  }
  100% {
    top: 72px;
  }
}

#homes {
  background: url("~assets/main/homes/1.jpg") no-repeat center / cover;
}
.homes-1 {
  background: url("~assets/main/homes/1-1.jpg") no-repeat center / cover;
}
.homes-2 {
  background: url("~assets/main/homes/1-2.jpg") no-repeat center / cover;
}
.homes-3 {
  background: url("~assets/main/homes/1-3.jpg") no-repeat center / cover;
}
.homes-4 {
  background: url("~assets/main/homes/1-4.jpg") no-repeat center / cover;
}

#nature {
  background: url("~assets/main/nature/1.jpg") no-repeat center / cover;
}

.nature-1 {
  background: url("~assets/main/nature/1-1.jpg") no-repeat center / cover;
}
.nature-2 {
  background: url("~assets/main/nature/1-2.jpg") no-repeat center / cover;
}
.nature-3 {
  background: url("~assets/main/nature/1-3.jpg") no-repeat center / cover;
}
.nature-4 {
  background: url("~assets/main/nature/1-4.jpg") no-repeat center / cover;
}

#picnic {
  background: url("~assets/main/picnic/1.jpg") no-repeat center / cover;
}

.picnic-1 {
  background: url("~assets/main/picnic/1-1.jpg") no-repeat center / cover;
}
.picnic-2 {
  background: url("~assets/main/picnic/1-2.jpg") no-repeat center / cover;
}
.picnic-3 {
  background: url("~assets/main/picnic/1-3.jpg") no-repeat center / cover;
}
.picnic-4 {
  background: url("~assets/main/picnic/1-4.jpg") no-repeat center / cover;
}

#tools {
  background: url("~assets/main/tools/1.jpg") no-repeat center / cover;
}

.tools-1 {
  background: url("~assets/main/tools/1-1.jpg") no-repeat center / cover;
}
.tools-2 {
  background: url("~assets/main/tools/1-2.jpg") no-repeat center / cover;
}
.tools-3 {
  background: url("~assets/main/tools/1-3.jpg") no-repeat center / cover;
}
.tools-4 {
  background: url("~assets/main/tools/1-4.jpg") no-repeat center / cover;
}

#section3-container div {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

#section3-container .homes {
  height: 100px;
  width: 100px;
}
#section3-container .nature {
  height: 100px;
  width: 100px;
}
#section3-container .tools {
  height: 100px;
  width: 100px;
}
#section3-container .picnic {
  height: 100px;
  width: 100px;
}

#section3-detail {
  width: 800px;
  height: auto;
}
</style>
