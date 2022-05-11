<script>
import Clock from "./Clock.vue"
import Search from "./Search.vue"
import Footer from "./Footer.vue"
export default {
    components: {
        Clock,
        Search,
        Footer,
    },
    props: {
        test: {
            type: String,
            required: true,
        },
    }
}
</script>

<template>
    <div class="z-10 relative justify-center items-left p-0 pl-0 lg:p-4 lg:pl-0 md:p-4 gap-2 lg:gap-4 md:gap-2 bg-black h-screen w-full lg:w-4/5 md:w-full flex flex-row">
        <div class="flex flex-col w-1/4 h-full bg-gray-400 rounded hidden md:flex lg:flex">
            <img src="https://i.pinimg.com/564x/c1/1d/04/c11d04e2ca9a9d4879b13581fa83132e.jpg" class="w-full h-full object-cover rounded" />
        </div>
        <div class="relative flex flex-col w-full lg:w-3/4 gap-3 h-full justify-start items-center">
            <div class="flex w-full h-1/2 flex-col justify-center items-center">
                <Clock />
                <Search />
            </div>
            <div class="flex w-full lg:w-5/6 md:w-full h-1/3 justify-center items-center pl-4 pr-4 lg:pl-8 lg:pr-8">
                <img src="https://i.pinimg.com/564x/00/13/1b/00131bdd0049dbe2cb362ae05bc2a351.jpg" class="rounded shadow-xl object-cover w-full h-full"/>
            </div>
            <Footer/>
        </div>
    </div>
</template>
