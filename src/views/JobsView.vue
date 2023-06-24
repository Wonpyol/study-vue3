<template>
  <p v-for="job in fetchJobsData">
    <a v-bind:href="job.url">{{ job.title }}</a>
    <small>{{ job.time }} by {{ job.domain }}</small>
  </p>

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