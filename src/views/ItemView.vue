<template>
  <div>
    <section>
      <div>
        <user-profile>
          <template v-slot:username>
            <router-link v-bind:to="`/user/${fetchItemInfoData.user}`">{{ fetchItemInfoData.user }}</router-link>
          </template>
          <template v-slot:time>{{ fetchItemInfoData.time_ago }}</template>
        </user-profile>
      </div>
    </section>
    <section>
      <h2>{{ fetchItemInfoData.title }}</h2>
    </section>
    <section>
      <div v-html="fetchItemInfoData.content"></div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UserProfile from "@/components/UserProfile.vue";
export default {
  components: {
    UserProfile
  },
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
.user-description {
  padding-left: 8px;

}

</style>