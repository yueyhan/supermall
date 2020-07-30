<template>

    <div >
    <tabbar>
      <tabbaritem path='/home' activecolor =' blue'><img slot='item-img' src='~assets/img/tab-bar/1.svg' width="35px" height="35px">
      <div slot='item-div'>首页</div>
      <img slot='item-img-active' src='~assets/img/tab-bar/ali.svg' width="35px" height="35px">
      </tabbaritem>
      <tabbaritem path='/cartgory' activecolor =' blue'><img slot='item-img' src='~assets/img/tab-bar/1.svg' width="35px" height="35px"><div slot='item-div'>分类</div>
      <img slot='item-img-active' src='~assets/img/tab-bar/ali.svg' width="35px" height="35px">
      </tabbaritem>
      <tabbaritem path='/bart' activecolor =' blue'><img slot='item-img' src='~assets/img/tab-bar/1.svg' width="35px" height="35px"><div slot='item-div'>购物车</div>
      <img slot='item-img-active' src='~assets/img/tab-bar/ali.svg' width="35px" height="35px">
      </tabbaritem>
      <tabbaritem path='/profile' activecolor =' blue'><img slot='item-img' src='~assets/img/tab-bar/1.svg' width="35px" height="35px"><div slot='item-div'>档案</div>
      <img slot='item-img-active' src='~assets/img/tab-bar/ali.svg' width="35px" height="35px">
      </tabbaritem>
    </tabbar>
        
    </div>
    
  
</template>
<script>
import tabbar from '../common/tab-bar/tab-bar'
import tabbaritem from '../common/tab-bar/tab-barItem'
export default {
  name :'tabbarmini',
  components:{
    tabbar,
    tabbaritem
  }
     
}
</script>
<style>


</style>
