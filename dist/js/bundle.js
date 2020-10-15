!function(e){function t(t){for(var n,r,i=t[0],a=t[1],c=0,u=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(d&&d(t);u.length;)u.shift()()}var n={},o={0:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(){return Promise.resolve()},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=a;r(r.s=0)}([function(e,t,n){Promise.resolve().then(n.t.bind(null,1,7)),Promise.resolve().then(n.t.bind(null,4,7))},function(e,t,n){function o(e,t,n,o,r,i,a){try{var c=e[i](a),d=c.value}catch(e){return void n(e)}c.done?t(d):Promise.resolve(d).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,d,"next",e)}function d(e){o(a,r,i,c,d,"throw",e)}c(void 0)}))}}var i,a,c,d,u={bathroom:n(2),emptymall:n(3)},s=document.querySelector("#fileSelector"),l=document.querySelector("#applyEffect"),f=document.querySelector(".uploading"),v=document.querySelector(".loading"),h=document.querySelector(".voila"),p=document.querySelector(".progress_bar"),y=document.querySelector("#downloadLink"),m=document.querySelector("#preview"),w=document.querySelector(".loading_state"),g=document.querySelector("#regenerate"),b=document.querySelector("#amount_slider"),L=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(2,1764e3,44100),S=b.value;function q(){return _.apply(this,arguments)}function _(){return(_=r((function*(){try{update_progress("55","Applying audio effects..."),c=yield u[d](a,S),update_progress("90","Converting to wav...");var e=yield O(c),t=(window.URL||window.webkitURL).createObjectURL(e);console.log(t),y.setAttribute("href",t),m.setAttribute("src",t),g.disabled=!0,window.location.hash="section=voila"}catch(e){update_progress("0","An error occured")}}))).apply(this,arguments)}function O(e){return console.log("bufferToWav()"),new Promise((function(t,n){var o=new Worker("/js/recorder.worker.js");o.postMessage({command:"init",config:{sampleRate:44100,numChannels:1}}),o.onmessage=function(e){var n=e.data;t(n)},o.postMessage({command:"record",buffer:[e.getChannelData(0),e.getChannelData(1)]}),o.postMessage({command:"exportWAV",type:"audio/wav"})}))}l.addEventListener("click",function(){var e=r((function*(e){if(d=l.dataset.filter,yt_id=l.dataset.ytid,!Object.keys(u).includes(d))return alert("ERREUR: L'effet choisi (".concat(d,") n'existe pas.")),void(window.location.hash="");var t,n,o;f.classList.add("hidden"),v.classList.remove("hidden"),l.disabled=!0,""!=yt_id?(update_progress("10","Downloading YouTube video..."),t=yield(n=yt_id,new Promise((function(e,t){var o=new XMLHttpRequest;if(!o)return console.error("Cannot create XMLHttpRequest"),!1;o.onerror=function(){update_progress("0","An error occured"),t("Cannot download YouTube video")},o.onload=function(){200===o.status?e(o.response):t("Cannot download YouTube video")},o.open("GET","https://ytdl.mooderize.com/audio/".concat(n)),o.responseType="blob",o.send()})))):t=s.files[0],update_progress("30","Loading audio file..."),a=yield(o=t,console.log("Create buffer from file..."),new Promise((function(e,t){var n=new FileReader;n.onloadend=function(){i=this.result,L.decodeAudioData(i,(function(t){e(t)}))},n.onerror=function(e){alert("Sorry! There was an error reading that file"),console.log(JSON.stringify(e)),t(JSON.stringify(e))},n.readAsArrayBuffer(o)}))),q()}));return function(t){return e.apply(this,arguments)}}()),update_progress=(e,t)=>{p.value=e,w.innerHTML=t,p.querySelector(".progress_bar_ie > span").style.width=e+"%"},g.addEventListener("click",r((function*(){h.classList.add("hidden"),v.classList.remove("hidden"),S=b.value,yield q(S),window.dispatchEvent(new HashChangeEvent("hashchange"))})))},function(e,t){function n(e,t,n,o,r,i,a){try{var c=e[i](a),d=c.value}catch(e){return void n(e)}c.done?t(d):Promise.resolve(d).then(o,r)}e.exports=function(){var e,t=(e=function*(e,t){console.log("bathroom()");var n=new OfflineAudioContext(e.numberOfChannels,e.length,e.sampleRate),o=n.createBufferSource();o.buffer=e;var r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500-35*t,0),o.connect(r);var i=n.createBiquadFilter();i.type="lowshelf",i.frequency.setValueAtTime(400-30*t,0),i.gain.setValueAtTime(2+Math.floor(t/4),0),r.connect(i);var a=n.createConvolver();return a.buffer=yield n.decodeAudioData(yield(yield fetch("../convolvers/convolver_church.wav")).arrayBuffer()),i.connect(a),a.connect(n.destination),o.start(),yield n.startRendering()},function(){var t=this,o=arguments;return new Promise((function(r,i){var a=e.apply(t,o);function c(e){n(a,r,i,c,d,"next",e)}function d(e){n(a,r,i,c,d,"throw",e)}c(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()},function(e,t){function n(e,t,n,o,r,i,a){try{var c=e[i](a),d=c.value}catch(e){return void n(e)}c.done?t(d):Promise.resolve(d).then(o,r)}e.exports=function(){var e,t=(e=function*(e,t){console.log("emptymall()");var n=new OfflineAudioContext(e.numberOfChannels,e.length,e.sampleRate),o=n.createBufferSource();o.buffer=e;var r=n.createBiquadFilter();r.type="highpass",r.frequency.setValueAtTime(300+35*t,0),o.connect(r);var i=n.createConvolver();return i.buffer=yield n.decodeAudioData(yield(yield fetch("../convolvers/convolver_church.wav")).arrayBuffer()),r.connect(i),i.connect(n.destination),o.start(),yield n.startRendering()},function(){var t=this,o=arguments;return new Promise((function(r,i){var a=e.apply(t,o);function c(e){n(a,r,i,c,d,"next",e)}function d(e){n(a,r,i,c,d,"throw",e)}c(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()},function(e,t){var n=document.querySelectorAll(".filer_vignette"),o=document.querySelectorAll("section"),r=document.querySelector("#youChose"),i=document.querySelector("#fileSelector"),a=document.querySelector("#fileName"),c=document.querySelector("#applyEffect"),d=document.querySelector(".uploading_fields"),u=document.querySelector(".uploaded"),s=(document.querySelector(".uploading .embed_loading"),document.querySelectorAll(".uploading .cancel")),l=document.querySelector("#youtubeLink"),f=document.querySelector(".ytLinkContainer > button"),v=document.querySelector(".yt_loaded"),h=document.querySelector(".yt_error"),p=document.querySelector(".embed_loading"),y=document.querySelector("#amount_nb"),m=document.querySelector("#amount_slider"),w=document.querySelector("#regenerate"),g=()=>{var e=window.location.hash.substr(1).split("&");if(""==e[0]||"explanation"==e[0])return{section:"home"};var t={};return e.map(e=>{var[n,o]=e.split("=");t[n]=decodeURIComponent(o)}),t};window.addEventListener("hashchange",(function(e){o.forEach(e=>{e.classList.add("hidden")});var t=g();r.innerHTML=t.filter+" effect",c.dataset.filter=t.filter,document.querySelector(".".concat(t.section)).classList.remove("hidden")})),n.forEach(e=>{e.addEventListener("click",e=>{var t=e.currentTarget.dataset.filter;window.location.hash="section=uploading&filter=".concat(t)})}),i.addEventListener("change",(function(){var e=i.value;if(e){var t=e.indexOf("\\")>=0?e.lastIndexOf("\\"):e.lastIndexOf("/"),n=e.substring(t);0!==n.indexOf("\\")&&0!==n.indexOf("/")||(n=n.substring(1)),a.innerHTML=n,c.dataset.ytid="",c.disabled=!1,d.classList.add("hidden"),u.classList.remove("hidden")}})),s.forEach(e=>{e.addEventListener("click",(function(){c.disabled=!0,d.classList.remove("hidden"),u.classList.add("hidden"),v.classList.add("hidden")}))}),l.addEventListener("input",()=>{f.classList.remove("hidden")}),f.addEventListener("click",()=>{if(!window.navigator.onLine)return h.innerHTML="⚠️ You must have a working connection to upload a song from YouTube",h.classList.remove("hidden"),!1;v.classList.add("hidden"),d.classList.add("hidden"),p.classList.remove("hidden");var e=l.value,t=new XMLHttpRequest;if(!t)return console.error("Cannot create XMLHttpRequest"),!1;throwError=()=>{h.innerHTML="Error: the video coudn't be loaded. Please try with another url, or upload the file directly.",h.classList.remove("hidden"),d.classList.remove("hidden"),p.classList.add("hidden"),c.disabled=!0},t.onerror=function(){throwError()},t.onload=function(){if(200===t.status){var e=t.response;p.classList.add("hidden"),v.querySelector("img").src=e.thumbnail,v.querySelector(".title").innerHTML=e.title,v.querySelector(".duration").innerHTML="duration: "+(e.length>=3600?"way too long":new Date(1e3*e.length).toISOString().substr(14,5)),v.classList.remove("hidden"),c.dataset.ytid=e.id,c.disabled=!1}else throwError()},t.open("GET","https://ytdl.mooderize.com/metadata/".concat(encodeURIComponent(e))),t.responseType="json",t.send()}),m.oninput=function(){y.value=this.value,w.disabled=!1},"voila"==g().section&&(window.location.hash="section=home"),window.dispatchEvent(new HashChangeEvent("hashchange")),l.value=""}]);