<template>
    <div id="love">
        <div class="head">
            <div class="imgs">
                <img src="@/assets/img/b.jpg" alt="">
                <div class="heart">♥</div>
                <img src="@/assets/img/l.jpg" alt="">
            </div>
            <div class="days">
                <span>我们在一起已经<span>{{days}}</span>天</span>
            </div>
            <div class="days-from">
                <span>起始日：2017.3.21 周二</span>
            </div>
        </div>
        <div class="list">
            <div class="list-item" v-for="(item,index) in anu" :key="'a-'+index">
                <div class="left">
                    <div class="title">{{item.title}}</div>
                    <div class="date">{{item.date}}</div>
                </div>
                <div class="right">
                    <span class="days">{{item.days}}</span>
                    天
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'Love',
        data(){
            return {
                days:0,
                anu:[
                    { title:'我们第一次见面已经', date:'2017年3月17日', days:moment(new Date()).diff(moment('2017年3月17日','YYYY年MM月DD日'), 'days')},
                    { title:'我们第一次拥抱已经', date:'2017年3月25日', days:moment(new Date()).diff(moment('2017年3月25日','YYYY年MM月DD日'), 'days')},
                    { title:'我们第一次接吻已经', date:'2017年3月25日', days:moment(new Date()).diff(moment('2017年3月25日','YYYY年MM月DD日'), 'days')},
                ]
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                this.days = moment(new Date()).diff(moment('20170321','YYYYMMDD'), 'days')
            },
        },
    }
</script>

<style lang="scss" scoped>
#love{
    display: flex;
    flex-wrap: wrap;
    .head{
        width: 90%;
        height: 200px;
        background: linear-gradient(90deg, rgb(253,117,152), rgb(247,76,110));
        margin: 10px auto;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        color: ivory;
        .imgs{
            width: 100%;
            display: flex;
            padding: 0 50px;
            img{
                width: 70px;
                height: 70px;
                margin: auto;
            }
            .heart{
                display: flex;
                align-items: center;
                font-size: 40px;
            }
        }
        .days{
            width: 100%;
            text-align: center;
            margin-top: 10px;
            height: 20px;
        }
        .days-from{
            width: 100%;
            text-align: center;
            height: 20px;
            font-size: 14px;
            color: rgb(255, 186, 166);
        }
    }
    .list{
        width: 100%;
        .list-item{
            display: flex;
            margin: 20px auto;
            border-bottom: 1px solid rgba(155, 155, 155, 0.2);
            .left{
                width: 60%;
                text-align: left;
                padding-left: 30px;
                .title{
                    font-size: 17px;
                }
                .date{
                    color: rgb(155, 155, 155);
                    margin-bottom: 20px;
                }
            }
            .right{
                width: 40%;
                text-align: center;
                .days{
                    color: rgb(247,76,110);
                    font-size: 24px;
                }
            }
        }
    }
}
</style>