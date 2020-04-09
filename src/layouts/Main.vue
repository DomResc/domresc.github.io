<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="my-header">
      <q-toolbar>
        <q-toolbar-title class="text-weight-light">
          c:\domresc\blog>
        </q-toolbar-title>

        <q-btn class="separator xs" flat icon="fas fa-bars">
          <q-menu auto-close>
            <q-list padding>
              <q-item clickable to="/">
                <q-item-section class="text-accent">Home</q-item-section>
              </q-item>
              <q-item clickable to="/blog">
                <q-item-section class="text-accent">Blog</q-item-section>
              </q-item>
              <q-item clickable to="/portfolio">
                <q-item-section class="text-accent">Portfolio</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-tabs v-model="tab" class="gt-xs" active-color="accent">
          <q-route-tab class="text-weight-light" name="home" to="/"
            >Home</q-route-tab
          >
          <q-route-tab class="text-weight-light" name="blog" to="/blog"
            >Blog</q-route-tab
          >
          <q-route-tab
            class="text-weight-light"
            name="portfolio"
            to="/portfolio"
            >Portfolio</q-route-tab
          >
        </q-tabs>

        <q-separator class="separator" vertical />

        <q-btn :icon="icon" @click="darkToggle" flat round size="sm"></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer class="my-header">
      <q-toolbar>
        <q-space></q-space>
        <div>Made with</div>
        <q-icon color="red" name="fas fa-heart" class="q-mx-md"></q-icon>
        <div>in © 2020</div>
        <q-space></q-space>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "Main",
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
  margin: 15px
</style>
