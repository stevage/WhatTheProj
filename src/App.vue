<template>
  <Guesser></Guesser>
</template>

<script>
import Guesser from './components/Guesser.vue'
const app = {
  name: 'app',
  mounted () {
    window.app = this;
  }, components: {
    Guesser
  }
}
export default app;
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin:3em;
  padding:3em;
}
</style>
