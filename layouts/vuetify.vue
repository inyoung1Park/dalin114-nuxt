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
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!--
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  //if()
};
</script>
