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
import HelloWorld from "@/components/Home.vue";
import CatWorld from "@/components/CatCard.vue";

import NoniPicture from '../assets/kitten_set_1/Noni.jpg'
import TuckerPicture from '../assets/kitten_set_1/Tucker.jpg'
import ChanPicture from '../assets/kitten_set_1/Chan.jpg'

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
      ChanPicture,
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
