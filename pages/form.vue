<template>
  <div>
    <h1>form</h1>
    <label>firstName:</label>
    <app-textt-input v-model="firstName"/>
  </div>
</template>

<script>
import AppTexttInput from '~/components/ui/AppTexttInput.vue'
export default {
  name: 'INDEX',
  components: { AppTexttInput },
  data () {
    return {
      firstName: ''
    }
  },
  watch: {
    firstName (value) {
      console.log('firstName is :', value)
    }
  }
}
</script>

<style>

</style>
