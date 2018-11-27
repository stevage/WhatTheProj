(function(t){function e(e){for(var r,i,o=e[0],u=e[1],l=e[2],v=0,p=[];v<o.length;v++)i=o[v],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"25ce":function(t,e,n){"use strict";var r=n("d7a1"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Guesser"),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[t._v("\n    Built by Steve Bennett ("),n("a",{attrs:{href:"https://twitter.com/stevage1/"}},[t._v("@Stevage1")]),t._v(")\n    "),n("br"),n("a",{attrs:{href:"http://hire.stevebennett.me/"}},[t._v("hire.stevebennett.me")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"guesser"}},[n("h1",[t._v("What the proj?")]),t._m(0),n("h4",[t._v("Someone gave me this projected coordinate:")]),n("label",[t._v("X: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.x,expression:"x"}],attrs:{type:"text"},domProps:{value:t.x},on:{change:t.change,input:function(e){e.target.composing||(t.x=e.target.value)}}}),n("br"),n("label",[t._v("Y: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.y,expression:"y"}],attrs:{type:"text"},domProps:{value:t.y},on:{change:t.change,input:function(e){e.target.composing||(t.y=e.target.value)}}}),n("br"),t._m(1),n("label",[t._v("Longitude: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lon,expression:"lon"}],attrs:{type:"text"},domProps:{value:t.lon},on:{change:t.change,input:function(e){e.target.composing||(t.lon=e.target.value)}}}),n("br"),n("label",[t._v("Latitude: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],attrs:{type:"text"},domProps:{value:t.lat},on:{change:t.change,input:function(e){e.target.composing||(t.lat=e.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.x&&t.y&&t.lon&&t.lat,expression:"x && y && lon && lat"}],attrs:{id:"submit"},on:{click:t.guess}},[n("a",{attrs:{href:"#"}}),n("b",[t._v("Guess!")])]),"failed"===t.status?n("div",{attrs:{id:"result"}},[t._v("Oh dear. Couldn't find any projection that matched.")]):t._e(),"thinking"===t.status?n("div",{attrs:{id:"result"}},[t._v("Thinking!")]):t._e(),"found"===t.status?n("div",{attrs:{id:"result"}},[t._v("It might be..."),n("div",{staticClass:"projection"},[t.spatialRefLink?n("a",{attrs:{href:t.spatialRefLink,target:"_blank"}},[t._v(t._s(t.result.projection))]):n("span",[t._v(t._s(t.result.projection))])]),n("div",{staticClass:"definition"},[t._v(t._s(t.result.def))]),t._v("That gives a result "+t._s(Math.round(t.result.distance))+"km from your target.")]):t._e(),"found"===t.status?n("div",{attrs:{id:"other-results"}},[t._v("Or maybe:"),n("table",t._l(t.results.slice(1,10),function(e){return n("tr",[n("td",{staticClass:"projection"},[t.spatialRefLink?n("a",{attrs:{href:t.spatialRefLink,target:"_blank"}},[t._v(t._s(e.projection))]):n("span",[t._v(t._s(e.projection))])]),n("td",{staticClass:"distance"},[t._v(t._s(Math.round(e.distance))+"km")]),n("td",{staticClass:"definition"},[t._v(t._s(e.def))])])}))]):t._e()])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preamble"},[t._v("Do you have a Shapefile with no projection information? A GeoJSON with no CRS?"),n("br"),t._v("        WhatTheProj can help you  guess the projection for a given point.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[t._v("I think it "),n("i",[t._v("should")]),t._v(" be somewhere near:")])}];const u=window.location.hash.match("#test"),l=n("7f50");var c={name:"Guesser",data:function(){return{x:u?295114.372422643:void 0,y:u?5807879.97589356:void 0,lon:u?144.650115:void 0,lat:u?-37.897072:void 0,results:void 0,status:"waiting"}},computed:{spatialRefLink(){const t=this.result.projection,e=t.match(/^([^:]+):(.*)$/);if(e)return`http://spatialreference.org/ref/${e[1].toLowerCase()}/${e[2]}/`},result(){return this.results&&this.results[0]}},methods:{change(){this.status="waiting"},guess(){this.status="thinking",this.results=l(+this.x,+this.y,+this.lon,+this.lat).filter(({projection:t})=>!t.match(/urn:ogc:def:crs:EPSG/)),this.result?this.status="found":this.status="failed"}},mounted(){window.guesser=this}},v=c,p=(n("25ce"),n("2877")),d=Object(p["a"])(v,i,o,!1,null,"2ac97725",null);d.options.__file="Guesser.vue";var f=d.exports;const h={name:"app",mounted(){window.app=this},components:{Guesser:f}};var m=h,_=m,g=(n("034f"),Object(p["a"])(_,a,s,!1,null,null,null));g.options.__file="App.vue";var b=g.exports;r["a"].config.productionTip=!1,window.v=new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,n){},d7a1:function(t,e,n){}});
//# sourceMappingURL=app.563128fe.js.map