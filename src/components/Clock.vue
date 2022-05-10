<script>
export default {
  data() {
    return {
      interval: null,
      time: null
    }
  },
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
      }).format().toLowerCase().slice(0, -3)
    }, 1000)
  }
}
</script>

<template>
    <div class="flex flex-col justify-center items-bottom p-8 pb-0 bg-gray-transparent w-full h-4/6">
        <h2 class="text-stone-200 text-[6rem] font-bolder">{{ time }}</h2>
    </div>
</template>
