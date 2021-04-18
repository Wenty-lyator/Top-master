<template>
  <div class="main-portfolio sub-header sub-header-main">

        <p class="main-services-title">Галерея наших работ</p>

        <div class="main-portfolio-slider">

          <swiper effect="EffectFlip" navigation>
            <swiper-slide>
              <img src="../assets/images/main/slide1-portfolio.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/main/slide1-portfolio.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/main/slide1-portfolio.jpg" alt="">
            </swiper-slide>
          </swiper>

        </div>

    </div>
</template>

<script>
  import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/swiper.scss';
  import 'swiper/components/effect-fade/effect-fade.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';

  SwiperCore.use([EffectFade, Navigation, Pagination]);

  export default {
    name: 'Portfolio',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  };
</script>

<style>

</style>