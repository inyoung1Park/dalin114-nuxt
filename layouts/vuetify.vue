<style>
.container {
  max-width: 100vw;
  padding: 0px;
}

.add_contents {
  position: relative;
  max-width: 100vw;
  padding: 20px 0 10px;
  margin: 0 auto;
  left: 10px;
  margin-bottom: 10px !important;
}

.sub_contents {
  position: relative;
  max-width: 100vw;
  padding: 0 0 10px;
  margin: 0 auto;
  margin-bottom: 10px !important;
}

.app-bar {
  left: 10px;
  position: absolute;
}
.main-banner {
  width: auto;
  height: auto;
  max-width: 10vw;
}

.side-app-bar {
  right: 10px;
  display: inline-block;
}
.main-call {
  width: auto;
  height: auto;
  max-width: 13vw;
}

.main-app {
  width: auto;
  height: auto;
  max-width: 12vw;
}
</style>

<template>
  <v-app dark>
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

    <v-app-bar absolute class="app-bar" flat app>
      <!--<v-app-bar-nav @click.stop="drawer = !drawer"></v-app-bar-nav> -->

      <v-img
        @click.stop="drawer = !drawer"
        class="main-banner"
        :src="require('@/assets/icon/main_icon.png')"
      ></v-img>

      <v-spacer></v-spacer>
      <div class="side-app-bar">
        <v-img
          @click.stop="clipped = !clipped"
          :right="right"
          class="main-call"
          :src="require('@/assets/icon/main_call.png')"
        ></v-img>
      </div>
      <div>
        <v-img
          @click.stop="clipped = !clipped"
          :right="right"
          class="main-app"
          :src="require('@/assets/icon/main_appDown.png')"
        ></v-img>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
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
  //if()
};
</script>
