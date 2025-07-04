/*! Mouselog Agent - v0.5.0 | 2020-6-5 | MIT */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mouselog"] = factory();
	else
		root["mouselog"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return write; });
var debugMode = false;
var outputElement;

function activate(id) {
  debugMode = true;

  if (id) {
    outputElement = window.document.getElementById(id);

    if (!outputElement) {
      console.log("Fail to find the output element.");
    }
  }
}

function write(info) {
  if (debugMode) {
    if (outputElement) {
      var p = document.createElement("p");
      p.style.display = "block";
      p.style.fontSize = "10px";
      p.style.margin = "2px";
      var t = document.createTextNode(info);
      p.appendChild(t);
      outputElement.appendChild(p);
    }

    console.log(info);
  }
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return maxNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return parseInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return byteLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getGlobalUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return equalArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getKeyCode; });
function maxNumber() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  var res = nums[0];

  for (var i = 1; i < nums.length; ++i) {
    res = res > nums[i] ? res : nums[i];
  }

  return res;
}
function parseInt(x) {
  var res = typeof x === 'number' ? x : Number(x);
  return Math.round(res);
} // https://stackoverflow.com/questions/5515869/string-length-in-bytes-in-javascript

function byteLength(str) {
  // returns the byte length of an utf8 string
  var s = str.length;

  for (var i = str.length - 1; i >= 0; i--) {
    var code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;else if (code > 0x7ff && code <= 0xffff) s += 2;
    if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
  }

  return s;
}
function getGlobalUserId() {
  return window.mouselogUserId ? window.mouselogUserId : "";
}
function equalArray(array1, array2) {
  if (!array1 || !array2 || array1.length != array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }

  return true;
}
var keyCodes = {
  "Backspace": 8,
  "Tab": 9,
  "Enter": 13,
  "Shift": 16,
  "Control": 17,
  "Alt": 18,
  "CapsLock": 20,
  "Escape": 27,
  "Space": 32,
  "PageUp": 33,
  "PageDown": 34,
  "End": 35,
  "Home": 36,
  "ArrowLeft": 37,
  "ArrowUp": 38,
  "ArrowRight": 39,
  "ArrowDown": 40,
  "PrintScreen": 44,
  "Insert": 45,
  "Delete": 46,
  "MetaLeft": 91,
  "MetaRight": 92,
  "NumpadMultiply": 106,
  "NumpadAdd": 107,
  "NumpadComma": 108,
  "NumpadSubtract": 109,
  "NumpadDecimal": 110,
  "NumpadDivide": 111,
  "NumLock": 144,
  "ScrollLock": 145,
  "ShiftLeft": 160,
  "ShiftRight": 161,
  "ControlLeft": 162,
  "ControlRight": 163,
  "AltLeft": 164,
  "AltRight": 165,
  "Semicolon": 186,
  "Equal": 187,
  "Comma": 188,
  "Minus": 189,
  "Period": 190,
  "Slash": 191,
  "Backquote": 192,
  "BracketLeft": 219,
  "Backslash": 220,
  "BracketRight": 221,
  "Quote": 222
};

for (var i = 0; i < 10; i++) {
  keyCodes["Digit" + i] = 48 + i;
  keyCodes["Numpad" + i] = 96 + i;
}

for (var _i = 1; _i <= 24; _i++) {
  keyCodes["F" + _i] = _i + 111;
}

for (var _i2 = 65; _i2 <= 90; _i2++) {
  keyCodes["Key" + String.fromCharCode(_i2)] = _i2;
}

