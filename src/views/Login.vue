<template>
  <div class="wrapper">
    <div class="blue-background">
      <div class="logo"></div>
      <base-card>
        <h2 class="text-center mb-2">ورود به دایور</h2>
        <h4 class="text-center">به دایور خوش اومدی!</h4>
        <base-input placeholder="شماره همراه" :has-label="true" :label-text="labelText" class="my-7"></base-input>
        <base-button title="دریافت کد تأیید" :block="true"></base-button>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  computed: {
    labelText () {
      return 'برای ورود به دایور شماره همراه خود را وارد نمایید'
    }
  }
}
</script>

<style scoped>
  h2 {
    color: var(--dark);
  }
  h4 {
    color: var(--gray);
    font-weight: lighter;
  }
  .wrapper {
    background: var(--light-blue);
    height: 100vh;
  }
  .blue-background {
    background-image: url('../assets/Login/b_1.png');
    height: 80vh;
    width: 100%;
    background-size: cover;
  }
  .logo {
    background-image: url("../assets/Login/diver_logo_typo_24491_f_1.svg");
    width: 100%;
    height: 150px;
    text-align: center;
    background-position: center;
  }
</style>
