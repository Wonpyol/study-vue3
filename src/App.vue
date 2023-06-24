<template>
  <div id="app">
    <Toolbar></Toolbar>
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </router-view>
<!--    <transition name="page">-->
<!--      <router-view></router-view>-->
<!--    </transition>-->
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
export default {
  components:{
    Toolbar,
  }
}
</script>

<style scoped>
#app {

  /* router tracsition */

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
}
</style>
