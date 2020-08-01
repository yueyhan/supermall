<template>
    <div class='recommend'>
        <div v-for = 'item in recommends' class='recommend-item'>
            <a :href='item.link'>
                <img :src='item.image'>
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'homerecommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style  scoped>
.recommend{
    width:100%;
    display: flex;
    font-size: 12px;
    color:#000;
    padding: 10px 0 10px;
    border-bottom: 8px solid #eee;
    text-align: center;
}
.recommend a{
    text-decoration: none;
    color:#000;
    
}
.recommend-item{
    
    flex:1;
}
.recommend-item img{
    width: 75px;
    height: 75px;
    margin-bottom: 5px;
}
</style>