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
        <Content></Content>
    </div>
</template>
 
<script>
import Slider from './components/Slider'
import Content from './components/Content'
export default {
    data() {
        return {}
    },
    components: {
        Slider,
        Content
    }
}
</script>