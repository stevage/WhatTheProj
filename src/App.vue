<template>
  <div id="app">
    <Guesser></Guesser>
    <div id="footer">
      Built by Steve Bennett (<a href="https://twitter.com/stevage1/">@Stevage1</a>)
      <br>
      <a href="http://hire.stevebennett.me/">hire.stevebennett.me</a>
    </div>
  </div>
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

#footer {
  margin-top:2em;
}
</style>
