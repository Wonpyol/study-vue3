<!--<template>-->
<!--&lt;!&ndash;  <ul class="contents-list">&ndash;&gt;-->
<!--&lt;!&ndash;    <li v-for="item in this.$listData" class="contents-post">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="contents-point">&ndash;&gt;-->
<!--&lt;!&ndash;        {{ item.points}}&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div>&ndash;&gt;-->
<!--&lt;!&ndash;        <p class="contents-title">&ndash;&gt;-->
<!--&lt;!&ndash;          <a v-bind:href="item.url">&ndash;&gt;-->
<!--&lt;!&ndash;            {{ item.title }}&ndash;&gt;-->
<!--&lt;!&ndash;          </a>&ndash;&gt;-->
<!--&lt;!&ndash;        </p>&ndash;&gt;-->
<!--&lt;!&ndash;        <small class="contents-link-text">&ndash;&gt;-->
<!--&lt;!&ndash;          by&ndash;&gt;-->
<!--&lt;!&ndash;          <router-link v-bind:to="`/user/${item.user}`" class="contents-link-text">{{ item.user }}</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;        </small>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </li>&ndash;&gt;-->
<!--&lt;!&ndash;  </ul>&ndash;&gt;-->
<!--</template>-->

<!--<script>-->
<!--import {mapGetters, mapState} from "vuex";-->
<!--export default {-->
<!--  name: "ItemListView",-->
<!--  data() {-->
<!--    return {-->
<!--      listData: "",-->
<!--    }-->
<!--  },-->
<!--  // created() {-->
<!--  //   const contentsName = this.$route.name;-->
<!--  //   if (contentsName === 'news') {-->
<!--  //     this.$store.dispatch('FETCH_NEWS')-->
<!--  //   } else if (contentsName === 'ask') {-->
<!--  //     this.$store.dispatch('FETCH_ASK')-->
<!--  //   } else if (contentsName === 'jobs') {-->
<!--  //     this.$store.dispatch('FETCH_JOBS');-->
<!--  //   } else {-->
<!--  //     console.error("not found route name")-->
<!--  //   }-->
<!--  // },-->
<!--  // computed: {-->
<!--  //   ...mapGetters(['fetchAskData', 'fetchJobsData', 'fetchNewsData'])-->
<!--  // }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->


<!--a {-->
<!--  color: #34495e;-->
<!--  text-decoration: none;-->
<!--}-->
<!--a:hover {-->
<!--  color: #42b883;-->
<!--  text-decoration: underline;-->
<!--}-->
<!--a.router-link-exact-active {-->
<!--  text-decoration: underline;-->
<!--}-->
<!--.contents-list {-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--}-->
<!--.contents-post {-->
<!--  list-style: none;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  border-bottom: 1px solid #eee;-->
<!--}-->
<!--.contents-point {-->
<!--  width: 80px;-->
<!--  height: 60px;-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  color: #42b883;-->
<!--}-->
<!--.contents-title {-->
<!--  margin: 0;-->
<!--}-->

<!--.contents-link-text {-->
<!--  color: #828282;-->
<!--}-->

<!--</style>-->