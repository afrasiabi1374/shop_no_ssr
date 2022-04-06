<template>
  <v-container  class="mx-auto d-flex justify-center page-min-height">
    <v-progress-circular
      v-if="loading"
      :size="50"
      color="primary"
      indeterminate
    />

    <v-row v-else class="single">
      <v-col lg="6">
        <ImageMagnifier
          class="magnifier"
          :src="pro.image"
          :zoom-src="pro.image"
          width="80%"
          height="500"
          zoom-width="500"
          zoom-height="400"
        />
      </v-col>

      <v-col lg="6" class="pro-text">
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
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ImageMagnifier } from 'vue-image-magnifier'
export default {
  components: { ImageMagnifier },
  data () {
    return {
      id: this.$route.params.singlepro,
      pro: '',
      loading: false
    }
  },
  computed: {

  },
  beforeMount () {
    this.showPro()
  },
  methods: {
    async showPro () {
      this.loading = true
      await this.$store.dispatch('fetchSinglePro', this.id)
      this.pro = this.$store.getters.getSingle
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
.page-min-height {
  min-height: 100vh;
}
</style>
