<template>
  <div class="hello">
    Ovo je moj kod, a banana je {{ status_rentify }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  async mounted() {
    let data = await fetch("http://localhost:3001/rentify");
    console.log(await data.json())
  },
  data() {
    let html_varijable = {
      status_rentify: "ne znam"
    }
    return html_varijable;
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
</style>
