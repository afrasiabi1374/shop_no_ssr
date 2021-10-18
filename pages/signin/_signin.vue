<template>
  <div class="signin-container">
    <form class="login-form">
      <v-text-field
        v-model="userPass.user"
        label="username"
        hide-details="auto"
      />
      <v-text-field
        v-model="userPass.pass"
        label="password"
        hide-details="auto"
      />
      <br>
      <v-btn @click="sendUserReq(userPass)">
        login
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userPass: {
        user: 'eve.holt@reqres.in',
        pass: 'cityslicka'
      }
    }
  },
  methods: {
    async sendUserReq (usernamePassword) {
      await this.$store.dispatch('logIn', usernamePassword)
      this.userPass.user = ''
      this.userPass.pass = ''
    }
  }
}
</script>

<style>
    .signin-container{
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-form{
        border: 1px solid gray;
        border-radius: 10px;
        padding: 40px;
    }
</style>
