<template>
  <div class="fixed-center text-center">
    <p>
      <q-icon class="icon" name="far fa-frown" size="xl" />
    </p>
    <p class="q-mt-xl text-faded">
      Sorry, nothing here...<strong>(404)</strong>
    </p>
    <q-btn color="accent" style="width: 200px" to="/" label="Go back" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