function getKeyCode(evt) {
  // keyCode is deprecated
  // But IE don't support keyboardEvent.code
  if (evt.keyCode !== undefined) return evt.keyCode;
  if (keyCodes[evt.code] !== undefined) return keyCodes[evt.code];
  return 0;
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
  if ( true && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
})('urljoin', this, function () {

  function normalize (strArray) {
    var resultArray = [];
    if (strArray.length === 0) { return ''; }

    if (typeof strArray[0] !== 'string') {
      throw new TypeError('Url must be a string. Received ' + strArray[0]);
    }

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
      var first = strArray.shift();
      strArray[0] = first + strArray[0];
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    } else {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }

    for (var i = 0; i < strArray.length; i++) {
      var component = strArray[i];

      if (typeof component !== 'string') {
        throw new TypeError('Url must be a string. Received ' + component);
      }

      if (component === '') { continue; }

      if (i > 0) {
        // Removing the starting slashes for each component but the first.
        component = component.replace(/^[\/]+/, '');
      }
      if (i < strArray.length - 1) {
        // Removing the ending slashes for each component but the last.
        component = component.replace(/[\/]+$/, '');
      } else {
        // For the last component we will combine multiple slashes to a single one.
        component = component.replace(/[\/]+$/, '/');
      }

      resultArray.push(component);

    }

    var str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    var parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?': '') + parts.join('&');

    return str;
  }

  return function () {
    var input;

    if (typeof arguments[0] === 'object') {
      input = arguments[0];
    } else {
      input = [].slice.call(arguments);
    }

    return normalize(input);
  };

});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(19);
var bytesToUuid = __webpack_require__(20);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(es6_promise_auto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var deep_copy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var deep_copy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(deep_copy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var base_64__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(base_64__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _debugger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);










var targetEvents = ["mousemove", "mousedown", "mouseup", "click", "dblclick", "contextmenu", "wheel", "touchstart", "touchmove", "touchend", "resize"];
var keyboardEvent = ["keydown", "keyup"];
var pageLoadTime = new Date();

var errorHandler = function errorHandler() {};

var isLocalStorageAvailable = function () {
  var testString = uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()();

  try {
    localStorage.setItem(testString, testString);
    localStorage.removeItem(testString);
    return true;
  } catch (e) {
    return false;
  }
}();

var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
var visibilityChangeEvent = hiddenProperty ? hiddenProperty.replace(/hidden/i, 'visibilitychange') : null;

function isIEBrowser() {
  var upperBound = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
  var ua = navigator.userAgent.toLowerCase();
  var v = ua.match(/msie ([\d]+)/);
  return v && Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(v[1]) <= upperBound;
}

function getButton(btn) {
  if (btn === '2') {
    return 'Right';
  } else {
    return "";
  }
}

var Mouselog = /*#__PURE__*/function () {
  function Mouselog() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mouselog);

    this.config = new _config__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]();
    this.mouselogLoadTime = new Date();
    this.batchCount = 0;
    this.packetCount = 0;
    this.eventsList = [];
    this.lastEvtInfo;
    this.eventsCount = 0;
    this.uploadInterval; // For "periodic" upload mode

    this.uploadTimeout; // For "mixed" upload mode
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mouselog, [{
    key: "_initImpressionId",
    value: function _initImpressionId() {
      if (this.config.impIdVariable === undefined || this.config.impIdVariable === null) {
        this.impressionId = uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()();
      } else {
        try {
          this.impressionId = eval(this.config.impIdVariable);

          if (this.impressionId === null || this.impressionId === undefined) {
            _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Global varialbe impIdVariable: ".concat(this.config.impIdVariable, " is ").concat(this.impressionId, "."));

            this.impressionId = "Err_".concat(this.config.impIdVariable, "_is_").concat(this.impressionId);
          }
        } catch (e) {
          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Fail to initialize Impression ID with a `impIdVariable`");

          this.impressionId = "Err_fail_to_get_".concat(this.config.impIdVariable);
        }
      }
    }
  }, {
    key: "_initSessionId",
    value: function _initSessionId() {
      // Session ID == "" => localStorage is disabled / Mouselog Session is not enabled
      if (!isLocalStorageAvailable || !this.config.enableSession) {
        this.sessionId = "";
        return;
      }

      if (!(this.config.sessionIdVariable === undefined || this.config.sessionIdVariable === null)) {
        try {
          this.sessionId = eval(this.config.sessionIdVariable);

          if (this.sessionId == undefined || this.sessionId == null) {
            _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Warning: the value of `".concat(this.config.sessionIdVariable, "` is undefined or null.")); // this.sessionId = "";


            this.sessionId = "Err_".concat(this.config.sessionIdVariable, "_is_").concat(this.sessionId);
          }

          return;
        } catch (e) {
          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Fail to initialize Impression ID with a `sessionIdVariable`");

          this.sessionId = "Err_fail_to_get_".concat(this.config.sessionIdVariable);
          return;
        }
      }

      this.sessionId = localStorage.getItem('mouselogSessionID');

      if (this.sessionId === null || this.sessionId === undefined) {
        this.sessionId = uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()();
        localStorage.setItem('mouselogSessionID', this.sessionId);
      }
    }
  }, {
    key: "_clearBuffer",
    value: function _clearBuffer() {
      this.eventsList = [];
    }
  }, {
    key: "_newDataBatch",
    value: function _newDataBatch() {
      var trace = {
        batchId: this.batchCount,
        packetId: 0,
        url: window.location.hostname ? window.location.hostname : "localhost",
        path: window.location.pathname,
        width: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* maxNumber */ "e"])(document.body.scrollWidth, window.innerWidth),
        height: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* maxNumber */ "e"])(document.body.scrollHeight, window.innerHeight),
        pageLoadTime: pageLoadTime,
        referrer: document.referrer,
        events: []
      };
      this.batchCount += 1;
      return trace;
    }
  }, {
    key: "_onVisibilityChange",
    value: function _onVisibilityChange() {
      if (window.document[hiddenProperty]) {
        // the page is not activated
        this._pause();
      } else {
        // the page is activated
        this._resume();
      }
    }
  }, {
    key: "_mouseHandler",
    value: function _mouseHandler(evt) {
      // _mouseHandler is a callback function
      // To catch the internal exception, this function should be wrapped by a try-catch block.
      try {
        // PC's Chrome on Mobile mode can still receive "contextmenu" event with zero X, Y, so we ignore these events.
        if (evt.type === 'contextmenu' && evt.pageX === 0 && evt.pageY === 0) {
          return;
        } // (id, event type, timestamp)


        var evtInfo = [this.eventsCount, targetEvents.indexOf(evt.type), Math.floor(evt.timeStamp) / 1000];

        switch (evt.type) {
          case "mousemove":
            // (x,y)
            var x = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.pageX);
            var y = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.pageY);
            evtInfo.push(x, y);
            break;

          case "touchmove":
          case "touchstart":
          case "touchend":
            // (x,y)
            x = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.changedTouches[0].pageX);
            y = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.changedTouches[0].pageY);
            evtInfo.push(x, y);
            break;

          case "wheel":
            // (x,y,deltaX,deltaY)
            x = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.pageX);
            y = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.pageY);
            var deltaX = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.deltaX);
            var deltaY = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.deltaY);
            evtInfo.push(x, y, deltaX, deltaY);
            break;

          case "mouseup":
          case "mousedown":
          case "click":
          case "dblclick":
          case "contextmenu":
            // (x,y,button)
            x = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.pageX);
            y = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* parseInt */ "f"])(evt.pageY);
            var btn = getButton(evt.buttono);
            evtInfo.push(x, y, btn);
            break;

          case "resize":
            // (width,height)
            var width = evt.target.innerWidth;
            var height = evt.target.innerHeight;
            evtInfo.push(width, height);
            break;

          case "keydown":
          case 'keyup':
            // keytype
            var keyCode = Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getKeyCode */ "d"])(evt);

            if (keyCode >= 96 && keyCode <= 105) {
              // set Numpad key to 96
              keyCode = 96;
            } else if (keyCode >= 48 && keyCode <= 57) {
              // set Digit key to 48
              keyCode = 48;
            } else if (keyCode >= 65 && keyCode <= 90) {
              // set Alphabet key to 65
              keyCode = 65;
            }

            evtInfo.push(keyCode);

            _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"](evt.type + " " + JSON.stringify(evtInfo));

            break;
        } // Remove Redundant events


        if (this.lastEvtInfo && Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* equalArray */ "b"])(this.lastEvtInfo, evtInfo)) {
          return;
        } // Remove two consecutive Mousemove/Touchmove events with the same x and y


        if (this.lastEvtInfo && (targetEvents[evtInfo[1]] == "mousemove" || targetEvents[evtInfo[1]] == "touchmove") && this.lastEvtInfo[1] == evtInfo[1] && Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* equalArray */ "b"])(this.lastEvtInfo.slice(3), evtInfo.slice(3))) {
          return;
        }

        this.eventsList.push(evtInfo);
        this.lastEvtInfo = evtInfo;
        this.eventsCount += 1;

        if (this.config.uploadMode == "event-triggered" && this.eventsList.length % this.config.frequency == 0) {
          this._uploadData();
        }

        if (this.config.uploadMode == "mixed" && this.eventsList.length % this.config.frequency == 0) {
          this._periodUploadTimeout();

          this._uploadData();
        }
      } catch (e) {
        errorHandler(e);
      }
    }
  }, {
    key: "_encodeData",
    value: function _encodeData(data) {
      var encodedData = JSON.stringify(data);

      if (this.config.encoder.toLowerCase() == "base64") {
        encodedData = base_64__WEBPACK_IMPORTED_MODULE_7__["encode"](encodedData);
      }

      return encodedData;
    }
  }, {
    key: "_binarySplitBigDataBlock",
    value: function _binarySplitBigDataBlock(dataBlock) {
      var encodedData = this._encodeData(dataBlock);

      var res = [];

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* byteLength */ "a"])(encodedData) >= this.config.sizeLimit) {
        var newDataBlock = deep_copy__WEBPACK_IMPORTED_MODULE_6___default()(dataBlock);
        dataBlock.events.splice(dataBlock.events.length / 2);
        newDataBlock.events.splice(0, newDataBlock.events.length / 2);

        this._binarySplitBigDataBlock(dataBlock).forEach(function (data) {
          res.push(data);
        });

        this._binarySplitBigDataBlock(newDataBlock).forEach(function (data) {
          res.push(data);
        });
      } else {
        res.push(dataBlock);
      }

      return res;
    }
  }, {
    key: "_fetchConfigFromServer",
    value: function _fetchConfigFromServer() {
      // Upload an empty trace to fetch config from server
      var trace = this._newDataBatch();

      trace.packetId = this.packetCount;
      this.packetCount += 1;
      return this.uploader.upload(trace, this._encodeData(trace), true)["catch"](function (err) {
        return errorHandler(err);
      }); // This is a promise
    }
  }, {
    key: "_sendPingMessage",
    value: function _sendPingMessage() {
      // Upload an ping message with empty trace
      var trace = this._newDataBatch();

      this.batchCount -= 1;
      trace.packetId = -1;
      return this.uploader.upload(trace, this._encodeData(trace), false, "ping")["catch"](function (err) {
        return errorHandler(err);
      }); // This is a promise
    }
  }, {
    key: "_uploadData",
    value: function _uploadData() {
      var _this = this;

      if (this.config.uploadTimes && this.batchCount >= this.config.uploadTimes + this.config.enableServerConfig) {
        return; // TODO: This is only a stopgap method, a better method is to stop mouselog entirely.
      }

      var data = this._newDataBatch();

      data.events = this.eventsList;
      this.eventsList = [];

      var dataList = this._binarySplitBigDataBlock(data); // An array of data blocks


      dataList.forEach(function (data) {
        data.packetId = _this.packetCount;
        _this.packetCount += 1;

        var encodedData = _this._encodeData(data);

        _this.uploader.upload(data, encodedData)["catch"](function (err) {
          return errorHandler(err);
        });
      });
    }
  }, {
    key: "_periodUploadTimeout",
    value: function _periodUploadTimeout() {
      var _this2 = this;

      clearTimeout(this.uploadTimeout);
      this.uploadTimeout = setTimeout(function () {
        if (_this2.config.enableSendEmpty || _this2.eventsList.length > 0) {
          _this2._uploadData();
        }
      }, this.config.uploadPeriod);
    }
  }, {
    key: "_periodUploadInterval",
    value: function _periodUploadInterval() {
      var _this3 = this;

      clearInterval(this.uploadInterval);
      this.uploadInterval = setInterval(function () {
        if (_this3.config.enableSendEmpty || _this3.eventsList.length > 0) {
          _this3._uploadData();
        }
      }, this.config.uploadPeriod);
    }
  }, {
    key: "_runCollector",
    value: function _runCollector() {
      var _this4 = this;

      targetEvents.forEach(function (s) {
        _this4.config.scope.addEventListener(s, function (evt) {
          return _this4._mouseHandler(evt);
        });
      });

      if (this.config.uploadMode === "periodic") {
        this._periodUploadInterval();
      }

      if (this.config.uploadMode === "mixed") {
        this._periodUploadTimeout();
      }
    }
  }, {
    key: "_stopCollector",
    value: function _stopCollector() {
      var _this5 = this;

      targetEvents.forEach(function (s) {
        _this5.config.scope.removeEventListener(s, function (evt) {
          return _this5._mouseHandler(evt);
        });
      });
      clearInterval(this.uploadInterval);
      clearTimeout(this.uploadTimeout);
    }
  }, {
    key: "_resetCollector",
    value: function _resetCollector() {
      this._stopCollector();

      this._runCollector();
    }
  }, {
    key: "_init",
    value: function _init(config) {
      var _this6 = this;

      this._clearBuffer();

      if (this.config.build(config)) {
        this._initImpressionId();

        this._initSessionId();

        this.uploader = new _uploader__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](this.impressionId, this.sessionId, this.config);

        if (this.config.enableServerConfig) {
          // Async: Upload an empty data to fetch config from server
          this._fetchConfigFromServer().then(function (result) {
            if (result.status == 1) {
              if (_this6.config.update(result.config)) {
                _this6._resetCollector();

                _this6.uploader.setConfig(_this6.config);

                _this6._initSessionId();

                _this6.uploader.sessionId = _this6.sessionId;

                _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Successfully update config from backend.");
              } else {
                throw new Error("Unable to update config with server config.");
              }
            } else {
              throw new Error("Fail to get config from server.");
            }
          })["catch"](function (err) {
            _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"](err);
          });
        }

        window.onunload = function () {
          if (_this6.eventsList.length != 0) {
            _this6._uploadData();
          }
        };

        if (this.config.recordKeyboardEvent) {
          targetEvents = targetEvents.concat(keyboardEvent);
        }

        return {
          status: 0
        };
      } else {
        return {
          status: -1,
          msg: "Invalid configuration."
        };
      }
    }
  }, {
    key: "_pause",
    value: function _pause() {
      this._stopCollector();
    }
  }, {
    key: "_resume",
    value: function _resume() {
      this._runCollector();
    }
  }, {
    key: "run",
    value: function run(config) {
      var _this7 = this;

      if (config.disableException) {
        errorHandler = function errorHandler(e) {
          console.log(e); // TODO: other error handlers like upload the error to the server?
        };
      } else {
        errorHandler = function errorHandler(e) {
          throw e;
        };
      }

      try {
        if (isIEBrowser(9)) {
          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("IE Browser version <= 9. Stop.");

          return;
        }

        var res = this._init(config);

        if (res.status == 0) {
          if (visibilityChangeEvent) {
            document.addEventListener(visibilityChangeEvent, function (evt) {
              return _this7._onVisibilityChange(evt);
            });
          }

          this._runCollector();

          this.uploader.start(this.impressionId);

          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Mouselog agent is activated!");

          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Website ID: ".concat(this.config.websiteId));

          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Session ID: ".concat(this.sessionId));

          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Impression ID: ".concat(this.impressionId));

          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("User-Agent: ".concat(navigator.userAgent));

          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("User ID: ".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getGlobalUserId */ "c"])()));

          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Page load time: ".concat(pageLoadTime));

          if (this.config.enablePingMessage) {
            _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Send ping Message..");

            this._sendPingMessage().then(function (result) {
              _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Send ping Message successful");
            });
          }
        } else {
          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"](res.msg);

          _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Fail to initialize Mouselog agent.");
        }
      } catch (e) {
        errorHandler(e);
      }
    }
  }, {
    key: "debug",
    value: function debug(config, debugOutputElementId) {
      _debugger__WEBPACK_IMPORTED_MODULE_8__[/* activate */ "a"](debugOutputElementId);

      this.run(config);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.uploader.stop();

      this._stopCollector();

      this._clearBuffer();

      _debugger__WEBPACK_IMPORTED_MODULE_8__[/* write */ "b"]("Mouselog agent ".concat(this.impressionId, " is stopped!"));
    }
  }]);

  return Mouselog;
}();

