<template>
  <ul class="contents-list">
    <li v-for="(item, index) in listItems" class="contents-post">
      <div class="contents-point">
        {{ item.points || index+1}}
      </div>
      <div>
        <p class="contents-title">
          <template v-if="item.domain">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
        </p>
        <small class="contents-link-text">
          by
          <template v-if="item.user">
            <router-link v-bind:to="`/user/${item.user}`" class="contents-link-text">{{ item.user }}</router-link>
          </template>
          <template v-else>
            <router-link v-bind:to ="`/item/${item.id}`" class="contents-link-text">{{ item.domain }}</router-link>
          </template>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "ItemList",
  created() {
  },
  computed:{
    listItems() {
      return this.$store.state.list;
    }
  }
}
</script>

<style scoped >

a.router-link-exact-active {
  text-decoration: underline;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
.contents-link-text {
  color: #828282;
}
.contents-list {
  margin: 0;
  padding: 0;
}
.contents-post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.contents-point {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.contents-title {
  margin: 0;
}
</style>