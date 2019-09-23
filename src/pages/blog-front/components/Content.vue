<template>
    <div class="content">
        <ul class="content-list">
            <li v-for="item in list" :key='item.id'>
                <Card style='opacity:0' :bordered="false">
                    <p slot="title">Borderless card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <div class="card-footer">
                        <Tag>HTML</Tag>
                    </div>
                </Card>
            </li>
        </ul>
    </div>
</template>

<script>
const animatedConfig = require('animate.css/animate-config.json')
const animatedClasses = (animatedConfig => {
    let result = []
    for(let groupKey in animatedConfig){
        let group = animatedConfig[groupKey]
        for(let className in group){
            let it = className
            if(it.indexOf('In') > -1){
                result.push(className)
            }
        }
    }
    return result
})(animatedConfig)
import { debounce } from '@/assets/js/common.js'
export default {
    name: 'Content',
    data() {
        return {
            list: [],
            show: false,
            animatedClasses: '',
            animatedClass: '',
            clientTop: 0
        }
    },
    created(){
        this.list = Array.from(Array(15),(item,index) => {
            return {
                id: index,
                show: false
            }
        });
    },
    mounted() {
        let len = animatedClasses.length
        let index = Math.floor(Math.random() * len)
        this.animatedClass = `animated ${animatedClasses[index]}`
        this.clientHeight = document.body.clientHeight
        this.clientTop = this.$el.getBoundingClientRect().top
        this.handleScroll()
        if(this.clientTop) {  // 当前是小屏幕
            document.getElementById('app').addEventListener('scroll', this.events = debounce(this.handleScroll,20))
        } else {
            this.$el.addEventListener('scroll', this.events = debounce(this.handleScroll,10))
        }
    },
    methods:{
        handleScroll(){
            let li = this.$el.querySelectorAll('.content-list li>div')
            Array.prototype.map.call(li, (item) => {
                let top = item.getBoundingClientRect().top
                let classes = item.getAttribute('class')
                if(top < (this.clientHeight) && classes.indexOf('animated') < 0){
                    item.setAttribute('class',classes + ' '+ this.animatedClass)
                    item.style.opacity = 1
                }
            })
            if(li[li.length-1].getAttribute('class').indexOf('animated') > 0){
                if(this.clientTop) {
                    document.body.removeEventListener('scroll', this.events = debounce(this.handleScroll,50))
                } else {
                    this.$el.removeEventListener('scroll', this.events = debounce(this.handleScroll,50))
                }
            }
        }
    }
}
</script>

<style>

</style>