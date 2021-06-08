<template>
  <v-row>
    <v-col cols="12">
      <h6 class="mb-2" v-if="hasLabel">
        {{ labelText }}
      </h6>
      <div class="form-control">
        <input class="number-input" type="number" @input="checkInput" v-model="phoneNumber" :placeholder="placeholder">
        <i v-if="showClose" @click="clearInput"></i>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BaseInput',
  props: ['placeholder', 'hasLabel', 'labelText'],
  data () {
    return {
      showClose: false,
      phoneNumber: null
    }
  },
  methods: {
    checkInput () {
      this.showClose = !!this.phoneNumber
    },
    clearInput () {
      this.phoneNumber = null
      this.showClose = false
    }
  }
}
</script>

<style scoped>
  h6 {
    color: var(--gray);
    font-weight: lighter;
    text-align: center;
  }
  input {
    position: relative;
    width: 100%;
    border: 1px solid var(--gray);
    height: 3.1875rem;
    border-radius: 20px;
    transition: all 0.2s ease-out;
    padding: 0 2rem;
  }
  .form-control {
    position: relative;
  }
  .form-control i {
    background-image: url("../../assets/Login/close.svg");
    position: absolute;
    top: 14px;
    left: 10px;
    width: 25px;
    height: 25px;
    display: inline-block;
    cursor: pointer;
  }
  .form-control::before {
    content: " ";
    background-image: url("../../assets/Login/smartphone.svg");
    width: 12px;
    height: 20px;
    position: absolute;
    top: 14px;
    right: 10px;
  }
  input:focus {
    outline: none!important;
    border: 2px solid var(--dark);
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  ::placeholder {
    color: var(--gray);
  }
</style>
