<template>
  <div class="main">

    <div class="header header-redecorating">
      <header class="main-header">
        <p class="main-header-title">Косметический ремонт</p>

        <span class="main-header-text">Косметический ремонт квартиры – комплекс отделочных работ, позволяющихобновить интерьер помещения без серьезных вмешательств, сменыкоммуникаций, перепланировки и больших затрат. Это оживление надоевшего дизайна.</span>

        <button class="main-button">Оставить заявку</button>
      </header>
    </div>

    <div class="wrapper">

      <div class="main-pros">
        <p class="main-pros-title">Какие работы входят?</p>

        <div class="main-pros-list">
          
          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">1</span>
            </div>

            <span class="main-pros-point">Комплекс отделочных работ</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">2</span>
            </div>

            <span class="main-pros-point">Демонтаж старых покрытий со стен, потолка, пола</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">3</span>
            </div>

            <span class="main-pros-point">Шпатлевка, грунтовка, выравнивание стен, потолка и пола</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">4</span>
            </div>

            <span class="main-pros-point">Монтаж сантехники без разводки коммуникаций</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">5</span>
            </div>

            <span class="main-pros-point">Выполнение частичной разводки электросетей, установка розеток, светильников</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">6</span>
            </div>

            <span class="main-pros-point">Замена плинтусов и наличников</span>
          </div>

        </div>
      </div>

    </div>


      <div class="main-portfolio sub-header sub-header-redecorating">
        <p class="main-services-title">Галерея наших работ по косметическому ремонту</p>
        
        <div class="main-portfolio-slider">

          <swiper effect="EffectFlip" navigation>
            <swiper-slide>
              <img src="../assets/images/redecorating/slide1-portfolio.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/redecorating/slide1-portfolio.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/redecorating/slide1-portfolio.jpg" alt="">
            </swiper-slide>
          </swiper>

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
    name: 'Redecorating',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  };
</script>

<style>

</style>