<template>
  <v-container fluid class="mt-6">
    <v-simple-table v-if="finalTotal !== 0">
      <template v-slot:default>
        <thead>
          <tr class="table-content">
            <th class="text-left">
              <h2 class="headline">
                Name
              </h2>
            </th>
            <th class="text-left">
              <h2 class="headline">
                count
              </h2>
            </th>
            <th class="text-left">
              <h2 class="headline">
                price
              </h2>
            </th>
            <th class="text-left">
              <h2 class="headline">
                image
              </h2>
            </th>
            <th class="text-left">
              <h2 class="headline">
                total
              </h2>
            </th>
            <th class="text-left">
              <h2 class="headline">
                delete
              </h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cartItems"
            :key="item.id"
            class="table-content"
          >
            <td  style="font-size:1.2em;cursor: pointer;">{{ item.title }}</td>
            <td class="pro-count body-1">
              <button @click="increment (item.id)" style="font-size:1.5em;cursor: pointer;">
                +
              </button>
              <span style="font-size:1.5em;cursor: pointer;">{{ item.quantity }}</span>
              <button @click="decriment(item.id)" style="font-size:1.5em;cursor: pointer;">
                -
              </button>
            </td>
            <td style="font-size:1.5em;cursor: pointer;">{{ item.price }} $</td>
            <td><img width="100px" :src="item.image" alt="product-image"></td>
            <td width="300px" style="font-size:1.5em;cursor: pointer;">{{ item.price*item.quantity }}$</td>
            <td style="cursor: pointer" @click="remove(item.id)"><v-icon>mdi-delete</v-icon></td>
          </tr>
          <tr class="table-content-2">
            <td >
              <h1>
                final total : {{ finalTotal }}$
              </h1>
            </td>
            <td>
              <v-btn @click="clearCart()" class="">
                clearCart
              </v-btn>
            </td>
            <td>
              <v-btn class="ml-3" color="green" @click="finalize()">
                finalize
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <img v-else src="https://www.no-fea.com/front/images/empty-cart.png" class="d-block mx-auto " alt="">
  </v-container>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  props: ['cartItems'],
  computed: {
    finalTotal () {
      return this.$store.getters.finalTotal
    }
  },
  methods: {
    increment (id) {
      this.$store.commit('increment', id)
    },
    decriment (id) {
      this.$store.commit('decriment', id)
    },
    remove (id) {
      this.$store.commit('delete', id)
    },
    clearCart () {
      this.$store.commit('clearCart')
    },
    finalize () {
      if (this.$store.state.token) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'finalization is succesfull',
          showConfirmButton: false,
          timer: 1000
        })
      } else {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'to finalize you must login',
          showConfirmButton: false,
          timer: 2500
        })
        this.$router.push('/signin')
      }
    }
  }
}
</script>

<style>
  .pro-count {
    width: 100px;
  }
  .table-content {
    height: 100px;
  }
  .table-content-2 {
    height: 70px;
  }
  .finalize-container {
    height: 170px;
  }
</style>
