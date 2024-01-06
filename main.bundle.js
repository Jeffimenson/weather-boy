/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSlider)
/* harmony export */ });
function updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide) {
  var canSlideForward = currSlide < maxSlide - 1;
  var canSlideBack = currSlide > minSlide;
  nextButton.disabled = !canSlideForward;
  backButton.disabled = !canSlideBack;
}
function createSlider(nextButton, backButton, sliderElm, cardCount, cardsPerSlide, isGrid) {
  var minSlide = 0;
  var maxSlide = cardCount / cardsPerSlide;
  var currSlide = 0;
  var calcedWidth = 100 * maxSlide;
  sliderElm.style.width = "".concat(calcedWidth, "%");
  if (isGrid) {
    sliderElm.style.gridAutoColumns = "".concat(calcedWidth / cardCount, "%");
  }
  nextButton.addEventListener('click', function () {
    if (currSlide < maxSlide - 1) {
      currSlide += 1;
      sliderElm.style.right = "".concat(currSlide * 100, "%");
    }
    updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
  });
  backButton.addEventListener('click', function () {
    if (currSlide > minSlide) {
      currSlide -= 1;
      sliderElm.style.right = "".concat(currSlide * 100, "%");
    }
    updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
  });
  updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
  var changeCPS = function changeCPS(cardsPerS) {
    maxSlide = cardCount / cardsPerS;
    calcedWidth = 100 * maxSlide;
    sliderElm.style.width = "".concat(calcedWidth, "%");
    if (isGrid) {
      sliderElm.style.gridAutoColumns = "".concat(calcedWidth / cardCount, "%");
    }
    updateButtons(nextButton, backButton, currSlide, maxSlide, minSlide);
  };
  var getCurrSlide = function getCurrSlide() {
    return currSlide;
  };
  return {
    changeCPS: changeCPS,
    getCurrSlide: getCurrSlide
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary: #519872ff;
    --primary-lighter: #09bc8aff;
    --secondary: #118ab2ff;

    --neutral-dark: #2b303aff;
    --neutral-mid: rgb(127, 131, 136);
    --neutral-light: #ebebebff;

    --semantic-bad: rgb(207, 78, 100);
    --semantic-good: #37FF8Bff;   
}

html { 
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    color: var(--neutral-light);
}

body { 
    height: 100%;
}

* {
    padding: 0;
    margin: 0;
}

button, input, label {
    box-sizing:content-box;
    border: none;
    background-color: inherit;
    font-family: inherit; 
    font-size: inherit;
    color: inherit;

    cursor: pointer;
    display: block;
}

button:active, input:active, label:active{
    cursor: default;
}

:where(textarea),
:where(input[type="text"], input[type="search"], input[type="password"], input[type="url"]){
  appearance: none;
  border-style: solid;
  outline: none;
} 

/* input::placeholder {
    color: var(--primary-fade);
    color-scheme: var(--primary-fade);
} */

ul {
    list-style: none;
}

svg {
    width: 30px;
    fill: var(--neutral-light);
}

a {
    text-decoration: none;
    color: inherit;
}

.hidden {
    display: none;
}

/* Actual custom styling things below */ 
html {
    height: 100%;
}

body {
    display: grid;
    grid-template-rows: auto 1fr;
}

/* header stuff */ 
header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 15px 40px;
    gap: 20px;
}

.day-changer {
    --day-entry-width: 180px; 
    display: flex;
    gap: 10px;
    align-items: center;
    width: var(--day-entry-width);
    overflow-x: hidden;
    position: relative;
}

.day-changer .slider {
    width: 300%;
    display: flex;
    position: relative;
    align-items: center;
    right: 0;
}

.day-changer .slider span {
    width: var(--day-entry-width);
    text-align: center;
    display: block;
}

header .day-changer .arrow {
    top: 8%;
    width: 30px;
    margin: 0 30px;
}

.todays-stats {
    grid-row: 1 / 3;
    grid-column: 2 / 3;

    justify-self: right;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.todays-stats .condition-icon {
    width: 60px;
    height: 60px;
}

.search-holder {
    position: relative;
    width: 50%;
}

#search {
    width: 100%;
    font-size: 1.5rem;
}

#search:invalid {
    border: var(--semantic-bad);
}

.search-holder .error {
    font-size: 0.7rem;
    color: var(--semantic-bad);
    position: absolute;
    bottom: -16px;
}


/* Main section */
main {
    display: grid;
    justify-items: center;
    align-items: end;

    padding: 20px 40px;
}

.carousel {
    width: 100%; 
    height: 100%;
    position: relative;
}

.slider-frame {
    width: 100%;
    height: 100%;
    display: flex;

    overflow-x: hidden;
}

.arrow {
    position: absolute;
}

.arrow:disabled svg {
    fill: var(--neutral-mid);
}

.left.arrow {
    left: -22px;
    top: 40%;
}
.right.arrow {
    right: -22px;
    top: 40%
}

.slider-board {
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-flow: column;

    /* width: 200%;
    grid-auto-columns: calc(200% / 12); */

    position: relative;
    right: 0;
    transition: right 0.3s linear;
}

.card {
    display: grid;
    grid-template-rows: 80% auto auto;
    justify-items: center;
    align-items: center;
    margin: 0 12px;
    box-sizing: border-box;
}

.card .temp-bar {
    align-self: self-end;
    text-align: center;
    background-color: gold;
    height: 100%;
    width: 100%;

    --top-radius: 16px; 
    border-top-right-radius: var(--top-radius);
    border-top-left-radius: var(--top-radius);

    box-sizing: border-box;
    padding-top: 20%;
}

.card .condition-icon {
    width: 50%;
    align-self:self-start;
}

.condition-icon {
    background-color: var(--neutral-dark);
    border-radius: 50%;
    object-position: 0px -5px;
    padding: 3px;
    box-sizing: border-box;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4BAA4B;IAC5B,sBAAsB;;IAEtB,yBAAyB;IACzB,iCAAiC;IACjC,0BAA0B;;IAE1B,iCAAiC;IACjC,0BAA0B;AAC9B;;AAEA;IACI,kCAAkC;IAClC,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,yBAAyB;IACzB,oBAAoB;IACpB,kBAAkB;IAClB,cAAc;;IAEd,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;;EAEE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;AACf;;AAEA;;;GAGG;;AAEH;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA,uCAAuC;AACvC;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,OAAO;IACP,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,kBAAkB;;IAElB,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,kBAAkB;IAClB,aAAa;AACjB;;;AAGA,iBAAiB;AACjB;IACI,aAAa;IACb,qBAAqB;IACrB,gBAAgB;;IAEhB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;;IAEb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,QAAQ;AACZ;AACA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;;IAEtB;yCACqC;;IAErC,kBAAkB;IAClB,QAAQ;IACR,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,qBAAqB;IACrB,mBAAmB;IACnB,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,WAAW;;IAEX,kBAAkB;IAClB,0CAA0C;IAC1C,yCAAyC;;IAEzC,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;AAC1B","sourcesContent":[":root {\n    --primary: #519872ff;\n    --primary-lighter: #09bc8aff;\n    --secondary: #118ab2ff;\n\n    --neutral-dark: #2b303aff;\n    --neutral-mid: rgb(127, 131, 136);\n    --neutral-light: #ebebebff;\n\n    --semantic-bad: rgb(207, 78, 100);\n    --semantic-good: #37FF8Bff;   \n}\n\nhtml { \n    font-family: Helvetica, sans-serif;\n    font-size: 18px;\n    color: var(--neutral-light);\n}\n\nbody { \n    height: 100%;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbutton, input, label {\n    box-sizing:content-box;\n    border: none;\n    background-color: inherit;\n    font-family: inherit; \n    font-size: inherit;\n    color: inherit;\n\n    cursor: pointer;\n    display: block;\n}\n\nbutton:active, input:active, label:active{\n    cursor: default;\n}\n\n:where(textarea),\n:where(input[type=\"text\"], input[type=\"search\"], input[type=\"password\"], input[type=\"url\"]){\n  appearance: none;\n  border-style: solid;\n  outline: none;\n} \n\n/* input::placeholder {\n    color: var(--primary-fade);\n    color-scheme: var(--primary-fade);\n} */\n\nul {\n    list-style: none;\n}\n\nsvg {\n    width: 30px;\n    fill: var(--neutral-light);\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n.hidden {\n    display: none;\n}\n\n/* Actual custom styling things below */ \nhtml {\n    height: 100%;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n/* header stuff */ \nheader {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    padding: 15px 40px;\n    gap: 20px;\n}\n\n.day-changer {\n    --day-entry-width: 180px; \n    display: flex;\n    gap: 10px;\n    align-items: center;\n    width: var(--day-entry-width);\n    overflow-x: hidden;\n    position: relative;\n}\n\n.day-changer .slider {\n    width: 300%;\n    display: flex;\n    position: relative;\n    align-items: center;\n    right: 0;\n}\n\n.day-changer .slider span {\n    width: var(--day-entry-width);\n    text-align: center;\n    display: block;\n}\n\nheader .day-changer .arrow {\n    top: 8%;\n    width: 30px;\n    margin: 0 30px;\n}\n\n.todays-stats {\n    grid-row: 1 / 3;\n    grid-column: 2 / 3;\n\n    justify-self: right;\n    width: 70%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n.todays-stats .condition-icon {\n    width: 60px;\n    height: 60px;\n}\n\n.search-holder {\n    position: relative;\n    width: 50%;\n}\n\n#search {\n    width: 100%;\n    font-size: 1.5rem;\n}\n\n#search:invalid {\n    border: var(--semantic-bad);\n}\n\n.search-holder .error {\n    font-size: 0.7rem;\n    color: var(--semantic-bad);\n    position: absolute;\n    bottom: -16px;\n}\n\n\n/* Main section */\nmain {\n    display: grid;\n    justify-items: center;\n    align-items: end;\n\n    padding: 20px 40px;\n}\n\n.carousel {\n    width: 100%; \n    height: 100%;\n    position: relative;\n}\n\n.slider-frame {\n    width: 100%;\n    height: 100%;\n    display: flex;\n\n    overflow-x: hidden;\n}\n\n.arrow {\n    position: absolute;\n}\n\n.arrow:disabled svg {\n    fill: var(--neutral-mid);\n}\n\n.left.arrow {\n    left: -22px;\n    top: 40%;\n}\n.right.arrow {\n    right: -22px;\n    top: 40%\n}\n\n.slider-board {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-auto-flow: column;\n\n    /* width: 200%;\n    grid-auto-columns: calc(200% / 12); */\n\n    position: relative;\n    right: 0;\n    transition: right 0.3s linear;\n}\n\n.card {\n    display: grid;\n    grid-template-rows: 80% auto auto;\n    justify-items: center;\n    align-items: center;\n    margin: 0 12px;\n    box-sizing: border-box;\n}\n\n.card .temp-bar {\n    align-self: self-end;\n    text-align: center;\n    background-color: gold;\n    height: 100%;\n    width: 100%;\n\n    --top-radius: 16px; \n    border-top-right-radius: var(--top-radius);\n    border-top-left-radius: var(--top-radius);\n\n    box-sizing: border-box;\n    padding-top: 20%;\n}\n\n.card .condition-icon {\n    width: 50%;\n    align-self:self-start;\n}\n\n.condition-icon {\n    background-color: var(--neutral-dark);\n    border-radius: 50%;\n    object-position: 0px -5px;\n    padding: 3px;\n    box-sizing: border-box;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/jeff-query/index.js":
/*!******************************************!*\
  !*** ./node_modules/jeff-query/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

// Dom manipulation 
function query(selector, parent=document){
    return parent.querySelector(selector);
}

function queryAll(selector, parent=document){
    return parent.querySelectorAll(selector);
}

function getNextSeparator(start, selector){
    const nextHash = selector.indexOf('#', start);
    const nextDot = selector.indexOf('.', start);

    if (nextHash === -1){
        return nextDot;
    } else if (nextDot === -1){
        return nextHash;
    }
    return (nextHash > nextDot) ? nextDot : nextHash;
}

function make(selector, parent){
    let lastInd = getNextSeparator(0, selector);
    
    const correctedLastInd = (lastInd > -1) ? lastInd : selector.length;
    const typeName = selector.slice(0, correctedLastInd);
    const type = (typeName.length === 0) ? 'div' : typeName;

    const classes = [];
    let id;
    while (lastInd > -1){
        const ind = getNextSeparator(lastInd+1, selector);
        const correctedInd = (ind > -1) ? ind : selector.length;
        const subStr = selector.slice(lastInd+1, correctedInd);

        if (subStr.length === 0){
            throw console.error('Usage error: Tried to use two symbols for class and/or id in a row.');
        }
        const sym = selector.at(lastInd);
        if (sym === '.'){
            classes.unshift(subStr);
        } else if (id === undefined) {
            id = subStr;
        } else {
            throw console.error("Argument error: elements can't have multiple ids");
        }

        lastInd = ind;
    }

    const newElement = document.createElement(type);
    for (const clazz of classes){
        newElement.classList.add(clazz);
    }
    if (id) newElement.setAttribute('id', id);
    if (parent) parent.append(newElement);
    return newElement;
    
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


// export statement
exports.make = make;
exports.query = query;
exports.queryAll = queryAll;
exports.insertAfter = insertAfter;

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/weather/64x64/day sync recursive \\.png$":
/*!***************************************************!*\
  !*** ./src/assets/weather/64x64/day/ sync \.png$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./113.png": "./src/assets/weather/64x64/day/113.png",
	"./116.png": "./src/assets/weather/64x64/day/116.png",
	"./119.png": "./src/assets/weather/64x64/day/119.png",
	"./122.png": "./src/assets/weather/64x64/day/122.png",
	"./143.png": "./src/assets/weather/64x64/day/143.png",
	"./176.png": "./src/assets/weather/64x64/day/176.png",
	"./179.png": "./src/assets/weather/64x64/day/179.png",
	"./182.png": "./src/assets/weather/64x64/day/182.png",
	"./185.png": "./src/assets/weather/64x64/day/185.png",
	"./200.png": "./src/assets/weather/64x64/day/200.png",
	"./227.png": "./src/assets/weather/64x64/day/227.png",
	"./230.png": "./src/assets/weather/64x64/day/230.png",
	"./248.png": "./src/assets/weather/64x64/day/248.png",
	"./260.png": "./src/assets/weather/64x64/day/260.png",
	"./263.png": "./src/assets/weather/64x64/day/263.png",
	"./266.png": "./src/assets/weather/64x64/day/266.png",
	"./281.png": "./src/assets/weather/64x64/day/281.png",
	"./284.png": "./src/assets/weather/64x64/day/284.png",
	"./293.png": "./src/assets/weather/64x64/day/293.png",
	"./296.png": "./src/assets/weather/64x64/day/296.png",
	"./299.png": "./src/assets/weather/64x64/day/299.png",
	"./302.png": "./src/assets/weather/64x64/day/302.png",
	"./305.png": "./src/assets/weather/64x64/day/305.png",
	"./308.png": "./src/assets/weather/64x64/day/308.png",
	"./311.png": "./src/assets/weather/64x64/day/311.png",
	"./314.png": "./src/assets/weather/64x64/day/314.png",
	"./317.png": "./src/assets/weather/64x64/day/317.png",
	"./320.png": "./src/assets/weather/64x64/day/320.png",
	"./323.png": "./src/assets/weather/64x64/day/323.png",
	"./326.png": "./src/assets/weather/64x64/day/326.png",
	"./329.png": "./src/assets/weather/64x64/day/329.png",
	"./332.png": "./src/assets/weather/64x64/day/332.png",
	"./335.png": "./src/assets/weather/64x64/day/335.png",
	"./338.png": "./src/assets/weather/64x64/day/338.png",
	"./350.png": "./src/assets/weather/64x64/day/350.png",
	"./353.png": "./src/assets/weather/64x64/day/353.png",
	"./356.png": "./src/assets/weather/64x64/day/356.png",
	"./359.png": "./src/assets/weather/64x64/day/359.png",
	"./362.png": "./src/assets/weather/64x64/day/362.png",
	"./365.png": "./src/assets/weather/64x64/day/365.png",
	"./368.png": "./src/assets/weather/64x64/day/368.png",
	"./371.png": "./src/assets/weather/64x64/day/371.png",
	"./374.png": "./src/assets/weather/64x64/day/374.png",
	"./377.png": "./src/assets/weather/64x64/day/377.png",
	"./386.png": "./src/assets/weather/64x64/day/386.png",
	"./389.png": "./src/assets/weather/64x64/day/389.png",
	"./392.png": "./src/assets/weather/64x64/day/392.png",
	"./395.png": "./src/assets/weather/64x64/day/395.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/weather/64x64/day sync recursive \\.png$";

/***/ }),

