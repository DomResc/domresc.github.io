<template>
  <q-page>
    <q-timeline class="q-pa-xl" :layout="layout">
      <!-- Software -->
      <q-timeline-entry heading>Software Open-Source</q-timeline-entry>

      <q-timeline-entry title="domresc.github.io" subtitle="april, 2020">
        <div>
          Site developed using the beautiful Quasar framework, based on VueJS.
          If you like it you'll find all the source code and a little guide on
          Github.
        </div>

        <p class="q-gutter-md q-my-xs">
          <q-btn
            type="a"
            href="https://github.com/DomResc/domresc.github.io"
            target="__blank"
            round
            flat
            dense
            icon="fab fa-github"
          ></q-btn>
        </p>
      </q-timeline-entry>

      <q-timeline-entry title="mrRemote for Kodi" subtitle="march, 2016">
        <div>
          mrRemote for Kodi is a Kodi/Xbmc remote control for Windows 10 and
          Windows 10 Mobile. Developed with Visual Studio using C#/Xaml and
          released opensource on Github.
        </div>

        <p class="q-gutter-md q-my-xs">
          <q-btn
            type="a"
            href="https://github.com/DomResc/mrRemoteForKodi"
            target="__blank"
            round
            flat
            dense
            icon="fab fa-github"
          ></q-btn>
          <q-btn
            type="a"
            href="https://www.microsoft.com/it-it/p/mrremote-for-kodi/9nblggh4qvkx?ocid=badge&rtc=1&activetab=pivot:overviewtab"
            target="__blank"
            round
            flat
            dense
            icon="fab fa-microsoft"
          ></q-btn>
        </p>
      </q-timeline-entry>

      <!-- End Software -->
      <!-- Certification -->
      <q-timeline-entry heading>Certification</q-timeline-entry>

      <q-timeline-entry title="Elements of AI" subtitle="February, 2020">
        <div>
          University of Helsinki and Reaktor - 1pw98qdmlgo
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Lead Auditor ISO/IEC 27001"
        subtitle="November, 2018"
      >
        <div>
          BSI - ENR-00585676
        </div>
      </q-timeline-entry>

      <!-- End Certification -->
    </q-timeline>
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
    return {};
  }
};
</script>
