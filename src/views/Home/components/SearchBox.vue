<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <i class="material-icons" :class="{ filled: searchTerm }">work_outline</i>
      <span class="input-placeholder">
        Title, companies, expertise or benefits
        <input type="text" v-model.trim="searchTerm" :class="{ filled: searchTerm }">
      </span>
      <button type="submit">Search</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SearchBox',
  setup() {
    const searchTerm = ref('');
    const store = useStore();

    function handleSubmit() {
      if (!searchTerm.value) return;

      searchTerm.value = '';

      store.dispatch('updateQuery', {
        query: {
          name: 'description',
          value: searchTerm.value,
        },
      });
    }

    return {
      searchTerm,
      handleSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
form {
  margin-top: 3.2rem;
  height: 138px;
  border-radius: 8px;

  background-image: url('~@/assets/search-box-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  .input-group {
    flex: 1;
    background-color: $inputBg;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 4px;
    max-width: 790px;
    margin: 0 18px;

    span.input-placeholder {
      position: relative;
      flex: 2;
      margin-right: 2.4rem;
      color: $tertiary;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1.2rem;
      font-weight: $regular;

      @include media('>=tablet') {
        font-size: 1.6rem;
      }
    }

    input {
      font-size: inherit;
      font-weight: inherit;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      background-color: transparent;
      border: 0;
      color: $github;
      width: 100%;

      &:focus,
      &.filled {
        background-color: $inputBg;
      }
    }

    button {
      flex: 1;
      height: 47px;
      max-width: 146px;
      font-weight: $medium;
      font-size: 1.6rem;
      border: 0;
      color: $inputBg;
      background-color: $primary;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover,
      &:focus {
        background-color: darken($primary, 5%);
      }

      &:active {
        background-color: darken($primary, 10%);
      }
    }

    .material-icons {
      color: $tertiary;
      transition: color 0.2s;
      font-size: 2rem;
      margin-left: 1.3rem;
      margin-right: 0.95rem;

      &.filled {
        color: $github;
      }
    }
  }
}
</style>
