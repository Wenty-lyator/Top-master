<template>
  <div class="main">
    
    <div class="header header-plumber">  
      <header class="main-header">
        <p class="main-header-title">Вызов сантехника</p>

        <button class="main-button">Оставить заявку</button>
      </header>
    </div>
    
    <div class="wrapper">

      <div class="main-pros">
        <p class="main-pros-title">Какие работы входят</p>

        <div class="main-pros-list">
          
          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">1</span>
            </div>

            <span class="main-pros-point">Электромонтаж и обслуживание. Любые объекты: квартиры, офисы, дома, склады, организаций и другие.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">2</span>
            </div>

            <span class="main-pros-point">Все специалисты инженеры с большим опытом работы.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">3</span>
            </div>

            <span class="main-pros-point">Бесплатная консультация инженера.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">4</span>
            </div>

            <span class="main-pros-point">Низкие цены, не дороже чем услуги частного электрика.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">5</span>
            </div>

            <span class="main-pros-point">Вызов электрика | по Бишкеку бесплатно.</span>
          </div>

        </div>
      </div>


    </div>

    <div class="main-portfolio sub-header sub-header-plumber">
      <p class="main-services-title">Галерея наших работ по вызову сантехника</p>
        
      <div class="main-portfolio-slider">

        <swiper effect="EffectFlip" navigation>
          <swiper-slide>
            <img src="../assets/images/plumber/slide1-portfolio.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/plumber/slide1-portfolio.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/plumber/slide1-portfolio.jpg" alt="">
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
    name: 'Plumber',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  };
</script>

<style>

</style>