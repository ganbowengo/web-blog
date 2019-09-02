<template>
    <div id="app" class="layout">
        <Button @click="login">clickme</Button>
    </div>
</template>
<script>
export default {
    computed:{
    },
    created() {

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