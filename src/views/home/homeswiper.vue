<template>
    <div class='homeswiper'>
    <swipercon >
    <!-- <div class='swiper-slide' ><img :src="banners[0].image" ></div> -->
    <div class='swiper-slide'  ><img :src="bannersimage[0]" ></div>
    <div class='swiper-slide'  ><img :src="bannersimage[1]" ></div>
    <div class='swiper-slide'  ><img :src="bannersimage[2]" ></div>
    </swipercon> 
    </div>
</template>

<script>
import swipercon from '../../components/common/swiper/swipercon';
export default {
    name:'homeswiper',
    components:{
        swipercon
    },
    props:{
        bannersimage:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style  scoped>

</style>