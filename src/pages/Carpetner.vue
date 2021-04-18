<template>
  <div class="main">
      
    <div class="header header-carpetner">        
      <header class="main-header">
        <p class="main-header-title">Вызов плотника</p>

        <span class="main-header-text">Специальность столяра и плотника является одной из самых важных и ответственных рабочих профессий. Это работники, занимающиеся обработкой и изготовлением материалов из дерева для строительства дома, коттеджа, дачи, внутренней отделкой помещений и так далее.</span>

        <button class="main-button">Оставить заявку</button>
      </header>
    </div>
    
    <div class="wrapper">

      <div class="main-pros">
        <p class="main-pros-title">Наши преймущества</p>

        <div class="main-pros-list">
          
          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">1</span>
            </div>

            <span class="main-pros-point">Мы гарантируем высокое качество работы.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">2</span>
            </div>

            <span class="main-pros-point">Мы предлагаем услуги широкого спектра (ремонт всех видов недвижимости изготовление, доставка и установка мебели, дверей, строительных лестниц и деревянных конструкций).</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">3</span>
            </div>

            <span class="main-pros-point">У нас вы можете заказать изготовление беседки к вашему дому, также мы можем составить план проекта.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">4</span>
            </div>

            <span class="main-pros-point">Мы готовы предоставить вам группу специально обученных работников, которые быстро и качественно выполнят все виды кровельных работ.</span>
          </div>

        </div>
      </div>

    </div>

    <div class="main-portfolio sub-header-carpetner">
      <p class="main-services-title">Галерея наших работ по вызову плотника</p>
      
        <div class="main-portfolio-slider">

          <swiper effect="EffectFlip" navigation>
            <swiper-slide>
              <img src="../assets/images/carpetner/slide1-portfolio.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/carpetner/slide1-portfolio.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/carpetner/slide1-portfolio.jpg" alt="">
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
    name: 'Carpetner',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  };
</script>

<style>

</style>