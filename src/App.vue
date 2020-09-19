<template>
  <RouterView />

  <div id="hello-world">
    <h1>hello mundo</h1>
  </div>
</template>

<style lang="scss" scoped>
#hello-world {
  color: $primary;

  @include media('>=tablet') {
    background-color: #ff0;
  }
}
</style>
