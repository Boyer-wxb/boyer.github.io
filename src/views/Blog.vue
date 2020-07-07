<template>
    <div>
        {{type}}
    </div>
</template>

<script>
    export default {
        name:'Blog',
        data(){
            return {
                type: this.$route.query.type,
            }
        },
        created(){
            
        },
    }
</script>

<style lang="scss" scoped>

</style>