<template>
  <q-page>
    <q-timeline class="q-pa-xl" :layout="layout" v-if="posts.length">
      <q-timeline-entry
        v-for="post in posts"
        :key="post.title"
        :title="post.title"
        :subtitle="post.date"
      >
        <div>{{ post.body }}</div>
      </q-timeline-entry>
    </q-timeline>
    <div v-else class="fixed-center text-center">
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
  name: "Portfolio",
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
      posts: [
        /* 
        {
          title: "",
          date: "",
          body: ""
        } 
        */
      ]
    };
  }
};
</script>
