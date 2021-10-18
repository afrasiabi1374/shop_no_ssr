<template>
  <div>
    <SliderCarousel />
    <h1 class="my-6 ml-4">
      jewels
    </h1>
    <SliderCarouselGroup :items="someJewel" />
    <h1 class="my-6 ml-4">
      womans
    </h1>
    <v-img class="mt-6" src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/8/AmazonStores/A21TJRUUN4KGV/4d152116ae9fe12cf7ac4fa4607f21f0.w1200.h500.jpg" />
    <SliderCarouselGroup :items="womanShirts" />
    <h1 class="my-6 ml-4">
      electronics
    </h1>
    <v-img class="mt-6 mx-auto" width="100%" height="67vh" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c7eec699158985.6054d05796162.jpg" />
    <SliderCarouselGroup :items="electronics" />
  </div>
</template>

<script>
import SliderCarousel from '../components/SliderCarousel'
import SliderCarouselGroup from '../components/SliderCarouselGroup'
export default {
  components: { SliderCarousel, SliderCarouselGroup },
  computed: {
    someJewel () {
      return this.$store.getters.getProByCat('jewelery')
    },
    womanShirts () {
      return this.$store.getters.getProByCat("women's clothing")
    },
    electronics () {
      return this.$store.getters.getProByCat('electronics')
    }
  },
  mounted () {
    this.fetcher()
  },
  methods: {
    async fetcher () {
      try {
        await this.$store.dispatch('fetchAllPro')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
