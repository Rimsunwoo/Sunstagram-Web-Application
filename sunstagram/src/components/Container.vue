<template>
  <div>
    <div class="post-box" v-if="$store.state.step == 'postPage'">
      <Post :index="i" v-for="(post, i) in $store.state.postData" :key="i" />
      <button v-if="$store.state.step == 'postPage'">더보기</button>
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="$store.state.step == 'filterPage'">
      <div
        :class="`upload-image ${choseFilter}`"
        :style="{
          backgroundImage: `url( ${$store.state.uploadData.postImage}) `,
        }"
      ></div>
      <div class="filters">
        <Filter
          :filter="filters[i]"
          v-for="(filter, i) in filters"
          :key="i"
          @clickFilter="filterChange($event)"
        />
      </div>
    </div>
    <!--글작성페이지-->
    <div v-if="$store.state.step == 'writePage'">
      <div
        :class="`upload-image ${choseFilter}`"
        :style="{
          backgroundImage: `url( ${$store.state.uploadData.postImage}) `,
        }"
      ></div>
      <div class="write">
        <textarea @change="contentChange" class="write-box">write!</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import Filter from "./Filter.vue";
export default {
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      choseFilter: "",
    };
  },
  methods: {
    filterChange(a) {
      this.choseFilter = a;
      this.$store.commit("filterChange", a);
    },
    contentChange(a) {
      this.$store.commit("contentChange", a.target.value);
    },
  },
  components: {
    Post,
    Filter,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
  background-position: center;
  margin-top: 30px;
  margin-bottom: 10px;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
  margin-bottom: 60px;
}
.filter-1 {
  width: 120px;
  height: 120px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
.post-box {
  margin-bottom: 50px;
}
</style>
