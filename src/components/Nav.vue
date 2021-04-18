<template>
  <nav class="nav">
    <div class="nav-list nav-desc">

      <div class="nav-logo">
        <img src="../assets/images/logo.svg" alt="logo" class="nav-logo-img">
        <button @click="$router.push({ name: 'main' })" class="nav-logo-link nav-item">Ваш ремонт-наша забота</button>
      </div>

      <button @click="$router.push({ name: 'main' })" class="nav-item">Главная страница</button>

      <Submenu />

      <button @click="$router.push({ name: 'portfolio' })" class="nav-item">Наши работы</button>

      <button @click="$router.push({ name: 'about' })" class="nav-item">О нас</button>

      <button @click="$router.push({ name: 'contacts' })" class="nav-item">Контакты</button>

      <div class="nav-numbers">
        <a href="tel:996555720707" class="nav-num nav-item">+996 (555) 720-707</a>
        <a href="tel:996709378709" class="nav-num nav-item">+996 (709) 378-709</a>
      </div>

    </div>


    <div class="nav-mobile">

      <div class="nav-logo">
        <img src="../assets/images/logo.svg" alt="logo" class="nav-logo-img">
        <button @click="$router.push({ name: 'main' })" class="nav-logo-link nav-item">Ваш ремонт-наша забота</button>
      </div>

      <div class="nav-mobile-top" @click="show = !show">

        <div>
          <button class="nav-mobile-btn">Меню</button>
        </div>
        
        <transition name="slide-fade">
          <div class="nav-mobile-menu" v-if="show">

            <button @click="$router.push({ name: 'main' })" class="nav-mobile-item nav-item">Главная страница</button>

            <button @click="$router.push({ name: 'redecorating' })" class="nav-mobile-item submenu-btn">Косметический ремонт</button>
            
            <button @click="$router.push({ name: 'overhaul' })" class="nav-mobile-item submenu-btn">Капитальный ремонт</button>
            
            <button @click="$router.push({ name: 'renovation' })" class="nav-mobile-item submenu-btn">Евро ремонт</button>
            
            <button @click="$router.push({ name: 'plumbing' })" class="nav-mobile-item submenu-btn">Установка и ремонт сантехники</button>
            
            <button @click="$router.push({ name: 'plumber' })" class="nav-mobile-item submenu-btn">Вызов Сантехника</button>
            
            <button @click="$router.push({ name: 'carpetner' })" class="nav-mobile-item submenu-btn">Вызов Плотника</button>

            <button @click="$router.push({ name: 'contacts' })" class="nav-mobile-item nav-item">Контакты</button>

            <div class="nav-mobile-numbers nav-numbers">
              <a href="tel:996555720707" class="nav-num nav-item">+996 (555) 720-707</a>
              <a href="tel:996709378709" class="nav-num nav-item">+996 (709) 378-709</a>
            </div>

          </div>
        </transition>

      </div>

    </div>
  </nav>
</template>

<script>
import Submenu from '../components/Submenu.vue'

export default {
  name: 'Nav',
  components: {
    Submenu
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">

.nav {
  max-width: 1200px;
  margin: 0 auto;
  &-logo {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    max-width: 215px;
    &-img {
      width: 100px;
      height: 100px;
    }
  }
  &-list {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &-item {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.24px;
    background: none;
    border: none;
    outline: 0;
    &:hover {
      cursor: pointer;
    }
  }
  &-numbers {
    display: flex;
    flex-direction: column;
  }
  &-num {
    font-family: 'Gilory-ExtraBold';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 31px;
    text-align: center;
    letter-spacing: -0.24px;
    color: #000000;
    text-decoration: none;
  }
  &-mobile {
    width: 100%;
    position: absolute;
    &-btn {
      background: none;
      border: none;
      outline: 0;
      color: #fff;
    }
    &-top {
      max-width: 100%;
      padding: 0 15px;
      position: absolute;
      right: 0;
      top: 35px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 999999;
      position: fixed;
      top: 0;
      left: 0;
      width: 70%;
      height: 100vh;
      background-color: #F5F5F5;
      padding: 10px;
    }
    &-item {
      margin: 10px 0;
      text-align: left;
    }
    &-numbers {
      margin: auto 0 20px 0;
      text-align: left;
    }
  }
}


@media (max-width: 1000px) {
  .nav {
    &-desc {
      display: none;
    }
    &-mobile {
      display: flex;
    }
    &-logo {
      padding-left: 10px;
      &-link {
        color: #fff;
      }
    }
  }
}

@media (min-width: 1000px) {
  .nav {
    &-desc {
      display: flex;
    }
    &-mobile {
      display: none;
    }
  }
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

</style>