/* harmony default export */ __webpack_exports__["a"] = (Mouselog);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _debugger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);





var StatusEnum = {
  WAITING: 0,
  SENDING: 1,
  SUCCESS: 2
};

var Uploader = /*#__PURE__*/function () {
  function Uploader(impId, sessId, config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Uploader);

    this.impressionId = impId;
    this.sessionId = sessId;
    this.config = config;
    this.resendQueue = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Uploader, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.resendInterval = setInterval(function () {
        _this._resendFailedData.call(_this);
      }, this.config.resendInterval);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.resendInterval); // TODO?: Send all the remaining data in this.buf
    }
  }, {
    key: "upload",
    value: function upload(data, encodedData) {
      var _this2 = this;

      var queryConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var msgType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      // resolve({status:-1/0/1, ...}): uploading success/fail.
      // reject(ErrorMessage): Errors occur when updating the config.
      return new Promise(function (resolve) {
        _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"]("Uploading Pkg ".concat(data.packetId, ", window size: ").concat(data.width, "*").concat(data.height, ", events count: ").concat(data.events.length));

        for (var i = 0; i < 3 && i < data.events.length; ++i) {
          _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"]("    ".concat(JSON.stringify(data.events[i])));
        }

        var userId = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* getGlobalUserId */ "c"])();
        var url = url_join__WEBPACK_IMPORTED_MODULE_2___default()(_this2.config.absoluteUrl, "?websiteId=".concat(_this2.config.websiteId, "&sessionId=").concat(_this2.sessionId, "&impressionId=").concat(_this2.impressionId).concat(userId !== "" ? "&userId=".concat(userId) : "").concat(queryConfig ? "&queryConfig=1" : "").concat(msgType ? "&type=".concat(msgType) : ""));
        var responseStatus;

        _this2._upload(encodedData, url, msgType).then(function (res) {
          responseStatus = res.status;
          _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"]("Pkg ".concat(data.packetId, ", status code: ").concat(responseStatus, ", content type: ").concat(res.headers.get("Content-Type")));

          if (responseStatus == 200) {
            // TODO: should not directly return res.json() here?
            return res.json();
          } else {
            throw new Error("Response status code is not 200.");
          }
        }).then(function (resObj) {
          _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"]("Pkg ".concat(data.packetId, " response=").concat(JSON.stringify(resObj)));

          if (resObj.status !== "ok") {
            throw new Error("Response object status is not ok.");
          }

          if (resObj.msg == "config") {
            resolve({
              status: 1,
              msg: "Get config from server",
              config: resObj.data
            });
          }

          resolve({
            status: 0
          });
        })["catch"](function (err) {
          // If status code is 2xx, packet will not be resent
          if (responseStatus && responseStatus.toString()[0] === '2') {
            _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"]("Pkg ".concat(data.packetId, " was successfully sent, but no expected response. Error message: ").concat(err.message));
            resolve({
              status: -1,
              msg: "Pkg ".concat(data.packetId, " get no expected response, ").concat(err.message)
            });
          } else {
            _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"]("Pkg ".concat(data.packetId, " failed, wait for resending. Error message: ").concat(err.message));

            _this2._appendFailedData(data, encodedData);

            resolve({
              status: -1,
              msg: "Fail to upload data bunch #".concat(data.packetId, ", ").concat(err.message)
            });
          }
        });
      });
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.stop();
      this.config = config;
      this.start();
    }
  }, {
    key: "_resendFailedData",
    value: function _resendFailedData() {
      var _this3 = this;

      var i = 0;

      if (this.resendQueue.length > 0) {
        _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"]("Resending data...");
      }

      var _loop = function _loop() {
        var obj = _this3.resendQueue[i];

        if (obj.status == StatusEnum.SUCCESS) {
          _this3.resendQueue.splice(i, 1); // Remove it from resendQueue

        } else {
          i += 1;
          _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"]("Resending Pkg ".concat(obj.data.packetId));

          if (obj.status == StatusEnum.WAITING) {
            obj.status = StatusEnum.SENDING;

            _this3.upload(obj.data, obj.encodedData).then(function (result) {
              if (result) {
                // Successfully resend the data
                obj.status = StatusEnum.SUCCESS;
              } else {
                obj.status = StatusEnum.WAITING;
              }
            });
          }
        }
      };

      while (i < this.resendQueue.length) {
        _loop();
      }
    }
  }, {
    key: "_upload",
    value: function _upload(encodedData, url, msgType) {
      // https://github.com/w3c/beacon/pull/27
      // Set keepalive: true for guarantee the request will be sent when the page is unloaded.
      if (this.config.enableGet) {
        return fetch("".concat(url.toString().replace("http://","https://")).concat(msgType ? "" : "&data=".concat(encodedData)), {
          method: "GET",
          keepalive: true
        });
      } else {
        return fetch(url.toString().replace("http://","https://"), {
          method: "POST",
          body: msgType ? "" : encodedData,
          keepalive: true
        });
      }
    }
  }, {
    key: "_appendFailedData",
    value: function _appendFailedData(data, encodedData) {
      this.resendQueue.push({
        status: StatusEnum.WAITING,
        data: data,
        encodedData: encodedData
      });
    }
  }]);

  return Uploader;
}();

