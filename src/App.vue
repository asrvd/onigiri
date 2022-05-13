<script>
import InfiniteSlide from './components/InfiniteSlide.vue';
import Home from './components/Home.vue';
import { config } from '../config';
export default {
  components: {
    InfiniteSlide,
    Home,
    
  },
  data() {
    return {
      ok: 'Hello from parent',
      config
    }
  }
}
</script>

<template>
  <div class="flex flex-row w-full h-full min-w-screen min-h-screen justify-center align-center" :style="{backgroundColor: config.backgroundColor}">
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
}
</style>
