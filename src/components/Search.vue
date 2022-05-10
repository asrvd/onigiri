<script>
import SearchIcon from "./SearchIcon.vue";
export default {
    components: {
        SearchIcon,
    },
    data() {
        return {
            searchterm: '',
        }
    },
    methods: {
        search() {
            window.location.href = `https://duckduckgo.com/?q=${this.searchterm}`;
        }
    },
}
</script>

<template>
    <div class="flex flex-row justify-center items-top p-8 pt-0 w-5/6 h-2/6">
        <div class="w-[6%] bg-zinc-300 flex flex-col justify-center align-center items-center h-[60%] rounded-tl rounded-bl">
        <SearchIcon @click="search" class="path-white text-black cursor-pointer"/>
        </div>
        <input class="items-center p-4 pl-0 text-purple-300 w-[94%] h-[60%] bg-zinc-300 text-black focus:outline-none outline-none border-none placeholder-black rounded-tr rounded-br" placeholder="search duckduckgo.." v-model="searchterm" @keyup.enter="search"/>
    </div>
</template>