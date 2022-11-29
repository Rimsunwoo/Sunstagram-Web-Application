<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${userImage})` }"
      ></div>
      <span class="profile-name">{{ $store.state.postData[index].name }}</span>
    </div>
    <div
      class="post-body"
      :class="`${$store.state.postData[index].filter}`"
      :style="{ backgroundImage: `url(${postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ $store.state.postData[index].likes }}</p>
      <p>
        <strong>{{ $store.state.postData[index].name }}</strong>
        {{ $store.state.postData[index].content }}
      </p>
      <p class="date">{{ $store.state.postData[index].date }}</p>
    </div>
  </div>
  <hr style="border: solid 1px whitesmoke" />
</template>

<script>
export default {
  props: {
    index: Number,
  },
  data() {
    return {
      userImage: this.$store.state.postData[this.index].userImage,
      postImage: this.$store.state.postData[this.index].postImage,
    };
  },
};
</script>

<style>
.post {
  width: 100%;
}

.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}

.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}

.post-header {
  height: 30px;
  padding: 10px;
}

.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}

.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
