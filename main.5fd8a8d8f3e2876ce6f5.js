/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/utils */ "./src/js/utils.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var choices_js_public_assets_styles_choices_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! choices.js/public/assets/styles/choices.min.css */ "./node_modules/choices.js/public/assets/styles/choices.min.css");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/ResponsiveSlider */ "./src/js/ResponsiveSlider.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var inputmask_lib_inputmask_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inputmask/lib/inputmask.js */ "./node_modules/inputmask/lib/inputmask.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

__webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");









swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.FreeMode, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.EffectCards, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Controller]);
document.addEventListener("DOMContentLoaded", function (event) {
  var header = document.querySelector('.header');
  new _js_header__WEBPACK_IMPORTED_MODULE_5__.RunHeader(header);
  var ResponsiveSwiper = /*#__PURE__*/function () {
    function ResponsiveSwiper(selector) {
      _classCallCheck(this, ResponsiveSwiper);
      this.swipersEnablesFlag = false;
      this.swiperClass = selector;
      this.swipers = [];
      this.init();
      window.addEventListener('resize', this.handleResize.bind(this));
    }
    return _createClass(ResponsiveSwiper, [{
      key: "init",
      value: function init() {
        // Проверяем ширину экрана
        if (window.innerWidth < 768) {
          this.enableSwipers();
        } else {
          this.destroySwipers();
        }
      }
    }, {
      key: "enableSwipers",
      value: function enableSwipers() {
        var _this = this;
        var swiperElements = document.querySelectorAll(this.swiperClass);
        swiperElements.forEach(function (element, index) {
          var nextEl = element.closest('.slider-cards-block').querySelector('.nav-next');
          var prevEl = element.closest('.slider-cards-block').querySelector('.nav-prev');
          var swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](element, {
            slidesPerView: 1,
            navigation: {
              nextEl: nextEl,
              prevEl: prevEl
            }
          });
          _this.swipers.push(swiper);
        });
        this.swipersEnablesFlag = true;
      }
    }, {
      key: "destroySwipers",
      value: function destroySwipers() {
        this.swipers.forEach(function (swiper) {
          return swiper.destroy(true, true);
        });
        this.swipers = [];
        this.swipersEnablesFlag = false;
      }
    }, {
      key: "handleResize",
      value: function handleResize() {
        // Уничтожаем или создаем Swiper при изменении размера окна
        if (window.innerWidth < 768 && this.swipers.length === 0 && !this.swipersEnablesFlag) {
          this.enableSwipers();
        } else if (window.innerWidth >= 768 && this.swipers.length > 0 && this.swipersEnablesFlag) {
          this.destroySwipers();
        }
      }
    }]);
  }(); // Инициализация класса для слайдеров с классом .slider-cards-block__slider
  var responsiveSwiper = new ResponsiveSwiper('.slider-cards-block__slider');
  function scrollToElementWithHeaderOffset(element, header) {
    var headerHeight = document.querySelector('header').offsetHeight; // Высота хедера
    var elementPosition = element.getBoundingClientRect().top; // Позиция элемента относительно верхней границы окна
    var offsetPosition = elementPosition - headerHeight; // Позиция с учетом высоты хедера

    // Прокручиваем страницу на нужное расстояние
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  var tabsBlock = document.querySelectorAll('[data-tabs]');
  if (tabsBlock.length) {
    tabsBlock.forEach(function (tabsBlock) {
      var btns = tabsBlock.querySelectorAll('[data-tab]');
      var blocks = tabsBlock.querySelectorAll('[data-tab-block]');
      var _iterator = _createForOfIteratorHelper(btns),
        _step;
      try {
        var _loop = function _loop() {
          var btn = _step.value;
          btn.addEventListener('click', function () {
            var id = parseInt(btn.getAttribute('data-tab'));
            var _iterator2 = _createForOfIteratorHelper(blocks),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var block = _step2.value;
                if (parseInt(block.getAttribute('data-tab-block')) === id) {
                  block.setAttribute('data-active', '');
                  scrollToElementWithHeaderOffset(block);
                } else {
                  block.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            btn.setAttribute('data-active', '');
            var _iterator3 = _createForOfIteratorHelper(btns),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var otherBtn = _step3.value;
                if (parseInt(otherBtn.getAttribute('data-tab')) !== id) {
                  otherBtn.removeAttribute('data-active');
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }
  var doProportionIcon = function doProportionIcon(icons) {
    var _iterator4 = _createForOfIteratorHelper(icons),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var icon = _step4.value;
        var widthAttr = icon.getAttribute('width');
        var widthReal = icon.clientWidth;
        var heightAttr = icon.getAttribute('height');
        var heightReal = widthReal / widthAttr * heightAttr;
        icon.style.height = "".concat(heightReal, "px");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  };
  var icons = document.querySelectorAll('.icon-pr');
  if (icons.length) {
    doProportionIcon(icons);
    window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(function () {
      doProportionIcon(icons);
    }, 300));
  }

  // faq-page
  var faqs = document.querySelectorAll('.faq-block');
  if (faqs.length) {
    var _iterator5 = _createForOfIteratorHelper(faqs),
      _step5;
    try {
      var _loop2 = function _loop2() {
        var accordeon = _step5.value;
        var button = accordeon.querySelector('.faq-block__question');
        var answer = accordeon.querySelector('.faq-block__answer');
        button.addEventListener('click', function (evt) {
          evt.stopImmediatePropagation();
          if (accordeon.classList.contains('faq-block--active')) {
            (0,_js_utils__WEBPACK_IMPORTED_MODULE_0__.slideUp)(answer, 300, function () {});
            accordeon.classList.remove('faq-block--active');
          } else {
            var _iterator6 = _createForOfIteratorHelper(faqs),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var otherAccordeon = _step6.value;
                if (otherAccordeon !== accordeon) {
                  otherAccordeon.classList.remove('faq-block--active');
                  var otherAnswer = otherAccordeon.querySelector('.faq-block__answer');
                  (0,_js_utils__WEBPACK_IMPORTED_MODULE_0__.slideUp)(otherAnswer, 300, function () {});
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            (0,_js_utils__WEBPACK_IMPORTED_MODULE_0__.slideDown)(answer, 300, function () {});
            accordeon.classList.add('faq-block--active');
          }
        });
      };
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  var formSelectEls = document.querySelectorAll('.form-select select');
  if (formSelectEls.length) {
    formSelectEls.forEach(function (formSelectEl) {
      new (choices_js__WEBPACK_IMPORTED_MODULE_3___default())(formSelectEl, {
        searchEnabled: false
      });
    });
  }
  new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.our-areas-list__content .swiper', {
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
      el: '.our-areas-list__pagination',
      type: 'bullets'
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 24
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 18
      },
      600: {
        spaceBetween: 16,
        slidesPerView: 2
      }
    }
  });
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var offset = 0; // Можно добавить отступ, если требуется

    return rect.bottom >= offset &&
    // Нижняя часть элемента больше или равна 0 (т.е. появилась снизу)
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) // Верхняя часть элемента видима на экране
    ;
  }
  var animatedElements = document.querySelectorAll('[data-animation]');
  var elementsToAnimate = Array.from(animatedElements);
  function onScroll() {
    elementsToAnimate = elementsToAnimate.filter(function (animatedElement) {
      if (isElementInViewport(animatedElement)) {
        animatedElement.setAttribute('data-activated', true);
        return false;
      }
      return true;
    });
    if (elementsToAnimate.length === 0) {
      window.removeEventListener('scroll', onScroll);
    }
  }
  if (animatedElements.length > 0) {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);
  }
});

/***/ }),

/***/ "./src/js/ResponsiveSlider.js":
/*!************************************!*\
  !*** ./src/js/ResponsiveSlider.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ResponsiveSlider */
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ResponsiveSlider = /*#__PURE__*/function () {
  function ResponsiveSlider(selector) {
    _classCallCheck(this, ResponsiveSlider);
    this._selector = selector;
    this._sliders = document.querySelectorAll("".concat(selector));
    this._container = document.querySelector('.container');
    if (this._sliders && this._container) {
      this.initSwipers = this.initSwipers.bind(this);
      this._reinitSlider = this._reinitSlider.bind(this);
    }
  }
  return _createClass(ResponsiveSlider, [{
    key: "_getContainerWidth",
    value: function _getContainerWidth() {
      var fullWidth = this._container.getBoundingClientRect().width;
      var style = window.getComputedStyle(this._container);
      var paddingLeft = parseFloat(style.paddingLeft);
      var paddingRight = parseFloat(style.paddingRight);
      return (window.innerWidth - (fullWidth - paddingLeft - paddingRight)) / 2;
    }
  }, {
    key: "_updateBreakpointConfig",
    value: function _updateBreakpointConfig(breakpoints, distanceFromEdge) {
      var _this = this;
      var reInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      Object.keys(breakpoints).forEach(function (breakpoint) {
        if (reInit) {
          breakpoints[breakpoint].slidesOffsetBefore ? breakpoints[breakpoint].slidesOffsetBefore = distanceFromEdge : '';
          breakpoints[breakpoint].slidesOffsetAfter ? breakpoints[breakpoint].slidesOffsetAfter = distanceFromEdge : '';
        } else {
          breakpoints[breakpoint].slidesOffsetBefore === _this.constructor.getOffsetKey() ? breakpoints[breakpoint].slidesOffsetBefore = distanceFromEdge : '';
          breakpoints[breakpoint].slidesOffsetAfter === _this.constructor.getOffsetKey() ? breakpoints[breakpoint].slidesOffsetAfter = distanceFromEdge : '';
        }
      });
    }
  }, {
    key: "_setDataForSwiper",
    value: function _setDataForSwiper(swiperConfig) {
      var reInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var distanceFromEdge = this._getContainerWidth();
      if (reInit) {
        swiperConfig.slidesOffsetBefore ? swiperConfig.slidesOffsetBefore = distanceFromEdge : '';
        swiperConfig.slidesOffsetAfter ? swiperConfig.slidesOffsetAfter = distanceFromEdge : '';
      } else {
        swiperConfig.slidesOffsetBefore === this.constructor.getOffsetKey() ? swiperConfig.slidesOffsetBefore = distanceFromEdge : '';
        swiperConfig.slidesOffsetAfter === this.constructor.getOffsetKey() ? swiperConfig.slidesOffsetAfter = distanceFromEdge : '';
      }
      if (swiperConfig.breakpoints) {
        this._updateBreakpointConfig(swiperConfig.breakpoints, distanceFromEdge, reInit);
      }
      return swiperConfig;
    }
  }, {
    key: "_reinitSlider",
    value: function _reinitSlider() {
      var _this2 = this;
      this._initedSliders.forEach(function (value, ind) {
        _this2._initedSliders.get(ind).slider.destroy();
        var updatedConfig = _this2._setDataForSwiper(_this2._initedSliders.get(ind).config, true);
        _this2._initedSliders.set(ind, {
          config: updatedConfig,
          slider: new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector("".concat(_this2._selector, "[data-slider=\"").concat(ind, "\"] .swiper")), updatedConfig)
        });
      });
    }
  }, {
    key: "_addNavigation",
    value: function _addNavigation(config, selector, ind) {
      config.navigation = {
        nextEl: "".concat(selector, "[data-slider='").concat(ind, "'] .nav-next"),
        prevEl: "".concat(selector, "[data-slider='").concat(ind, "'] .nav-prev")
      };
      return config;
    }
  }, {
    key: "initSwipers",
    value: function initSwipers(swiperConfig) {
      var _this3 = this;
      var navNeeded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this._initedSliders = new Map();
      this._sliders.forEach(function (slider, ind) {
        slider.setAttribute('data-slider', ind);
        var updatedConfig = _this3._setDataForSwiper(swiperConfig);
        if (navNeeded) {
          updatedConfig = _this3._addNavigation(updatedConfig, _this3._selector, ind);
        }
        _this3._initedSliders.set(ind, {
          config: updatedConfig,
          slider: new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider.querySelector('.swiper'), updatedConfig)
        });
      });
      window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(this._reinitSlider, 100));
    }
  }], [{
    key: "getOffsetKey",
    value: function getOffsetKey() {
      return 'SHOULD_BE_COUNTED';
    }
  }]);
}();

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RunHeader: function() { return /* binding */ RunHeader; }
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/lang */ "./node_modules/lodash/lang.js");
/* harmony import */ var lodash_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var RunHeader = /*#__PURE__*/function () {
  function RunHeader(menu) {
    var _this = this;
    _classCallCheck(this, RunHeader);
    _defineProperty(this, "_clickOutBurger", function (_ref) {
      var target = _ref.target;
      if (!_this._header.hasAttribute('data-animating')) {
        if (!target.classList.contains('header-content') && !target.closest('.header-content')) {
          _this._closeBurger();
        }
      }
    });
    this._scrolledLogic = this._scrolledLogic.bind(this);
    this._header = menu;
    this._body = document.querySelector('body');
    this._burger = this._header.querySelector('.header-content__nav');
    this._burgerIcon = this._header.querySelector('.header-content__burger-trigger');
    this._subItems = this._header.querySelectorAll('[data-sub-trigger]');
    this._categoriesItems = new Map();
    this._addHandlers();
    this._isDesktop = window.innerWidth >= 992;
    this._lastScrollTop = 0;
    this._scrollThreshold = 150;
    this._scrolledLogic();
  }
  return _createClass(RunHeader, [{
    key: "_scrolledLogic",
    value: function _scrolledLogic() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this._scrollThreshold) {
        if (scrollTop < this._lastScrollTop) {
          this._header.classList.add('header--scrolled-up');
          this._header.classList.remove('header--scrolled-down');
        } else {
          this._header.classList.add('header--scrolled-down');
          this._header.classList.remove('header--scrolled-up');
        }
      } else {
        this._header.classList.remove('header--scrolled-up');
        this._header.classList.remove('header--scrolled-down');
      }
      this._lastScrollTop = scrollTop;
    }
  }, {
    key: "_openBurger",
    value: function _openBurger() {
      var _this2 = this;
      this._header.setAttribute('data-open', true);
      this._burgerIcon.setAttribute('data-open', true);
      this._body.classList.add('blocked');
      document.addEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.slideDown)(this._burger, 300, function () {
        _this2._header.removeAttribute('data-animating');
      });
    }
  }, {
    key: "_resetStylesForDesktop",
    value: function _resetStylesForDesktop() {
      this._burgerIcon.removeAttribute('data-open');
      this._header.removeAttribute('data-open');
      this._body.classList.remove('blocked');
      this._burger.style = '';
      this._isDesktop = true;
      this._closeAllSubCategories(null);
      document.removeEventListener('click', this._clickOutBurger);
    }
  }, {
    key: "_closeBurger",
    value: function _closeBurger() {
      var _this3 = this;
      this._burgerIcon.removeAttribute('data-open');
      this._closeAllSubCategories(null);
      document.removeEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.slideUp)(this._burger, 300, function () {
        _this3._header.removeAttribute('data-animating');
        _this3._header.removeAttribute('data-open');
        _this3._body.classList.remove('blocked');
      });
    }
  }, {
    key: "_addHandlers",
    value: function _addHandlers() {
      var _this4 = this;
      this._burgerIcon.addEventListener('click', function () {
        if (!_this4._header.hasAttribute('data-animating')) {
          _this4._header.setAttribute('data-animating', true);
          if (_this4._header.hasAttribute('data-open')) {
            _this4._closeBurger();
          } else {
            _this4._openBurger();
          }
        }
      });
      window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        _this4._isDesktop = window.innerWidth >= 992;
        if (_this4._isDesktop) {
          _this4._resetStylesForDesktop();
        }
      }, 100));
      window.addEventListener('scroll', this._scrolledLogic);
      this._subItems.forEach(function (cat, ind) {
        var subCat = cat.querySelector("[data-sub-menu]");
        var subIcon = cat.querySelector("[data-sub-icon]");
        if (subCat) {
          _this4._categoriesItems.set(cat, {
            submenuElement: subCat,
            timeoutId: null,
            open: ind === 0,
            subIcon: subIcon
          });
          cat.addEventListener('mouseenter', _this4._categoryMouseEnterHandler.bind(_this4, cat));
          cat.addEventListener('mouseleave', _this4._categoryMouseLeaveHandler.bind(_this4, cat));
          subIcon.addEventListener('click', _this4._categoryClickHandler.bind(_this4, cat));
        }
      });
    }
  }, {
    key: "_categoryClickHandler",
    value: function _categoryClickHandler(category) {
      if (!this._isDesktop) {
        var submenu = this._categoriesItems.get(category);
        var submenuElement = submenu.submenuElement;
        if (!category.hasAttribute('data-animating')) {
          category.setAttribute('data-animating', true);
          if (category.hasAttribute('data-active')) {
            this._closeSubcat(category);
          } else {
            this._openSubCat(category);
          }
          category.removeAttribute('data-animating');
        }
      }
    }
  }, {
    key: "_closeSubcat",
    value: function _closeSubcat(category) {
      var submenu = this._categoriesItems.get(category);
      var submenuElement = submenu.submenuElement;
      if (submenuElement) {
        submenuElement.removeAttribute('data-active');
        category.removeAttribute('data-active');
        submenu.open = false;
      }
    }
  }, {
    key: "_openSubCat",
    value: function _openSubCat(category) {
      var submenu = this._categoriesItems.get(category);
      var submenuElement = submenu.submenuElement;
      if (submenuElement) {
        submenuElement.setAttribute('data-active', true);
        category.setAttribute('data-active', true);
        submenu.open = true;
      }
    }
  }, {
    key: "_closeAllSubCategories",
    value: function _closeAllSubCategories(currentCategory) {
      var _iterator = _createForOfIteratorHelper(this._categoriesItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            category = _step$value[0],
            submenu = _step$value[1];
          if (submenu.open === true && (0,lodash_lang__WEBPACK_IMPORTED_MODULE_1__.isNull)(currentCategory) || submenu.open === true && currentCategory && !category.contains(currentCategory.submenuElement)) {
            this._closeSubcat(category);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_categoryMouseLeaveHandler",
    value: function _categoryMouseLeaveHandler(category) {
      var _this5 = this;
      if (this._isDesktop) {
        var submenu = this._categoriesItems.get(category);
        submenu.timeoutId = setTimeout(function () {
          _this5._closeSubcat(category);
        }, 250);
      }
    }
  }, {
    key: "_categoryMouseEnterHandler",
    value: function _categoryMouseEnterHandler(category) {
      if (this._isDesktop) {
        var submenu = this._categoriesItems.get(category);
        if (submenu.timeoutId) {
          clearTimeout(submenu.timeoutId);
          submenu.timeoutId = null;
        }
        if (this._categoriesItems.has(category)) {
          var _submenu = this._categoriesItems.get(category);
          this._closeAllSubCategories(_submenu);
          this._openSubCat(category);
        }
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slideDown: function() { return /* binding */ slideDown; },
/* harmony export */   slideUp: function() { return /* binding */ slideUp; }
/* harmony export */ });
/* unused harmony export slideToggle */
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.boxSizing = 'border-box';
  target.style.height = "".concat(target.offsetHeight, "px");
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* SLIDE DOWN */
var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'block';
  }
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.height = "".concat(height, "px");
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* TOOGLE */
var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};
var accordeons = document.querySelectorAll('.faq-item');
if (accordeons.length) {
  var _iterator = _createForOfIteratorHelper(accordeons),
    _step;
  try {
    var _loop = function _loop() {
      var accordeon = _step.value;
      var button = accordeon.querySelector('.faq-item__question');
      button.addEventListener('click', function () {
        var _iterator2 = _createForOfIteratorHelper(accordeons),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var otherAccordeon = _step2.value;
            if (otherAccordeon !== accordeon) {
              otherAccordeon.classList.remove('faq-item--active');
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        accordeon.classList.add('faq-item--active');
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhefo"] = self["webpackChunkhefo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.5fd8a8d8f3e2876ce6f5.js.map