<template>
  <div class="job-cards-container">
    <JobCard
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

export default defineComponent({
  name: 'JobsList',
  components: {
    JobCard,
  },
  computed: mapState(['jobs']),
});
</script>
