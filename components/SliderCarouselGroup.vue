<template>
  <div>
    <v-sheet
      class="mx-auto mt-9 "
      elevation="8"
      max-width="80%"
    >
      <v-slide-group
        class="pa-3"
        mandatory
        show-arrows
      >
        <v-slide-item
          v-for="(item,i) in items"
          :key="i"
        >
          <v-card
            class="mx-auto p-5"
            max-width="286"
          >
            <nuxt-link :to="'products/singlepro/' + item.id">
              <v-img
                class="white--text align-end "
                height="200px"
                :src="item.image"
              >
                <v-card-title></v-card-title>
              </v-img>

              <v-card-subtitle class="pb-5">
                {{item.category}}
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{item.title}}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  {{item.price }}$
                </v-btn>
              </v-card-actions>
            </nuxt-link>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style>
.card-carousel{
  width: 80%;
  padding: 100px;
}

</style>
