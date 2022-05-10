<script>
import GetIcon from "../libs/GetIcon"
import applist from "../applist.json"
import SearchIcon from "./SearchIcon.vue"
import Icon from "./Icon.vue"
export default {
    components: {
        Icon,
        SearchIcon,
    },
    data() {
        return {
            applist,
            unchangedapplist: applist,
            searchterm: "",
        }
    },
    methods: {
        filterlist() {
            this.applist = this.unchangedapplist.filter(app => {
                return app.name.toLowerCase().includes(this.searchterm.toLowerCase())
            })
        },
        handleClick(app) {
            window.open(app.link, "_blank")
        }
    }
}
</script>

<template>
    <div class="block text-left bg-black h-screen w-3/6 pl-6 pr-6 md:w-2/6 lg:w-1/5 overflow-x-hidden overflow-y-hidden">
        <div class="mt-4 p-2 h-[5%] min-h-[5%] cursor-pointer w-full bg-zinc-300 rounded drop-shadow-2xl flex flex-row items-center gap-3 text-black font-bolder">
            <div class="w-[6%] bg-zinc-300 flex flex-col justify-center align-center items-center h-[100%] rounded-tl rounded-bl">
            <SearchIcon @click="filterlist" class="path-white text-black cursor-pointer"/>
            </div>
            <input class="w-[94%] h-full bg-transparent focus:outline-none outline-none border-none placeholder-black" placeholder="search among apps.." v-model="searchterm" @keyup.enter="filterlist" v-on:input="filterlist"/>
        </div>
        <div class="apps block h-[95%] w-full overflow-y-auto">
            <ul class="text-left text-md text-gray-300 mb-8 mt-4 flex flex-col gap-2 cursor-pointer w-full " >
                <li v-for="app in applist" :key="app.name" class="p-2 cursor-pointer hover:drop-shaodw-2xl hover:-translate-y-0.5 duration-500 w-full bg-stone-200 rounded drop-shadow-md flex flex-row items-center gap-3 text-black font-bolder" v-on:click="handleClick(app)">
                    <Icon :icon="app.icon" />
                    {{ app.name }}
                </li>
            </ul>
        </div>  
    </div>
</template>

<style>
.apps::-webkit-scrollbar {
  display: none;
}
.apps {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
