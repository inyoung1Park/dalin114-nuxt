<template>
  <div class="fullpage-container">
    <div class="button-group">
      <div id="test">
        <v-img
          :src="require('@/assets/icon/main_scroll.png')"
          class="scroll-button"
          @click="moveTo(index)"
        ></v-img>
      </div>
    </div>
    <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <div class="page-1 page">
        <v-navigation-drawer v-model="drawer" temporary absolute app>
          <v-list v-if="!$auth.loggedIn">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list v-if="$auth.loggedIn">
            <v-list-item v-for="(item, i) in userItems" :key="i" :to="item.to" router exact>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar absolute flat>
          <!--<v-app-bar-nav @click.stop="drawer = !drawer"></v-app-bar-nav> -->

          <v-img
            @click.stop="drawer = !drawer"
            class="main-banner"
            :src="require('@/assets/icon/main_icon.png')"
          ></v-img>

          <v-spacer></v-spacer>

          <v-menu
            transition="slide-y-transition"
            v-for="(item, index) in menuLists"
            :key="index"
            offset-y
          >
            <template v-slot:activator="{ attrs, on }">
              <div class="my-2">
                <v-btn
                  tile
                  text
                  v-bind="attrs"
                  v-on="on"
                  @click="detailMenu(item.code)"
                >{{item.title}}</v-btn>
              </div>
            </template>

            <div v-if=" 'intro'== codeTitle">
              <v-list tile>
                <v-list-item
                  v-for="(item, i) in introLists"
                  :key="i"
                  @click="detailMenu(item.code)"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </div>

            <div v-if=" 'alloc'== codeTitle">
              <v-list>
                <v-list-item
                  v-for="(item, i) in allocLists"
                  :key="i"
                  @click="detailMenu(item.code)"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-menu>
        </v-app-bar>

        <div class="page-1-main">
          <div class="page-1-main-left">
            <!--<v-img :src="require('@/assets/main/working/intro-ment.png')" class="intro-ment"></v-img>-->
            <div class="intro-ment">
              <p>
                <strong class="extraB">전국 언제 어디서든,</strong>
              </p>
              <p class="light">간편한 건설기계 매칭 플랫폼</p>
            </div>
            <div class="page-1-main-left-detail">
              <v-img :src="require('@/assets/main/working/icon-call.png')" class="intro-icon"></v-img>
              <p class="light_sub">&nbsp;&nbsp;전화 상담 문의 바로 연결</p>
              <v-img :src="require('@/assets/main/working/icon-app.png')" class="intro-icon"></v-img>
              <p class="light_sub">&nbsp;&nbsp;달인114 앱 다운로드 페이지 이동</p>
              <v-img :src="require('@/assets/main/working/icon-alloc.png')" class="intro-icon"></v-img>
              <p class="light_sub">&nbsp;&nbsp;배차 신청 페이지 이동</p>
            </div>
          </div>
          <div class="page-1-main-right">
            <v-img :src="require('@/assets/main/working/intro-phone.png')" class></v-img>
          </div>
        </div>
      </div>

      <div class="page-2 page">
        <v-navigation-drawer v-model="drawer" temporary absolute app>
          <v-list v-if="!$auth.loggedIn">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list v-if="$auth.loggedIn">
            <v-list-item v-for="(item, i) in userItems" :key="i" :to="item.to" router exact>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar absolute flat>
          <!--<v-app-bar-nav @click.stop="drawer = !drawer"></v-app-bar-nav> -->

          <v-img
            @click="moveToHome()"
            class="side-banner"
            :src="require('@/assets/side/side-menu-home.png')"
          ></v-img>

          <v-spacer></v-spacer>

          <v-img
            @click.stop="drawer = !drawer"
            class="side-banner"
            :src="require('@/assets/side/side-menu-icon.png')"
          ></v-img>
        </v-app-bar>

        <div class="page-2-main">
          <div class="page-2-font">
            <div class="page-2-font-detail">
              <h2 style="color: #4386AF; font-weight: bold;">달인114</h2>
              <h2 style="font-weight: bold;">의 작업사진</h2>
            </div>
            <div class>
              <v-img :src="require('@/assets/side/side-camera.png')" class="page-2-camera"></v-img>
            </div>
          </div>
          <div>
            <h3 style="color: grey; display:flex; padding-left: 10px;">달인114와 함께한 작업현장을 확인해보세요!</h3>
          </div>

          <div class="page-2-grid">
            <div class="grid-item">
              <v-img v-if="isToggle" :src="grid_1" @click="detailShow('grid-1')"></v-img>
            </div>
            <div class="grid-item">
              <v-img :src="require('@/assets/side/grid-2.png')" @click="detailShow('grid-2')"></v-img>
            </div>
            <div class="grid-item-2">
              <v-img :src="require('@/assets/side/grid-3.png')" @click="detailShow('grid-3')"></v-img>
            </div>
            <div class="grid-item-2">
              <v-img :src="require('@/assets/side/grid-4.png')" @click="detailShow('grid-4')"></v-img>
            </div>
          </div>
        </div>

        <div class="page-2-main-grid-detail">
          <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(item, i) in cardList" :class="item.title" :key="i">
              <div :v-if="item.code == cardNum"></div>
            </v-carousel-item>
          </v-carousel>
        </div>
      </div>

      <div class="page-3 page">
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

      <div class="page-4 page">
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
      <div class="page-5 page">
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
      <div class="page-6 page">
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
      <div class="page-4 page">
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
    </div>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css",
      },
    ],
  },
  name: "Fullpage",
  layout: "vuetify",
  data() {
    return {
      codeTitle: "intro",
      index: 1,
      pageNum: 0,
      isToggle: true,
      grid_1: require("@/assets/side/grid-1.png"),
      grid_1_off: require("@/assets/side/grid-1-1.png"),
      cardNum: "grid-1",
      opts: {
        start: 0,
        dir: "v",
        loop: false,
        duration: 300,
        crollingSpeed: 300,
        beforeChange: function (ele, current, next) {},
        afterChange: function (ele, current) {},
      },
      menuLists: [
        /* {
          title: "작업사진",
          code: "working",
        },*/
        {
          title: "소개",
          code: "intro",
        },
        { title: "배차신청", code: "alloc" },
        { title: "매칭게시판", code: "partner" },
      ],
      introLists: [
        {
          title: "서비스 소개",
          code: "intro-1",
        },
        { title: "APP 서비스", code: "intro-2" },
      ],
      allocLists: [
        {
          title: "신청게시판",
          code: "alloc-1",
        },
        { title: "신청하기", code: "alloc-2" },
      ],
      cardList: [
        {
          title: "grid-1-1",
          code: "grid-1",
        },
        {
          title: "grid-1-2",
          code: "grid-1",
        },
      ],
      //여기서부터
      clipped: false,
      drawer: false,
      fixed: false,
      pageNum: 0,
      items: [
        {
          icon: "mdi-apps",
          title: "홈",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "안내",
          to: "/inspire",
        },
        { icon: "mdi-chat-plus-outline", title: "게시판", to: "/articles/" },
        { icon: "mdi-heart-outline", title: "로그인", to: "/user/login" },
        { icon: "mdi-charity", title: "회원가입", to: "/user/register" },
      ],
      userItems: [
        {
          icon: "mdi-apps",
          title: "홈",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "안내",
          to: "/inspire",
        },
        { icon: "mdi-chat-plus-outline", title: "게시판", to: "/articles/" },
        { icon: "mdi-heart-outline", title: "로그아웃", to: "/user/logout" },
        { icon: "mdi-account", title: "내 정보", to: "/user/my-account" },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
  methods: {
    detailMenu(param) {
      this.codeTitle = param;
      if (this.codeTitle == "intro-1") {
        this.$refs.fullpage.$fullpage.moveTo(1, true);
      }
      if (this.codeTitle == "intro-2") {
        this.$refs.fullpage.$fullpage.moveTo(2, true);
      }
      if (this.codeTitle == "alloc-1") {
        this.$refs.fullpage.$fullpage.moveTo(3, true);
      }
      if (this.codeTitle == "alloc-2") {
        this.$refs.fullpage.$fullpage.moveTo(3, true);
      }
      if (this.codeTitle == "partner") {
        this.$refs.fullpage.$fullpage.moveTo(5, true);
      }
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
    moveToHome: function () {
      this.$refs.fullpage.$fullpage.moveTo(0, true);
    },
    detailShow(param) {
      //this.grid_1 = require("@/assets/side/grid-1.png");
      this.cardNum = param;

      console.log("cardNum: " + this.cardNum);
      if (this.cardNum == "grid-1" && this.isToggle == true) {
        // document.getElementById("v-img").src = this.grid_1_off;
        this.grid_1 = this.grid_1_off;
      } else {
        this.grid_1 = this.grid_1;
      }
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
.v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 64px;
  padding: 0px 40px !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: white !important;
}
.v-application p {
  margin-bottom: 0px !important;
}
.page {
  padding: 0 0 0 0;
  display: block;
  text-align: center;
  /*font-size: px;*/
  color: #333333;
}
.page-1 {
  background-color: white;
}
.page-2 {
  /*padding-top: 100px;*/
  background-color: white;
}
.page-3 {
  /*padding-top: 50px;*/
  background: #aabbcc;
}
.page-4 {
  /*padding-top: 50px;*/
  background: yellowgreen;
}
h3,
p strong.extraB {
  font-weight: 800;
  font-size: xx-large;
}
p.light {
  font-weight: 500;
  font-size: x-large;
}

p.light_sub {
  font-weight: 300;
  font-size: smaller;
}
.button-group {
  position: fixed;
  text-align: center;
  left: 42%;
  bottom: 10px;
  z-index: 9;
}

.scroll-button {
  width: 20%;
  height: auto;
  text-align: center;
}
.page-1-main {
  padding-top: 6vw;
  position: inherit;
  max-width: 85vw;
  left: 17%;
  width: auto;
  height: auto;
  display: inline-flex;
  margin-bottom: 10%;
}
.page-1-main-left {
  max-width: 40%;
  padding-top: 5%;
  /*padding-left: 10%;*/
  margin-right: 10% !important;
  text-align: left;
}
.page-1-main-left-detail {
  /*margin-left: 6%;*/
}

.page-1-main-right {
  max-width: 26%;
  height: auto;
}

.intro-ment {
  /*margin-bottom: 5%;*/
}
.intro-icon {
  width: 15vw;
  height: auto;
  margin-top: 15px;
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

.side-banner {
  max-width: 2vw;
  height: auto;
}

.page-2-main {
  padding-top: 10vw;
  position: absolute;
  max-width: 70vw;
  max-height: 100vw;
  left: 10%;
  display: inline;
}

.page-2-main-grid-detail {
  padding-top: 11vw;
  position: inherit;
  max-width: 45vw;
  max-height: auto;
  left: 40vw;
  display: flex;
}
.page-2-camera {
  display: flex;
  max-width: 4vw;
  max-height: auto;
}
.page-2-font {
  display: flex;
  /*padding-top: 13px;
  margin-right: 10px;*/
  padding-left: 10px;
}
.page-2-grid {
  width: 100%;
  height: 100%;
  max-width: 25vw;
  max-height: auto;
}

.page-2-font-detail {
  display: flex;
  padding-top: 15px;
  margin-right: 10px;
}
.grid-item {
  display: inline-block;
  max-width: 12vw;
}

.grid-item-2 {
  display: inline-block;
  max-width: 12vw;
}
.grid-1-1 {
  background: url("~assets/side/grid/1-1.jpg") no-repeat center / cover;
}

.grid-1-2 {
  background: url("~assets/side/grid/1-2.jpg") no-repeat center / cover;
}
</style>
