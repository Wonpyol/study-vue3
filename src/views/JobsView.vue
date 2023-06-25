<template>
  <ul class="contents-list">
    <li v-for="(job, index) in fetchJobsData" class="contents-post">
      <div class="contents-point">
        {{index}}
      </div>
      <div>
        <p class="contents-title">
          <a v-bind:href="job.url">{{ job.title }}</a>
        </p>
        <small class="contents-link-text">
          <small>{{ job.time_ago }} by {{ job.domain }}</small>
        </small>
      </div>
    </li>
  </ul>

</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: "JobsView",
  computed: {
    //state 값 가져오는 3가지 방법
    //1: mapGetters
    ...mapGetters([
        'fetchJobsData'
    ]),
    //2 mapState
    // ...mapState({
    //   jobs: state => state.jobs
    // }),
    //3
    // jobs() {
    //   return this.$store.getters;
    // },
  },
  data() {
    return {
      users : []
    }
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>

</style>