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
        description="Description coming soon."
      />
      <CatWorld
        class="CatCardItem"
        :img_src="TuckerPicture"
        name="Tucker"
        sex="Male"
        birthday="04/01/2021"
        breed="Tabby"
        color="White and Tabby"
        description="Description coming soon."
      />
      <CatWorld
        class="CatCardItem"
        :img_src="ChanPicture"
        name="Chan"
        sex="Male"
        birthday="04/01/2021"
        breed="Siamese"
        color="Cream"
        description="Description coming soon."
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
