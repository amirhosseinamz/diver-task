<template>
  <v-row justify="center" align-content="center" class="mx-5" no-gutters>
    <v-col cols="12">
      <v-card>
        <slot></slot>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<style scoped>
  .v-card {
    padding: 3rem;
    border-radius: 30px!important;
    box-shadow: 0 13px 25px -20px var(--blue)!important;
  }
</style>
