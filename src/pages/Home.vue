<template>
  <q-page>
    <div class="home text-center">
      <p>
        <q-avatar class="avatar shadow-5" default="avatar">
          <img src="~assets/avatar.png" alt="avatar" />
        </q-avatar>
      </p>
      <p class="text-h4 text-weight-thin">
        Domenico Rescigno
      </p>
      <p class="text-subtitle1">
        Software Analyst, Game Designer
      </p>

      <p class="q-gutter-md">
        <q-btn
          type="a"
          href="http://github.com/domresc"
          target="__blank"
          round
          flat
          dense
          icon="fab fa-github"
        ></q-btn>
        <q-btn
          type="a"
          href="https://www.linkedin.com/in/domresc/"
          target="__blank"
          round
          flat
          dense
          icon="fab fa-linkedin-in"
        ></q-btn>
        <q-btn
          type="a"
          href="mailto:domenico.rescigno@gmail.com"
          round
          flat
          dense
          icon="far fa-envelope"
        ></q-btn>
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="sass" scoped>
.avatar
  height: 125px
  width: 125px
  margin-top: 12.5vh

.home
  margin-left: 12.5vw
  margin-right: 12.5vw
</style>
