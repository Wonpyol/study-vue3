<template>
  <div><item-list></item-list></div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import ItemList from "@/components/ItemList.vue";
import EventBus from "@/utils/bus";
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
    EventBus.$emit('start:spinner')
    this.$store.dispatch('FETCH_JOBS')
        .then(() => {
          console.log("fetched")
          EventBus.$emit('end:spinner')
        })
        .catch(error => console.error(error))
  }
}
</script>

<style scoped>

</style>