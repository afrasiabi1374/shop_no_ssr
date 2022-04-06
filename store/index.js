import Swal from 'sweetalert2'
import axios from 'axios'
function updateLocalStorage (cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}
export const state = {
  allPro: [],
  singlePro: '',
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  log: 'login',
  token: ''
}
export const getters = {
  getProByCat: state => (cat) => {
    return state.allPro.filter(pro => pro.category === cat)
  },

  getSingle: state => state.singlePro,

  getProById: state => (id) => {
    return state.allPro.find(pro => pro.id === id)
  },
  getCart: (state) => {
    return state.cart
  },
  finalTotal (state) {
    return state.cart.reduce((total, p) => {
      console.log('total=>>>', total)
      return total + (p.price * p.quantity)
    }, 0)
  },
  getAllTitle: (state) => {
    let items = []
    items = state.allPro.map(pro => pro.title)
    return items
  }
}
export const mutations = {
  someJewel (state, response) {
    state.someJewel = response
  },
  allPro (state, response) {
    state.allPro = response
    // console.log('alilililililili', state.allPro)
  },
  singlePro (state, response) {
    state.singlePro = response
    console.log('single', state.singlePro)
  },
  addToCart (state, product) {
    const item = state.cart.find(item => item.id === product.id)
    if (!item) {
      state.cart.push({
        ...product,
        quantity: 1
      })
    } else {
      item.quantity++
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'added to cart',
      showConfirmButton: false,
      timer: 1000
    })
    updateLocalStorage(state.cart)

    // console.log(state.cart)
  },
  increment (state, id) {
    const item = state.cart.find(item => item.id === id)
    item.quantity++
    updateLocalStorage(state.cart)
  },
  decriment (state, id) {
    const item = state.cart.find(item => item.id === id)
    if (item.quantity > 1) {
      item.quantity--
    }
    updateLocalStorage(state.cart)
  },
  delete (state, id) {
    const index = state.cart.findIndex(item => item.id === id)
    // console.log(index)
    if (index !== -1) {
      state.cart.splice(index, 1)
    }
    updateLocalStorage(state.cart)
  },
  clearCart (state) {
    state.cart = []
    updateLocalStorage(state.cart)
  },
  submitToken (state, token) {
    state.log = 'logout'
    state.token = token
  },
  logout (state) {
    state.token = ''
  }
}
export const actions = {
  async fetchSomeJewel ({ commit }) {
    await axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => {
        commit('someJewel', res.data)
        // console.log('جواهر:', res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  },
  async fetchAllPro ({ commit }) {
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      await commit('allPro', res.data)
      // console.log('همه ', res.data)
    } catch (error) {
      console.error(error)
    }
  },
  async fetchSinglePro ({ commit }, id) {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      console.log('=>>>>>>>>>>>>>>>>>>>>>>>>', res)
      await commit('singlePro', res.data)
      // console.log('همه ', res.data)
    } catch (error) {
      console.error(error)
    }
  },
  async logIn ({ commit }, params) {
    try {
      console.log('params', params)
      const res = await axios.post('https://reqres.in/api/login', {
        email: params.user,
        password: params.pass
      })
      // console.log(res.data)
      await commit('submitToken', res.data)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'you are loged in',
        showConfirmButton: false,
        timer: 1700
      })
    } catch (err) {
      console.log(err)
      Swal.fire('enter user and pass currectly')
    }
  }
}
