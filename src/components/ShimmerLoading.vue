<template>
  <div class="shimmer" :style="sizeVars"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShimmerLoading',
  props: {
    height: {
      type: Number,
      required: false,
      default: 30,
    },
    width: {
      type: Number,
      required: false,
      default: 100,
    },
    widthUnit: {
      type: String,
      required: false,
      default: '%',
    },
    borderRadius: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup(props) {
    return {
      sizeVars: {
        '--height': `${props.height}px`,
        '--width': `${props.width}${props.widthUnit}`,
        '--border-radius': `${props.borderRadius}px`,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
/* All credits goes to https://codepen.io/kianlavi/pen/BzbRZw */
.shimmer {
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: block;
  position: relative;
  height: var(--height);
  width: var(--width);
  border-radius: var(--border-radius);

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;

  + .shimmer {
    margin-top: 1rem;
  }
}

@keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
</style>
