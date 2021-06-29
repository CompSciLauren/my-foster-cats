<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Welcome! This is my (<a
        href="https://twitter.com/CompSciLauren"
        target="_blank"
        rel="noopener"
        >@CompSciLauren</a
      >)'s personal website featuring my foster cats. It was created to share my
      passion for fostering and get practice with the Vue.js framework.
    </p>
    <h2>What is fostering?</h2>
    <p>
      Fostering is taking in an animal and caring for them in your home until
      they're ready to be adopted into their forever home with another person.
      This frees up space at local shelters so they can take in more animals in
      need. It also gives animals a chance to become more socialized with
      humans. Fostering helps with this and a lot more even. I currently foster
      with
      <a href="https://kittycityks.com/" target="_blank" rel="noopener"
        >Kitty City KS</a
      >, which rescues cats from high-kill shelters (places where they euthanize
      animals for non-medical reasons) and finds them loving homes.
    </p>
    <h2>My Current Foster Cats</h2>
    <p>
      These are the kittens I'm caring for currently. To see if these or any
      other kittens are available for adoption, please see the
      <a href="https://kittycityks.com/" target="_blank" rel="noopener"
        >Kitty City KS</a
      >
      website. This is a personel website and I do not always update it
      immediately. Thank you!
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
