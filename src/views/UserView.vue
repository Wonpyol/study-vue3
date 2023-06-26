<template>
  <div>
    <user-profile>
      <template v-slot:username>{{ fetchUserInfoData.id }}</template>
      <template v-slot:time>{{ fetchUserInfoData.created }}</template>
      <template v-slot:karma>{{ fetchUserInfoData.karma }}</template>
    </user-profile>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import UserProfile from "@/components/UserProfile.vue";
export default defineComponent({
  name: "UserView",
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters([
        'fetchUserInfoData'
    ])
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERINFO', userName)
  },
})
</script>

<style scoped>

</style>