<template>
  <h1>Job page! id: {{ id }}</h1>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Job',
  setup() {
    const route = useRoute();
    const { id } = route.params;

    return {
      id,
    };
  },
};
</script>

<style lang="scss" scoped></style>
