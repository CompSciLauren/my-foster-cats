<template>
  <div class="FosterHallOfFame">
    <img width="1000" alt="Three kittens looking directly at the camera" src="../assets/home_image.jpg" />
    <HelloWorld msg="Foster Hall of Fame" />
    <div class="CatCardsContainer">
      <CatWorld
        class="CatCardItem"
        :img_src="ChanPicture"
        name="Chan"
        sex="Male"
        birthday="04/01/2021"
        breed="Siamese"
        color="Cream"
        description="Chan is hilarious and always in the middle of whatever action is going on. He is the most active kitten in his group and he loves all toys and games. He makes friends easily with kittens and humans, even warming up to strangers relatively quickly. When he wants something, you can see the focus in his eyes and he will do his best to achieve whatever goal is in his mind. He absolutely loves food and will attempt in vain to steal human food if he thinks he has a chance. Whenever he hears or sees a can of wet food being opened, he meows a lot and runs around excitedly. He has a very soft and raspy meow. For a kitten who is normally so rambunctious and brave, his meow is just adorable. When he finally tires himself out, he likes to sleep in or near your lap."
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/FosterHallOfFame.vue";
import CatWorld from "@/components/CatCard.vue";

import ChanPicture from '../assets/kitten_set_1/Chan.jpg'

export default {
  name: "FosterHallOfFame",
  components: {
    HelloWorld,
    CatWorld,
  },
  data() {
    return {
      ChanPicture,
    }
  },
};
</script>

<style scoped>
.CatCardsContainer {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}

.CatCardItem {
  grid-row: 1 / span 2;
}
</style>
