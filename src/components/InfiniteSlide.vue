<script>
import GetIcon from "../libs/GetIcon"
import applist from '../../applist.json'
import SearchIcon from "./SearchIcon.vue"
import Icon from "./Icon.vue"
import { config } from "../../config"
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
            isOpen: false,
            config
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
        },
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
    },
}
</script>

<template>
    <button :class="isOpen ? 'right-2 md:top-4' : 'left-2 md:left-auto md:right-2 md:top-4'" class="bg-zinc-500 hover:bg-zinc-600 duration-500 border-2 border-zinc-400 text-white shadow-2xl rounded-full text-md p-2 absolute lg:hidden top-4 z-[60] font-[700]" v-on:click="toggleMenu">{{!isOpen ? '🍙' : '❌'}}</button>
    <div :class="isOpen ? 'absolute' : 'hidden'" class="lg:block text-left bg-white/10 h-screen w-screen pl-2 lg:pl-6 lg:pr-6 pr-2 md:w-screen lg:w-1/5 overflow-x-hidden overflow-y-hidden z-50 left-0 backdrop-blur-md md:backdrop-blur-md lg:backdrop-blur-none lg:bg-transparent">
        <div class="mt-4 p-2 h-[5%] min-h-[5%] cursor-pointer w-3/5 rounded drop-shadow-2xl flex flex-row items-center gap-3 font-bolder lg:w-full md:w-2/5" :style="{backgroundColor: config.searchBarColor, color: config.searchBarTextColor}">
            <div class="w-[6%] bg-transparent flex flex-col justify-center align-center items-center h-[100%] rounded-tl rounded-bl">
            <SearchIcon @click="filterlist" class="path-white cursor-pointer" :style="{color: config.searchBarIconColor}"/>
            </div>
            <input class="w-[94%] h-full bg-transparent focus:outline-none outline-none border-none font-[600]" placeholder="search among apps.." v-model="searchterm" @keyup.enter="filterlist" v-on:input="filterlist" :style="{placeholder: config.searchBarTextColor}"/>
        </div>
        <div class="apps block h-[95%] w-3/5 overflow-y-auto lg:w-full md:w-2/5">
            <ul class="text-left text-md mb-8 mt-4 flex flex-col gap-2 cursor-pointer w-full " >
                <li v-for="app in applist" :key="app.name" class="p-2 cursor-pointer hover:drop-shaodw-2xl hover:-translate-y-0.5 duration-500 w-full rounded drop-shadow-md flex flex-row items-center gap-3 font-[600]" v-on:click="handleClick(app)" :style="{backgroundColor: config.linkButtonColor, color: config.linkButtonTextColor}">
                    <Icon :icon="app.icon" />
                    {{ app.name }}
                </li>
            </ul>
        </div>  
    </div>
</template>

<style scoped>
.apps::-webkit-scrollbar {
  display: none;
}
.apps {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
input::placeholder {
    color: v-bind('config.searchBarTextColor');
}
</style>
