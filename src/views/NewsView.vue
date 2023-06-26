<template>
  <div><item-list></item-list></div>
</template>

<script>
import {mapGetters} from "vuex";
import ItemList from "@/components/ItemList.vue";
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
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>

</style>