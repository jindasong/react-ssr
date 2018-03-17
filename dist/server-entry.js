module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

__webpack_require__(20);

var _header = __webpack_require__(21);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = _header2.default;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/components/header/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

__webpack_require__(23);

var _nav = __webpack_require__(24);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = _nav2.default;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/components/nav/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _article = __webpack_require__(31);

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = {
  article: _article2.default
};
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/api/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _class, _temp;

__webpack_require__(36);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = __webpack_require__(8);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(9);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = (_temp = _class = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Layout.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'layout' },
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(_nav2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'layout__main' },
        this.props.children
      )
    );
  };

  Layout.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return Layout;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node
}, _temp);
var _default = Layout;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, 'Layout', '/Users/songjinda/Study/ssr-project/src/views/layout/index.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/views/layout/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.createStoreMap = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _mobxReact = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(0);

var _store = __webpack_require__(13);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

(0, _mobxReact.useStaticRendering)(true);

var _default = function _default(stores, routerContext, url) {
  return _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _mobxReact.Provider,
      stores,
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { context: routerContext, location: url },
        _react2.default.createElement(_App2.default, null)
      )
    )
  );
};

exports.default = _default;
exports.createStoreMap = _store.createStoreMap;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/server-entry.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.createStoreMap = undefined;

var _topic_list_state = __webpack_require__(14);

var _topic_list_state2 = _interopRequireDefault(_topic_list_state);

var _article_state = __webpack_require__(15);

var _article_state2 = _interopRequireDefault(_article_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var createStoreMap = exports.createStoreMap = function createStoreMap() {
  return {
    topicListState: new _topic_list_state2.default(),
    articleState: new _article_state2.default()
  };
};

var _default = {
  TopicListState: _topic_list_state2.default,
  ArticleState: _article_state2.default
};
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createStoreMap, 'createStoreMap', '/Users/songjinda/Study/ssr-project/src/store/index.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/store/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(4);

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var TopicListState = (_class = function () {
  function TopicListState(data) {
    _classCallCheck(this, TopicListState);

    _initDefineProp(this, 'data', _descriptor, this);

    this.data = data || [];
  }

  TopicListState.prototype.update = function update(data) {
    this.data = data;
  };

  TopicListState.prototype.toJSON = function toJSON() {
    return {
      data: this.data
    };
  };

  TopicListState.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return TopicListState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'data', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'update', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'update'), _class.prototype)), _class);
var _default = TopicListState;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TopicListState, 'TopicListState', '/Users/songjinda/Study/ssr-project/src/store/topic_list_state.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/store/topic_list_state.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(4);

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ArticleState = (_class = function () {
  function ArticleState() {
    var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ArticleState);

    _initDefineProp(this, 'details', _descriptor, this);

    this.details = initState.details || {};
  }

  ArticleState.prototype.updateDetails = function updateDetails(data) {
    this.details = data;
  };

  ArticleState.prototype.toJSON = function toJSON() {
    return {
      details: this.details
    };
  };

  ArticleState.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return ArticleState;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'details', [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'updateDetails', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'updateDetails'), _class.prototype)), _class);
var _default = ArticleState;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ArticleState, 'ArticleState', '/Users/songjinda/Study/ssr-project/src/store/article_state.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/store/article_state.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _routers = __webpack_require__(17);

var _routers2 = _interopRequireDefault(_routers);

var _layout = __webpack_require__(11);

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return _react2.default.createElement(
      _layout2.default,
      null,
      _react2.default.createElement(_routers2.default, null)
    );
  };

  App.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', '/Users/songjinda/Study/ssr-project/src/App.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/App.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

var _articleDetails = __webpack_require__(34);

var _articleDetails2 = _interopRequireDefault(_articleDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
  return [_react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _index2.default, key: 'index', exact: true }), _react2.default.createElement(_reactRouterDom.Route, { path: '/article/details/:articleId', component: _articleDetails2.default, key: 'articleDetails', exact: true })];
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/routers/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _dec, _class;

__webpack_require__(19);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(8);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(9);

var _nav2 = _interopRequireDefault(_nav);

var _articleItem = __webpack_require__(25);

var _articleItem2 = _interopRequireDefault(_articleItem);

var _mobxReact = __webpack_require__(3);

