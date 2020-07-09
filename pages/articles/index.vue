<template>
  <div>
    
    <v-content :style="boardStyle">
      <div class="section fp-table active">
        <div class="section"></div>
      </div>

      <div class="alert alert-success" v-if="$route.params.created=='yes'">게시글이 등록되었습니다!</div>
      <div class="alert alert-success" v-if="$route.params.deleted=='yes'">게시글이 삭제되었습니다!</div>

      <div id="add_contents" class="add_contents">
        <nuxt-link to="/articles/add">
          <v-btn depressed style="width:80px;">
            <i class="mdi mdi-emoticon-outline" style="font-size:30px"></i>
            <i class="mdi mdi-grease-pencil" style="font-size:30px"></i>
          </v-btn>
        </nuxt-link>
      </div>

      <div id="sub_contents" class="sub_contents">
        <div class="board_list"></div>

        <section id="list" v-if="articles.length">
          <nuxt-link
            class="list-group-item list-group-item-action"
            :to="'/articles/' + article._id"
            v-for="article in articles"
            :key="article._id"
          >{{ article.title }}</nuxt-link>
        </section>
        <div class="alert alert-info" v-else>게시글이 없습니다.</div>
      </div>
    </v-content>
    <v-btn icon @click.stop="fixed = !fixed" class="top_btn" aria-label="Scroll on top">
      <v-icon>mdi-publish</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { data } = await context.$axios.get("/api/articles");
    return {
      articles: data
    };
  },
  layout: "vuetify",
  data: () => ({
    boardStyle: "padding:0px"
  }),
  destroyed() {},
  created() {}
};
</script>
