<template>
  <div><item-list></item-list></div>
</template>

<script>
import {mapGetters} from "vuex";
import ItemList from "@/components/ItemList.vue";

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
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style scoped>

</style>