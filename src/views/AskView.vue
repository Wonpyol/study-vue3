<template>
  <div><item-list></item-list></div>
</template>

<script>
import {mapGetters} from "vuex";
import ItemList from "@/components/ItemList.vue";
import EventBus from "@/utils/bus";

export default {
  name: "AskView",
  components: {
    ItemList
  },
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
    EventBus.$emit('start:spinner')
    this.$store.dispatch('FETCH_ASK')
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