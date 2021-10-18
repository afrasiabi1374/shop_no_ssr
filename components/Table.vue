<template>
  <div>
    <v-simple-table v-if="finalTotal !== 0">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              count
            </th>
            <th class="text-left">
              price
            </th>
            <th class="text-left">
              image
            </th>
            <th class="text-left">
              total
            </th>
            <th class="text-left">
              delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cartItems"
            :key="item.id"
          >
            <td>{{ item.title }}</td>
            <td style="">
              <button @click="increment (item.id)" style="font-size:1.5em;cursor: pointer;">
                +
              </button>
              <span style="font-size:1.5em;cursor: pointer;">{{ item.quantity }}</span>
              <button @click="decriment(item.id)" style="font-size:1.5em;cursor: pointer;">
                -
              </button>
            </td>
            <td>{{ item.price }} $</td>
            <td><img width="100px" :src="item.image" alt="product-image"></td>
            <td width="300px">{{ item.price*item.quantity }}</td>
            <td style="cursor: pointer" @click="remove(item.id)"><v-icon>mdi-delete</v-icon></td>
          </tr>
          <tr>
            <td>
              <h1>
                final total : {{ finalTotal }}
              </h1>
            </td>
          <tr>
            <v-btn @click="clearCart()" class="">
              clearCart
            </v-btn>
            <v-btn class="ml-3" color="green" @click="finalize()">
              finalize
            </v-btn>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <img v-else src="https://www.no-fea.com/front/images/empty-cart.png" class="d-block mx-auto " alt="">
  </div>
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

</style>
