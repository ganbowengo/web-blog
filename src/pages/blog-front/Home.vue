/**
 * 
 * @author ganbowen
 * description 前台展示页面首页
 * @created 2019/09/19 10:26:57
 * 
 */
<template>
    <div class="main">
        <Slider></Slider>
        <transition name="zoomIn" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>
 
<script>
import Slider from './components/Slider'
export default {
    data() {
        return {}
    },
    components: {
        Slider
    }
}
</script>