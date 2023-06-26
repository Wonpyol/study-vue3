<template>
    <div class="user-container">
      <div>
        <i><font-awesome-icon icon="fa-solid fa-user-secret" /></i>
      </div>
      <div class="user-description">
        <slot name="username"></slot>
        <div class="time">
          <slot name="time"></slot>
        </div>
        <div>
          <slot name="karma"></slot>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "UserProfile"
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