/* harmony default export */ __webpack_exports__["a"] = (Uploader);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _debugger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);





var Config = /*#__PURE__*/function () {
  // Set up a default config
  function Config() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Config);

    // Type: string, REQUIRED
    // Endpoint Url
    this.uploadEndpoint = "http://localhost:9000"; // Type: string
    // Website ID

    this.websiteId = "unknown"; // Endpoint type, "absolute" or "relative"

    this.endpointType = "absolute"; // An array "mixed", "periodic", "event-triggered"
    // Periodic mode: Upload data in every given period
    // Event-triggered mode: Upload data when a given number of events are collected
    // Mixed mode: a mix of periodic and event-triggered mode

    this.uploadMode = "mixed"; // Type: number
    // If `uploadMode` is "mixed", "periodic", data will be uploaded every `uploadPeriod` ms.
    // If no data are collected in a period, no data will be uploaded

    this.uploadPeriod = 5000; // Type: number
    // If `uploadMode` == "event-triggered"
    // The website interaction data will be uploaded when every `frequency` events are captured.

    this.frequency = 50; // Type: number | null
    // Mouselog will stop uploading data after uploading `uploadTimes` batch data.

    this.uploadTimes = null; // Maximum size of a single package

    this.sizeLimit = 65535; // Type: bool
    // Use GET method to upload data? (stringified data will be embedded in URI)

    this.enableGet = false; // Type: number
    // Time interval for resending the failed trace data

    this.resendInterval = 20000; // Type: HTML DOM Element
    // Capture the events occur in `this.scope`

    this.scope = window.document; // Content: "base64" or an empty string
    // Use a encoder before uploading the data

    this.encoder = ""; // Type: Boolean
    // If `enableServerConfig`, Mouselog will fetch config from backend server during initialization

    this.enableServerConfig = true; // Type: Boolean
    // Mouselog will generate session ID to track user cross-tabs behaviors if `enableSession` == true

    this.enableSession = true; // Type: Boolean
    // Allow mouselog to send data without any events

    this.enableSendEmpty = false; // Type: Boolean
    // Not allow internal exceptions to be raised in browser's console

    this.disableException = false; // Type: string
    // A global predefined variable for setting the impression ID.
    // When initializing the impression ID, mouselog will try to call `eval(this.impIdVariable)`.
    // Warning: Please don't set the same impression ID variable in two different mouselog instances.

    this.impIdVariable = null; // Type: string
    // A global predefined variable for setting the session ID.
    // When initializing the session ID, mouselog will try to call `eval(this.sessionIdVariable)`.

    this.sessionIdVariable = null; // These parameters are required for runing a Mouselog agent

    this._requiredParams = ["uploadEndpoint"]; // These parameters will be ignored when updating config from Mouselog server

    this._ignoredParams = ["scope", "impIdVariable", "sessionIdVariable", "disableException"]; // Type: Boolean
    // If `enablePingMessage`, Mouselog will send a ping message with empty trace immediately after initialization

    this.enablePingMessage = false; // Type: Boolean
    // If `recordKeyboardEvent`, Mouselog will record masked keyboard event

    this.recordKeyboardEvent = true;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Config, [{
    key: "build",
    value: function build(config) {
      var _this = this;

      var isUpdating = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      try {
        this._requiredParams.forEach(function (key) {
          if (!Object.prototype.hasOwnProperty.call(config, key)) {
            throw new Error("Param ".concat(key, " is required but not declared."));
          }
        }); // Overwrite the default config


        Object.keys(config).forEach(function (key) {
          // Overwriting Class private members / function method is not allowed
          if (_this[key] !== undefined && key[0] != "_" && typeof _this[key] != "function") {
            // Do not update some `ignored` parameter from server configuration
            // PS: Dont use "array.includes" because it is not supported in IE
            if (!(isUpdating && _this._ignoredParams.indexOf(key) != -1)) {
              _this[key] = config[key];
            }
          }
        });

        this._formatUrl();
      } catch (err) {
        _debugger__WEBPACK_IMPORTED_MODULE_3__[/* write */ "b"](err);
        return false;
      }

      return true;
    }
  }, {
    key: "update",
    value: function update(config) {
      return this.build(config, true);
    }
  }, {
    key: "_formatUrl",
    value: function _formatUrl() {
      if (this.endpointType == "relative") {
        this.absoluteUrl = url_join__WEBPACK_IMPORTED_MODULE_2___default()(window.location.origin, this.uploadEndpoint);
      } else if (this.endpointType == "absolute") {
        this.absoluteUrl = this.uploadEndpoint;
      } else {
        throw new Error('`endpointType` can only be "absolute" or "relative"');
      }
    }
  }]);

  return Config;
}();

