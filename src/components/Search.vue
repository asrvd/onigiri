<script>
import SearchIcon from "./SearchIcon.vue";
import { config } from "../../config";
export default {
    components: {
        SearchIcon,
    },
    data() {
        return {
            searchterm: '',
            config,
            searchConfig: {
                'duckduckgo': 'https://duckduckgo.com/?q=',
                'google': 'https://google.com/search?q=',
                'bing': 'https://bing.com/search?q=',
                'brave': 'https://search.brave.com/search?q=',
            }
        }
    },
    methods: {
        search() {
            window.location.href = `${this.searchConfig[config.searchEngine]}${this.searchterm}`;
        }
    },
}
</script>

<template>
    <div class="flex flex-row justify-center items-top p-8 pt-0 pl-4 pr-4 lg:pl-8 lg:pr-8 w-full lg:w-5/6 h-1/4 lg:h-2/6 md:h-2/6 bg-transparent">
        <div class="w-[10%] lg:w-[6%] md:w-[6%] flex flex-col justify-center align-center items-center h-[80%] lg:h-[60%] md:h-[60%] rounded-tl rounded-bl" :style="{backgroundColor: config.searchBarColor}">
        <SearchIcon @click="search" class="path-white cursor-pointer" :style="{color: config.searchBarIconColor}"/>
        </div>
        <input class="items-center p-4 pl-0 w-[90%] lg:w-[94%] md:w-[94%] h-[80%] lg:h-[60%] md:h-[60%] focus:outline-none outline-none border-none rounded-tr rounded-br font-[600] font-sans text-[1.2rem]" :placeholder="`search ${config.searchEngine}..`" v-model="searchterm" @keyup.enter="search" autofocus :style="{backgroundColor: config.searchBarColor, color: config.searchBarTextColor}"/>
    </div>
</template>

<style scoped>
input::placeholder {
    color: v-bind('config.searchBarTextColor');
}
</style>