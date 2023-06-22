<template>
  <div v-for="data in this.$store.state.news">{{ data }}</div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>

</style>