/***/ "./src/assets/weather/64x64/day/113.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/113.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOTAxMDkzQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOTAxMDkzQkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5MDEwOTM4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5MDEwOTM5REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TCp8xwAABMBJREFUeNrsW11IVEEU3qtmCUWBBEXZS5liPUgJlgRGUWlBFog/RZkgaGWRiNBj0VMPuZapWJAZpIX9+VCpRVCQJhQWJpmlhP1QUA++ZH9q39Fz17l3d6+7d1d3LzsHvmbuzL1n5pw5c+bMWVPGxsZsoUxhthAnqQCpAKkAqQCpAKkAqQCpAKkAqQCpgNCkCLMfKori08BjzbYNKAr4sUHJsLX5xM/krTYigMpfAeRx/SXQZikL8GCFo1CUAglY3T0meTSi6AHOgMewZXwAJk58O4BTQC6et5jgsRVFDvNoZ57WUABWaxTFFaGpAgJEeCE8vWsXmuqZp6VOgUqgj+sJQJGu/wVQwujQ9R3ib4jeAlWW8wFYsb9YSRLuLjet0fV3o+h283myUC8hXtO2THR8mIHOZBUDcz4HrDfhAzYBNQb9ij/kUMyen2ocwN6+HbhMporV+mcw6bko6ETYCawFFnHXZ+A5cAe4buTx2T8U8xGaor5rVg5/+IAyIJEcHZk0JrjNzcQp6PkA1AI7BOGJlgAZQB0wgHdz3PBI421j5zFLg8EJrhLq8UALJlouTDoSuIrqRSBaa0YMLZFiGsn8gXCBTzWK+zyGSqsDrgCYYDYKWpleda4U2gr7tJ7NfoLmALHAOiCVkcxx4WwNazo1zgrPN4Q6jZWGsXN8nr+vPsDF3ozDxA5yGwlRozH05QZqH+VD75umNQv8mpgfKbbTla8xLYe/FOBiv85DMQgscAgf6yHzNxolfCK1QeA/03EZms5AKM8hfBSbuKe0Eoh0PC0FMq2YD9jlqC1z6ezcE7m+GE3L7qCLBPk+r1/XZzBV1RkmOVqjTQxA3/Q7npKEcRP5CBSJttqjmQ6FC4T7vEr55KE5OJrvWM1IE9yjnI5GlTbqLkpEzWYV4O8tYLk/NvDFAho4kyNSF8cGw7CCoXErGMG/dJWZ5SV3bTD8Vah38A1SpP6AxwEufMRDFJvHH+KAxV4O8FEj1k0oNdNqx2CzRhhv5jfK30zSbSseg5QRGhqv/fTSSCkanAx7vgBNQa8ACoWBYsDOfoCEP66J597x6hqtfK9TKFyqRoHgfYnH8Fsixy8+gJOeFZzGIreXiEm/5ssQZXazNcdbDJ/z6uXnF/Cdzf63Zpha8CniMVJQPOX2Hs4UPQi4D+DUdZuQwwtX4wNMkGa1n5IcGu/ex778CfCYwifgvZPwF4DDwnOO7grexpejgG+BXqFOom2H4GXCdZnMN5evtz+cTN554ejI24vvCoERgc9RTqT0uRk7MFuAo75OTolVGiUwOSW2j7M/lCRdKAhNKbFbwLUpUmIUURwBDlAmwdeUmL+SomEGEz4NrDaxtZLEzJKL/jB/yDFtgRBPMh3FPXaM57FaxzwUnpIohXyHTMd3LZ4s5EyHwlMJQaZaLjjGAV1/PCfGiF5ByC7d3lY1bKeo0ijbHKyBEHnweCHHU63rJ+HrGKm6virBwcVzqs06kSDvz3yhqcSbFeR3xe2Sb/TjS9ApgH/IpBU+aZv4oaPVBI9WDoFPEC+OKYLqOjyVAMM8eV94ZAVzPsBXGhRujP2BmoQi/8dIiJNUgFSAVIBUgFSAVIBUgFSAVIBUgFRAaNJ/AQYANNcoK0RQ0j8AAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/weather/64x64/day/116.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/116.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOTAxMDkzRURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOTAxMDkzRkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5MDEwOTNDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5MDEwOTNEREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wiSTJgAABpdJREFUeNrsWmlo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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/119.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/119.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOTAxMDk0MkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOThENDZEMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5MDEwOTQwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5MDEwOTQxREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pdpJXgAABDJJREFUeNrsmUtoE1EUhk/ebdJH0jRJH2mbikpB24JUcKGICIJKcSUibqyCG1G6EBQXuhXcCLpRcaOuFFyoIOJrURXpyheuXLU09pG2qYnWpG3qf8LcOmlTmiaTmbTeAz83maYz83/33nPPnTHNz8/T/xwmCUACkAAkAAlAApAAJAAJQAKQACQACUACkACy/8hkKvqNfPr8xY2mCaqBklAYGujsaM+7h3LyZiQAmG5DcwLqhtqy/GQSegXdh54ARmpdAIDxRjRXoGN8+hz/7RvUCwgv1jQAmN+P5h7kVR83m81U5nCQxWrFjacokUjSzMxMtlNcg84BxNyaAwDz3ON32a84Vl1dRV6vl1xO55LrJJNJmoxGKRIZp7m5DL8PoaMrQSgpADC/G81rYd5ut1NzU5CcML5SsPmhoTBFp6bUh28AwJk1AQDmPWi+Qg383eksp9ZQiCwWy6rOMzw8QqNjY+pD3YDwtBAAZp2W24vCvBVzPNTSsmrzHHV1AfJ43BmjAHDthdyYtQhLmwPNPmgPtAni3u8Sfw82NqYh5BuNDQ0Uj8eRIGf5awt0REmqxgKAcT5XL2doKJDtNzz0q6oqC7oOrxY+n4/C4R/iUE8hAMwameee+ABdXc48h8ft0QS2x+1W56WduL7LsBGAi4fQvOXRKY5xhueb5AxvtVpoLpWi6enpgntfBOeP8rIy+o1zImzQFqhfdwBKAnogzHOv1NfXkbemZsnKUeFyaZpr7CiaFACk7CH6jRgBPOe3C/OtrSHNjS4/CjJm72bdd4Po/XJlx+YW2dnrrdFtGzswOEjR6NTi6vAU6oKoXnXAAWGea3g9zYvqcFEchvrQMb6ijgBcwKQsPZeUdThdoPh9PtI7eK/AleHExKT6cB/XILxP0HwEwDyn8WfQHWGew5VDPV+M4NWGC6vm5iZ1J+2Cjms+AmCea9fn0N6FRISihJe6YDBINpuVjIzR0TEaHhkRX79zYuxo37qiudXc9Wm1eb/flx72XJmVQtTWeikyPk6zs+kSeSPUCX3UZAooZe558T0Q8FNdIFAy5kWJvKjQ2qFlKdwldnM2m82QhJdLOOyOjM2jlgDaxYfKykpdnhLnE4vyWUJLAGULSSOPfbxeMf2vNOYY0hLAQnr9k0iUpHlOfrF4XH3ojZYA3okPsViMktmf1hoa/HwglVp4bfAehdCgZgBwMh5OL8U8GxgYVF/M8Hk/FF7ywPRyMQqhbcpDD1s64zrsFPD7yeWqwBKkf1LkvUA8/ovGIhFKZE7L6+iws7luhla1FwCEk2huU+5vc/QOfjTWI94XFOWxOCAcQnOLi8ESMs7j/wJ0U/0ytWjvBQChQtlwHIQ28IwwwDS/QeZ3DY+hRzD+c4W6IH8A6zkkAAlAApAAJAAJQAKQACQACUACkAAkAAlAAvj/4q8AAwAol9PIoNtGxQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/122.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/122.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOThENDZENURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOThENDZENkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5OEQ0NkQzREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5OEQ0NkQ0REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kcJKlQAABHxJREFUeNrsWl9MU1cY/wqlLbQ1tbXyT1ptEVpgAhMVBWOMiUYND3tYjPFhUxMT4zQ+LGHZw/a6xBezmexh2Yv6pIkmauKDGB/8E8ceAGWLggYFtghGQfljW6Ds9zX3sFsGWaG3t0XOl/xy7jn39tz7+53vfuc759YwPT1Ny9myaJmbFEAKIAWQAkgBpABSACmAFEAKIAWQAkgBlqMZE7nIYDCk/EF+PPezA0UJ4AQiwN9A76mvji96wyKRvQ5DQhelSACQDqA4AjQBgTkuGQJuAxeB6xAj+lEIAOLFKH4ADnH3Cf7sT+A0RLi1pAUA+b0oLgCuuHfRaCS73U5ms4miU1EaHRuj8fHxubo4C3wNIaaWnAAgzyN+Xh18i4uLqNTvJ5fLSVlZ8TF5DAL0vuyl7mfPKRKJqE9dBg7+nwiJcDOSTgbyO9TkrVYrbd5UFyM+n1nz8igYDJDf76O2tg7q6+8Xpz4HBoCTyT6XLh4A8itRdAJFXHc6V1JjQwOZTDkL6qez8w968rRL3dQEL7iRjAfolQd8K8hbLBZq2LZ1weTZqqoqyev1qJvOQVxTyvOABY62GcVuYCewHuDRrxPnN35ai0BnXnT/tTXVNDgwSB9CIa56gQNKUE2vACDOfZ3mCA3kz3UNu35hYUFymRtmi/LyMmrveCSaDicjQJZG5HkkHgJn5iMfGy6vVxOxPR6POi414v7WtHkAbr4WxT2e0USbzWYlT0kJORHhLXD3iYkJGhoaTnr0hXH8cDgc6JMTReJgUgm06i6AEoAuCfI8j2/YUEV+n+8/M4fb7dY01tjtNiEAKWuI1nR4AL/zmwT57Y0NILpKl2klxxj36GW65wEY/VxlxeaIRefaGoz8Ot2Wsb+1/k59ff2zs8NjyAuG9coD9gnyK1bYybdura7r+EhkYnYTZ4d3MTDulHoAbmBQpp7vlHk4lqAEystIbxsdHaOnXV3U0/NC3XyXcxBeJ2juASBvR3ET+FWQZ1vlcqVlN4dnG06s6rdsVg/SduBLzfMAkM9GcRXYMxOIcoyUn7+arDYrpdPWrCmmioqguukbxVM1nQVOALtEJRAopyCQnZ1NmWBl60vpGZbN4XCYq6VANdCuiQcoaW6zqFdC7arKiowhz8bPUlRUqG6q1/IVqBOrubzc3NjoZ6LZbDZ1tUBLAT6Z6bUgX5dd4sXYdDRuzzSspQCWf/NwE2WqDQ0Pq6t/aSnAgDh4PzKSkeRDoRC9ejWgbrqjpQD3xQHfZJ7d2rRaR8djmpqa2SN9gESoTzMB0Bm7UwsfR/GecR4+OTmZGe89sr229rgNU7bvU7EabFY2PXLevHlLLbfvUEUwQO7VbjKmYToMRyL0evA1dXV308jIqPrUTxiwlpSsBZAPHEXxCyX+NUdv462xw+J7geZrAXTMa4DPgMEMI/4OOA58kcgXo6T3A+AJNmXBsR/wAeY0kOZPRfyt4RpwBcTfzxUfNBHgYzb5DxEpgBRACiAFkAJIAaQAUgApgBRACiAFkAJIAZaf/SPAADU9WPxSckj+AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/143.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/143.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQTY2MjM5RURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQTY2MjM5RkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5OEQ0NkRCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5OEQ0NkRDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FQA/8AAABKxJREFUeNrsmntoU1ccx5Ob3JtX0yZxSWofSV+WwnAdzoF/KCKDyeYqc2wMEZz1gRtjwz8Km/4xB4MxNhBB/UPEf+rGNp8wNzpwKqLbpEN80tXa/mGfW9dhk7RJ8973wLlyViLW5uTmxp4DX869J8k95/c5r9/v3Biz2axhISejACAACAACgAAgAAgAAoAAIAAIAAKAACAACAC5v2Q0FrwhN2/ddiGrhTxQAhqFBlufWzrvHpqTbcUEAKNbkG2F2qCWHF95AJ2HvobOAkbmqQAAw6uRfQFtIo+f4896oF2AcK6kAcD4V5AdgxbNqmNGkqQhKIw2yZlMZjHkzfGI/VAHQKRLDgCMJz3eCUlqGxVF+d1VUfGT1/tMj8lk+p9RoXDYNzHx75poNLoe7XQyH52ANj4Ogq4AwPjVyC6oxqOn/4LR+/w+X+/jfhuLxZz3B4feTSQSq5jigwDwQUkAgPFuZHegKnKPnu5rqK//1GazTj3Jc/oHBjZHo7E3maI2QPgxHwCSRtvtHtV4wHxQFwx89qTGk9TU2NhpsVgusKMAcJV8GmYuwNZmQfYytAZaApHeX65+7vG4DzkcjtB8nw94h+/1DzyPBZL4C0HobbqoFhcADCfP2kVWaMifszKzqa+6qqo7n3owAmIAeCoSieygRe35AJA4GU964ir01aOMJ8lus5/nUV+l338RmeoUrUT9jqKNAFReh+wKVP2QqiSNWa3WS3abrVdW5FAqlbZjJW/yLPL8wQMAWT+wkA6k02kyxWToWahbcwB0ATrOGJ92Op1Hg4HaLkCYvUff5rnWAMAIBWCgMUR3MUYAmfMv0uuUz+vdW1np52roI+euJMWY22bN1wD0vg3ZbvW+3Ok8opXxJGEXYOf952jPcRpRarYIvgq56HAcCgYDP2sZx2ezmbJZRW9BlwHBW9DzAFRgpFvPJ3QfNmBb6mxsqD+p9WHG5OTk4vHxf96YicfXMsWXiQ9C4gTuniCMJwFJF3RUNZ6kMofjz2Kc5rhcrrHm5iWH3G7Xl8y2SOKFLdynAIw3ITsDrWVGRlSWzdftDvtYMY+1amtqrmAUfssUfUxHKtdd4H3opYdOjd12IhgIfC/LcsKggxSorTnTe7fvNQz7ChI2QK3QDS4jgLq5H6n3oP0NApNjejGeJNIWi6JcZYpW8JwCy9VoDvvvRH1d8KRBh8ksy+xUrOQJYKl6oSjytRxeni4Shr+JuY3zBGBlPLCIQacpmUw2MbcjPAH8rV6kkqkaPRo/NT3tBoBlTNFFngB+VS8SyeQL4XDYpzcAw8Mj2zEFLPT2NzhCQ9wA4GFkOP2iLrjDI6Md8XjcpgfDEROY+u7175x1YLqXuyuMrXAZPfSQ6VowWl5e/h28sFuy2RzX2vCZmbgzFAq1RqamXgeEauajA+iwD+miyDcWAIRtyI4Y5v42R+tEjsba1fcF3GMBPJjEABugcZ0ZTg5Z34Pemcsbo7yiQToSymjAsQ5qgCxFMJp4oeRdww/QaRgezuEXFAZAqSQBQAAQAAQAAUAAKCAA+AO6+I8dfADjfAFIhgWe8n01Fip1AOKfogKAACAACAACwAJO/wkwACdcHC6EjF31AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/176.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/176.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkI5OURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkI5QURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNjYyM0E4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQjk4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i0CtcQAABxtJREFUeNrsWnts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/179.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/179.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkJBMURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkJBMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCNDZCQjlGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQkEwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+P496PQAAB45JREFUeNrsW3ts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/182.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/182.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzMyOEI2NERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzMyOEI2NURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDMzI4QjYyREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDMzI4QjYzREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+x5UfhwAAB8dJREFUeNrsW2ls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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/185.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/185.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNjY4MUYxOURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNjY4MUYxQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjgxRjE3REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2NjgxRjE4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z4S1kwAABO5JREFUeNrsW19MW1UY/wqlLbRdunYd/0bLWgYt4DaUzSksxpho1OzBB2PMHnSamCxOs4clMz7ok8bpi9Elxiy+qE+azERNfJBlD1Pj8AFQNA5GNgF1MCc4KLYFir+vuQdPJ4T+ub292PMlv5x7v3s5936/77vf+c45xbKyskLlLBVU5qIIUAQoAhQBigBFgCJAEaAIUAQoAhQBioByFGs2N1kslqK/yFun3/GgaQK8QBL4DRh//tjRvBcsslnrsGR1U5EIgNERNE8Bh4DIGrfMAOeAD4HPQEbqf0EADG9E8xpwmLvP8s9+Ao6DhC83NQEw/kE0HwC+jG/RaiW32012u41Syymaj8VoYWFhrS7eBE6AiOVNRwCMZ4+/LyffxsYGagmHyefzUkVFZk6OgYDxX8Zp9PIYJZNJ+dLHwOMbkZCNbVYySGD8PbLxTqeT9u/rThu+njhraigajVA4HKKBgSGamJwUlx4FpoDnCn0vQyIAxm9FMww08LnXu5V6e3rIZqvKqZ/h4R/p50sjsuoQouDzQiLAqDrgRWG8w+Ggnrvvytl4ls7ODgoGA7LqNMi1Fb0OyNHbdjT3A/cCuwD2fre4fsftXUh09rz779q7h6anpunveJxPg8BjWlItLQEwnPs6zhkaqF3rHg79+vq6wio3jBZtba00OPS9UB0phIAKnYxnT3wLvLGe8Wl3BYO6kB0IBOS81IvnO0sWAXh4M5qveEQTOpfLSYGmJvIiwzsQ7ouLizQzM1uw94Vw/vB4POiTC0XiZNIB9BtOgJaAPhLG8zi+e3cnhUOh/4wcfr9f11zjdrsEAaTNIfpLEQH8ze8Txh/s7YGh2wwZVqqsGa/eangdAO9XazM2Tzo7d+2F53caNo292P8dTUxM3lodPoO6YNaoOuAhYfyWLW4K7Ww2dB6fTC7equLq8AIc4y9qBOABFm3oeUkbh9MFSqStlYyW+fkYXRoZoStXrsrqC1yD8DxB9wiA8W40XwDvCeNZtvl8JVnN4dGGC6sDd+6XnXQQeFL3OgDGV6L5BHhgNRFVWam2djs5XU4qpezY0Ujt7VFZ9YIWqbqOAs8C94mTSKSNokBlZSWZQVp3tdBlTJsTiQSftgB7gEFdIkArc0+K8w6w3dnRbhrjWfhdGhrqZdUBPT+BbjGbq6muTnvfjOJyueTTOj0JuG2117paQ1aJ85GVVMaaaUJPAhz/1uE2MqvMzM7Kp7/qScCUOLg5N2dK4+PxOF27NiWrzutJwNfigB+yzmptSWVo6AdaXl5dI/0GhdCEbgSgMw6nPj5O4TvjOnxpackc3z2qvYHBjAVTlpeLMRs8qS16VN248Sf1nTtP7dEI+bf7yVqC4TCRTNL16es0MjpKc3Pz8qW34bC+oswFUA88jeYMZb+bY7Tw0tgRsV+g+1wAHfMc4BFg2mSG/wUcBZ7IZseo4PUARIJLm3A8DIQAewmM5q0i3mv4FDgLw2+ulR+KtiCyGcRMGyOmFUWAIqDMRde9wbGxMf4py2FJFQOaw+HwH7jG6+VXAV4+4o29EPS/56o3ewS8yslXOj/DxmvHJzRjWN6VjMlVb14C8JL8O56zYoIGvK5FBnvzmKQ/lY9+s+SAV3TwsiHeLwoBeNkBLQpOmd37q9XSRsgjGVabpRLcCBb1n6OqEFIEKAIUAWUs/wgwAC6B5SPt0eNKAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/200.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/200.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0I1MUYyMURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0I1MUYyMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDQjUxRjFGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDQjUxRjIwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+217RlgAAB7tJREFUeNrsW2lsVFUUPrN12ukKXYCBLlBBxVKWskhBJUpYJGwxGmOiqKnRSCKoRP8IKEFBMYqCwQ2I0RhNwAQxggZFdgstaltks1Aa29IpwrTTQpdZ/M6bO9M3w3SY5U2XdE7y5d633/Pdc89yp1U5HA7qz6Kmfi5RAqIERAmIEhAlIEpAPxat9wmVShXWCx27KAXNNXF4SbWQcnqLsr6SPnUYio4M49k4YFifXAIYeAbwKbpn0c4L8buviOdXMRl9zQc8BDzDqwV4HwrEBEkgz/yrgAF4A8jvawR8BlSIPi+DF4J8fgPgmvWv4SOK+xQBGLAVzXLZqZW8LGTHTQDP8gBgmtfsF6J5VBxeF0uhd0WBAEn4BcrsQncOsAVol12zo6kRh2avR68AO8UyWod7a3qaAJV3aJCHQSiZiaYVA23wsZaz2ZRx7YzsnAZNHjACiAeu8nLBPdVez85Ccwjnb3Q1sIKCgiFojEAi0AJcLC0tvaJ0GLwVAXvQTAVeBz7CgDu6cGy5aFYI807xccs/wFZgM97R3IXC/OEZwBKACRri47ZLwI/ANpBRElECoNRc8TGX8Ey/BAX2yBRXiXXM3lwfwBhqWUG8Y5+X8lPQvAcUBqEPj205iDgfKQJuE4OaL7vMJp0LBczC3LcDj3u8IFYYrVZ4BnaJnnbDPuJJvONLMescEtcCGvlNen0sGeINFBOjp472drI0W6TWS9iRPgsSvorIEhBEzBZEjAaKMPCt4vzbHl48iakBkr2/CpiAC0BbJwk2u2rulLUTFqP/nOukRqOl7JwcyszKoaSkpJsGazZfo+pLVRK8xr0MJHwYEQKEslqxNr/gMCjC2RH3DUaREfgrI9gKyoVFcOjYb7RsPTQk0XU5LT2Dxk8ooNjYWyeGFksTnSw9QU2NjfLTD4OEHREhwAch+4XDIkoFxgS4CJkEuK6yyngq2n4H2cWns3OG05j8cUEVYjabjY4XH6MrDSZ5/jEaJNREtBgSRdAM99PBlEQ6PI8A+e7eTLfy6Zj5YJV3LhcNTZ5yNyUmJskX4QZF84AuCHieQ6Jz9MBd/j9gbtTSkeJk+qM8gepNMdLx6XMG95q/f+YsmH1syLGd/cKhA/vlDjYXVlAVqAVofSjI3v9z7ziOtV8k+p0qp3Q9sMYmLW3ZZqTv96ZSe7tvQxs+YkRYyktDSBlAg4cY6XJdrcsmnwDWhJMKJwD3+Xkm3t3rog48fjKRXntzOF29pvP78czMbEXS2aysbBcBLLPDJcC/0iQVQ8IT3Xwjm/vLK3PJau1cSgNT08hoHEqJCG06nY7aWlupER48ITFREQJS09Llh+M4v8AycIRKQLmo5Dycrqxf6e55JbW1dXpp5l3Ks3mPmzBRcnQeglwhY9Bg5So6rVYKn62tUmnBDmYg8F9oe4ILJWXNfp457O6ZRNkjlvj6DzKRsTkTOoPBQNPumRH2Gg+YBB1UaXUfjgKORWpDhBMgp5flzPRfYTZ/x9PR48nuSDJpSmG3KS+tyw6PfPsAlsEqQK0YAYgOg2T1/jr3hYtOY9uzb2CnU8r2ncpGSjgpYnhmHFKBxvWGJiwCoHgS8A661WjHi9NcDxySqpE2NW3ZZKTde9IU9+7BJEVzHpxP06bfC4eYJr/02K0igr9qkMl5CngLcHkxXlfT2Qp4G6zSFHfixW9ys2rNeo/n581fFPbvC+FIRflfdPFCpTw5uhNR4VxAiZBMnhYboPIXlYkNzZaJawo0ahXp7bJ3xsXFSSGpJ5VnyRszlpotFmpw1glqUbUWBWsBPK2nOWFjp8K7v5j5MtkmxndoFrvCUP7Y8TR0WCb1FmlsNNPB336V72NklJSU2AK2ACjbBhK4Vk9Cf4fXDs5ol/Isk+HxvdZej0tycgrFxydQS4uUrAwUZduZoDJBKP5zF5cWuDo860orH69tIZ3auftz3Wqgdrs+tPckuAlgGRw0AX7EvQMwSMGMTiovoPjS2zdSnPY6qjc1bT67nK62hUaAw26XH7YplQi5dv6cA46JUZSAyWnHJOVZyq6Ng/KpoSkP38Z+QCY1ShJQ796earYoOvuF6YeFAmo6aJoR8rtM9ZdRhrs3USsRBquVJMBdD1RXVZFSf2yp1OxbrR10qqJcfupbJWsBlh9EaJE2KE9VlPWa2W9va6Pi34/KnR+vg43h7gd4CMypCaFwNbqbpHIAWRcnHrkjR0nhJ5REaOrgI+7Z//NqPtU3cy3REeiCpxs3btDly3V0ofI8dXgWRkUYb4Nie4KyXIBv5B9GloQ7+4YYO+1eVk7JcVbP2bSqacGHeXSlWRfKazkELIXyH/vbEwz5T2TEjgvXCqtJ9utwKPLIJNNNyrPsLE0LVflzwANy5RW3AC9ryBZkzCTnj5qaQJ/Va+2qHUtPGZPjbGq1yqGK1dmlAbTbVI5Fm/JqTE0xtgBfxb8LnAA4Rf8Jylt9hUaf8VKOnhSk3usBh8BGxd/vpStDEQtQSPk0sdPEG7C8uTUCqXid0gQo5gMiICuoc/f5E6WVj6gPUHj25aKoJfRmC1jhQ/lusYQet4Dumv3ebAGcqrr+rG5zd85+r/EB0SgQjQKRn/2+FAW6bfZ7YxSI2Ox3ZQGq6L/O9nOJEhAloJ/L/wIMAH+TJLcDcrmfAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/227.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/227.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxODJFMTUxOURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxODJFMTUxQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3NDIzQzJFREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE4MkUxNTE4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iqLDBgAABXRJREFUeNrsW2toHFUUPrvZ7G6yu2GbdJtXs5vmuXk0aTSN1U0RUeqLgv4Qqf5oq1CsrdIfQlV8gygIIlrwRxGKSn8oGK2CoClFqqIRTNJEsZtKNYnSpNakzSbubl5+ZzMTJ+su3ce80syBjzv3zuTOnO+ee+45925Mi4uLtJbFTGtcDAIMAgwCDAIMAgwCDAIMAgwCDAIMAgwCDALWolhSechkMin+IW8eeduNogIoBKLAn8Dw4wf3Z7xhkcpehymlhxQiAEr7UTwE7AT8CR6ZAE4C7wOfgoyFa4IAKF6O4lXgQe4+xT/7GTgEEr5c1QRA+TtRvAcUrZiLFgu5XC6y2ay0ML9AoelpmpmZSdTFG8ATIGJ+1REA5XnE35U63/LyMqqprqaiokIym1f65GkQMPz7MA2d+5Wi0aj01ofArquRkIpuFlJJoPzNUuUdDgd1bG2PKZ5MHPn51NDgp+rqKurt7aeR0VHx1n3AGPBYtt+ligVA+XUoBoEyrhcWrqPOQICs1ty0+hkc/Il+ORuUNu2EFXyWjQWoFQc8LSpvt9spcNONaSvP0tzcRD6fV9p0BORaFY8D0hxtG4odwC1ALcCj3y7ev/66Njg6W8b9t21ppfGxcfonHOaqD7hfcKraEgDFua9D7KGB4kTPsOmXlpZkF7lhtaivr6O+/jNi095sCDDLpDyPxHfAa8mUjw2XzycL2V6vV+qXOvF+h2YWgJdXoviaVzSxzel0kLeiggrh4e0w99nZWZqYmMx69EVh/+F2u9EnB4rEzqQJ6FGdAMEBfSAqz+t4S0szVVdV/W/l8Hg8svoal8spEkBCDtGjhQXwnN8qKr+9MwBF16uyrORaVnx6nepxAEY/T8jY3DHv3LYFI79JtTT2+54faGRkND463Ie4YFKtOOAuUfmCAhdVbapUNY+PRmfjmzg6PI2B8ShqAXiBSVh6nhPW4ViA4q+vI7UlFJqms8EgnT//m7T5NMcgnCfIbgFQ3oXic+AdUXmW9UVFmuzm8GrDgdW2Gzqkg7Qd2CN7HADlc1B0AbcvO6JcCxUXbyCH00FaysaN5dTY2CBtelKwVFlXgQPArWLF76+nBiAnJ4f0IHW1NXQOaXMkEuFqDdAK9MliAUKYe1isN4Ht5qZG3SjPwt9SVlYqbdom5xRoF7O5/Ly82OjrUZxOp7RaIicBm5d7LSlWZZc4E1lcWLFnGpGTAPt/cbiV9CoTk5PS6h9yEjAmXlyZmtKl8uFwmC5cGJM2nZKTgG/EC35Jkt1aTaW/f4Dm55f3SL9FIDQiGwHojM2pm68XMM84Dp+bm9PHvEe019u3YsOU5XklssHDwqZH7qVLf1P3yVPU2OAnzwYPWTRYDiPRKF0cv0jBoSGamgpJb72FAetWJBdAPPAwiqOU+mmO2sJbY3vF8wLZcwF0zDnAvcC4zhS/DOwHdqdyYpT1fgAswSkkHHcDVYBNA6X5qIjPGk4AH0HxK4n8g2IbIqtB9HQwolsxfiGiSFByZoDnzC7gIHAb4BA2Ul5qbdl8Qk8EKOIDQAAf4AUF5/giLR2WPAJwsF4JEi7HPX8sg2//Av0cz9YHKGIB+LBhKPU6Lp8SAigxg3ohXnlBdmfwGibzuO6mABR/AEWHYPbSTJJz1Vrc5194fAUiuiR/9kkGrxrQqw/YkWRE2eEekNS7JBZzz7XkBH+kpfMCnv93SKck8DFn1BR3jAWr2JPG9Dom58cqFghBKZ77/EuwOQnR+6DA0QTPLqZBQMofo1kgBIV4P+4ZMTujpd8GsbyMewVJYvlUof84APIX8CzwKK/9QD4QAF4BQglG1a1pvHw1ZGEJ5kTXetLNZPzvsJEMGQSsaflXgAEAurb3T0bPr/EAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/weather/64x64/day/230.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/230.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxODJFMTUxRERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxODJFMTUxRURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE4MkUxNTFCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE4MkUxNTFDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9jDd7gAABYlJREFUeNrsW29MW1UUP4XSFtouHV3Hv9Gylj8tMBjKcAqLMRr/Zol+MGaauE2Txblp+GAyNVGjH9TEDzpd4ofFZFHjB01Ep4mJsixmahQTgYHGlZkpoBngpIOCpUDxd8p7+DpL1va9vj7kneSX++59l9t7fvfec8+592FYWlqi9Sx5tM5FJ0AnQCdAJ0AnQCdAJ0AnQCdAJ0AnQCdAJ2A9ijGVSgaDIesdef3Ymw4klUAxEAX+AIYfP3ww4wOLVM46DClVyhIBUNqP5CFgN+BPUmUSOAW8C3wCMmL/CwKgeAWSl4EHuPkU/+wnoBMkfLGmCYDydyB5B3AmrEWjkex2O5nNJootxig8M0Ozs7PJmngNeAJELK45AqA8j/jbUuNbUVFO1T4fOZ3FlJeXaJNnQMDwb8M0dP4Xikaj0lcfAHuuRkIquhlJJYHyN0qVt1qt1LajNa74amItKqJAwE8+n5d6e/tpZHRUfHUvMAY8JrdfqswAKL8RySBQzvni4o3U0d5OJlNBWu0MDv5IP58LSot2YxZ8KmcGqOUHPC0qb7FYqP2G69NWnqWxsYE8Hre06BjINWXdD0hztM1IbgVuAmoAHv1W8f2117TA0Jkzbr9lezONj43T35EIZz3AfYJRzS0BUJzb6mQLDZQkq8NTv6ysVJ7nht2irq6W+vrPikX75RCQp5DyPBLfAq+spnx8uDweRch2u91Su9SB37fmbAbgx6uQfMU7mlhms1nJXVlJxbDwFkz3+fl5mpwMyR59Udh+OBwOtMmOIrExaQB6VCdAMEDvi8rzPt7U1Eg+r/c/O4fL5VLU1tjtNpEAEmKInlzMAF7zO0Tld3W0Q9FNqmwrBcaErteq7gdg9AuFiM0Rt84t2zHyW1ULY7/r+Z5GRkav9A4PwC8IqeUH3Ckqv2GDnbxbq1SN46PR+SuL2Ds8g4FxZXUG4AcMwtbzrLAPxx0Uf10tqS3h8AydCwbpwoVfpcVn2AfhOEHxGQDl7Ug+A94SlWfZ5HTm5DSHdxt2rHZe1yYdpF3APsX9ACifj6QLuG3FEBUYqaRkM1ltVsqlbNlSQfX1AWnRk8JMVXQXOATcLGb8/joKAPn5+aQFqa2ppvMIm+fm5jhbDTQDfYrMAMHNPSLmG8B2Y0O9ZpRn4b6Ul5dJi3YquQRaxWiuqLAwPvpaFJvNJs2WKknAtpVWS0tUOSXORJZiCWemc0oSYPnXDzeRVmUyFJJmf1eSgDHxYWp6WpPKRyIRunhxTFp0WkkCvhYf+EdWOa3NqfT3D9Di4soZ6TdwhEYUIwCN8XTq5ucY1hn74QsLC9pY9/D2evsSDkxZnstGNHhEOPQouHTpL+o+dZrqA35ybXaRMQfb4Vw0ShPjExQcGqLp6bD01RsYsO6sxALwBx5GcpxSv81RW/hobL94X6B4LICGOQa4BxjXmOKXgYPA3lRujGSfB2Am2ISA4y7AC5hzoDRfFfFdw0ngQyg+lcw+ZO1AZC2Ili5GNCv6FyKynI+zA7w29gCHgVsAq3Bg8kJz07aTcuurIbJsABTii7qgYASfp+VLkUcAdsqroNRlmfVPZKDT52jnPdWMIDr5IpKn2B3nWElYVp3oxFG59VE3k++DjqKtzlQJMMqY/vcjaROmsTRi5Ji0Bu/5S44v0ZmuTOoL8nEGXRtQywbwDfDeVQzrIUm+K8P6BDLu1rIR/IGW7wV4Pd8u3X6BjzhypsTrqnTr86zZl2pnQNYJ1Y2g0EkOkviLrwUJoQfQoeNy66djA/D3BtU9QXSQz92GAHaNX6XlL78eBCaAanRqSmb9UBoEODIhQO7l6J/AM8CjvJcDRUA78BIQlls/mVJZ8ZevhhR2hLxkz0rVz6ZuBv1/h/VgSCdgXcs/AgwASNw29ft9Y3sAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/weather/64x64/day/248.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/248.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQTY2MjNBMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQTY2MjNBM0RCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNjYyM0EwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBNjYyM0ExREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ClgIKQAABLtJREFUeNrsmntoU1ccx29ucm9eTZvEJal9JH1ZhKEd6sA/NoYIyh5uY2yIDMZ8jA2G4h+Czj90IIhsIML0Dyf+UxXfEzbFwaYyfEw6RG2H62oLzr6mdtgkNWnefg+cK8cSsTYnNzfr+cGXc89Jcu/5fc45v/O4MeVyOWk6m0kAEAAEAAFAABAABAABQAAQAAQAAUAAEAAEgPxfMpmKXpGbnV1uJPWQF0pCQ9DdtrlzptxCk/KtlADg9Gwkq6Bl0Ow8X3kInYMOQj8BRvZ/AQCO1yLZAX1Mbj/Jn92C1gPCL2UNAM6/ieQANGPCM8ZlWe6HIqiTks1mZ0K+PLfYBW0AiEzZAYDzpMXbIVmro6qqv7urqs74fC/dMpvNTzkVjkT8IyP/LYrFYu+ini7mo+PQiudBMBQAOP8GkvOa82jpf+H0zoDf3/2838bjcdc/d/u/SCaTrzPFuwFgbVkAgPMeJH9CNSSPlu5pamz82m63jb3IfXr7+j6JxeIfMkXLAOF0IQBknabbzZrzgPmwIRTc9qLOE2tpbm63Wq3n2V4AuGohFbMUYWqzIlkCLYJmQaT1F2ife72ePU6nMzzV+wPe3tu9fa8gQJL1QghaToNqaQHAcXKv9SRCQ4G8D7OYe2prajoKeQ56QBwAT0aj0c9o0cpCAMicnCctcRX69lnOE3PYHed4PK86ELiARFsUvYbnO0vWA/DwBiSXoNonVGV52Gaz/eaw27sVVQmn0xkHInmLd4b3Dx4ASPxAIO3LZDJkiCnQy1CH7gBoADrGOJ9xuVz7Q8H6s4AwcY7u4hlrAGCQApDoHqKjFD2AjPlX6XXa7/Ntra4OcHX0mWNXluNMtlX3GIDWtyP5SstXulz79HKeGGYBdtxvR32O0R2lbkHwLchNu2N/KBT8Wc99fC6XrZhQ9BF0ERB8RT0PwANMdOrZQudhCdNSe3NT4wm9DzNGR0dn3r//4IPxRGIpU3yRrEHIPoH7ShDOkw3JWWi/5jyxCqfzr1Kc5rjd7uHW1ll7PB73N8y0SPYLn3IfAnDejOQUtJTpGTFFsVx3OB3DpTzWqq+ru4ReeJgp2kR7KtdZ4Eto8ZNFjcN+PBQMHlUUJSkZwIL1dae6/+55B92+imwboDboBpceQJe5G7U8aB/CxuSAUZwnRupiVdWrTNFCnkNggbabw/w70tgQOiEZ0CyKwg7Fap4A5mgXqqpcy7PKM4Sh+5uZbIInABuzAotKBrVUKtXCZAd5ArinXaRT6TojOj/26JEHAOYxRRd4ArisXSRTqfmRSMRvNAADA4NrMASsNHsFC6F+bgBwM9KdftUC7sDg0IZEImE3guPYE5h7bvd+PuHAdCv3pTCmwnn00EOhsWCosrLyCFZhnYrFktDb8fHxhCscDrdFx8beB4Ra5qPv0GDraFDkuxcAhNVI9kmTf5ujt5GjsZXa+4KiHIsDwntIvoeMFAfIIesmaC/7MrVo7wUAoYJuON6GmiBrCZwmq1DyruFH6Ac4HsmzLigOgHIxAaDYADAU7hjBUXT/hqkCKPRQNCSVucnSNDcRAwSAwoKgIf5jhyBomiqAaR8DCp0FwuUOQPxTVAAQAAQAAUAAmMb2WIABAAadG7HhX7LuAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/260.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/260.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNUM4MzZBMERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNjY4MUYxMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1QzgzNjlFREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1QzgzNjlGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iXVpcAAABT9JREFUeNrsW1uIG1UYzm0mt81ukjbJdi9J9tKlIHWlVvBBkSJYvLTYUhEpaGstVUTZh4LWBysoxRsi2KKl9GWrWHuxoJUWtBdp1bIita3Udbv7YPdm15Vukt1kc/f78Uw5hiybbCaTSTM/fJyZk8mc+b5zzn/+/0yiz2azulo2g67GTRNAE0ATQBNAE0ATQBNAE0ATQBNAE0ATQBOgFs1UyEV6vb7sD3Lp8hUnilbADSSAMeB6953LF7xhUcheh76gi8okAEgvQ/EssAZYlueSm8Ap4FPga4iRuS0EAPFmFG8DG+n2BX7tKtADEb6tagFA/mEUB4BFOW3MGgyGYSCMZxIymcwSwJPnFh8C2yFEuuoEAHnq8V7O+WZFUfzJ2dDwjcez+KrRaPwfqVA47J2c/GdVNBpdi+d0cB8dBp6aTwRVCQDyD6A4LZFHT/8F0h/4vN7++b4bi8Ucf14ffj6RSNzPVe+GAC9VhQAg70LxG9BE5+jpgfa2tjesVst0MfcZHBp6OhqNbeCq1kCE46UIoFQc8JpEHmLeDAb8bxZLnqyzo6PXbDaf5kcBxBXLHgcU2dtmFA8Bq4ClAPX+Sulzt9u1x263hxZ6f4i399rg0F1wkBQvBIAnmVOtrAAgTvfqIQ8N+PI2ZjIONDc19ZXSDkZADAIejUQiW1nV5lIEMMhEnnriAvDeXOTJbFbbKTnaa/T5zqCQgqL70L69YiMAjQdRnAeab6lqMIxbLJbvbVZrvyAKoVQqbYMn73Qvcv8shwDkP+BIh9LpNE0xAbgD6FNcAOaADnHk0w6HY3/A33oCIuSu0Vfk9DUQYJQJoGM5RF8lRgDN+XvYccrr8exsbPTJSnTOuWswxLjTLsV9AHrfimKHdF7vcOxTijwZVgF+3u/C8xxiGaViTvARwMmG43Ag4D+pZB6fzWbqcqqeAM5BBE8x9yk6EkQDerb0vM7WYR2Wpd6O9rYjSm9mTE1NLZmY+Hv9bDy+mqs+RzEI5QmyR4IgTwnJCWC/RJ6szm7/vRK7OU6nc7yra+kel8v5LrcsUr6wSfYpAPJGFMeA1dzIiAqC6aLNbhuv5LZWa0vLeYzCz7mqV9lIlXUVeBF48FZQY7MeDvj9XwiCkNCpwPytLcf6/xh4DMO+gdIGoBv4VZYRwMLcV6RzqP0ZEpMDaiFPRs9iFsULXNW9ck6BlVI2h/V3si0YOKJToZkEgZ+KjXIKsFw6EEXhlzxRnioMw9/IncblFMDCRWARnUotmUx2cqejcgpwQzpIJVMtaiQ/PTPjggAruKozcgrwg3SQSCbvDofDXrUJMDIy+hymgJmd/ohAaFg2AXAzGk7fSQ53ZHRsezwet6qBOHIC48C1wW05G6Y7ZQ+FsRSuYJseAvMFY/X19QcRhV0WTKa40sRnZ+OOUCjUHZmefhwiNHMffYQOe5k5RXlzAYiwBcU+XeFvc5Q22hrbLL0vkD0XwI0pB1gHTKiMOG2yvgA8U8gbo5KyQTYS6ljC8SjQDpgrQJqiUHrX8BXwJYiH88QF5RGgWkxNL0ZUawveE8Q0WEzrLUXHc1zyMYblO+xaSkwOlosE2gkqLgAanQSxszjcmm+V0v33FliyHfwGipqs1ClAOzH5vO5eCDTOep8SqbVqnQIlO0EQpJ+vbOSqZoAOCHCjVpzgLmqLO9+tBvKKjQA2Co6iWM96P0j+gdV/gmJbuUmgPX2ll8G3uN6XyFNuvuW2XQZzeuAiCNPvdt7nqnvYiFB/tDQfCowLzNXITa/9c7TGTRNAE0AToLbtXwEGAMOGJjt+lI7EAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/263.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/263.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNjY4MUYxNURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNjY4MUYxNkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjgxRjEzREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2NjgxRjE0REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KShXiwAABK9JREFUeNrsWV9sU1UY/9p1bbe2pLR0f1kL7djabQLTgehGjDHBoCE8GUJ8EU1IjEB4IEF90Ec1vhglMWh8UZ800URNfHCEB9TofNiGw8gGAbep2whusD+03dbx+5p75h12sazn3tvC+ZJfTs93b8+93+/77ne+c45taWmJ7mexKQIUAYoARYAiQBGgCFAEKAIUAYoARYAiQBGgCMh9k81m+Iu8e+p9P5oGIACkgb+A4WNHXlyzh/KyzUoCYHQczfPAPiCe45ZJ4AzwKfA1yMjcEwTA8Ho0bwLP8vB5/u034DhI+K6kCYDxe9F8AgT1eofDQT6fj1wuJ2UWMzQzO0tzc3O5hngHOAEiFkuOABjPHv8YsAtdfX0dNcZiFAwGyG63r7h/FgQM/zFMQ5cuUzqd1l/6HDj4fyTkY5vDrGwL4x/TG+/xeGjnjo6s4auJp7KSEok4xWJR6u3tp5HRUXHpGWAcOFoSswCMX49mAKjjfiCwnro6O8npLL+rcQYGLtDvFwf1qn2Igm8KiQC7SQHwqjDe7XZT56OP3LXxLG1trRSJhPWqUyDXWciLOQwIdReaPcDjwBaAvd8hrj/0YDsSnWvN47dv30YT4xN0K5nkbgQ4oCVVawmA4TzWcc7QQHWuezj0a2trCnoOzxbNzU3U139eqA4VQoBdkvHsiZ+At1czPuuuSEQK2eFwWJ+XuvB8j2URgIdvQvM9z2hC5/V6KNzQQAFkeDfCfX5+niYnpwr2vhDOH36/H2NyoUicTFqBHtMJ0BLQZ8J4nse3bm2jWDT6n5kjFApJzTU+n1cQQNoaoseKCOBvfocwfndXJwzdYMq0Uu5Y8epNptcB8H6FtmLzZ7Nz+3Z4frNpy9ife36hkZHRO6vDw6gLpsyqA54Sxq9b56Po5k2mruPT6fk7VVwdnoNjQoZGAB5g06ae17R5OFugxJubyGyZmZmli4ODdOXKVb36HNcgvE6QHgEw3ofmW+AjYTzLhmDQkt0cnm24sNr18E69k3YDz0mvA2B8GZovgSeXE1G5g6qrq8jj9ZCVsnFjPbW0JPSql7VIlToLvAQ8ITrxeDMlgLKyMioGadrSSJewbE6lUtxtBLYBfVIiQCtzT4p+K9hua20pGuNZ+F3q6mr1ql0yP4EOsZqrrKjIer8Yxev16rs1Mgl4YHnUmmpTdonXIkuZFXumKZkEuP+tw51UrDI5NaXv/imTgHHx4+b0dFEan0wmaWxsXK86K5OAH8QPfsgqu7WWSn//r7S4uLxH+iMKoRFpBGAwDqdu/p3Bd8Z1+MLCQnF896j2evtWbJiyvG7EavCktulRfv36P9R95iy1JOIUqgqRw4LpMJVO07WJazQ4NETT0zP6S+/BYd2GrAVQD7yA5kPK/zTHbOGtsUPivMCQgxGQsB/NB0BVERl+g8tf4LT+MNWwkyGQ4NUWHE8DUcBlgdF8VMRnDV8BX8Dwm7nyg2EbIqUgigBFgCJAEWA6AeE3xnhf/CrA20R8gBcdfqXmb1l62QQYcTp8QntpltO6l5allypSCdC8dkQs0IC3ZOqLnoBS875UAkrR+3knwXtZFAGKAEWAIkARcD/LbQEGANjgFIEBX+A0AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/266.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/266.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNjY4MUYxNURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNjY4MUYxNkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjgxRjEzREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2NjgxRjE0REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KShXiwAABK9JREFUeNrsWV9sU1UY/9p1bbe2pLR0f1kL7djabQLTgehGjDHBoCE8GUJ8EU1IjEB4IEF90Ec1vhglMWh8UZ800URNfHCEB9TofNiGw8gGAbep2whusD+03dbx+5p75h12sazn3tvC+ZJfTs93b8+93+/77ne+c45taWmJ7mexKQIUAYoARYAiQBGgCFAEKAIUAYoARYAiQBGgCMh9k81m+Iu8e+p9P5oGIACkgb+A4WNHXlyzh/KyzUoCYHQczfPAPiCe45ZJ4AzwKfA1yMjcEwTA8Ho0bwLP8vB5/u034DhI+K6kCYDxe9F8AgT1eofDQT6fj1wuJ2UWMzQzO0tzc3O5hngHOAEiFkuOABjPHv8YsAtdfX0dNcZiFAwGyG63r7h/FgQM/zFMQ5cuUzqd1l/6HDj4fyTkY5vDrGwL4x/TG+/xeGjnjo6s4auJp7KSEok4xWJR6u3tp5HRUXHpGWAcOFoSswCMX49mAKjjfiCwnro6O8npLL+rcQYGLtDvFwf1qn2Igm8KiQC7SQHwqjDe7XZT56OP3LXxLG1trRSJhPWqUyDXWciLOQwIdReaPcDjwBaAvd8hrj/0YDsSnWvN47dv30YT4xN0K5nkbgQ4oCVVawmA4TzWcc7QQHWuezj0a2trCnoOzxbNzU3U139eqA4VQoBdkvHsiZ+At1czPuuuSEQK2eFwWJ+XuvB8j2URgIdvQvM9z2hC5/V6KNzQQAFkeDfCfX5+niYnpwr2vhDOH36/H2NyoUicTFqBHtMJ0BLQZ8J4nse3bm2jWDT6n5kjFApJzTU+n1cQQNoaoseKCOBvfocwfndXJwzdYMq0Uu5Y8epNptcB8H6FtmLzZ7Nz+3Z4frNpy9ife36hkZHRO6vDw6gLpsyqA54Sxq9b56Po5k2mruPT6fk7VVwdnoNjQoZGAB5g06ae17R5OFugxJubyGyZmZmli4ODdOXKVb36HNcgvE6QHgEw3ofmW+AjYTzLhmDQkt0cnm24sNr18E69k3YDz0mvA2B8GZovgSeXE1G5g6qrq8jj9ZCVsnFjPbW0JPSql7VIlToLvAQ8ITrxeDMlgLKyMioGadrSSJewbE6lUtxtBLYBfVIiQCtzT4p+K9hua20pGuNZ+F3q6mr1ql0yP4EOsZqrrKjIer8Yxev16rs1Mgl4YHnUmmpTdonXIkuZFXumKZkEuP+tw51UrDI5NaXv/imTgHHx4+b0dFEan0wmaWxsXK86K5OAH8QPfsgqu7WWSn//r7S4uLxH+iMKoRFpBGAwDqdu/p3Bd8Z1+MLCQnF896j2evtWbJiyvG7EavCktulRfv36P9R95iy1JOIUqgqRw4LpMJVO07WJazQ4NETT0zP6S+/BYd2GrAVQD7yA5kPK/zTHbOGtsUPivMCQgxGQsB/NB0BVERl+g8tf4LT+MNWwkyGQ4NUWHE8DUcBlgdF8VMRnDV8BX8Dwm7nyg2EbIqUgigBFgCJAEWA6AeE3xnhf/CrA20R8gBcdfqXmb1l62QQYcTp8QntpltO6l5allypSCdC8dkQs0IC3ZOqLnoBS875UAkrR+3knwXtZFAGKAEWAIkARcD/LbQEGANjgFIEBX+A0AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/281.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/281.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNjY4MUYxOURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNjY4MUYxQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjgxRjE3REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2NjgxRjE4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Z4S1kwAABO5JREFUeNrsW19MW1UY/wqlLbRdunYd/0bLWgYt4DaUzSksxpho1OzBB2PMHnSamCxOs4clMz7ok8bpi9Elxiy+qE+azERNfJBlD1Pj8AFQNA5GNgF1MCc4KLYFir+vuQdPJ4T+ub292PMlv5x7v3s5936/77vf+c45xbKyskLlLBVU5qIIUAQoAhQBigBFgCJAEaAIUAQoAhQBioByFGs2N1kslqK/yFun3/GgaQK8QBL4DRh//tjRvBcsslnrsGR1U5EIgNERNE8Bh4DIGrfMAOeAD4HPQEbqf0EADG9E8xpwmLvP8s9+Ao6DhC83NQEw/kE0HwC+jG/RaiW32012u41Syymaj8VoYWFhrS7eBE6AiOVNRwCMZ4+/LyffxsYGagmHyefzUkVFZk6OgYDxX8Zp9PIYJZNJ+dLHwOMbkZCNbVYySGD8PbLxTqeT9u/rThu+njhraigajVA4HKKBgSGamJwUlx4FpoDnCn0vQyIAxm9FMww08LnXu5V6e3rIZqvKqZ/h4R/p50sjsuoQouDzQiLAqDrgRWG8w+Ggnrvvytl4ls7ODgoGA7LqNMi1Fb0OyNHbdjT3A/cCuwD2fre4fsftXUh09rz779q7h6anpunveJxPg8BjWlItLQEwnPs6zhkaqF3rHg79+vq6wio3jBZtba00OPS9UB0phIAKnYxnT3wLvLGe8Wl3BYO6kB0IBOS81IvnO0sWAXh4M5qveEQTOpfLSYGmJvIiwzsQ7ouLizQzM1uw94Vw/vB4POiTC0XiZNIB9BtOgJaAPhLG8zi+e3cnhUOh/4wcfr9f11zjdrsEAaTNIfpLEQH8ze8Txh/s7YGh2wwZVqqsGa/eangdAO9XazM2Tzo7d+2F53caNo292P8dTUxM3lodPoO6YNaoOuAhYfyWLW4K7Ww2dB6fTC7equLq8AIc4y9qBOABFm3oeUkbh9MFSqStlYyW+fkYXRoZoStXrsrqC1yD8DxB9wiA8W40XwDvCeNZtvl8JVnN4dGGC6sDd+6XnXQQeFL3OgDGV6L5BHhgNRFVWam2djs5XU4qpezY0Ujt7VFZ9YIWqbqOAs8C94mTSKSNokBlZSWZQVp3tdBlTJsTiQSftgB7gEFdIkArc0+K8w6w3dnRbhrjWfhdGhrqZdUBPT+BbjGbq6muTnvfjOJyueTTOj0JuG2117paQ1aJ85GVVMaaaUJPAhz/1uE2MqvMzM7Kp7/qScCUOLg5N2dK4+PxOF27NiWrzutJwNfigB+yzmptSWVo6AdaXl5dI/0GhdCEbgSgMw6nPj5O4TvjOnxpackc3z2qvYHBjAVTlpeLMRs8qS16VN248Sf1nTtP7dEI+bf7yVqC4TCRTNL16es0MjpKc3Pz8qW34bC+oswFUA88jeYMZb+bY7Tw0tgRsV+g+1wAHfMc4BFg2mSG/wUcBZ7IZseo4PUARIJLm3A8DIQAewmM5q0i3mv4FDgLw2+ulR+KtiCyGcRMGyOmFUWAIqDMRde9wbGxMf4py2FJFQOaw+HwH7jG6+VXAV4+4o29EPS/56o3ewS8yslXOj/DxmvHJzRjWN6VjMlVb14C8JL8O56zYoIGvK5FBnvzmKQ/lY9+s+SAV3TwsiHeLwoBeNkBLQpOmd37q9XSRsgjGVabpRLcCBb1n6OqEFIEKAIUAWUs/wgwAC6B5SPt0eNKAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/284.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/284.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUM5RDlFMERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUM5RDlFMURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwQjBCRkE1REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwQjBCRkE2REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+s4fbGQAABN1JREFUeNrsWl9MW1UY/1pKW2i7dO3K39GylkELuA1lcwqLMSYaZxYfjDFmL5smJsZp9rBkxgd90pj4YnSJmYsv6pN/EzXxQZY9TI3iA+DQOBjZBPYH5gQHxbZA8fc19+BlllDa+w93vuSXc893b8893+/77jnfOae2paUlup3FJgmQBEgCJAGSAEmAJEASIAmQBEgCJAGSAEmAJCD/Qzab7h1568Q7fhQNQADIAFeA0ReOPFu0hwqyzUwCYHQcxVPAASCe55Ep4DTwIfAlyMj+LwiA4fUoXgcOcvMF/uxX4ChI+GZDEwDjH0bxARBU6x0OB/l8PnK5nJRdzNJsMklzc3P5mngTOAYiFjccATCePf4+YBe6+vo6aorFKBgMkN1uX/F8EgSM/j5KwxdGKJPJqG99DDy5FgmF2OYwarSF8fepjfd4PLRnd2fO8NXEU1lJiUScYrEo9fUN0Nj4uLj1ODABPL8hZgEYvxnFIFDH9UBgM3V3dZHTWb6udgYHf6Hfzg+pVQcQBV+VEgF2gwLgJWG82+2mrnvvWbfxLO3tbRSJhNWqEyDXWUrHHDqEugvFg8D9wHaAvd8p7t91ZwcGOlfR7Xfs2kmTE5P0dyrF1QjwhDKomksADOe2jvIIDVTne4ZDv7a2pqT38GzR0tJM/QM/C9XhUgiwa2Q8e+IH4I3VjM+5KxLRhOxwOKwel7rxfo9pEYCXN6L4lmc0ofN6PRRuaKAARng3wn1+fp6mpqZL9r4QHj/8fj/a5ESReDBpA3oNJ0AZgD4SxvM8vmNHO8Wi0f/MHKFQSNOxxufzCgJIWUP0mhEB/M3vFsbv6+6CoVsMmVbKHSu63mx4HgDvVygrNn9udO7YBc9vM2wZ+2PvTzQ2Nn5rdvgM8oJpo/KA/cL4TZt8FN3WaOg6PpOZv1XF2eFZOCakawTgBTZl6nlZmYdzCUq8pZmMltnZJJ0fGqKLFy+p1Wc5B+F1guYRAON9KL4G3hPGs2wJBk3ZzeHZhhOrvXfvUTtpH3BI8zwAxpeh+Bx4aHkgKndQdXUVebweMlO2bq2n1taEWvWiEqmazgLPAQ+ISjzeQgmgrKyMrCDN25voApbN6XSaq03ATqBfkwhQ0tzjot4GttvbWi1jPAv3pa6uVq3aq+Un0ClWc5UVFTnvW1G8Xq+6WqMlAXcst1pTbcgucTGylF2xZ5rWkgD3v3m4k6wqU9PT6uplLQmYEBc3Z2YsaXwqlaJr1ybUqjNaEvCduOCXrLJba6oMDJyjxcXlPdLvkQiNaUYAGuNw6uHrLL4zzsMXFhas8d0j2+vrX7FhyvKKHqvB48qmR/mNG39Sz+kz1JqIU6gqRA4TpsN0JkPXJ6/T0PAwzczMqm+9DYf16LIWQD7wNIpTVPhpjtHCW2OHxXmBLgcjIOFRFO8CVRYy/C9Of4GT6sNU3U6GQIJXWXA8AkQBlwlG81ERnzV8AXwGw2/mGx902xDZCCIJkARIAiQBuhAwMjLCf1k5qFIlgcZYLPYH7vG++CWAt4n4AC8K/VW99cUSUOyu8Gvcvqp+io1Xro8pnWM5qeqc3vqipOhPAJ74BMVjRnp5Pd7XOwJYXjXBy5p6v+RBEB75FMURK3q/0AjIPbQWVhN0qsLqs8BakH+VlQRIAiQBkoDbWf4RYAAZUY7YOmfbywAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/293.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/293.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkI5OURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkI5QURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNjYyM0E4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQjk4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i0CtcQAABxtJREFUeNrsWnts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/296.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/296.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRDk3MUMxMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRDk3MUMxM0RCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDQjUxRjIzREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDQjUxRjI0REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+q4DKHwAABMhJREFUeNrsWl9sU1UY/7p1bbe2pLSU/WMttGNrtwlMxj83YoyJBg0PPhhjfFA0MSGi4YEE9UEe0fhilMQQwovyBIkmSuIDIzyARufDNh1GNgy6Td1GcJP9se22zt/X3DNvcYVuvT29686X/HJ6zr07936/77vf+c53ZllYWKC1LCW0xkURoAhQBCgCFAGKAEWAIkARoAhQBCgCFAFrUazZ3GSxWPL+Ih+e+tiDpg7wAgngD2DwjSOHV1ywyKbWYcnqpjwRAKUjaF4GDgKRJW4ZBy4D54AvQUayKAiA4rVo3gVe4Omz/LOfgKMg4dKqJgDKH0DzKeBL+xatVnK73WS32yg5n6Sp6WmamZlZaooPgGMgYn7VEQDl2eKf6INvbW0N1YfD5PN5qaQkPSZPg4DB3wZp4OYvlEgk9JcuAM8/iIRsdLOSJIHyj+qVdzqdtHtXW0rxTOKsqKBoNELhcIi6u3tpaHhYXHoWGAVez/W9pHgAlF+Ppg+o4b7Xu5462tvJZitb1jx9fdfp5xv9+qGD8IKLuXiArDzgbaG8w+Gg9kf2LVt5lpaWZgoGA/qhUyDXlvc8YJnWtqN5AngM2Aqw9dvE9Z0PtyLQ2Vc8f+uO7TQ2Okb/xGLcDQLPaUG1sARAcZ7rKEdooHKpe9j1q6urcsvcsFo0NjZQT+8PYuhQLgSUGKQ8W+Jb4P1MyqfMFQwaQnYgENDHpQ4831kwD8DDN6O5xiuaGHO5nBSoqyMvIrwD7j47O0vj4xM5W18Ixw+Px4M5OVEkDibNQJd0ArQAdF4oz+v4tm0tFA6F/rdy+P1+Q2ON2+0SBJC2h+gqhAfwN79LKL+/ox2KbpCyrJRZ0169QXoeAOuXazs2Tyo6t+6A5bdI28Z+1/U9DQ0N35sdvoq8YEJWHvCUUH7dOjeFtmyWuo9PJGbvHeLs8CoM48+rB+ABFm3peUdbh1MJSqSxgWTL1NQ03ejvp1u3ftUPX+UchPcJhnsAlHej+Qo4K5Rn2eDzFaSaw6sNJ1Z79+zWG2k/8JLheQCUL0XzOfDkYiAqs1Jl5UZyupxUSNm0qZaamqL6oTc1TzV0FXgNeFx0IpFGigKlpaVkBmnYWk83sW2Ox+PcrQe2Az2GeICW5h4X/Waw3dLcZBrlWfhdamqq9UN7jfwE2sRurqK8PGV9M4rL5dJ3q4wk4KHFWasqpVSJVyILybSaadxIAhz/5eE2MquMT0zou78bScCo+HF3ctKUysdiMRoZGdUPXTGSgK/FD35IhmptQaW390ean1+skX6DRGjIMAIwGbtTJ/9O4jvjPHxubs4c3z2yve6etIIpy4l87AaPa0WPsjt3/qLOy1eoKRoh/0Y/WQuwHMYTCbo9dpv6BwZocnJKf+kjGKwzL3sB5AOvoDlD2Z/myBYujR0S5wWG7wUwMe8BngHGTKb438Bh4MVsToxyrgfAE1zahuNpIATYC6A0HxXxWcMXwGdQ/O5S8SFvBZHVIGY6GDGtqP8QkfmwwMkRrphy+YYLCHy0Exp8q+rPTOPF6AHHNCVZTuuUzDRePARoVj4iUnfgvfuNF2MMMJ31pRFgVuvL9ABTWl8KAWa2viwPMK31806A2a2f9V5ApcKKAEWAIqBY5V8BBgDNp6L6lOd2KQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/299.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/299.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkI5OURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkI5QURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNjYyM0E4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQjk4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i0CtcQAABxtJREFUeNrsWnts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/302.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/302.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRDk3MUMxMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRDk3MUMxM0RCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDQjUxRjIzREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDQjUxRjI0REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+q4DKHwAABMhJREFUeNrsWl9sU1UY/7p1bbe2pLSU/WMttGNrtwlMxj83YoyJBg0PPhhjfFA0MSGi4YEE9UEe0fhilMQQwovyBIkmSuIDIzyARufDNh1GNgy6Td1GcJP9se22zt/X3DNvcYVuvT29686X/HJ6zr07936/77vf+c53ZllYWKC1LCW0xkURoAhQBCgCFAGKAEWAIkARoAhQBCgCFAFrUazZ3GSxWPL+Ih+e+tiDpg7wAgngD2DwjSOHV1ywyKbWYcnqpjwRAKUjaF4GDgKRJW4ZBy4D54AvQUayKAiA4rVo3gVe4Omz/LOfgKMg4dKqJgDKH0DzKeBL+xatVnK73WS32yg5n6Sp6WmamZlZaooPgGMgYn7VEQDl2eKf6INvbW0N1YfD5PN5qaQkPSZPg4DB3wZp4OYvlEgk9JcuAM8/iIRsdLOSJIHyj+qVdzqdtHtXW0rxTOKsqKBoNELhcIi6u3tpaHhYXHoWGAVez/W9pHgAlF+Ppg+o4b7Xu5462tvJZitb1jx9fdfp5xv9+qGD8IKLuXiArDzgbaG8w+Gg9kf2LVt5lpaWZgoGA/qhUyDXlvc8YJnWtqN5AngM2Aqw9dvE9Z0PtyLQ2Vc8f+uO7TQ2Okb/xGLcDQLPaUG1sARAcZ7rKEdooHKpe9j1q6urcsvcsFo0NjZQT+8PYuhQLgSUGKQ8W+Jb4P1MyqfMFQwaQnYgENDHpQ4831kwD8DDN6O5xiuaGHO5nBSoqyMvIrwD7j47O0vj4xM5W18Ixw+Px4M5OVEkDibNQJd0ArQAdF4oz+v4tm0tFA6F/rdy+P1+Q2ON2+0SBJC2h+gqhAfwN79LKL+/ox2KbpCyrJRZ0169QXoeAOuXazs2Tyo6t+6A5bdI28Z+1/U9DQ0N35sdvoq8YEJWHvCUUH7dOjeFtmyWuo9PJGbvHeLs8CoM48+rB+ABFm3peUdbh1MJSqSxgWTL1NQ03ejvp1u3ftUPX+UchPcJhnsAlHej+Qo4K5Rn2eDzFaSaw6sNJ1Z79+zWG2k/8JLheQCUL0XzOfDkYiAqs1Jl5UZyupxUSNm0qZaamqL6oTc1TzV0FXgNeFx0IpFGigKlpaVkBmnYWk83sW2Ox+PcrQe2Az2GeICW5h4X/Waw3dLcZBrlWfhdamqq9UN7jfwE2sRurqK8PGV9M4rL5dJ3q4wk4KHFWasqpVSJVyILybSaadxIAhz/5eE2MquMT0zou78bScCo+HF3ctKUysdiMRoZGdUPXTGSgK/FD35IhmptQaW390ean1+skX6DRGjIMAIwGbtTJ/9O4jvjPHxubs4c3z2yve6etIIpy4l87AaPa0WPsjt3/qLOy1eoKRoh/0Y/WQuwHMYTCbo9dpv6BwZocnJKf+kjGKwzL3sB5AOvoDlD2Z/myBYujR0S5wWG7wUwMe8BngHGTKb438Bh4MVsToxyrgfAE1zahuNpIATYC6A0HxXxWcMXwGdQ/O5S8SFvBZHVIGY6GDGtqP8QkfmwwMkRrphy+YYLCHy0Exp8q+rPTOPF6AHHNCVZTuuUzDRePARoVj4iUnfgvfuNF2MMMJ31pRFgVuvL9ABTWl8KAWa2viwPMK31806A2a2f9V5ApcKKAEWAIqBY5V8BBgDNp6L6lOd2KQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/305.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/305.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkI5RERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkI5RURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCNDZCQjlCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQjlDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PydFsQAABxVJREFUeNrsWmlsVFUUPtOZFroNLbRDW2inCyiyr5IWIzUaligldQsxcYFgACVIDNFoIoIxEiVRAzYYFY3BmJiACQlKJKAolK3+gGKUpaULtrZDocsU2uk2fmfmvtc3j+kyM++1r2FO8uXed996vnvPdmdMbreb7mUxhQkIExAmIExAmIAwAWECwgTIAyZTSA90H6QENI3isMq0kjKNoqy/yY4IQdHJIdwbDUw0AikRQXy8DfgC3ctoHw/yvW+I+7cyGSOKAMhTwMtsLcAnUCAqQAJ55t8EYoDtwMyRRsCXwF+iz2awKcD7dwLSrH8PH3F2RBGAD+5Cs1kx9A6bheK4BeBZTgQWqWY/D80qcXhHmMKwiiWo0LGSjkGZg+guA/YAHYpzPWhqxGGT6tYG4IAwox24tsbQYRBKpqNpx4fe8GPLdl7KOHdJMWZGMx3IBmKBW2wuuKZade8SNCcw3tbXh+36bE8qmjQgHrgNVGzauKFB6zA4EAGH0eQC24AifHBnH44tB80WsbwT/FxSBuwFPsMzWvtQmF+cD7wIMEGpfi6rAn4GvgYZf+pKAJRaLl4mCc/061DgsEJxk7Bj9uajBvENtawgnnFUpfxCNB8DeQHow9+2GURc1YuASeKjVihO85LOgQJNYrl/Azzv84DRYtFahGdgl+i7bthHvIRn7BOzziHxfcDs85jRoyk2NoaioqKoo6ODnM5WT6sSdqTrQMJ3upiAIGKpIGIqsBYfvleMf+jjxa1MDTBG/VbAAVwDXL0k9FDE8qLrRYXor5c9ssVMWVlZlGm305gx1rs+trGxkSoqKqmiskqtzGsgYZcuBAhlLcI2v+UwKMJZsXxBmsgI+isjeBVcFCsCcqa5wFnSsjxeOm2zJdOC+fMoOnrgxLClxUlnz5VQc3OzcvgZkLBfFwL8EPKbcFhE44AZgzRCJgGuq86ZTfvrt2BxeN+VnZ1Fc2bPCqgQ6+7upuJTp8nhuKHMP6aChBpdiyFRBOXLdwdSEkV6PAj90fisrLzNZgtYeRaz2Ux5ublktcYrjXCn7uUwCHiFQ6LnIBmY1v8L2lxxVFUznWrrJ5HzTiK1t8eR41aGbPPLli7xOLxghf3CsV+PKx1sDlZB5WBXgMWPguz9v1LHcdj+WtHvVTmh7w9rd8XSmfMF9Hd5LpZrpN9rcnJyQlKeJTExkSakpVFNba20Jl8A3gslFY4DFvdzT6zc66MOvF43hY6cWE132q39vtxuz9Aknc3MtEsEsCwNlYD+lSZPMSQ80d0XVmK5/3R8PeJcb1hPShpHEydMICtCW1RkJMygnZqamskaH68JAcnJScrD2ZxfwAzcwRJwUVRyPk5X0S+Xe6qktqU1iY6cXCMrz8t7wYJ5NN5mu+slKSkp2lV0FosnfLa1eUoL3mcYC9wMigDYerefKk4pJ+WeQ5Q9IpYcP7eKXB3eOB4bE0P5jyym6BBtfNABBiQoKqv7gNN6bYhwAuT1spyZ/usdrGvIgrefJkeSvLzcIVPe8ymdPvn27zCDrUCEZgQgOoxX1Ps75BMV3sV2+dqD8lBWVqbfVFYv4aSop6dbnXFwgcb1hjkkAqC4FfgI3Wq0c8Qw1wMnPMldzyg6U1xA/5Tl9nr3jAwaSuGkqGDFE5S/+GG1Q3xuoIjQXzXI5KwGPuCETZxmu3qIVwFvg93sTCs51LAho6Uryef+JwtXhvz7Qihy/kIplZWVK5OjBxAVrgwqEVLIGrEBqnxQqdjQvL37+h6zidyj3IoKKAaeODk5eViV98TBWTM9BZPD4ZBWOVetawPNA/YBb7NJs1Ph3V/MfKnifBGUHy+FoblzZ1NGejoZRWbOmEZHjzmkw0L4gnX+MhdLPxufLixzrtWt6O9X7eDw3kChdLwIHl9le8MuCQkJFBcXR62tnmRlrCjbLgWUCULxI32cKpA66ekTDae8nNP3EuDJvfwREOxvg/IOQFpqKhlV3D09ykOXVomQtPPnrYeiooypPDx+U7NPQlujJQH1cv7vdBqSgLq6enK55E3UcoTBai0JkOsB3qQ02p8sOju76ELpReXQD1rWAiyHyLtFjnjbon7ZsIrL5aLiU6eUzo/t4FPNtsQUoXAjmt3SMe/tTbl/MmqABIqIMA25vXMpXFv7H10tK6OODp/C6Gks/wOD3hILQHhfcD55t8s9WZfIvIwiHAJelZTX2gRI7LhwrfAuKX4dNohcAR7FN34+0IWa/EkK5mAXZDxG3h81zcOgNP8uUAL8CPwC5bv8mYouBIwUCRMQJmCYCMjYUcd/pZH+V3C++q2UOVqOh0JAxBCRv03R367DeNCiOwFi1hZKswYc1HLc8ASoZw3L1q3xuHEJMPrsD8UKMPTs60rASJh9vVeA4WdfNwJGyuz7TYTuNQkTECYgTMC9TcD/AgwA2BwabrtSxt0AAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/weather/64x64/day/308.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/308.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRDk3MUMxNkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRDk3MUMxN0RCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBEOTcxQzE0REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBEOTcxQzE1REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Xpyq3AAABLBJREFUeNrsmV1sk1UYx592XdvRlpSW7pO10I2t++BjMBDdiDEmGiSEK0MIN4CJiREJFyQqF3qpxBujJASIN+qVJpqoiRd+XaBG58U2mUY2DLAN2MbFJvuw7bbO/9O8Z76DErr19P2A8yT/nL6n7Xnf5/ec95znnONYWFigR9kcCoACoAAoAAqAAqAAKAAKgAKgACgACoACoADk/pHDUfQHee/M2SCKWigEpaGb0ODxYy+tOEJ5+WYmADidQHEU2gclcvxkHPoO+hj6EjAyDwUAOF6D4m3oEDef59/+hE4Awje2BgDn96D4CArr610uFwUCAfJ43JSZz9DU9DTNzMzkauJd6CRAzNsOAJzniH8IOUVdTU011dfVUTgcIqfTueT30wAweH2QBq78Tel0Wv/Vp9DBB0GwFAA4/ySK74XzPp+Pdu5ozzr+IGPnu7t7aWh4WF99BgBesQUAOL8GRR9Uzdeh0Brq7Oggt7t0We309f1Bf13u11ftA4SvCgHgNGi6PSWc93q91PHE48t2nq21tYViseiSXgC47kIezFWEqc2D4hnoKWgjxNFvF99v39aGgc6z4vbbtm6hsdEx+jeZ5MsYdEAbVM0FAMe5rRM8QkMVuX7DXb+qqrKg+/Bs0djYQD29v4uqI4UAcEpyniPxC/TO/ZzPhisWkwI7Go3qx6VO3N9nWg/Azdej+JFnNFHn9/soWltLIYzwXnT32dlZGh+fKDj6wnj8CAaDaJMTReLBpAXqMhyANgB9IpzneXzz5laqi8fvmTkikYjUsSYQ8AsApK0huszoAfzO7xDO7+7sgKNrDZlWSl1LHr3B8NUgol+mrdiC2dG5bSsiv8GwZeyvXb/R0NDw3dnhi8gLJozKA54Tzq9eHaD4hvWGruPT6dm7q56HLiIwkaL2ANzAoU09b2jzcDZBSTQ2kNE2NTVNl/v76erVa/rqi5yD8DpBeg+A8wEUX0MfCOfZ1obDpuzm8GzDidWux3bqg7QbOiw9D4DzJSg+h55dHIhKXVRRUU4+v4/MtHXraqi5uUlf9ZrWU6XOAi9DT4uLRKKRmqCSkhKygjVsrKcrWDanUim+rIe2QD1SeoCW5r4qrltAu7Wl2TLOs/GzVFdX6at2yXwF2sVqblVZWTb6VjS/36+/rJQJYNNiq5UVhuwSr8QWMkv2TFMyAXj/z8PdZFUbn5jQX96QCWBUfLgzOWlJ55PJJI2MjOqrfpAJ4CfxgW9yn91aU6239xLNzy/ukf6MRGhIGgA0xt3pW/6cwXvGefjc3Jw13ntke90992yYvik9FcZUuE3b9CgVI25zU4Ii5RFymTAdptJpuj12m/oHBmhyckr/1fsI2PF8F0PLWgsAwgsoLlD+pzlGG2+NHRHnBUXZFgeE/SjOQ+UWcvwfTn+hc/rD1KKdCwCCX1tw7IXikMcEp/moiM8avoA+g+N3co0PRdsQsYMpAAqASQCib43wzihv0/BGAR/hxAdfr7wlq14mgGKdDZ7UHprtnO6hZdVLM+kAtKgdEyk6dFpmveUB2Cn60gHYLfrF6AG2ir5UAHaMvuweYLvoSwNg1+jnnQg9zKYAKAAKwKMN4D8BBgArdkV13m7XgQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/311.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/311.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzQyM0MyNERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNzQyM0MyNURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjgxRjFCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2NjgxRjFDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DwDxuwAABSpJREFUeNrsW19MW1UY/wqlLbRdunYd/0bLWgYt4DaUzSksxpi4qNmDD8YYH3SaaBanmcmSGR/0ZTGaLcYoiTFmD/6JD5pooiY+yLKHTaPsAVA0jj9OAXUwERwt0haKv6+eg7eTskJvb2/lfskv596vl3PP9/u+e853vrOZlpaWaCNLCW1wMQgwCDAIMAgwCDAIMAgwCDAIMAgwCDAIMAjYiGLO5iGTyZT3gbza9boLTR3gBuLAr8DoU0cOr7tgkU2tw5TVQ3kiAEaH0DwCHARCKzwyDZwB3gU+ARnJ/wUBMLwWzYvAg9x9ln/2PXAUJHxe1ATA+LvQvAN40r5Fs5mcTidZrRZKLiYpEo3S3NzcSl28AhwDEYtFRwCMZ4+/rZx8a2trqCEYJI/HTSUl6XNyFASM/jxKQ8MjFI/HlT99ADxwPRKysc1MGgmMv01pvN1up7172lOGZxJ7RQWFwyEKBgPU29tPY+Pj8qf7gAngyVzHpUkEwPjNaAaAGr53uzdTZ0cHWSxla+pnYOA7+uHioFJ1EFHwaS4RoFUe8Kw03mazUcett6zZeJbW1hby+31KVRfIteQ9D1ijt61o7gRuB3YA7P12+ftNN7ZhorOuu/+23btocmKS/pqf51s/cL+YVAtLAAznvo7yDA1UrvQMh351dVVumRtWi6amRurr/0aqDuVCQIlKxrMnvgJOZjI+5S6/XxWyfT6fcl7qxPvtBYsAvLwezXle0aTO4bCTr66O3JjhbQj3RCJB09MzOXtfCs8fLpcLfXKiSDyZtAA9mhMgJqD3pfG8ju/c2UrBQOA/K4fX61V1rnE6HZIAEnuInkJEAH/ze6Tx+zs7YOgWTZaVMnPa0Bs1zwPg/XKxY3OlZue23fD8ds22sV/3XKCxsfFrs8PHkBfMaJUH3C2N37TJSYHt9Zru4+PxxLUqzg7PwTHevEYAXmASS89zYh1OJSihpkbSWiKRKF0cHKRLl35Sqs9xDsL7BNUjAMY70XwGnJbGs2zxeApSzeHVhhOrfTfvVTppP/Cw6nkAjC9F8xFwYHkiKjNTZeVWsjvsVEjZtq2WmpvDStUzIlJVXQWeAO6QN6FQE4WB0tJS0oM07migYWybY7EY3zYAu4A+VSJApLnH5X0L2G5tadaN8Sw8lpqaaqVqn5qfQLvczVWUl6e8r0dxOBzK2yo1CbhhudeqSk2qxOuRpWRazTSmJgG2f/NwC+lVpmdmlLe/qEnAhLy4OjurS+Pn5+fp8uUJpeqsmgR8IS/4JRmqtQWV/v5vaXFxuUb6JRKhMdUIQGccTt18ncR3xnn4wsKCPr57ZHu9fWkFU5bn87EbPC6KHmVTU39Q95mz1BwOkXerl8wFWA5j8ThdmbxCg0NDNDsbUf70GhzWnZe9APKBR9G8Sdmf5mgtXBo7JM8LVN8LoGPeA9wLTOrM8D+Bw8BD2ZwY5VwPQCQ4xIbjHiAAWAtgNB8V8VnDx8CHMPzqSvND3goixSB6OhjRrRj/QiTXDkZGRl5G8/Qqj0wB9cFgMIJnebv2o0ito0L/O/RcSeWyDhcW+MgnAP1vmfR6i4CTYnCZ5BQbr8gl5L6ii40X18eEkSxvKIzMpNcPAWJQb63i/S4RKez9x4WevX9K6NnLR2RKD7y0ml6vc8ALQKLYvK8aARjcKJr3is37aq8CJ3jpLSbvq0oABjlM/5wTFo3385EHnCgm76tOAAbLufnpYvH+cr58PawxMdJNrTwb20zG/x02NkMGARta/hZgADZWHNwKLKC5AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/314.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/314.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzQyM0MyNERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNzQyM0MyNURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjgxRjFCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2NjgxRjFDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DwDxuwAABSpJREFUeNrsW19MW1UY/wqlLbRdunYd/0bLWgYt4DaUzSksxpi4qNmDD8YYH3SaaBanmcmSGR/0ZTGaLcYoiTFmD/6JD5pooiY+yLKHTaPsAVA0jj9OAXUwERwt0haKv6+eg7eTskJvb2/lfskv596vl3PP9/u+e853vrOZlpaWaCNLCW1wMQgwCDAIMAgwCDAIMAgwCDAIMAgwCDAIMAjYiGLO5iGTyZT3gbza9boLTR3gBuLAr8DoU0cOr7tgkU2tw5TVQ3kiAEaH0DwCHARCKzwyDZwB3gU+ARnJ/wUBMLwWzYvAg9x9ln/2PXAUJHxe1ATA+LvQvAN40r5Fs5mcTidZrRZKLiYpEo3S3NzcSl28AhwDEYtFRwCMZ4+/rZx8a2trqCEYJI/HTSUl6XNyFASM/jxKQ8MjFI/HlT99ADxwPRKysc1MGgmMv01pvN1up7172lOGZxJ7RQWFwyEKBgPU29tPY+Pj8qf7gAngyVzHpUkEwPjNaAaAGr53uzdTZ0cHWSxla+pnYOA7+uHioFJ1EFHwaS4RoFUe8Kw03mazUcett6zZeJbW1hby+31KVRfIteQ9D1ijt61o7gRuB3YA7P12+ftNN7ZhorOuu/+23btocmKS/pqf51s/cL+YVAtLAAznvo7yDA1UrvQMh351dVVumRtWi6amRurr/0aqDuVCQIlKxrMnvgJOZjI+5S6/XxWyfT6fcl7qxPvtBYsAvLwezXle0aTO4bCTr66O3JjhbQj3RCJB09MzOXtfCs8fLpcLfXKiSDyZtAA9mhMgJqD3pfG8ju/c2UrBQOA/K4fX61V1rnE6HZIAEnuInkJEAH/ze6Tx+zs7YOgWTZaVMnPa0Bs1zwPg/XKxY3OlZue23fD8ds22sV/3XKCxsfFrs8PHkBfMaJUH3C2N37TJSYHt9Zru4+PxxLUqzg7PwTHevEYAXmASS89zYh1OJSihpkbSWiKRKF0cHKRLl35Sqs9xDsL7BNUjAMY70XwGnJbGs2zxeApSzeHVhhOrfTfvVTppP/Cw6nkAjC9F8xFwYHkiKjNTZeVWsjvsVEjZtq2WmpvDStUzIlJVXQWeAO6QN6FQE4WB0tJS0oM07migYWybY7EY3zYAu4A+VSJApLnH5X0L2G5tadaN8Sw8lpqaaqVqn5qfQLvczVWUl6e8r0dxOBzK2yo1CbhhudeqSk2qxOuRpWRazTSmJgG2f/NwC+lVpmdmlLe/qEnAhLy4OjurS+Pn5+fp8uUJpeqsmgR8IS/4JRmqtQWV/v5vaXFxuUb6JRKhMdUIQGccTt18ncR3xnn4wsKCPr57ZHu9fWkFU5bn87EbPC6KHmVTU39Q95mz1BwOkXerl8wFWA5j8ThdmbxCg0NDNDsbUf70GhzWnZe9APKBR9G8Sdmf5mgtXBo7JM8LVN8LoGPeA9wLTOrM8D+Bw8BD2ZwY5VwPQCQ4xIbjHiAAWAtgNB8V8VnDx8CHMPzqSvND3goixSB6OhjRrRj/QiTXDkZGRl5G8/Qqj0wB9cFgMIJnebv2o0ito0L/O/RcSeWyDhcW+MgnAP1vmfR6i4CTYnCZ5BQbr8gl5L6ii40X18eEkSxvKIzMpNcPAWJQb63i/S4RKez9x4WevX9K6NnLR2RKD7y0ml6vc8ALQKLYvK8aARjcKJr3is37aq8CJ3jpLSbvq0oABjlM/5wTFo3385EHnCgm76tOAAbLufnpYvH+cr58PawxMdJNrTwb20zG/x02NkMGARta/hZgADZWHNwKLKC5AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/317.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/317.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRTgxMjIwRERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTgxMjIwRURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFODEyMjBCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFODEyMjBDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QxC5NgAABXNJREFUeNrsW2tMHFUUPgvL7sLuImW75VWWdnntAoViKbYujTEan+kPfxhT/VGrCUktmv5orBpfMTHVmBijTYxpNPHxSxNpqok/pGlM1Sgm8tRYqKkCKlArtDxcFlj8zjIXh5aVZXdmdlbmJF/uzL3DnT3fuY9zzh1MCwsLtJ4ljda5GAQYBBgEGAQYBBgEGAQYBBgEGAQYBBgEGASsRzHH8pDJZFL9h7x+/M0cFMVALhACfgcGHms5GHfCIpZchymmh1QiAEr7UDwE7AV8KzwyBpwGPgA+ARnh/wUBULwIxUvAA9x9jH/2I3AYJHye0gRA+TtRvA+4ls1Fs5mcTidZrRYKz4dpcmqKpqenV+riNeAIiJhPOQKgPFv8PfniW1RUSGWlpeRy5VJa2vI1eQoEDPw6QP3nf6ZQKCRv+gjYtxoJsehmJo0Eyt8kV95ut1PjzoaI4tHEnpVFfr+PSku91NHRRYNDQ6LpXmAEeDTR36XJCIDyG1D0AoV8n5u7gZoCAbJYMtbUT2/vD/TTuT551V6Mgk8TGQFa+QFPCeVtNhsFbty9ZuVZamqqqaTEI686DnItqvsBa7S2FcVtwM1AOcDWbxDtO66vx0Jnjbv/+u11NDoySn8Hg3xbAtwnLarJJQCKc1+HeYUG8lZ6hod+QUF+Yp4bdovKygrq7OoWVQcSISBNIeXZEt8Ar0RTPmKukhJFyPZ4PPJ1qQnvtydtBODlW1B8yTuaqHM47OQpLqZcrPA2DPfZ2VkaGxtP2PpCeP3IyclBn+woEi8m1UC75gRIC9CHQnnex2tra6jU671m53C73YquNU6nQxBAUgzRnowRwHN+p1B+T1MAim7UZFvJMC/76RWa+wGwfqYUseVEVuf67bD8Vs3C2G/bv6PBwaGrvcNm+AXjWvkBdwnls7Od5N26RdM4PhSavbqKvcOzMIxb1RGAF5ikredZaR+OOCi+ygrSWiYnp+hcXx9duPCLvPos+yAcJyg+AqC8E8VnwNtCeZaNLldSsjm827BjteuGRrmR9gAPKu4HQPl0FK3A7UsLUYaZ8vI2kd1hp2TK5s1FVFXll1c9IY1URXeBQ8At4sbnqyQ/kJ6eTnqQivIyOo+weWZmhm/LgDqgU5ERILm5R8V9Ndiuqa7SjfIs/FsKCwvkVbuUnAINIprLysyMWF+P4nA45Lf5ShKwbanX/DxNssTxyEJ4Wc50RkkCbP/64RbSq4yNj8tvf1OSgBFxcWViQpfKB4NBGh4ekVedUZKAr8QFvyRKtjap0tXVQ/PzSznSr+EIDSpGADrj4dTG12HMM/bD5+bm9DHv4e11dC5LmLI8p0Y0eFRKemRcuvQXtZ0+Q1V+H7k3ucmchO1wJhSii6MXqa+/nyYmJuVNb8BgbarEAvAHHkZxgmI/zdFaODV2QJwXKB4LoGOOAe4BRnWm+GXgILA/lhOjhPMBGAkOKeC4G/AC1iQozUdFfNZwCvgYil9ZaX1QLSGSCqKngxHdivGFiBqdeo4Nc2aU0zScKOAjHO/Ak/l/RKvv6u7hObYPaAFuldo58fJCXe22U6k4Ao5ISrC8xUquUs9p7XeA3cDjrDiwA3gX5FyXUgRIVm4RLjrw8n/Vs8DKAyhelTlczdL182i7nGpTYE3Wh4XvR9EoaxORJ8e25WjnL0K+ABGtuicgHuvT4kny/iij85DsvjUVRsBa5z7L97R4vsDO1B3ybRw4yRE4xXnspZonqMTKf004293Dc5+/HJuTGaYZQ/9EqjhC8VhfKM/5u6dFNEeL3xKxvIi2bN0vgnHOfbn8CTwDPCJtgVlAADgGTKruL68GzbI63T1pK12rqZvJ+N9hIxgyCFjX8o8AAwC5ExmygkFqCAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/320.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/320.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRTgxMjIwRERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTgxMjIwRURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFODEyMjBCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFODEyMjBDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QxC5NgAABXNJREFUeNrsW2tMHFUUPgvL7sLuImW75VWWdnntAoViKbYujTEan+kPfxhT/VGrCUktmv5orBpfMTHVmBijTYxpNPHxSxNpqok/pGlM1Sgm8tRYqKkCKlArtDxcFlj8zjIXh5aVZXdmdlbmJF/uzL3DnT3fuY9zzh1MCwsLtJ4ljda5GAQYBBgEGAQYBBgEGAQYBBgEGAQYBBgEGASsRzHH8pDJZFL9h7x+/M0cFMVALhACfgcGHms5GHfCIpZchymmh1QiAEr7UDwE7AV8KzwyBpwGPgA+ARnh/wUBULwIxUvAA9x9jH/2I3AYJHye0gRA+TtRvA+4ls1Fs5mcTidZrRYKz4dpcmqKpqenV+riNeAIiJhPOQKgPFv8PfniW1RUSGWlpeRy5VJa2vI1eQoEDPw6QP3nf6ZQKCRv+gjYtxoJsehmJo0Eyt8kV95ut1PjzoaI4tHEnpVFfr+PSku91NHRRYNDQ6LpXmAEeDTR36XJCIDyG1D0AoV8n5u7gZoCAbJYMtbUT2/vD/TTuT551V6Mgk8TGQFa+QFPCeVtNhsFbty9ZuVZamqqqaTEI686DnItqvsBa7S2FcVtwM1AOcDWbxDtO66vx0Jnjbv/+u11NDoySn8Hg3xbAtwnLarJJQCKc1+HeYUG8lZ6hod+QUF+Yp4bdovKygrq7OoWVQcSISBNIeXZEt8Ar0RTPmKukhJFyPZ4PPJ1qQnvtydtBODlW1B8yTuaqHM47OQpLqZcrPA2DPfZ2VkaGxtP2PpCeP3IyclBn+woEi8m1UC75gRIC9CHQnnex2tra6jU671m53C73YquNU6nQxBAUgzRnowRwHN+p1B+T1MAim7UZFvJMC/76RWa+wGwfqYUseVEVuf67bD8Vs3C2G/bv6PBwaGrvcNm+AXjWvkBdwnls7Od5N26RdM4PhSavbqKvcOzMIxb1RGAF5ikredZaR+OOCi+ygrSWiYnp+hcXx9duPCLvPos+yAcJyg+AqC8E8VnwNtCeZaNLldSsjm827BjteuGRrmR9gAPKu4HQPl0FK3A7UsLUYaZ8vI2kd1hp2TK5s1FVFXll1c9IY1URXeBQ8At4sbnqyQ/kJ6eTnqQivIyOo+weWZmhm/LgDqgU5ERILm5R8V9Ndiuqa7SjfIs/FsKCwvkVbuUnAINIprLysyMWF+P4nA45Lf5ShKwbanX/DxNssTxyEJ4Wc50RkkCbP/64RbSq4yNj8tvf1OSgBFxcWViQpfKB4NBGh4ekVedUZKAr8QFvyRKtjap0tXVQ/PzSznSr+EIDSpGADrj4dTG12HMM/bD5+bm9DHv4e11dC5LmLI8p0Y0eFRKemRcuvQXtZ0+Q1V+H7k3ucmchO1wJhSii6MXqa+/nyYmJuVNb8BgbarEAvAHHkZxgmI/zdFaODV2QJwXKB4LoGOOAe4BRnWm+GXgILA/lhOjhPMBGAkOKeC4G/AC1iQozUdFfNZwCvgYil9ZaX1QLSGSCqKngxHdivGFiBqdeo4Nc2aU0zScKOAjHO/Ak/l/RKvv6u7hObYPaAFuldo58fJCXe22U6k4Ao5ISrC8xUquUs9p7XeA3cDjrDiwA3gX5FyXUgRIVm4RLjrw8n/Vs8DKAyhelTlczdL182i7nGpTYE3Wh4XvR9EoaxORJ8e25WjnL0K+ABGtuicgHuvT4kny/iij85DsvjUVRsBa5z7L97R4vsDO1B3ybRw4yRE4xXnspZonqMTKf004293Dc5+/HJuTGaYZQ/9EqjhC8VhfKM/5u6dFNEeL3xKxvIi2bN0vgnHOfbn8CTwDPCJtgVlAADgGTKruL68GzbI63T1pK12rqZvJ+N9hIxgyCFjX8o8AAwC5ExmygkFqCAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/323.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/323.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkJBMURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkJBMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCNDZCQjlGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQkEwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+P496PQAAB45JREFUeNrsW3ts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/326.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/326.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRDk3MUMxQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRDk3MUMxQkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBEOTcxQzE4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBEOTcxQzE5REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ofeu5AAABUlJREFUeNrsW19MW1UY/1pKW2i7dO06/o3CWgYtMBjKcFoWYzT+zR58MGaaOKdmcW4aHkymJmr0QZf44L8le1h8UZ80ETNNfJBlMVOjmAhsaFyZmQKaAU4YFGwLFH9fuRdvZ8kKvT23jPslv5x7zr2ce7/f+c53vu+cYlhYWKD1LEZa56IToBOgE6AToBOgE6AToBOgE6AToBOgE6ATsB7FlMlDBoMh5x/yzrHjThSVgAuIA38Cg88cPrjqDYtM9joMGT2UIwKgdADFY8AeIJDmkXHgFPAh8BnISFwXBEDxChRHgYe5+wz/7GegAyR8uaYJgPL3oPgAcKfMRZOJHA4HWSxmSswnKDI9TTMzM+m6eAt4FkTMrzkCoDyP+PtK51tRUU41fj+53S4yGlN98jQIGPx9kAYu/ErxeFx562Ng77VIyEQ3EwkSKH+rUnmbzUZtO1uTii8ntuJiCgYD5Pf7qKenj4aGh+VbDwAjwNPZfpcQC4DyG1H0A+Vcd7k2UnsoRGZz4Yr66e//iX45H1Y27YEVfJ6NBYiKA16QlbdarRS65eYVK8/S2NhAVVVeZdMxkGvOeRywwtG2oLgTuA3YBvDot8r3b7yhBY7Osur+W3Y00+jIKP0TjXK1CnhQcqraEgDFua8O9tBASbpn2PTLykqzi9ywWtTV1VJv31m5aX82BBhVUp5H4jvgjeWUTw5XVZUqZHu9XqVfasf7bZpZAF5ejeJrXtHkNrvdRt7KSnLBw1th7rOzszQ+PpH16MvC/sPpdKJPDhSJnUkD0C2cAMkBfSQrz+t4U1Mj+X2+/60cHo9HVV/jcNhlAkjKIbq1sACe8ztl5Xe3h6DoJiHLSqEp5dNrhccBGP0iKWNzJr1zyw6M/FZhaez33T/Q0NDw1dHhAcQFE6LigHtl5TdscJBva7XQPD4en726iaPDMxgYT04tAC8wSEvPS9I6nAxQAnW1JFoikWk6Hw7TxYu/KZvPcAzCeYLqFgDlHSi+AN6TlWfZ5HZrspvDqw0HVrtualMO0m7gUdXjAChfgKITuGvJERWaqKRkM9nsNtJStmypoPr6oLLpOclSVV0FDgG3y5VAoI6CQEFBAeWD1G6roQtIm2OxGFdrgGagVxULkMLcI3K9AWw3NtTnjfIs/C3l5WXKpl1qToFWOZsrLipKjn4+it1uV1ZL1SRg+1KvpSVCdolXIwuJlD3TmJoEWP+Lw82UrzI+MaGs/qEmASPyxeTUVF4qH41G6dKlEWXTaTUJ+Ea+4Jcss1urqfT1naP5+aU90m8RCA2pRgA6Y3Pq4usE5hnH4XNzc/kx7xHt9fSmbJiyvJyLbPCItOlRePny39R16jTVBwPk2ewhkwbLYSwep7HRMQoPDNDUVER5610MWFdOcgHEA4+jOEGZn+aIFt4a2y+fF6ieC6BjzgHuB0bzTPErwEFgXyYnRlnvB8AS7FLCcR/gAywaKM1HRXzWcBL4BIpPpvMPOdsQWQuSTwcjeSv6L0SEBitnz/Fc2gscBu4AbNIGy6vNTdtPakGAUB8AAvhgLyw5zVdo8RDlSYCD+GqQcEW0DxDuBEHCayie5/CdcytpGnZA+be1cILCCIDiD6Fok8z+CcUtzmGPAxxbfwUiOkUSINIH8InxvmUc8SFFvVOkDxBJwI+0eI7A8/9u5UABn3KmTas83lozTlCaCpxUHZVMXh6AAzD9E9e1D5CU5326AYBD6Tdp8ZdijwBjQA1ImBRNgEmwxf0FvAg8xWs/UAyEgNeBiGbx8rWQg4DImO5aC90M+v8O68mQTsC6ln8FGADdC+oSiv86OwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/329.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/329.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkJBMURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkJBMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCNDZCQjlGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQkEwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+P496PQAAB45JREFUeNrsW3ts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/332.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/332.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRDk3MUMxQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRDk3MUMxQkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBEOTcxQzE4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBEOTcxQzE5REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ofeu5AAABUlJREFUeNrsW19MW1UY/1pKW2i7dO06/o3CWgYtMBjKcFoWYzT+zR58MGaaOKdmcW4aHkymJmr0QZf44L8le1h8UZ80ETNNfJBlMVOjmAhsaFyZmQKaAU4YFGwLFH9fuRdvZ8kKvT23jPslv5x7zr2ce7/f+c53vu+cYlhYWKD1LEZa56IToBOgE6AToBOgE6AToBOgE6AToBOgE6ATsB7FlMlDBoMh5x/yzrHjThSVgAuIA38Cg88cPrjqDYtM9joMGT2UIwKgdADFY8AeIJDmkXHgFPAh8BnISFwXBEDxChRHgYe5+wz/7GegAyR8uaYJgPL3oPgAcKfMRZOJHA4HWSxmSswnKDI9TTMzM+m6eAt4FkTMrzkCoDyP+PtK51tRUU41fj+53S4yGlN98jQIGPx9kAYu/ErxeFx562Ng77VIyEQ3EwkSKH+rUnmbzUZtO1uTii8ntuJiCgYD5Pf7qKenj4aGh+VbDwAjwNPZfpcQC4DyG1H0A+Vcd7k2UnsoRGZz4Yr66e//iX45H1Y27YEVfJ6NBYiKA16QlbdarRS65eYVK8/S2NhAVVVeZdMxkGvOeRywwtG2oLgTuA3YBvDot8r3b7yhBY7Osur+W3Y00+jIKP0TjXK1CnhQcqraEgDFua8O9tBASbpn2PTLykqzi9ywWtTV1VJv31m5aX82BBhVUp5H4jvgjeWUTw5XVZUqZHu9XqVfasf7bZpZAF5ejeJrXtHkNrvdRt7KSnLBw1th7rOzszQ+PpH16MvC/sPpdKJPDhSJnUkD0C2cAMkBfSQrz+t4U1Mj+X2+/60cHo9HVV/jcNhlAkjKIbq1sACe8ztl5Xe3h6DoJiHLSqEp5dNrhccBGP0iKWNzJr1zyw6M/FZhaez33T/Q0NDw1dHhAcQFE6LigHtl5TdscJBva7XQPD4en726iaPDMxgYT04tAC8wSEvPS9I6nAxQAnW1JFoikWk6Hw7TxYu/KZvPcAzCeYLqFgDlHSi+AN6TlWfZ5HZrspvDqw0HVrtualMO0m7gUdXjAChfgKITuGvJERWaqKRkM9nsNtJStmypoPr6oLLpOclSVV0FDgG3y5VAoI6CQEFBAeWD1G6roQtIm2OxGFdrgGagVxULkMLcI3K9AWw3NtTnjfIs/C3l5WXKpl1qToFWOZsrLipKjn4+it1uV1ZL1SRg+1KvpSVCdolXIwuJlD3TmJoEWP+Lw82UrzI+MaGs/qEmASPyxeTUVF4qH41G6dKlEWXTaTUJ+Ea+4Jcss1urqfT1naP5+aU90m8RCA2pRgA6Y3Pq4usE5hnH4XNzc/kx7xHt9fSmbJiyvJyLbPCItOlRePny39R16jTVBwPk2ewhkwbLYSwep7HRMQoPDNDUVER5610MWFdOcgHEA4+jOEGZn+aIFt4a2y+fF6ieC6BjzgHuB0bzTPErwEFgXyYnRlnvB8AS7FLCcR/gAywaKM1HRXzWcBL4BIpPpvMPOdsQWQuSTwcjeSv6L0SEBitnz/Fc2gscBu4AbNIGy6vNTdtPakGAUB8AAvhgLyw5zVdo8RDlSYCD+GqQcEW0DxDuBEHCayie5/CdcytpGnZA+be1cILCCIDiD6Fok8z+CcUtzmGPAxxbfwUiOkUSINIH8InxvmUc8SFFvVOkDxBJwI+0eI7A8/9u5UABn3KmTas83lozTlCaCpxUHZVMXh6AAzD9E9e1D5CU5326AYBD6Tdp8ZdijwBjQA1ImBRNgEmwxf0FvAg8xWs/UAyEgNeBiGbx8rWQg4DImO5aC90M+v8O68mQTsC6ln8FGADdC+oSiv86OwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/335.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/335.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzMyOEI2MERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzMyOEI2MURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDMzI4QjVFREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDMzI4QjVGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uQUxMwAAB5xJREFUeNrsWmls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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/338.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/338.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRTgxMjIwOURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTgxMjIwQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBEOTcxQzFDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFODEyMjA4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SJ9X6gAABUlJREFUeNrsWl9MW1UY/1oKLbRdurKOf4OylkELDIYynJbFGI3zT/bggzHTxDk1i3PT8GAyNVGjD7rEB/8t2cPii/qkiZi5xAdZFrNpFBOhgMbBzBTQDHDCoCAt//x9cC/ezpKV9vS2dedLfjn3nHt67v39znfP+c45NSwtLdGNbAYpgBRACiAFkAJIAaQAUgApgBRACiAFkAJIAaQAsSsZDCl/kXePn3AgKQecQAT4Axh89sihhHsoLm7pFACkfUgeB/YCvhhVxoEzwEfA5xBj8X8hAIiXITkGPMLNx/mzn4A2iPBlVgsA8vci+RAo1JabTCay2+1kNufR4sIihaanaWZmJlYTbwPPQYiFrBMA5LnHPwCMallZWSlVeb1UWOgko9EYVX8aAgz+NkgDF3+hSCSivfUJsO96IsTDzaTXaAvyt2vJW61WatnZvEx8LbMWFJDf7yOv10NdXUEaGh5Wbz0IjADPZMUsAPIbkfQBpZx3OjdSayBAeXm562qnr+9H+vlCv7ZoL7zgdDIeYNTJAV5UyVssFgrcduu6ybPV19eR212hLToOcfOSeTFTClzdjORu4A5gG8C936zev/mmJgx05oTbb9rRSKMjo/T37Cxn3cBDyqCaXgFAnNtq4xEaKIpVh12/pKQ4qefwbFFTU03dwR616EAyAhgFkeee+BZ4cy3yy93ldgsRu6KiQjsuteL51rR5AB5eieQ8z2hqmc1mpYrycnJihLfA3efm5mh8fCLp3leNxw+Hw4E2OVAkHkzqgE7dBVAGoI9V8jyPNzTUk9fj+c/M4XK5hI41drtNFYCUNURnOjyAv/mdKvndrQEQ3aTLtJJrinr1at3jAPR+vrJicyyPzk070PNbdVvGftf5PQ0NDV8bHR5EXDChVxxwn0p+wwY7ebZW6rqOj0Tmri3i6PAcOsaVUg/AAwzK1POyMg8vByi+mmrS20KhabrQ30+XLv2qLT7HMQivE4R7AMjbkXwBvK+SZ9tUWJiW3RyebTiw2nVLi7aTdgOPCY8DQD4HSTuwZ3UgyjVRUdFmstqslE7bsqWMamv92qLnFU8VOgscBu5UMz5fDfmBnJwcygSr3lZFF7FsDofDnK0CGoFuIR6ghLlH1Xwd1K6vq80Y8mz8LqWlJdqiXSI/gWZ1NVeQn7/c+5loNptNmy0WKcD21VaLi3TZJU7Elhaj9kzDIgWw/BuH51Gm2vjEhDb7u0gBRtSLyampjCQ/OztLly+PaIvOihTga/WCH7LGbm1aLRjspYWF1T3SbxAIDQkTAI2xO3Xw9SK+M47D5+fnM+O7R7TX1R21Ycr2SipWg0eVTY/cK1f+oo4zZ6nW7yPXZheZ0jAdhiMRGhsdo/6BAZqaCmlvvYcO60jJWgDxwBNITlL8pzl6G2+NHVDPC4SvBdAwrwEeAEYzjPhV4BCwP54To6T3A+AJNmXBcT/gAcxpIM1HRXzWcAr4FMQnY40PKdsQyQaTAkgB0iRAsKeXf7APOALcBViVjZTXGhu2n0q2fjYIwAd4/crg+CqtHJY8BXCwXglSV5OpnxWfAEi9juQFDtN5DaVMuW0g846I+hkrAIg8jKRFceMnNbd4rXoC4Bj6KxBrT6S+aAFS8QcJPhnev0bQdViTb0+wvlBLhQA/0Mp5AX/P92g7BPiMV9QUfYy13vpCLZVjAC+ejikurAp9EK58UkT9TJ8FeD9uAOCQ+S1a+UfYo8AYUAVSk8nUz/QxgO1P4CXgaZ7LgQIgALwBhATUFxstXQ8J79L09BpjXYuqL4Kb/LO0FEAKcGML8I8AAwDUl2wjcpMN4gAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/350.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/350.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRTgxMjIxMURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTgxMjIxMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFODEyMjBGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFODEyMjEwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nKJgtAAABN1JREFUeNrsW0tsW0UUvU4c24ntyrXr5tfYrZ3Gdr4NJKWQVICQQEC7YFGhwgIKElLFR10gFVjAFgmBEFTqArEBViA+AgQLUnXRgiAgJW5DRZOWljigJlVJaD74kzic674Jz8EpTvz87MRzpaPxzHuZ986ZeXfu3GkNi4uLVMpWRiVuUgApgBRACiAFkAJIAaQAUgApgBRACiAFKEUzZnOTwWDI+4u8dey4A0UD4ATiwB/A6HPPHF5zwiKbXIchq5vyJABIB1E8AewHghlumQROAB8AX0CM5IYQAMTrUbwKPMrdZ/ln54AjEOGbdS0AyN+P4n3AlfYtGo1kt9vJbDZRciFJM7OzNDc3l6mLN4HnIcTCuhMA5HnE31M73/r6Omr0+8nlclJZWbpPnoUAo7+N0siFixSPx9WXPgIO/p8I2XAzkk4G8neqyVutVtrd3ZUivpJZq6ooFAqS3++jgYEwRcbGxKUDwDjwbK7vpcsMAPnNKIaAOq47nZupt6eHTKaKVfUzNPQz/XJ+WN20H7Pgy1xmgF5xwEuCvMVioZ47bl81ebbW1hbyej3qpmMQ15T3OGCVo21GcS9wN7AT4NHvEtdvvaUTjs685v47d3XQxPgE/R2NctULPKw41cIKAOLc1xH20EB1pnt46tfW1uQWuWG1CASaaDB8RjQdykWAMo3I80h8D7y2EvnUcHm9mojt8XjUfqkXz7cWbAbg4dtRnOYVTbTZbFbyNDSQEx7egumeSCRocnIq59EXxv7D4XCgTw4UiZ1JC9CvuwCKA/pQkOd1vL29lfw+339WDrfbramvsdttQgBS9hD9hZgB/M13C/J7e3tAdIsuy0qFMe3Vm3SPAzD6lcqOzZHyzp27MPI7dNvG/tD/I0UiY8ujw6cQF0zpFQc8IMhv2mQn347tuu7j4/HE8iaODk9hYNx5nQF4gEFZel5W1uFUgBIMNJHeNjMzS+eHh+nSpcvq5lMcg/A+QfMZAPJ2FF8D7wrybFtcroJkc3i14cBqz2271YO0F3hc8zgA5MtRfArct+SIKoxUXb2VrDYrFdK2baun5uaQuukFZaZqugo8DdwjKsFggEJAeXk5FYM17WykC9g2x2IxrjYCHcCgJjNACXOPinoL1G5taS4a8mz8LnV1teqmPVp+Al1iN1dVWZka/WI0m82mrtZoKUDbUq811bpkiddii8m0nGlMSwEs/8bhJipWm5yaUld/11KAcfHj+vR0UZKPRqN05cq4uumklgJ8K37wQ1bI1hbUwuGztLCwlCP9DoFQRDMB0BlPpz7+ncR3xnH4/Px8cXz3iPYGBtMSpmyv5GM3eFRJelRcu/Yn9Z04Sc2hILm3uslYgOUwFo/T1YmrNDwyQtPTM+pLb2PA+vKyF0A88CSKdyj70xy9jVNjh8R5geZ7AXTMe4CHgIkiI/4XcBh4LJsTo5zzAZgJNmXD8SDgA8wFIM1HRXzW8DnwCYhfz+Qf8pYQWQ9WTAcjRWtSgFIXwKj3A8NnznIy9UVgH8DR1MfAGx3tbYkNLwDIszf9jG6cHQrrVpIXj5TCJ3DXMvLCDkKctlIQIHiTa4FSEODXm1y7XAoC8L/wynSG9xWc4E8bXgCQ5JwVp9WPAxFl1F+nG6c6BTGD/J+jMhKUAkgBpAAlbP8IMADlx3hSw5zEYwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/weather/64x64/day/353.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/353.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkI5OURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkI5QURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNjYyM0E4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQjk4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i0CtcQAABxtJREFUeNrsWnts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/356.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/356.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkI5RERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkI5RURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCNDZCQjlCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQjlDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PydFsQAABxVJREFUeNrsWmls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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/359.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/359.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUM5RDlFOERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUM5RDlFOURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQzlEOUU2REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxQzlEOUU3REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UrKFSAAABwdJREFUeNrsWgts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/362.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/362.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzMyOEI2NERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzMyOEI2NURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDMzI4QjYyREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDMzI4QjYzREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+x5UfhwAAB8dJREFUeNrsW2ls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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/365.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/365.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMkM3RUM5N0RCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMkM3RUM5OERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIyQzdFQzk1REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyQzdFQzk2REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+o5V99wAAB/JJREFUeNrsW3ls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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/368.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/368.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjQ2QkJBMURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjQ2QkJBMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCNDZCQjlGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCNDZCQkEwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+P496PQAAB45JREFUeNrsW3ts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/371.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/371.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzMyOEI2MERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzMyOEI2MURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDMzI4QjVFREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDMzI4QjVGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uQUxMwAAB5xJREFUeNrsWmlsVFUUPrO00G1ooS1QaKcLm+xbNa1G6sYSpAQXQkxEIRhBEAgSNVGJGuNGIkZAEhWN0ZgYq8EERQlIFVqW+gNaI1tLF2xtK9Bpp9BOt/E7M3deXx/TYWbem840zEm+3Pvuu2853z33nHPvezq73U63s+jCBIQJCBMQJiBMQJiAMAFhAqQGnU7VDe0/UjyKJnFYrVtK6aGirLvB1qtQdLyKa6OAsaFAit6Pl08GPkH1PMrFfj73RXH9NiZjUBEAeRR4hmcLsAMKRPpIII/8S0A08AYwfbAR8Cnwl6jzNNjo4/XbAdeofwMfcXLQOUGM4gMoDonDFiYCijSKc0zqaOA6EIP2Wtl1uSiKxOENYIL8fDCcoKNRDh9MeR/QDrwrPL8310wACgA78GowooASHi0AL5mKoh2j9J8bZcxsyjh3TtZmQDEVyOTRB67xdEGfGsW181EcRXtbfy/70a49bEUpQJywpsqNG9Zd0doCbkXAARQ5wOvAbrxwZz8jm4ViK7ACcGcN5cBeYBfu0dqPwvzgPOApYL6YRkqpBn4GPgcZfwaUACi1SDzMJTzSW6DAAZniOhHS2JsP8eId6lhB3OOQQvm7UHwA5PqgD7/bZhBxMVAEjBMvtUR2mk06CwpYhLl/ATzZ5wZDhdEagQ7hIvvaTQ/wNO7xlRh1DolvAYY+txk6lGJioikyMpI6OjrIam11lAphR/osSPg6IFNAELFAEDEZWIMX3yva3xOj7xQTUwMMUz4V4PhwCbD1ktBD+kW7L+9ehvpaV6PRaKCMjAxKN5tp2DDTTS/b1NRElZVVVFlVrVRmE0j4KCAECGWNYm5+CQK6FOHM6arGi9SoP2ErKBMWATnRnG8taVkU5zqdnJxE2XPnUFTUrRPDlhYrnTxVQs3NzfLmx0FCQUAIcEPIEeGwiEYA07ychEwCXFe9NZMKGrbCOJzPyszMoFkzZ/i0EOvu7qai4uPU2CgFKKZ2MkioDehiSCyC8qSrfVkSRTg8CP3RtFxSPjk52WflWQwGA+Xm5JDJFCefhNsDngmCgOc4JDoOkoApnh/QZoul6tqpVNcwjqw3Eqi9PZYar6VJc37hgvkOh+evsF84/Fuh3MFmwQqqvLUAoxsF2ft/pozjmPtrRL1XZQ/5X7sthk6czqe/K3JgrhFu+2RlZalSniUhIYHGpKRQbV2dyyZXAm96e73RTVssMM/DNTFSrZ914OX6SXTw6Cq60W7y+HCzOU2TFDc93ewigGWBWgI8K03U1euJbu5YBXP/qXAt4lxvWE9MHEFjx4whE0JbZEQEpkE7WSzNZIqL04SApKRE+eFMzi8wDez+EsDBKkHpdGX1CqmmSGpbWhPp4LHVkvJs3tnZc2gkHJ1SRo0apdkix2g0OsJnW5tjacH7DMOBq34RgLnOylo8XHNMqjWKZY+IJYWnVpCtwxnHY6KjKe++eRSlco57HWBAgmxlNQE4HqgNEU6AnF6WM9N/nI31VzLg7adIkSQ3N2fAlHe8SmeffPt3TINtgF4zAhAdRgoL4VDzjnSi0mls5y/dKTVlZKS7TWUDJZwU9fR0KzMOXqDxesOgigAobgLeR7UG5SzRzOuBo47krmcInSjKp7PlOb3ePS2NBlI4Kcpf8jDlzbtX6RCfuFVE8LQaZHJWAW9zwiZO87y6h62Ad4evdqaU7L+yLq2lK7HP9Y8sW6r6+4IaOX2mlMrLK+TJ0R2IChe8SoRkslpsgMpvVCo2NK/vvLzHoCP7ELtsBRQNT5yUlBRU5R1xcMZ0x4KpsbHRZeW8al3jqwXwBsdZntLsVHj3FyNfKtvE+AHFMlcYmj17JqWlplKoiMVioUOHj8j3MZKfX7+222sLgLI2kMBrdRPqBYodnMku5VnuhsdXzL2gS3x8PMXGxlJrqyNZGS6Wbed8ygSh+MF+TuW7KqmpY0NOeSmn7yXAkXu5I8Dfb4PSDkDK6NEUqmLv6ZEf2rRKhFw7f871UGRkaCoP32Zp7pPQ1mpJQIOU/1utIUlAfX0D2WzSJmoFwmCNlgRI6wHepAy1nyw6O7voTGmZvOlbLdcCLPtFaEG8bVE+LKhis9moqLhY7vx4Hnyo2ZaYLBRuQLHTdcx7e5MmjscaIJ70et2Az3deCtfV/UsXy8upo6PPwugxmP/3Xm+J+SC8LziXnNvljqxLZF6hIhwC1ruU19wChBVw59eAV/rfIAuKXCDnF6NCpaVoSoCMCLNYOD1Izo+ahiAozd8FSgBO0X+F8l3upkpACBgsEiYgTECQCECewHsI/Bk8c8b0aStx/BDqLwObcVymtv9gIGC5LBtjZXaQ81eaI1DofrX91RCgHyDr+w4oFvV9Qhl+mxc06u+3BNwCMJrbxIbERGCh7FSdUJRlr8u0fe2v1gKMAzD6vLdodtPOv1VsEnVOWMr87K9KBoIA3lVKFgpky9r50xX/LNUO1KjoH9pTQDYVDgiT5pUKf7jgDcppMOWzWvQPaScIZRbL5jN/rCgX6fIOLfqrkYGKAvxB5WPgF4wg7zBvYT3J+dFFi/7qsiN//hX20xL07upa9fdVV7f/Ct9uEiYgTMBtTsD/AgwAChpv4EUrCg4AAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/weather/64x64/day/374.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/374.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzMyOEI2OERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0I1MUYxQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDMzI4QjY2REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDMzI4QjY3REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VfZd+AAABzhJREFUeNrsWwts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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/377.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/377.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0I1MUYxRERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0I1MUYxRURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDQjUxRjFCREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDQjUxRjFDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Vhp1VwAAB0lJREFUeNrsWwls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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/386.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/386.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0I1MUYyMURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0I1MUYyMkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDQjUxRjFGREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDQjUxRjIwREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+217RlgAAB7tJREFUeNrsW2ls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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/389.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/389.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRjVDMjRFRURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRjVDMjRFRkRCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBGNUMyNEVDREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBGNUMyNEVEREJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WUdrXgAABVFJREFUeNrsWm1MW1UYftvSdtDiaGGDQSswxujoGAxwAzeji4nzI4suZlGzH276yxiT/Vgy9Ycff4yJf0zmP2Ni1MQEExU18Ydjm5szyxYMAi5zZajAFj4cHxsttEDr83b3slsGrh+nvRe4b/LknHt6e3rf5z3n/Ti3hkgkQqtZjLTKRSdAJ0AnQCdAJ0AnQCdAJ0AnQCdAJ0AnQCdgNUpWPDcZDIa0P0hDQ0MeGjfgBELAdaCvvb096QOLeM46DHHdlCYCoLQHzUvAPsCzyC1jQBvwBfA9yAivCAKgeAma94GDPH2cX7sEHAEJPy1rAqD8E2g+B/Jj9mJWFtntuWSxWig8Fya/309TU4HFpvgQOAoi5pYdAVCeLf6Z0vluKC6h8vKN5HDmk9EY65MDgQAN9PdRb28PzYRCyo++Al64FwmaIgDKP4zmpKx8js1G2+sbyenMv+d3WfnOzg66fm1AOfwRCHhtWRAA5R1ouoFivs5zOKipeTeZzeaE5rl86Q/y+f5UDu0DCT+kQkCm8oA3ZeWt1jW0Y+eDCSvP4qn2kttdGrMKQK4l7XlAgta2onkM2ANUAmz9Rvnz2rrtIMGa9Pxbt9XSyMgQTU9P8yWz8ZzkVNUlAIrzXEfYQwOFi93jcDipsGhDapkbosWmyirq7vpdHjqcCgFGQcqzJc4DHyylPIvLfb8QsnkehV/ajd+3qbYC8ONlaH4BSuQxm81OJS43QpszutxnZmZoYnw8ZevLwv5j7do8Gh8fi14CXuBCxgmQHFCLrDzH8WpvDZUhri+MHAUF64T6GpvdLhNAUg1xQY0VwHv+AVn5puZdlC9Y0f9bBQrZnHEfAOtno3lDvvZu3ZYx5aPJEbaVQt7D87RIFWXGnOCTnNNwJzf3PiotK89oHR+KTY1ZDgBnQUJCVkg4E8QPGKTQ85YUh6MJSiVCU6bF75+kHt8V6vvnb+XwWc5BuE4QnglC+Vw0PwKfyMqz5MeRz6dDONrU1tVTQ+MOpZEeAg4J3wJQ3oTmG2DvnaTETOvWF6Kwsat6rFVc4qIqzxbl0OvSShUaBV4FHpUvKjdXAR4ymUykBdlYUUl/9V6lYDDIl5s46wY6hKwAKc09Jl9XearJs8WrGeVZ+FkWJFpNIldAo1zNZWdnR60vUqymIGWbbp/+hMIWCswml9na7TFbsUgkATVyZ31hkfAzwgOlX1JFri/ab+1/ljpG65OaJxyO8fpBkU5wjdyxmC1ClXfl9M8rPxZyUudYXdJzTdxJjVmuiSRgSO7cmrwllIBHitrm+2eG9lA4klxuFgxO0/DwkHLolEgCzsmd4aFBmgoENGf97q5OmpubPyP9FYlQvzACMBkvpxO391mYfmu/SLOzs5qwPmd7XXcfmL6djmrwmHToYR4dvUFnTp+MJh9cACUTDt22gXnrjwad1D7sBQEzCdUCN/4doas9PpqM3ZbHYbATaakFkA+8jOZjiv9tzpJy/KCPmitu3jV+tKWCTl/OS3ZaPho7LL8vEF4LYGKuAfazK0hF+RqXf1Hlrwzm0M/JKT8BvAK8GM8bo5QORPADrVgJbVLB8RRnoZzLJDLHoV2DBYGQic8TKMcyN2+ET88VjcBm8XpYrof5XcN3wNd4rpvJMKfq2+FIKz0uVZck5e31hqdJ2P/3tfRiZCl5R9F/V6TymTgREmH9nQrrt6rxHEaNWJ8zoDBIiQDPrHgCFlhfKRlfCUYNWJ/U9ANqEcArgF+aPq+m9bUQBs8rtsJ+WP9bofNrOQzqUUADOYBWooBq1tdKFFDN+nE7wZUs+r/FdQJ0Ala3/CfAAF1swcMnTwtdAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/weather/64x64/day/392.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/392.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOTA4QTRCOERCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOTA4QTRCOURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5MDhBNEI2REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5MDhBNEI3REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0+v2dAAACHdJREFUeNrsW3ls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";

