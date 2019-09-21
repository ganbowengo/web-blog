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
                    <li><a href=""><Icon type="md-home" /></a></li>
                    <li><a href=""><Icon type="md-pricetags" /></a></li>
                    <li><a href=""><Icon type="md-sunny" /></a></li>
                    <li><a href=""><Icon type="md-images" /></a></li>
                    <li><a href=""><Icon type="md-link" /></a></li>
                    <li><a href=""><Icon type="logo-github" /></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
const img = require('@/assets/imgs/header.jpg')
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
            let r = this.randomInt()
            let g = this.randomInt()
            let b = this.randomInt()
            return {
                background: `rgb(${r},${g},${b})`
            }
        }
    },
    methods:{
        randomInt(){
            return Math.floor(Math.random() * 255)
        }
    }
}
</script>

<style>

</style>