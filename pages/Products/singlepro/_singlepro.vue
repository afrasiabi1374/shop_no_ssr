<template>
  <div class="container">
    <v-progress-circular
      v-if="loading"
      :size="50"
      color="primary"
      indeterminate
    />

    <div v-else class="single">

      <ImageMagnifier
        class="magnifier"
        :src="pro.image"
        :zoom-src="pro.image"
        width="80%"
        height="500"
        zoom-width="500"
        zoom-height="400"
      />
      <div class="pro-text">
        <h1>
          name : {{ pro.title }}
        </h1>
        <h2>description:</h2>
        <p>
          {{ pro.description }}
        </p>
        <h2>price : {{ pro.price }}$</h2>
        <v-btn
          class="ma-2"
          color="success"
          @click="addToCart (pro)"
        >
          add to cart
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { ImageMagnifier } from 'vue-image-magnifier'
export default {
  components: { ImageMagnifier },
  data () {
    return {
      id: '',
      pro: '',
      loading: false
    }
  },
  computed: {

  },
  mounted () {
    this.showPro()
  },
  methods: {
    async showPro () {
      this.loading = true
      this.id = await this.$route.params.singlepro
      this.pro = await this.$store.getters.getProById(Number(this.id))
      this.loading = false
    },
    addToCart (pro) {
      this.$store.commit('addToCart', pro)
    }
  }
}
</script>

<style scoped>

.single {
  display: flex;
  width: 100%;
}
@media (max-width: 700px) {
  .single {
    flex-direction: column;
  }

}
.pro-text {
  width: 60%;
}
.single{
  margin-top: 100px;
  min-height: 100vh;
  display: flex;
}

</style>
