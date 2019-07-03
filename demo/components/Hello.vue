<template>
  <div class="hello">
    <h2>welcome</h2>
    <h1>{{ msg }}</h1>
    <button v-tooltip:[`bottom-right`]="'this is a text'">Hover me</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'generator-vue-plugin'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
