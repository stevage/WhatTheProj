<template>
  <div id="guesser">
    <h1>What the proj?</h1>
    <div class="preamble">Do you have a Shapefile with no projection information? A GeoJSON with no CRS?
        <br>
        WhatTheProj can help you  guess the projection for a given point.
    </div>
    <h4>Someone gave me this projected coordinate:</h4>
    <label>X: </label><input type="text" v-model="x" v-on:change="change"><br>
    <label>Y: </label><input type="text" v-model="y" v-on:change="change">
    <br><br>

    <h4>I think it <i>should</i> be somewhere near: <br></h4>
    <label>Longitude: </label><input type="text" v-model="lon" v-on:change="change"><br>
    <label>Latitude: </label><input type="text" v-model="lat" v-on:change="change">
    <br>
    <div id="submit" v-on:click="guess" v-show="x && y && lon && lat">
      <b>Guess!</b>
    </div>
    <div v-if="status === 'failed'" id="result">
        Oh dear. I have no idea.
    </div>
    <div v-if="status === 'thinking'" id="result">
        Thinking!
    </div>
    <div v-if="status === 'found'" id="result">
        It might be...
        <div class="projection">
            <a v-if="spatialRefLink" :href="spatialRefLink" target="_blank">{{ result.projection }}</a>
            <span v-else>{{ result.projection }}</span>
        </div>
        <div class="definition">
            {{ result.def }}
        </div>
        (That gives a result {{ Math.round(result.distance) }}km from your target.)  
    </div>
  </div>
</template>

<script>
const dev = window.location.hash.match('#test');
const guessProjection = require('guess-projection');
export default {
  name: 'Guesser',
  data: function() { 
    return {
        x: dev ? 295114.372422643 : undefined,
        y: dev ? 5807879.97589356 : undefined,
        lon: dev ? 144.650115 : undefined,
        lat: dev ? -37.897072 : undefined,
        result: undefined,
        status: 'waiting'
      }
  }, computed: {
    spatialRefLink() {
        const p = this.result.projection;
        const parts = p.match(/^([^:]+):(.*)$/);
        if (parts) {
            return `http://spatialreference.org/ref/${parts[1].toLowerCase()}/${parts[2]}/`
        }
    }

  }, methods: {
    change() {
        this.status = 'waiting';
    },
    guess() {
      this.status = 'thinking';
      this.result = guessProjection(+this.x, +this.y, +this.lon, +this.lat)[0];
      if (this.result) {
          this.status = 'found';
      } else {
          this.status = 'failed';
      }
    },
  },mounted () {
    window.guesser = this;
  },
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

#guesser {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


#submit {
  padding:1em;
  cursor:pointer;
  color:darkblue;
  text-decoration:underline;
  font-size:20pt;
  
}
#submit:hover {
    color:pink;
}

.projection {
    font-size:40pt;
}

.definition {
    /* background:lightgrey; */
    color:maroon;
    padding:1em;
    text-align:center;
}

.preamble {
    font-size:12pt;
    color:grey;
}

</style>
