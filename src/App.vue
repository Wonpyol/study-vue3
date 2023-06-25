<template>
  <div id="app">
    <Toolbar></Toolbar>
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
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

  /* router tracsition */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
