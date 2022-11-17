<template>
  <div>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  // head() {
  //   return {
  //     title: ''
  //   }
  // },
  data() {
    return {

    }
  },
  
}
</script>

<style>

</style>