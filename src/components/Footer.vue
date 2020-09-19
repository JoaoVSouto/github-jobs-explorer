<template>
  <footer>
    <span>
      João Vítor Souto @
      <a
        href="https://devchallenges.io/"
        target="_blank"
        rel="noopener noreferrer"
        >DevChallenges.io</a>
    </span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style lang="scss" scoped>
footer {
  display: grid;
  place-items: center;

  span {
    color: $tertiary;
    font-family: $montserrat;
    font-weight: $semi-bold;
    font-size: 1.4rem;
    text-align: center;

    a {
      color: inherit;
    }
  }
}
</style>
