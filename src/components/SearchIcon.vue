<script>
import { config } from "../../config"
export default {
    data() {
        return {
            config,
        };
    },
}
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :stroke="config.searchBarIconColor" viewBox="0 0 24 24" fill="none" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
</template>