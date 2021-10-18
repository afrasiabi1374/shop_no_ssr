<template>
  <v-carousel
    class="slider"
    :show-arrows="true"
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    />
    <h1>sdsdsd</h1>
  </v-carousel>
</template>
<script>

export default {
  data () {
    return {
      items: [
        { src: 'http://nowrozealijewellers.com/wp-content/uploads/2020/07/slider1.jpg' },
        { src: 'https://www.shilpalifestyle.com/assets/home-slider/home_slider_HOME_PAGE_-3.jpg' },
        { src: 'https://shapur.com/wp-content/uploads/2016/03/jewelry-slider-3.jpg' },
        { src: 'https://www.drakesjewellers.co.uk/app/uploads/2019/09/Web-Banner_L01_COMP_1500x440.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
    .slider{
        margin-top:20px;
    }
</style>
