<template>
  <div class="d-flex flex-wrap mt-6 pro-container">
    <v-radio-group row>
      <v-radio label="sort asc" value="sort asc" />
      <v-radio label="sort desc" value="sort desc" />
      <v-radio label="expensive" value="expensive" />
      <v-radio label="cheap" value="cheap" />
    </v-radio-group>
    <v-container :fluid="true">
      <v-row>
        <v-col
        xl="3"
        md="4"
        sm="6"
        xs="12"
        v-for="(item,i) in proByCategory"
        :key="i">
        <v-card

          class="mx-auto mt-6"
        >
          <nuxt-link :to="'singlepro/'+item.id">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.image"
            />
            <v-card-subtitle class="pb-0">
              {{ item.category }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ item.title }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="orange"
                text
              >
                {{ item.price }}$
              </v-btn>
            </v-card-actions>
          </nuxt-link>
        </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  computed: {
    proByCategory () {
      return this.$store.getters.getProByCat(this.$route.params.products)
    }
  },
  methods: {
    async fetcher () {
      await this.$store.dispatch('fetchAllPro')
    }
  },
  beforeMount () {
    this.fetcher()
  }
}
</script>

<style>
  .pro-container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  a{
    text-decoration: none;
    color: black;
  }
</style>
