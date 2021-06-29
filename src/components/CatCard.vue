<template>
  <div class="CatCardContainer">
    <h1>{{ name }}</h1>
    <p>Sex: {{ sex }}</p>
    <p>Birthday: {{ birthday }}</p>
    <p>Breed: {{ breed }}</p>
    <p>Color: {{ color }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CatWorld',
  props: {
    name: String,
    sex: String,
    birthday: String,
    breed: String,
    color: String,
    description: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.CatCardContainer {
    margin: 8px 8px;
    border: 2px dotted green;
    background-color: #c0f3e6;
}
</style>
