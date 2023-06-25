<template>
  <ul class="contents-list">
    <li v-for="item in fetchNewsData" class="contents-post">
      <div class="contents-point">
        {{ item.points}}
      </div>
      <div>
        <p class="contents-title">
          <a v-bind:href="item.url">
            {{ item.title }}
          </a>
        </p>
        <small class="contents-link-text">
          by
          <router-link v-bind:to="`/user/${item.user}`" class="contents-link-text">{{ item.user }}</router-link>
        </small>
      </div>
    </li>

  </ul>
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