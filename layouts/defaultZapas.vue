<template>
  <v-app>
    <div :class="sandwichClass">
      <div class="d-flex justify-center">
        <div class="signIn-signUp" @click="$router.push('/signin'); sandwich()">
          <span v-if="token" @click="logout()">logout</span>
          <span v-else  >login</span>
          <v-icon large aria-hidden="false">
            mdi-account
          </v-icon>
        </div>
        <nuxt-link to="/checkout">
          <div class="cart" @click="sandwich">
            shop cart
            <v-icon large aria-hidden="false">
              mdi-basket
            </v-icon>
          </div>
        </nuxt-link>
    </div>
    </div>
    <div :class="mask" @click="sandwich"></div>
    <div style="width:100%;display:inline-flex;flex-wrap: nowrap;justify-content: center">
      <div
        color="white  accent-4"
        dense
        style="width:100%;display:flex;flex-direction:column;position:relative;z-index:3;background-color:white;margin: auto"
        @click="autoCompleteShow=false"
      >
        <div class="header-container">
          <v-icon class="pl-2 d-lg-none d-xl-none" large aria-hidden="false" @click="sandwich">
            mdi-menu
          </v-icon>
            <nuxt-link class="title-container" to="/">
              <img class="logo mx-6" src="https://hs3-cf.behtarino.com/media/business_icons/em-jfdeilefuf-logo.jpg">
            </nuxt-link>
            <v-text-field
              class="search"
              append-icon="mdi-icon-search"
              label = "search in gallery"
              @input="autoComplete"
              v-model="autoCompleteWord"
            />
            <div v-show="autoCompleteShow" class="autoCompleteText">
              <ul>
                <li v-for="(item, i) in autoCompleteOutput" :key="i" class="mt-6 autoCompleteItem" @click="$router.push(`/Products/singlepro/${item.id}`)" > {{ item.title }} </li>
              </ul>
            </div>
          <div class="d-none d-lg-flex d-xl-flex">
            <div class="signIn-signUp" @click="$router.push('/signin')">
              <span v-if="token" @click="logout">logout</span>
              <span v-else  >login</span>
              <v-icon large aria-hidden="false">
                mdi-account
              </v-icon>
            </div>
            <nuxt-link to="/checkout">
              <div class="cart">
                shop cart
                <v-icon large aria-hidden="false">
                  mdi-basket
                </v-icon>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div>
          <div class="nav">
            <div class="nav-item">
              <v-icon large aria-hidden="false">
                mdi-tshirt-v-outline
              </v-icon>
              <span class="nav-text">clothes</span>
              <div class="child-menu">
                <h3>
                  <nuxt-link to="/products/men's clothing">
                    womans
                  </nuxt-link>
                </h3>
                <h3><nuxt-link to="/products/women's clothing">mans</nuxt-link></h3>
              </div>
            </div>
            <nuxt-link to="/products/jewelery">
              <div class="nav-item">
                <v-icon large aria-hidden="false">
                  mdi-diamond-stone
                </v-icon>
                <span class="nav-text">jewels</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/products/electronics">
              <div class="nav-item">
                <v-icon large aria-hidden="false">
                  mdi-desktop-classic
                </v-icon>
                <span class="nav-text">electronics</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/products">
              <div class="nav-item">
                <v-icon large aria-hidden="false">
                  mdi-harddisk
                </v-icon>
                <span class="nav-text">hard disks</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
    <br>
    <footer-area/>
  </v-app>
</template>

<script>
import FooterArea from '~/components/FooterArea'
export default {
  components: {
    FooterArea
  },
  data () {
    return {
      autoCompleteShow: false,
      autoCompleteWord: '',
      autoCompleteOutput: [],
      showSandwich: false,
      sandwichClass: 'sandwich-hide',
      mask: ''
    }
  },
  computed: {
    token () {
      return this.$store.state.token
    },
    items () {
      return this.$store.state.allPro
    }
  },
  methods: {
    sandwich () {
      this.showSandwich = !this.showSandwich
      if (this.showSandwich === true) {
        this.sandwichClass = 'sandwich-show'
        this.mask = 'mask'
      } else {
        this.sandwichClass = 'sandwich-hide'
        this.mask = ''
      }
    },
    logout () {
      this.$store.commit('logout')
    },
    async autoComplete () {
      this.autoCompleteShow = true
      this.autoCompleteOutput = await this.items.filter(item => item.title.toLowerCase().includes(this.autoCompleteWord.toLowerCase()))
      console.log('auto complete', this.autoCompleteOutput)
      if (this.autoCompleteWord === '') {
        this.autoCompleteShow = false
      }
    }
  }
}
</script>
<style scoped>
  a{
    text-decoration: none;
  }
  .nav-item{
    cursor: pointer;
    position: relative;
    padding: 10px;
  }

  .child-menu{
    position: absolute;
    padding-top: 7px;
    width: 100%;
    background-color: white;
    flex-direction: column;
    z-index: 2;
    opacity: 0;
    border-radius: 8px;
    min-height: 100px;
    transition: all .5s;
    display: flex;
    visibility: hidden;
  }

  .nav-item:hover > .child-menu {
    visibility: visible;
    opacity: 1;
    transition: all .5s;
  }
  .header-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .title-container{
    display: flex;
    position: relative;
    margin-right: 10%;
  }
  .logo{
    display: inline-block;
    width: 13%;
  }

  .search {
    position: absolute;
    width: 60%;
    top: 12%;
    left: 20%;
  }
  @media  (max-width:1264px) {
    .search {
      margin-left: 10%;
      top: 15%;
    }
    .title-container {
    }
    .logo {
      width: 22%;
    }
  }
  .sign-cart-container{
    position: absolute;
    left: 87%;
  }
  .signIn-signUp{
    cursor: pointer;
    border-radius: 7px;
  }
  .cart{
    cursor: pointer;
    border-radius: 7px;

  }
  .clothes-accessoy{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:25px ;
    justify-content: space-evenly;
  }
  .nav-text{
    font-size: 1.2em;
  }

.cursor-pointer{
  cursor: pointer;
}
.autoCompleteText{
  position: absolute;
  width: 60%;
  height: 400px;
  z-index: 2;
  background-color: aliceblue;
  left: 20%;
  top: 80%;
  overflow: scroll;
}

.autoCompleteItem {
  cursor: pointer;
}
.sandwich-hide{
    transition: all .4s ease-in-out;
  transform: translateX(-700px);
  position: fixed;
  width: 300px;
  min-height: 100vh;
  background-color: lightblue;
  display: inline-flex;
  z-index: 5;
}
.sandwich-show{
  z-index: 5;
  transition: all .4s ease-in-out;
  position: fixed;
  width: 300px;
  min-height: 100vh;
  background-color: lightblue;
  transform: translateX(0);
}
.mask{
  z-index: 4;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color:rgba(0, 0, 0, 0.808);
  transition: all .6s ease-in-out;
}
</style>
