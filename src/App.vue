<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
    }
  }
}
</script>
<style>
  @import "assets/css/fonts.css";

  .v-application {
    font-family: iran-sans-normal!important;
  }
  :root {
    --dark: #4a4a4a;
    --gray: #c5c5c5;
    --blue: #3284da;
    --light-blue: #f0f4f8
  }
</style>
