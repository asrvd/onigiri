<script>
import GetIcon from "../libs/GetIcon";
import { config } from "../../config";
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
    data() {
        return {
            config,
        };
    },
}
</script>

<template>
<div v-html="getIcon()" class="w-[20px] h-[20px]" :style="{fill: config.linkButtonIconColor}"/>
</template>
