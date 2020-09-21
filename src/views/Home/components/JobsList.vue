<template>
  <div class="job-cards-container">
    <Loading v-if="isLoading" />
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
