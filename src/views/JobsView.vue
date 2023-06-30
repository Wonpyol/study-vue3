<template>
  <div><item-list></item-list></div>
</template>

<script>
import ItemList from "@/components/ItemList.vue";
import ListMixin from "@/mixins/ListMixin";

export default {
  name: "JobsView",
  components: {
    ItemList
  },
  mixins:[ListMixin]
}
</script>

<style scoped>

</style>