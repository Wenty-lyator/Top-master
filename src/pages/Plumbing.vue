<template>
  <div class="main">

    <div class="header header-plumbing">  
      <header class="main-header">
        <p class="main-header-title">Установка и ремонт сантехники</p>

        <span class="main-header-text">Если вам нужно отремонтировать или установить сантехнику, счётчики, подключить стиральную или посудомоечную машинку, сделать монтаж унитаза, ванны или батарей отопления - вы всегда сможете заказать услуги сантехника на дом в Бишкеке! Мы оказываем весь спектр сантех-услуг с гарантей и по доступным ценам.</span>

        <button class="main-button">Оставить заявку</button>
      </header>
    </div>

    <div class="wrapper">

      <div class="main-advantage plumbing">
        <p class="main-services-title">Что мы делаем</p>

        <div class="plumbing-items">

          <div class="plumbing-item">
            <span class="plumbing-title">Полотенцесушитель</span>

            <img src="../assets/images/plumbing/toweldryer.png" alt="" class="main-plumbing-img">
          </div>

          <div class="plumbing-item">
            <span class="plumbing-title">Раковина</span>

            <img src="../assets/images/plumbing/sink.png" alt="" class="main-plumbing-img">
          </div>

          <div class="plumbing-item">
            <span class="plumbing-title">Унитаз</span>

            <img src="../assets/images/plumbing/rest.png" alt="" class="main-plumbing-img">
          </div>

          <div class="plumbing-item">
            <span class="plumbing-title">Ванная</span>

            <img src="../assets/images/plumbing/bathroom.png" alt="" class="main-plumbing-img">
          </div>

          <div class="plumbing-item">
            <span class="plumbing-title">Смеситель</span>

            <img src="../assets/images/plumbing/tap.png" alt="" class="main-plumbing-img">
          </div>

          <div class="plumbing-item">
            <span class="plumbing-title">Радиатор отопления</span>

            <img src="../assets/images/plumbing/heating.png" alt="" class="main-plumbing-img">
          </div>

          <div class="plumbing-item">
            <span class="plumbing-title">Душевая кабина</span>

            <img src="../assets/images/plumbing/shower.png" alt="" class="main-plumbing-img">
          </div>

          <div class="plumbing-item">
            <span class="plumbing-title">Счётчик</span>

            <img src="../assets/images/plumbing/count.png" alt="" class="main-plumbing-img">
          </div>

        </div>
      </div>


    </div>

    <div class="main-portfolio sub-header sub-header-plumbing">
      <p class="main-services-title">Галерея наших работ по установке и ремонуту сантехники</p>
        
      <div class="main-portfolio-slider">

        <swiper effect="EffectFlip" navigation>
          <swiper-slide>
            <img src="../assets/images/plumbing/slide1-portfolio.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/plumbing/slide1-portfolio.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/plumbing/slide1-portfolio.jpg" alt="">
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
    name: 'Plumbing',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  };
</script>

<style lang="scss">

.plumbing {
  &-items {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
  }
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
  &-title {
    margin-bottom: 15px;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: -0.24px;
    color: #000000;
  }
}

@media (max-width: 1000px) {
  .plumbing-items {
    grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .plumbing-items {
    grid-template: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr / 1fr;
  }
}

</style>