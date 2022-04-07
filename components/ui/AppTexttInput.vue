<template>
  <div>
    <input v-bind="$attrs" :value="value" v-on="{...$listeners, }" @input="input" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'APPTEXTINPUT',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    input (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>
