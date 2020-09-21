<template>
  <aside>
    <div class="full-time-group">
      <input type="checkbox" id="fulltime" v-model="isFullTime" />
      <label for="fulltime">Full time</label>
    </div>

    <div class="location-group">
      <h3>Location</h3>

      <form class="location-group__form" @submit.prevent="handleAddPlace">
        <i class="material-icons">public</i>
        <input
          type="text"
          placeholder="City, state, zip code or country"
          v-model.trim="newPlace"
        />
        <button type="submit">
          <i class="material-icons">add</i>
        </button>
      </form>

      <div class="location-group__places">
        <div class="place" v-for="place in places" :key="place.id">
          <input
            type="radio"
            name="place"
            :id="place.id"
            :checked="place.selected"
            @change="handlePlaceChange(place.id)"
          />
          <label :for="place.id">{{ place.label }}</label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed, watch,
} from 'vue';
import { useStore } from 'vuex';

import { format } from '../../../utils/format';

interface Place {
  id: string;
  label: string;
  selected: boolean;
}

export default defineComponent({
  name: 'SearchQueries',
  setup() {
    const places = ref<Place[]>([
      {
        id: 'remote',
        label: 'Remote',
        selected: true,
      },
      {
        id: 'london',
        label: 'London',
        selected: false,
      },
      {
        id: 'new-york',
        label: 'New York',
        selected: false,
      },
      {
        id: 'berlin',
        label: 'Berlin',
        selected: false,
      },
    ]);
    const selectedPlace = computed(() => places.value.find((place) => place.selected));
    const isFullTime = ref(true);
    const newPlace = ref('');

    const isFullTimeQuery = computed(() => ({
      name: 'full_time',
      value: isFullTime.value,
    }));
    const locationQuery = computed(() => ({
      name: 'location',
      value: selectedPlace.value?.label,
    }));

    const store = useStore();

    function setPlacesToLocalStorage() {
      localStorage.setItem('@gh-jobs/places', JSON.stringify(places.value));
    }

    (function getPlacesFromLocalStorage() {
      const localStoragePlaces = localStorage.getItem('@gh-jobs/places');

      if (!localStoragePlaces) return;

      const parsedPlaces = JSON.parse(localStoragePlaces);

      places.value = parsedPlaces;
    }());

    function handlePlaceChange(id: string) {
      const updatedPlaces = places.value.map((place) => ({
        ...place,
        selected: place.id === id,
      }));

      places.value = updatedPlaces;
    }

    function handleAddPlace() {
      const doesPlaceAlreadyExists = places.value.find(
        (place) => place.label.toLowerCase() === newPlace.value.toLowerCase()
          || place.id.toLowerCase() === newPlace.value.toLowerCase(),
      );

      if (doesPlaceAlreadyExists || !newPlace.value) return;

      places.value.push({
        id: format.labelToId(newPlace.value),
        label: format.capitalize(newPlace.value),
        selected: false,
      });

      newPlace.value = '';

      setPlacesToLocalStorage();
    }

    function dispatchUpdateQueries() {
      store.dispatch('updateQueries', [isFullTimeQuery.value, locationQuery.value]);
    }

    dispatchUpdateQueries();

    watch(places, () => {
      store.dispatch('updateQuery', locationQuery.value);
    });

    watch(isFullTime, () => {
      store.dispatch('updateQuery', isFullTimeQuery.value);
    });

    return {
      places,
      isFullTime,
      newPlace,
      handlePlaceChange,
      handleAddPlace,
    };
  },
});
</script>

<style lang="scss" scoped>
label {
  font-size: 1.4rem;
  color: $secondary;
  font-weight: $medium;
  font-family: $poppins;
  margin-left: 1.2rem;
  user-select: none;
}

.full-time-group {
  display: flex;
  align-items: center;
}

.location-group {
  margin-top: 3.2rem;

  h3 {
    font-size: 1.4rem;
    font-family: $poppins;
    font-weight: $bold;
    color: $tertiary;
    text-transform: uppercase;
  }

  &__form {
    margin-top: 1.4rem;
    padding: 1.7rem 1.4rem;
    background-color: $inputBg;
    height: 48px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;

    i.material-icons {
      font-size: 15px;
      color: $tertiary;
    }

    input {
      margin: 0 0.8rem;
      border: 0;
      font-size: 1.2rem;
      font-weight: $regular;
      flex: 1;
      color: $github;

      &::placeholder {
        color: $tertiary;
      }
    }

    button {
      height: 30px;
      width: 30px;
      border: 0;
      background-color: $primary;
      color: $inputBg;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      i.material-icons {
        color: inherit;
        font-size: 1.8rem;
      }

      &:hover,
      &:focus {
        background-color: darken($primary, 5%);
      }

      &:active {
        background-color: darken($primary, 10%);
      }
    }
  }

  &__places {
    margin-top: 2.4rem;

    .place {
      display: flex;
      align-items: center;

      + .place {
        margin-top: 1.6rem;
      }
    }
  }
}
</style>
