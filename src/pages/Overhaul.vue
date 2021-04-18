<template>
  <div class="main">

    <div class="header header-overhaul">
      <header class="main-header">
        <p class="main-header-title">Капитальный ремонт</p>

        <span class="main-header-text">Капитальный ремонт в квартире - весь комплекс работ под ключ, включаячерновую и чистовую отедлку, результатом становится комфортное и уютноежилье. Заказчик согласует дизайн и выбирает материалы отделки, всю остальную работу мы берем на себя.</span>

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

            <span class="main-pros-point">Подготовительные работы, демонтаж старых покрытий, перепланировка.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">2</span>
            </div>

            <span class="main-pros-point">Установка оконных, дверных, балконных блоков, отопительных батарей.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">3</span>
            </div>

            <span class="main-pros-point">Штукатурные малярные работы, заливка стяжки пола.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">4</span>
            </div>

            <span class="main-pros-point">Монтаж сантехнических коммуникаций, электропроводки, осветительных приборов.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">5</span>
            </div>

            <span class="main-pros-point">Косметическая отедлка - поклейка обоев, монтаж кафельной плитки, напольного покрытия натяжных потолков.</span>
          </div>

          <div class="main-pros-item">
            <div class="main-pros-num">
              <span class="main-pros-num-text">6</span>
            </div>

            <span class="main-pros-point">Вывоз мусора и тщательная уборка помещения</span>
          </div>

        </div>
      </div>
      
    </div>

    <div class="main-portfolio sub-header sub-header-overhaul">
      <p class="main-services-title">Галерея наших работ по капитальному ремонту</p>
        
      <div class="main-portfolio-slider">

        <swiper effect="EffectFlip" navigation>
          <swiper-slide>
            <img src="../assets/images/overhaul/slide1-portfolio.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/overhaul/slide1-portfolio.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/overhaul/slide1-portfolio.jpg" alt="">
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
    name: 'Overhaul',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  };
</script>

<style>

</style>