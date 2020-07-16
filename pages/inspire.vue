<template>
  <v-layout>
    <v-flex class="text-center">
      <div class="time-line">
        <v-timeline>
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <h2
                :class="`headline font-weight-light mb-4 ${year.color}--text`"
              >
                Lorem ipsum
              </h2>
              <div>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-flex>
    <v-btn
      icon
      @click.stop="fixed = !fixed"
      class="top_btn"
      aria-label="Scroll on top"
    >
      <v-icon>mdi-publish</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  layout: "vuetify",
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2016"
      },
      {
        color: "green",
        year: "2017"
      },
      {
        color: "pink",
        year: "2018"
      },
      {
        color: "amber",
        year: "2019"
      },
      {
        color: "orange",
        year: "2020"
      }
    ]
  })
};
</script>

<style>
.time-line {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
