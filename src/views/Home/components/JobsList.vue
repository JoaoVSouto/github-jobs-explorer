<template>
  <div class="job-cards-container">
    <JobCard
      id="68b39341-da49-433b-9815-4e14b960925e"
      logo="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE9JIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e7e0d3cf39e53fcac111b65ff8812c0dec07559f/Agiloft%20Logo%20plain%20(Indeed).png"
      company="Agiloft"
      position="QA Engineer, Manual Testing"
      type="Full Time"
      location="Moscow, Russia"
      createdAt="Mon Aug 17 18:11:43 UTC 2020"
    />
    <JobCard
      id="61bf5614-6078-4799-bf13-aba59fd01440"
      logo="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2FLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9987d9dbf7cb8a4fc006e213e728ed15cfee5b8f/logo-navy-opt.png"
      company="Clinical Research IO"
      position="Senior Software Engineer (Full Stack)"
      type="Full Time"
      location="USA/ Remote"
      createdAt="Fri Sep 18 18:18:33 UTC 2020"
    />
    <JobCard
      id="e1e83aec-5ea4-4d36-80ed-012fa0083ff8"
      logo="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbm1LIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8c71e4cb600926b667f1b81fc071dff022b0e797/logo2.jpg"
      company="Mastermind"
      position="🌴 Front End developer (Intermediate + Senior positions)
                for live video startup @ Mastermind"
      type="Full Time"
      location="Anywhere on Planet Earth"
      createdAt="Fri Sep 18 13:05:12 UTC 2020"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import JobCard from './JobCard.vue';

export default defineComponent({
  name: 'JobsList',
  components: {
    JobCard,
  },
});
</script>
