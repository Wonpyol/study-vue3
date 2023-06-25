<template>
  <ul class="contents-list">
    <li v-for="ask in fetchAskData" class="contents-post">
      <div class="contents-point">
        {{ ask.points}}
      </div>
      <div>
        <p class="contents-title">
          <router-link v-bind:to="`/item/${ask.id}`">{{ ask.title}}</router-link>
        </p>
        <small class="contents-link-text">
          <small>{{ ask.points }} points by {{ask.user}} {{ask.time_ago}} | {{ ask.comments_count }} comments</small>
        </small>
      </div>
    </li>
  </ul>
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