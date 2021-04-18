<template>
  <div class="contacts">
    <div class="wrapper">

      <p class="contacts-title">Наши контакты</p>

      <div class="contacts-info-item">
        <img src="../assets/images/adress.svg" alt="adress" class="contacts-icon">
        <span class="contacts-text">г.Бишкек, Кыргызстан ул. Ю. Абрахманова 166</span>
      </div>

      <div class="contacts-info-item">
        <img src="../assets/images/mess.svg" alt="message" class="contacts-icon">
        <a class="contacts-link" href="info@top-master.kg">info@top-master.kg</a>
      </div>

      <div class="contacts-info-item">
        <img src="../assets/images/phone.svg" alt="phone" class="contacts-icon">
        <div class="contacts-info-nums">
          <a class="contacts-link" href="tel:996555720707">+996 (555) 720-707</a>
          <a class="contacts-link" href="tel:996709378709">+996 (709) 378-709</a>
        </div>
      </div>

      <div class="contacts-social">
        <span class="contacts-text">Мы с соц. сетях</span>

        <div class="contacts-social-items">
          <a href="https://www.facebook.com/topmaster.kg" target="_blank" class="contacts-social-item"><img src="../assets/images/facebook.svg" alt="facebook" class="contacts-social-icon"></a>
          <a href="https://www.instagram.com/topmaster.bishkek/" target="_blank" class="contacts-social-item"><img src="../assets/images/instagram.svg" alt="instagram" class="contacts-social-icon"></a>
          <a href="https://t.me/topmasterbishkek" target="_blank" class="contacts-social-item"><img src="../assets/images/telegram.svg" alt="telegram" class="contacts-social-icon"></a>
          <a href="https://www.wa.link/ncad2a" target="_blank" class="contacts-social-item"><img src="../assets/images/whatsapp.svg" alt="whatsapp" class="contacts-social-icon"></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss">

.contacts {
  background-image: url('../assets/images/contacts/header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 150px 0;
  &-title {
    font-family: Cormorant Unicase;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 58px;
    text-align: left;
    letter-spacing: -0.24px;
    color: #FFFFFF;
  }
  &-text {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.24px;
    text-align: left;
    color: #FFFFFF;
  }
  &-icon {
    margin-right: 25px;
  }
  &-link {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.24px;
    text-align: left;
    color: #FFFFFF;
    text-decoration: none;
  }
  &-info-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px 0;
  }
  &-info-nums {
    display: flex;
    flex-direction: column;
  }
  &-social {
    margin-top: 20px;
    &-items {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
    }
    &-item {
      margin-right: 35px;
    }
  }
}

</style>