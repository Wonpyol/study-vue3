<template>
  <section>
    <div class="user-container">
      <div>
        <i><font-awesome-icon icon="fa-solid fa-user-secret" /></i>
      </div>
      <div class="user-decription">
        <router-link v-bind:to="`/user/${fetchItemInfoData.user}`">{{ fetchItemInfoData.user }}</router-link>
      </div>
      <div class="time">
        {{ fetchItemInfoData.time_ago}}
      </div>
    </div>
    <h2>{{ fetchItemInfoData.title }}</h2>
  </section>
  <section>
    <div v-html="fetchItemInfoData.content"></div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters([
        'fetchItemInfoData'
    ])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FECTCH_ITEMINFO', id)
  },
}

</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.time {
  font-size: 0.7rem;
}
.user-decription {
  padding-left: 8px;

}

</style>