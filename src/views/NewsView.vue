<template>
  <div><item-list></item-list></div>
</template>

<script>
import {mapGetters} from "vuex";
import ItemList from "@/components/ItemList.vue";
import EventBus from "@/utils/bus";
import bus from "@/utils/bus";

export default {
  data() {
    return {
      users: []
    }
  },
  components : {
    ItemList
  },
  computed: {
    ...mapGetters([
      'fetchNewsData'
    ])
  },
  created() {
    EventBus.$emit('start:spinner')
    this.$store.dispatch('FETCH_NEWS')
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