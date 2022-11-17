<template>
  <div class="flex align-center justify-center mx-auto my-auto col-8 card">
    <h1 class="title text-center mb-3">Bem vindo ao projeto Skore-challenge.</h1>

    <FormInput type="button" value="Gerar novas credenciais" classes="button" @click="generateCredentials"/>

    <div class="code">
      <!-- <p></p> -->
      <pre class="code">
      
      </pre>
    </div>

    <p class="paragraph text-center">
      <NuxtLink :to="{ name: 'login' }" class="bold">Clique aqui</NuxtLink> para ir para o login.
    </p>
  </div>
</template>

<script>
import credentials from 'static/auth.json';
import FormInput from '~/components/FormInput.vue';


export default {
  components: { FormInput },
  layout: 'auth',
  data() {
    return {

    }
  },
  created() {
    console.log(credentials);
  },
  methods: {
    generateCredentials() {
      // const email = this.$generateRandomString() + '@gmail.com';
      // const password = this.$generateRandomString();
      
      // credentials.push({ email: email, password: password });
    }
  }
}
</script>

<style>

</style>