<template>
  <div class="submenu" @click="isOpen = !isOpen">

    <div class="submenu-menu-item">
      <button class="submenu-btn">Наши услуги</button>
      <svg viewBox="0 0 1030 638" width="10"><path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#000"></path></svg>
    </div>

    <transition name="menu">
      <div class="submenu-menu" v-if="isOpen">
        <button @click="$router.push({ name: 'redecorating' })" class="submenu-btn">Косметический ремонт</button>
        <button @click="$router.push({ name: 'overhaul' })" class="submenu-btn">Капитальный ремонт</button>
        <button @click="$router.push({ name: 'renovation' })" class="submenu-btn">Евро ремонт</button>
        <button @click="$router.push({ name: 'plumbing' })" class="submenu-btn">Установка и ремонт сантехники</button>
        <button @click="$router.push({ name: 'plumber' })" class="submenu-btn">Вызов Сантехника</button>
        <button @click="$router.push({ name: 'carpetner' })" class="submenu-btn">Вызов Плотника</button>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'Submenu',
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss">

.menu-item svg {
  width: 10px;
  margin-left: 5px;
}

.menu-enter-from, .menu-leave-to {
  opacity: 0;
}
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.2s ease;
}

</style>