import {
  require_prop_types
} from "./chunk-VER6FNRX.js";
import {
  require_react
} from "./chunk-67XTWVEJ.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/@stripe/react-stripe-js/dist/react-stripe.esm.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var usePrevious = function usePrevious2(value) {
  var ref = import_react.default.useRef(value);
  import_react.default.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var isUnknownObject = function isUnknownObject2(raw) {
  return raw !== null && _typeof(raw) === "object";
};
var isPromise = function isPromise2(raw) {
  return isUnknownObject(raw) && typeof raw.then === "function";
};
var isStripe = function isStripe2(raw) {
  return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
};
var PLAIN_OBJECT_STR = "[object Object]";
var isEqual = function isEqual2(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray)
    return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject)
    return false;
  if (!leftPlainObject && !leftArray)
    return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length)
    return false;
  var keySet = {};
  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }
  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }
  var allKeys = Object.keys(keySet);
  if (allKeys.length !== leftKeys.length) {
    return false;
  }
  var l = left;
  var r = right;
  var pred = function pred2(key) {
    return isEqual2(l[key], r[key]);
  };
  return allKeys.every(pred);
};
var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }
  return Object.keys(options).reduce(function(newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }
      return newOptions;
    }
    if (!isUpdated) {
      return newOptions;
    }
    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};
var INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var validateStripe = function validateStripe2(maybeStripe) {
  var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR;
  if (maybeStripe === null || isStripe(maybeStripe)) {
    return maybeStripe;
  }
  throw new Error(errorMsg);
};
var parseStripeProp = function parseStripeProp2(raw) {
  var errorMsg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : INVALID_STRIPE_ERROR;
  if (isPromise(raw)) {
    return {
      tag: "async",
      stripePromise: Promise.resolve(raw).then(function(result) {
        return validateStripe(result, errorMsg);
      })
    };
  }
  var stripe = validateStripe(raw, errorMsg);
  if (stripe === null) {
    return {
      tag: "empty"
    };
  }
  return {
    tag: "sync",
    stripe
  };
};
var registerWithStripeJs = function registerWithStripeJs2(stripe) {
  if (!stripe || !stripe._registerWrapper || !stripe.registerAppInfo) {
    return;
  }
  stripe._registerWrapper({
    name: "react-stripe-js",
    version: "2.3.2"
  });
  stripe.registerAppInfo({
    name: "react-stripe-js",
    version: "2.3.2",
    url: "https://stripe.com/docs/stripe-js/react"
  });
};
var _excluded = ["on", "session"];
var CustomCheckoutSdkContext = import_react.default.createContext(null);
CustomCheckoutSdkContext.displayName = "CustomCheckoutSdkContext";
var parseCustomCheckoutSdkContext = function parseCustomCheckoutSdkContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CustomCheckoutProvider> provider."));
  }
  return ctx;
};
var CustomCheckoutContext = import_react.default.createContext(null);
CustomCheckoutContext.displayName = "CustomCheckoutContext";
var extractCustomCheckoutContextValue = function extractCustomCheckoutContextValue2(customCheckoutSdk, sessionState) {
  if (!customCheckoutSdk) {
    return null;
  }
  var _on = customCheckoutSdk.on, _session = customCheckoutSdk.session, actions = _objectWithoutProperties(customCheckoutSdk, _excluded);
  if (!sessionState) {
    return _objectSpread2(_objectSpread2({}, actions), customCheckoutSdk.session());
  }
  return _objectSpread2(_objectSpread2({}, actions), sessionState);
};
var INVALID_STRIPE_ERROR$1 = "Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var CustomCheckoutProvider = function CustomCheckoutProvider2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = import_react.default.useMemo(function() {
    return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR$1);
  }, [rawStripeProp]);
  var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), session = _React$useState2[0], setSession = _React$useState2[1];
  var _React$useState3 = import_react.default.useState(function() {
    return {
      stripe: parsed.tag === "sync" ? parsed.stripe : null,
      customCheckoutSdk: null
    };
  }), _React$useState4 = _slicedToArray(_React$useState3, 2), ctx = _React$useState4[0], setContext = _React$useState4[1];
  var safeSetContext = function safeSetContext2(stripe, customCheckoutSdk) {
    setContext(function(ctx2) {
      if (ctx2.stripe && ctx2.customCheckoutSdk) {
        return ctx2;
      }
      return {
        stripe,
        customCheckoutSdk
      };
    });
  };
  var initCustomCheckoutCalledRef = import_react.default.useRef(false);
  import_react.default.useEffect(function() {
    var isMounted = true;
    if (parsed.tag === "async" && !ctx.stripe) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe && isMounted && !initCustomCheckoutCalledRef.current) {
          initCustomCheckoutCalledRef.current = true;
          stripe.initCustomCheckout(options).then(function(customCheckoutSdk) {
            if (customCheckoutSdk) {
              safeSetContext(stripe, customCheckoutSdk);
              customCheckoutSdk.on("change", setSession);
            }
          });
        }
      });
    } else if (parsed.tag === "sync" && parsed.stripe && !initCustomCheckoutCalledRef.current) {
      initCustomCheckoutCalledRef.current = true;
      parsed.stripe.initCustomCheckout(options).then(function(customCheckoutSdk) {
        if (customCheckoutSdk) {
          safeSetContext(parsed.stripe, customCheckoutSdk);
          customCheckoutSdk.on("change", setSession);
        }
      });
    }
    return function() {
      isMounted = false;
    };
  }, [parsed, ctx, options, setSession]);
  var prevStripe = usePrevious(rawStripeProp);
  import_react.default.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  import_react.default.useEffect(function() {
    var _prevOptions$elements, _options$elementsOpti;
    if (!ctx.customCheckoutSdk) {
      return;
    }
    if (options.clientSecret && !isUnknownObject(prevOptions) && !isEqual(options.clientSecret, prevOptions.clientSecret)) {
      console.warn("Unsupported prop change: options.client_secret is not a mutable property.");
    }
    var previousAppearance = prevOptions === null || prevOptions === void 0 ? void 0 : (_prevOptions$elements = prevOptions.elementsOptions) === null || _prevOptions$elements === void 0 ? void 0 : _prevOptions$elements.appearance;
    var currentAppearance = options === null || options === void 0 ? void 0 : (_options$elementsOpti = options.elementsOptions) === null || _options$elementsOpti === void 0 ? void 0 : _options$elementsOpti.appearance;
    if (currentAppearance && !isEqual(currentAppearance, previousAppearance)) {
      ctx.customCheckoutSdk.changeAppearance(currentAppearance);
    }
  }, [options, prevOptions, ctx.customCheckoutSdk]);
  import_react.default.useEffect(function() {
    registerWithStripeJs(ctx.stripe);
  }, [ctx.stripe]);
  var customCheckoutContextValue = import_react.default.useMemo(function() {
    return extractCustomCheckoutContextValue(ctx.customCheckoutSdk, session);
  }, [ctx.customCheckoutSdk, session]);
  if (!ctx.customCheckoutSdk) {
    return null;
  }
  return import_react.default.createElement(CustomCheckoutSdkContext.Provider, {
    value: ctx
  }, import_react.default.createElement(CustomCheckoutContext.Provider, {
    value: customCheckoutContextValue
  }, children));
};
CustomCheckoutProvider.propTypes = {
  stripe: import_prop_types.default.any,
  options: import_prop_types.default.shape({
    clientSecret: import_prop_types.default.string.isRequired,
    elementsOptions: import_prop_types.default.object
  }).isRequired
};
var useCustomCheckoutSdkContextWithUseCase = function useCustomCheckoutSdkContextWithUseCase2(useCaseString) {
  var ctx = import_react.default.useContext(CustomCheckoutSdkContext);
  return parseCustomCheckoutSdkContext(ctx, useCaseString);
};
var useElementsOrCustomCheckoutSdkContextWithUseCase = function useElementsOrCustomCheckoutSdkContextWithUseCase2(useCaseString) {
  var customCheckoutSdkContext = import_react.default.useContext(CustomCheckoutSdkContext);
  var elementsContext = import_react.default.useContext(ElementsContext);
  if (customCheckoutSdkContext && elementsContext) {
    throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CustomCheckoutProvider> and <Elements> providers."));
  }
  if (customCheckoutSdkContext) {
    return parseCustomCheckoutSdkContext(customCheckoutSdkContext, useCaseString);
  }
  return parseElementsContext(elementsContext, useCaseString);
};
var useCustomCheckout = function useCustomCheckout2() {
  useCustomCheckoutSdkContextWithUseCase("calls useCustomCheckout()");
  var ctx = import_react.default.useContext(CustomCheckoutContext);
  if (!ctx) {
    throw new Error("Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.");
  }
  return ctx;
};
var ElementsContext = import_react.default.createContext(null);
ElementsContext.displayName = "ElementsContext";
var parseElementsContext = function parseElementsContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
var CartElementContext = import_react.default.createContext(null);
CartElementContext.displayName = "CartElementContext";
var parseCartElementContext = function parseCartElementContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
var Elements = function Elements2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = import_react.default.useMemo(function() {
    return parseStripeProp(rawStripeProp);
  }, [rawStripeProp]);
  var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), cart = _React$useState2[0], setCart2 = _React$useState2[1];
  var _React$useState3 = import_react.default.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), cartState = _React$useState4[0], setCartState2 = _React$useState4[1];
  var _React$useState5 = import_react.default.useState(function() {
    return {
      stripe: parsed.tag === "sync" ? parsed.stripe : null,
      elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
    };
  }), _React$useState6 = _slicedToArray(_React$useState5, 2), ctx = _React$useState6[0], setContext = _React$useState6[1];
  import_react.default.useEffect(function() {
    var isMounted = true;
    var safeSetContext = function safeSetContext2(stripe) {
      setContext(function(ctx2) {
        if (ctx2.stripe)
          return ctx2;
        return {
          stripe,
          elements: stripe.elements(options)
        };
      });
    };
    if (parsed.tag === "async" && !ctx.stripe) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe && isMounted) {
          safeSetContext(stripe);
        }
      });
    } else if (parsed.tag === "sync" && !ctx.stripe) {
      safeSetContext(parsed.stripe);
    }
    return function() {
      isMounted = false;
    };
  }, [parsed, ctx, options]);
  var prevStripe = usePrevious(rawStripeProp);
  import_react.default.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  import_react.default.useEffect(function() {
    if (!ctx.elements) {
      return;
    }
    var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
    if (updates) {
      ctx.elements.update(updates);
    }
  }, [options, prevOptions, ctx.elements]);
  import_react.default.useEffect(function() {
    registerWithStripeJs(ctx.stripe);
  }, [ctx.stripe]);
  return import_react.default.createElement(ElementsContext.Provider, {
    value: ctx
  }, import_react.default.createElement(CartElementContext.Provider, {
    value: {
      cart,
      setCart: setCart2,
      cartState,
      setCartState: setCartState2
    }
  }, children));
};
Elements.propTypes = {
  stripe: import_prop_types.default.any,
  options: import_prop_types.default.object
};
var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
  var ctx = import_react.default.useContext(ElementsContext);
  return parseElementsContext(ctx, useCaseMessage);
};
var DUMMY_CART_ELEMENT_CONTEXT = {
  cart: null,
  cartState: null,
  setCart: function setCart() {
  },
  setCartState: function setCartState() {
  }
};
var useCartElementContextWithUseCase = function useCartElementContextWithUseCase2(useCaseMessage) {
  var isInCustomCheckout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var ctx = import_react.default.useContext(CartElementContext);
  if (isInCustomCheckout) {
    return DUMMY_CART_ELEMENT_CONTEXT;
  }
  return parseCartElementContext(ctx, useCaseMessage);
};
var useElements = function useElements2() {
  var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
  return elements;
};
var useStripe = function useStripe2() {
  var _useElementsOrCustomC = useElementsOrCustomCheckoutSdkContextWithUseCase("calls useStripe()"), stripe = _useElementsOrCustomC.stripe;
  return stripe;
};
var useCartElement = function useCartElement2() {
  var _useCartElementContex = useCartElementContextWithUseCase("calls useCartElement()"), cart = _useCartElementContex.cart;
  return cart;
};
var useCartElementState = function useCartElementState2() {
  var _useCartElementContex2 = useCartElementContextWithUseCase("calls useCartElementState()"), cartState = _useCartElementContex2.cartState;
  return cartState;
};
var ElementsConsumer = function ElementsConsumer2(_ref2) {
  var children = _ref2.children;
  var ctx = useElementsContextWithUseCase("mounts <ElementsConsumer>");
  return children(ctx);
};
ElementsConsumer.propTypes = {
  children: import_prop_types.default.func.isRequired
};
var useAttachEvent = function useAttachEvent2(element, event, cb) {
  var cbDefined = !!cb;
  var cbRef = import_react.default.useRef(cb);
  import_react.default.useEffect(function() {
    cbRef.current = cb;
  }, [cb]);
  import_react.default.useEffect(function() {
    if (!cbDefined || !element) {
      return function() {
      };
    }
    var decoratedCb = function decoratedCb2() {
      if (cbRef.current) {
        cbRef.current.apply(cbRef, arguments);
      }
    };
    element.on(event, decoratedCb);
    return function() {
      element.off(event, decoratedCb);
    };
  }, [cbDefined, event, element, cbRef]);
};
var capitalized = function capitalized2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var createElementComponent = function createElementComponent2(type, isServer2) {
  var displayName = "".concat(capitalized(type), "Element");
  var ClientElement = function ClientElement2(_ref) {
    var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onCheckout = _ref.onCheckout, onLineItemClick = _ref.onLineItemClick, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange;
    var ctx = useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var elements = "elements" in ctx ? ctx.elements : null;
    var customCheckoutSdk = "customCheckoutSdk" in ctx ? ctx.customCheckoutSdk : null;
    var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
    var elementRef = import_react.default.useRef(null);
    var domNode = import_react.default.useRef(null);
    var _useCartElementContex = useCartElementContextWithUseCase("mounts <".concat(displayName, ">"), "customCheckoutSdk" in ctx), setCart2 = _useCartElementContex.setCart, setCartState2 = _useCartElementContex.setCartState;
    useAttachEvent(element, "blur", onBlur);
    useAttachEvent(element, "focus", onFocus);
    useAttachEvent(element, "escape", onEscape);
    useAttachEvent(element, "click", onClick);
    useAttachEvent(element, "loaderror", onLoadError);
    useAttachEvent(element, "loaderstart", onLoaderStart);
    useAttachEvent(element, "networkschange", onNetworksChange);
    useAttachEvent(element, "lineitemclick", onLineItemClick);
    useAttachEvent(element, "confirm", onConfirm);
    useAttachEvent(element, "cancel", onCancel);
    useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
    useAttachEvent(element, "shippingratechange", onShippingRateChange);
    var readyCallback;
    if (type === "cart") {
      readyCallback = function readyCallback2(event) {
        setCartState2(event);
        onReady && onReady(event);
      };
    } else if (onReady) {
      if (type === "expressCheckout") {
        readyCallback = onReady;
      } else {
        readyCallback = function readyCallback2() {
          onReady(element);
        };
      }
    }
    useAttachEvent(element, "ready", readyCallback);
    var changeCallback = type === "cart" ? function(event) {
      setCartState2(event);
      onChange && onChange(event);
    } : onChange;
    useAttachEvent(element, "change", changeCallback);
    var checkoutCallback = type === "cart" ? function(event) {
      setCartState2(event);
      onCheckout && onCheckout(event);
    } : onCheckout;
    useAttachEvent(element, "checkout", checkoutCallback);
    import_react.default.useLayoutEffect(function() {
      if (elementRef.current === null && domNode.current !== null && (elements || customCheckoutSdk)) {
        var newElement = null;
        if (customCheckoutSdk) {
          newElement = customCheckoutSdk.createElement(type, options);
        } else if (elements) {
          newElement = elements.create(type, options);
        }
        if (type === "cart" && setCart2) {
          setCart2(newElement);
        }
        elementRef.current = newElement;
        setElement(newElement);
        if (newElement) {
          newElement.mount(domNode.current);
        }
      }
    }, [elements, customCheckoutSdk, options, setCart2]);
    var prevOptions = usePrevious(options);
    import_react.default.useEffect(function() {
      if (!elementRef.current) {
        return;
      }
      var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
      if (updates) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    import_react.default.useLayoutEffect(function() {
      return function() {
        if (elementRef.current && typeof elementRef.current.destroy === "function") {
          try {
            elementRef.current.destroy();
            elementRef.current = null;
          } catch (error) {
          }
        }
      };
    }, []);
    return import_react.default.createElement("div", {
      id,
      className,
      ref: domNode
    });
  };
  var ServerElement = function ServerElement2(props) {
    var ctx = useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    useCartElementContextWithUseCase("mounts <".concat(displayName, ">"), "customCheckoutSdk" in ctx);
    var id = props.id, className = props.className;
    return import_react.default.createElement("div", {
      id,
      className
    });
  };
  var Element = isServer2 ? ServerElement : ClientElement;
  Element.propTypes = {
    id: import_prop_types.default.string,
    className: import_prop_types.default.string,
    onChange: import_prop_types.default.func,
    onBlur: import_prop_types.default.func,
    onFocus: import_prop_types.default.func,
    onReady: import_prop_types.default.func,
    onEscape: import_prop_types.default.func,
    onClick: import_prop_types.default.func,
    onLoadError: import_prop_types.default.func,
    onLoaderStart: import_prop_types.default.func,
    onNetworksChange: import_prop_types.default.func,
    onCheckout: import_prop_types.default.func,
    onLineItemClick: import_prop_types.default.func,
    onConfirm: import_prop_types.default.func,
    onCancel: import_prop_types.default.func,
    onShippingAddressChange: import_prop_types.default.func,
    onShippingRateChange: import_prop_types.default.func,
    options: import_prop_types.default.object
  };
  Element.displayName = displayName;
  Element.__elementType = type;
  return Element;
};
var isServer = typeof window === "undefined";
var EmbeddedCheckoutContext = import_react.default.createContext(null);
EmbeddedCheckoutContext.displayName = "EmbeddedCheckoutProviderContext";
var useEmbeddedCheckoutContext = function useEmbeddedCheckoutContext2() {
  var ctx = import_react.default.useContext(EmbeddedCheckoutContext);
  if (!ctx) {
    throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
  }
  return ctx;
};
var INVALID_STRIPE_ERROR$2 = "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = import_react.default.useMemo(function() {
    return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR$2);
  }, [rawStripeProp]);
  var embeddedCheckoutPromise = import_react.default.useRef(null);
  var loadedStripe = import_react.default.useRef(null);
  var _React$useState = import_react.default.useState({
    embeddedCheckout: null
  }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
  import_react.default.useEffect(function() {
    if (loadedStripe.current || embeddedCheckoutPromise.current) {
      return;
    }
    var setStripeAndInitEmbeddedCheckout = function setStripeAndInitEmbeddedCheckout2(stripe) {
      if (loadedStripe.current || embeddedCheckoutPromise.current)
        return;
      loadedStripe.current = stripe;
      embeddedCheckoutPromise.current = loadedStripe.current.initEmbeddedCheckout(options).then(function(embeddedCheckout) {
        setContext({
          embeddedCheckout
        });
      });
    };
    if (parsed.tag === "async" && !loadedStripe.current && options.clientSecret) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe) {
          setStripeAndInitEmbeddedCheckout(stripe);
        }
      });
    } else if (parsed.tag === "sync" && !loadedStripe.current && options.clientSecret) {
      setStripeAndInitEmbeddedCheckout(parsed.stripe);
    }
  }, [parsed, options, ctx, loadedStripe]);
  import_react.default.useEffect(function() {
    return function() {
      if (ctx.embeddedCheckout) {
        embeddedCheckoutPromise.current = null;
        ctx.embeddedCheckout.destroy();
      } else if (embeddedCheckoutPromise.current) {
        embeddedCheckoutPromise.current.then(function() {
          embeddedCheckoutPromise.current = null;
          if (ctx.embeddedCheckout) {
            ctx.embeddedCheckout.destroy();
          }
        });
      }
    };
  }, [ctx.embeddedCheckout]);
  import_react.default.useEffect(function() {
    registerWithStripeJs(loadedStripe);
  }, [loadedStripe]);
  var prevStripe = usePrevious(rawStripeProp);
  import_react.default.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  import_react.default.useEffect(function() {
    if (prevOptions == null) {
      return;
    }
    if (options == null) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
      return;
    }
    if (prevOptions.clientSecret != null && options.clientSecret !== prevOptions.clientSecret) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
    }
    if (prevOptions.onComplete != null && options.onComplete !== prevOptions.onComplete) {
      console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.");
    }
  }, [prevOptions, options]);
  return import_react.default.createElement(EmbeddedCheckoutContext.Provider, {
    value: ctx
  }, children);
};
var EmbeddedCheckoutClientElement = function EmbeddedCheckoutClientElement2(_ref) {
  var id = _ref.id, className = _ref.className;
  var _useEmbeddedCheckoutC = useEmbeddedCheckoutContext(), embeddedCheckout = _useEmbeddedCheckoutC.embeddedCheckout;
  var isMounted = import_react.default.useRef(false);
  var domNode = import_react.default.useRef(null);
  import_react.default.useLayoutEffect(function() {
    if (!isMounted.current && embeddedCheckout && domNode.current !== null) {
      embeddedCheckout.mount(domNode.current);
      isMounted.current = true;
    }
    return function() {
      if (isMounted.current && embeddedCheckout) {
        try {
          embeddedCheckout.unmount();
          isMounted.current = false;
        } catch (e) {
        }
      }
    };
  }, [embeddedCheckout]);
  return import_react.default.createElement("div", {
    ref: domNode,
    id,
    className
  });
};
var EmbeddedCheckoutServerElement = function EmbeddedCheckoutServerElement2(_ref2) {
  var id = _ref2.id, className = _ref2.className;
  useEmbeddedCheckoutContext();
  return import_react.default.createElement("div", {
    id,
    className
  });
};
var EmbeddedCheckout = isServer ? EmbeddedCheckoutServerElement : EmbeddedCheckoutClientElement;
var AuBankAccountElement = createElementComponent("auBankAccount", isServer);
var CardElement = createElementComponent("card", isServer);
var CardNumberElement = createElementComponent("cardNumber", isServer);
var CardExpiryElement = createElementComponent("cardExpiry", isServer);
var CardCvcElement = createElementComponent("cardCvc", isServer);
var FpxBankElement = createElementComponent("fpxBank", isServer);
var IbanElement = createElementComponent("iban", isServer);
var IdealBankElement = createElementComponent("idealBank", isServer);
var P24BankElement = createElementComponent("p24Bank", isServer);
var EpsBankElement = createElementComponent("epsBank", isServer);
var PaymentElement = createElementComponent("payment", isServer);
var ExpressCheckoutElement = createElementComponent("expressCheckout", isServer);
var PaymentRequestButtonElement = createElementComponent("paymentRequestButton", isServer);
var LinkAuthenticationElement = createElementComponent("linkAuthentication", isServer);
var AddressElement = createElementComponent("address", isServer);
var ShippingAddressElement = createElementComponent("shippingAddress", isServer);
var CartElement = createElementComponent("cart", isServer);
var PaymentMethodMessagingElement = createElementComponent("paymentMethodMessaging", isServer);
var AffirmMessageElement = createElementComponent("affirmMessage", isServer);
var AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", isServer);
export {
  AddressElement,
  AffirmMessageElement,
  AfterpayClearpayMessageElement,
  AuBankAccountElement,
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  CartElement,
  CustomCheckoutProvider,
  Elements,
  ElementsConsumer,
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
  EpsBankElement,
  ExpressCheckoutElement,
  FpxBankElement,
  IbanElement,
  IdealBankElement,
  LinkAuthenticationElement,
  P24BankElement,
  PaymentElement,
  PaymentMethodMessagingElement,
  PaymentRequestButtonElement,
  ShippingAddressElement,
  useCartElement,
  useCartElementState,
  useCustomCheckout,
  useElements,
  useStripe
};
//# sourceMappingURL=@stripe_react-stripe-js.js.map
