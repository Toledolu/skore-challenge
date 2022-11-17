<template>
  <div class="wrapper flex">
    <Nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Minha descrição do serviço' },
      ],
    }
  },
  
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 400px;
}
</style>