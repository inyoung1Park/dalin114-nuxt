<template>
<div>
  <div class="fullpage-container">
  <div class="fullpage-wp" v-fullpage="fullpageOptions" ref="example"  >
   <!-- <div class="page-1 page">-->
     <div id="section1" class="company_box type01 page-1 page" >
      <!-- <p class="part-1" v-animate="{value: 'bounceInLeft'}">111111</p> -->
      <!-- <img src="~assets/1.jpg"/>  -->
    </div>
    <div id="section2" class="company_box type02 page-2 page">
      <p class="part-2" v-animate="{value: 'bounceInRight'}">2222222</p>
    </div>
    <div id="section3" class="company_box type03 page-3 page">
      <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">3-1</p>
      <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">3-2</p>
      <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">3-3</p>
    </div>
  </div>
  <ul id="fullpage-scroll-navigation" class="nav">
    <li>
      <a class="nav_number01">Link to section 1</a>
      </li>
     <li>
       <a class="nav_number02">
        Link to section 2</a>
      </li> 
     <li>
       <a class="nav_number03">Link to section 3</a>
      </li> 
    </ul>
</div>
  <!--
  <button @click="moveNext">next</button> -->
</div>
</template>

<style>
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

#section1 {
  background:url('~assets/1.jpg') no-repeat center / cover;
  max-width: 100%;
  height: auto;
  
}
#nav {position: fixed; width: auto; top: 50%;right: 0; z-index: 9; padding-left: 0px; z-index: 9999;}
ul.nav {position: fixed;  transform: rotate(90deg);font-size: 0; width: 200px; height: 20px !important; z-index: 9; top:calc(50% - 50px); right: 10px;}
ul.nav::before{content: "1";  font-family:'BonGothic-R'; font-size: 16px; color: #8e8e8e; padding: 0 10px;}
ul.nav::after{content: "3";  font-family:'BonGothic-R'; font-size: 16px; color: #8e8e8e; padding: 0 10px;}

ul.nav li{display: inline-block; vertical-align: top;}
ul, ol, li, figure {
    list-style-type: none;
}
ul.nav a {display: inline-block; height: 3px; width: 20px; background:#8e8e8e; transition: all 0.2s ease-out; text-decoration: none;color: black; vertical-align: middle; }

.nav a.active-nav { background: rgba(255,255,255,1); color: #181818;}

.nav li:last-child a.active-nav, .nav li a.nav_number04.active-nav  { background: rgba(0,0,0,1); color: white;}
.nav a.active-nav::after{display: block;}
.nav a::after{ position: absolute; display: none; font-family:'BonGothic-R'; font-size: 14px; color: #f2f2f2;}

.nav_number01::after{content: "first"; width: 300px; top: 0; left: 155px;}
.nav_number02::after{content: "second"; width: 300px; top: 0; left: 155px}
.nav_number03::after{content: "thrid"; width: 300px; top: 0; left: 155px}

/* 스크롤 라인 애니메이션*/
.company_box.active-page.type01 #section1_scroll{opacity: 1;}
#section1_scroll {position:fixed; bottom:0px; left:0; width:100%; text-align: center; z-index: 99;opacity: 0;}
#section1_scroll .line{position:relative; width:2px; height:70px; margin:0 auto; display: inline-block; background-color:#8e8e8e; overflow:hidden;}
#section1_scroll .line:after {content:""; position:absolute; top:-20px; left:0; width:2px; height:20px; background-color:#FFFFFF; animation:scroll-animate 2s infinite;}


/* .nav a:hover { background: rgba(255, 255, 255, 0.7);} */
.nav a:hover { background: rgba(255, 255, 255, 0.7);}

@keyframes scroll-animate {
    0% {top:-16px}
    100% {top:72px;}
}

</style>
<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  layout: "vuetify",
  data: () => ({
    mainStyle: "padding:0px",
    vueName: "app1111",
       fullpageOptions: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (currentSlideEl,currenIndex,nextIndex) {
        },
        afterChange: function (currentSlideEl,currenIndex) {
        }, 
        scrollingSpeed: 1000,
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        navigation: true, 

      }
  }),
  methods: {
    testFunc1() {
      //  console.log("testFunc1");
    },
    testFunc2() {},
    moveNext(){
      this.$refs.example.$fullpage.moveNext(); //Move to the next page
    }
  },
  destroyed() {
    console.log("destroy = " + this.vueName);
  },
  created() {
    console.log("created = " + this.vueName);
  },
  
};
</script>
