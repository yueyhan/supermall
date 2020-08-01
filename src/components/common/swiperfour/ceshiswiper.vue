<template>
<div class='ceshi'>
  <div class='swiper-container awe'>
    <div class='swiper-wrapper'>
        <slot ></slot>
    </div> 
    <div class="swiper-pagination"></div>  
  </div>
</div>
</template>
<script>
import Swiper from './swiper.js';
import './swiper.css';
export default {
  name :'ceshis',
   created:function(){
 	 new Swiper('.qwe',{
 	 	        loop: true,
                 speed: 300,
                 autoplay:{
                     delay:3000,
                     stopOnLastSlide: false,

                   disableOnInteraction: true,
                 },
                 pagination: {
			el: '.swiper-pagination',
		},       
 	 })
 },
}


</script>

<style>
  
img{width: 100%;}
 

</style>
