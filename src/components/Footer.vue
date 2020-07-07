<template>
    <div class="footer">
        <p class="time">距离赛博朋克2077发售还有：{{time}}天</p>
        <p class="author">作者：Boyer-wxb</p>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name:'Footer',
        data(){
            return {
                time:moment('20201119','YYYYMMDD').diff(moment(new Date()), 'days')
            }
        },
        beforeCreate(){
            moment.locale('zh-cn')
        },
        created(){
            
        }
    }
</script>

<style lang="scss" scoped>
.footer{
    position: absolute;
    bottom: 0;
    background: #545c64;
    color: #fff;
    width: 100vw;
    height: 50px;
    display: flex;
    .time{
        width: 70vw;
        line-height: 50px;
        overflow: auto;
        white-space: nowrap;
        margin: 0 20px;
    }
    .author{
        line-height: 50px;
        width: 30vw;
        text-align: right;
        overflow: auto;
        white-space: nowrap;
        margin-right: 20px;
    }
} 
</style>