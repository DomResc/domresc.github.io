<template>
  <q-page>
    <q-timeline class="q-pa-xl">
      <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
const Meed = require("meed");
const fetch = require("node-fetch");
const feed = new Meed({ fetch });

export default {
  name: "Blog",
  mounted() {
    (async () => {
      const user = await feed.user("mcastimovies");
      console.log(user);
    })();
  },
  data() {
    return {};
  }
};
</script>
