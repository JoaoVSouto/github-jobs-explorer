<template>
  <div class="loading">
    <img src="~@/assets/github-logo.png" alt="loading">
    <h5>Loading...</h5>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loading',
});
</script>

<style lang="scss" scoped>
.loading {
  display: grid;
  place-items: center;
  gap: 2rem;

  img {
    width: 90px;
    height: 90px;
    opacity: 0.6;
    animation: pulse 1s ease-in-out infinite alternate;
  }

  h5 {
    font: $semi-bold 1.8rem $montserrat;
    color: rgba($color: $github, $alpha: 0.6);
  }
}

@keyframes pulse {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.3);
  }
}
</style>
