<template>
  <div class="job-cards-container">
    <Loading v-if="isLoading" />
    <h3 v-else-if="jobs.length === 0" class="jobs-not-found">
      <span class="sad-face">:(</span>
      Ooops... We could not find any jobs.
    </h3>
    <template v-else>
      <JobCard
        v-for="job in jobs[currentPage]"
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
          <button
            class="page arrow"
            :disabled="currentPage === 0"
            @click="prevPage"
          >
            <i class="material-icons">navigate_before</i>
          </button>
          <template v-if="pagesQuantity <= 5">
            <button
              class="page"
              v-for="pageNumber in pagesQuantity"
              :class="{ active: currentPage + 1 === pageNumber }"
              :key="pageNumber"
              @click="setPage(pageNumber - 1)"
            >
              {{ pageNumber }}
            </button>
          </template>
          <template v-else>
            <button
              class="page"
              :class="{ active: currentPage + 1 === 1 }"
              @click="setPage(0)"
            >
              1
            </button>
            <div class="ellipsis" v-if="!isOnFirstThreePages">
              <i class="material-icons">more_horiz</i>
            </div>
            <template v-else>
              <button
                class="page"
                v-for="pageNumber in firstBlock"
                :class="{ active: currentPage + 1 === pageNumber }"
                :key="pageNumber"
                @click="setPage(pageNumber - 1)"
              >
                {{ pageNumber }}
              </button>
            </template>
            <button
              v-if="!isOnFirstThreePages && !isOnLastThreePages"
              class="page active"
            >
              {{ currentPage + 1 }}
            </button>
            <div class="ellipsis" v-if="!isOnLastThreePages">
              <i class="material-icons">more_horiz</i>
            </div>
            <template v-else>
              <button
                class="page"
                v-for="pageNumber in lastBlock"
                :class="{ active: currentPage + 1 === pageNumber }"
                :key="pageNumber"
                @click="setPage(pageNumber - 1)"
              >
                {{ pageNumber }}
              </button>
            </template>
            <button
              class="page"
              :class="{ active: currentPage + 1 === pagesQuantity }"
              @click="setPage(pagesQuantity - 1)"
            >
              {{ pagesQuantity }}
            </button>
          </template>
          <button
            class="page arrow"
            :disabled="currentPage === pagesQuantity - 1"
            @click="nextPage"
          >
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
  data: () => ({
    currentPage: 0,
  }),
  methods: {
    setPage(page: number) {
      this.currentPage = page;
    },
    prevPage() {
      this.currentPage -= 1;
    },
    nextPage() {
      this.currentPage += 1;
    },
  },
  computed: {
    ...mapState({
      isLoading: 'isJobsLoading',
    }),
    ...mapGetters({
      jobs: 'jobsSplitted',
      pagesQuantity: 'pagesQuantity',
    }),
    firstBlock() {
      return [2, 3];
    },
    lastBlock() {
      const pagesQuantity = this.pagesQuantity as number;

      return [pagesQuantity - 2, pagesQuantity - 1];
    },
    isOnFirstThreePages(): boolean {
      return this.currentPage < 3;
    },
    isOnLastThreePages(): boolean {
      return this.currentPage >= this.pagesQuantity - 3;
    },
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
    justify-content: center;

    @include media('>=tablet') {
      justify-content: flex-end;
    }

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
