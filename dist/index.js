
  /**
   * Generated on: 1664266222798 
   *      Package: @innovaccer/helpers
   *      Version: v1.0.1
   *      License: MIT
   *         Docs: https://innovaccer.github.io/mds-helpers
   */

    
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('@innovaccer/design-system')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', '@innovaccer/design-system'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MDSHelpers = {}, global.React, global.ReactDOM, global.InnovaccerDesignSystem));
})(this, (function (exports, React, ReactDOM, designSystem) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".alertService {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  border-radius: 8px;\n  overflow: hidden;\n  bottom: 24px;\n  opacity: 0;\n  transition: all 240ms cubic-bezier(0, 0, 0.3, 1);\n  transform: translateX(-100%) translateX(-24px);\n}\n\n.alertService.alertService-active {\n  transition-delay: 240ms;\n  transform: translateX(0%);\n  opacity: 1;\n  animation-fill-mode: forwards;\n}\n\n.alertService.alertService-down {\n  transform: translateY(100%) translateY(16px);\n  opacity: 1;\n  animation-fill-mode: forwards;\n}\n\n.alertService.alertService-up {\n  transition-delay: 120ms;\n  transition-duration: 120ms;\n  transition-timing-function: cubic-bezier(0.4, 0.14, 1, 1);\n  transform: translateY(0%);\n  animation-fill-mode: forwards;\n  opacity: 1;\n}\n\n.alertService.alertService-left {\n  animation: 120ms cubic-bezier(0.4, 0.14, 1, 1);\n  animation-fill-mode: forwards;\n  opacity: 0.25;\n}\n\n.alertService:nth-child(n + 3) {\n  transform: translateY(200%) translateY(16px);\n}\n";
  styleInject(css_248z);

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  /** @deprecated */
  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var toastId = 0;
  var uidGenerator = function uidGenerator() {
    return toastId++;
  };
  function pubSub() {
    var subscribers = {};

    function publish(eventName, data) {
      if (!Array.isArray(subscribers[eventName])) {
        return;
      }

      var toastId = uidGenerator();
      subscribers[eventName].forEach(function (callback) {
        callback(__assign(__assign({}, data), {
          toastId: toastId
        }));
      });
      return toastId;
    }

    function subscribe(eventName, callback) {
      if (!Array.isArray(subscribers[eventName])) {
        subscribers[eventName] = [];
      }

      subscribers[eventName].push(callback);
      var index = subscribers[eventName].length - 1;
      return function () {
        return subscribers[eventName].splice(index, 1);
      };
    }

    return {
      publish: publish,
      subscribe: subscribe
    };
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
  var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
  var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
  var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

  var reactIs_production_min = {
  	AsyncMode: AsyncMode,
  	ConcurrentMode: ConcurrentMode,
  	ContextConsumer: ContextConsumer,
  	ContextProvider: ContextProvider,
  	Element: Element,
  	ForwardRef: ForwardRef,
  	Fragment: Fragment,
  	Lazy: Lazy,
  	Memo: Memo,
  	Portal: Portal,
  	Profiler: Profiler,
  	StrictMode: StrictMode,
  	Suspense: Suspense,
  	isAsyncMode: isAsyncMode,
  	isConcurrentMode: isConcurrentMode,
  	isContextConsumer: isContextConsumer,
  	isContextProvider: isContextProvider,
  	isElement: isElement,
  	isForwardRef: isForwardRef,
  	isFragment: isFragment,
  	isLazy: isLazy,
  	isMemo: isMemo,
  	isPortal: isPortal,
  	isProfiler: isProfiler,
  	isStrictMode: isStrictMode,
  	isSuspense: isSuspense,
  	isValidElementType: isValidElementType,
  	typeOf: typeOf
  };

  var reactIs_development = createCommonjsModule(function (module, exports) {



  if (process.env.NODE_ENV !== "production") {
    (function() {

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  // (unstable) APIs that have been removed. Can we remove the symbols?

  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_ASYNC_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  } // AsyncMode is deprecated along with isAsyncMode

  var AsyncMode = REACT_ASYNC_MODE_TYPE;
  var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
      }
    }

    return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  }
  function isConcurrentMode(object) {
    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.AsyncMode = AsyncMode;
  exports.ConcurrentMode = ConcurrentMode;
  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
  exports.isValidElementType = isValidElementType;
  exports.typeOf = typeOf;
    })();
  }
  });
  reactIs_development.AsyncMode;
  reactIs_development.ConcurrentMode;
  reactIs_development.ContextConsumer;
  reactIs_development.ContextProvider;
  reactIs_development.Element;
  reactIs_development.ForwardRef;
  reactIs_development.Fragment;
  reactIs_development.Lazy;
  reactIs_development.Memo;
  reactIs_development.Portal;
  reactIs_development.Profiler;
  reactIs_development.StrictMode;
  reactIs_development.Suspense;
  reactIs_development.isAsyncMode;
  reactIs_development.isConcurrentMode;
  reactIs_development.isContextConsumer;
  reactIs_development.isContextProvider;
  reactIs_development.isElement;
  reactIs_development.isForwardRef;
  reactIs_development.isFragment;
  reactIs_development.isLazy;
  reactIs_development.isMemo;
  reactIs_development.isPortal;
  reactIs_development.isProfiler;
  reactIs_development.isStrictMode;
  reactIs_development.isSuspense;
  reactIs_development.isValidElementType;
  reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;

  var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

  var has$1 = has$2;

  var printWarning$1 = function() {};

  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret = ReactPropTypesSecret$1;
    var loggedTypeFailures = {};
    var has = has$1;

    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) { /**/ }
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
                'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning$1(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning$1(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes$1.resetWarningCache = function() {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes$1;

  var checkPropTypes = checkPropTypes_1;

  var printWarning = function() {};

  if (process.env.NODE_ENV !== 'production') {
    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === 'object' ? data: {};
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret$1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
            {expectedType: expectedType}
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning(
              'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
              'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            );
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError(
        (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
        'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
      );
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has$1(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret$1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var require$$1 = factoryWithTypeCheckers;

  var require$$2 = factoryWithThrowingShims;

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = require$$1(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = require$$2();
  }
  });

  var chainFunction = function chain(){
    var len = arguments.length;
    var args = [];

    for (var i = 0; i < len; i++)
      args[i] = arguments[i];

    args = args.filter(function(fn){ return fn != null });

    if (args.length === 0) return undefined
    if (args.length === 1) return args[0]

    return args.reduce(function(current, next){
      return function chainedFunction() {
        current.apply(this, arguments);
        next.apply(this, arguments);
      };
    })
  };

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var __DEV__ = process.env.NODE_ENV !== 'production';

  var warning = function() {};

  if (__DEV__) {
    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
        );
      }

      if (format.length < 10 || (/^[s\W]*$/).test(format)) {
        throw new Error(
          'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' + format
        );
      }

      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch(x) {}
      }
    };
  }

  var warning_1 = warning;

  var ChildMapping = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.getChildMapping = getChildMapping;
  exports.mergeChildMappings = mergeChildMappings;



  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  function getChildMapping(children) {
    if (!children) {
      return children;
    }
    var result = {};
    React__default["default"].Children.map(children, function (child) {
      return child;
    }).forEach(function (child) {
      result[child.key] = child;
    });
    return result;
  }

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      if (next.hasOwnProperty(key)) {
        return next[key];
      }

      return prev[key];
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (next.hasOwnProperty(prevKey)) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i = void 0;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending.hasOwnProperty(nextKey)) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
  });

  unwrapExports(ChildMapping);
  ChildMapping.getChildMapping;
  ChildMapping.mergeChildMappings;

  var _propTypes = propTypes;

  var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _chainFunction2 = _interopRequireDefault(chainFunction);



  var _react2 = _interopRequireDefault(React__default["default"]);



  var _propTypes2 = _interopRequireDefault(_propTypes);



  var _warning2 = _interopRequireDefault(warning_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var propTypes = {
    component: _propTypes2.default.any,
    childFactory: _propTypes2.default.func,
    children: _propTypes2.default.node
  };

  var defaultProps = {
    component: 'span',
    childFactory: function childFactory(child) {
      return child;
    }
  };

  var TransitionGroup = function (_React$Component) {
    _inherits(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      _classCallCheck(this, TransitionGroup);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      _this.performAppear = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillAppear) {
          component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
        } else {
          _this._handleDoneAppearing(key, component);
        }
      };

      _this._handleDoneAppearing = function (key, component) {
        if (component.componentDidAppear) {
          component.componentDidAppear();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
          // This was removed before it had fully appeared. Remove it.
          _this.performLeave(key, component);
        }
      };

      _this.performEnter = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillEnter) {
          component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
        } else {
          _this._handleDoneEntering(key, component);
        }
      };

      _this._handleDoneEntering = function (key, component) {
        if (component.componentDidEnter) {
          component.componentDidEnter();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
          // This was removed before it had fully entered. Remove it.
          _this.performLeave(key, component);
        }
      };

      _this.performLeave = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillLeave) {
          component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
        } else {
          // Note that this is somewhat dangerous b/c it calls setState()
          // again, effectively mutating the component before all the work
          // is done.
          _this._handleDoneLeaving(key, component);
        }
      };

      _this._handleDoneLeaving = function (key, component) {
        if (component.componentDidLeave) {
          component.componentDidLeave();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
          // This entered again before it fully left. Add it again.
          _this.keysToEnter.push(key);
        } else {
          _this.setState(function (state) {
            var newChildren = _extends({}, state.children);
            delete newChildren[key];
            return { children: newChildren };
          });
        }
      };

      _this.childRefs = Object.create(null);

      _this.state = {
        children: (0, ChildMapping.getChildMapping)(props.children)
      };
      return _this;
    }

    TransitionGroup.prototype.componentWillMount = function componentWillMount() {
      this.currentlyTransitioningKeys = {};
      this.keysToEnter = [];
      this.keysToLeave = [];
    };

    TransitionGroup.prototype.componentDidMount = function componentDidMount() {
      var initialChildMapping = this.state.children;
      for (var key in initialChildMapping) {
        if (initialChildMapping[key]) {
          this.performAppear(key, this.childRefs[key]);
        }
      }
    };

    TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var nextChildMapping = (0, ChildMapping.getChildMapping)(nextProps.children);
      var prevChildMapping = this.state.children;

      this.setState({
        children: (0, ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
      });

      for (var key in nextChildMapping) {
        var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
        }
      }

      for (var _key in prevChildMapping) {
        var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
        if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
          this.keysToLeave.push(_key);
        }
      }

      // If we want to someday check for reordering, we could do it here.
    };

    TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
      var _this2 = this;

      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(function (key) {
        return _this2.performEnter(key, _this2.childRefs[key]);
      });

      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(function (key) {
        return _this2.performLeave(key, _this2.childRefs[key]);
      });
    };

    TransitionGroup.prototype.render = function render() {
      var _this3 = this;

      // TODO: we could get rid of the need for the wrapper node
      // by cloning a single child
      var childrenToRender = [];

      var _loop = function _loop(key) {
        var child = _this3.state.children[key];
        if (child) {
          var isCallbackRef = typeof child.ref !== 'string';
          var factoryChild = _this3.props.childFactory(child);
          var ref = function ref(r) {
            _this3.childRefs[key] = r;
          };

          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

          // Always chaining the refs leads to problems when the childFactory
          // wraps the child. The child ref callback gets called twice with the
          // wrapper and the child. So we only need to chain the ref if the
          // factoryChild is not different from child.
          if (factoryChild === child && isCallbackRef) {
            ref = (0, _chainFunction2.default)(child.ref, ref);
          }

          // You may need to apply reactive updates to a child as it is leaving.
          // The normal React way to do it won't work since the child will have
          // already been removed. In case you need this behavior you can provide
          // a childFactory function to wrap every child, even the ones that are
          // leaving.
          childrenToRender.push(_react2.default.cloneElement(factoryChild, {
            key: key,
            ref: ref
          }));
        }
      };

      for (var key in this.state.children) {
        _loop(key);
      }

      // Do not forward TransitionGroup props to primitive DOM nodes
      var props = _extends({}, this.props);
      delete props.transitionLeave;
      delete props.transitionName;
      delete props.transitionAppear;
      delete props.transitionEnter;
      delete props.childFactory;
      delete props.transitionLeaveTimeout;
      delete props.transitionEnterTimeout;
      delete props.transitionAppearTimeout;
      delete props.component;

      return _react2.default.createElement(this.props.component, props, childrenToRender);
    };

    return TransitionGroup;
  }(_react2.default.Component);

  TransitionGroup.displayName = 'TransitionGroup';


  TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
  TransitionGroup.defaultProps = defaultProps;

  exports.default = TransitionGroup;
  module.exports = exports['default'];
  });

  unwrapExports(TransitionGroup_1);

  var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(interopRequireDefault);

  var hasClass_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = hasClass;

  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  module.exports = exports["default"];
  });

  unwrapExports(hasClass_1);

  var addClass_1 = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = addClass;

  var _hasClass = interopRequireDefault(hasClass_1);

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
  }

  module.exports = exports["default"];
  });

  unwrapExports(addClass_1);

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  var removeClass = function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  };

  var inDOM = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = void 0;

  var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(inDOM);

  var requestAnimationFrame = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
  var cancel = 'clearTimeout';
  var raf = fallback;
  var compatRaf;

  var getKey = function getKey(vendor, k) {
    return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
  };

  if (_inDOM.default) {
    vendors.some(function (vendor) {
      var rafKey = getKey(vendor, 'request');

      if (rafKey in window) {
        cancel = getKey(vendor, 'cancel');
        return raf = function raf(cb) {
          return window[rafKey](cb);
        };
      }
    });
  }
  /* https://github.com/component/raf */


  var prev = new Date().getTime();

  function fallback(fn) {
    var curr = new Date().getTime(),
        ms = Math.max(0, 16 - (curr - prev)),
        req = setTimeout(fn, ms);
    prev = curr;
    return req;
  }

  compatRaf = function compatRaf(cb) {
    return raf(cb);
  };

  compatRaf.cancel = function (id) {
    window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
  };

  var _default = compatRaf;
  exports.default = _default;
  module.exports = exports["default"];
  });

  unwrapExports(requestAnimationFrame);

  var properties = createCommonjsModule(function (module, exports) {



  exports.__esModule = true;
  exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

  var _inDOM = interopRequireDefault(inDOM);

  var transform = 'transform';
  exports.transform = transform;
  var prefix, transitionEnd, animationEnd;
  exports.animationEnd = animationEnd;
  exports.transitionEnd = transitionEnd;
  var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
  exports.transitionDelay = transitionDelay;
  exports.transitionTiming = transitionTiming;
  exports.transitionDuration = transitionDuration;
  exports.transitionProperty = transitionProperty;
  var animationName, animationDuration, animationTiming, animationDelay;
  exports.animationDelay = animationDelay;
  exports.animationTiming = animationTiming;
  exports.animationDuration = animationDuration;
  exports.animationName = animationName;

  if (_inDOM.default) {
    var _getTransitionPropert = getTransitionProperties();

    prefix = _getTransitionPropert.prefix;
    exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
    exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
    exports.transform = transform = prefix + "-" + transform;
    exports.transitionProperty = transitionProperty = prefix + "-transition-property";
    exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
    exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
    exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
    exports.animationName = animationName = prefix + "-animation-name";
    exports.animationDuration = animationDuration = prefix + "-animation-duration";
    exports.animationTiming = animationTiming = prefix + "-animation-delay";
    exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
  }

  var _default = {
    transform: transform,
    end: transitionEnd,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration
  };
  exports.default = _default;

  function getTransitionProperties() {
    var style = document.createElement('div').style;
    var vendorMap = {
      O: function O(e) {
        return "o" + e.toLowerCase();
      },
      Moz: function Moz(e) {
        return e.toLowerCase();
      },
      Webkit: function Webkit(e) {
        return "webkit" + e;
      },
      ms: function ms(e) {
        return "MS" + e;
      }
    };
    var vendors = Object.keys(vendorMap);
    var transitionEnd, animationEnd;
    var prefix = '';

    for (var i = 0; i < vendors.length; i++) {
      var vendor = vendors[i];

      if (vendor + "TransitionProperty" in style) {
        prefix = "-" + vendor.toLowerCase();
        transitionEnd = vendorMap[vendor]('TransitionEnd');
        animationEnd = vendorMap[vendor]('AnimationEnd');
        break;
      }
    }

    if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
    if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
    style = null;
    return {
      animationEnd: animationEnd,
      transitionEnd: transitionEnd,
      prefix: prefix
    };
  }
  });

  unwrapExports(properties);
  properties.animationEnd;
  properties.animationDelay;
  properties.animationTiming;
  properties.animationDuration;
  properties.animationName;
  properties.transitionEnd;
  properties.transitionDuration;
  properties.transitionDelay;
  properties.transitionTiming;
  properties.transitionProperty;
  properties.transform;

  var PropTypes = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.nameShape = undefined;
  exports.transitionTimeout = transitionTimeout;



  _interopRequireDefault(React__default["default"]);



  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;

    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

          // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    leave: _propTypes2.default.string,
    active: _propTypes2.default.string
  }), _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    leave: _propTypes2.default.string,
    leaveActive: _propTypes2.default.string,
    appear: _propTypes2.default.string,
    appearActive: _propTypes2.default.string
  })]);
  });

  unwrapExports(PropTypes);
  PropTypes.nameShape;
  PropTypes.transitionTimeout;

  var CSSTransitionGroupChild_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _addClass2 = _interopRequireDefault(addClass_1);



  var _removeClass2 = _interopRequireDefault(removeClass);



  var _requestAnimationFrame2 = _interopRequireDefault(requestAnimationFrame);





  var _react2 = _interopRequireDefault(React__default["default"]);



  var _propTypes2 = _interopRequireDefault(_propTypes);





  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var events = [];
  if (properties.transitionEnd) events.push(properties.transitionEnd);
  if (properties.animationEnd) events.push(properties.animationEnd);

  function addEndListener(node, listener) {
    if (events.length) {
      events.forEach(function (e) {
        return node.addEventListener(e, listener, false);
      });
    } else {
      setTimeout(listener, 0);
    }

    return function () {
      if (!events.length) return;
      events.forEach(function (e) {
        return node.removeEventListener(e, listener, false);
      });
    };
  }

  var propTypes = {
    children: _propTypes2.default.node,
    name: PropTypes.nameShape.isRequired,

    // Once we require timeouts to be specified, we can remove the
    // boolean flags (appear etc.) and just accept a number
    // or a bool for the timeout flags (appearTimeout etc.)
    appear: _propTypes2.default.bool,
    enter: _propTypes2.default.bool,
    leave: _propTypes2.default.bool,
    appearTimeout: _propTypes2.default.number,
    enterTimeout: _propTypes2.default.number,
    leaveTimeout: _propTypes2.default.number
  };

  var CSSTransitionGroupChild = function (_React$Component) {
    _inherits(CSSTransitionGroupChild, _React$Component);

    function CSSTransitionGroupChild() {
      var _temp, _this, _ret;

      _classCallCheck(this, CSSTransitionGroupChild);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
        if (_this.props.appear) {
          _this.transition('appear', done, _this.props.appearTimeout);
        } else {
          done();
        }
      }, _this.componentWillEnter = function (done) {
        if (_this.props.enter) {
          _this.transition('enter', done, _this.props.enterTimeout);
        } else {
          done();
        }
      }, _this.componentWillLeave = function (done) {
        if (_this.props.leave) {
          _this.transition('leave', done, _this.props.leaveTimeout);
        } else {
          done();
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
      this.classNameAndNodeQueue = [];
      this.transitionTimeouts = [];
    };

    CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.transitionTimeouts.forEach(function (timeout) {
        clearTimeout(timeout);
      });

      this.classNameAndNodeQueue.length = 0;
    };

    CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
      var node = (0, ReactDOM__default["default"].findDOMNode)(this);

      if (!node) {
        if (finishCallback) {
          finishCallback();
        }
        return;
      }

      var className = this.props.name[animationType] || this.props.name + '-' + animationType;
      var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
      var timer = null;
      var removeListeners = void 0;

      (0, _addClass2.default)(node, className);

      // Need to do this to actually trigger a transition.
      this.queueClassAndNode(activeClassName, node);

      // Clean-up the animation after the specified delay
      var finish = function finish(e) {
        if (e && e.target !== node) {
          return;
        }

        clearTimeout(timer);
        if (removeListeners) removeListeners();

        (0, _removeClass2.default)(node, className);
        (0, _removeClass2.default)(node, activeClassName);

        if (removeListeners) removeListeners();

        // Usually this optional callback is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (finishCallback) {
          finishCallback();
        }
      };

      if (timeout) {
        timer = setTimeout(finish, timeout);
        this.transitionTimeouts.push(timer);
      } else if (properties.transitionEnd) {
        removeListeners = addEndListener(node, finish);
      }
    };

    CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
      var _this2 = this;

      this.classNameAndNodeQueue.push({
        className: className,
        node: node
      });

      if (!this.rafHandle) {
        this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
          return _this2.flushClassNameAndNodeQueue();
        });
      }
    };

    CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
      if (!this.unmounted) {
        this.classNameAndNodeQueue.forEach(function (obj) {
          // This is for to force a repaint,
          // which is necessary in order to transition styles when adding a class name.
          /* eslint-disable no-unused-expressions */
          obj.node.scrollTop;
          /* eslint-enable no-unused-expressions */
          (0, _addClass2.default)(obj.node, obj.className);
        });
      }
      this.classNameAndNodeQueue.length = 0;
      this.rafHandle = null;
    };

    CSSTransitionGroupChild.prototype.render = function render() {
      var props = _extends({}, this.props);
      delete props.name;
      delete props.appear;
      delete props.enter;
      delete props.leave;
      delete props.appearTimeout;
      delete props.enterTimeout;
      delete props.leaveTimeout;
      delete props.children;
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
    };

    return CSSTransitionGroupChild;
  }(_react2.default.Component);

  CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


  CSSTransitionGroupChild.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

  exports.default = CSSTransitionGroupChild;
  module.exports = exports['default'];
  });

  unwrapExports(CSSTransitionGroupChild_1);

  var CSSTransitionGroup_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _react2 = _interopRequireDefault(React__default["default"]);



  var _propTypes2 = _interopRequireDefault(_propTypes);



  var _TransitionGroup2 = _interopRequireDefault(TransitionGroup_1);



  var _CSSTransitionGroupChild2 = _interopRequireDefault(CSSTransitionGroupChild_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var propTypes = {
    transitionName: PropTypes.nameShape.isRequired,

    transitionAppear: _propTypes2.default.bool,
    transitionEnter: _propTypes2.default.bool,
    transitionLeave: _propTypes2.default.bool,
    transitionAppearTimeout: (0, PropTypes.transitionTimeout)('Appear'),
    transitionEnterTimeout: (0, PropTypes.transitionTimeout)('Enter'),
    transitionLeaveTimeout: (0, PropTypes.transitionTimeout)('Leave')
  };

  var defaultProps = {
    transitionAppear: false,
    transitionEnter: true,
    transitionLeave: true
  };

  var CSSTransitionGroup = function (_React$Component) {
    _inherits(CSSTransitionGroup, _React$Component);

    function CSSTransitionGroup() {
      var _temp, _this, _ret;

      _classCallCheck(this, CSSTransitionGroup);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
        return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
          name: _this.props.transitionName,
          appear: _this.props.transitionAppear,
          enter: _this.props.transitionEnter,
          leave: _this.props.transitionLeave,
          appearTimeout: _this.props.transitionAppearTimeout,
          enterTimeout: _this.props.transitionEnterTimeout,
          leaveTimeout: _this.props.transitionLeaveTimeout
        }, child);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // We need to provide this childFactory so that
    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
    // leave while it is leaving.


    CSSTransitionGroup.prototype.render = function render() {
      return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
    };

    return CSSTransitionGroup;
  }(_react2.default.Component);

  CSSTransitionGroup.displayName = 'CSSTransitionGroup';


  CSSTransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
  CSSTransitionGroup.defaultProps = defaultProps;

  exports.default = CSSTransitionGroup;
  module.exports = exports['default'];
  });

  unwrapExports(CSSTransitionGroup_1);

  var reactAddonsCssTransitionGroup = CSSTransitionGroup_1;

  var AlertComponent = function AlertComponent(props) {
    var _a;

    var alert = props.alert,
        wrapId = props.wrapId,
        wrapClassName = props.wrapClassName,
        leftOrRight = props.leftOrRight,
        onDismiss = props.onDismiss,
        indexNumber = props.indexNumber,
        zIndex = props.zIndex;
    var appearance = alert.appearance,
        toastId = alert.toastId,
        onClose = alert.onClose,
        dismissIn = alert.dismissIn,
        toastClassName = alert.toastClassName,
        autoHiderBar = alert.autoHiderBar;

    var autoHiderBarStyle = autoHiderBar.style,
        autoHiderBarProps = __rest(autoHiderBar, ["style"]);

    var _b = React__namespace.useState(100),
        width = _b[0],
        setWidth = _b[1];

    var toastStyle = (_a = {
      position: 'fixed',
      zIndex: zIndex + 50
    }, _a[leftOrRight] = '24px', _a);

    var _c = React__namespace.useState(''),
        direction = _c[0],
        setDirection = _c[1];

    var prevIndexNumber = React__namespace.useRef(indexNumber);
    var timer = React__namespace.useRef(null);
    React__namespace.useEffect(function () {
      if (indexNumber > prevIndexNumber.current) {
        setDirection('down');
        handlePauseTimer();
      }

      if (indexNumber < prevIndexNumber.current && indexNumber === 0) {
        setDirection('up');
        handleStartTimer();
      }

      prevIndexNumber.current = indexNumber;
    }, [indexNumber]);

    var handlePauseTimer = function handlePauseTimer() {
      clearInterval(timer.current);
    };

    var handleCloseToast = function handleCloseToast() {
      handlePauseTimer();
      setDirection('left');
      onDismiss(toastId, onClose);
    };

    var handleStartTimer = function handleStartTimer() {
      if (dismissIn) {
        var intId_1 = setInterval(function () {
          setWidth(function (prev) {
            if (prev > 0) {
              return prev - 0.5;
            }

            clearInterval(intId_1);
            return prev;
          });
        }, dismissIn / 200);
        timer.current = intId_1;
      }
    };

    React__namespace.useEffect(function () {
      if (dismissIn) {
        handleStartTimer();
      }

      setDirection('active');
    }, []);
    React__namespace.useEffect(function () {
      if (width === 0 && indexNumber === 0) {
        handleCloseToast();
      }
    }, [width]);
    var className = wrapClassName + " Toast--" + appearance + " alertService-" + direction;
    var autoHideBarOpacity = appearance === 'info' ? 'rgb(0,0,0,50%)' : 'rgb(0,0,0,40%)';
    return /*#__PURE__*/React__namespace.createElement("div", {
      id: wrapId,
      onMouseEnter: handlePauseTimer,
      onMouseLeave: handleStartTimer,
      className: className,
      style: toastStyle
    }, autoHiderBar && dismissIn && indexNumber === 0 && /*#__PURE__*/React__namespace.createElement("div", __assign({}, autoHiderBarProps, {
      style: __assign(__assign({
        width: width + "%"
      }, autoHiderBarStyle), {
        backgroundColor: autoHideBarOpacity
      })
    })), /*#__PURE__*/React__namespace.createElement(designSystem.Toast, __assign({}, alert, {
      onClose: handleCloseToast,
      "data-test": wrapId,
      className: toastClassName
    })));
  };

  var AlertContainer = function AlertContainer(props) {
    var pubSubService = props.pubSubService,
        defaultConfig = props.defaultConfig;
    var transitionDelay = defaultConfig.transitionDelay,
        position = defaultConfig.position;

    var _a = React__namespace.useState([]),
        alerts = _a[0],
        setAlerts = _a[1];

    var addToast = function addToast(toast) {
      setAlerts(function (existing) {
        return __spreadArrays([toast], existing);
      });
    };

    var removeToast = function removeToast(toastId) {
      var filteredAlerts = alerts.slice().filter(function (alert) {
        return alert.toastId !== toastId;
      });
      setAlerts(filteredAlerts);
    };

    React__namespace.useEffect(function () {
      var addUnsub = pubSubService.subscribe('add-toast', addToast);
      var removeUnsub = pubSubService.subscribe('remove-toast', removeToast);
      return function () {
        addUnsub();
        removeUnsub();
      };
    }, []);

    var dismiss = function dismiss(id, onClose) {
      removeToast(id);
      return onClose ? onClose() : null;
    };

    var getDismissIn = function getDismissIn(alert) {
      var dismissIn;

      if (alert.dismissIn) {
        dismissIn = alert.dismissIn + transitionDelay;
      }

      return dismissIn;
    };

    return /*#__PURE__*/React__namespace.createElement(reactAddonsCssTransitionGroup, {
      transitionName: "alertService",
      transitionEnterTimeout: transitionDelay,
      transitionLeaveTimeout: transitionDelay
    }, alerts.length > 0 ? alerts.map(function (alert, i, alertsStack) {
      return /*#__PURE__*/React__namespace.createElement(AlertComponent, {
        zIndex: alertsStack.length - i,
        leftOrRight: position,
        wrapId: "alert-toast__" + alert.toastId,
        alert: __assign(__assign(__assign({}, defaultConfig), alert), {
          dismissIn: getDismissIn(alert)
        }),
        key: alert.toastId,
        indexNumber: i,
        wrapClassName: "alertService",
        onDismiss: dismiss
      });
    }) : null);
  };

  var defaultConf = {
    autoHiderBar: {
      style: {
        height: '4px',
        borderTopRightRadius: '2px',
        borderBottomRightRadius: '2px',
        backgroundColor: 'rgb(0,0,0,40%)'
      }
    },
    position: 'left',
    transitionDelay: 240,
    appearance: 'alert',
    title: 'Something went wrong.',
    dismissIn: 5000
  };

  var AlertService = function () {
    function AlertService(config) {
      var _this = this;

      if (config === void 0) {
        config = {};
      }

      this.createDivContainer = function () {
        _this.elem = document.createElement('div');

        _this.elem.setAttribute('id', 'alertService-container');

        _this.elem.style.position = 'relative';
        _this.elem.style.zIndex = '2147483647';
      };

      this.renderAlert = function (config) {
        var fullConf = __assign(__assign({}, _this.config), config);

        _this.removeAlertService();

        document.body.appendChild(_this.elem);
        ReactDOM__default["default"].render( /*#__PURE__*/React__namespace.createElement(AlertContainer, {
          pubSubService: _this.pubSubService,
          defaultConfig: fullConf
        }), _this.elem);
      };

      this.removeAlertService = function () {
        var removed = ReactDOM__default["default"].unmountComponentAtNode(_this.elem);
        return removed;
      };

      this.remove = function (toastId) {
        return _this.pubSubService.publish('remove-toast', toastId);
      };

      this.add = function (alert) {
        var toast = alert;

        if (alert.autoDismiss) {
          toast.dismissIn = toast.dismissIn || 5000;
        }

        var toastId = _this.pubSubService.publish('add-toast', toast);

        return toastId;
      };

      this.createDivContainer();
      this.pubSubService = pubSub();
      this.config = __assign(__assign({}, defaultConf), config);
      this.renderAlert(this.config);
    }

    return AlertService;
  }();

  exports.AlertService = AlertService;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
