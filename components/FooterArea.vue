<template>
  <v-container fluid primary lighten-1 white--text>
      <v-container class="m-auto" >
        <v-row>
            <v-col
             class="mt-6"
             xl="3"
              lg="3"
               md="6"
                sm="12"
                 xs="12" >
                <v-row>
                    <h2 class="headline">Find us</h2>
                    <p class="mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </v-row>
                <v-row>
                    <p>
                        <v-icon color= "grey lighten-5">
                            mdi-domain
                        </v-icon>
                        9878/25 sec 9 rohini 35
                    </p>
                </v-row>
                <v-row>
                    <p>
                        <v-icon color= "grey lighten-5">
                            mdi-phone
                        </v-icon>
                        +91-9999878398
                    </p>
                </v-row>
                <v-row>
                    <p>
                        <v-icon color= "grey lighten-5">
                            mdi-email
                        </v-icon>
                        info@example.com
                    </p>
                </v-row>
            </v-col>
            <v-col
            class="mt-6"
             xl="3"
              lg="3"
               md="6"
                sm="12"
                 xs="12">

                    <v-row>
                        <h2 class="headline">Quick links</h2>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-4 white--text link" to="#" color="grey lighten-5">Image Rectoucing</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link" to="#">Clipping Path</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link" to="#">Hollow Man Montage</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link"  to="#">Ebay & Amazon</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link"  to="#">Hair Masking/Clipping</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link"  to="#">Image Cropping</nuxt-link>
                    </v-row>

            </v-col>
            <v-col
            class="mt-6"
             xl="3"
              lg="3"
               md="6"
                sm="12"
                 xs="12">

                    <v-row>
                        <h2 class="headline">Quick links</h2>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-4 white--text link" to="#" color="grey lighten-5">Image Rectoucing</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link" to="#">Clipping Path</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link" to="#">Hollow Man Montage</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link"  to="#">Ebay & Amazon</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link"  to="#">Hair Masking/Clipping</nuxt-link>
                    </v-row>
                    <v-row>
                        <nuxt-link class="mt-3 white--text link"  to="#">Image Cropping</nuxt-link>
                    </v-row>

            </v-col>

            <v-col
            class="mt-6"
             xl="3"
              lg="3"
               md="6"
                sm="12"
                 xs="12">

                <v-row>
                    <h2 class="headline">Follow us!</h2>
                </v-row>
                <v-row>
                    <p class="mt-4 white--text link" to="#" color="grey lighten-5">
                        <v-icon small color="grey lighten-5">mdi-twitter</v-icon>
                        Lorem Ipsum is simply dummy text of the printing...https://www.lipsum.com/
                    </p>
                </v-row>

                <v-row>
                    <p class="mt-4 white--text link" to="#" color="grey lighten-5">
                        <v-icon small color="grey lighten-5">mdi-twitter</v-icon>
                        Lorem Ipsum is simply dummy text of the printing...https://www.lipsum.com/
                    </p>
                </v-row>

                <v-row>
                    <p class="mt-4 white--text link" to="#" color="grey lighten-5">
                        <v-icon small color="grey lighten-5">mdi-twitter</v-icon>
                        Lorem Ipsum is simply dummy text of the printing...https://www.lipsum.com/
                    </p>
                </v-row>
            </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
        <v-footer
            color="primary lighten-1"
            padless
        >
            <v-row
            justify="center"
            no-gutters
            >
            <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                text
                rounded
                class="my-2"
            >
                {{ link }}
            </v-btn>
            <v-col
                class="primary lighten-2 py-4 text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>always reseved for ali afrasiabi</strong>
            </v-col>
            </v-row>
        </v-footer>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      links: [
        'HOME', 'ABOUT US', 'TEAM', 'SERVICES', 'BLOG', 'CONTACT US'
      ]
    }
  }
}
</script>

<style scoped>
    a {
        opacity: .8;
    }
    a:hover {
        opacity: 1;
    }
</style>
