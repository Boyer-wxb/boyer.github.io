<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="header-menu"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect">

            <el-menu-item index="/">首页</el-menu-item>

            <el-submenu index="/blog">
                <template slot="title">博客</template>
                <el-menu-item index="/building?type=1">技术</el-menu-item>
                <el-menu-item index="/building?type=2">游戏</el-menu-item>
                <el-menu-item index="/building?type=3">其它</el-menu-item>
            </el-submenu>
            
            <el-menu-item index="/intro">个人介绍</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return {
                activeIndex:'',
            }
        },
        methods:{
            to(name){
                this.$router.push({name:name})
            },
            handleSelect(index, paths){
                this.$router.push({path:index})
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-menu.el-menu--horizontal{
    border-bottom: none;
}
</style>