var _api = __webpack_require__(10);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _mobxReact.inject)(function (stores) {
  return {
    topicListState: stores.topicListState
  };
}), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Index.prototype.asyncBootstrap = function asyncBootstrap() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _api2.default.article.fetchArticleList().then(function (_ref) {
        var data = _ref.data;

        _this2.props.topicListState.update(data);
        resolve(true);
      }).catch(reject);
    });
  };

  Index.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          '\u6BDB\u8C46\u7684\u524D\u7AEF\u535A\u5BA2-\u9996\u9875'
        ),
        _react2.default.createElement('meta', { name: 'description', content: '\u6BDB\u8C46\u7684\u524D\u7AEF\u535A\u5BA2|web\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08|Node.js|React|Vue|Webpack' })
      ),
      this.props.topicListState.data.map(function (item, index) {
        return _react2.default.createElement(_articleItem2.default, { title: item.title, tags: [item.tab], desc: item.title + item.title, key: index, itemId: item.id });
      })
    );
  };

  Index.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return Index;
}(_react.Component)) || _class) || _class);
var _default = Index;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', '/Users/songjinda/Study/ssr-project/src/views/index/index.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/views/index/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports) {



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _avatar = __webpack_require__(22);

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return _react2.default.createElement(
      'header',
      { className: 'header' },
      _react2.default.createElement('img', { className: 'header__avatar', src: _avatar2.default, alt: '\u82B1\u751F\u6BDB\u8C46\u5934\u50CF' }),
      _react2.default.createElement(
        'span',
        { className: 'header__title' },
        '\u6BDB\u8C46\u7684\u524D\u7AEF\u535A\u5BA2'
      )
    );
  };

  Header.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return Header;
}(_react.Component);

var _default = Header;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, 'Header', '/Users/songjinda/Study/ssr-project/src/components/header/header.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/components/header/header.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/avatar.d0ca5ac.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Nav.prototype.render = function render() {
    return _react2.default.createElement(
      'nav',
      { className: 'nav' },
      _react2.default.createElement(
        'a',
        { className: 'nav__item active', href: '/' },
        'Home'
      ),
      _react2.default.createElement(
        'a',
        { className: 'nav__item', href: '/about' },
        'About'
      ),
      _react2.default.createElement(
        'a',
        { className: 'nav__item', href: 'https://github.com/jindasong' },
        'Github'
      )
    );
  };

  Nav.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return Nav;
}(_react.Component);

var _default = Nav;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Nav, 'Nav', '/Users/songjinda/Study/ssr-project/src/components/nav/nav.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/components/nav/nav.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

__webpack_require__(26);

var _articleItem = __webpack_require__(27);

var _articleItem2 = _interopRequireDefault(_articleItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = _articleItem2.default;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/components/article-item/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _tag = __webpack_require__(28);

var _tag2 = _interopRequireDefault(_tag);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleItem = (_temp = _class = function (_Component) {
  _inherits(ArticleItem, _Component);

  function ArticleItem() {
    _classCallCheck(this, ArticleItem);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ArticleItem.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        desc = _props.desc,
        tags = _props.tags,
        itemId = _props.itemId;

    return _react2.default.createElement(
      'div',
      { className: 'article-item' },
      _react2.default.createElement(
        'a',
        { href: '/article/details/' + itemId, className: 'article-item__title' },
        title
      ),
      _react2.default.createElement(
        'div',
        { className: 'article-item__desc' },
        desc
      ),
      _react2.default.createElement(
        'div',
        { className: 'article-item__tag' },
        tags.map(function (item, index) {
          if (item) {
            return _react2.default.createElement(
              _tag2.default,
              { key: index },
              item
            );
          }
        })
      )
    );
  };

  ArticleItem.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return ArticleItem;
}(_react.Component), _class.defaultProps = {
  tags: []
}, _class.propTypes = {
  title: _propTypes2.default.string.isRequired,
  desc: _propTypes2.default.string,
  tags: _propTypes2.default.array,
  itemId: _propTypes2.default.string.isRequired
}, _temp);
var _default = ArticleItem;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ArticleItem, 'ArticleItem', '/Users/songjinda/Study/ssr-project/src/components/article-item/article-item.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/components/article-item/article-item.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

__webpack_require__(29);

var _tag = __webpack_require__(30);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var _default = _tag2.default;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/components/tag/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = (_temp = _class = function (_Component) {
  _inherits(Tag, _Component);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Tag.prototype.render = function render() {
    var tag = void 0;
    if (this.props.href) {
      tag = _react2.default.createElement(
        'a',
        { href: this.props.href, className: 'tag' },
        ' ',
        this.props.children,
        ' '
      );
    } else {
      tag = _react2.default.createElement(
        'span',
        { className: 'tag' },
        ' ',
        this.props.children,
        ' '
      );
    }

    return tag;
  };

  Tag.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return Tag;
}(_react.Component), _class.propTypes = {
  href: _propTypes2.default.string,
  children: _propTypes2.default.string.isRequired
}, _temp);
var _default = Tag;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tag, 'Tag', '/Users/songjinda/Study/ssr-project/src/components/tag/tag.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/components/tag/tag.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _http = __webpack_require__(32);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function fetchArticleDetails(articleId) {
  return _http2.default.get('https://cnodejs.org/api/v1/topic/' + articleId);
}

