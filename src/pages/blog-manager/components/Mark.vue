<template>
   <mavon-editor :ishljs='true' v-model="value"/>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'

Vue.use(mavonEditor)
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style>

</style>