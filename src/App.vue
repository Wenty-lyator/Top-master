<template>
  <div class="wrap">

    <div class="boddy">

      <Nav />

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

    </div>

    <Social />

    <Footer />
      
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Social from './components/Social.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Social,
    Footer
  }
}
</script>

<style lang="scss">


.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}


</style>
