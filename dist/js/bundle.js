/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ./js/audio */ \"./src/js/audio.js\", 7));\nPromise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ./js/nav */ \"./src/js/nav.js\", 7));\nPromise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ./js/sw_loader */ \"./src/js/sw_loader.js\", 7));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar bathroom = __webpack_require__(/*! ./audio_effects/bathroom */ \"./src/js/audio_effects/bathroom.js\");\n\nvar emptymall = __webpack_require__(/*! ./audio_effects/emptymall */ \"./src/js/audio_effects/emptymall.js\");\n\nvar effects = {\n  bathroom,\n  emptymall\n};\nvar fileSelector = document.querySelector('#fileSelector');\nvar applyEffectBtn = document.querySelector('#applyEffect');\nvar section_uploading = document.querySelector('.uploading');\nvar section_loading = document.querySelector('.loading');\nvar section_voila = document.querySelector('.voila');\nvar progress_bar = document.querySelector('.progress_bar');\nvar downloadLink = document.querySelector('#downloadLink');\nvar preview = document.querySelector('#preview');\nvar loading_state = document.querySelector('.loading_state');\nvar test_btn = document.querySelector('#ytTest');\nvar yt_input = document.querySelector('#youtubeLink');\nvar regenerate = document.querySelector('#regenerate');\nvar amount_slider = document.querySelector('#amount_slider');\nvar audioCtx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(2, 44100 * 40, 44100); // définition du contexte audio\n\nvar arrayBuffer;\nvar original_buffer;\nvar modified_buffer;\nvar filter;\nvar amount = amount_slider.value;\n\nfunction ytdl(id) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n\n    if (!xhr) {\n      console.error(\"Cannot create XMLHttpRequest\");\n      return false;\n    }\n\n    xhr.onerror = function () {\n      reject(\"Cannot download YouTube video\");\n    };\n\n    xhr.onload = function () {\n      if (xhr.status === 200) {\n        resolve(xhr.response);\n      } else {\n        reject(\"Cannot download YouTube video\");\n      }\n    };\n\n    xhr.open(\"GET\", \"http://localhost:3000/ytdl/audio/\".concat(id));\n    xhr.responseType = \"blob\";\n    xhr.send();\n  });\n}\n\napplyEffectBtn.addEventListener('click', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (evt) {\n    filter = applyEffectBtn.dataset.filter; //choosen filter\n\n    yt_id = applyEffectBtn.dataset.ytid; //youtube video id, if empty -> file has been uploaded\n\n    if (!Object.keys(effects).includes(filter)) {\n      //check that funny guy didn't change get parameters\n      alert(\"ERREUR: L'effet choisi (\".concat(filter, \") n'existe pas.\")); // \n\n      window.location.hash = \"\"; //\n\n      return; //\n    }\n\n    section_uploading.classList.add('hidden'); // UI\n\n    section_loading.classList.remove('hidden'); //\n\n    applyEffectBtn.disabled = true; //\n\n    var file;\n\n    if (yt_id != \"\") {\n      // DL song if from youtube\n      update_progress('10', 'Downloading YouTube video...'); //UI\n\n      file = yield ytdl(yt_id);\n    } else {\n      // Get song if from disk\n      file = fileSelector.files[0];\n    }\n\n    update_progress('30', 'Loading audio file...'); //UI\n\n    original_buffer = yield loadAudio(file); //create buffer of the original song\n\n    generateSong(); //generate song\n  });\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nfunction generateSong() {\n  return _generateSong.apply(this, arguments);\n} //Create the audio buffer from the audio file\n\n\nfunction _generateSong() {\n  _generateSong = _asyncToGenerator(function* () {\n    try {\n      update_progress('55', 'Applying audio effects...');\n      modified_buffer = yield effects[filter](original_buffer, amount); // create new buffer with effects\n\n      update_progress('90', 'Converting to wav...');\n      var blob = yield bufferToWav(modified_buffer);\n      var url = (window.URL || window.webkitURL).createObjectURL(blob);\n      console.log(url);\n      downloadLink.setAttribute('href', url); // UI\n\n      preview.setAttribute('src', url); //\n\n      regenerate.disabled = true; //\n\n      window.location.hash = 'section=voila'; //\n    } catch (e) {\n      update_progress('0', 'An error occured');\n    }\n  });\n  return _generateSong.apply(this, arguments);\n}\n\nfunction loadAudio(audioFile) {\n  console.log('Create buffer from file...');\n  return new Promise(function (resolve, reject) {\n    var reader = new FileReader();\n\n    reader.onloadend = function () {\n      arrayBuffer = this.result;\n      audioCtx.decodeAudioData(arrayBuffer, function (localBuffer) {\n        resolve(localBuffer);\n      });\n    };\n\n    reader.onerror = function (e) {\n      alert(\"Sorry! There was an error reading that file\");\n      console.log(JSON.stringify(e));\n      reject(JSON.stringify(e));\n    };\n\n    reader.readAsArrayBuffer(audioFile);\n  });\n}\n\nfunction bufferToWav(buffer) {\n  console.log(\"bufferToWav()\");\n  return new Promise(function (resolve, reject) {\n    var worker = new Worker('/js/recorder.worker.js'); // initialize the new worker\n\n    worker.postMessage({\n      command: 'init',\n      config: {\n        sampleRate: 44100,\n        numChannels: 1\n      }\n    }); // callback for `exportWAV`\n\n    worker.onmessage = function (e) {\n      var blob = e.data; // this is would be your WAV blob\n\n      resolve(blob);\n    }; // send the channel data from our buffer to the worker\n\n\n    worker.postMessage({\n      command: 'record',\n      buffer: [buffer.getChannelData(0), buffer.getChannelData(1)]\n    }); // ask the worker for a WAV\n\n    worker.postMessage({\n      command: 'exportWAV',\n      type: 'audio/wav'\n    });\n  });\n}\n\nupdate_progress = (percentage, label) => {\n  progress_bar.value = percentage;\n  loading_state.innerHTML = label;\n  progress_bar.querySelector('.progress_bar_ie > span').style.width = percentage + '%';\n};\n\nregenerate.addEventListener('click', /*#__PURE__*/_asyncToGenerator(function* () {\n  section_voila.classList.add('hidden'); // UI\n\n  section_loading.classList.remove('hidden'); //\n\n  amount = amount_slider.value;\n  yield generateSong(amount);\n  window.dispatchEvent(new HashChangeEvent(\"hashchange\"));\n}));\n\n//# sourceURL=webpack:///./src/js/audio.js?");

