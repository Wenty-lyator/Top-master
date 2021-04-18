<template>
  <div class="main">

    <div class="header header-renovation">  
      <header class="main-header">
        <p class="main-header-title">Евро ремонт</p>

        <span class="main-header-text">Евро ремонт квартиры - отделка помещения под ключ, отличающаяся отменным качеством, безупречным исполнением, уникальной идеей дизайнера. Используются только лучшие материалы и соверменная техника, результат - эклюзивный роскошный интерьер.</span>

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

            <span class="main-pros-point">Создание уникального авторского дизайн-проекта.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">2</span>
            </div>

            <span class="main-pros-point">Выполнение перепланировки комнат для грамотной организации пространстваю</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">3</span>
            </div>

            <span class="main-pros-point">Прокладка коммуникаций, электропроводки, установка розеток, выключателей.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">4</span>
            </div>

            <span class="main-pros-point">Обустройство системы вентиляции, монтаж кондиционерка.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">5</span>
            </div>

            <span class="main-pros-point">Укладка покрытий, керамической плитки, отедлка стен, потолков.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">6</span>
            </div>

            <span class="main-pros-point">Подбор мебели и аксессуаров с их расстоновкой.</span>
          </div>

        </div>
      </div>


    </div>

    <div class="main-portfolio sub-header sub-header-renovation">
      <p class="main-services-title">Галерея наших работ по евро ремонту</p>
        
      <div class="main-portfolio-slider">

        <swiper effect="EffectFlip" navigation>
          <swiper-slide>
            <img src="../assets/images/renovation/slide1-portfolio.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/renovation/slide1-portfolio.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/renovation/slide1-portfolio.jpg" alt="">
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
    name: 'Renovation',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  };
</script>

<style>

</style>