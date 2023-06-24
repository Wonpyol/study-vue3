<template>
  <div>
    <p>id : {{ fetchUserInfoData.id}}</p>
    <p>about : {{ fetchUserInfoData.about}}</p>
    <p>created_time : {{ fetchUserInfoData.create_time}}</p>
    <p>created : {{ fetchUserInfoData.created}}</p>
    <p>karma : {{ fetchUserInfoData.karma}}</p>


  </div>
</template>
<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import {fetchUserInfo} from "../api";

export default defineComponent({
  name: "UserView",
  // methods: {fetchUserInfo},
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