/***/ }),

/***/ "./src/js/audio_effects/bathroom.js":
/*!******************************************!*\
  !*** ./src/js/audio_effects/bathroom.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nmodule.exports = /*#__PURE__*/function () {\n  var _bathroom = _asyncToGenerator(function* (buffer, amount) {\n    console.log(\"bathroom()\");\n    var ctx = new OfflineAudioContext(buffer.numberOfChannels, buffer.length, buffer.sampleRate);\n    var source = ctx.createBufferSource();\n    source.buffer = buffer; // LOWPASS\n\n    var lowpass = ctx.createBiquadFilter();\n    lowpass.type = 'lowpass';\n    lowpass.frequency.setValueAtTime(500 - amount * 35, 0); // ~300 by default\n\n    source.connect(lowpass); //lowpass.connect(ctx.destination)\n    // LOWSHELF (Bass boost)\n\n    var lowshelf = ctx.createBiquadFilter();\n    lowshelf.type = 'lowshelf';\n    lowshelf.frequency.setValueAtTime(400 - amount * 30, 0); // ~200 by default\n\n    lowshelf.gain.setValueAtTime(2 + Math.floor(amount / 4), 0);\n    lowpass.connect(lowshelf); //lowshelf.connect(ctx.destination)\n    // SOURCE\n\n    /* let dryGain = ctx.createGain();\r\n    source.connect(dryGain)\r\n    dryGain.connect(ctx.destination); */\n    // REVERB\n\n    var convolver = ctx.createConvolver();\n    convolver.buffer = yield ctx.decodeAudioData(yield (yield fetch(\"../convolvers/convolver_church.wav\")).arrayBuffer());\n    lowshelf.connect(convolver);\n    convolver.connect(ctx.destination); //let wetGain = ctx.createGain();\n    //source.connect(convolver)\n    //convolver.connect(ctx.destination);\n    // MIX:\n\n    /* let percentReverb = 0\r\n    dryGain.gain.value = 1 - percentReverb;\r\n      wetGain.gain.value = 0; */\n\n    source.start(); //Allow the audio to be played in the browser\n\n    var outputAudioBuffer = yield ctx.startRendering();\n    return outputAudioBuffer;\n  });\n\n  function bathroom(_x, _x2) {\n    return _bathroom.apply(this, arguments);\n  }\n\n  return bathroom;\n}(); //module.exports = bathroom\n\n//# sourceURL=webpack:///./src/js/audio_effects/bathroom.js?");

/***/ }),

/***/ "./src/js/audio_effects/emptymall.js":
/*!*******************************************!*\
  !*** ./src/js/audio_effects/emptymall.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nmodule.exports = /*#__PURE__*/function () {\n  var _emptymall = _asyncToGenerator(function* (buffer, amount) {\n    console.log(\"emptymall()\");\n    var ctx = new OfflineAudioContext(buffer.numberOfChannels, buffer.length, buffer.sampleRate);\n    var source = ctx.createBufferSource();\n    source.buffer = buffer; // HIGHPASS\n\n    var highpass = ctx.createBiquadFilter();\n    highpass.type = 'highpass';\n    highpass.frequency.setValueAtTime(300 + amount * 35, 0); // ~300 by default\n\n    source.connect(highpass); // SOURCE\n\n    /* let dryGain = ctx.createGain();\r\n    source.connect(dryGain)\r\n    dryGain.connect(ctx.destination); */\n    // REVERB\n\n    var convolver = ctx.createConvolver();\n    convolver.buffer = yield ctx.decodeAudioData(yield (yield fetch(\"../convolvers/metal_room.wav\")).arrayBuffer());\n    highpass.connect(convolver);\n    convolver.connect(ctx.destination); //let wetGain = ctx.createGain();\n    //source.connect(convolver)\n    //convolver.connect(ctx.destination);\n    // MIX:\n\n    /* let percentReverb = 0\r\n    dryGain.gain.value = 1 - percentReverb;\r\n      wetGain.gain.value = 0; */\n\n    source.start(); //Allow the audio to be played in the browser\n\n    var outputAudioBuffer = yield ctx.startRendering();\n    return outputAudioBuffer;\n  });\n\n  function emptymall(_x, _x2) {\n    return _emptymall.apply(this, arguments);\n  }\n\n  return emptymall;\n}();\n\n//# sourceURL=webpack:///./src/js/audio_effects/emptymall.js?");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var vignettes = document.querySelectorAll('.filer_vignette');\nvar sections = document.querySelectorAll('section');\nvar youChose = document.querySelector('#youChose');\nvar fileSelector = document.querySelector('#fileSelector');\nvar fileName = document.querySelector('#fileName');\nvar applyEffectBtn = document.querySelector('#applyEffect');\nvar uploading_fields = document.querySelector('.uploading_fields');\nvar uploading_uploaded = document.querySelector('.uploaded');\nvar uploading_loading = document.querySelector('.uploading .embed_loading');\nvar uploading_cancel = document.querySelectorAll('.uploading .cancel');\nvar yt_input = document.querySelector('#youtubeLink');\nvar yt_load_btn = document.querySelector('.ytLinkContainer > button');\nvar yt_loaded = document.querySelector('.yt_loaded');\nvar yt_error = document.querySelector('.yt_error');\nvar embed_loading = document.querySelector('.embed_loading');\nvar amount_nb = document.querySelector('#amount_nb');\nvar amount_slider = document.querySelector('#amount_slider');\nvar regenerate = document.querySelector('#regenerate');\n\nvar parseHash = () => {\n  var hashes = window.location.hash.substr(1).split('&');\n  if (hashes[0] == \"\" || hashes[0] == \"explanation\") return {\n    section: 'home'\n  };\n  var params = {};\n  hashes.map(hash => {\n    var [key, val] = hash.split('=');\n    params[key] = decodeURIComponent(val);\n  });\n  return params;\n};\n\nwindow.addEventListener('hashchange', function (evt) {\n  sections.forEach(section => {\n    section.classList.add('hidden');\n  });\n  var parsedHash = parseHash();\n  youChose.innerHTML = parsedHash.filter + ' effect';\n  applyEffectBtn.dataset.filter = parsedHash.filter;\n  document.querySelector(\".\".concat(parsedHash.section)).classList.remove('hidden');\n});\nvignettes.forEach(vignette => {\n  vignette.addEventListener('click', evt => {\n    var filter = evt.currentTarget.dataset.filter;\n    window.location.hash = \"section=uploading&filter=\".concat(filter);\n  });\n});\nfileSelector.addEventListener('change', function () {\n  var fullPath = fileSelector.value;\n\n  if (fullPath) {\n    var startIndex = fullPath.indexOf('\\\\') >= 0 ? fullPath.lastIndexOf('\\\\') : fullPath.lastIndexOf('/');\n    var filename = fullPath.substring(startIndex);\n\n    if (filename.indexOf('\\\\') === 0 || filename.indexOf('/') === 0) {\n      filename = filename.substring(1);\n    }\n\n    fileName.innerHTML = filename;\n    applyEffectBtn.dataset.ytid = \"\";\n    applyEffectBtn.disabled = false;\n    uploading_fields.classList.add('hidden');\n    uploading_uploaded.classList.remove('hidden');\n  }\n});\nuploading_cancel.forEach(btn => {\n  btn.addEventListener('click', function () {\n    applyEffectBtn.disabled = true;\n    uploading_fields.classList.remove('hidden');\n    uploading_uploaded.classList.add('hidden');\n    yt_loaded.classList.add('hidden');\n  });\n});\nyt_input.addEventListener('input', () => {\n  yt_load_btn.classList.remove('hidden');\n});\nyt_load_btn.addEventListener('click', () => {\n  if (!window.navigator.onLine) {\n    yt_error.innerHTML = '⚠️ You must have a working connection to upload a song from YouTube';\n    yt_error.classList.remove('hidden');\n    return false;\n  }\n\n  yt_loaded.classList.add('hidden');\n  uploading_fields.classList.add('hidden');\n  embed_loading.classList.remove('hidden');\n  var link = yt_input.value;\n  var xhr = new XMLHttpRequest();\n\n  if (!xhr) {\n    console.error(\"Cannot create XMLHttpRequest\");\n    return false;\n  }\n\n  throwError = () => {\n    yt_error.innerHTML = 'Error: the video coudn\\'t be loaded. Please try with another url, or upload the file directly.';\n    yt_error.classList.remove('hidden');\n    uploading_fields.classList.remove('hidden');\n    embed_loading.classList.add('hidden');\n    applyEffectBtn.disabled = true;\n  };\n\n  xhr.onerror = function () {\n    throwError();\n  };\n\n  xhr.onload = function () {\n    if (xhr.status === 200) {\n      var metadata = xhr.response;\n      embed_loading.classList.add('hidden');\n      yt_loaded.querySelector('img').src = metadata.thumbnail;\n      yt_loaded.querySelector('.title').innerHTML = metadata.title;\n      yt_loaded.querySelector('.duration').innerHTML = 'duration: ' + (metadata.length >= 3600 ? \"way too long\" : new Date(metadata.length * 1000).toISOString().substr(14, 5));\n      yt_loaded.classList.remove('hidden');\n      applyEffectBtn.dataset.ytid = metadata.id;\n      applyEffectBtn.disabled = false;\n    } else {\n      throwError();\n    }\n  };\n\n  xhr.open(\"GET\", \"http://localhost:3000/ytdl/metadata/\".concat(encodeURIComponent(link)));\n  xhr.responseType = \"json\";\n  xhr.send();\n});\n\namount_slider.oninput = function () {\n  amount_nb.value = this.value;\n  regenerate.disabled = false;\n};\n\nvar hashOnLoad = parseHash();\nif (hashOnLoad.section == \"voila\") window.location.hash = 'section=home';\nwindow.dispatchEvent(new HashChangeEvent(\"hashchange\"));\nyt_input.value = \"\";\n\n//# sourceURL=webpack:///./src/js/nav.js?");

/***/ }),

/***/ "./src/js/sw_loader.js":
/*!*****************************!*\
  !*** ./src/js/sw_loader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* if ('serviceWorker' in navigator) {\r\n    navigator.serviceWorker.register('/sw.js')\r\n    .catch((error) => {\r\n      // registration failed\r\n      console.log('Service Worker registration failed with ' + error);\r\n    });\r\n  } */\n\n//# sourceURL=webpack:///./src/js/sw_loader.js?");

/***/ })

/******/ });