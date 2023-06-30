<template>
  <div><item-list></item-list></div>
</template>

<script>
import ItemList from "@/components/ItemList.vue";
import EventBus from "@/utils/bus";
import ListMixin from "@/mixins/ListMixin";

export default {
  components : {
    ItemList
  },
  mixins:[ListMixin]
}
</script>

<style scoped>

</style>