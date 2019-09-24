<template>
  <div class="slider">
        <div class='slider-header' :style='sliderHeaderBg'></div>
        <div class="slider-info">
            <div class="slider-img-box">
                <img class="slider-img animated zoomIn" :src="img" alt="">
            </div>
            <div class="slider-describe">
                <h1>{{name}}</h1>
                <p>{{describe}}</p>
                <Input v-model="search"></Input>
                <ul class="tag-list">
                    <li><a href="#/front"><Icon type="md-home" /></a></li>
                    <li><a href=""><Icon type="md-pricetags" /></a></li>
                    <li><a @click='toggleTheme'><Icon type="md-sunny" /></a></li>
                    <li><a href=""><Icon type="md-images" /></a></li>
                    <li><a href=""><Icon type="md-link" /></a></li>
                    <li><a href="https://github.com/ganbowengo" target="_blank"><Icon type="logo-github" /></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
const img = require('@/assets/imgs/header.jpg')
import {mapActions} from 'vuex'
import {randomBgColor} from '@/assets/js/common.js'
export default {
    name:'slider',
    data() {
        return {
            img,
            search:'',
            name:'AnzeCoco',
            describe: '慎始、独行，激荡热血的追梦人'
        }
    },
    computed:{
        sliderHeaderBg(){
            return randomBgColor()
        }
    },
    methods:{
        ...mapActions([
            'theme'
        ]),
        toggleTheme() {
            this.theme(!this.$store.state.theme)
        }
    },
   
}
</script>

<style>

</style>