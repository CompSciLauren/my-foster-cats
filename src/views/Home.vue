<template>
  <div class="home">
    <img width="1000" alt="Three kittens looking directly at the camera" src="../assets/home_image.jpg"/>
    <HelloWorld msg="My Foster Cats" />
    <div class="CatCardsContainer">
      <CatWorld
        class="CatCardItem"
        :img_src="NoniPicture"
        name="Noni"
        sex="Male"
        birthday="04/01/2021"
        breed="Tabby"
        color="White and Tabby"
        description="Noni is a gentle soul. He’s very sweet and a bit more calm compared to his kitten housemates. He likes to observe what’s going on first rather than jumping straight into the action. Although he can be shy at first, once he’s had time to acclimate, he’s good to go. He loves playing with his friends and toys, especially if it involves chasing. When he isn’t hyper and wanting to play, he likes to lay in the room where his kitten and human friends are, sometimes even on your lap or at least close by."
      />
      <CatWorld
        class="CatCardItem"
        :img_src="TuckerPicture"
        name="Tucker"
        sex="Male"
        birthday="04/01/2021"
        breed="Tabby"
        color="White and Tabby"
        description="Tucker is a very sweet boy who loves to lay in your lap whenever he isn’t running around exploring and playing. He prefers to lay right in your lap, but if that’s not available, he will lay on one leg or even a back instead! He prefers hanging out in whatever room the humans are in and enjoys wrestling with his fellow kittens. He also loves chasing after and jumping up to reach his favorite wand toy. Whenever he wants a break or gets tired, he seeks out a nice human to lay on and usually continues attempting to play a little as he slowly but surely passes out. Tucker would do really well in a home where he can spend some quality time with people regularly. He would also benefit from a playmate since he enjoys socializing and being active."
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Home.vue";
import CatWorld from "@/components/CatCard.vue";

import NoniPicture from '../assets/kitten_set_1/Noni.jpg'
import TuckerPicture from '../assets/kitten_set_1/Tucker.jpg'

export default {
  name: "Home",
  components: {
    HelloWorld,
    CatWorld,
  },
  data() {
    return {
      NoniPicture,
      TuckerPicture,
    }
  }
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
