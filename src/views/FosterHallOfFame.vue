<template>
  <div class="FosterHallOfFame">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Foster Hall of Fame" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/FosterHallOfFame.vue";

export default {
  name: "FosterHallOfFame",
  components: {
    HelloWorld,
  },
};
</script>
