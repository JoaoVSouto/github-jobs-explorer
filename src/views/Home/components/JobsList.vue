<template>
  <div class="job-cards-container">
    <Loading v-if="isLoading" />
    <h3 v-else-if="jobs.length === 0" class="jobs-not-found">
      <span class="sad-face">:(</span>
      Ooops... We could not find any jobs.
    </h3>
    <template v-else>
      <JobCard
        v-for="job in jobs[0]"
        :key="job.id"
        :id="job.id"
        :logo="job.logo"
        :company="job.company"
        :position="job.position"
        :type="job.type"
        :location="job.location"
        :createdAt="job.createdAt"
      />

      <div class="pagination-container">
        <div class="pagination">
          <button class="page arrow" disabled>
            <i class="material-icons">navigate_before</i>
          </button>
          <button class="page active">1</button>
          <button class="page">2</button>
          <button class="page">3</button>
          <div class="ellipsis">
            <i class="material-icons">more_horiz</i>
          </div>
          <button class="page">10</button>
          <button class="page arrow">
            <i class="material-icons">navigate_next</i>
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapGetters } from 'vuex';

import JobCard from './JobCard.vue';
import Loading from '../../../components/Loading.vue';

export default defineComponent({
  name: 'JobsList',
  components: {
    JobCard,
    Loading,
  },
  computed: {
    ...mapState({
      isLoading: 'isJobsLoading',
    }),
    ...mapGetters({
      jobs: 'jobsSplitted',
    }),
  },
});
</script>

<style lang="scss" scoped>
.jobs-not-found {
  text-align: center;
  font: $semi-bold 1.8rem $montserrat;
  color: $tertiary;

  .sad-face {
    display: block;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
}

.pagination-container {
  margin-top: 3.2rem;

  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .page,
    .ellipsis {
      color: $paginationColor;
    }

    .page + .page,
    .page + .ellipsis,
    .ellipsis + .page {
      margin-left: 1.2rem;
    }

    .ellipsis {
      display: grid;
      place-items: center;
    }

    .page {
      border: 0;
      background-color: transparent;
      height: 3.6rem;
      width: 3.6rem;
      border: 1px solid $paginationColor;
      border-radius: 4px;
      font-size: 1.2rem;
      transition: color 0.2s, border-color 0.2s, background-color 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      i.material-icons {
        font-size: 2rem;
      }

      &.active {
        background-color: $primary;
        border-color: $primary;
        color: $inputBg;
        cursor: not-allowed;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(.active):not(:disabled):hover,
      &:not(.active):not(:disabled):focus {
        border-color: $primary;
        color: $primary;
      }
    }
  }
}
</style>
