/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/HasherView.js":
/*!******************************!*\
  !*** ./src/js/HasherView.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HasherView; }
/* harmony export */ });
class HasherView {
  static get selectorDropFiles() {
    return '#drop-files';
  }
  static get selectorHashers() {
    return '#hashers';
  }
  static get selectorHash() {
    return '#hash';
  }
  static get markup() {
    return `
			<div class="hasher">
				<h5>Hasher</h5>
				<label for="drop-files">
					<span>Drop files here</span>
					<span>or</span>
					<span>Click to select</span>
					<input type="file" max="1" class="d-none" id="drop-files">
				</label>
				<label for="hashers">
				Hash algorithm:
					<select id="hashers">
						<option value="MD5">MD5</option>
						<option value="SHA1">SHA1</option>
						<option value="SHA256">SHA256</option>
						<option value="SHA512">SHA512</option>
					</select>
				</label>
			</div>
			<span>Calculated Hash:</span>
			<span id="hash"></span>
		`;
  }
  constructor(element) {
    this.element = element;
  }
  render() {
    this.bindToDOM();
    this.registerEvents();
  }
  bindToDOM() {
    this.element.innerHTML = HasherView.markup;
  }
  registerEvents() {
    const worker = new Worker('./worker.js');
    const hashers = this.element.querySelector(HasherView.selectorHashers);
    const hash = this.element.querySelector(HasherView.selectorHash);
    const dropFiles = this.element.querySelector(HasherView.selectorDropFiles);
    dropFiles.addEventListener('change', () => {
      const message = {
        type: hashers.value,
        file: dropFiles.files[0]
      };
      worker.postMessage(message);
    });
    hashers.addEventListener('change', () => {
      if (!dropFiles.files[0]) return;
      const message = {
        type: hashers.value,
        file: dropFiles.files[0]
      };
      worker.postMessage(message);
    });
    worker.addEventListener('message', event => {
      hash.textContent = event.data;
    });
  }
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HasherView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HasherView */ "./src/js/HasherView.js");

const app = document.querySelector('#app');
const newsView = new _HasherView__WEBPACK_IMPORTED_MODULE_0__["default"](app);
newsView.render();

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/hasher.css":
/*!****************************!*\
  !*** ./src/css/hasher.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_hasher_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/hasher.css */ "./src/css/hasher.css");




// Точка входа webpack
// Не пишите код в данном файле
}();
/******/ })()
;
//# sourceMappingURL=index.js.map