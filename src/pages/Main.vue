<template>
  <div class="main">

    <div class="header header-main">
      <header class="main-header">
        <p class="main-header-title">Сделаем качественный премиальный ремонт вашей квартиры, дома, офиса или коммерческого помещения точно в срок</p>

        <span class="main-header-text">Получи Бесплатную консультацию прямо сейчас</span>

        <button class="main-button">Оставить заявку</button>
      </header>
    </div>


    <div class="wrapper">

      <div class="main-services">

        <p class="main-services-title">Наши услуги</p>

        <div class="main-services-items">
          
          <div @click="$router.push({ name: 'redecorating' })" class="main-services-item main-services-redecorating">            
            <div class="main-services-item-title">
              <p class="main-services-item-subtitle">Косметический ремонт</p>
              <span class="main-services-item-subtext">Решение проблем любой сложности</span>
            </div>
          </div>

          <div @click="$router.push({ name: 'overhaul' })" class="main-services-item main-services-overhaul">            
            <div class="main-services-item-title">
              <p class="main-services-item-subtitle">Капитальный ремонт</p>
              <span class="main-services-item-subtext">Решение проблем любой сложности</span>
            </div>
          </div>

          <div @click="$router.push({ name: 'renovation' })" class="main-services-item main-services-renovation">            
            <div class="main-services-item-title">
              <p class="main-services-item-subtitle">Евро ремонт</p>
              <span class="main-services-item-subtext">Решение проблем любой сложности</span>
            </div>
          </div>

          <div @click="$router.push({ name: 'plumber' })" class="main-services-item main-services-plumber">            
            <div class="main-services-item-title">
              <p class="main-services-item-subtitle">Вызов сантехника</p>
              <span class="main-services-item-subtext">Решение проблем любой сложности</span>
            </div>
          </div>

          <div @click="$router.push({ name: 'plumbing' })" class="main-services-item main-services-electrician">            
            <div class="main-services-item-title">
              <p class="main-services-item-subtitle">Вызов электрика</p>
              <span class="main-services-item-subtext">Решение проблем любой сложности</span>
            </div>
          </div>

          <div @click="$router.push({ name: 'carpetner' })" class="main-services-item main-services-carpetner">            
            <div class="main-services-item-title">
              <p class="main-services-item-subtitle">Вызов плотника</p>
              <span class="main-services-item-subtext">Решение проблем любой сложности</span>
            </div>
          </div>

        </div>
      </div>

    </div>


    <About />


    <div class="wrapper">

      <div class="main-advantage">

          <p class="main-services-title">Наши преимущества</p>

          <div class="main-advantage-items">

            <div class="main-advantage-item">
              <div class="main-advantage-item-icon">
                <img src="../assets/images/main/star.svg" alt="Phone" class="main-advantage-item-img">
              </div>

              <div class="main-advantage-info">
                <p class="main-advantage-info-title">Качество</p>
                <span class="main-advantage-info-subtitle">Lorem ipsum dolor sit amet, consectetur adipicing elit</span>
              </div>
            </div>

            <div class="main-advantage-item">
              <div class="main-advantage-item-icon">
                <img src="../assets/images/main/time.svg" alt="Phone" class="main-advantage-item-img">
              </div>

              <div class="main-advantage-info">
                <p class="main-advantage-info-title">Сроки</p>
                <span class="main-advantage-info-subtitle">сдаем объекты в указанные сроки)</span>
              </div>
            </div>

            <div class="main-advantage-item">
              <div class="main-advantage-item-icon">
                <img src="../assets/images/main/coin.svg" alt="Phone" class="main-advantage-item-img">
              </div>

              <div class="main-advantage-info">
                <p class="main-advantage-info-title">Гарантия</p>
                <span class="main-advantage-info-subtitle">подберем ремонт по вашему бюджету</span>
              </div>
            </div>

            <div class="main-advantage-item">
              <div class="main-advantage-item-icon">
                <img src="../assets/images/main/shield.svg" alt="Phone" class="main-advantage-item-img">
              </div>

              <div class="main-advantage-info">
                <p class="main-advantage-info-title">Гарантия</p>
                <span class="main-advantage-info-subtitle">3 года</span>
              </div>
            </div>

            <div class="main-advantage-item">
              <div class="main-advantage-item-icon">
                <img src="../assets/images/main/cam.svg" alt="Phone" class="main-advantage-item-img">
              </div>

              <div class="main-advantage-info">
                <p class="main-advantage-info-title">Фотоотчеты</p>
                <span class="main-advantage-info-subtitle">весь процесс работы вы котролируете удаленно</span>
              </div>
            </div>

            <div class="main-advantage-item">
              <div class="main-advantage-item-icon">
                <img src="../assets/images/main/people.svg" alt="Phone" class="main-advantage-item-img">
              </div>

              <div class="main-advantage-info">
                <p class="main-advantage-info-title">Команда</p>
                <span class="main-advantage-info-subtitle">с опытом не менее 7 лет)</span>
              </div>
            </div>

          </div>
      </div>

    </div>


    <Portfolio />


    <div class="wrapper">

      <div class="main-ques">
        <p class="main-services-title">Почему мы?</p>
        <span class="main-ques-text">Реалезуем проект любой сложности. Сторого следим за дизайном интерьера и обговоренных сроков. Грамотное и рациональное составление сметы. Исходя из пожеланий и возможностей заказчика. Полный комлекс ремонтных работ и котроль каждого этапа.</span>
        <button class="main-button">Оставить заявку</button>
      </div>

    </div>

  </div>
</template>

<script>
  import Portfolio from '../components/Portfolio.vue'
  import About from '../components/About.vue'
  
  export default {
    name: 'Main',
    components: {
      Portfolio,
      About
    },
  };
</script>

<style lang="scss">

@media (max-width: 1250px) {
  .main-services-items, .main-advantage-items {
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
  }
}

@media (max-width: 1100px) {
  .main-about-title {
    text-align: center;
  }
  .main-about-content {
    flex-direction: column;
    align-items: center;
  }
  .main-about-info {
    margin: 0 0 30px 0;
  }
  .main-about-slider, .main-about-info {
    width: 85%;
    max-width: 85%;
  }
}

@media (max-width: 800px) {
  .main-services-items, .main-advantage-items {
    display: flex;
    flex-direction: column;
  }
  .main-ques-title {
    font-size: 34px;
  }
  .main-ques-text {
    font-size: 20px;
  }
}

@media (max-width: 440px) {
  .main-services-item {
    max-width: 330px;
  }
}

</style>