/***/ }),

/***/ "./src/assets/weather/64x64/day/395.png":
/*!**********************************************!*\
  !*** ./src/assets/weather/64x64/day/395.png ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRjA0RTdGOURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRjA0RTdGQURCREIxMUUyOEEzMEU0Rjc2NDkyREJFOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGMDRFN0Y3REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGMDRFN0Y4REJEQjExRTI4QTMwRTRGNzY0OTJEQkU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/Ps4aQAABgVJREFUeNrsW2tM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";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.floor(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.floor(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const utcDate = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
const protectedDayOfYearTokens = ["D", "DD"];
const protectedWeekYearTokens = ["YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}

function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}

function throwProtectedError(token, format, input) {
  if (token === "YYYY") {
    throw new RangeError(
      `Use \`yyyy\` instead of \`YYYY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "YY") {
    throw new RangeError(
      `Use \`yy\` instead of \`YY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "D") {
    throw new RangeError(
      `Use \`d\` instead of \`D\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "DD") {
    throw new RangeError(
      `Use \`dd\` instead of \`DD\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  }
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    startOfDayRight.getTime() -
    (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");








// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_2__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_3__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  const formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate,
  };

  const result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function (substring) {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_4__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'";
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_5__.formatters[firstCharacter];
      if (formatter) {
        if (
          !options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(substring)
        ) {
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.throwProtectedError)(substring, formatStr, String(date));
        }
        if (
          !options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(substring)
        ) {
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.throwProtectedError)(substring, formatStr, String(date));
        }
        return formatter(
          originalDate,
          substring,
          locale.localize,
          formatterOptions,
        );
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return substring;
    })
    .join("");

  return result;
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff =
    (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date).getTime() - (0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff =
    (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options).getTime() -
    (0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/parseISO.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/parseISO.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseISO: () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");


/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);

  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  const timestamp = date.getTime();
  let time = 0;
  let offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    const dirtyDate = new Date(timestamp + time);
    // JS parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    const result = new Date(0);
    result.setFullYear(
      dirtyDate.getUTCFullYear(),
      dirtyDate.getUTCMonth(),
      dirtyDate.getUTCDate(),
    );
    result.setHours(
      dirtyDate.getUTCHours(),
      dirtyDate.getUTCMinutes(),
      dirtyDate.getUTCSeconds(),
      dirtyDate.getUTCMilliseconds(),
    );
    return result;
  }

  return new Date(timestamp + time + offset);
}

const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/,
};

const dateRegex =
  /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex =
  /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length,
      );
    }
  }

  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" +
      (4 + additionalDigits) +
      "})|(\\d{2}|[+-]\\d{" +
      (2 + additionalDigits) +
      "})$)",
  );

  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return { year: NaN, restDateString: "" };

  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);

  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);

  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (
      !validateDate(year, month, day) ||
      !validateDayOfYearDate(year, dayOfYear)
    ) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return (
    hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute + seconds * 1000
  );
}

function parseTimeUnit(value) {
  return (value && parseFloat(value.replace(",", "."))) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;

  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;

  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = (captures[3] && parseInt(captures[3])) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function validateDate(year, month, date) {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  );
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return (
    seconds >= 0 &&
    seconds < 60 &&
    minutes >= 0 &&
    minutes < 60 &&
    hours >= 0 &&
    hours < 25
  );
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseISO);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parseISO.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var jeff_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jeff-query */ "./node_modules/jeff-query/index.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




