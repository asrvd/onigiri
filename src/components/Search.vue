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
    <div class="flex flex-row justify-center items-top p-8 pt-0 pl-4 pr-4 lg:pl-8 lg:pr-8 w-full lg:w-5/6 h-2/6 text-black">
        <div class="w-[10%] lg:w-[6%] md:w-[6%] bg-zinc-300 flex flex-col justify-center align-center items-center h-[60%] rounded-tl rounded-bl">
        <SearchIcon @click="search" class="path-white text-black cursor-pointer"/>
        </div>
        <input class="items-center p-4 pl-0 w-[90%] lg:w-[94%] md:w-[94%] h-[60%] bg-stone-300 text-black focus:outline-none outline-none border-none placeholder-black rounded-tr rounded-br font-[500] font-sans text-[1.2rem]" placeholder="search duckduckgo.." v-model="searchterm" @keyup.enter="search" autofocus/>
    </div>
</template>