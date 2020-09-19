<template>
  <Header />
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
});
</script>

<style lang="scss">
#app {
  max-width: 1176px;
  padding: 0 12px;
  margin: 12px auto;

  @include media('>=tablet') {
    margin: 32px auto;
  }
}
</style>
