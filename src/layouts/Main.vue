<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="my-header">
      <q-toolbar>
        <q-toolbar-title class="mainFont">
          c:\domresc\blog>
        </q-toolbar-title>

        <q-tabs v-model="tab" active-color="accent">
          <q-route-tab class="mainFont" name="home" to="/">Home</q-route-tab>
          <q-route-tab class="mainFont" name="blog" to="/blog"
            >Blog</q-route-tab
          >
          <q-route-tab class="mainFont" name="portfolio" to="/portfolio"
            >Portfolio</q-route-tab
          >
        </q-tabs>

        <q-icon class="separator" name="fas fa-grip-lines-vertical"></q-icon>
        <q-btn :icon="icon" @click="darkToggle" flat round dense></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container> <router-view> </router-view></q-page-container>
  </q-layout>
</template>

<script>
export default {
  watch: {},
  methods: {
    darkToggle() {
      this.$data.icon = this.$q.dark.isActive ? "fas fa-sun" : "fas fa-moon";
      this.$q.dark.toggle();
    }
  },
  data() {
    return {
      icon: "fas fa-moon",
      tab: "home"
    };
  }
};
</script>

<style lang="sass" scoped>
.separator
  margin-left: 25px
  margin-right: 25px

.mainFont
  font-weight: 300
  font-size: medium
</style>
