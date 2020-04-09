<template>
  <q-page>
    <div class="fixed-center text-center">
      <p>
        <q-icon class="icon" name="fab fa-pied-piper-alt" size="xl"></q-icon>
      </p>
      <p class="q-mt-xl text-faded">
        Sorry, nothing here... for the time being
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Blog",
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    }
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>
