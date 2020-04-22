<template>
  <q-page>
    <q-timeline class="q-pa-xl" :layout="layout">
      <!-- Medium -->
      <q-timeline-entry heading>Medium</q-timeline-entry>

      <q-timeline-entry
        title="EP. 1 - Installation of Godot Engine and configuration of a development environment for C#"
        subtitle="april, 2020"
      >
        <div>
          How to install and configure a development environment for Godot
          Engine and C#
        </div>

        <p class="q-gutter-md q-my-xs">
          <q-btn
            type="a"
            href="https://medium.com/@domresc/ep-1-installation-of-godot-engine-and-configuration-of-a-development-environment-for-c-4c051c209bfb?source=friends_link&sk=6690bec722b4387d247953e32a4a8902"
            target="__blank"
            round
            flat
            dense
            icon="fab fa-medium"
          ></q-btn>
        </p>
      </q-timeline-entry>

      <q-timeline-entry
        title="EP. 0 — Introduction: Why Godot, Why C#"
        subtitle="april, 2020"
      >
        <div>
          Why use Godot as your game engine, and why use C#
        </div>

        <p class="q-gutter-md q-my-xs">
          <q-btn
            type="a"
            href="https://medium.com/@domresc/ep-0-introduction-why-godot-why-c-b129a40362d5?source=friends_link&sk=ce2775ab39ec7907a9f89a55ff3f32d1"
            target="__blank"
            round
            flat
            dense
            icon="fab fa-medium"
          ></q-btn>
        </p>
      </q-timeline-entry>

      <!-- End Medium -->
    </q-timeline>
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
