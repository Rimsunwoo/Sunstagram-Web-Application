<template>
  <div
    :class="`${filter} filter-item`"
    :style="`background-image: url(${$store.state.uploadData.postImage})`"
    @click="$emit('clickFilter', filter)"
  >
    <span
      style="
         {
          font-weight: 800;
          font-size: 25px;
        }
      "
      >{{ filter }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    filter: String,
  },
  methods: {},
};
</script>

<style>
.filter-item {
  width: 120px;
  height: 120px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
