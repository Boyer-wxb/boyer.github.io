<template>
    <div id='intro'>
        <div>技术栈</div>
        <transition-group tag="div" name="el-zoom-in-left" class="techs">
            <div v-for="(item, index) in techs" :key="'li-'+index" v-show="item.show" class="tech">
                <span>{{item.name}}</span>
                <ul v-for="(p,i) in item.point" :key="'p-'+i">
                    <li>{{p}}</li>
                </ul>
            </div>
        </transition-group>
        <div v-show="show">联系方式</div>
        <transition-group name="el-zoom-in-left" tag="div">
            <div key="qq" v-show="show">
                <span>QQ：</span>
                <span>270121862</span>
            </div>
            <div key="email" v-show="show">
                <span>Email: </span>
                <span>270121862@qq.com</span>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name:'intro',
        data(){
            return {
                show:false,
                techs:[
                    {name:'java', show:false, point:[
                        'SpringMVC','SpringBoot','JFinal','Hibernate','MyBatis','MyBatisPlus'
                    ]},
                    {name:'vue', show:false, point:[
                        'VUE-CLI','NUXT'
                    ]},
                    {name:'css', show:false, point:[
                        'sass'
                    ]},
                    {name:'python', show:false, point:[
                        '数据爬取','UI自动化'
                    ]},
                    {name:'data', show:false, point:[
                        'MySQL','Oracle','MongoDB','Redis'
                    ]},
                    {name:'server', show:false, point:[
                        'tomcat','nginx','openresty'
                    ]},
                ],
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                let t =200
                this.techs.forEach(e=>{
                    setInterval(()=>{
                        e.show = true
                    }, t)
                    t += 200
                })
                t += 150
                setInterval(() => {
                    this.show = true
                }, t);
            }
        },
    }
</script>

<style lang="scss" scoped>
$header: 60px;
$footer: 50px;
#intro{
    height: calc(100vh - #{$header} - #{$footer});
    margin: 10px 15px;
    .techs{
        display: flex;
        flex-wrap: wrap;
        .tech{
            margin: 0 30px 15px 0;
            min-width: 25%;
        }
        margin-bottom: 50px;
    }
}
</style>