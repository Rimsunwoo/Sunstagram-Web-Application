<template>{{ $route.params.id }}aaa</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        id: " ",
        name: "",
        profileImg: "",
        profileMsg: "",
        posts: [],
      },
    };
  },
  methods: {
    access() {
      axios.post("/profile", this.user).then((a) => {
        if (a.data == false) {
          this.$router.push("/404");
        } else {
          console.log(a.data);
        }
      });
    },
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("logedInUser")) == null) {
      this.$router.push("/home");
    } else {
      this.user.id = this.$route.params.id;
      this.access();
    }
  },
};
</script>

<style></style>
