<template>
  <div class="social">
    <a href="https://www.facebook.com/topmaster.kg" target="_blank" class="social-link">
      <img src="../assets/images/social/social-facebook.svg" class="social-icon social-icon-facebook" alt="facebook">
    </a>
    <a href="https://www.wa.link/ncad2a" target="_blank" class="social-link">
      <img src="../assets/images/social/social-whatsapp.svg" class="social-icon social-icon-whatsapp" alt="whatsapp">
    </a>
    <a href="https://t.me/topmasterbishkek" target="_blank" class="social-link">
      <img src="../assets/images/social/social-telegram.svg" class="social-icon social-icon-telegram" alt="telegram">
    </a>
    <a href="https://www.instagram.com/topmaster.bishkek/" target="_blank" class="social-link">
      <img src="../assets/images/social/social-instagram.svg" class="social-icon social-icon-instagram" alt="instagram">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Social',
}
</script>

<style lang="scss">

.social {
  position: fixed;
  right: 15px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  z-index: 99999;
  &-icon {
    width: 35px;
    height: 35px;
    margin: 5px 0;
    border-radius: 10px;
    transition: all .3s;
    &-facebook:hover {
      box-shadow: 0 0 10px 0 #3b5998 inset, 0 0 10px 4px #3b5998;
    }
    &-whatsapp:hover {
      box-shadow: 0 0 10px 0 #43d854 inset, 0 0 10px 4px #43d854;
    }
    &-telegram:hover {
      box-shadow: 0 0 10px 0 #0088cc inset, 0 0 10px 4px #0088cc;
    }
    &-instagram:hover {
      box-shadow: 0 0 10px 0 #4f5bd5 inset, 0 0 10px 4px #d62976;
    }
  }
  &-link {
    background: none;
    border: none;
    outline: 0;
  }
}

</style>