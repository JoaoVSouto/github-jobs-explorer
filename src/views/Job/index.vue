<template>
  <div class="job-container">
    <div class="left-content">
      <RouterLink to="/" class="go-back">
        <i class="material-icons">arrow_right_alt</i>
        Back to search
      </RouterLink>

      <div class="how-to-apply">
        <h5>How to apply</h5>
        <div v-html="job.how_to_apply"></div>
      </div>
    </div>
    <div class="right-content">
      <div class="job-title-type">
        <h2>{{ job.title }}</h2>
        <span>{{ job.type }}</span>
      </div>

      <p class="created-at">
        <i class="material-icons">schedule</i>
        {{ jobParsedCreatedAt }}
      </p>

      <div class="company-info">
        <img
          v-if="job.company_logo"
          :src="job.company_logo"
          :alt="job.company"
          class="company-info__logo"
        />
        <div v-else class="not-found-img">not found</div>

        <div class="company-info__name-place">
          <strong>{{ job.company }}</strong>
          <span>
            <i class="material-icons">public</i>
            {{ job.location }}
          </span>
        </div>
      </div>

      <div class="job-description" v-html="job.description"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import api from '../../services/api';

import { format } from '../../utils/format';

interface GithubJobResponse {
  company: string;
  company_logo?: string;
  created_at: string;
  description: string;
  how_to_apply: string;
  location: string;
  title: string;
  type: string;
}

export default {
  name: 'Job',
  setup() {
    const route = useRoute();
    const { id } = route.params;

    const job = ref<GithubJobResponse>({} as GithubJobResponse);
    const jobParsedCreatedAt = computed(() => format.dateTime(job.value.created_at));

    (async function getJobData() {
      const { data } = await api.get<GithubJobResponse>(`positions/${id}.json`);
      job.value = data;
    }());

    return {
      job,
      jobParsedCreatedAt,
    };
  },
};
</script>

<style lang="scss">
.job-container {
  display: grid;
  gap: 3.6rem;
  margin: 3.2rem 0;

  @include media(">=tablet") {
    grid-template-columns: 230px 1fr;
    gap: 6vw;
  }

  a {
    color: $primary;

    &:hover,
    &:focus {
      color: darken($primary, 5%);
    }

    &:active {
      color: darken($primary, 10%);
    }
  }

  .left-content {
    a.go-back {
      display: flex;
      align-items: center;
      font: $medium 1.4rem $poppins;
      transition: color 0.2s;

      i.material-icons {
        transform: rotate(180deg);
        margin-right: 1.2rem;
      }
    }

    .how-to-apply {
      h5 {
        margin: 3.6rem 0 1.6rem;
        font: $bold 1.4rem $poppins;
        text-transform: uppercase;
        color: $tertiary;
      }

      p {
        font: $medium 1.4rem $poppins;
        color: $secondary;
      }

      a {
        word-break: break-word;
      }
    }
  }

  .right-content {
    .job-title-type {
      display: flex;
      flex-direction: column;

      h2 {
        font: $bold 2.4rem $roboto;
        color: $secondary;
      }

      span {
        align-self: flex-start;
        font: $bold 1.2rem $roboto;
        color: $secondary;
        border: 1px solid $secondary;
        border-radius: 4px;
        padding: 0.6rem 0.8rem;
        margin-top: 0.6rem;
      }

      @include media('>=tablet') {
        align-items: center;
        flex-direction: row;

        span {
          margin-top: 0;
          margin-left: 1.6rem;
        }
      }
    }

    p.created-at {
      display: flex;
      align-items: center;
      font: $medium 1.2rem $roboto;
      margin-top: 1rem;
      color: $tertiary;

      i.material-icons {
        font-size: 1.5rem;
        margin-right: 0.85rem;
      }
    }

    .company-info {
      margin-top: 3.5rem;
      display: flex;
      align-items: center;

      &__logo {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        object-fit: contain;
        display: block;
      }

      .not-found-img {
        height: 60px;
        width: 60px;
        background-color: $notFoundBg;
        border-radius: 4px;
        display: grid;
        place-items: center;
        font-size: 1.2rem;
        font-weight: $medium;
        color: $notFoundColor;
      }

      &__name-place {
        display: flex;
        flex-direction: column;
        margin-left: 1.2rem;

        strong {
          font: $bold 1.8rem $roboto;
          color: $secondary;
        }

        span {
          display: flex;
          align-items: center;
          color: $tertiary;
          font: $medium 1.2rem $roboto;
          margin-top: 1rem;

          i.material-icons {
            margin-right: 0.75rem;
            font-size: 1.5rem;
          }
        }
      }
    }

    .job-description {
      margin-top: 3.2rem;
      font: $regular 1.6rem $roboto;
      color: $secondary;
      line-height: 2.4rem;

      * {
        margin-bottom: 1.6rem;
      }

      li {
        margin-left: 4rem;
      }
    }
  }
}
</style>
