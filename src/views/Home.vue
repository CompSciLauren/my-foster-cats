<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="My Foster Cats"/>
    <div class="CatCardsContainer">
      <CatWorld class="CatCardItem" name="Noni" sex="Male" birthday="04/01/2021" breed="Tabby" color="White and Tabby" description="Text."/>
      <CatWorld class="CatCardItem" name="Tucker" sex="Male" birthday="04/01/2021" breed="Tabby" color="White and Tabby" description="Text."/>
      <CatWorld class="CatCardItem" name="Chan" sex="Male" birthday="04/01/2021" breed="Siamese" color="Cream" description="Text."/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Home.vue'
import CatWorld from '@/components/CatCard.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CatWorld
  }
}
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