<script>
import { config } from "../../config"
export default {
    data() {
        return {
            config,
        }
    },
}
</script>

<template>
    <div class="bottom-0 w-5/6 p-4 right-0 lg:pr-8 lg:pb-0 md:p-4 md:pb-0 md:right-0 lg:right-auto text-right" :class="config.showFooter ? 'absolute' : 'hidden'" :style="{color: config.footerTextColor}">
        <h2>🍙 onigiri by <a href="https://github.com/asheeeshh" class="font-[500] underline decoration-dotted">ashish.</a></h2>
    </div>
</template>