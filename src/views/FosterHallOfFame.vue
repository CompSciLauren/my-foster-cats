<template>
  <div class="FosterHallOfFame">
    <img width="1000" alt="Three kittens looking directly at the camera" src="../assets/home_image.jpg" />
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
