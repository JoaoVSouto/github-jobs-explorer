<template>
  <Header />
  <main id="content">
    <RouterView />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
#app {
  max-width: 1176px; // 1200px - 24px
  padding: 0 12px;
  margin: 12px auto;
  min-height: calc(100vh - 24px); // 100vh - 12px - 12px

  display: flex;
  flex-direction: column;

  @include media('>=tablet') {
    margin: 32px auto;
    min-height: calc(100vh - 64px); // 100vh - 32px - 32px
  }
}

#content {
  flex: 1;
}
</style>
