<template>
    <div class="tag" :style="styles"><span class="before"></span><slot>{{content}}</slot></div>
</template>

<script>
import {randomBgColor} from '@/assets/js/common.js'
export default {
    name: 'tag',
    props: {
        content: {
            type: String,
            default: ''
        }
    },
    computed: {
        styles() {
            return randomBgColor()
        }
    },
    mounted() {
        this.$el.querySelector('.before').style.borderRightColor = this.styles.background
    }
}
</script>

<style lang="scss">
</style>