/* harmony default export */ __webpack_exports__["a"] = (Config);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
  }
  /* istanbul ignore next */
  else {}
}('dcopy', this, function () {
  /**
   * Deep copy objects and arrays
   *
   * @param {Object/Array} target
   * @return {Object/Array} copy
   * @api public
   */

  return function (target) {
    if (/number|string|boolean/.test(typeof target)) {
      return target
    }
    if (target instanceof Date) {
      return new Date(target.getTime())
    }

    var copy = (target instanceof Array) ? [] : {}
    walk(target, copy)
    return copy

    function walk (target, copy) {
      for (var key in target) {
        var obj = target[key]
        if (obj instanceof Date) {
          var value = new Date(obj.getTime())
          add(copy, key, value)
        }
        else if (obj instanceof Function) {
          var value = obj
          add(copy, key, value)
        }
        else if (obj instanceof Array) {
          var value = []
          var last = add(copy, key, value)
          walk(obj, last)
        }
        else if (obj instanceof Object) {
          var value = {}
          var last = add(copy, key, value)
          walk(obj, last)
        }
        else {
          var value = obj
          add(copy, key, value)
        }
      }
    }
  }

  /**
   * Adds a value to the copy object based on its type
   *
   * @api private
   */

  function add (copy, key, value) {
    if (copy instanceof Array) {
      copy.push(value)
      return copy[copy.length - 1]
    }
    else if (copy instanceof Object) {
      copy[key] = value
      return copy[key]
    }
  }
}))


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports =  true && exports;

	// Detect free variable `module`.
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk’s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters…
			if (bitCounter++ % 4) {
				// …convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var d;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '0.1.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return base64;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)(module), __webpack_require__(6)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(15);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(14);
module.exports = self.fetch.bind(self);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input.toString().replace("http://","https://"), init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
// Webpack cannot simply export an ES6 class
// So wrapping the class constructor is a must


function init() {
  var res = new _index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
  return res;
}



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');

module.exports = __webpack_require__(17).polyfill();


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18), __webpack_require__(6)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
});