__webpack_require__("./src/assets/weather/64x64/day sync recursive \\.png$");

// Weatherapi key
var API_KEY = 'acb745e75bc74a35bd612350232312';
var weatherData = null;
function loadData(_x) {
  return _loadData.apply(this, arguments);
}
function _loadData() {
  _loadData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(city) {
    var response, data, days, dailyData, i, dayData, date, condition, avgTempF, rainChance, snowChance, ogIconLink, iconLink, hourlyData, j, hourDate, parsedDate, ogHourIconLink, iconHourLink, hourData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(API_KEY, "&q=").concat(city, "&days=3&aqi=no&alerts=no"), {
            mode: 'cors'
          });
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          days = data.forecast.forecastday;
          dailyData = [];
          for (i = 0; i < days.length; i += 1) {
            dayData = days[i];
            date = dayData.date;
            condition = dayData.day.condition.text;
            avgTempF = dayData.day.avgtemp_f;
            rainChance = dayData.day.daily_chance_of_rain;
            snowChance = dayData.day.daily_chance_of_snow;
            ogIconLink = dayData.day.condition.icon;
            iconLink = ogIconLink.replace('//cdn.weatherapi.com', '.'); // I just put the sites' images in the dist folder manually so i dont have to hassle with importing the dozens of images somehow
            hourlyData = [];
            for (j = 0; j < dayData.hour.length; j += 1) {
              hourDate = dayData.hour[j].time;
              parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parseISO)(hourDate);
              ogHourIconLink = dayData.hour[j].condition.icon;
              iconHourLink = ogHourIconLink.replace('//cdn.weatherapi.com', '.');
              hourData = {
                time: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(parsedDate, 'h:mm a'),
                tempF: dayData.hour[j].temp_f,
                condition: dayData.hour[j].condition.text,
                iconLink: iconHourLink
              };
              hourlyData.push(hourData);
            }
            dailyData.push({
              date: date,
              avgTempF: avgTempF,
              condition: condition,
              rainChance: rainChance,
              snowChance: snowChance,
              hourlyData: hourlyData,
              iconLink: iconLink
            });
          }
          console.log(dailyData);
          return _context2.abrupt("return", dailyData);
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          if (!(_context2.t0.name === 'TypeError')) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", null);
        case 18:
          return _context2.abrupt("return", _context2.t0);
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return _loadData.apply(this, arguments);
}
function createCard(degrees, time, condition, barHeight, iconSrc) {
  var card = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.make)('.card');
  var tempBar = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.make)('.temp-bar', card);
  tempBar.style.height = "".concat(barHeight, "%");
  var tempDisp = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.make)('.temp-display', tempBar);
  tempDisp.textContent = "".concat(degrees, "\xB0");
  var timeDisp = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.make)('.time', card);
  timeDisp.textContent = time;
  var condIcon = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.make)('img.condition-icon', card);
  condIcon.src = iconSrc;
  condIcon.alt = condition;
  return card;
}
function makeHourSlider(cardCount, cardsPerSlide) {
  var nextButton = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.carousel .right.arrow');
  var backButton = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.carousel .left.arrow');
  var sliderElm = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.carousel .slider-board');
  (0,_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(nextButton, backButton, sliderElm, cardCount, cardsPerSlide, true);
}
function displayHourlyData(dayInd) {
  var sliderBoard = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('main .slider-board');
  sliderBoard.textContent = '';
  var day = weatherData[dayInd];
  var maxTemp = day.hourlyData.reduce(function (max, nextVal) {
    return nextVal.tempF > max ? nextVal.tempF : max;
  }, 0);
  for (var i = 0; i < day.hourlyData.length; i += 1) {
    var hour = day.hourlyData[i];
    var barHeight = hour.tempF / maxTemp * 100;
    var newCard = createCard(hour.tempF, hour.time, hour.condition, barHeight, hour.iconLink);
    console.log(hour.iconLink);
    sliderBoard.append(newCard);
  }
}

// Function to update the gradient based on a value
function updateGradient(value) {
  var color = interpolateColor(value);
  document.body.style.background = "linear-gradient(to bottom, ".concat(color.start, ", ").concat(color.end, ")");
}

// ---- COLOR CHANGING STUFF ---- //
// Function to interpolate color between orange and blue
var startHex = '#08415C'; // Blue
var barBlue = '#3993DD';
var endHex = '#D66853'; // Orange
var barOrg = '#F6AF65';
function interpolateColor(value) {
  var startColor = hexToRgb(startHex);
  var endColor = hexToRgb(endHex);
  var r = Math.round(startColor.r + (endColor.r - startColor.r) * (value / 100));
  var g = Math.round(startColor.g + (endColor.g - startColor.g) * (value / 100));
  var b = Math.round(startColor.b + (endColor.b - startColor.b) * (value / 100));
  return {
    start: rgbToHex(startColor.r, startColor.g, startColor.b),
    end: rgbToHex(r, g, b)
  };
}

// Helper function to convert RGB to hex
function rgbToHex(r, g, b) {
  var toHex = function toHex(c) {
    return "0".concat(c.toString(16)).slice(-2);
  };
  return "#".concat(toHex(r)).concat(toHex(g)).concat(toHex(b));
}

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  var bigint = parseInt(hex.slice(1), 16);
  return {
    r: bigint >> 16 & 255,
    g: bigint >> 8 & 255,
    b: bigint & 255
  };
}
function loadDayData(dayInd) {
  var currDay = weatherData[dayInd];
  var iconElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.todays-stats .condition-icon');
  var image = currDay.iconLink;
  iconElement.src = image;
  var tempDisplayElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.todays-stats .temp-display');
  tempDisplayElement.textContent = "".concat(currDay.avgTempF, "\xB0");
  updateGradient(currDay.avgTempF);
  var conditionTextElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.todays-stats .condition-text');
  conditionTextElement.textContent = "".concat(currDay.condition, ".");
  var rainChancerElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.todays-stats .rain-chancer');
  rainChancerElement.textContent = "".concat(currDay.rainChance, "%");
  var snowChancerElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.todays-stats .snow-chancer');
  snowChancerElement.textContent = "".concat(currDay.snowChance, "%");
  displayHourlyData(dayInd);
}
var currDaySlide = 0;
function makeDaySlider() {
  var dayChangerElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.day-changer');
  var sliderElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.slider', dayChangerElement);
  var leftArrowElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.left.arrow', dayChangerElement);
  var rightArrowElement = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('.right.arrow', dayChangerElement);
  var slider = (0,_slider__WEBPACK_IMPORTED_MODULE_2__["default"])(rightArrowElement, leftArrowElement, sliderElement, 3, 1, false);
  var changeDay = function changeDay() {
    var currSlide = slider.getCurrSlide();
    loadDayData(currSlide);
    currDaySlide = currSlide;
  };
  leftArrowElement.addEventListener('click', changeDay);
  rightArrowElement.addEventListener('click', changeDay);
}
function citySearchSetup() {
  var searcher = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('#search');
  var searchError = (0,jeff_query__WEBPACK_IMPORTED_MODULE_1__.query)('#search + .error');
  var lastSearch = 'Hell';
  searcher.value = 'Hell';
  searcher.addEventListener('keydown', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var oldData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(event.key === 'Enter')) {
              _context.next = 7;
              break;
            }
            oldData = weatherData;
            _context.next = 5;
            return loadData(searcher.value);
          case 5:
            weatherData = _context.sent;
            if (weatherData === null) {
              weatherData = oldData;
              searcher.value = lastSearch;
              searcher.setCustomValidity('No such city!');
              searchError.textContent = 'No such city!';
            } else {
              searcher.setCustomValidity('');
              searchError.textContent = '';
              loadDayData(currDaySlide);
              lastSearch = searcher.value;
            }
          case 7:
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
loadData('Hell').then(function (data) {
  weatherData = data;
  makeDaySlider();
  makeHourSlider(24, 12);
  citySearchSetup();
  loadDayData(0);
}).catch(function (err) {
  return console.error(err);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUMzREE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnNEO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDSztBQUNEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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LGFBQWE7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEOztBQUVBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxnQkFBZ0I7QUFDekU7O0FBRUEsV0FBVyxpRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxnQkFBZ0I7QUFDekU7O0FBRUEsV0FBVyxpRUFBZTtBQUMxQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDs7QUFFQTtB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN1QjtBQUNOO0FBQytDOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMkRBQVU7QUFDbkMsMEJBQTBCLDJEQUFVOztBQUVwQztBQUNBLCtCQUErQix5R0FBK0I7QUFDOUQ7QUFDQTtBQUNBLElBQUkseUdBQStCOztBQUVuQztBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkRBQWlCO0FBQ3hFOztBQUVBO0FBQ0EsaUVBQWUsd0JBQXdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNGO0FBQ21CO0FBQ0s7QUFDSjtBQUNRO0FBSzlCOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxjQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ3pCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpRTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQ0R2SCxLQUFLLENBQUMsVUFBQ2lCLEdBQUc7RUFBQSxPQUFLb0QsT0FBTyxDQUFDM0QsS0FBSyxDQUFDTyxHQUFHLENBQUM7QUFBQSxFQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc2xpZGVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvamVmZi1xdWVyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LyBzeW5jIFxcLnBuZyQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdC5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheU9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZUlTTy5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vlay5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZlllYXIubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB1cGRhdGVCdXR0b25zKG5leHRCdXR0b24sIGJhY2tCdXR0b24sIGN1cnJTbGlkZSwgbWF4U2xpZGUsIG1pblNsaWRlKSB7XG4gICAgY29uc3QgY2FuU2xpZGVGb3J3YXJkID0gY3VyclNsaWRlIDwgbWF4U2xpZGUgLSAxO1xuICAgIGNvbnN0IGNhblNsaWRlQmFjayA9IGN1cnJTbGlkZSA+IG1pblNsaWRlO1xuXG4gICAgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9ICFjYW5TbGlkZUZvcndhcmQ7XG4gICAgYmFja0J1dHRvbi5kaXNhYmxlZCA9ICFjYW5TbGlkZUJhY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNsaWRlcihcbiAgICBuZXh0QnV0dG9uLFxuICAgIGJhY2tCdXR0b24sXG4gICAgc2xpZGVyRWxtLFxuICAgIGNhcmRDb3VudCxcbiAgICBjYXJkc1BlclNsaWRlLFxuICAgIGlzR3JpZFxuKSB7XG4gICAgY29uc3QgbWluU2xpZGUgPSAwO1xuICAgIGxldCBtYXhTbGlkZSA9IGNhcmRDb3VudCAvIGNhcmRzUGVyU2xpZGU7XG5cbiAgICBsZXQgY3VyclNsaWRlID0gMDtcblxuICAgIGxldCBjYWxjZWRXaWR0aCA9IDEwMCAqIG1heFNsaWRlO1xuICAgIHNsaWRlckVsbS5zdHlsZS53aWR0aCA9IGAke2NhbGNlZFdpZHRofSVgO1xuICAgIGlmIChpc0dyaWQpIHtcbiAgICAgICAgc2xpZGVyRWxtLnN0eWxlLmdyaWRBdXRvQ29sdW1ucyA9IGAke2NhbGNlZFdpZHRoIC8gY2FyZENvdW50fSVgO1xuICAgIH1cbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY3VyclNsaWRlIDwgbWF4U2xpZGUgLSAxKSB7XG4gICAgICAgICAgICBjdXJyU2xpZGUgKz0gMTtcbiAgICAgICAgICAgIHNsaWRlckVsbS5zdHlsZS5yaWdodCA9IGAke2N1cnJTbGlkZSAqIDEwMH0lYDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVCdXR0b25zKG5leHRCdXR0b24sIGJhY2tCdXR0b24sIGN1cnJTbGlkZSwgbWF4U2xpZGUsIG1pblNsaWRlKTtcbiAgICB9KTtcbiAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY3VyclNsaWRlID4gbWluU2xpZGUpIHtcbiAgICAgICAgICAgIGN1cnJTbGlkZSAtPSAxO1xuICAgICAgICAgICAgc2xpZGVyRWxtLnN0eWxlLnJpZ2h0ID0gYCR7Y3VyclNsaWRlICogMTAwfSVgO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJ1dHRvbnMobmV4dEJ1dHRvbiwgYmFja0J1dHRvbiwgY3VyclNsaWRlLCBtYXhTbGlkZSwgbWluU2xpZGUpO1xuICAgIH0pO1xuXG4gICAgdXBkYXRlQnV0dG9ucyhuZXh0QnV0dG9uLCBiYWNrQnV0dG9uLCBjdXJyU2xpZGUsIG1heFNsaWRlLCBtaW5TbGlkZSk7XG5cbiAgICBjb25zdCBjaGFuZ2VDUFMgPSAoY2FyZHNQZXJTKSA9PiB7XG4gICAgICAgIG1heFNsaWRlID0gY2FyZENvdW50IC8gY2FyZHNQZXJTO1xuICAgICAgICBjYWxjZWRXaWR0aCA9IDEwMCAqIG1heFNsaWRlO1xuICAgICAgICBzbGlkZXJFbG0uc3R5bGUud2lkdGggPSBgJHtjYWxjZWRXaWR0aH0lYDtcbiAgICAgICAgaWYgKGlzR3JpZCkge1xuICAgICAgICAgICAgc2xpZGVyRWxtLnN0eWxlLmdyaWRBdXRvQ29sdW1ucyA9IGAke2NhbGNlZFdpZHRoIC8gY2FyZENvdW50fSVgO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJ1dHRvbnMobmV4dEJ1dHRvbiwgYmFja0J1dHRvbiwgY3VyclNsaWRlLCBtYXhTbGlkZSwgbWluU2xpZGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDdXJyU2xpZGUgPSAoKSA9PiBjdXJyU2xpZGU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VDUFMsXG4gICAgICAgIGdldEN1cnJTbGlkZSxcbiAgICB9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXByaW1hcnk6ICM1MTk4NzJmZjtcbiAgICAtLXByaW1hcnktbGlnaHRlcjogIzA5YmM4YWZmO1xuICAgIC0tc2Vjb25kYXJ5OiAjMTE4YWIyZmY7XG5cbiAgICAtLW5ldXRyYWwtZGFyazogIzJiMzAzYWZmO1xuICAgIC0tbmV1dHJhbC1taWQ6IHJnYigxMjcsIDEzMSwgMTM2KTtcbiAgICAtLW5ldXRyYWwtbGlnaHQ6ICNlYmViZWJmZjtcblxuICAgIC0tc2VtYW50aWMtYmFkOiByZ2IoMjA3LCA3OCwgMTAwKTtcbiAgICAtLXNlbWFudGljLWdvb2Q6ICMzN0ZGOEJmZjsgICBcbn1cblxuaHRtbCB7IFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWxpZ2h0KTtcbn1cblxuYm9keSB7IFxuICAgIGhlaWdodDogMTAwJTtcbn1cblxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmJ1dHRvbiwgaW5wdXQsIGxhYmVsIHtcbiAgICBib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyBcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGlucHV0OmFjdGl2ZSwgbGFiZWw6YWN0aXZle1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuOndoZXJlKHRleHRhcmVhKSxcbjp3aGVyZShpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwidXJsXCJdKXtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZTogbm9uZTtcbn0gXG5cbi8qIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZmFkZSk7XG4gICAgY29sb3Itc2NoZW1lOiB2YXIoLS1wcmltYXJ5LWZhZGUpO1xufSAqL1xuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuc3ZnIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBmaWxsOiB2YXIoLS1uZXV0cmFsLWxpZ2h0KTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBBY3R1YWwgY3VzdG9tIHN0eWxpbmcgdGhpbmdzIGJlbG93ICovIFxuaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG59XG5cbi8qIGhlYWRlciBzdHVmZiAqLyBcbmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5kYXktY2hhbmdlciB7XG4gICAgLS1kYXktZW50cnktd2lkdGg6IDE4MHB4OyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiB2YXIoLS1kYXktZW50cnktd2lkdGgpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kYXktY2hhbmdlciAuc2xpZGVyIHtcbiAgICB3aWR0aDogMzAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uZGF5LWNoYW5nZXIgLnNsaWRlciBzcGFuIHtcbiAgICB3aWR0aDogdmFyKC0tZGF5LWVudHJ5LXdpZHRoKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmhlYWRlciAuZGF5LWNoYW5nZXIgLmFycm93IHtcbiAgICB0b3A6IDglO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogMCAzMHB4O1xufVxuXG4udG9kYXlzLXN0YXRzIHtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLnRvZGF5cy1zdGF0cyAuY29uZGl0aW9uLWljb24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLnNlYXJjaC1ob2xkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4jc2VhcmNoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuI3NlYXJjaDppbnZhbGlkIHtcbiAgICBib3JkZXI6IHZhcigtLXNlbWFudGljLWJhZCk7XG59XG5cbi5zZWFyY2gtaG9sZGVyIC5lcnJvciB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6IHZhcigtLXNlbWFudGljLWJhZCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTE2cHg7XG59XG5cblxuLyogTWFpbiBzZWN0aW9uICovXG5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xufVxuXG4uY2Fyb3VzZWwge1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2xpZGVyLWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hcnJvdzpkaXNhYmxlZCBzdmcge1xuICAgIGZpbGw6IHZhcigtLW5ldXRyYWwtbWlkKTtcbn1cblxuLmxlZnQuYXJyb3cge1xuICAgIGxlZnQ6IC0yMnB4O1xuICAgIHRvcDogNDAlO1xufVxuLnJpZ2h0LmFycm93IHtcbiAgICByaWdodDogLTIycHg7XG4gICAgdG9wOiA0MCVcbn1cblxuLnNsaWRlci1ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXG4gICAgLyogd2lkdGg6IDIwMCU7XG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGNhbGMoMjAwJSAvIDEyKTsgKi9cblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGxpbmVhcjtcbn1cblxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MCUgYXV0byBhdXRvO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAxMnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXJkIC50ZW1wLWJhciB7XG4gICAgYWxpZ24tc2VsZjogc2VsZi1lbmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLS10b3AtcmFkaXVzOiAxNnB4OyBcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tdG9wLXJhZGl1cyk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tdG9wLXJhZGl1cyk7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG59XG5cbi5jYXJkIC5jb25kaXRpb24taWNvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBhbGlnbi1zZWxmOnNlbGYtc3RhcnQ7XG59XG5cbi5jb25kaXRpb24taWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC1kYXJrKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwcHggLTVweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixzQkFBc0I7O0lBRXRCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsMEJBQTBCOztJQUUxQixpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYzs7SUFFZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSx1Q0FBdUM7QUFDdkM7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7O0lBRWxCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7OztBQUdBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCOztJQUVoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTs7SUFFYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCOztJQUV0Qjt5Q0FDcUM7O0lBRXJDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLHlDQUF5Qzs7SUFFekMsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjNTE5ODcyZmY7XFxuICAgIC0tcHJpbWFyeS1saWdodGVyOiAjMDliYzhhZmY7XFxuICAgIC0tc2Vjb25kYXJ5OiAjMTE4YWIyZmY7XFxuXFxuICAgIC0tbmV1dHJhbC1kYXJrOiAjMmIzMDNhZmY7XFxuICAgIC0tbmV1dHJhbC1taWQ6IHJnYigxMjcsIDEzMSwgMTM2KTtcXG4gICAgLS1uZXV0cmFsLWxpZ2h0OiAjZWJlYmViZmY7XFxuXFxuICAgIC0tc2VtYW50aWMtYmFkOiByZ2IoMjA3LCA3OCwgMTAwKTtcXG4gICAgLS1zZW1hbnRpYy1nb29kOiAjMzdGRjhCZmY7ICAgXFxufVxcblxcbmh0bWwgeyBcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbmV1dHJhbC1saWdodCk7XFxufVxcblxcbmJvZHkgeyBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24sIGlucHV0LCBsYWJlbCB7XFxuICAgIGJveC1zaXppbmc6Y29udGVudC1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IFxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b246YWN0aXZlLCBpbnB1dDphY3RpdmUsIGxhYmVsOmFjdGl2ZXtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG46d2hlcmUodGV4dGFyZWEpLFxcbjp3aGVyZShpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXSl7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufSBcXG5cXG4vKiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1mYWRlKTtcXG4gICAgY29sb3Itc2NoZW1lOiB2YXIoLS1wcmltYXJ5LWZhZGUpO1xcbn0gKi9cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnN2ZyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmaWxsOiB2YXIoLS1uZXV0cmFsLWxpZ2h0KTtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBBY3R1YWwgY3VzdG9tIHN0eWxpbmcgdGhpbmdzIGJlbG93ICovIFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG4vKiBoZWFkZXIgc3R1ZmYgKi8gXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIHBhZGRpbmc6IDE1cHggNDBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZGF5LWNoYW5nZXIge1xcbiAgICAtLWRheS1lbnRyeS13aWR0aDogMTgwcHg7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiB2YXIoLS1kYXktZW50cnktd2lkdGgpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRheS1jaGFuZ2VyIC5zbGlkZXIge1xcbiAgICB3aWR0aDogMzAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLmRheS1jaGFuZ2VyIC5zbGlkZXIgc3BhbiB7XFxuICAgIHdpZHRoOiB2YXIoLS1kYXktZW50cnktd2lkdGgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5oZWFkZXIgLmRheS1jaGFuZ2VyIC5hcnJvdyB7XFxuICAgIHRvcDogOCU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBtYXJnaW46IDAgMzBweDtcXG59XFxuXFxuLnRvZGF5cy1zdGF0cyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi50b2RheXMtc3RhdHMgLmNvbmRpdGlvbi1pY29uIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnNlYXJjaC1ob2xkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNzZWFyY2g6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogdmFyKC0tc2VtYW50aWMtYmFkKTtcXG59XFxuXFxuLnNlYXJjaC1ob2xkZXIgLmVycm9yIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zZW1hbnRpYy1iYWQpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTE2cHg7XFxufVxcblxcblxcbi8qIE1haW4gc2VjdGlvbiAqL1xcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gICAgd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNsaWRlci1mcmFtZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uYXJyb3c6ZGlzYWJsZWQgc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tbmV1dHJhbC1taWQpO1xcbn1cXG5cXG4ubGVmdC5hcnJvdyB7XFxuICAgIGxlZnQ6IC0yMnB4O1xcbiAgICB0b3A6IDQwJTtcXG59XFxuLnJpZ2h0LmFycm93IHtcXG4gICAgcmlnaHQ6IC0yMnB4O1xcbiAgICB0b3A6IDQwJVxcbn1cXG5cXG4uc2xpZGVyLWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFxuICAgIC8qIHdpZHRoOiAyMDAlO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogY2FsYygyMDAlIC8gMTIpOyAqL1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzIGxpbmVhcjtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSBhdXRvIGF1dG87XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIDEycHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jYXJkIC50ZW1wLWJhciB7XFxuICAgIGFsaWduLXNlbGY6IHNlbGYtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIC0tdG9wLXJhZGl1czogMTZweDsgXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS10b3AtcmFkaXVzKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tdG9wLXJhZGl1cyk7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiAyMCU7XFxufVxcblxcbi5jYXJkIC5jb25kaXRpb24taWNvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLXNlbGY6c2VsZi1zdGFydDtcXG59XFxuXFxuLmNvbmRpdGlvbi1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvYmplY3QtcG9zaXRpb246IDBweCAtNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gRG9tIG1hbmlwdWxhdGlvbiBcbmZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yLCBwYXJlbnQ9ZG9jdW1lbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yLCBwYXJlbnQ9ZG9jdW1lbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRTZXBhcmF0b3Ioc3RhcnQsIHNlbGVjdG9yKXtcbiAgICBjb25zdCBuZXh0SGFzaCA9IHNlbGVjdG9yLmluZGV4T2YoJyMnLCBzdGFydCk7XG4gICAgY29uc3QgbmV4dERvdCA9IHNlbGVjdG9yLmluZGV4T2YoJy4nLCBzdGFydCk7XG5cbiAgICBpZiAobmV4dEhhc2ggPT09IC0xKXtcbiAgICAgICAgcmV0dXJuIG5leHREb3Q7XG4gICAgfSBlbHNlIGlmIChuZXh0RG90ID09PSAtMSl7XG4gICAgICAgIHJldHVybiBuZXh0SGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIChuZXh0SGFzaCA+IG5leHREb3QpID8gbmV4dERvdCA6IG5leHRIYXNoO1xufVxuXG5mdW5jdGlvbiBtYWtlKHNlbGVjdG9yLCBwYXJlbnQpe1xuICAgIGxldCBsYXN0SW5kID0gZ2V0TmV4dFNlcGFyYXRvcigwLCBzZWxlY3Rvcik7XG4gICAgXG4gICAgY29uc3QgY29ycmVjdGVkTGFzdEluZCA9IChsYXN0SW5kID4gLTEpID8gbGFzdEluZCA6IHNlbGVjdG9yLmxlbmd0aDtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHNlbGVjdG9yLnNsaWNlKDAsIGNvcnJlY3RlZExhc3RJbmQpO1xuICAgIGNvbnN0IHR5cGUgPSAodHlwZU5hbWUubGVuZ3RoID09PSAwKSA/ICdkaXYnIDogdHlwZU5hbWU7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgbGV0IGlkO1xuICAgIHdoaWxlIChsYXN0SW5kID4gLTEpe1xuICAgICAgICBjb25zdCBpbmQgPSBnZXROZXh0U2VwYXJhdG9yKGxhc3RJbmQrMSwgc2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjb3JyZWN0ZWRJbmQgPSAoaW5kID4gLTEpID8gaW5kIDogc2VsZWN0b3IubGVuZ3RoO1xuICAgICAgICBjb25zdCBzdWJTdHIgPSBzZWxlY3Rvci5zbGljZShsYXN0SW5kKzEsIGNvcnJlY3RlZEluZCk7XG5cbiAgICAgICAgaWYgKHN1YlN0ci5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcignVXNhZ2UgZXJyb3I6IFRyaWVkIHRvIHVzZSB0d28gc3ltYm9scyBmb3IgY2xhc3MgYW5kL29yIGlkIGluIGEgcm93LicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN5bSA9IHNlbGVjdG9yLmF0KGxhc3RJbmQpO1xuICAgICAgICBpZiAoc3ltID09PSAnLicpe1xuICAgICAgICAgICAgY2xhc3Nlcy51bnNoaWZ0KHN1YlN0cik7XG4gICAgICAgIH0gZWxzZSBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSBzdWJTdHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFwiQXJndW1lbnQgZXJyb3I6IGVsZW1lbnRzIGNhbid0IGhhdmUgbXVsdGlwbGUgaWRzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEluZCA9IGluZDtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGNvbnN0IGNsYXp6IG9mIGNsYXNzZXMpe1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhenopO1xuICAgIH1cbiAgICBpZiAoaWQpIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuYXBwZW5kKG5ld0VsZW1lbnQpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIFxufVxuXG5mdW5jdGlvbiBpbnNlcnRBZnRlcihyZWZlcmVuY2VOb2RlLCBuZXdOb2RlKSB7XG4gICAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcbn1cblxuXG4vLyBleHBvcnQgc3RhdGVtZW50XG5leHBvcnRzLm1ha2UgPSBtYWtlO1xuZXhwb3J0cy5xdWVyeSA9IHF1ZXJ5O1xuZXhwb3J0cy5xdWVyeUFsbCA9IHF1ZXJ5QWxsO1xuZXhwb3J0cy5pbnNlcnRBZnRlciA9IGluc2VydEFmdGVyOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuLzExMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMTEzLnBuZ1wiLFxuXHRcIi4vMTE2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8xMTYucG5nXCIsXG5cdFwiLi8xMTkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzExOS5wbmdcIixcblx0XCIuLzEyMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMTIyLnBuZ1wiLFxuXHRcIi4vMTQzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8xNDMucG5nXCIsXG5cdFwiLi8xNzYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzE3Ni5wbmdcIixcblx0XCIuLzE3OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMTc5LnBuZ1wiLFxuXHRcIi4vMTgyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8xODIucG5nXCIsXG5cdFwiLi8xODUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzE4NS5wbmdcIixcblx0XCIuLzIwMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMjAwLnBuZ1wiLFxuXHRcIi4vMjI3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8yMjcucG5nXCIsXG5cdFwiLi8yMzAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzIzMC5wbmdcIixcblx0XCIuLzI0OC5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMjQ4LnBuZ1wiLFxuXHRcIi4vMjYwLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8yNjAucG5nXCIsXG5cdFwiLi8yNjMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzI2My5wbmdcIixcblx0XCIuLzI2Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMjY2LnBuZ1wiLFxuXHRcIi4vMjgxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8yODEucG5nXCIsXG5cdFwiLi8yODQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzI4NC5wbmdcIixcblx0XCIuLzI5My5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMjkzLnBuZ1wiLFxuXHRcIi4vMjk2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8yOTYucG5nXCIsXG5cdFwiLi8yOTkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzI5OS5wbmdcIixcblx0XCIuLzMwMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzAyLnBuZ1wiLFxuXHRcIi4vMzA1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zMDUucG5nXCIsXG5cdFwiLi8zMDgucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzMwOC5wbmdcIixcblx0XCIuLzMxMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzExLnBuZ1wiLFxuXHRcIi4vMzE0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zMTQucG5nXCIsXG5cdFwiLi8zMTcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzMxNy5wbmdcIixcblx0XCIuLzMyMC5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzIwLnBuZ1wiLFxuXHRcIi4vMzIzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zMjMucG5nXCIsXG5cdFwiLi8zMjYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzMyNi5wbmdcIixcblx0XCIuLzMyOS5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzI5LnBuZ1wiLFxuXHRcIi4vMzMyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zMzIucG5nXCIsXG5cdFwiLi8zMzUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzMzNS5wbmdcIixcblx0XCIuLzMzOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzM4LnBuZ1wiLFxuXHRcIi4vMzUwLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zNTAucG5nXCIsXG5cdFwiLi8zNTMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzM1My5wbmdcIixcblx0XCIuLzM1Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzU2LnBuZ1wiLFxuXHRcIi4vMzU5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zNTkucG5nXCIsXG5cdFwiLi8zNjIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzM2Mi5wbmdcIixcblx0XCIuLzM2NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzY1LnBuZ1wiLFxuXHRcIi4vMzY4LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zNjgucG5nXCIsXG5cdFwiLi8zNzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzM3MS5wbmdcIixcblx0XCIuLzM3NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzc0LnBuZ1wiLFxuXHRcIi4vMzc3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zNzcucG5nXCIsXG5cdFwiLi8zODYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzM4Ni5wbmdcIixcblx0XCIuLzM4OS5wbmdcIjogXCIuL3NyYy9hc3NldHMvd2VhdGhlci82NHg2NC9kYXkvMzg5LnBuZ1wiLFxuXHRcIi4vMzkyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy93ZWF0aGVyLzY0eDY0L2RheS8zOTIucG5nXCIsXG5cdFwiLi8zOTUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5LzM5NS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5IHN5bmMgcmVjdXJzaXZlIFxcXFwucG5nJFwiOyIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5tanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICBjYXNlIFwieHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgXCJ4eHh4eFwiOlxuICAgICAgY2FzZSBcInh4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgZGF0ZS5nZXREYXRlKCksXG4gICAgICBkYXRlLmdldEhvdXJzKCksXG4gICAgICBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufVxuIiwiY29uc3QgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gW1wiRFwiLCBcIkREXCJdO1xuY29uc3QgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gXCJZWVlZXCIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVc2UgXFxgeXl5eVxcYCBpbnN0ZWFkIG9mIFxcYFlZWVlcXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgLFxuICAgICk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVzZSBcXGB5eVxcYCBpbnN0ZWFkIG9mIFxcYFlZXFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYCxcbiAgICApO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSBcIkRcIikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVzZSBcXGBkXFxgIGluc3RlYWQgb2YgXFxgRFxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGAsXG4gICAgKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gXCJERFwiKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICBgVXNlIFxcYGRkXFxgIGluc3RlYWQgb2YgXFxgRERcXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgLFxuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCIvKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZShkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnRydXN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApXG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC1cbiAgICBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7XG4gIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sXG4gIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbixcbiAgdGhyb3dQcm90ZWN0ZWRFcnJvcixcbn0gZnJvbSBcIi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzXCI7XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyKVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcikpLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3MgdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuXG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlLFxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4gXCInXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBmb3JtYXRTdHIsIFN0cmluZyhkYXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBmb3JtYXRTdHIsIFN0cmluZyhkYXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlcihcbiAgICAgICAgICBvcmlnaW5hbERhdGUsXG4gICAgICAgICAgc3Vic3RyaW5nLFxuICAgICAgICAgIGxvY2FsZS5sb2NhbGl6ZSxcbiAgICAgICAgICBmb3JtYXR0ZXJPcHRpb25zLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICBjb25zdCBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZlllYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBkYXkgb2YgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGUsIHN0YXJ0T2ZZZWFyKF9kYXRlKSk7XG4gIGNvbnN0IGRheU9mWWVhciA9IGRpZmYgKyAxO1xuICByZXR1cm4gZGF5T2ZZZWFyO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheU9mWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9XG4gICAgc3RhcnRPZklTT1dlZWsoX2RhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID1cbiAgICBzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC1cbiAgICBzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCBmaXJzdFdlZWtPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2Vla1llYXI7XG4iLCIvKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZTtcbiIsImltcG9ydCB7IGlzRGF0ZSB9IGZyb20gXCIuL2lzRGF0ZS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIGlmICghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihfZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgY29uc3QgbWF0Y2hQYXR0ZXJuID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VQYXR0ZXJucyA9XG4gICAgICAod2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcblxuICAgIGNvbnN0IGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucylcbiAgICAgID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpXG4gICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvbG9jYWxpemUubWpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2gubWpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59O1xuIiwiY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSZWxhdGl2ZSA9ICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpID0+XG4gIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgcGFyc2VJU099IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICBjb25zdCBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucz8uYWRkaXRpb25hbERpZ2l0cyA/PyAyO1xuICBjb25zdCBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG5cbiAgbGV0IGRhdGU7XG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgY29uc3QgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgbGV0IHRpbWUgPSAwO1xuICBsZXQgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8gSlMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKFxuICAgICAgZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCksXG4gICAgKTtcbiAgICByZXN1bHQuc2V0SG91cnMoXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLFxuICAgICAgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cblxuY29uc3QgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvLFxufTtcblxuY29uc3QgZGF0ZVJlZ2V4ID1cbiAgL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG5jb25zdCB0aW1lUmVnZXggPVxuICAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG5jb25zdCB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICBjb25zdCBkYXRlU3RyaW5ncyA9IHt9O1xuICBjb25zdCBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICBsZXQgdGltZVN0cmluZztcblxuICAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKFxuICAgICAgICBkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCxcbiAgICAgICAgZGF0ZVN0cmluZy5sZW5ndGgsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgY29uc3QgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgXCJcIik7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICBcIl4oPzooXFxcXGR7NH18WystXVxcXFxke1wiICtcbiAgICAgICg0ICsgYWRkaXRpb25hbERpZ2l0cykgK1xuICAgICAgXCJ9KXwoXFxcXGR7Mn18WystXVxcXFxke1wiICtcbiAgICAgICgyICsgYWRkaXRpb25hbERpZ2l0cykgK1xuICAgICAgXCJ9KSQpXCIsXG4gICk7XG5cbiAgY29uc3QgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHsgeWVhcjogTmFOLCByZXN0RGF0ZVN0cmluZzogXCJcIiB9O1xuXG4gIGNvbnN0IHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIGNvbnN0IGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aCksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcblxuICBjb25zdCBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcblxuICBjb25zdCBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIGNvbnN0IG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICBjb25zdCBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgY29uc3Qgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICBjb25zdCBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGlmIChcbiAgICAgICF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHxcbiAgICAgICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICBjb25zdCBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICBjb25zdCBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICBjb25zdCBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIGNvbnN0IHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoXCIsXCIsIFwiLlwiKSkpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSBcIlpcIikgcmV0dXJuIDA7XG5cbiAgY29uc3QgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG5cbiAgY29uc3Qgc2lnbiA9IGNhcHR1cmVzWzFdID09PSBcIitcIiA/IC0xIDogMTtcbiAgY29uc3QgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSAoY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICBjb25zdCBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuY29uc3QgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiAoXG4gICAgbW9udGggPj0gMCAmJlxuICAgIG1vbnRoIDw9IDExICYmXG4gICAgZGF0ZSA+PSAxICYmXG4gICAgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBzZWNvbmRzID49IDAgJiZcbiAgICBzZWNvbmRzIDwgNjAgJiZcbiAgICBtaW51dGVzID49IDAgJiZcbiAgICBtaW51dGVzIDwgNjAgJiZcbiAgICBob3VycyA+PSAwICYmXG4gICAgaG91cnMgPCAyNVxuICApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgcGFyc2VJU087XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB5ZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gIGNvbnN0IGZpcnN0V2VlayA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vlay5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IF9kYXRlID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgbWFrZSwgcXVlcnkgfSBmcm9tICdqZWZmLXF1ZXJ5JztcbmltcG9ydCBjcmVhdGVTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuXG5yZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL3dlYXRoZXIvNjR4NjQvZGF5JywgdHJ1ZSwgL1xcLnBuZyQvKTtcblxuLy8gV2VhdGhlcmFwaSBrZXlcbmNvbnN0IEFQSV9LRVkgPSAnYWNiNzQ1ZTc1YmM3NGEzNWJkNjEyMzUwMjMyMzEyJztcblxubGV0IHdlYXRoZXJEYXRhID0gbnVsbDtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoY2l0eSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtjaXR5fSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2AsXG4gICAgICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuXG4gICAgICAgIGNvbnN0IGRhaWx5RGF0YSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRheURhdGEgPSBkYXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRlIH0gPSBkYXlEYXRhO1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgICAgICBjb25zdCBhdmdUZW1wRiA9IGRheURhdGEuZGF5LmF2Z3RlbXBfZjtcbiAgICAgICAgICAgIGNvbnN0IHJhaW5DaGFuY2UgPSBkYXlEYXRhLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgICAgICAgICAgIGNvbnN0IHNub3dDaGFuY2UgPSBkYXlEYXRhLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdztcblxuICAgICAgICAgICAgY29uc3Qgb2dJY29uTGluayA9IGRheURhdGEuZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgICAgICAgY29uc3QgaWNvbkxpbmsgPSBvZ0ljb25MaW5rLnJlcGxhY2UoJy8vY2RuLndlYXRoZXJhcGkuY29tJywgJy4nKTsgLy8gSSBqdXN0IHB1dCB0aGUgc2l0ZXMnIGltYWdlcyBpbiB0aGUgZGlzdCBmb2xkZXIgbWFudWFsbHkgc28gaSBkb250IGhhdmUgdG8gaGFzc2xlIHdpdGggaW1wb3J0aW5nIHRoZSBkb3plbnMgb2YgaW1hZ2VzIHNvbWVob3dcbiAgICAgICAgICAgIGNvbnN0IGhvdXJseURhdGEgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF5RGF0YS5ob3VyLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91ckRhdGUgPSBkYXlEYXRhLmhvdXJbal0udGltZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VJU08oaG91ckRhdGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2dIb3VySWNvbkxpbmsgPSBkYXlEYXRhLmhvdXJbal0uY29uZGl0aW9uLmljb247XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkhvdXJMaW5rID0gb2dIb3VySWNvbkxpbmsucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgJy8vY2RuLndlYXRoZXJhcGkuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgJy4nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICB0aW1lOiBmb3JtYXQocGFyc2VkRGF0ZSwgJ2g6bW0gYScpLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wRjogZGF5RGF0YS5ob3VyW2pdLnRlbXBfZixcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBkYXlEYXRhLmhvdXJbal0uY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGljb25MaW5rOiBpY29uSG91ckxpbmssXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBob3VybHlEYXRhLnB1c2goaG91ckRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYWlseURhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgICBhdmdUZW1wRixcbiAgICAgICAgICAgICAgICBjb25kaXRpb24sXG4gICAgICAgICAgICAgICAgcmFpbkNoYW5jZSxcbiAgICAgICAgICAgICAgICBzbm93Q2hhbmNlLFxuICAgICAgICAgICAgICAgIGhvdXJseURhdGEsXG4gICAgICAgICAgICAgICAgaWNvbkxpbmssXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhaWx5RGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIGRhaWx5RGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnVHlwZUVycm9yJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoZGVncmVlcywgdGltZSwgY29uZGl0aW9uLCBiYXJIZWlnaHQsIGljb25TcmMpIHtcbiAgICBjb25zdCBjYXJkID0gbWFrZSgnLmNhcmQnKTtcbiAgICBjb25zdCB0ZW1wQmFyID0gbWFrZSgnLnRlbXAtYmFyJywgY2FyZCk7XG4gICAgdGVtcEJhci5zdHlsZS5oZWlnaHQgPSBgJHtiYXJIZWlnaHR9JWA7XG5cbiAgICBjb25zdCB0ZW1wRGlzcCA9IG1ha2UoJy50ZW1wLWRpc3BsYXknLCB0ZW1wQmFyKTtcbiAgICB0ZW1wRGlzcC50ZXh0Q29udGVudCA9IGAke2RlZ3JlZXN9wrBgO1xuICAgIGNvbnN0IHRpbWVEaXNwID0gbWFrZSgnLnRpbWUnLCBjYXJkKTtcbiAgICB0aW1lRGlzcC50ZXh0Q29udGVudCA9IHRpbWU7XG5cbiAgICBjb25zdCBjb25kSWNvbiA9IG1ha2UoJ2ltZy5jb25kaXRpb24taWNvbicsIGNhcmQpO1xuICAgIGNvbmRJY29uLnNyYyA9IGljb25TcmM7XG4gICAgY29uZEljb24uYWx0ID0gY29uZGl0aW9uO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIG1ha2VIb3VyU2xpZGVyKGNhcmRDb3VudCwgY2FyZHNQZXJTbGlkZSkge1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSBxdWVyeSgnLmNhcm91c2VsIC5yaWdodC5hcnJvdycpO1xuICAgIGNvbnN0IGJhY2tCdXR0b24gPSBxdWVyeSgnLmNhcm91c2VsIC5sZWZ0LmFycm93Jyk7XG4gICAgY29uc3Qgc2xpZGVyRWxtID0gcXVlcnkoJy5jYXJvdXNlbCAuc2xpZGVyLWJvYXJkJyk7XG5cbiAgICBjcmVhdGVTbGlkZXIoXG4gICAgICAgIG5leHRCdXR0b24sXG4gICAgICAgIGJhY2tCdXR0b24sXG4gICAgICAgIHNsaWRlckVsbSxcbiAgICAgICAgY2FyZENvdW50LFxuICAgICAgICBjYXJkc1BlclNsaWRlLFxuICAgICAgICB0cnVlXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUhvdXJseURhdGEoZGF5SW5kKSB7XG4gICAgY29uc3Qgc2xpZGVyQm9hcmQgPSBxdWVyeSgnbWFpbiAuc2xpZGVyLWJvYXJkJyk7XG4gICAgc2xpZGVyQm9hcmQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBkYXkgPSB3ZWF0aGVyRGF0YVtkYXlJbmRdO1xuXG4gICAgY29uc3QgbWF4VGVtcCA9IGRheS5ob3VybHlEYXRhLnJlZHVjZShcbiAgICAgICAgKG1heCwgbmV4dFZhbCkgPT4gKG5leHRWYWwudGVtcEYgPiBtYXggPyBuZXh0VmFsLnRlbXBGIDogbWF4KSxcbiAgICAgICAgMFxuICAgICk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXkuaG91cmx5RGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBob3VyID0gZGF5LmhvdXJseURhdGFbaV07XG4gICAgICAgIGNvbnN0IGJhckhlaWdodCA9IChob3VyLnRlbXBGIC8gbWF4VGVtcCkgKiAxMDA7XG4gICAgICAgIGNvbnN0IG5ld0NhcmQgPSBjcmVhdGVDYXJkKFxuICAgICAgICAgICAgaG91ci50ZW1wRixcbiAgICAgICAgICAgIGhvdXIudGltZSxcbiAgICAgICAgICAgIGhvdXIuY29uZGl0aW9uLFxuICAgICAgICAgICAgYmFySGVpZ2h0LFxuICAgICAgICAgICAgaG91ci5pY29uTGlua1xuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhob3VyLmljb25MaW5rKTtcbiAgICAgICAgc2xpZGVyQm9hcmQuYXBwZW5kKG5ld0NhcmQpO1xuICAgIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBncmFkaWVudCBiYXNlZCBvbiBhIHZhbHVlXG5mdW5jdGlvbiB1cGRhdGVHcmFkaWVudCh2YWx1ZSkge1xuICAgIGNvbnN0IGNvbG9yID0gaW50ZXJwb2xhdGVDb2xvcih2YWx1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3Iuc3RhcnR9LCAke2NvbG9yLmVuZH0pYDtcbn1cblxuLy8gLS0tLSBDT0xPUiBDSEFOR0lORyBTVFVGRiAtLS0tIC8vXG4vLyBGdW5jdGlvbiB0byBpbnRlcnBvbGF0ZSBjb2xvciBiZXR3ZWVuIG9yYW5nZSBhbmQgYmx1ZVxuY29uc3Qgc3RhcnRIZXggPSAnIzA4NDE1Qyc7IC8vIEJsdWVcbmNvbnN0IGJhckJsdWUgPSAnIzM5OTNERCc7XG5cbmNvbnN0IGVuZEhleCA9ICcjRDY2ODUzJzsgLy8gT3JhbmdlXG5jb25zdCBiYXJPcmcgPSAnI0Y2QUY2NSc7XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUNvbG9yKHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhcnRDb2xvciA9IGhleFRvUmdiKHN0YXJ0SGV4KTtcbiAgICBjb25zdCBlbmRDb2xvciA9IGhleFRvUmdiKGVuZEhleCk7XG5cbiAgICBjb25zdCByID0gTWF0aC5yb3VuZChcbiAgICAgICAgc3RhcnRDb2xvci5yICsgKGVuZENvbG9yLnIgLSBzdGFydENvbG9yLnIpICogKHZhbHVlIC8gMTAwKVxuICAgICk7XG4gICAgY29uc3QgZyA9IE1hdGgucm91bmQoXG4gICAgICAgIHN0YXJ0Q29sb3IuZyArIChlbmRDb2xvci5nIC0gc3RhcnRDb2xvci5nKSAqICh2YWx1ZSAvIDEwMClcbiAgICApO1xuICAgIGNvbnN0IGIgPSBNYXRoLnJvdW5kKFxuICAgICAgICBzdGFydENvbG9yLmIgKyAoZW5kQ29sb3IuYiAtIHN0YXJ0Q29sb3IuYikgKiAodmFsdWUgLyAxMDApXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiByZ2JUb0hleChzdGFydENvbG9yLnIsIHN0YXJ0Q29sb3IuZywgc3RhcnRDb2xvci5iKSxcbiAgICAgICAgZW5kOiByZ2JUb0hleChyLCBnLCBiKSxcbiAgICB9O1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBSR0IgdG8gaGV4XG5mdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiKSB7XG4gICAgY29uc3QgdG9IZXggPSAoYykgPT4gYDAke2MudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xuICAgIHJldHVybiBgIyR7dG9IZXgocil9JHt0b0hleChnKX0ke3RvSGV4KGIpfWA7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGhleCB0byBSR0JcbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIGNvbnN0IGJpZ2ludCA9IHBhcnNlSW50KGhleC5zbGljZSgxKSwgMTYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHI6IChiaWdpbnQgPj4gMTYpICYgMjU1LFxuICAgICAgICBnOiAoYmlnaW50ID4+IDgpICYgMjU1LFxuICAgICAgICBiOiBiaWdpbnQgJiAyNTUsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZERheURhdGEoZGF5SW5kKSB7XG4gICAgY29uc3QgY3VyckRheSA9IHdlYXRoZXJEYXRhW2RheUluZF07XG5cbiAgICBjb25zdCBpY29uRWxlbWVudCA9IHF1ZXJ5KCcudG9kYXlzLXN0YXRzIC5jb25kaXRpb24taWNvbicpO1xuICAgIGNvbnN0IGltYWdlID0gY3VyckRheS5pY29uTGluaztcbiAgICBpY29uRWxlbWVudC5zcmMgPSBpbWFnZTtcblxuICAgIGNvbnN0IHRlbXBEaXNwbGF5RWxlbWVudCA9IHF1ZXJ5KCcudG9kYXlzLXN0YXRzIC50ZW1wLWRpc3BsYXknKTtcbiAgICB0ZW1wRGlzcGxheUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjdXJyRGF5LmF2Z1RlbXBGfcKwYDtcbiAgICB1cGRhdGVHcmFkaWVudChjdXJyRGF5LmF2Z1RlbXBGKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvblRleHRFbGVtZW50ID0gcXVlcnkoJy50b2RheXMtc3RhdHMgLmNvbmRpdGlvbi10ZXh0Jyk7XG4gICAgY29uZGl0aW9uVGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjdXJyRGF5LmNvbmRpdGlvbn0uYDtcblxuICAgIGNvbnN0IHJhaW5DaGFuY2VyRWxlbWVudCA9IHF1ZXJ5KCcudG9kYXlzLXN0YXRzIC5yYWluLWNoYW5jZXInKTtcbiAgICByYWluQ2hhbmNlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjdXJyRGF5LnJhaW5DaGFuY2V9JWA7XG5cbiAgICBjb25zdCBzbm93Q2hhbmNlckVsZW1lbnQgPSBxdWVyeSgnLnRvZGF5cy1zdGF0cyAuc25vdy1jaGFuY2VyJyk7XG4gICAgc25vd0NoYW5jZXJFbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y3VyckRheS5zbm93Q2hhbmNlfSVgO1xuXG4gICAgZGlzcGxheUhvdXJseURhdGEoZGF5SW5kKTtcbn1cblxubGV0IGN1cnJEYXlTbGlkZSA9IDA7XG5cbmZ1bmN0aW9uIG1ha2VEYXlTbGlkZXIoKSB7XG4gICAgY29uc3QgZGF5Q2hhbmdlckVsZW1lbnQgPSBxdWVyeSgnLmRheS1jaGFuZ2VyJyk7XG4gICAgY29uc3Qgc2xpZGVyRWxlbWVudCA9IHF1ZXJ5KCcuc2xpZGVyJywgZGF5Q2hhbmdlckVsZW1lbnQpO1xuICAgIGNvbnN0IGxlZnRBcnJvd0VsZW1lbnQgPSBxdWVyeSgnLmxlZnQuYXJyb3cnLCBkYXlDaGFuZ2VyRWxlbWVudCk7XG4gICAgY29uc3QgcmlnaHRBcnJvd0VsZW1lbnQgPSBxdWVyeSgnLnJpZ2h0LmFycm93JywgZGF5Q2hhbmdlckVsZW1lbnQpO1xuXG4gICAgY29uc3Qgc2xpZGVyID0gY3JlYXRlU2xpZGVyKFxuICAgICAgICByaWdodEFycm93RWxlbWVudCxcbiAgICAgICAgbGVmdEFycm93RWxlbWVudCxcbiAgICAgICAgc2xpZGVyRWxlbWVudCxcbiAgICAgICAgMyxcbiAgICAgICAgMSxcbiAgICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgY29uc3QgY2hhbmdlRGF5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyU2xpZGUgPSBzbGlkZXIuZ2V0Q3VyclNsaWRlKCk7XG4gICAgICAgIGxvYWREYXlEYXRhKGN1cnJTbGlkZSk7XG4gICAgICAgIGN1cnJEYXlTbGlkZSA9IGN1cnJTbGlkZTtcbiAgICB9O1xuXG4gICAgbGVmdEFycm93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZURheSk7XG4gICAgcmlnaHRBcnJvd0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VEYXkpO1xufVxuXG5mdW5jdGlvbiBjaXR5U2VhcmNoU2V0dXAoKSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBxdWVyeSgnI3NlYXJjaCcpO1xuICAgIGNvbnN0IHNlYXJjaEVycm9yID0gcXVlcnkoJyNzZWFyY2ggKyAuZXJyb3InKTtcblxuICAgIGxldCBsYXN0U2VhcmNoID0gJ0hlbGwnO1xuICAgIHNlYXJjaGVyLnZhbHVlID0gJ0hlbGwnO1xuICAgIHNlYXJjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGREYXRhID0gd2VhdGhlckRhdGE7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEgPSBhd2FpdCBsb2FkRGF0YShzZWFyY2hlci52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2VhdGhlckRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VhdGhlckRhdGEgPSBvbGREYXRhO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hlci52YWx1ZSA9IGxhc3RTZWFyY2g7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGVyLnNldEN1c3RvbVZhbGlkaXR5KCdObyBzdWNoIGNpdHkhJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVycm9yLnRleHRDb250ZW50ID0gJ05vIHN1Y2ggY2l0eSEnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGVyLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbG9hZERheURhdGEoY3VyckRheVNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNlYXJjaCA9IHNlYXJjaGVyLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxubG9hZERhdGEoJ0hlbGwnKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHdlYXRoZXJEYXRhID0gZGF0YTtcbiAgICAgICAgbWFrZURheVNsaWRlcigpO1xuICAgICAgICBtYWtlSG91clNsaWRlcigyNCwgMTIpO1xuICAgICAgICBjaXR5U2VhcmNoU2V0dXAoKTtcblxuICAgICAgICBsb2FkRGF5RGF0YSgwKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIl0sIm5hbWVzIjpbInVwZGF0ZUJ1dHRvbnMiLCJuZXh0QnV0dG9uIiwiYmFja0J1dHRvbiIsImN1cnJTbGlkZSIsIm1heFNsaWRlIiwibWluU2xpZGUiLCJjYW5TbGlkZUZvcndhcmQiLCJjYW5TbGlkZUJhY2siLCJkaXNhYmxlZCIsImNyZWF0ZVNsaWRlciIsInNsaWRlckVsbSIsImNhcmRDb3VudCIsImNhcmRzUGVyU2xpZGUiLCJpc0dyaWQiLCJjYWxjZWRXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJjb25jYXQiLCJncmlkQXV0b0NvbHVtbnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmlnaHQiLCJjaGFuZ2VDUFMiLCJjYXJkc1BlclMiLCJnZXRDdXJyU2xpZGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiZm9ybWF0IiwicGFyc2VJU08iLCJtYWtlIiwicXVlcnkiLCJyZXF1aXJlIiwiY29udGV4dCIsIkFQSV9LRVkiLCJ3ZWF0aGVyRGF0YSIsImxvYWREYXRhIiwiX3giLCJfbG9hZERhdGEiLCJfY2FsbGVlMiIsImNpdHkiLCJyZXNwb25zZSIsImRhdGEiLCJkYXlzIiwiZGFpbHlEYXRhIiwiZGF5RGF0YSIsImRhdGUiLCJjb25kaXRpb24iLCJhdmdUZW1wRiIsInJhaW5DaGFuY2UiLCJzbm93Q2hhbmNlIiwib2dJY29uTGluayIsImljb25MaW5rIiwiaG91cmx5RGF0YSIsImoiLCJob3VyRGF0ZSIsInBhcnNlZERhdGUiLCJvZ0hvdXJJY29uTGluayIsImljb25Ib3VyTGluayIsImhvdXJEYXRhIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZmV0Y2giLCJtb2RlIiwianNvbiIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJ0ZXh0IiwiYXZndGVtcF9mIiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJkYWlseV9jaGFuY2Vfb2Zfc25vdyIsImljb24iLCJyZXBsYWNlIiwiaG91ciIsInRpbWUiLCJ0ZW1wRiIsInRlbXBfZiIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImNyZWF0ZUNhcmQiLCJkZWdyZWVzIiwiYmFySGVpZ2h0IiwiaWNvblNyYyIsImNhcmQiLCJ0ZW1wQmFyIiwiaGVpZ2h0IiwidGVtcERpc3AiLCJ0ZXh0Q29udGVudCIsInRpbWVEaXNwIiwiY29uZEljb24iLCJzcmMiLCJhbHQiLCJtYWtlSG91clNsaWRlciIsImRpc3BsYXlIb3VybHlEYXRhIiwiZGF5SW5kIiwic2xpZGVyQm9hcmQiLCJtYXhUZW1wIiwicmVkdWNlIiwibWF4IiwibmV4dFZhbCIsIm5ld0NhcmQiLCJhcHBlbmQiLCJ1cGRhdGVHcmFkaWVudCIsImNvbG9yIiwiaW50ZXJwb2xhdGVDb2xvciIsImRvY3VtZW50IiwiYm9keSIsImJhY2tncm91bmQiLCJzdGFydCIsImVuZCIsInN0YXJ0SGV4IiwiYmFyQmx1ZSIsImVuZEhleCIsImJhck9yZyIsInN0YXJ0Q29sb3IiLCJoZXhUb1JnYiIsImVuZENvbG9yIiwiTWF0aCIsInJvdW5kIiwiYiIsInJnYlRvSGV4IiwidG9IZXgiLCJ0b1N0cmluZyIsImhleCIsImJpZ2ludCIsInBhcnNlSW50IiwibG9hZERheURhdGEiLCJjdXJyRGF5IiwiaWNvbkVsZW1lbnQiLCJpbWFnZSIsInRlbXBEaXNwbGF5RWxlbWVudCIsImNvbmRpdGlvblRleHRFbGVtZW50IiwicmFpbkNoYW5jZXJFbGVtZW50Iiwic25vd0NoYW5jZXJFbGVtZW50IiwiY3VyckRheVNsaWRlIiwibWFrZURheVNsaWRlciIsImRheUNoYW5nZXJFbGVtZW50Iiwic2xpZGVyRWxlbWVudCIsImxlZnRBcnJvd0VsZW1lbnQiLCJyaWdodEFycm93RWxlbWVudCIsInNsaWRlciIsImNoYW5nZURheSIsImNpdHlTZWFyY2hTZXR1cCIsInNlYXJjaGVyIiwic2VhcmNoRXJyb3IiLCJsYXN0U2VhcmNoIiwiX3JlZiIsIl9jYWxsZWUiLCJldmVudCIsIm9sZERhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0Iiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJfeDIiXSwic291cmNlUm9vdCI6IiJ9