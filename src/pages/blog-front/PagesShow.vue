<template>
    <div class="content">
        <div v-html="html"></div>
    </div>
</template>

<script>
import marked from 'marked'
export default {
    data() {
        return {
            markdown: '```let a = 1;\t let b = 1;\t console.log(a+b)```',
            html: ''
        }
    },
    created() {
        this.html = marked(this.markdown)
    }
}
</script>

<style>

</style>