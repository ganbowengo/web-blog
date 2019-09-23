<template>
    <div class="content">
        <ul class="content-list">
            <li v-for="item in list" :key='item.id'>
                <Card style='opacity:0' :bordered="false">
                    <p slot="title">Borderless card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
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
export default {
    name: 'Content',
    data() {
        return {
            list: [],
            show: false,
            animatedClasses: '',
            animatedClass: ''
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
        console.log(this.animatedClass)
        this.clientHeight = this.$el.getBoundingClientRect().height
        this.handleScroll()
        this.$el.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(){
            let li = this.$el.querySelectorAll('.content-list li>div')
            Array.prototype.map.call(li, (item) => {
                let top = item.getBoundingClientRect().top
                if(top < (this.clientHeight)){
                    let classes = item.getAttribute('class')
                    item.setAttribute('class', classes + ' '+ this.animatedClass)
                    item.style.opacity = 1
                }
            })
        }
    }
}
</script>

<style>

</style>