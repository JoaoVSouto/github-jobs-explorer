<template>
  <div class="job-cards-container">
    <Loading v-if="isLoading" />
    <h3 v-else-if="jobs.length === 0" class="jobs-not-found">
      <span class="sad-face">:(</span>
      Ooops... We could not find any jobs.
    </h3>
    <JobCard
      v-else
      v-for="job in jobs"
      :key="job.id"
      :id="job.id"
      :logo="job.logo"
      :company="job.company"
      :position="job.position"
      :type="job.type"
      :location="job.location"
      :createdAt="job.createdAt"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

import JobCard from './JobCard.vue';
import Loading from '../../../components/Loading.vue';

export default defineComponent({
  name: 'JobsList',
  components: {
    JobCard,
    Loading,
  },
  computed: mapState({
    jobs: 'jobs',
    isLoading: 'isJobsLoading',
  }),
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
</style>
