<template>
  <div class="job-cards-container">
    <div class="job-card">
      <div class="job-card__img">
        <img
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="logo"
        />
      </div>

      <div class="job-card__info">
        <strong>Kasisto</strong>
        <p class="job-title">Front-End Software Engineer</p>
        <div class="job-card__info__details">
          <span class="job-type">Full time</span>

          <div class="job-infos-container">
            <span class="job-info">
              <i class="material-icons">public</i>
              New York
            </span>
            <span class="job-info">
              <i class="material-icons">schedule</i>
              5 days ago
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="job-card">
      <div class="job-card__img">
        <div class="not-found-img">not found</div>
      </div>

      <div class="job-card__info">
        <strong>Kasisto</strong>
        <p class="job-title">Front-End Software Engineer</p>
        <div class="job-card__info__details">
          <span class="job-type">Part time</span>

          <div class="job-infos-container">
            <span class="job-info">
              <i class="material-icons">public</i>
              New York
            </span>
            <span class="job-info">
              <i class="material-icons">schedule</i>
              5 days ago
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JobsList',
});
</script>

<style lang="scss" scoped>
.job-card {
  background-color: $inputBg;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1.2rem;
  display: flex;

  + .job-card {
    margin-top: 2.4rem;

    @include media('>=tablet') {
      margin-top: 3.2rem;
    }
  }

  &__img {
    img {
      height: 90px;
      width: 90px;
      object-fit: cover;
      border-radius: 4px;
      display: block;
    }

    .not-found-img {
      height: 90px;
      width: 90px;
      background-color: $notFoundBg;
      border-radius: 4px;
      display: grid;
      place-items: center;
      font-size: 1.2rem;
      font-weight: $medium;
      color: $notFoundColor;
    }
  }

  &__info {
    margin-left: 1.6rem;
    flex: 1;

    strong {
      font-size: 1.2rem;
      font-weight: $bold;
      color: $secondary;
    }

    .job-title {
      font-size: 1.6rem;
      color: $secondary;
      font-weight: $regular;
      margin-top: 0.8rem;

      @include media('>=tablet') {
        font-size: 1.8rem;
      }
    }

    &__details {
      display: flex;
      flex-direction: column;
      margin-top: 1.4rem;

      .job-type {
        font-size: 1.2rem;
        color: $secondary;
        font-weight: $bold;
        padding: 0.6rem 0.8rem;
        border: 1px solid $secondary;
        border-radius: 4px;
        align-self: flex-start;
      }

      .job-infos-container {
        margin-top: 2.7rem;
        display: flex;
        align-items: center;

        .job-info {
          display: flex;
          align-items: center;
          color: $tertiary;
          font-size: 1.2rem;
          font-weight: $medium;

          i.material-icons {
            margin-right: 0.75rem;
            font-size: 1.5rem;
          }

          + .job-info {
            margin-left: 2.85rem;
          }
        }
      }

      @include media('>=tablet') {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1.2rem;

        .job-infos-container {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
