<template>
  <p v-for="item in fetchNewsData">
    <a v-bind:href="item.url">{{ item.title }}</a>
    <small>{{ item.time}} by
      <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
    </small>
  </p>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      users: []
    }
  },
  computed: {
    ...mapGetters([
      'fetchNewsData'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>

</style>