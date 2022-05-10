<script>
import GetIcon from "../libs/GetIcon";
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    methods: {
        getIcon() {
            return GetIcon(this.icon);
        },
    },
}
</script>

<template>
<div v-html="getIcon()" class="w-[20px] h-[20px]"/>
</template>
