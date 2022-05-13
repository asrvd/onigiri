<script>
import { config } from "../../config"
export default {
  data() {
    return {
      interval: null,
      time: null,
      date: null,
      config: config,
    }
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    console.log(config)
    this.interval = setInterval(() => {
      var date = new Date();
      this.time = date.toLocaleTimeString().replace(/:\d{2}\s/,' ').toLocaleLowerCase();
      this.date = date.toLocaleDateString();
    }, 1000)
  },
}
</script>

<template>
    <div class="flex flex-col justify-center items-bottom p-8 pb-0 bg-gray-transparent w-full h-4/6">
        <h2 class="text-[6rem] font-[600]" :style="{color: config.clockColor}">{{ time }}</h2>
        <h2 class="text-[1.3rem] font-[500]" :style="{color: config.dateColor}">{{ date }}</h2>
    </div>
</template>
