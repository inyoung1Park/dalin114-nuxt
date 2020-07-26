<template>
  <div class="fullpage-container">
    <div class="button-group">
      <!-- <button type="button" :class="{ active: index == 0 }" @click="moveTo(0)">
        first page
      </button>
      <button type="button" :class="{ active: index == 1 }" @click="moveTo(1)">
        Second page
      </button>
      <button type="button" :class="{ active: index == 2 }" @click="moveTo(2)">
        Third page
      </button>
      <button
        type="button"
        v-for="btn in pageNum"
        :key="btn"
        :class="{ active: index == btn + 2 }"
        @click="moveTo(btn + 2)"
      > :class="{ active: index == 0 }"
        page {{ btn + 2 }}
      </button> 
      <button type="button" @click="showPage()">add page</button>-->

      <v-img
        :src="require('@/assets/icon/main_scroll.png')"
        class="scroll-button"
        @click="moveTo(index)"
      ></v-img>
    </div>
    <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <div class="page-1 page">
        <!-- <h1 class="part-1" v-animate="{ value: 'bounceInLeft' }">vue-fullpage.js</h1>
        <h3 class v-animate="{ value: 'bounceInLeft' }">
          A sigle-page scroll plugin based on vue@2.x,support for mobile and PC
          .
        </h3>
        <div>
          <p class="part-1" v-animate="{ value: 'bounceInRight' }">vue-fullpage</p>
        </div>
        <div> 
        open-on-hover</div>-->

        <div class="d-flex justify-end align-end">
          <v-card flat tile style="background: transparent;">
            <v-menu
              transition="scale-transition"
              origin="center center"
              v-for="(list, i) in btns"
              :key="i"
              rounded="0"
              tile
              offset-y
              open-on-hover
              @mouseup="detailMenu(list.title)"
            >
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  text
                  color="grey darken-2"
                  class="white--text ma-8"
                  v-bind="attrs"
                  v-on="on"
                >{{ list.title }}</v-btn>
              </template>
              <!-- -->
              <v-list active-class="pink--text">
                <v-list-item
                  v-for="(detail, i) in menuItems"
                  :key="i"
                  :v-if="codeTitle == detail.title"
                  link
                >
                  <v-list-item-title v-text="detail.title"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card>
        </div>

        <div class="page-1-main">
          <v-img :src="require('@/assets/main/main_center.png')" class="main-center"></v-img>
        </div>
      </div>
      <div class="page-2 page" id="hide-scroll">
        <h2 class="part-2" v-animate="{ value: 'bounceInRight' }">Easy to use plugin</h2>
      </div>
      <div class="page-3 page" id="hide-scroll">
        <h2 class v-animate="{ value: 'bounceInTop' }">Working On Tablets</h2>
        <h3 class v-animate="{ value: 'bounceInBotton' }">
          Designed to fit different screen sizes as well as tablet and mobile
          devices.
        </h3>
        <p class="part-3" v-animate="{ value: 'bounceInLeft', delay: 0 }">vue-fullpage</p>
        <p class="part-3" v-animate="{ value: 'bounceInRight', delay: 300 }">vue-fullpage</p>
        <p class="part-3" v-animate="{ value: 'bounceInDown', delay: 600 }">vue-fullpage</p>
        <p class="part-3" v-animate="{ value: 'zoomInDown', delay: 900 }">vue-fullpage</p>
      </div>
      <div class="page-2 page" v-for="page in pageNum" :key="page">
        <h2 class="part-2" v-animate="{ value: 'bounceInRight' }">page {{ page }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fullpage",
  layout: "vuetify",
  data() {
    return {
      codeTitle: 0,
      index: 1,
      pageNum: 0,
      opts: {
        start: 0,
        dir: "v",
        loop: false,
        duration: 300,
        beforeChange: function (ele, current, next) {
          this.index = next;
        },
        afterChange: function (ele, current) {
          this.index = current;

          var con = document.getElementById("app-bar");
          var mainCon = document.getElementById("fullpage-app");
          if (current == 1 || current == 2) {
            //con.style.display = "none";
            //con.classList.add("inverted-scroll");
          } else {
            //     mainCon.style.padding = "56px 0px 0px 0px";
            // con.style.display = "block";
            //con.classList.add("inverted-scroll");
          }
        },
      },
      btns: [
        {
          title: "작업사진",
          code: 0,
        },
        {
          title: "소개",
          code: 1,
        },
        {
          title: "배차신청",
          code: 2,
        },
        {
          title: "파트너등록",
          code: 3,
        },
        {
          title: "자주묻는질문",
          code: 4,
        },
      ],
      colors: ["deep-purple accent-4", "error", "teal darken-1"],
      // items: [...Array(4)].map((_, i) => `Item ${i}`),
      menuItems: [
        {
          title: "달인114 소개",
          code: 1,
        },
        {
          title: "소비자 서비스",
          code: 1,
        },
        { title: "파트너 서비스", code: 1 },
        { title: "신청게시판", code: 2 },
        { title: "신청하기", code: 2 },
      ],
    };
  },
  methods: {
    detailMenu(param) {
      this.codeTitle = param;
      console.log(this.codeTitle);
      return param;
    },
    moveTo: function (index) {
      this.index++;
      this.$refs.fullpage.$fullpage.moveTo(index, true);
    },
    showPage: function () {
      this.pageNum++;
      this.$refs.fullpage.$fullpage.$update();
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100%;
}
.page {
  padding: 0 0 0 0;
  display: block;
  text-align: center;
  font-size: 26px;
  color: #eee;
}
.page-1 {
  background: #e8e8e8;
}
.page-2 {
  padding-top: 100px;
  background-color: rgb(75, 191, 195);
}
.page-3 {
  padding-top: 50px;
  background: #aabbcc;
}
h3,
p {
  font-size: 16px;
}
.button-group {
  position: absolute;
  text-align: center;
  left: 47%;
  bottom: 10px;
  z-index: 9;
}

.scroll-button {
  width: 10%;
  height: auto;
  text-align: center;
}
.page-1-main {
  padding-top: 10vw;
}
.main-center {
  position: absolute;
  max-width: 55vw;
  left: 20%;
  height: auto;
}

.menu-list {
  float: left;
  width: auto;
}
.v-application .ma-8 {
  margin: 0px !important;
}

.menu-list-detail {
  background: url("~assets/main/main-menu.png") no-repeat center / cover;
}
</style>
