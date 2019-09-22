<template>
    <div class="content">
        <ul class="content-list">
            <li v-for="item in list" :key='item.id'>
                <transition :enter-active-class="animateClass" >
                    <Card v-if='item.show' :bordered="false">
                        <p slot="title">Borderless card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                    </Card>
                </transition>
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
export default {
    name: 'Content',
    data() {
        return {
            list: [],
            show: false,
            index: 0
        }
    },
    computed: {
        animateClass() {
            let len = animatedClasses.length
            let index = Math.floor(Math.random() * len)
            return `animated ${animatedClasses[index]}`
        }
    },
    created(){
        this.list = Array.from(Array(10),(item,index) => {
            return {
                id: index,
                show: false
            }
        });
    },
    mounted() {
        this.clientHeight = this.$el.getBoundingClientRect().height
        this.handleScroll()
        this.$el.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(){
            this.list[this.index++].show = true
        }
    }
}
</script>

<style>

</style>