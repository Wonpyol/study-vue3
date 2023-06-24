<template>
  <p v-for="ask in fetchAskData">
<!--    <a v-bind:href="ask.url">{{ ask.title}}</a>-->
    <router-link v-bind:to="`/item/${ask.id}`">{{ ask.title}}</router-link>
    <small>{{ ask.score}} by
      <router-link v-bind:to="`/user/${ask.user}`">{{ ask.user }}</router-link>
    </small>
  </p>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AskView",
  computed: {
    ...mapGetters([
        'fetchAskData'
    ])
  },
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