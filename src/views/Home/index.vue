<template>
  <SearchBox />

  <div class="jobs-container">
    <SearchQueries />
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue';
import SearchQueries from './components/SearchQueries.vue';

export default {
  name: 'Home',
  components: {
    SearchBox,
    SearchQueries,
  },
};
</script>

<style lang="scss" scoped>
.jobs-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin: 3rem 0;
  flex: 1;

  @include media('>=tablet') {
    grid-template-columns: 1fr 2fr;
    gap: 3.2rem;
    margin: 4.2rem 0;
  }
}
</style>
