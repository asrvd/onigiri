<script>
import InfiniteSlide from './components/InfiniteSlide.vue';
import Home from './components/Home.vue';
export default {
  components: {
    InfiniteSlide,
    Home
  },
  data() {
    return {
      ok: 'Hello from parent'
    }
  }
}
</script>

<template>
  <div class="flex flex-row bg-gray-700 w-screen h-screen justify-center align-center">
    <InfiniteSlide />
    <Home :test="ok" />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  color: #2c3e50;
}
</style>
