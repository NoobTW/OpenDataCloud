(function(t){function e(e){for(var n,s,c=e[0],i=e[1],l=e[2],u=0,h=[];u<c.length;u++)s=c[u],r[s]&&h.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ca5c6f53"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var o,i=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,a[1](s)}r[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,i.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/OpenDataCloud/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),r=a.n(n);r.a},"2a46":function(t,e,a){"use strict";var n=a("c3a8"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("ce5b"),o=a.n(r),s=(a("bf40"),a("aa47")),c=a.n(s);n["default"].use(o.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md",lang:{locales:{zhHant:c.a},current:"zhHant"}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("v-toolbar",{attrs:{app:"","clipped-left":t.clipped,"scroll-off-screen":""}},[a("v-btn",{attrs:{icon:""},on:{click:t.home}},[a("v-icon",{attrs:{color:"indigo"}},[t._v("home")])],1),a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),a("v-spacer"),a("v-text-field",{attrs:{label:"搜尋",color:"blue","append-icon":"search",clearable:""},on:{"click:append":t.searching},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-content",[a("router-view")],1)],1)},l=[],u=(a("386d"),{name:"App",data:function(){return{clipped:!1,title:"開放資料文字雲",search:""}},methods:{searching:function(){if(""!=this.search){var t=[];t.push(this.search),this.$store.dispatch("submitSearch",t),this.$router.push({path:"/search"})}},home:function(){this.$store.dispatch("submitSearch",""),this.$store.dispatch("submitCountys",[]),this.$router.push({path:"/"})}},computed:{isLoading:function(){return this.$store.state.isLoading}}}),d=u,h=(a("034f"),a("2877")),f=Object(h["a"])(d,i,l,!1,null,null,null);f.options.__file="App.vue";var p=f.exports,v=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"",row:"","mb-3":""}},[a("v-flex",{attrs:{xs5:""}},[t._l(t.secondSearch,function(e,n){return[a("v-btn",{key:n,attrs:{large:"",color:"success"},on:{click:function(a){t.relating(e,t.select,t.flag=!1,t.back=t.secondSearch.length-n)}}},[t._v(t._s(e))]),t._v(" > \n        ")]})],2),a("v-flex",{attrs:{xs2:""}},[a("h2",[t._v("目前共: "+t._s(t.dataNum)+" 筆")])]),a("v-flex",{attrs:{xs4:"","align-center":""}},[a("v-combobox",{attrs:{items:t.items,label:"選擇縣市",multiple:"",chips:"",color:"#0D47A1"},on:{input:t.changeselect},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),a("v-flex",{attrs:{"justify-center":"","ml-5":"",xs1:""}},[t.secondSearch.length>1?a("v-btn",{attrs:{color:"indigo",large:"",outline:""},on:{click:t.searching}},[t._v("列表")]):t._e()],1)],1),0!=t.relateword.length?a("v-layout",{attrs:{row:"","justify-space-between":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-card",{attrs:{dark:""}},[a("v-btn",{attrs:{block:"",dark:"",large:"",color:"deep-orange"},on:{click:function(e){t.relating(t.relateword[0],[],t.flag=!0)}}},[t._v(t._s(t.relateword[0]))])],1)],1),a("v-flex",{attrs:{xs2:""}},[a("v-card",{attrs:{dark:""}},[a("v-btn",{attrs:{block:"",dark:"",large:"",color:"deep-orange lighten-3"},on:{click:function(e){t.relating(t.relateword[1],[],t.flag=!0)}}},[t._v(t._s(t.relateword[1]))])],1)],1)],1):t._e(),a("div",{attrs:{id:"wordcloud"}},[a("vue-word-cloud",{attrs:{words:t.words,color:function(t){var e=t[1];return e>100?"#74482a":e>50?"#d1b022":e>20?"#461e47":"#31a50d"},"enter-animation":t.enter},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-tooltip",{attrs:{top:""}},[a("div",{staticStyle:{cursor:"pointer"},attrs:{slot:"activator"},on:{click:function(a){t.onWordClick(e.word)}},slot:"activator"},[t._v(t._s(e.text))]),a("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.text)),a("br"),t._v("("+t._s(e.weight)+")")])])]}}])})],1),0!=t.relateword.length?a("v-layout",{attrs:{row:"","justify-space-between":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-card",{attrs:{dark:""}},[a("v-btn",{attrs:{block:"",dark:"",large:"",color:"red darken-2"},on:{click:function(e){t.relating(t.relateword[2],[],t.flag=!0)}}},[t._v(t._s(t.relateword[2]))])],1)],1),a("v-flex",{attrs:{xs2:""}},[a("v-card",{attrs:{dark:""}},[a("v-btn",{attrs:{block:"",dark:"",large:"",color:"deep-orange lighten-1"},on:{click:function(e){t.relating(t.relateword[3],[],t.flag=!0)}}},[t._v(t._s(t.relateword[3]))])],1)],1)],1):t._e()],1)},m=[],b=(a("6762"),a("2fdb"),{name:"wordcloud",data:function(){return{words:[["敬請",20],["稍等",81],["資料",72],["快要",120],["跑出來",64],["請您",76],["耐心",91],["等待",86],["真的",34],["非常",55],["抱歉",93],["五秒鐘",117],["即將",99],["完成",39],["十分",89],["感謝",55]],data:[],enter:{opacity:0,transform:"scale3d(0.1, 0.1, 1)"},unclick:["敬請","稍等","資料","快要","跑出來","請您","耐心","等待","真的","非常","抱歉","五秒鐘","即將","完成","十分","感謝"],items:["臺北","新北","桃園","新竹市","臺南","宜蘭","新竹","臺中","高雄","金門","南投","嘉義","澎湖","臺東","屏東","基隆","苗栗","彰化","雲林","嘉義縣","花蓮","連江"],select:[],selectNoun:"",relateword:[],relatecolor:["red darken-2","deep-orange lighten-1","deep-orange lighten-3","deep-orange"],secondSearch:["縣市"],dataNum:0}},methods:{onWordClick:function(t){this.unclick.includes(t[0])||this.secondSearch.includes(t[0])?console.log(t[0]):(this.secondSearch.push(t[0]),this.relating(t[0],this.select))},searching:function(){this.secondSearch.length>1&&(this.secondSearch.shift(),this.$store.dispatch("submitSearch",this.secondSearch),this.$store.dispatch("submitCountys",this.select),this.$router.push({path:"/search"}))},relating:function(t,e){var a=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this.$store.dispatch("loading",!0),this.select=e,this.selectNoun=t,1==n&&(this.secondSearch=[],this.secondSearch.push("縣市"),this.secondSearch.push(this.selectNoun));for(var o=0;o<r-1;o++)this.secondSearch.pop();var s=1==n,c=this;this.$http.post("".concat("https://opendatacloud.herokuapp.com","/data/county"),{data:this.select,key:this.selectNoun,relate:s,back:r}).then(function(t){if("縣市"==c.selectNoun)c.words=t.data.data;else if(t.data.data.length>80){console.log(t.data.data.length);var e=t.data.data;c.words=e.filter(function(t){return t[1]<200&&t[1]>7}),c.words=c.words.filter(function(t){return!c.secondSearch.includes(t[0])})}else c.words=t.data.data,c.words=c.words.filter(function(t){return!c.secondSearch.includes(t[0])});c.dataNum=t.data.dataNum,a.dataNum<20&&a.searching(),c.$http.post("".concat("https://opendatacloud.herokuapp.com","/data/keyword"),{key:a.selectNoun}).then(function(t){c.relateword=t.data,a.$store.dispatch("loading",!1)})})},changeselect:function(){var t=this;this.$store.dispatch("loading",!0),this.secondSearch=[],this.secondSearch.push("縣市"),this.$http.post("".concat("https://opendatacloud.herokuapp.com","/data/county"),{data:this.select}).then(function(e){t.words=e.data.data,t.selectNoun="",t.dataNum=e.data.dataNum,t.relateword=[],t.$store.dispatch("loading",!1)})}},created:function(){var t=this;this.$store.dispatch("loading",!0),this.$http.post("".concat("https://opendatacloud.herokuapp.com","/data/county"),{data:this.select}).then(function(e){t.words=e.data.data,t.dataNum=e.data.dataNum,t.$store.dispatch("loading",!1)})}}),w=b,_=(a("2a46"),Object(h["a"])(w,g,m,!1,null,"1233959c",null));_.options.__file="Home.vue";var k=_.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-card",[a("v-toolbar",{attrs:{color:"teal",dark:""}},[a("v-toolbar-title",{staticClass:"text-xs-center"},[t._v("資料來源 : ")])],1),a("v-list",[a("v-list-tile",{on:{click:function(e){t.change("")}}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("全部")])],1)],1),t._l(t.DataSet,function(e,n,r){return a("v-list-tile",{key:r,on:{click:function(e){t.change(n)}}},[a("v-list-tile-content",[a("v-badge",{attrs:{color:"light-green lighten-1",dark:""}},[a("v-list-tile-title",[t._v(t._s(n)+" \n                ")]),a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("\n                  "+t._s(e)+"\n                ")])],1)],1),a("v-list-tile-action",[t.select!=n?a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("\n                  star_border\n                ")]):a("v-icon",{attrs:{color:"yellow darken-2"}},[t._v("\n                  star\n                ")])],1)],1)})],2)],1)],1),a("v-flex",{attrs:{xs8:""}},t._l(t.filterData,function(e,n){return a("v-card",{key:n,staticClass:"white--text",staticStyle:{float:"left",margin:"1%"},attrs:{width:"48%",color:"green darken-1"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v(t._s(e.資料集名稱))]),a("br"),a("div",[t._v(t._s(e["資料來源(部會單位)"]))])]),a("v-card-actions",[a("v-btn",{attrs:{flat:"",dark:""}},[t._v("Find Out")])],1)],1)}))],1)],1)],1)},S=[],x=(a("ac6a"),{name:"search",data:function(){return{select:""}},methods:{change:function(t){this.select=t}},created:function(){""==this.$store.state.search&&this.$router.push({path:"/"}),this.$store.dispatch("getSearching",{search:this.$store.state.search,countys:this.$store.state.countys})},computed:{Search:function(){return this.$store.state.search},Data:function(){return this.$store.state.result},DataSet:function(){return this.$store.state.resultset},filterData:function(){var t=this;if(""==this.select)return this.Data;var e=[];return this.Data.forEach(function(a){a["資料來源(部會單位)"]==t.select&&e.push(a)}),e}}}),$=x,N=Object(h["a"])($,y,S,!1,null,null,null);N.options.__file="Search.vue";var O=N.exports;n["default"].use(v["a"]);var C=new v["a"]({routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/search",name:"search",component:O}]}),j=a("2f62"),L=a("bc3a"),E=a.n(L);n["default"].use(j["a"]);var T=new j["a"].Store({state:{search:[],countys:[],result:[],resultset:{},isLoading:!1},mutations:{SEARCH:function(t,e){t.search=e},COUNTYS:function(t,e){t.countys=e},RESULT:function(t,e){t.result=e},RESULTSET:function(t,e){t.resultset=e},LOADING:function(t,e){t.isLoading=e}},actions:{loading:function(t,e){t.commit("LOADING",e)},submitSearch:function(t,e){t.commit("SEARCH",e)},submitCountys:function(t,e){t.commit("COUNTYS",e)},getSearching:function(t,e){var a=e.search,n=e.countys;t.commit("LOADING",!0),E.a.post("".concat("https://opendatacloud.herokuapp.com","/data/search"),{search:a,countys:n}).then(function(e){t.commit("RESULT",e.data.result),t.commit("RESULTSET",e.data.dict),t.commit("LOADING",!1)})}}}),A=a("c817"),D=a.n(A),F=a("a7fe"),P=a.n(F),R=a("9062"),U=a.n(R),H=(a("e40d"),a("9483"));Object(H["a"])("".concat("/OpenDataCloud/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d5e8"),a("d1e7");E.a.defaults.headers.post["Content-Type"]="application/json",n["default"].use(P.a,E.a),n["default"].component(D.a.name,D.a),n["default"].component("Loading",U.a),n["default"].config.productionTip=!1,new n["default"]({router:C,store:T,render:function(t){return t(p)}}).$mount("#app")},c21b:function(t,e,a){},c3a8:function(t,e,a){}});
//# sourceMappingURL=app.34d3778a.js.map