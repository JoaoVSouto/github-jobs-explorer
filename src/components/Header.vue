<template>
  <header>
    <RouterLink to="/">
      <span class="github">Github</span>
      Jobs
    </RouterLink>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style lang="scss" scoped>
a {
  font-family: $poppins;
  font-size: 2.4rem;
  font-weight: $thin;
  color: $github;
  line-height: 1;

  span.github {
    font-weight: $bold;
  }
}
</style>
