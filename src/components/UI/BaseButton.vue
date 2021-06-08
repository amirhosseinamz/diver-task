<template>
  <v-row justify="center">
    <v-col cols="12">
      <button :class="{'full-width': block}">
        {{ title }}
      </button>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BaseButton',
  props: ['title', 'block']
}
</script>

<style scoped>
  button {
    background: var(--blue);
    border-radius: 20px;
    color: white;
    padding: 1rem;
  }
  .full-width {
    width: 100%;
  }
</style>
