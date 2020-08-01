<template>
<div id='home'>
  <navbar class='homenav'>
    <div slot='center'>购物街</div>
  </navbar>
  <homeswiper :bannersimage='bannersimage'>
  </homeswiper>
  <homerecommend :recommends="recommends">
  </homerecommend>
</div>
 
</template>
<script>
import navbar from 'components/common/navbar/nav-bar.vue';
import {gethomedataone} from '../../network/home';
//import swipercon from '../../components/common/swiper/swipercon';
import homerecommend from './homeRecommend.vue';
import homeswiper from './homeswiper'


export default {
  name:'home',
  components:{
    navbar,
    //swipercon,
    homerecommend,
    homeswiper
    
  },
  data(){
    return{
      banners : [],
      recommends : [],
      bannersimage:["https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
      "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
      "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"
      ]
    }
  },
  created(){
    gethomedataone().then(res=>{
      this.banners =res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list
      //console.log(this.recommends)
    })
  }
}

</script>

<style>

.homenav{
  background-color: pink;
  
}

  

</style>
