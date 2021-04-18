<template>
  <div class="main-about">
      <div class="wrapper">
        <p class="main-about-title">О нас</p>
        <div class="main-about-content">

          <div class="main-about-info">
            <span class="main-about-text">«Top Master»- работает по принципу «качественно, быстро и недорого». Ваш надежный помощник в реализации самых необычных идей. Вам больше нет необходимости находиться возле рабочих большую часть своего драгоценного времени, ведь  «Top Master» бережет ваше время, деньги и нервы.</span>
            <span class="main-about-text">Etiam leo odio, consequat id ornare ac, lacinia et purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent fringilla sapien et mauris egestas mattis a eu nisi. Vivamus at massa nisl. Curabitur eget nisl lobortis neque efficitur consectetur. Integer non ante dapibus, maximus mi ut, placerat nisi. Proin imperdiet tortor a augue interdum, et feugiat ipsum porta. Vivamus ac nibh odio</span>
          </div>

          <div class="main-about-slider">

            <swiper effect="overflow" :pagination="{ clickable: true }" navigation>
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
    name: 'About',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  };
</script>

<style>

</style>