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
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import Spinner from "@/components/Spinner.vue";
import EventBus from "@/utils/bus";
export default {
  components:{
    Toolbar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    EventBus.$on('start:spinner', this.startSpinner)
    EventBus.$on('end:spinner', this.endSpinner)
  },
  //이벤트 객체가 쌓이지 않게 해제
  beforeDestroy() {
    EventBus.$off('start.spinner', this.startSpinner);
    EventBus.$off('end.spinner', this.endSpinner);
  },

}

</script>

<style>
body {
  padding: 0;
  margin: 0;
}


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
