<template>
  <div><item-list></item-list></div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import ItemList from "@/components/ItemList.vue";
export default {
  name: "JobsView",
  components: {
    ItemList
  },
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