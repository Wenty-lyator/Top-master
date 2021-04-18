<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer-content">

        <div class="footer-info">
          <p class="footer-info-title">Наши контакты</p>

          <div class="footer-info-item">
            <div class="footer-info-img">
              <img src="../assets/images/adress.svg" alt="adress" class="footer-icon">
            </div>
            <span class="footer-info-text">г.Бишкек, Кыргызстан ул. Ю. Абрахманова 166</span>
          </div>

          <div class="footer-info-item">
            <div class="footer-info-img">
              <img src="../assets/images/mess.svg" alt="message" class="footer-icon">
            </div>
            <a class="footer-info-text" href="mailto:info@top-master.kg">info@top-master.kg</a>
          </div>

          <div class="footer-info-item">
            <div class="footer-info-img">
              <img src="../assets/images/phone.svg" alt="phone" class="footer-icon">
            </div>
            <div class="footer-info-nums">
              <a class="footer-info-text" href="tel:996555720707">+996 (555) 720-707</a>
              <a class="footer-info-text" href="tel:996709378709">+996 (709) 378-709</a>
            </div>
          </div>

        </div>

        <div class="footer-map-box">
          <iframe class="footer-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.0729597411555!2d74.6088287154339!3d42.87130417915586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c6063eb9d3%3A0x4eabecb1ae297ba6!2zMTY2INGD0LsuINCu0YHRg9C_0LAg0JDQsdC00YDQsNGF0LzQsNC90L7QstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1617376804009!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <form class="footer-form" autocomplete="off">
          <label class="footer-form-label" for="number">Укажите ваш номер</label>
          <input class="footer-form-input footer-form-input-number" name="number" type="tel" required placeholder="+996(___)-__-__-__">
          <label class="footer-form-label" for="comment">Комментарий</label>
          <textarea class="footer-form-input footer-form-input-comment" name="comment" required cols="30" rows="10"></textarea>
          <button class="footer-form-button main-button" type="submit">Оставить заявку</button>
        </form>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">

.footer {
  position: relative;
  width: 100%;
  bottom: 0;
  padding: 70px 0;
  flex: 0 0 auto;
  background-color: #383838;
  &-content {
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
  }
  &-info {
    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 15px 0;
    }
    &-nums {
      display: flex;
      flex-direction: column;
    }
    &-title {
      font-family: Cormorant Unicase;
      font-style: normal;
      font-weight: 300;
      font-size: 48px;
      line-height: 58px;
      text-align: center;
      letter-spacing: -0.24px;
      color: #FFFFFF;
      margin: 0 0 10px 0;
      text-align: left;
    }
    &-text {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      letter-spacing: -0.24px;
      color: #FFFFFF;
      text-decoration: none;
    }
    &-img {
      margin-right: 25px;
    }
  }
  &-map {
    max-width: 375px;
    max-height: 325px;
    border-radius: 6px;
  }
  &-form {
    display: flex;
    flex-direction: column;
    &-label {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 170.69%;
      color: #828282;
      margin: 5px 0;
    }
    &-input {
      box-shadow: inset 0px 4px 14px rgba(0, 0, 0, 0.03);
      border-radius: 5px;
      border: none;
      background-color: #f5f5f5;
      outline: 0;
      &-number {
        padding: 10px 15px;
      }
      &-comment {
        height: 150px;
        padding: 5px;
      }
    }
  }
}

@media (max-width: 1300px) {
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-map-box {
    margin: 25px 0;
  }
}

@media (max-width: 660px) {
  .footer-map {
    max-width: 100%;
  }
}

</style>