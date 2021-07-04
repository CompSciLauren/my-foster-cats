<template>
  <div class="FosterHallOfFame">
    <h1>{{ msg }}</h1>
    <p>
      Here are all of the cats I have had the pleasure of fostering in the past,
      who have now been adopted into their forever homes.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
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
</style>
