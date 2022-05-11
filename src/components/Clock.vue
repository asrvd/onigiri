<script>
export default {
  data() {
    return {
      interval: null,
      time: null,
      date: null,
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
      this.date = Intl.DateTimeFormat(navigator.language, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format().toLowerCase()
    }, 1000)
  },
}
</script>

<template>
    <div class="flex flex-col justify-center items-bottom p-8 pb-0 bg-gray-transparent w-full h-4/6">
        <h2 class="text-stone-200 text-[6rem] font-[600]">{{ time }}</h2>
        <h2 class="text-stone-300 text-[1.3rem] font-[500]">{{ date }}</h2>
    </div>
</template>
