<template>
  <div class="flex align-center justify-center mx-auto my-auto col-8 card">
    <h1 class="title mb-3">Bem vindo ao projeto Skore-challenge.</h1>
    <p class="paragraph">
      Caso você já possua credenciais <NuxtLink :to="{ name: 'login' }" class="bold">clique aqui</NuxtLink> para entrar no sistema, <br/>
      caso contrário gere suas credenciais <NuxtLink :to="{ name: 'login-create' }" class="bold">aqui</NuxtLink>.

      <br/><br/>
      <NuxtLink :to="{ name: 'content' }" class="bold">CONTEUDO</NuxtLink>.
    </p>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {

    }
  }
}
</script>

<style>

</style>