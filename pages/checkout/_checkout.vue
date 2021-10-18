<template>
  <div style="min-height:100vh">
    <Table :cartItems="getCart" />
  </div>
</template>

<script>
import Table from '../../components/Table'
export default {
  components: { Table },
  computed: {
    getCart () {
      return this.$store.getters.getCart
    }
  },
  methods: {
    test () {
    }
  }
}
</script>

<style>

</style>
