<template lang="pug">
  #guesser
    h1 What the proj?
    .preamble
        | Do you have a Shapefile with no projection information? A GeoJSON with no CRS?
        br
        |         WhatTheProj can help you  guess the projection for a given point.
    h4 Someone gave me this projected coordinate:
    label X: 
    input(type='text' v-model='x' v-on:change='change')
    br
    label Y: 
    input(type='text' v-model='y' v-on:change='change')
    br
    h4 I think it <i>should</i> be somewhere near:
    label Longitude: 
    input(type='text' v-model='lon' v-on:change='change')
    br
    label Latitude: 
    input(type='text' v-model='lat' v-on:change='change')
    #submit(v-on:click='guess' v-show='x && y && lon && lat')
        a(href='#')
        b Guess!
    #result(v-if="status === 'failed'")
        | Oh dear. Couldn't find any projection that matched.
    #result(v-if="status === 'thinking'")
        | Thinking!
    #result(v-if="status === 'found'")
        | It might be...
        .projection
            a(v-if='spatialRefLink' :href='spatialRefLink' target='_blank') {{ result.projection }}
            span(v-else='') {{ result.projection }}
        .definition
            | {{ result.def }}
        | That gives a result {{ Math.round(result.distance) }}km from your target.
    #other-results(v-if="status === 'found'")
        | Or maybe:
        table
            tr(v-for='result in results.slice(1,10)')
                td.projection
                    a(v-if='spatialRefLink' :href='spatialRefLink' target='_blank') {{ result.projection }}
                    span(v-else='') {{ result.projection }}
                td.distance {{ Math.round(result.distance) }}km
                td.definition {{ result.def }}
                    
                    
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
        results: undefined,
        status: 'waiting'
      }
  }, computed: {
    spatialRefLink() {
        const p = this.result.projection;
        const parts = p.match(/^([^:]+):(.*)$/);
        if (parts) {
            return `http://spatialreference.org/ref/${parts[1].toLowerCase()}/${parts[2]}/`
        }
    }, result () {
        return this.results && this.results[0];
    }

  }, methods: {
    change() {
        this.status = 'waiting';
    },
    guess() {
      this.status = 'thinking';
      this.results = guessProjection(+this.x, +this.y, +this.lon, +this.lat)
        .filter(({ projection }) => !projection.match(/urn:ogc:def:crs:EPSG/));
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
a {
  color: #42b983;
}

#guesser {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  font-size:16pt;
}


#submit {
  padding:1em;
  cursor:pointer;
  /* color:darkblue; */
  /* text-decoration:underline; */
  font-size:20pt;
  
}
#submit:hover {
    color:pink;
}

#result .projection {
    font-size:40pt;
}

#result .definition {
    /* background:lightgrey; */
    font-family:Consolas,monaco,'Courier New', Courier, monospace;
    color:maroon;
    padding:1em;
    text-align:center;
    letter-spacing: -1px;
}

#other-results table {
    text-align:left;
    margin-left: auto;
    margin-right:auto;
    max-width:800px;
}

#other-results .projection {
}

#other-results .definition {
    color:maroon;
    font-size: 7pt;
    font-family:Consolas,monaco,'Courier New', Courier, monospace;
    letter-spacing: -1px;
}

.preamble {
    font-size:12pt;
    color:grey;
}

</style>
