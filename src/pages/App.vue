<template>
    <div id="app" :class="{'layout': true,'dark': theme}">
        <router-view></router-view>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'theme'
        ])
    },
    methods: {
        login(){
            this.http.post('admin/user/login',{
                username: 'admin',
                password: 'admin'
            }).then(res => {
                console.log('res',res)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .layout,.ivu-layout,.ivu-menu {
        height: 100%;
        overflow: auto;
    }
    .breadcrumb {
        border-bottom: 1px solid #c4cfea;
        padding: 15px 10px;
        background: #fff;
    }
    .content {
        padding: 10px;
        height: 100%;
        background: #fafcff;
    }
</style>