function fetchArticleList() {
  return _http2.default.get('http://cnodejs.org/api/v1/topics');
}

var _default = {
  fetchArticleDetails: fetchArticleDetails,
  fetchArticleList: fetchArticleList
};
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchArticleDetails, 'fetchArticleDetails', '/Users/songjinda/Study/ssr-project/src/api/article.js');
  reactHotLoader.register(fetchArticleList, 'fetchArticleList', '/Users/songjinda/Study/ssr-project/src/api/article.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/api/article.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var http = _axios2.default.create();

// 请求拦截
http.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
http.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

var _default = http;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(http, 'http', '/Users/songjinda/Study/ssr-project/src/utils/http.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/utils/http.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _dec, _class, _desc, _value, _class2, _descriptor;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(35);

var _mobx = __webpack_require__(4);

var _mobxReact = __webpack_require__(3);

var _api = __webpack_require__(10);

var _api2 = _interopRequireDefault(_api);

var _reactHelmet = __webpack_require__(7);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _layout = __webpack_require__(11);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ArticleDetails = (_dec = (0, _mobxReact.inject)(function (stores) {
  return {
    articleState: stores.articleState
  };
}), _dec(_class = (0, _mobxReact.observer)(_class = (_class2 = function (_Component) {
  _inherits(ArticleDetails, _Component);

  function ArticleDetails(props) {
    _classCallCheck(this, ArticleDetails);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _initDefineProp(_this, 'articleId', _descriptor, _this);

    var params = props.match.params;

    _this.articleId = params.articleId;
    return _this;
  }

  ArticleDetails.prototype.asyncBootstrap = function asyncBootstrap() {
    var _this2 = this;

    return new Promise(function (resolve) {
      _api2.default.article.fetchArticleDetails(_this2.articleId).then(function (_ref) {
        var data = _ref.data;

        _this2.props.articleState.updateDetails(data);
        resolve(true);
      }).catch(function (error) {
        console.log(error);
      });
    });
  };

  ArticleDetails.prototype.render = function render() {
    var _props$articleState$d = this.props.articleState.details,
        title = _props$articleState$d.title,
        content = _props$articleState$d.content;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          title,
          '-\u6BDB\u8C46\u7684\u524D\u7AEF\u535A\u5BA2'
        ),
        _react2.default.createElement('meta', { name: 'description', content: '\u6BDB\u8C46\u7684\u524D\u7AEF\u535A\u5BA2|web\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08|Node.js|React|Vue|Webpack' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'article' },
        _react2.default.createElement(
          'div',
          { className: 'article__title' },
          title
        ),
        _react2.default.createElement('div', { className: 'article__content markdown-body', dangerouslySetInnerHTML: { __html: content } })
      )
    );
  };

  ArticleDetails.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return ArticleDetails;
}(_react.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'articleId', [_mobx.observable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);
var _default = ArticleDetails;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ArticleDetails, 'ArticleDetails', '/Users/songjinda/Study/ssr-project/src/views/article/article-details.js');
  reactHotLoader.register(_default, 'default', '/Users/songjinda/Study/ssr-project/src/views/article/article-details.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {



/***/ }),
/* 36 */
/***/ (function(module, exports) {



/***/ }),
/* 37 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);