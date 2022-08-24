<template>
  <q-page class="column flex-center">
    <!-- Header  -->
    <div class="col text-center home">
      <p>
        <q-avatar class="avatar shadow-5" default="avatar">
          <img src="~assets/avatar.png" alt="avatar" />
        </q-avatar>
      </p>
      <p class="text-h4 text-weight-thin">Domenico Rescigno</p>
      <p class="text-subtitle1">
        I'm a software engineer based in Italy. I love writing and sharing code
      </p>

      <p>
        <q-btn
          type="a"
          href="http://github.com/domresc"
          target="__blank"
          round
          flat
          dense
          icon="fab fa-github"
        />
        <q-btn
          type="a"
          href="https://www.youtube.com/c/DomenicoRescigno"
          target="__blank"
          round
          flat
          dense
          icon="fab fa-youtube"
        />
        <q-btn
          type="a"
          href="https://domresc.medium.com"
          target="__blank"
          round
          flat
          dense
          icon="fab fa-medium"
        />
        <q-btn
          type="a"
          href="https://www.linkedin.com/in/domresc/"
          target="__blank"
          round
          flat
          dense
          icon="fab fa-linkedin"
        />
        <q-btn
          type="a"
          href="mailto:domenico.rescigno@gmail.com"
          round
          flat
          dense
          icon="fas fa-envelope"
        />
      </p>
    </div>

    <div class="col row">
      <!-- Blog/Media post-->
      <div class="col-xs-12 col-md-6 q-pa-xl">
        <p class="text-h3 text-center">Posts</p>
        <q-timeline :layout="layout" color="dark">
          <q-timeline-entry
            v-for="(post, index) in paginatedPosts"
            :key="index"
            :title="post.title"
            :subtitle="post.date"
          >
            <q-btn
              :href="post.link"
              target="__blank"
              round
              flat
              dense
              :icon="post.icon"
            />
          </q-timeline-entry>
        </q-timeline>
        <div class="flex flex-center">
          <q-pagination
            color="dark"
            v-model="paginationPosts.page"
            :min="paginationPosts.currentPage"
            :max="Math.ceil(posts.length / paginationPosts.totalPages)"
          />
        </div>
      </div>

      <!-- Projects -->
      <div class="col-xs-12 col-md-6 q-pa-xl">
        <p class="text-h3 text-center">Projects</p>
        <q-list>
          <q-item
            v-for="(project, index) in paginatedProjects"
            :key="index"
            :href="project.link"
            target="__blank"
            style="margin-bottom: 50px"
          >
            <q-item-section avatar>
              <q-icon :name="project.icon" color="white" size="34px" />
            </q-item-section>

            <q-item-section>
              <q-item-label caption class="text-bold text-uppercase">
                {{ project.date }}
              </q-item-label>
              <q-item-label class="text-bold text-h5">
                {{ project.title }}
              </q-item-label>
              <q-item-label caption class="text-grey-6">{{
                project.description
              }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="flex flex-center">
          <q-pagination
            color="dark"
            v-model="paginationProjects.page"
            :min="paginationProjects.currentPage"
            :max="Math.ceil(projects.length / paginationProjects.totalPages)"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useQuasar } from "quasar";

import posts from "../content/posts.json";
import projects from "../content/projects.json";

const $q = useQuasar();
const postsJson = reactive(posts);
const projectsJson = reactive(projects);

const paginationPosts = reactive({
  page: 1,
  currentPage: 1,
  nextPage: null,
  totalPages: 3,
});

const paginationProjects = reactive({
  page: 1,
  currentPage: 1,
  nextPage: null,
  totalPages: 3,
});

const paginatedPosts = computed(() => {
  return postsJson.slice(
    (paginationPosts.page - 1) * paginationPosts.totalPages,
    (paginationPosts.page - 1) * paginationPosts.totalPages +
      paginationPosts.totalPages
  );
});

const paginatedProjects = computed(() => {
  return projectsJson.slice(
    (paginationProjects.page - 1) * paginationProjects.totalPages,
    (paginationProjects.page - 1) * paginationProjects.totalPages +
      paginationProjects.totalPages
  );
});

const layout = computed(() => {
  return $q.screen.lt.md ? "dense" : "comfortable";
});
</script>

<style lang="sass" scoped>
.avatar
  height: 125px
  width: 125px

.home
  margin-left: 12.5vw
  margin-right: 12.5vw
  margin-top: 5vw
</style>
