<template>
    <div class="content">
        <ul class="content-list">
            <li v-for="item in list" :key='item'>
                <transition enter-active-class="animated bounceInDown" >
                    <Card v-if="show" :bordered="false">
                        <p slot="title">Borderless card</p>
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
export default {
    name: 'Content',
    data() {
        return {
            list: [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16],
            show: false
        }
    },
    mounted(){
        setTimeout(() => {
            this.show = true
        },1000)
    }
}
</script>

<style>

</style>