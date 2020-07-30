<template>

    <div class='tag-bar-item' @click='itemclick'>
        <slot v-if='!isactive' name='item-img'></slot>
        <slot v-else name='item-img-active'></slot>
        <div  :style="isactivecolor"> <slot name='item-div'></slot> </div>
        
    </div>
    
  
</template>
<script>
export default {
  name :'tabbaritem',
  props:{path:String,activecolor:{type:String,default:'red'}},
//   data(){
//        return{
//            isactive:true
//        }
//    },
   computed:{
       isactive(){
           return this.$route.path.indexOf(this.path) !== -1
       },
       isactivecolor(){
           return this.isactive ? {color:this.activecolor} : {}
       }
   },
  methods:{
      itemclick(){
          this.$router.replace(this.path)
      }
  }
}
</script>
<style>

.tag-bar-item{
    flex:1; 
    text-align: center;
    height: 49px;
   
}
 .tag-bar-item img{
     vertical-align: middle;
    margin-bottom: -5px;
 }
 .act{
   color:red;
 }

</style>
