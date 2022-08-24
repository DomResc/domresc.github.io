<template>
  <q-layout view="hhh lpR fff">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-light">
          <span> c:\domresc\blog></span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-space />
        <div>Made with</div>
        <q-icon color="red" name="fas fa-heart" class="q-mx-md" />
        <div>and shared on GitHub</div>
        <q-space />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
