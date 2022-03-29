<template>
  <v-app>
    <div :class="sandwichClass" ></div>
    <div :class="mask" @click="sandwich"></div>
    <div style="display:inline-flex;flex-wrap: nowrap;justify-content: space-around">
      <div
        color="white  accent-4"
        dense
        width="100%"
        style="display:flex;flex-direction:column;position:relative;z-index:3;background-color:white"
        @click="autoCompleteShow=false"
      >
        <div class="header-container">
          <v-app-bar-nav-icon @click="sandwich"/>
          <v-toolbar-title class="title-container">
            <nuxt-link to="/">
              <img class="logo" src="https://hs3-cf.behtarino.com/media/business_icons/em-jfdeilefuf-logo.jpg">
            </nuxt-link>
          </v-toolbar-title>
          <div class="search-container">
            <v-text-field
              class="search"
              append-icon="mdi-icon-search"
              label = "search"
              @input="autoComplete"
              v-model="autoCompleteWord"
            />
            <div v-show="autoCompleteShow" class="autoCompleteText">
              <ul>
                <li v-for="(item, i) in autoCompleteOutput" :key="i" class="mt-6 autoCompleteItem" @click="$router.push(`/Products/singlepro/${item.id}`)" > {{ item.title }} </li>
              </ul>
            </div>
          </div>
          <div class="sign-cart-container">
            <div class="signIn-signUp">
              <span v-if="token" @click="logout">logout</span>
              <span v-else @click="$router.push('/signin')">login</span>
              <v-icon aria-hidden="false">
                mdi-account
              </v-icon>
            </div>
            <nuxt-link to="/checkout">
              <div class="cart">
                shop cart
                <v-icon aria-hidden="false">
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
    <div class="d-flex justify-space-around mt-6 footer pb-4">
      <div class="d-flex flex-column ">
        <h2 class="mt-2">
          with mobit
        </h2>
        <h4 class="mt-2 cursor-pointer">
          about mobit
        </h4>
        <h4 class="mt-2 cursor-pointer">
          contact mobit
        </h4>
        <h4 class="mt-2 cursor-pointer">
          mobit jobs
        </h4>
        <h4 class="mt-2 cursor-pointer">
          be a seller
        </h4>
      </div>
      <div class="d-flex flex-column">
        <h2 class="mt-2">
          customer services
        </h2>
        <h4 class="mt-2 cursor-pointer">
          the rules
        </h4>
        <h4 class="mt-2 cursor-pointer">
          Comprehensive guide
        </h4>
        <h4 class="mt-2 cursor-pointer">
          FAQ
        </h4>
        <h4 class="mt-2 cursor-pointer">
          pravicy
        </h4>
      </div>
      <div class="d-flex flex-column">
        <h2 class="mt-2">
          Shopping Guide
        </h2>
        <h4 class="mt-2 cursor-pointer">
          Payment methods
        </h4>
        <h4 class="mt-2 cursor-pointer">
          Shipping methods
        </h4>
        <h4 class="mt-2 cursor-pointer">
          Cancellation and return of goods
        </h4>
        <h4 class="mt-2 cursor-pointer">
          Product authenticity guarantee
        </h4>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
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
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    z-index: 2;
    opacity: 0;
    border-radius: 8px;
    min-height: 100px;
    transition: all .5s;
  }

  .nav-item:hover .child-menu {
    opacity: 1;
    transition: all .5s;
  }
  .header-container{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .title-container{
    display: flex;
  }
  .logo{
    display: inline-block;
    width: 20%;
  }
  .search-container{
    width: 71%;
  }
  .search{
    position: absolute;
    width: 60%;
    top: 12%;
    left: 20%;
  }
  .sign-cart-container{
    display: flex;
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
  .footer{
    border-top: rgba(red, green, rgba(146, 146, 146, 0.452), alpha);
    border-bottom: rgba(red, green, rgba(146, 146, 146, 0.452), alpha);
    top: 100%;
    background-color: teal;
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
    transition: all 1s;
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
  transition: all 1s;
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
  transition: all 1s;
}
</style>
