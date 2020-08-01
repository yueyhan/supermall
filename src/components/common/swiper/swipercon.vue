<template>
<div class='swipercon'>
  <div class='swiper-container qwe'>
    <div class='swiper-wrapper'>
        <slot ></slot>
    </div> 
    <div class="swiper-pagination"></div>  
  </div>
</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
export default {
  name :'swipercon',
   mounted:function(){
 	 new Swiper('.qwe',{
 	 	        loop: true,
                 speed: 300,
                 autoplay:{
                     delay:1000,
                     stopOnLastSlide: false,
                     disableOnInteraction: true,
                 },
                 pagination: {
            el: '.swiper-pagination',
            observeParents:true,   //必须加入
            observer:true,
		},       
 	 })
 },
}


</script>

<style>
  
img{width: 100%;}
 

</style>
