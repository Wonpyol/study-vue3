<template>
  <div v-for="data in this.$store.state.asks">{{ data }}</div>
</template>

<script>
export default {
  name: "AskView",
  data() {
    return {
      users : []
    }
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style scoped>

</style>