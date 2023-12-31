import {
  require_react_dom
} from "./chunk-MDIHFEFG.js";
import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react19 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t15, e6, n7) => e6 in t15 ? i(t15, e6, { enumerable: true, configurable: true, writable: true, value: n7 }) : t15[e6] = n7;
var r = (t15, e6, n7) => (d(t15, typeof e6 != "symbol" ? e6 + "" : e6, n7), n7);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e6) {
    this.current !== e6 && (this.handoffState = "pending", this.currentId = 0, this.current = e6);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e6, f14) => {
  s.isServer ? (0, import_react.useEffect)(e6, f14) : (0, import_react.useLayoutEffect)(e6, f14);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e6) {
  let r10 = (0, import_react2.useRef)(e6);
  return l(() => {
    r10.current = e6;
  }, [e6]), r10;
}

// node_modules/@headlessui/react/dist/hooks/use-computed.js
function i2(e6, o12) {
  let [u10, t15] = (0, import_react3.useState)(e6), r10 = s2(e6);
  return l(() => t15(r10.current), [r10, t15, ...o12]), u10;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e6) {
  typeof queueMicrotask == "function" ? queueMicrotask(e6) : Promise.resolve().then(e6).catch((o12) => setTimeout(() => {
    throw o12;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n7 = [], r10 = { addEventListener(e6, t15, s17, a13) {
    return e6.addEventListener(t15, s17, a13), r10.add(() => e6.removeEventListener(t15, s17, a13));
  }, requestAnimationFrame(...e6) {
    let t15 = requestAnimationFrame(...e6);
    return r10.add(() => cancelAnimationFrame(t15));
  }, nextFrame(...e6) {
    return r10.requestAnimationFrame(() => r10.requestAnimationFrame(...e6));
  }, setTimeout(...e6) {
    let t15 = setTimeout(...e6);
    return r10.add(() => clearTimeout(t15));
  }, microTask(...e6) {
    let t15 = { current: true };
    return t3(() => {
      t15.current && e6[0]();
    }), r10.add(() => {
      t15.current = false;
    });
  }, style(e6, t15, s17) {
    let a13 = e6.style.getPropertyValue(t15);
    return Object.assign(e6.style, { [t15]: s17 }), this.add(() => {
      Object.assign(e6.style, { [t15]: a13 });
    });
  }, group(e6) {
    let t15 = o2();
    return e6(t15), this.add(() => t15.dispose());
  }, add(e6) {
    return n7.push(e6), () => {
      let t15 = n7.indexOf(e6);
      if (t15 >= 0)
        for (let s17 of n7.splice(t15, 1))
          s17();
    };
  }, dispose() {
    for (let e6 of n7.splice(0))
      e6();
  } };
  return r10;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e6] = (0, import_react4.useState)(o2);
  return (0, import_react4.useEffect)(() => () => e6.dispose(), [e6]), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react5 = __toESM(require_react(), 1);
var o4 = function(t15) {
  let e6 = s2(t15);
  return import_react5.default.useCallback((...r10) => e6.current(...r10), [e6]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l2() {
  let [e6, f14] = (0, import_react6.useState)(s.isHandoffComplete);
  return e6 && s.isHandoffComplete === false && f14(false), (0, import_react6.useEffect)(() => {
    e6 !== true && f14(true);
  }, [e6]), (0, import_react6.useEffect)(() => s.handoff(), []), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o6;
var I = (o6 = import_react7.default.useId) != null ? o6 : function() {
  let n7 = l2(), [e6, u10] = import_react7.default.useState(n7 ? () => s.nextId() : null);
  return l(() => {
    e6 === null && u10(s.nextId());
  }, [e6]), e6 != null ? "" + e6 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r10, n7, ...a13) {
  if (r10 in n7) {
    let e6 = n7[r10];
    return typeof e6 == "function" ? e6(...a13) : e6;
  }
  let t15 = new Error(`Tried to handle "${r10}" but there is no handler defined. Only defined handlers are: ${Object.keys(n7).map((e6) => `"${e6}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t15, u), t15;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r10) {
  return s.isServer ? null : r10 instanceof Node ? r10.ownerDocument : r10 != null && r10.hasOwnProperty("current") && r10.current instanceof Node ? r10.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e6) => `${e6}:not([tabindex='-1'])`).join(",");
var M = ((n7) => (n7[n7.First = 1] = "First", n7[n7.Previous = 2] = "Previous", n7[n7.Next = 4] = "Next", n7[n7.Last = 8] = "Last", n7[n7.WrapAround = 16] = "WrapAround", n7[n7.NoScroll = 32] = "NoScroll", n7))(M || {});
var N = ((o12) => (o12[o12.Error = 0] = "Error", o12[o12.Overflow = 1] = "Overflow", o12[o12.Success = 2] = "Success", o12[o12.Underflow = 3] = "Underflow", o12))(N || {});
var F = ((t15) => (t15[t15.Previous = -1] = "Previous", t15[t15.Next = 1] = "Next", t15))(F || {});
function f(e6 = document.body) {
  return e6 == null ? [] : Array.from(e6.querySelectorAll(c2)).sort((r10, t15) => Math.sign((r10.tabIndex || Number.MAX_SAFE_INTEGER) - (t15.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t15) => (t15[t15.Strict = 0] = "Strict", t15[t15.Loose = 1] = "Loose", t15))(T || {});
function h(e6, r10 = 0) {
  var t15;
  return e6 === ((t15 = e(e6)) == null ? void 0 : t15.body) ? false : u(r10, { [0]() {
    return e6.matches(c2);
  }, [1]() {
    let l11 = e6;
    for (; l11 !== null; ) {
      if (l11.matches(c2))
        return true;
      l11 = l11.parentElement;
    }
    return false;
  } });
}
function D(e6) {
  let r10 = e(e6);
  o2().nextFrame(() => {
    r10 && !h(r10.activeElement, 0) && y(e6);
  });
}
var w = ((t15) => (t15[t15.Keyboard = 0] = "Keyboard", t15[t15.Mouse = 1] = "Mouse", t15))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e6) => {
  e6.metaKey || e6.altKey || e6.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e6) => {
  e6.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e6.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e6) {
  e6 == null || e6.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e6) {
  var r10, t15;
  return (t15 = (r10 = e6 == null ? void 0 : e6.matches) == null ? void 0 : r10.call(e6, S)) != null ? t15 : false;
}
function I2(e6, r10 = (t15) => t15) {
  return e6.slice().sort((t15, l11) => {
    let o12 = r10(t15), i9 = r10(l11);
    if (o12 === null || i9 === null)
      return 0;
    let n7 = o12.compareDocumentPosition(i9);
    return n7 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n7 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e6, r10) {
  return O(f(), r10, { relativeTo: e6 });
}
function O(e6, r10, { sorted: t15 = true, relativeTo: l11 = null, skipElements: o12 = [] } = {}) {
  let i9 = Array.isArray(e6) ? e6.length > 0 ? e6[0].ownerDocument : document : e6.ownerDocument, n7 = Array.isArray(e6) ? t15 ? I2(e6) : e6 : f(e6);
  o12.length > 0 && n7.length > 1 && (n7 = n7.filter((s17) => !o12.includes(s17))), l11 = l11 != null ? l11 : i9.activeElement;
  let E8 = (() => {
    if (r10 & 5)
      return 1;
    if (r10 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x7 = (() => {
    if (r10 & 1)
      return 0;
    if (r10 & 2)
      return Math.max(0, n7.indexOf(l11)) - 1;
    if (r10 & 4)
      return Math.max(0, n7.indexOf(l11)) + 1;
    if (r10 & 8)
      return n7.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p9 = r10 & 32 ? { preventScroll: true } : {}, d14 = 0, a13 = n7.length, u10;
  do {
    if (d14 >= a13 || d14 + a13 <= 0)
      return 0;
    let s17 = x7 + d14;
    if (r10 & 16)
      s17 = (s17 + a13) % a13;
    else {
      if (s17 < 0)
        return 3;
      if (s17 >= a13)
        return 1;
    }
    u10 = n7[s17], u10 == null || u10.focus(p9), d14 += E8;
  } while (u10 !== i9.activeElement);
  return r10 & 6 && H(u10) && u10.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react8 = __toESM(require_react(), 1);
function d2(e6, r10, n7) {
  let o12 = s2(r10);
  (0, import_react8.useEffect)(() => {
    function t15(u10) {
      o12.current(u10);
    }
    return document.addEventListener(e6, t15, n7), () => document.removeEventListener(e6, t15, n7);
  }, [e6, n7]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react9 = __toESM(require_react(), 1);
function s5(e6, r10, n7) {
  let o12 = s2(r10);
  (0, import_react9.useEffect)(() => {
    function t15(i9) {
      o12.current(i9);
    }
    return window.addEventListener(e6, t15, n7), () => window.removeEventListener(e6, t15, n7);
  }, [e6, n7]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function h2(s17, m11, a13 = true) {
  let i9 = (0, import_react10.useRef)(false);
  (0, import_react10.useEffect)(() => {
    requestAnimationFrame(() => {
      i9.current = a13;
    });
  }, [a13]);
  function c15(e6, r10) {
    if (!i9.current || e6.defaultPrevented)
      return;
    let t15 = r10(e6);
    if (t15 === null || !t15.getRootNode().contains(t15) || !t15.isConnected)
      return;
    let E8 = function u10(n7) {
      return typeof n7 == "function" ? u10(n7()) : Array.isArray(n7) || n7 instanceof Set ? n7 : [n7];
    }(s17);
    for (let u10 of E8) {
      if (u10 === null)
        continue;
      let n7 = u10 instanceof HTMLElement ? u10 : u10.current;
      if (n7 != null && n7.contains(t15) || e6.composed && e6.composedPath().includes(n7))
        return;
    }
    return !h(t15, T.Loose) && t15.tabIndex !== -1 && e6.preventDefault(), m11(e6, t15);
  }
  let o12 = (0, import_react10.useRef)(null);
  d2("pointerdown", (e6) => {
    var r10, t15;
    i9.current && (o12.current = ((t15 = (r10 = e6.composedPath) == null ? void 0 : r10.call(e6)) == null ? void 0 : t15[0]) || e6.target);
  }, true), d2("mousedown", (e6) => {
    var r10, t15;
    i9.current && (o12.current = ((t15 = (r10 = e6.composedPath) == null ? void 0 : r10.call(e6)) == null ? void 0 : t15[0]) || e6.target);
  }, true), d2("click", (e6) => {
    o12.current && (c15(e6, () => o12.current), o12.current = null);
  }, true), d2("touchend", (e6) => c15(e6, () => e6.target instanceof HTMLElement ? e6.target : null), true), s5("blur", (e6) => c15(e6, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react11 = __toESM(require_react(), 1);
function i3(t15) {
  var n7;
  if (t15.type)
    return t15.type;
  let e6 = (n7 = t15.as) != null ? n7 : "button";
  if (typeof e6 == "string" && e6.toLowerCase() === "button")
    return "button";
}
function s6(t15, e6) {
  let [n7, u10] = (0, import_react11.useState)(() => i3(t15));
  return l(() => {
    u10(i3(t15));
  }, [t15.type, t15.as]), l(() => {
    n7 || e6.current && e6.current instanceof HTMLButtonElement && !e6.current.hasAttribute("type") && u10("button");
  }, [n7, e6]), n7;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react12 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t15, n7 = true) {
  return Object.assign(t15, { [u2]: n7 });
}
function y2(...t15) {
  let n7 = (0, import_react12.useRef)(t15);
  (0, import_react12.useEffect)(() => {
    n7.current = t15;
  }, [t15]);
  let c15 = o4((e6) => {
    for (let o12 of n7.current)
      o12 != null && (typeof o12 == "function" ? o12(e6) : o12.current = e6);
  });
  return t15.every((e6) => e6 == null || (e6 == null ? void 0 : e6[u2])) ? void 0 : c15;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react13 = __toESM(require_react(), 1);
function F2({ container: e6, accept: t15, walk: r10, enabled: c15 = true }) {
  let o12 = (0, import_react13.useRef)(t15), l11 = (0, import_react13.useRef)(r10);
  (0, import_react13.useEffect)(() => {
    o12.current = t15, l11.current = r10;
  }, [t15, r10]), l(() => {
    if (!e6 || !c15)
      return;
    let n7 = e(e6);
    if (!n7)
      return;
    let f14 = o12.current, p9 = l11.current, d14 = Object.assign((i9) => f14(i9), { acceptNode: f14 }), u10 = n7.createTreeWalker(e6, NodeFilter.SHOW_ELEMENT, d14, false);
    for (; u10.nextNode(); )
      p9(u10.currentNode);
  }, [e6, c15, o12, l11]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f3(r10) {
  throw new Error("Unexpected object: " + r10);
}
var a2 = ((e6) => (e6[e6.First = 0] = "First", e6[e6.Previous = 1] = "Previous", e6[e6.Next = 2] = "Next", e6[e6.Last = 3] = "Last", e6[e6.Specific = 4] = "Specific", e6[e6.Nothing = 5] = "Nothing", e6))(a2 || {});
function x(r10, n7) {
  let t15 = n7.resolveItems();
  if (t15.length <= 0)
    return null;
  let l11 = n7.resolveActiveIndex(), s17 = l11 != null ? l11 : -1, d14 = (() => {
    switch (r10.focus) {
      case 0:
        return t15.findIndex((e6) => !n7.resolveDisabled(e6));
      case 1: {
        let e6 = t15.slice().reverse().findIndex((i9, c15, u10) => s17 !== -1 && u10.length - c15 - 1 >= s17 ? false : !n7.resolveDisabled(i9));
        return e6 === -1 ? e6 : t15.length - 1 - e6;
      }
      case 2:
        return t15.findIndex((e6, i9) => i9 <= s17 ? false : !n7.resolveDisabled(e6));
      case 3: {
        let e6 = t15.slice().reverse().findIndex((i9) => !n7.resolveDisabled(i9));
        return e6 === -1 ? e6 : t15.length - 1 - e6;
      }
      case 4:
        return t15.findIndex((e6) => n7.resolveId(e6) === r10.id);
      case 5:
        return null;
      default:
        f3(r10);
    }
  })();
  return d14 === -1 ? l11 : d14;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e2(...n7) {
  return n7.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a13) => (a13[a13.None = 0] = "None", a13[a13.RenderStrategy = 1] = "RenderStrategy", a13[a13.Static = 2] = "Static", a13))(S2 || {});
var j = ((e6) => (e6[e6.Unmount = 0] = "Unmount", e6[e6.Hidden = 1] = "Hidden", e6))(j || {});
function X({ ourProps: r10, theirProps: t15, slot: e6, defaultTag: a13, features: s17, visible: n7 = true, name: f14 }) {
  let o12 = N2(t15, r10);
  if (n7)
    return c3(o12, e6, a13, f14);
  let u10 = s17 != null ? s17 : 0;
  if (u10 & 2) {
    let { static: l11 = false, ...p9 } = o12;
    if (l11)
      return c3(p9, e6, a13, f14);
  }
  if (u10 & 1) {
    let { unmount: l11 = true, ...p9 } = o12;
    return u(l11 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c3({ ...p9, hidden: true, style: { display: "none" } }, e6, a13, f14);
    } });
  }
  return c3(o12, e6, a13, f14);
}
function c3(r10, t15 = {}, e6, a13) {
  let { as: s17 = e6, children: n7, refName: f14 = "ref", ...o12 } = g(r10, ["unmount", "static"]), u10 = r10.ref !== void 0 ? { [f14]: r10.ref } : {}, l11 = typeof n7 == "function" ? n7(t15) : n7;
  "className" in o12 && o12.className && typeof o12.className == "function" && (o12.className = o12.className(t15));
  let p9 = {};
  if (t15) {
    let i9 = false, m11 = [];
    for (let [y9, d14] of Object.entries(t15))
      typeof d14 == "boolean" && (i9 = true), d14 === true && m11.push(y9);
    i9 && (p9["data-headlessui-state"] = m11.join(" "));
  }
  if (s17 === import_react14.Fragment && Object.keys(R(o12)).length > 0) {
    if (!(0, import_react14.isValidElement)(l11) || Array.isArray(l11) && l11.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a13} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o12).map((d14) => `  - ${d14}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d14) => `  - ${d14}`).join(`
`)].join(`
`));
    let i9 = l11.props, m11 = typeof (i9 == null ? void 0 : i9.className) == "function" ? (...d14) => e2(i9 == null ? void 0 : i9.className(...d14), o12.className) : e2(i9 == null ? void 0 : i9.className, o12.className), y9 = m11 ? { className: m11 } : {};
    return (0, import_react14.cloneElement)(l11, Object.assign({}, N2(l11.props, R(g(o12, ["ref"]))), p9, u10, w2(l11.ref, u10.ref), y9));
  }
  return (0, import_react14.createElement)(s17, Object.assign({}, g(o12, ["ref"]), s17 !== import_react14.Fragment && u10, s17 !== import_react14.Fragment && p9), l11);
}
function w2(...r10) {
  return { ref: r10.every((t15) => t15 == null) ? void 0 : (t15) => {
    for (let e6 of r10)
      e6 != null && (typeof e6 == "function" ? e6(t15) : e6.current = t15);
  } };
}
function N2(...r10) {
  var a13;
  if (r10.length === 0)
    return {};
  if (r10.length === 1)
    return r10[0];
  let t15 = {}, e6 = {};
  for (let s17 of r10)
    for (let n7 in s17)
      n7.startsWith("on") && typeof s17[n7] == "function" ? ((a13 = e6[n7]) != null || (e6[n7] = []), e6[n7].push(s17[n7])) : t15[n7] = s17[n7];
  if (t15.disabled || t15["aria-disabled"])
    return Object.assign(t15, Object.fromEntries(Object.keys(e6).map((s17) => [s17, void 0])));
  for (let s17 in e6)
    Object.assign(t15, { [s17](n7, ...f14) {
      let o12 = e6[s17];
      for (let u10 of o12) {
        if ((n7 instanceof Event || (n7 == null ? void 0 : n7.nativeEvent) instanceof Event) && n7.defaultPrevented)
          return;
        u10(n7, ...f14);
      }
    } });
  return t15;
}
function D2(r10) {
  var t15;
  return Object.assign((0, import_react14.forwardRef)(r10), { displayName: (t15 = r10.displayName) != null ? t15 : r10.name });
}
function R(r10) {
  let t15 = Object.assign({}, r10);
  for (let e6 in t15)
    t15[e6] === void 0 && delete t15[e6];
  return t15;
}
function g(r10, t15 = []) {
  let e6 = Object.assign({}, r10);
  for (let a13 of t15)
    a13 in e6 && delete e6[a13];
  return e6;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n7) {
  let e6 = n7.parentElement, l11 = null;
  for (; e6 && !(e6 instanceof HTMLFieldSetElement); )
    e6 instanceof HTMLLegendElement && (l11 = e6), e6 = e6.parentElement;
  let t15 = (e6 == null ? void 0 : e6.getAttribute("disabled")) === "";
  return t15 && i5(l11) ? false : t15;
}
function i5(n7) {
  if (!n7)
    return false;
  let e6 = n7.previousElementSibling;
  for (; e6 !== null; ) {
    if (e6 instanceof HTMLLegendElement)
      return false;
    e6 = e6.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e3(n7 = {}, r10 = null, t15 = []) {
  for (let [i9, o12] of Object.entries(n7))
    f4(t15, s7(r10, i9), o12);
  return t15;
}
function s7(n7, r10) {
  return n7 ? n7 + "[" + r10 + "]" : r10;
}
function f4(n7, r10, t15) {
  if (Array.isArray(t15))
    for (let [i9, o12] of t15.entries())
      f4(n7, s7(r10, i9.toString()), o12);
  else
    t15 instanceof Date ? n7.push([r10, t15.toISOString()]) : typeof t15 == "boolean" ? n7.push([r10, t15 ? "1" : "0"]) : typeof t15 == "string" ? n7.push([r10, t15]) : typeof t15 == "number" ? n7.push([r10, `${t15}`]) : t15 == null ? n7.push([r10, ""]) : e3(t15, r10, n7);
}
function p2(n7) {
  var t15;
  let r10 = (t15 = n7 == null ? void 0 : n7.form) != null ? t15 : n7.closest("form");
  if (r10) {
    for (let i9 of r10.elements)
      if (i9.tagName === "INPUT" && i9.type === "submit" || i9.tagName === "BUTTON" && i9.type === "submit" || i9.nodeName === "INPUT" && i9.type === "image") {
        i9.click();
        return;
      }
    r10.requestSubmit();
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "div";
var p3 = ((e6) => (e6[e6.None = 1] = "None", e6[e6.Focusable = 2] = "Focusable", e6[e6.Hidden = 4] = "Hidden", e6))(p3 || {});
function s8(t15, o12) {
  let { features: n7 = 1, ...e6 } = t15, d14 = { ref: o12, "aria-hidden": (n7 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n7 & 4) === 4 && (n7 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d14, theirProps: e6, slot: {}, defaultTag: a3, name: "Hidden" });
}
var c4 = D2(s8);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react15 = __toESM(require_react(), 1);
var n = (0, import_react15.createContext)(null);
n.displayName = "OpenClosedContext";
var d5 = ((e6) => (e6[e6.Open = 1] = "Open", e6[e6.Closed = 2] = "Closed", e6[e6.Closing = 4] = "Closing", e6[e6.Opening = 8] = "Opening", e6))(d5 || {});
function C() {
  return (0, import_react15.useContext)(n);
}
function c5({ value: o12, children: r10 }) {
  return import_react15.default.createElement(n.Provider, { value: o12 }, r10);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r10) => (r10.Space = " ", r10.Enter = "Enter", r10.Escape = "Escape", r10.Backspace = "Backspace", r10.Delete = "Delete", r10.ArrowLeft = "ArrowLeft", r10.ArrowUp = "ArrowUp", r10.ArrowRight = "ArrowRight", r10.ArrowDown = "ArrowDown", r10.Home = "Home", r10.End = "End", r10.PageUp = "PageUp", r10.PageDown = "PageDown", r10.Tab = "Tab", r10))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react16 = __toESM(require_react(), 1);
function T4(l11, r10, c15) {
  let [i9, s17] = (0, import_react16.useState)(c15), e6 = l11 !== void 0, t15 = (0, import_react16.useRef)(e6), u10 = (0, import_react16.useRef)(false), d14 = (0, import_react16.useRef)(false);
  return e6 && !t15.current && !u10.current ? (u10.current = true, t15.current = e6, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e6 && t15.current && !d14.current && (d14.current = true, t15.current = e6, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e6 ? l11 : i9, o4((n7) => (e6 || s17(n7), r10 == null ? void 0 : r10(n7)))];
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react17 = __toESM(require_react(), 1);
function m3(u10, t15) {
  let e6 = (0, import_react17.useRef)([]), r10 = o4(u10);
  (0, import_react17.useEffect)(() => {
    let o12 = [...e6.current];
    for (let [n7, a13] of t15.entries())
      if (e6.current[n7] !== a13) {
        let l11 = r10(t15, o12);
        return e6.current = t15, l11;
      }
  }, [r10, ...t15]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react18 = __toESM(require_react(), 1);
function t6(e6) {
  return [e6.screenX, e6.screenY];
}
function u3() {
  let e6 = (0, import_react18.useRef)([-1, -1]);
  return { wasMoved(r10) {
    let n7 = t6(r10);
    return e6.current[0] === n7[0] && e6.current[1] === n7[1] ? false : (e6.current = n7, true);
  }, update(r10) {
    e6.current = t6(r10);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t7() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i6() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n2() {
  return t7() || i6();
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var ke = ((e6) => (e6[e6.Open = 0] = "Open", e6[e6.Closed = 1] = "Closed", e6))(ke || {});
var we = ((e6) => (e6[e6.Single = 0] = "Single", e6[e6.Multi = 1] = "Multi", e6))(we || {});
var Ue = ((e6) => (e6[e6.Pointer = 0] = "Pointer", e6[e6.Other = 1] = "Other", e6))(Ue || {});
var Ne = ((n7) => (n7[n7.OpenCombobox = 0] = "OpenCombobox", n7[n7.CloseCombobox = 1] = "CloseCombobox", n7[n7.GoToOption = 2] = "GoToOption", n7[n7.RegisterOption = 3] = "RegisterOption", n7[n7.UnregisterOption = 4] = "UnregisterOption", n7[n7.RegisterLabel = 5] = "RegisterLabel", n7))(Ne || {});
function re(t15, l11 = (e6) => e6) {
  let e6 = t15.activeOptionIndex !== null ? t15.options[t15.activeOptionIndex] : null, r10 = I2(l11(t15.options.slice()), (b6) => b6.dataRef.current.domRef.current), i9 = e6 ? r10.indexOf(e6) : null;
  return i9 === -1 && (i9 = null), { options: r10, activeOptionIndex: i9 };
}
var He = { [1](t15) {
  var l11;
  return (l11 = t15.dataRef.current) != null && l11.disabled || t15.comboboxState === 1 ? t15 : { ...t15, activeOptionIndex: null, comboboxState: 1 };
}, [0](t15) {
  var e6;
  if ((e6 = t15.dataRef.current) != null && e6.disabled || t15.comboboxState === 0)
    return t15;
  let l11 = t15.activeOptionIndex;
  if (t15.dataRef.current) {
    let { isSelected: r10 } = t15.dataRef.current, i9 = t15.options.findIndex((b6) => r10(b6.dataRef.current.value));
    i9 !== -1 && (l11 = i9);
  }
  return { ...t15, comboboxState: 0, activeOptionIndex: l11 };
}, [2](t15, l11) {
  var i9, b6, n7, d14;
  if ((i9 = t15.dataRef.current) != null && i9.disabled || (b6 = t15.dataRef.current) != null && b6.optionsRef.current && !((n7 = t15.dataRef.current) != null && n7.optionsPropsRef.current.static) && t15.comboboxState === 1)
    return t15;
  let e6 = re(t15);
  if (e6.activeOptionIndex === null) {
    let o12 = e6.options.findIndex((u10) => !u10.dataRef.current.disabled);
    o12 !== -1 && (e6.activeOptionIndex = o12);
  }
  let r10 = x(l11, { resolveItems: () => e6.options, resolveActiveIndex: () => e6.activeOptionIndex, resolveId: (o12) => o12.id, resolveDisabled: (o12) => o12.dataRef.current.disabled });
  return { ...t15, ...e6, activeOptionIndex: r10, activationTrigger: (d14 = l11.trigger) != null ? d14 : 1 };
}, [3]: (t15, l11) => {
  var b6, n7;
  let e6 = { id: l11.id, dataRef: l11.dataRef }, r10 = re(t15, (d14) => [...d14, e6]);
  t15.activeOptionIndex === null && (b6 = t15.dataRef.current) != null && b6.isSelected(l11.dataRef.current.value) && (r10.activeOptionIndex = r10.options.indexOf(e6));
  let i9 = { ...t15, ...r10, activationTrigger: 1 };
  return (n7 = t15.dataRef.current) != null && n7.__demoMode && t15.dataRef.current.value === void 0 && (i9.activeOptionIndex = 0), i9;
}, [4]: (t15, l11) => {
  let e6 = re(t15, (r10) => {
    let i9 = r10.findIndex((b6) => b6.id === l11.id);
    return i9 !== -1 && r10.splice(i9, 1), r10;
  });
  return { ...t15, ...e6, activationTrigger: 1 };
}, [5]: (t15, l11) => ({ ...t15, labelId: l11.id }) };
var ae = (0, import_react19.createContext)(null);
ae.displayName = "ComboboxActionsContext";
function Y(t15) {
  let l11 = (0, import_react19.useContext)(ae);
  if (l11 === null) {
    let e6 = new Error(`<${t15} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e6, Y), e6;
  }
  return l11;
}
var le = (0, import_react19.createContext)(null);
le.displayName = "ComboboxDataContext";
function j2(t15) {
  let l11 = (0, import_react19.useContext)(le);
  if (l11 === null) {
    let e6 = new Error(`<${t15} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e6, j2), e6;
  }
  return l11;
}
function Ge(t15, l11) {
  return u(l11.type, He, t15, l11);
}
var Xe = import_react19.Fragment;
function je(t15, l11) {
  let { value: e6, defaultValue: r10, onChange: i9, form: b6, name: n7, by: d14 = (p9, T7) => p9 === T7, disabled: o12 = false, __demoMode: u10 = false, nullable: P4 = false, multiple: f14 = false, ...E8 } = t15, [c15 = f14 ? [] : void 0, g5] = T4(e6, i9, r10), [m11, x7] = (0, import_react19.useReducer)(Ge, { dataRef: (0, import_react19.createRef)(), comboboxState: u10 ? 0 : 1, options: [], activeOptionIndex: null, activationTrigger: 1, labelId: null }), V4 = (0, import_react19.useRef)(false), h11 = (0, import_react19.useRef)({ static: false, hold: false }), w6 = (0, import_react19.useRef)(null), U4 = (0, import_react19.useRef)(null), N6 = (0, import_react19.useRef)(null), J5 = (0, import_react19.useRef)(null), F8 = o4(typeof d14 == "string" ? (p9, T7) => {
    let R3 = d14;
    return (p9 == null ? void 0 : p9[R3]) === (T7 == null ? void 0 : T7[R3]);
  } : d14), B3 = (0, import_react19.useCallback)((p9) => u(s17.mode, { [1]: () => c15.some((T7) => F8(T7, p9)), [0]: () => F8(c15, p9) }), [c15]), s17 = (0, import_react19.useMemo)(() => ({ ...m11, optionsPropsRef: h11, labelRef: w6, inputRef: U4, buttonRef: N6, optionsRef: J5, value: c15, defaultValue: r10, disabled: o12, mode: f14 ? 1 : 0, get activeOptionIndex() {
    if (V4.current && m11.activeOptionIndex === null && m11.options.length > 0) {
      let p9 = m11.options.findIndex((T7) => !T7.dataRef.current.disabled);
      if (p9 !== -1)
        return p9;
    }
    return m11.activeOptionIndex;
  }, compare: F8, isSelected: B3, nullable: P4, __demoMode: u10 }), [c15, r10, o12, f14, P4, u10, m11]), O4 = (0, import_react19.useRef)(s17.activeOptionIndex !== null ? s17.options[s17.activeOptionIndex] : null);
  (0, import_react19.useEffect)(() => {
    let p9 = s17.activeOptionIndex !== null ? s17.options[s17.activeOptionIndex] : null;
    O4.current !== p9 && (O4.current = p9);
  }), l(() => {
    m11.dataRef.current = s17;
  }, [s17]), h2([s17.buttonRef, s17.inputRef, s17.optionsRef], () => oe5.closeCombobox(), s17.comboboxState === 0);
  let a13 = (0, import_react19.useMemo)(() => ({ open: s17.comboboxState === 0, disabled: o12, activeIndex: s17.activeOptionIndex, activeOption: s17.activeOptionIndex === null ? null : s17.options[s17.activeOptionIndex].dataRef.current.value, value: c15 }), [s17, o12, c15]), L3 = o4((p9) => {
    let T7 = s17.options.find((R3) => R3.id === p9);
    T7 && W2(T7.dataRef.current.value);
  }), I7 = o4(() => {
    if (s17.activeOptionIndex !== null) {
      let { dataRef: p9, id: T7 } = s17.options[s17.activeOptionIndex];
      W2(p9.current.value), oe5.goToOption(a2.Specific, T7);
    }
  }), K4 = o4(() => {
    x7({ type: 0 }), V4.current = true;
  }), A5 = o4(() => {
    x7({ type: 1 }), V4.current = false;
  }), D7 = o4((p9, T7, R3) => (V4.current = false, p9 === a2.Specific ? x7({ type: 2, focus: a2.Specific, id: T7, trigger: R3 }) : x7({ type: 2, focus: p9, trigger: R3 }))), M9 = o4((p9, T7) => (x7({ type: 3, id: p9, dataRef: T7 }), () => {
    var R3;
    ((R3 = O4.current) == null ? void 0 : R3.id) === p9 && (V4.current = true), x7({ type: 4, id: p9 });
  })), ce4 = o4((p9) => (x7({ type: 5, id: p9 }), () => x7({ type: 5, id: null }))), W2 = o4((p9) => u(s17.mode, { [0]() {
    return g5 == null ? void 0 : g5(p9);
  }, [1]() {
    let T7 = s17.value.slice(), R3 = T7.findIndex(($5) => F8($5, p9));
    return R3 === -1 ? T7.push(p9) : T7.splice(R3, 1), g5 == null ? void 0 : g5(T7);
  } })), oe5 = (0, import_react19.useMemo)(() => ({ onChange: W2, registerOption: M9, registerLabel: ce4, goToOption: D7, closeCombobox: A5, openCombobox: K4, selectActiveOption: I7, selectOption: L3 }), []), Te3 = l11 === null ? {} : { ref: l11 }, Z7 = (0, import_react19.useRef)(null), me4 = p();
  return (0, import_react19.useEffect)(() => {
    Z7.current && r10 !== void 0 && me4.addEventListener(Z7.current, "reset", () => {
      W2(r10);
    });
  }, [Z7, W2]), import_react19.default.createElement(ae.Provider, { value: oe5 }, import_react19.default.createElement(le.Provider, { value: s17 }, import_react19.default.createElement(c5, { value: u(s17.comboboxState, { [0]: d5.Open, [1]: d5.Closed }) }, n7 != null && c15 != null && e3({ [n7]: c15 }).map(([p9, T7], R3) => import_react19.default.createElement(c4, { features: p3.Hidden, ref: R3 === 0 ? ($5) => {
    var ie4;
    Z7.current = (ie4 = $5 == null ? void 0 : $5.closest("form")) != null ? ie4 : null;
  } : void 0, ...R({ key: p9, as: "input", type: "hidden", hidden: true, readOnly: true, form: b6, name: p9, value: T7 }) })), X({ ourProps: Te3, theirProps: E8, slot: a13, defaultTag: Xe, name: "Combobox" }))));
}
var Je = "input";
function Ke(t15, l11) {
  var F8, B3, s17, O4;
  let e6 = I(), { id: r10 = `headlessui-combobox-input-${e6}`, onChange: i9, displayValue: b6, type: n7 = "text", ...d14 } = t15, o12 = j2("Combobox.Input"), u10 = Y("Combobox.Input"), P4 = y2(o12.inputRef, l11), f14 = (0, import_react19.useRef)(false), E8 = p(), c15 = function() {
    var a13;
    return typeof b6 == "function" && o12.value !== void 0 ? (a13 = b6(o12.value)) != null ? a13 : "" : typeof o12.value == "string" ? o12.value : "";
  }();
  m3(([a13, L3], [I7, K4]) => {
    if (f14.current)
      return;
    let A5 = o12.inputRef.current;
    A5 && ((K4 === 0 && L3 === 1 || a13 !== I7) && (A5.value = a13), requestAnimationFrame(() => {
      if (f14.current || !A5)
        return;
      let { selectionStart: D7, selectionEnd: M9 } = A5;
      Math.abs((M9 != null ? M9 : 0) - (D7 != null ? D7 : 0)) === 0 && D7 === 0 && A5.setSelectionRange(A5.value.length, A5.value.length);
    }));
  }, [c15, o12.comboboxState]), m3(([a13], [L3]) => {
    if (a13 === 0 && L3 === 1) {
      if (f14.current)
        return;
      let I7 = o12.inputRef.current;
      if (!I7)
        return;
      let K4 = I7.value, { selectionStart: A5, selectionEnd: D7, selectionDirection: M9 } = I7;
      I7.value = "", I7.value = K4, M9 !== null ? I7.setSelectionRange(A5, D7, M9) : I7.setSelectionRange(A5, D7);
    }
  }, [o12.comboboxState]);
  let g5 = (0, import_react19.useRef)(false), m11 = o4(() => {
    g5.current = true;
  }), x7 = o4(() => {
    E8.nextFrame(() => {
      g5.current = false;
    });
  }), V4 = o4((a13) => {
    switch (f14.current = true, a13.key) {
      case o8.Backspace:
      case o8.Delete:
        if (o12.mode !== 0 || !o12.nullable)
          return;
        let L3 = a13.currentTarget;
        E8.requestAnimationFrame(() => {
          L3.value === "" && (u10.onChange(null), o12.optionsRef.current && (o12.optionsRef.current.scrollTop = 0), u10.goToOption(a2.Nothing));
        });
        break;
      case o8.Enter:
        if (f14.current = false, o12.comboboxState !== 0 || g5.current)
          return;
        if (a13.preventDefault(), a13.stopPropagation(), o12.activeOptionIndex === null) {
          u10.closeCombobox();
          return;
        }
        u10.selectActiveOption(), o12.mode === 0 && u10.closeCombobox();
        break;
      case o8.ArrowDown:
        return f14.current = false, a13.preventDefault(), a13.stopPropagation(), u(o12.comboboxState, { [0]: () => {
          u10.goToOption(a2.Next);
        }, [1]: () => {
          u10.openCombobox();
        } });
      case o8.ArrowUp:
        return f14.current = false, a13.preventDefault(), a13.stopPropagation(), u(o12.comboboxState, { [0]: () => {
          u10.goToOption(a2.Previous);
        }, [1]: () => {
          u10.openCombobox(), E8.nextFrame(() => {
            o12.value || u10.goToOption(a2.Last);
          });
        } });
      case o8.Home:
        if (a13.shiftKey)
          break;
        return f14.current = false, a13.preventDefault(), a13.stopPropagation(), u10.goToOption(a2.First);
      case o8.PageUp:
        return f14.current = false, a13.preventDefault(), a13.stopPropagation(), u10.goToOption(a2.First);
      case o8.End:
        if (a13.shiftKey)
          break;
        return f14.current = false, a13.preventDefault(), a13.stopPropagation(), u10.goToOption(a2.Last);
      case o8.PageDown:
        return f14.current = false, a13.preventDefault(), a13.stopPropagation(), u10.goToOption(a2.Last);
      case o8.Escape:
        return f14.current = false, o12.comboboxState !== 0 ? void 0 : (a13.preventDefault(), o12.optionsRef.current && !o12.optionsPropsRef.current.static && a13.stopPropagation(), u10.closeCombobox());
      case o8.Tab:
        if (f14.current = false, o12.comboboxState !== 0)
          return;
        o12.mode === 0 && u10.selectActiveOption(), u10.closeCombobox();
        break;
    }
  }), h11 = o4((a13) => {
    i9 == null || i9(a13), u10.openCombobox();
  }), w6 = o4(() => {
    f14.current = false;
  }), U4 = i2(() => {
    if (o12.labelId)
      return [o12.labelId].join(" ");
  }, [o12.labelId]), N6 = (0, import_react19.useMemo)(() => ({ open: o12.comboboxState === 0, disabled: o12.disabled }), [o12]), J5 = { ref: P4, id: r10, role: "combobox", type: n7, "aria-controls": (F8 = o12.optionsRef.current) == null ? void 0 : F8.id, "aria-expanded": o12.comboboxState === 0, "aria-activedescendant": o12.activeOptionIndex === null || (B3 = o12.options[o12.activeOptionIndex]) == null ? void 0 : B3.id, "aria-labelledby": U4, "aria-autocomplete": "list", defaultValue: (O4 = (s17 = t15.defaultValue) != null ? s17 : o12.defaultValue !== void 0 ? b6 == null ? void 0 : b6(o12.defaultValue) : null) != null ? O4 : o12.defaultValue, disabled: o12.disabled, onCompositionStart: m11, onCompositionEnd: x7, onKeyDown: V4, onChange: h11, onBlur: w6 };
  return X({ ourProps: J5, theirProps: d14, slot: N6, defaultTag: Je, name: "Combobox.Input" });
}
var We = "button";
function $e(t15, l11) {
  var g5;
  let e6 = j2("Combobox.Button"), r10 = Y("Combobox.Button"), i9 = y2(e6.buttonRef, l11), b6 = I(), { id: n7 = `headlessui-combobox-button-${b6}`, ...d14 } = t15, o12 = p(), u10 = o4((m11) => {
    switch (m11.key) {
      case o8.ArrowDown:
        return m11.preventDefault(), m11.stopPropagation(), e6.comboboxState === 1 && r10.openCombobox(), o12.nextFrame(() => {
          var x7;
          return (x7 = e6.inputRef.current) == null ? void 0 : x7.focus({ preventScroll: true });
        });
      case o8.ArrowUp:
        return m11.preventDefault(), m11.stopPropagation(), e6.comboboxState === 1 && (r10.openCombobox(), o12.nextFrame(() => {
          e6.value || r10.goToOption(a2.Last);
        })), o12.nextFrame(() => {
          var x7;
          return (x7 = e6.inputRef.current) == null ? void 0 : x7.focus({ preventScroll: true });
        });
      case o8.Escape:
        return e6.comboboxState !== 0 ? void 0 : (m11.preventDefault(), e6.optionsRef.current && !e6.optionsPropsRef.current.static && m11.stopPropagation(), r10.closeCombobox(), o12.nextFrame(() => {
          var x7;
          return (x7 = e6.inputRef.current) == null ? void 0 : x7.focus({ preventScroll: true });
        }));
      default:
        return;
    }
  }), P4 = o4((m11) => {
    if (r3(m11.currentTarget))
      return m11.preventDefault();
    e6.comboboxState === 0 ? r10.closeCombobox() : (m11.preventDefault(), r10.openCombobox()), o12.nextFrame(() => {
      var x7;
      return (x7 = e6.inputRef.current) == null ? void 0 : x7.focus({ preventScroll: true });
    });
  }), f14 = i2(() => {
    if (e6.labelId)
      return [e6.labelId, n7].join(" ");
  }, [e6.labelId, n7]), E8 = (0, import_react19.useMemo)(() => ({ open: e6.comboboxState === 0, disabled: e6.disabled, value: e6.value }), [e6]), c15 = { ref: i9, id: n7, type: s6(t15, e6.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (g5 = e6.optionsRef.current) == null ? void 0 : g5.id, "aria-expanded": e6.comboboxState === 0, "aria-labelledby": f14, disabled: e6.disabled, onClick: P4, onKeyDown: u10 };
  return X({ ourProps: c15, theirProps: d14, slot: E8, defaultTag: We, name: "Combobox.Button" });
}
var qe = "label";
function Qe(t15, l11) {
  let e6 = I(), { id: r10 = `headlessui-combobox-label-${e6}`, ...i9 } = t15, b6 = j2("Combobox.Label"), n7 = Y("Combobox.Label"), d14 = y2(b6.labelRef, l11);
  l(() => n7.registerLabel(r10), [r10]);
  let o12 = o4(() => {
    var f14;
    return (f14 = b6.inputRef.current) == null ? void 0 : f14.focus({ preventScroll: true });
  }), u10 = (0, import_react19.useMemo)(() => ({ open: b6.comboboxState === 0, disabled: b6.disabled }), [b6]);
  return X({ ourProps: { ref: d14, id: r10, onClick: o12 }, theirProps: i9, slot: u10, defaultTag: qe, name: "Combobox.Label" });
}
var Ye = "ul";
var Ze = S2.RenderStrategy | S2.Static;
function ze(t15, l11) {
  let e6 = I(), { id: r10 = `headlessui-combobox-options-${e6}`, hold: i9 = false, ...b6 } = t15, n7 = j2("Combobox.Options"), d14 = y2(n7.optionsRef, l11), o12 = C(), u10 = (() => o12 !== null ? (o12 & d5.Open) === d5.Open : n7.comboboxState === 0)();
  l(() => {
    var c15;
    n7.optionsPropsRef.current.static = (c15 = t15.static) != null ? c15 : false;
  }, [n7.optionsPropsRef, t15.static]), l(() => {
    n7.optionsPropsRef.current.hold = i9;
  }, [n7.optionsPropsRef, i9]), F2({ container: n7.optionsRef.current, enabled: n7.comboboxState === 0, accept(c15) {
    return c15.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c15.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c15) {
    c15.setAttribute("role", "none");
  } });
  let P4 = i2(() => {
    var c15, g5;
    return (g5 = n7.labelId) != null ? g5 : (c15 = n7.buttonRef.current) == null ? void 0 : c15.id;
  }, [n7.labelId, n7.buttonRef.current]), f14 = (0, import_react19.useMemo)(() => ({ open: n7.comboboxState === 0 }), [n7]), E8 = { "aria-labelledby": P4, role: "listbox", "aria-multiselectable": n7.mode === 1 ? true : void 0, id: r10, ref: d14 };
  return X({ ourProps: E8, theirProps: b6, slot: f14, defaultTag: Ye, features: Ze, visible: u10, name: "Combobox.Options" });
}
var eo = "li";
function oo(t15, l11) {
  var B3, s17;
  let e6 = I(), { id: r10 = `headlessui-combobox-option-${e6}`, disabled: i9 = false, value: b6, ...n7 } = t15, d14 = j2("Combobox.Option"), o12 = Y("Combobox.Option"), u10 = d14.activeOptionIndex !== null ? d14.options[d14.activeOptionIndex].id === r10 : false, P4 = d14.isSelected(b6), f14 = (0, import_react19.useRef)(null), E8 = s2({ disabled: i9, value: b6, domRef: f14, textValue: (s17 = (B3 = f14.current) == null ? void 0 : B3.textContent) == null ? void 0 : s17.toLowerCase() }), c15 = y2(l11, f14), g5 = o4(() => o12.selectOption(r10));
  l(() => o12.registerOption(r10, E8), [E8, r10]);
  let m11 = (0, import_react19.useRef)(!d14.__demoMode);
  l(() => {
    if (!d14.__demoMode)
      return;
    let O4 = o2();
    return O4.requestAnimationFrame(() => {
      m11.current = true;
    }), O4.dispose;
  }, []), l(() => {
    if (d14.comboboxState !== 0 || !u10 || !m11.current || d14.activationTrigger === 0)
      return;
    let O4 = o2();
    return O4.requestAnimationFrame(() => {
      var a13, L3;
      (L3 = (a13 = f14.current) == null ? void 0 : a13.scrollIntoView) == null || L3.call(a13, { block: "nearest" });
    }), O4.dispose;
  }, [f14, u10, d14.comboboxState, d14.activationTrigger, d14.activeOptionIndex]);
  let x7 = o4((O4) => {
    if (i9)
      return O4.preventDefault();
    g5(), d14.mode === 0 && o12.closeCombobox(), n2() || requestAnimationFrame(() => {
      var a13;
      return (a13 = d14.inputRef.current) == null ? void 0 : a13.focus();
    });
  }), V4 = o4(() => {
    if (i9)
      return o12.goToOption(a2.Nothing);
    o12.goToOption(a2.Specific, r10);
  }), h11 = u3(), w6 = o4((O4) => h11.update(O4)), U4 = o4((O4) => {
    h11.wasMoved(O4) && (i9 || u10 || o12.goToOption(a2.Specific, r10, 0));
  }), N6 = o4((O4) => {
    h11.wasMoved(O4) && (i9 || u10 && (d14.optionsPropsRef.current.hold || o12.goToOption(a2.Nothing)));
  }), J5 = (0, import_react19.useMemo)(() => ({ active: u10, selected: P4, disabled: i9 }), [u10, P4, i9]);
  return X({ ourProps: { id: r10, ref: c15, role: "option", tabIndex: i9 === true ? void 0 : -1, "aria-disabled": i9 === true ? true : void 0, "aria-selected": P4, disabled: void 0, onClick: x7, onFocus: V4, onPointerEnter: w6, onMouseEnter: w6, onPointerMove: U4, onMouseMove: U4, onPointerLeave: N6, onMouseLeave: N6 }, theirProps: n7, slot: J5, defaultTag: eo, name: "Combobox.Option" });
}
var to = D2(je);
var no = D2($e);
var ro = D2(Ke);
var ao = D2(Qe);
var lo = D2(ze);
var io = D2(oo);
var Wo = Object.assign(to, { Input: ro, Button: no, Label: ao, Options: lo, Option: io });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react25 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react20 = __toESM(require_react(), 1);
var s10 = ((r10) => (r10[r10.Forwards = 0] = "Forwards", r10[r10.Backwards = 1] = "Backwards", r10))(s10 || {});
function n3() {
  let e6 = (0, import_react20.useRef)(0);
  return s5("keydown", (o12) => {
    o12.key === "Tab" && (e6.current = o12.shiftKey ? 1 : 0);
  }, true), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react21 = __toESM(require_react(), 1);
function f7() {
  let e6 = (0, import_react21.useRef)(false);
  return l(() => (e6.current = true, () => {
    e6.current = false;
  }), []), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react22 = __toESM(require_react(), 1);
function n4(...e6) {
  return (0, import_react22.useMemo)(() => e(...e6), [...e6]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react23 = __toESM(require_react(), 1);
function E3(n7, e6, a13, t15) {
  let i9 = s2(a13);
  (0, import_react23.useEffect)(() => {
    n7 = n7 != null ? n7 : window;
    function r10(o12) {
      i9.current(o12);
    }
    return n7.addEventListener(e6, r10, t15), () => n7.removeEventListener(e6, r10, t15);
  }, [n7, e6, t15]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t10(n7) {
  function e6() {
    document.readyState !== "loading" && (n7(), document.removeEventListener("DOMContentLoaded", e6));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e6), e6());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react24 = __toESM(require_react(), 1);
function c6(t15) {
  let r10 = o4(t15), e6 = (0, import_react24.useRef)(false);
  (0, import_react24.useEffect)(() => (e6.current = false, () => {
    e6.current = true, t3(() => {
      e6.current && r10();
    });
  }), [r10]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t15) {
  if (!t15)
    return /* @__PURE__ */ new Set();
  if (typeof t15 == "function")
    return new Set(t15());
  let r10 = /* @__PURE__ */ new Set();
  for (let e6 of t15.current)
    e6.current instanceof HTMLElement && r10.add(e6.current);
  return r10;
}
var J = "div";
var h4 = ((n7) => (n7[n7.None = 1] = "None", n7[n7.InitialFocus = 2] = "InitialFocus", n7[n7.TabLock = 4] = "TabLock", n7[n7.FocusLock = 8] = "FocusLock", n7[n7.RestoreFocus = 16] = "RestoreFocus", n7[n7.All = 30] = "All", n7))(h4 || {});
function X2(t15, r10) {
  let e6 = (0, import_react25.useRef)(null), o12 = y2(e6, r10), { initialFocus: u10, containers: i9, features: n7 = 30, ...l11 } = t15;
  l2() || (n7 = 1);
  let m11 = n4(e6);
  Y2({ ownerDocument: m11 }, Boolean(n7 & 16));
  let c15 = Z({ ownerDocument: m11, container: e6, initialFocus: u10 }, Boolean(n7 & 2));
  $({ ownerDocument: m11, container: e6, containers: i9, previousActiveElement: c15 }, Boolean(n7 & 8));
  let v5 = n3(), y9 = o4((s17) => {
    let T7 = e6.current;
    if (!T7)
      return;
    ((B3) => B3())(() => {
      u(v5.current, { [s10.Forwards]: () => {
        O(T7, M.First, { skipElements: [s17.relatedTarget] });
      }, [s10.Backwards]: () => {
        O(T7, M.Last, { skipElements: [s17.relatedTarget] });
      } });
    });
  }), _6 = p(), b6 = (0, import_react25.useRef)(false), j7 = { ref: o12, onKeyDown(s17) {
    s17.key == "Tab" && (b6.current = true, _6.requestAnimationFrame(() => {
      b6.current = false;
    }));
  }, onBlur(s17) {
    let T7 = P(i9);
    e6.current instanceof HTMLElement && T7.add(e6.current);
    let d14 = s17.relatedTarget;
    d14 instanceof HTMLElement && d14.dataset.headlessuiFocusGuard !== "true" && (S4(T7, d14) || (b6.current ? O(e6.current, u(v5.current, { [s10.Forwards]: () => M.Next, [s10.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s17.target }) : s17.target instanceof HTMLElement && y(s17.target)));
  } };
  return import_react25.default.createElement(import_react25.default.Fragment, null, Boolean(n7 & 4) && import_react25.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y9, features: p3.Focusable }), X({ ourProps: j7, theirProps: l11, defaultTag: J, name: "FocusTrap" }), Boolean(n7 & 4) && import_react25.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y9, features: p3.Focusable }));
}
var z2 = D2(X2);
var ge2 = Object.assign(z2, { features: h4 });
var a4 = [];
t10(() => {
  function t15(r10) {
    r10.target instanceof HTMLElement && r10.target !== document.body && a4[0] !== r10.target && (a4.unshift(r10.target), a4 = a4.filter((e6) => e6 != null && e6.isConnected), a4.splice(10));
  }
  window.addEventListener("click", t15, { capture: true }), window.addEventListener("mousedown", t15, { capture: true }), window.addEventListener("focus", t15, { capture: true }), document.body.addEventListener("click", t15, { capture: true }), document.body.addEventListener("mousedown", t15, { capture: true }), document.body.addEventListener("focus", t15, { capture: true });
});
function Q(t15 = true) {
  let r10 = (0, import_react25.useRef)(a4.slice());
  return m3(([e6], [o12]) => {
    o12 === true && e6 === false && t3(() => {
      r10.current.splice(0);
    }), o12 === false && e6 === true && (r10.current = a4.slice());
  }, [t15, a4, r10]), o4(() => {
    var e6;
    return (e6 = r10.current.find((o12) => o12 != null && o12.isConnected)) != null ? e6 : null;
  });
}
function Y2({ ownerDocument: t15 }, r10) {
  let e6 = Q(r10);
  m3(() => {
    r10 || (t15 == null ? void 0 : t15.activeElement) === (t15 == null ? void 0 : t15.body) && y(e6());
  }, [r10]), c6(() => {
    r10 && y(e6());
  });
}
function Z({ ownerDocument: t15, container: r10, initialFocus: e6 }, o12) {
  let u10 = (0, import_react25.useRef)(null), i9 = f7();
  return m3(() => {
    if (!o12)
      return;
    let n7 = r10.current;
    n7 && t3(() => {
      if (!i9.current)
        return;
      let l11 = t15 == null ? void 0 : t15.activeElement;
      if (e6 != null && e6.current) {
        if ((e6 == null ? void 0 : e6.current) === l11) {
          u10.current = l11;
          return;
        }
      } else if (n7.contains(l11)) {
        u10.current = l11;
        return;
      }
      e6 != null && e6.current ? y(e6.current) : O(n7, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u10.current = t15 == null ? void 0 : t15.activeElement;
    });
  }, [o12]), u10;
}
function $({ ownerDocument: t15, container: r10, containers: e6, previousActiveElement: o12 }, u10) {
  let i9 = f7();
  E3(t15 == null ? void 0 : t15.defaultView, "focus", (n7) => {
    if (!u10 || !i9.current)
      return;
    let l11 = P(e6);
    r10.current instanceof HTMLElement && l11.add(r10.current);
    let m11 = o12.current;
    if (!m11)
      return;
    let c15 = n7.target;
    c15 && c15 instanceof HTMLElement ? S4(l11, c15) ? (o12.current = c15, y(c15)) : (n7.preventDefault(), n7.stopPropagation(), y(m11)) : y(o12.current);
  }, true);
}
function S4(t15, r10) {
  for (let e6 of t15)
    if (e6.contains(r10))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react27 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react26 = __toESM(require_react(), 1);
var e4 = (0, import_react26.createContext)(false);
function l5() {
  return (0, import_react26.useContext)(e4);
}
function P2(o12) {
  return import_react26.default.createElement(e4.Provider, { value: o12.force }, o12.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F3(p9) {
  let l11 = l5(), n7 = (0, import_react27.useContext)(v), e6 = n4(p9), [a13, o12] = (0, import_react27.useState)(() => {
    if (!l11 && n7 !== null || s.isServer)
      return null;
    let t15 = e6 == null ? void 0 : e6.getElementById("headlessui-portal-root");
    if (t15)
      return t15;
    if (e6 === null)
      return null;
    let r10 = e6.createElement("div");
    return r10.setAttribute("id", "headlessui-portal-root"), e6.body.appendChild(r10);
  });
  return (0, import_react27.useEffect)(() => {
    a13 !== null && (e6 != null && e6.body.contains(a13) || e6 == null || e6.body.appendChild(a13));
  }, [a13, e6]), (0, import_react27.useEffect)(() => {
    l11 || n7 !== null && o12(n7.current);
  }, [n7, o12, l11]), a13;
}
var U = import_react27.Fragment;
function N3(p9, l11) {
  let n7 = p9, e6 = (0, import_react27.useRef)(null), a13 = y2(T2((u10) => {
    e6.current = u10;
  }), l11), o12 = n4(e6), t15 = F3(e6), [r10] = (0, import_react27.useState)(() => {
    var u10;
    return s.isServer ? null : (u10 = o12 == null ? void 0 : o12.createElement("div")) != null ? u10 : null;
  }), i9 = (0, import_react27.useContext)(f8), C5 = l2();
  return l(() => {
    !t15 || !r10 || t15.contains(r10) || (r10.setAttribute("data-headlessui-portal", ""), t15.appendChild(r10));
  }, [t15, r10]), l(() => {
    if (r10 && i9)
      return i9.register(r10);
  }, [i9, r10]), c6(() => {
    var u10;
    !t15 || !r10 || (r10 instanceof Node && t15.contains(r10) && t15.removeChild(r10), t15.childNodes.length <= 0 && ((u10 = t15.parentElement) == null || u10.removeChild(t15)));
  }), C5 ? !t15 || !r10 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a13 }, theirProps: n7, defaultTag: U, name: "Portal" }), r10) : null;
}
var S5 = import_react27.Fragment;
var v = (0, import_react27.createContext)(null);
function j3(p9, l11) {
  let { target: n7, ...e6 } = p9, o12 = { ref: y2(l11) };
  return import_react27.default.createElement(v.Provider, { value: n7 }, X({ ourProps: o12, theirProps: e6, defaultTag: S5, name: "Popover.Group" }));
}
var f8 = (0, import_react27.createContext)(null);
function ae2() {
  let p9 = (0, import_react27.useContext)(f8), l11 = (0, import_react27.useRef)([]), n7 = o4((o12) => (l11.current.push(o12), p9 && p9.register(o12), () => e6(o12))), e6 = o4((o12) => {
    let t15 = l11.current.indexOf(o12);
    t15 !== -1 && l11.current.splice(t15, 1), p9 && p9.unregister(o12);
  }), a13 = (0, import_react27.useMemo)(() => ({ register: n7, unregister: e6, portals: l11 }), [n7, e6, l11]);
  return [l11, (0, import_react27.useMemo)(() => function({ children: t15 }) {
    return import_react27.default.createElement(f8.Provider, { value: a13 }, t15);
  }, [a13])];
}
var D3 = D2(N3);
var I3 = D2(j3);
var pe2 = Object.assign(D3, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react28 = __toESM(require_react(), 1);
var d8 = (0, import_react28.createContext)(null);
function f9() {
  let r10 = (0, import_react28.useContext)(d8);
  if (r10 === null) {
    let t15 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t15, f9), t15;
  }
  return r10;
}
function M2() {
  let [r10, t15] = (0, import_react28.useState)([]);
  return [r10.length > 0 ? r10.join(" ") : void 0, (0, import_react28.useMemo)(() => function(e6) {
    let i9 = o4((s17) => (t15((o12) => [...o12, s17]), () => t15((o12) => {
      let p9 = o12.slice(), c15 = p9.indexOf(s17);
      return c15 !== -1 && p9.splice(c15, 1), p9;
    }))), n7 = (0, import_react28.useMemo)(() => ({ register: i9, slot: e6.slot, name: e6.name, props: e6.props }), [i9, e6.slot, e6.name, e6.props]);
    return import_react28.default.createElement(d8.Provider, { value: n7 }, e6.children);
  }, [t15])];
}
var S6 = "p";
function h5(r10, t15) {
  let a13 = I(), { id: e6 = `headlessui-description-${a13}`, ...i9 } = r10, n7 = f9(), s17 = y2(t15);
  l(() => n7.register(e6), [e6, n7.register]);
  let o12 = { ref: s17, ...n7.props, id: e6 };
  return X({ ourProps: o12, theirProps: i9, slot: n7.slot || {}, defaultTag: S6, name: n7.name || "Description" });
}
var y3 = D2(h5);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react29 = __toESM(require_react(), 1);
var a5 = (0, import_react29.createContext)(() => {
});
a5.displayName = "StackContext";
var s12 = ((e6) => (e6[e6.Add = 0] = "Add", e6[e6.Remove = 1] = "Remove", e6))(s12 || {});
function x3() {
  return (0, import_react29.useContext)(a5);
}
function M3({ children: i9, onUpdate: r10, type: e6, element: n7, enabled: u10 }) {
  let l11 = x3(), o12 = o4((...t15) => {
    r10 == null || r10(...t15), l11(...t15);
  });
  return l(() => {
    let t15 = u10 === void 0 || u10 === true;
    return t15 && o12(0, e6, n7), () => {
      t15 && o12(1, e6, n7);
    };
  }, [o12, e6, n7, u10]), import_react29.default.createElement(a5.Provider, { value: o12 }, i9);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i7(e6, t15) {
  return e6 === t15 && (e6 !== 0 || 1 / e6 === 1 / t15) || e6 !== e6 && t15 !== t15;
}
var d10 = typeof Object.is == "function" ? Object.is : i7;
var { useState: u6, useEffect: h6, useLayoutEffect: f10, useDebugValue: p5 } = l7;
function y4(e6, t15, c15) {
  const a13 = t15(), [{ inst: n7 }, o12] = u6({ inst: { value: a13, getSnapshot: t15 } });
  return f10(() => {
    n7.value = a13, n7.getSnapshot = t15, r6(n7) && o12({ inst: n7 });
  }, [e6, a13, t15]), h6(() => (r6(n7) && o12({ inst: n7 }), e6(() => {
    r6(n7) && o12({ inst: n7 });
  })), [e6]), p5(a13), a13;
}
function r6(e6) {
  const t15 = e6.getSnapshot, c15 = e6.value;
  try {
    const a13 = t15();
    return !d10(c15, a13);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t12(r10, e6, n7) {
  return e6();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r7 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s13 = !r7;
var c9 = s13 ? t12 : y4;
var a6 = "useSyncExternalStore" in e5 ? ((n7) => n7.useSyncExternalStore)(e5) : c9;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S7(t15) {
  return a6(t15.subscribe, t15.getSnapshot, t15.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o12, r10) {
  let t15 = o12(), n7 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t15;
  }, subscribe(e6) {
    return n7.add(e6), () => n7.delete(e6);
  }, dispatch(e6, ...s17) {
    let i9 = r10[e6].call(t15, ...s17);
    i9 && (t15 = i9, n7.forEach((c15) => c15()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c10() {
  let o12;
  return { before({ doc: e6 }) {
    var l11;
    let n7 = e6.documentElement;
    o12 = ((l11 = e6.defaultView) != null ? l11 : window).innerWidth - n7.clientWidth;
  }, after({ doc: e6, d: n7 }) {
    let t15 = e6.documentElement, l11 = t15.clientWidth - t15.offsetWidth, r10 = o12 - l11;
    n7.style(t15, "paddingRight", `${r10}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p6() {
  if (!t7())
    return {};
  let o12;
  return { before() {
    o12 = window.pageYOffset;
  }, after({ doc: r10, d: l11, meta: s17 }) {
    function i9(e6) {
      return s17.containers.flatMap((t15) => t15()).some((t15) => t15.contains(e6));
    }
    l11.style(r10.body, "marginTop", `-${o12}px`), window.scrollTo(0, 0);
    let n7 = null;
    l11.addEventListener(r10, "click", (e6) => {
      if (e6.target instanceof HTMLElement)
        try {
          let t15 = e6.target.closest("a");
          if (!t15)
            return;
          let { hash: c15 } = new URL(t15.href), a13 = r10.querySelector(c15);
          a13 && !i9(a13) && (n7 = a13);
        } catch {
        }
    }, true), l11.addEventListener(r10, "touchmove", (e6) => {
      e6.target instanceof HTMLElement && !i9(e6.target) && e6.preventDefault();
    }, { passive: false }), l11.add(() => {
      window.scrollTo(0, window.pageYOffset + o12), n7 && n7.isConnected && (n7.scrollIntoView({ block: "nearest" }), n7 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e6, d: o12 }) {
    o12.style(e6.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m7(e6) {
  let n7 = {};
  for (let t15 of e6)
    Object.assign(n7, t15(n7));
  return n7;
}
var a8 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e6, n7) {
  var o12;
  let t15 = (o12 = this.get(e6)) != null ? o12 : { doc: e6, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t15.count++, t15.meta.add(n7), this.set(e6, t15), this;
}, POP(e6, n7) {
  let t15 = this.get(e6);
  return t15 && (t15.count--, t15.meta.delete(n7)), this;
}, SCROLL_PREVENT({ doc: e6, d: n7, meta: t15 }) {
  let o12 = { doc: e6, d: n7, meta: m7(t15) }, c15 = [p6(), c10(), l8()];
  c15.forEach(({ before: r10 }) => r10 == null ? void 0 : r10(o12)), c15.forEach(({ after: r10 }) => r10 == null ? void 0 : r10(o12));
}, SCROLL_ALLOW({ d: e6 }) {
  e6.dispose();
}, TEARDOWN({ doc: e6 }) {
  this.delete(e6);
} });
a8.subscribe(() => {
  let e6 = a8.getSnapshot(), n7 = /* @__PURE__ */ new Map();
  for (let [t15] of e6)
    n7.set(t15, t15.documentElement.style.overflow);
  for (let t15 of e6.values()) {
    let o12 = n7.get(t15.doc) === "hidden", c15 = t15.count !== 0;
    (c15 && !o12 || !c15 && o12) && a8.dispatch(t15.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t15), t15.count === 0 && a8.dispatch("TEARDOWN", t15);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p7(e6, r10, n7) {
  let f14 = S7(a8), o12 = e6 ? f14.get(e6) : void 0, i9 = o12 ? o12.count > 0 : false;
  return l(() => {
    if (!(!e6 || !r10))
      return a8.dispatch("PUSH", e6, n7), () => a8.dispatch("POP", e6, n7);
  }, [r10, e6]), i9;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u7 = /* @__PURE__ */ new Map();
var t13 = /* @__PURE__ */ new Map();
function h7(r10, l11 = true) {
  l(() => {
    var o12;
    if (!l11)
      return;
    let e6 = typeof r10 == "function" ? r10() : r10.current;
    if (!e6)
      return;
    function a13() {
      var d14;
      if (!e6)
        return;
      let i9 = (d14 = t13.get(e6)) != null ? d14 : 1;
      if (i9 === 1 ? t13.delete(e6) : t13.set(e6, i9 - 1), i9 !== 1)
        return;
      let n7 = u7.get(e6);
      n7 && (n7["aria-hidden"] === null ? e6.removeAttribute("aria-hidden") : e6.setAttribute("aria-hidden", n7["aria-hidden"]), e6.inert = n7.inert, u7.delete(e6));
    }
    let f14 = (o12 = t13.get(e6)) != null ? o12 : 0;
    return t13.set(e6, f14 + 1), f14 !== 0 || (u7.set(e6, { "aria-hidden": e6.getAttribute("aria-hidden"), inert: e6.inert }), e6.setAttribute("aria-hidden", "true"), e6.inert = true), a13;
  }, [r10, l11]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react30 = __toESM(require_react(), 1);
function p8({ defaultContainers: f14 = [], portals: o12 } = {}) {
  let t15 = (0, import_react30.useRef)(null), i9 = n4(t15), u10 = o4(() => {
    var r10;
    let n7 = [];
    for (let e6 of f14)
      e6 !== null && (e6 instanceof HTMLElement ? n7.push(e6) : "current" in e6 && e6.current instanceof HTMLElement && n7.push(e6.current));
    if (o12 != null && o12.current)
      for (let e6 of o12.current)
        n7.push(e6);
    for (let e6 of (r10 = i9 == null ? void 0 : i9.querySelectorAll("html > *, body > *")) != null ? r10 : [])
      e6 !== document.body && e6 !== document.head && e6 instanceof HTMLElement && e6.id !== "headlessui-portal-root" && (e6.contains(t15.current) || n7.some((c15) => e6.contains(c15)) || n7.push(e6));
    return n7;
  });
  return { resolveContainers: u10, contains: o4((n7) => u10().some((r10) => r10.contains(n7))), mainTreeNodeRef: t15, MainTreeNode: (0, import_react30.useMemo)(() => function() {
    return import_react30.default.createElement(c4, { features: p3.Hidden, ref: t15 });
  }, [t15]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o12) => (o12[o12.Open = 0] = "Open", o12[o12.Closed = 1] = "Closed", o12))(_e || {});
var Ie = ((e6) => (e6[e6.SetTitleId = 0] = "SetTitleId", e6))(Ie || {});
var Me = { [0](t15, e6) {
  return t15.titleId === e6.id ? t15 : { ...t15, titleId: e6.id };
} };
var I4 = (0, import_react31.createContext)(null);
I4.displayName = "DialogContext";
function b3(t15) {
  let e6 = (0, import_react31.useContext)(I4);
  if (e6 === null) {
    let o12 = new Error(`<${t15} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o12, b3), o12;
  }
  return e6;
}
function we2(t15, e6, o12 = () => [document.body]) {
  p7(t15, e6, (i9) => {
    var n7;
    return { containers: [...(n7 = i9.containers) != null ? n7 : [], o12] };
  });
}
function Be(t15, e6) {
  return u(e6.type, Me, t15, e6);
}
var He2 = "div";
var Ge2 = S2.RenderStrategy | S2.Static;
function Ne2(t15, e6) {
  var X6;
  let o12 = I(), { id: i9 = `headlessui-dialog-${o12}`, open: n7, onClose: l11, initialFocus: s17, __demoMode: g5 = false, ...T7 } = t15, [m11, h11] = (0, import_react31.useState)(0), a13 = C();
  n7 === void 0 && a13 !== null && (n7 = (a13 & d5.Open) === d5.Open);
  let D7 = (0, import_react31.useRef)(null), Q6 = y2(D7, e6), f14 = n4(D7), N6 = t15.hasOwnProperty("open") || a13 !== null, U4 = t15.hasOwnProperty("onClose");
  if (!N6 && !U4)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N6)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U4)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n7 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n7}`);
  if (typeof l11 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l11}`);
  let p9 = n7 ? 0 : 1, [S9, Z7] = (0, import_react31.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react31.createRef)() }), P4 = o4(() => l11(false)), W2 = o4((r10) => Z7({ type: 0, id: r10 })), L3 = l2() ? g5 ? false : p9 === 0 : false, F8 = m11 > 1, Y6 = (0, import_react31.useContext)(I4) !== null, [ee5, te4] = ae2(), { resolveContainers: M9, mainTreeNodeRef: k2, MainTreeNode: oe5 } = p8({ portals: ee5, defaultContainers: [(X6 = S9.panelRef.current) != null ? X6 : D7.current] }), re7 = F8 ? "parent" : "leaf", $5 = a13 !== null ? (a13 & d5.Closing) === d5.Closing : false, ne5 = (() => Y6 || $5 ? false : L3)(), le3 = (0, import_react31.useCallback)(() => {
    var r10, c15;
    return (c15 = Array.from((r10 = f14 == null ? void 0 : f14.querySelectorAll("body > *")) != null ? r10 : []).find((d14) => d14.id === "headlessui-portal-root" ? false : d14.contains(k2.current) && d14 instanceof HTMLElement)) != null ? c15 : null;
  }, [k2]);
  h7(le3, ne5);
  let ae3 = (() => F8 ? true : L3)(), ie4 = (0, import_react31.useCallback)(() => {
    var r10, c15;
    return (c15 = Array.from((r10 = f14 == null ? void 0 : f14.querySelectorAll("[data-headlessui-portal]")) != null ? r10 : []).find((d14) => d14.contains(k2.current) && d14 instanceof HTMLElement)) != null ? c15 : null;
  }, [k2]);
  h7(ie4, ae3);
  let se5 = (() => !(!L3 || F8))();
  h2(M9, P4, se5);
  let pe3 = (() => !(F8 || p9 !== 0))();
  E3(f14 == null ? void 0 : f14.defaultView, "keydown", (r10) => {
    pe3 && (r10.defaultPrevented || r10.key === o8.Escape && (r10.preventDefault(), r10.stopPropagation(), P4()));
  });
  let de4 = (() => !($5 || p9 !== 0 || Y6))();
  we2(f14, de4, M9), (0, import_react31.useEffect)(() => {
    if (p9 !== 0 || !D7.current)
      return;
    let r10 = new ResizeObserver((c15) => {
      for (let d14 of c15) {
        let x7 = d14.target.getBoundingClientRect();
        x7.x === 0 && x7.y === 0 && x7.width === 0 && x7.height === 0 && P4();
      }
    });
    return r10.observe(D7.current), () => r10.disconnect();
  }, [p9, D7, P4]);
  let [ue6, fe4] = M2(), ge6 = (0, import_react31.useMemo)(() => [{ dialogState: p9, close: P4, setTitleId: W2 }, S9], [p9, S9, P4, W2]), J5 = (0, import_react31.useMemo)(() => ({ open: p9 === 0 }), [p9]), Te3 = { ref: Q6, id: i9, role: "dialog", "aria-modal": p9 === 0 ? true : void 0, "aria-labelledby": S9.titleId, "aria-describedby": ue6 };
  return import_react31.default.createElement(M3, { type: "Dialog", enabled: p9 === 0, element: D7, onUpdate: o4((r10, c15) => {
    c15 === "Dialog" && u(r10, { [s12.Add]: () => h11((d14) => d14 + 1), [s12.Remove]: () => h11((d14) => d14 - 1) });
  }) }, import_react31.default.createElement(P2, { force: true }, import_react31.default.createElement(pe2, null, import_react31.default.createElement(I4.Provider, { value: ge6 }, import_react31.default.createElement(pe2.Group, { target: D7 }, import_react31.default.createElement(P2, { force: false }, import_react31.default.createElement(fe4, { slot: J5, name: "Dialog.Description" }, import_react31.default.createElement(ge2, { initialFocus: s17, containers: M9, features: L3 ? u(re7, { parent: ge2.features.RestoreFocus, leaf: ge2.features.All & ~ge2.features.FocusLock }) : ge2.features.None }, import_react31.default.createElement(te4, null, X({ ourProps: Te3, theirProps: T7, slot: J5, defaultTag: He2, features: Ge2, visible: p9 === 0, name: "Dialog" }))))))))), import_react31.default.createElement(oe5, null));
}
var Ue2 = "div";
function We2(t15, e6) {
  let o12 = I(), { id: i9 = `headlessui-dialog-overlay-${o12}`, ...n7 } = t15, [{ dialogState: l11, close: s17 }] = b3("Dialog.Overlay"), g5 = y2(e6), T7 = o4((a13) => {
    if (a13.target === a13.currentTarget) {
      if (r3(a13.currentTarget))
        return a13.preventDefault();
      a13.preventDefault(), a13.stopPropagation(), s17();
    }
  }), m11 = (0, import_react31.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return X({ ourProps: { ref: g5, id: i9, "aria-hidden": true, onClick: T7 }, theirProps: n7, slot: m11, defaultTag: Ue2, name: "Dialog.Overlay" });
}
var Ye2 = "div";
function $e2(t15, e6) {
  let o12 = I(), { id: i9 = `headlessui-dialog-backdrop-${o12}`, ...n7 } = t15, [{ dialogState: l11 }, s17] = b3("Dialog.Backdrop"), g5 = y2(e6);
  (0, import_react31.useEffect)(() => {
    if (s17.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s17.panelRef]);
  let T7 = (0, import_react31.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return import_react31.default.createElement(P2, { force: true }, import_react31.default.createElement(pe2, null, X({ ourProps: { ref: g5, id: i9, "aria-hidden": true }, theirProps: n7, slot: T7, defaultTag: Ye2, name: "Dialog.Backdrop" })));
}
var Je2 = "div";
function Xe2(t15, e6) {
  let o12 = I(), { id: i9 = `headlessui-dialog-panel-${o12}`, ...n7 } = t15, [{ dialogState: l11 }, s17] = b3("Dialog.Panel"), g5 = y2(e6, s17.panelRef), T7 = (0, import_react31.useMemo)(() => ({ open: l11 === 0 }), [l11]), m11 = o4((a13) => {
    a13.stopPropagation();
  });
  return X({ ourProps: { ref: g5, id: i9, onClick: m11 }, theirProps: n7, slot: T7, defaultTag: Je2, name: "Dialog.Panel" });
}
var je2 = "h2";
function Ke2(t15, e6) {
  let o12 = I(), { id: i9 = `headlessui-dialog-title-${o12}`, ...n7 } = t15, [{ dialogState: l11, setTitleId: s17 }] = b3("Dialog.Title"), g5 = y2(e6);
  (0, import_react31.useEffect)(() => (s17(i9), () => s17(null)), [i9, s17]);
  let T7 = (0, import_react31.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return X({ ourProps: { ref: g5, id: i9 }, theirProps: n7, slot: T7, defaultTag: je2, name: "Dialog.Title" });
}
var Ve = D2(Ne2);
var qe2 = D2($e2);
var ze2 = D2(Xe2);
var Qe2 = D2(We2);
var Ze2 = D2(Ke2);
var _t = Object.assign(Ve, { Backdrop: qe2, Panel: ze2, Overlay: Qe2, Title: Ze2, Description: b2 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react33 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react32 = __toESM(require_react(), 1);
var t14;
var a10 = (t14 = import_react32.default.startTransition) != null ? t14 : function(i9) {
  i9();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o12) => (o12[o12.Open = 0] = "Open", o12[o12.Closed = 1] = "Closed", o12))(q || {});
var z3 = ((t15) => (t15[t15.ToggleDisclosure = 0] = "ToggleDisclosure", t15[t15.CloseDisclosure = 1] = "CloseDisclosure", t15[t15.SetButtonId = 2] = "SetButtonId", t15[t15.SetPanelId = 3] = "SetPanelId", t15[t15.LinkPanel = 4] = "LinkPanel", t15[t15.UnlinkPanel = 5] = "UnlinkPanel", t15))(z3 || {});
var Q2 = { [0]: (e6) => ({ ...e6, disclosureState: u(e6.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e6) => e6.disclosureState === 1 ? e6 : { ...e6, disclosureState: 1 }, [4](e6) {
  return e6.linkedPanel === true ? e6 : { ...e6, linkedPanel: true };
}, [5](e6) {
  return e6.linkedPanel === false ? e6 : { ...e6, linkedPanel: false };
}, [2](e6, n7) {
  return e6.buttonId === n7.buttonId ? e6 : { ...e6, buttonId: n7.buttonId };
}, [3](e6, n7) {
  return e6.panelId === n7.panelId ? e6 : { ...e6, panelId: n7.panelId };
} };
var k = (0, import_react33.createContext)(null);
k.displayName = "DisclosureContext";
function M4(e6) {
  let n7 = (0, import_react33.useContext)(k);
  if (n7 === null) {
    let o12 = new Error(`<${e6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o12, M4), o12;
  }
  return n7;
}
var v2 = (0, import_react33.createContext)(null);
v2.displayName = "DisclosureAPIContext";
function w4(e6) {
  let n7 = (0, import_react33.useContext)(v2);
  if (n7 === null) {
    let o12 = new Error(`<${e6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o12, w4), o12;
  }
  return n7;
}
var H3 = (0, import_react33.createContext)(null);
H3.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react33.useContext)(H3);
}
function Y3(e6, n7) {
  return u(n7.type, Q2, e6, n7);
}
var Z2 = import_react33.Fragment;
function ee(e6, n7) {
  let { defaultOpen: o12 = false, ...u10 } = e6, T7 = (0, import_react33.useRef)(null), l11 = y2(n7, T2((a13) => {
    T7.current = a13;
  }, e6.as === void 0 || e6.as === import_react33.Fragment)), t15 = (0, import_react33.useRef)(null), f14 = (0, import_react33.useRef)(null), s17 = (0, import_react33.useReducer)(Y3, { disclosureState: o12 ? 0 : 1, linkedPanel: false, buttonRef: f14, panelRef: t15, buttonId: null, panelId: null }), [{ disclosureState: i9, buttonId: c15 }, D7] = s17, d14 = o4((a13) => {
    D7({ type: 1 });
    let r10 = e(T7);
    if (!r10 || !c15)
      return;
    let p9 = (() => a13 ? a13 instanceof HTMLElement ? a13 : a13.current instanceof HTMLElement ? a13.current : r10.getElementById(c15) : r10.getElementById(c15))();
    p9 == null || p9.focus();
  }), P4 = (0, import_react33.useMemo)(() => ({ close: d14 }), [d14]), b6 = (0, import_react33.useMemo)(() => ({ open: i9 === 0, close: d14 }), [i9, d14]), y9 = { ref: l11 };
  return import_react33.default.createElement(k.Provider, { value: s17 }, import_react33.default.createElement(v2.Provider, { value: P4 }, import_react33.default.createElement(c5, { value: u(i9, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: y9, theirProps: u10, slot: b6, defaultTag: Z2, name: "Disclosure" }))));
}
var te = "button";
function ne(e6, n7) {
  let o12 = I(), { id: u10 = `headlessui-disclosure-button-${o12}`, ...T7 } = e6, [l11, t15] = M4("Disclosure.Button"), f14 = V(), s17 = f14 === null ? false : f14 === l11.panelId, i9 = (0, import_react33.useRef)(null), c15 = y2(i9, n7, s17 ? null : l11.buttonRef);
  (0, import_react33.useEffect)(() => {
    if (!s17)
      return t15({ type: 2, buttonId: u10 }), () => {
        t15({ type: 2, buttonId: null });
      };
  }, [u10, t15, s17]);
  let D7 = o4((r10) => {
    var p9;
    if (s17) {
      if (l11.disclosureState === 1)
        return;
      switch (r10.key) {
        case o8.Space:
        case o8.Enter:
          r10.preventDefault(), r10.stopPropagation(), t15({ type: 0 }), (p9 = l11.buttonRef.current) == null || p9.focus();
          break;
      }
    } else
      switch (r10.key) {
        case o8.Space:
        case o8.Enter:
          r10.preventDefault(), r10.stopPropagation(), t15({ type: 0 });
          break;
      }
  }), d14 = o4((r10) => {
    switch (r10.key) {
      case o8.Space:
        r10.preventDefault();
        break;
    }
  }), P4 = o4((r10) => {
    var p9;
    r3(r10.currentTarget) || e6.disabled || (s17 ? (t15({ type: 0 }), (p9 = l11.buttonRef.current) == null || p9.focus()) : t15({ type: 0 }));
  }), b6 = (0, import_react33.useMemo)(() => ({ open: l11.disclosureState === 0 }), [l11]), y9 = s6(e6, i9), a13 = s17 ? { ref: c15, type: y9, onKeyDown: D7, onClick: P4 } : { ref: c15, id: u10, type: y9, "aria-expanded": l11.disclosureState === 0, "aria-controls": l11.linkedPanel ? l11.panelId : void 0, onKeyDown: D7, onKeyUp: d14, onClick: P4 };
  return X({ ourProps: a13, theirProps: T7, slot: b6, defaultTag: te, name: "Disclosure.Button" });
}
var le2 = "div";
var oe = S2.RenderStrategy | S2.Static;
function re2(e6, n7) {
  let o12 = I(), { id: u10 = `headlessui-disclosure-panel-${o12}`, ...T7 } = e6, [l11, t15] = M4("Disclosure.Panel"), { close: f14 } = w4("Disclosure.Panel"), s17 = y2(n7, l11.panelRef, (P4) => {
    a10(() => t15({ type: P4 ? 4 : 5 }));
  });
  (0, import_react33.useEffect)(() => (t15({ type: 3, panelId: u10 }), () => {
    t15({ type: 3, panelId: null });
  }), [u10, t15]);
  let i9 = C(), c15 = (() => i9 !== null ? (i9 & d5.Open) === d5.Open : l11.disclosureState === 0)(), D7 = (0, import_react33.useMemo)(() => ({ open: l11.disclosureState === 0, close: f14 }), [l11, f14]), d14 = { ref: s17, id: u10 };
  return import_react33.default.createElement(H3.Provider, { value: l11.panelId }, X({ ourProps: d14, theirProps: T7, slot: D7, defaultTag: le2, features: oe, visible: c15, name: "Disclosure.Panel" }));
}
var se2 = D2(ee);
var ue2 = D2(ne);
var ie = D2(re2);
var ve = Object.assign(se2, { Button: ue2, Panel: ie });

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react35 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react34 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a11 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o11(e6) {
  var r10, i9;
  let n7 = (r10 = e6.innerText) != null ? r10 : "", t15 = e6.cloneNode(true);
  if (!(t15 instanceof HTMLElement))
    return n7;
  let u10 = false;
  for (let f14 of t15.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f14.remove(), u10 = true;
  let l11 = u10 ? (i9 = t15.innerText) != null ? i9 : "" : n7;
  return a11.test(l11) && (l11 = l11.replace(a11, "")), l11;
}
function g4(e6) {
  let n7 = e6.getAttribute("aria-label");
  if (typeof n7 == "string")
    return n7.trim();
  let t15 = e6.getAttribute("aria-labelledby");
  if (t15) {
    let u10 = t15.split(" ").map((l11) => {
      let r10 = document.getElementById(l11);
      if (r10) {
        let i9 = r10.getAttribute("aria-label");
        return typeof i9 == "string" ? i9.trim() : o11(r10).trim();
      }
      return null;
    }).filter(Boolean);
    if (u10.length > 0)
      return u10.join(", ");
  }
  return o11(e6).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b4(c15) {
  let t15 = (0, import_react34.useRef)(""), r10 = (0, import_react34.useRef)("");
  return o4(() => {
    let e6 = c15.current;
    if (!e6)
      return "";
    let u10 = e6.innerText;
    if (t15.current === u10)
      return r10.current;
    let n7 = g4(e6).trim().toLowerCase();
    return t15.current = u10, r10.current = n7, n7;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var Be2 = ((n7) => (n7[n7.Open = 0] = "Open", n7[n7.Closed = 1] = "Closed", n7))(Be2 || {});
var He3 = ((n7) => (n7[n7.Single = 0] = "Single", n7[n7.Multi = 1] = "Multi", n7))(He3 || {});
var Ge3 = ((n7) => (n7[n7.Pointer = 0] = "Pointer", n7[n7.Other = 1] = "Other", n7))(Ge3 || {});
var Ne3 = ((i9) => (i9[i9.OpenListbox = 0] = "OpenListbox", i9[i9.CloseListbox = 1] = "CloseListbox", i9[i9.GoToOption = 2] = "GoToOption", i9[i9.Search = 3] = "Search", i9[i9.ClearSearch = 4] = "ClearSearch", i9[i9.RegisterOption = 5] = "RegisterOption", i9[i9.UnregisterOption = 6] = "UnregisterOption", i9[i9.RegisterLabel = 7] = "RegisterLabel", i9))(Ne3 || {});
function z4(e6, a13 = (n7) => n7) {
  let n7 = e6.activeOptionIndex !== null ? e6.options[e6.activeOptionIndex] : null, r10 = I2(a13(e6.options.slice()), (t15) => t15.dataRef.current.domRef.current), l11 = n7 ? r10.indexOf(n7) : null;
  return l11 === -1 && (l11 = null), { options: r10, activeOptionIndex: l11 };
}
var je3 = { [1](e6) {
  return e6.dataRef.current.disabled || e6.listboxState === 1 ? e6 : { ...e6, activeOptionIndex: null, listboxState: 1 };
}, [0](e6) {
  if (e6.dataRef.current.disabled || e6.listboxState === 0)
    return e6;
  let a13 = e6.activeOptionIndex, { isSelected: n7 } = e6.dataRef.current, r10 = e6.options.findIndex((l11) => n7(l11.dataRef.current.value));
  return r10 !== -1 && (a13 = r10), { ...e6, listboxState: 0, activeOptionIndex: a13 };
}, [2](e6, a13) {
  var l11;
  if (e6.dataRef.current.disabled || e6.listboxState === 1)
    return e6;
  let n7 = z4(e6), r10 = x(a13, { resolveItems: () => n7.options, resolveActiveIndex: () => n7.activeOptionIndex, resolveId: (t15) => t15.id, resolveDisabled: (t15) => t15.dataRef.current.disabled });
  return { ...e6, ...n7, searchQuery: "", activeOptionIndex: r10, activationTrigger: (l11 = a13.trigger) != null ? l11 : 1 };
}, [3]: (e6, a13) => {
  if (e6.dataRef.current.disabled || e6.listboxState === 1)
    return e6;
  let r10 = e6.searchQuery !== "" ? 0 : 1, l11 = e6.searchQuery + a13.value.toLowerCase(), p9 = (e6.activeOptionIndex !== null ? e6.options.slice(e6.activeOptionIndex + r10).concat(e6.options.slice(0, e6.activeOptionIndex + r10)) : e6.options).find((i9) => {
    var b6;
    return !i9.dataRef.current.disabled && ((b6 = i9.dataRef.current.textValue) == null ? void 0 : b6.startsWith(l11));
  }), u10 = p9 ? e6.options.indexOf(p9) : -1;
  return u10 === -1 || u10 === e6.activeOptionIndex ? { ...e6, searchQuery: l11 } : { ...e6, searchQuery: l11, activeOptionIndex: u10, activationTrigger: 1 };
}, [4](e6) {
  return e6.dataRef.current.disabled || e6.listboxState === 1 || e6.searchQuery === "" ? e6 : { ...e6, searchQuery: "" };
}, [5]: (e6, a13) => {
  let n7 = { id: a13.id, dataRef: a13.dataRef }, r10 = z4(e6, (l11) => [...l11, n7]);
  return e6.activeOptionIndex === null && e6.dataRef.current.isSelected(a13.dataRef.current.value) && (r10.activeOptionIndex = r10.options.indexOf(n7)), { ...e6, ...r10 };
}, [6]: (e6, a13) => {
  let n7 = z4(e6, (r10) => {
    let l11 = r10.findIndex((t15) => t15.id === a13.id);
    return l11 !== -1 && r10.splice(l11, 1), r10;
  });
  return { ...e6, ...n7, activationTrigger: 1 };
}, [7]: (e6, a13) => ({ ...e6, labelId: a13.id }) };
var J2 = (0, import_react35.createContext)(null);
J2.displayName = "ListboxActionsContext";
function U2(e6) {
  let a13 = (0, import_react35.useContext)(J2);
  if (a13 === null) {
    let n7 = new Error(`<${e6} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n7, U2), n7;
  }
  return a13;
}
var q2 = (0, import_react35.createContext)(null);
q2.displayName = "ListboxDataContext";
function B(e6) {
  let a13 = (0, import_react35.useContext)(q2);
  if (a13 === null) {
    let n7 = new Error(`<${e6} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n7, B), n7;
  }
  return a13;
}
function Ve2(e6, a13) {
  return u(a13.type, je3, e6, a13);
}
var Ke3 = import_react35.Fragment;
function Qe3(e6, a13) {
  let { value: n7, defaultValue: r10, form: l11, name: t15, onChange: p9, by: u10 = (s17, c15) => s17 === c15, disabled: i9 = false, horizontal: b6 = false, multiple: m11 = false, ...L3 } = e6;
  const P4 = b6 ? "horizontal" : "vertical";
  let S9 = y2(a13), [g5 = m11 ? [] : void 0, R3] = T4(n7, p9, r10), [T7, o12] = (0, import_react35.useReducer)(Ve2, { dataRef: (0, import_react35.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), x7 = (0, import_react35.useRef)({ static: false, hold: false }), E8 = (0, import_react35.useRef)(null), H8 = (0, import_react35.useRef)(null), X6 = (0, import_react35.useRef)(null), C5 = o4(typeof u10 == "string" ? (s17, c15) => {
    let O4 = u10;
    return (s17 == null ? void 0 : s17[O4]) === (c15 == null ? void 0 : c15[O4]);
  } : u10), A5 = (0, import_react35.useCallback)((s17) => u(d14.mode, { [1]: () => g5.some((c15) => C5(c15, s17)), [0]: () => C5(g5, s17) }), [g5]), d14 = (0, import_react35.useMemo)(() => ({ ...T7, value: g5, disabled: i9, mode: m11 ? 1 : 0, orientation: P4, compare: C5, isSelected: A5, optionsPropsRef: x7, labelRef: E8, buttonRef: H8, optionsRef: X6 }), [g5, i9, m11, T7]);
  l(() => {
    T7.dataRef.current = d14;
  }, [d14]), h2([d14.buttonRef, d14.optionsRef], (s17, c15) => {
    var O4;
    o12({ type: 1 }), h(c15, T.Loose) || (s17.preventDefault(), (O4 = d14.buttonRef.current) == null || O4.focus());
  }, d14.listboxState === 0);
  let G2 = (0, import_react35.useMemo)(() => ({ open: d14.listboxState === 0, disabled: i9, value: g5 }), [d14, i9, g5]), ie4 = o4((s17) => {
    let c15 = d14.options.find((O4) => O4.id === s17);
    c15 && F8(c15.dataRef.current.value);
  }), re7 = o4(() => {
    if (d14.activeOptionIndex !== null) {
      let { dataRef: s17, id: c15 } = d14.options[d14.activeOptionIndex];
      F8(s17.current.value), o12({ type: 2, focus: a2.Specific, id: c15 });
    }
  }), ae3 = o4(() => o12({ type: 0 })), le3 = o4(() => o12({ type: 1 })), se5 = o4((s17, c15, O4) => s17 === a2.Specific ? o12({ type: 2, focus: a2.Specific, id: c15, trigger: O4 }) : o12({ type: 2, focus: s17, trigger: O4 })), pe3 = o4((s17, c15) => (o12({ type: 5, id: s17, dataRef: c15 }), () => o12({ type: 6, id: s17 }))), ue6 = o4((s17) => (o12({ type: 7, id: s17 }), () => o12({ type: 7, id: null }))), F8 = o4((s17) => u(d14.mode, { [0]() {
    return R3 == null ? void 0 : R3(s17);
  }, [1]() {
    let c15 = d14.value.slice(), O4 = c15.findIndex((M9) => C5(M9, s17));
    return O4 === -1 ? c15.push(s17) : c15.splice(O4, 1), R3 == null ? void 0 : R3(c15);
  } })), de4 = o4((s17) => o12({ type: 3, value: s17 })), ce4 = o4(() => o12({ type: 4 })), fe4 = (0, import_react35.useMemo)(() => ({ onChange: F8, registerOption: pe3, registerLabel: ue6, goToOption: se5, closeListbox: le3, openListbox: ae3, selectActiveOption: re7, selectOption: ie4, search: de4, clearSearch: ce4 }), []), Te3 = { ref: S9 }, N6 = (0, import_react35.useRef)(null), be5 = p();
  return (0, import_react35.useEffect)(() => {
    N6.current && r10 !== void 0 && be5.addEventListener(N6.current, "reset", () => {
      F8(r10);
    });
  }, [N6, F8]), import_react35.default.createElement(J2.Provider, { value: fe4 }, import_react35.default.createElement(q2.Provider, { value: d14 }, import_react35.default.createElement(c5, { value: u(d14.listboxState, { [0]: d5.Open, [1]: d5.Closed }) }, t15 != null && g5 != null && e3({ [t15]: g5 }).map(([s17, c15], O4) => import_react35.default.createElement(c4, { features: p3.Hidden, ref: O4 === 0 ? (M9) => {
    var Y6;
    N6.current = (Y6 = M9 == null ? void 0 : M9.closest("form")) != null ? Y6 : null;
  } : void 0, ...R({ key: s17, as: "input", type: "hidden", hidden: true, readOnly: true, form: l11, name: s17, value: c15 }) })), X({ ourProps: Te3, theirProps: L3, slot: G2, defaultTag: Ke3, name: "Listbox" }))));
}
var We3 = "button";
function Xe3(e6, a13) {
  var R3;
  let n7 = I(), { id: r10 = `headlessui-listbox-button-${n7}`, ...l11 } = e6, t15 = B("Listbox.Button"), p9 = U2("Listbox.Button"), u10 = y2(t15.buttonRef, a13), i9 = p(), b6 = o4((T7) => {
    switch (T7.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        T7.preventDefault(), p9.openListbox(), i9.nextFrame(() => {
          t15.value || p9.goToOption(a2.First);
        });
        break;
      case o8.ArrowUp:
        T7.preventDefault(), p9.openListbox(), i9.nextFrame(() => {
          t15.value || p9.goToOption(a2.Last);
        });
        break;
    }
  }), m11 = o4((T7) => {
    switch (T7.key) {
      case o8.Space:
        T7.preventDefault();
        break;
    }
  }), L3 = o4((T7) => {
    if (r3(T7.currentTarget))
      return T7.preventDefault();
    t15.listboxState === 0 ? (p9.closeListbox(), i9.nextFrame(() => {
      var o12;
      return (o12 = t15.buttonRef.current) == null ? void 0 : o12.focus({ preventScroll: true });
    })) : (T7.preventDefault(), p9.openListbox());
  }), P4 = i2(() => {
    if (t15.labelId)
      return [t15.labelId, r10].join(" ");
  }, [t15.labelId, r10]), S9 = (0, import_react35.useMemo)(() => ({ open: t15.listboxState === 0, disabled: t15.disabled, value: t15.value }), [t15]), g5 = { ref: u10, id: r10, type: s6(e6, t15.buttonRef), "aria-haspopup": "listbox", "aria-controls": (R3 = t15.optionsRef.current) == null ? void 0 : R3.id, "aria-expanded": t15.listboxState === 0, "aria-labelledby": P4, disabled: t15.disabled, onKeyDown: b6, onKeyUp: m11, onClick: L3 };
  return X({ ourProps: g5, theirProps: l11, slot: S9, defaultTag: We3, name: "Listbox.Button" });
}
var $e3 = "label";
function ze3(e6, a13) {
  let n7 = I(), { id: r10 = `headlessui-listbox-label-${n7}`, ...l11 } = e6, t15 = B("Listbox.Label"), p9 = U2("Listbox.Label"), u10 = y2(t15.labelRef, a13);
  l(() => p9.registerLabel(r10), [r10]);
  let i9 = o4(() => {
    var L3;
    return (L3 = t15.buttonRef.current) == null ? void 0 : L3.focus({ preventScroll: true });
  }), b6 = (0, import_react35.useMemo)(() => ({ open: t15.listboxState === 0, disabled: t15.disabled }), [t15]);
  return X({ ourProps: { ref: u10, id: r10, onClick: i9 }, theirProps: l11, slot: b6, defaultTag: $e3, name: "Listbox.Label" });
}
var Je3 = "ul";
var qe3 = S2.RenderStrategy | S2.Static;
function Ye3(e6, a13) {
  var T7;
  let n7 = I(), { id: r10 = `headlessui-listbox-options-${n7}`, ...l11 } = e6, t15 = B("Listbox.Options"), p9 = U2("Listbox.Options"), u10 = y2(t15.optionsRef, a13), i9 = p(), b6 = p(), m11 = C(), L3 = (() => m11 !== null ? (m11 & d5.Open) === d5.Open : t15.listboxState === 0)();
  (0, import_react35.useEffect)(() => {
    var x7;
    let o12 = t15.optionsRef.current;
    o12 && t15.listboxState === 0 && o12 !== ((x7 = e(o12)) == null ? void 0 : x7.activeElement) && o12.focus({ preventScroll: true });
  }, [t15.listboxState, t15.optionsRef]);
  let P4 = o4((o12) => {
    switch (b6.dispose(), o12.key) {
      case o8.Space:
        if (t15.searchQuery !== "")
          return o12.preventDefault(), o12.stopPropagation(), p9.search(o12.key);
      case o8.Enter:
        if (o12.preventDefault(), o12.stopPropagation(), t15.activeOptionIndex !== null) {
          let { dataRef: x7 } = t15.options[t15.activeOptionIndex];
          p9.onChange(x7.current.value);
        }
        t15.mode === 0 && (p9.closeListbox(), o2().nextFrame(() => {
          var x7;
          return (x7 = t15.buttonRef.current) == null ? void 0 : x7.focus({ preventScroll: true });
        }));
        break;
      case u(t15.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return o12.preventDefault(), o12.stopPropagation(), p9.goToOption(a2.Next);
      case u(t15.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return o12.preventDefault(), o12.stopPropagation(), p9.goToOption(a2.Previous);
      case o8.Home:
      case o8.PageUp:
        return o12.preventDefault(), o12.stopPropagation(), p9.goToOption(a2.First);
      case o8.End:
      case o8.PageDown:
        return o12.preventDefault(), o12.stopPropagation(), p9.goToOption(a2.Last);
      case o8.Escape:
        return o12.preventDefault(), o12.stopPropagation(), p9.closeListbox(), i9.nextFrame(() => {
          var x7;
          return (x7 = t15.buttonRef.current) == null ? void 0 : x7.focus({ preventScroll: true });
        });
      case o8.Tab:
        o12.preventDefault(), o12.stopPropagation();
        break;
      default:
        o12.key.length === 1 && (p9.search(o12.key), b6.setTimeout(() => p9.clearSearch(), 350));
        break;
    }
  }), S9 = i2(() => {
    var o12, x7, E8;
    return (E8 = (o12 = t15.labelRef.current) == null ? void 0 : o12.id) != null ? E8 : (x7 = t15.buttonRef.current) == null ? void 0 : x7.id;
  }, [t15.labelRef.current, t15.buttonRef.current]), g5 = (0, import_react35.useMemo)(() => ({ open: t15.listboxState === 0 }), [t15]), R3 = { "aria-activedescendant": t15.activeOptionIndex === null || (T7 = t15.options[t15.activeOptionIndex]) == null ? void 0 : T7.id, "aria-multiselectable": t15.mode === 1 ? true : void 0, "aria-labelledby": S9, "aria-orientation": t15.orientation, id: r10, onKeyDown: P4, role: "listbox", tabIndex: 0, ref: u10 };
  return X({ ourProps: R3, theirProps: l11, slot: g5, defaultTag: Je3, features: qe3, visible: L3, name: "Listbox.Options" });
}
var Ze3 = "li";
function et(e6, a13) {
  let n7 = I(), { id: r10 = `headlessui-listbox-option-${n7}`, disabled: l11 = false, value: t15, ...p9 } = e6, u10 = B("Listbox.Option"), i9 = U2("Listbox.Option"), b6 = u10.activeOptionIndex !== null ? u10.options[u10.activeOptionIndex].id === r10 : false, m11 = u10.isSelected(t15), L3 = (0, import_react35.useRef)(null), P4 = b4(L3), S9 = s2({ disabled: l11, value: t15, domRef: L3, get textValue() {
    return P4();
  } }), g5 = y2(a13, L3);
  l(() => {
    if (u10.listboxState !== 0 || !b6 || u10.activationTrigger === 0)
      return;
    let A5 = o2();
    return A5.requestAnimationFrame(() => {
      var d14, G2;
      (G2 = (d14 = L3.current) == null ? void 0 : d14.scrollIntoView) == null || G2.call(d14, { block: "nearest" });
    }), A5.dispose;
  }, [L3, b6, u10.listboxState, u10.activationTrigger, u10.activeOptionIndex]), l(() => i9.registerOption(r10, S9), [S9, r10]);
  let R3 = o4((A5) => {
    if (l11)
      return A5.preventDefault();
    i9.onChange(t15), u10.mode === 0 && (i9.closeListbox(), o2().nextFrame(() => {
      var d14;
      return (d14 = u10.buttonRef.current) == null ? void 0 : d14.focus({ preventScroll: true });
    }));
  }), T7 = o4(() => {
    if (l11)
      return i9.goToOption(a2.Nothing);
    i9.goToOption(a2.Specific, r10);
  }), o12 = u3(), x7 = o4((A5) => o12.update(A5)), E8 = o4((A5) => {
    o12.wasMoved(A5) && (l11 || b6 || i9.goToOption(a2.Specific, r10, 0));
  }), H8 = o4((A5) => {
    o12.wasMoved(A5) && (l11 || b6 && i9.goToOption(a2.Nothing));
  }), X6 = (0, import_react35.useMemo)(() => ({ active: b6, selected: m11, disabled: l11 }), [b6, m11, l11]);
  return X({ ourProps: { id: r10, ref: g5, role: "option", tabIndex: l11 === true ? void 0 : -1, "aria-disabled": l11 === true ? true : void 0, "aria-selected": m11, disabled: void 0, onClick: R3, onFocus: T7, onPointerEnter: x7, onMouseEnter: x7, onPointerMove: E8, onMouseMove: E8, onPointerLeave: H8, onMouseLeave: H8 }, theirProps: p9, slot: X6, defaultTag: Ze3, name: "Listbox.Option" });
}
var tt = D2(Qe3);
var ot = D2(Xe3);
var nt = D2(ze3);
var it = D2(Ye3);
var rt = D2(et);
var Nt = Object.assign(tt, { Button: ot, Label: nt, Options: it, Option: rt });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react36 = __toESM(require_react(), 1);
var me2 = ((r10) => (r10[r10.Open = 0] = "Open", r10[r10.Closed = 1] = "Closed", r10))(me2 || {});
var de = ((r10) => (r10[r10.Pointer = 0] = "Pointer", r10[r10.Other = 1] = "Other", r10))(de || {});
var fe = ((a13) => (a13[a13.OpenMenu = 0] = "OpenMenu", a13[a13.CloseMenu = 1] = "CloseMenu", a13[a13.GoToItem = 2] = "GoToItem", a13[a13.Search = 3] = "Search", a13[a13.ClearSearch = 4] = "ClearSearch", a13[a13.RegisterItem = 5] = "RegisterItem", a13[a13.UnregisterItem = 6] = "UnregisterItem", a13))(fe || {});
function w5(e6, u10 = (r10) => r10) {
  let r10 = e6.activeItemIndex !== null ? e6.items[e6.activeItemIndex] : null, i9 = I2(u10(e6.items.slice()), (t15) => t15.dataRef.current.domRef.current), s17 = r10 ? i9.indexOf(r10) : null;
  return s17 === -1 && (s17 = null), { items: i9, activeItemIndex: s17 };
}
var Te = { [1](e6) {
  return e6.menuState === 1 ? e6 : { ...e6, activeItemIndex: null, menuState: 1 };
}, [0](e6) {
  return e6.menuState === 0 ? e6 : { ...e6, __demoMode: false, menuState: 0 };
}, [2]: (e6, u10) => {
  var s17;
  let r10 = w5(e6), i9 = x(u10, { resolveItems: () => r10.items, resolveActiveIndex: () => r10.activeItemIndex, resolveId: (t15) => t15.id, resolveDisabled: (t15) => t15.dataRef.current.disabled });
  return { ...e6, ...r10, searchQuery: "", activeItemIndex: i9, activationTrigger: (s17 = u10.trigger) != null ? s17 : 1 };
}, [3]: (e6, u10) => {
  let i9 = e6.searchQuery !== "" ? 0 : 1, s17 = e6.searchQuery + u10.value.toLowerCase(), o12 = (e6.activeItemIndex !== null ? e6.items.slice(e6.activeItemIndex + i9).concat(e6.items.slice(0, e6.activeItemIndex + i9)) : e6.items).find((l11) => {
    var m11;
    return ((m11 = l11.dataRef.current.textValue) == null ? void 0 : m11.startsWith(s17)) && !l11.dataRef.current.disabled;
  }), a13 = o12 ? e6.items.indexOf(o12) : -1;
  return a13 === -1 || a13 === e6.activeItemIndex ? { ...e6, searchQuery: s17 } : { ...e6, searchQuery: s17, activeItemIndex: a13, activationTrigger: 1 };
}, [4](e6) {
  return e6.searchQuery === "" ? e6 : { ...e6, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e6, u10) => {
  let r10 = w5(e6, (i9) => [...i9, { id: u10.id, dataRef: u10.dataRef }]);
  return { ...e6, ...r10 };
}, [6]: (e6, u10) => {
  let r10 = w5(e6, (i9) => {
    let s17 = i9.findIndex((t15) => t15.id === u10.id);
    return s17 !== -1 && i9.splice(s17, 1), i9;
  });
  return { ...e6, ...r10, activationTrigger: 1 };
} };
var U3 = (0, import_react36.createContext)(null);
U3.displayName = "MenuContext";
function O2(e6) {
  let u10 = (0, import_react36.useContext)(U3);
  if (u10 === null) {
    let r10 = new Error(`<${e6} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r10, O2), r10;
  }
  return u10;
}
function ye3(e6, u10) {
  return u(u10.type, Te, e6, u10);
}
var Ie2 = import_react36.Fragment;
function Me2(e6, u10) {
  let { __demoMode: r10 = false, ...i9 } = e6, s17 = (0, import_react36.useReducer)(ye3, { __demoMode: r10, menuState: r10 ? 0 : 1, buttonRef: (0, import_react36.createRef)(), itemsRef: (0, import_react36.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t15, itemsRef: o12, buttonRef: a13 }, l11] = s17, m11 = y2(u10);
  h2([a13, o12], (g5, R3) => {
    var p9;
    l11({ type: 1 }), h(R3, T.Loose) || (g5.preventDefault(), (p9 = a13.current) == null || p9.focus());
  }, t15 === 0);
  let I7 = o4(() => {
    l11({ type: 1 });
  }), A5 = (0, import_react36.useMemo)(() => ({ open: t15 === 0, close: I7 }), [t15, I7]), f14 = { ref: m11 };
  return import_react36.default.createElement(U3.Provider, { value: s17 }, import_react36.default.createElement(c5, { value: u(t15, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: f14, theirProps: i9, slot: A5, defaultTag: Ie2, name: "Menu" })));
}
var ge4 = "button";
function Re(e6, u10) {
  var R3;
  let r10 = I(), { id: i9 = `headlessui-menu-button-${r10}`, ...s17 } = e6, [t15, o12] = O2("Menu.Button"), a13 = y2(t15.buttonRef, u10), l11 = p(), m11 = o4((p9) => {
    switch (p9.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        p9.preventDefault(), p9.stopPropagation(), o12({ type: 0 }), l11.nextFrame(() => o12({ type: 2, focus: a2.First }));
        break;
      case o8.ArrowUp:
        p9.preventDefault(), p9.stopPropagation(), o12({ type: 0 }), l11.nextFrame(() => o12({ type: 2, focus: a2.Last }));
        break;
    }
  }), I7 = o4((p9) => {
    switch (p9.key) {
      case o8.Space:
        p9.preventDefault();
        break;
    }
  }), A5 = o4((p9) => {
    if (r3(p9.currentTarget))
      return p9.preventDefault();
    e6.disabled || (t15.menuState === 0 ? (o12({ type: 1 }), l11.nextFrame(() => {
      var M9;
      return (M9 = t15.buttonRef.current) == null ? void 0 : M9.focus({ preventScroll: true });
    })) : (p9.preventDefault(), o12({ type: 0 })));
  }), f14 = (0, import_react36.useMemo)(() => ({ open: t15.menuState === 0 }), [t15]), g5 = { ref: a13, id: i9, type: s6(e6, t15.buttonRef), "aria-haspopup": "menu", "aria-controls": (R3 = t15.itemsRef.current) == null ? void 0 : R3.id, "aria-expanded": t15.menuState === 0, onKeyDown: m11, onKeyUp: I7, onClick: A5 };
  return X({ ourProps: g5, theirProps: s17, slot: f14, defaultTag: ge4, name: "Menu.Button" });
}
var Ae = "div";
var be = S2.RenderStrategy | S2.Static;
function Ee(e6, u10) {
  var M9, b6;
  let r10 = I(), { id: i9 = `headlessui-menu-items-${r10}`, ...s17 } = e6, [t15, o12] = O2("Menu.Items"), a13 = y2(t15.itemsRef, u10), l11 = n4(t15.itemsRef), m11 = p(), I7 = C(), A5 = (() => I7 !== null ? (I7 & d5.Open) === d5.Open : t15.menuState === 0)();
  (0, import_react36.useEffect)(() => {
    let n7 = t15.itemsRef.current;
    n7 && t15.menuState === 0 && n7 !== (l11 == null ? void 0 : l11.activeElement) && n7.focus({ preventScroll: true });
  }, [t15.menuState, t15.itemsRef, l11]), F2({ container: t15.itemsRef.current, enabled: t15.menuState === 0, accept(n7) {
    return n7.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n7.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n7) {
    n7.setAttribute("role", "none");
  } });
  let f14 = o4((n7) => {
    var E8, P4;
    switch (m11.dispose(), n7.key) {
      case o8.Space:
        if (t15.searchQuery !== "")
          return n7.preventDefault(), n7.stopPropagation(), o12({ type: 3, value: n7.key });
      case o8.Enter:
        if (n7.preventDefault(), n7.stopPropagation(), o12({ type: 1 }), t15.activeItemIndex !== null) {
          let { dataRef: S9 } = t15.items[t15.activeItemIndex];
          (P4 = (E8 = S9.current) == null ? void 0 : E8.domRef.current) == null || P4.click();
        }
        D(t15.buttonRef.current);
        break;
      case o8.ArrowDown:
        return n7.preventDefault(), n7.stopPropagation(), o12({ type: 2, focus: a2.Next });
      case o8.ArrowUp:
        return n7.preventDefault(), n7.stopPropagation(), o12({ type: 2, focus: a2.Previous });
      case o8.Home:
      case o8.PageUp:
        return n7.preventDefault(), n7.stopPropagation(), o12({ type: 2, focus: a2.First });
      case o8.End:
      case o8.PageDown:
        return n7.preventDefault(), n7.stopPropagation(), o12({ type: 2, focus: a2.Last });
      case o8.Escape:
        n7.preventDefault(), n7.stopPropagation(), o12({ type: 1 }), o2().nextFrame(() => {
          var S9;
          return (S9 = t15.buttonRef.current) == null ? void 0 : S9.focus({ preventScroll: true });
        });
        break;
      case o8.Tab:
        n7.preventDefault(), n7.stopPropagation(), o12({ type: 1 }), o2().nextFrame(() => {
          _(t15.buttonRef.current, n7.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n7.key.length === 1 && (o12({ type: 3, value: n7.key }), m11.setTimeout(() => o12({ type: 4 }), 350));
        break;
    }
  }), g5 = o4((n7) => {
    switch (n7.key) {
      case o8.Space:
        n7.preventDefault();
        break;
    }
  }), R3 = (0, import_react36.useMemo)(() => ({ open: t15.menuState === 0 }), [t15]), p9 = { "aria-activedescendant": t15.activeItemIndex === null || (M9 = t15.items[t15.activeItemIndex]) == null ? void 0 : M9.id, "aria-labelledby": (b6 = t15.buttonRef.current) == null ? void 0 : b6.id, id: i9, onKeyDown: f14, onKeyUp: g5, role: "menu", tabIndex: 0, ref: a13 };
  return X({ ourProps: p9, theirProps: s17, slot: R3, defaultTag: Ae, features: be, visible: A5, name: "Menu.Items" });
}
var Se = import_react36.Fragment;
function Pe2(e6, u10) {
  let r10 = I(), { id: i9 = `headlessui-menu-item-${r10}`, disabled: s17 = false, ...t15 } = e6, [o12, a13] = O2("Menu.Item"), l11 = o12.activeItemIndex !== null ? o12.items[o12.activeItemIndex].id === i9 : false, m11 = (0, import_react36.useRef)(null), I7 = y2(u10, m11);
  l(() => {
    if (o12.__demoMode || o12.menuState !== 0 || !l11 || o12.activationTrigger === 0)
      return;
    let T7 = o2();
    return T7.requestAnimationFrame(() => {
      var v5, B3;
      (B3 = (v5 = m11.current) == null ? void 0 : v5.scrollIntoView) == null || B3.call(v5, { block: "nearest" });
    }), T7.dispose;
  }, [o12.__demoMode, m11, l11, o12.menuState, o12.activationTrigger, o12.activeItemIndex]);
  let A5 = b4(m11), f14 = (0, import_react36.useRef)({ disabled: s17, domRef: m11, get textValue() {
    return A5();
  } });
  l(() => {
    f14.current.disabled = s17;
  }, [f14, s17]), l(() => (a13({ type: 5, id: i9, dataRef: f14 }), () => a13({ type: 6, id: i9 })), [f14, i9]);
  let g5 = o4(() => {
    a13({ type: 1 });
  }), R3 = o4((T7) => {
    if (s17)
      return T7.preventDefault();
    a13({ type: 1 }), D(o12.buttonRef.current);
  }), p9 = o4(() => {
    if (s17)
      return a13({ type: 2, focus: a2.Nothing });
    a13({ type: 2, focus: a2.Specific, id: i9 });
  }), M9 = u3(), b6 = o4((T7) => M9.update(T7)), n7 = o4((T7) => {
    M9.wasMoved(T7) && (s17 || l11 || a13({ type: 2, focus: a2.Specific, id: i9, trigger: 0 }));
  }), E8 = o4((T7) => {
    M9.wasMoved(T7) && (s17 || l11 && a13({ type: 2, focus: a2.Nothing }));
  }), P4 = (0, import_react36.useMemo)(() => ({ active: l11, disabled: s17, close: g5 }), [l11, s17, g5]);
  return X({ ourProps: { id: i9, ref: I7, role: "menuitem", tabIndex: s17 === true ? void 0 : -1, "aria-disabled": s17 === true ? true : void 0, disabled: void 0, onClick: R3, onFocus: p9, onPointerEnter: b6, onMouseEnter: b6, onPointerMove: n7, onMouseMove: n7, onPointerLeave: E8, onMouseLeave: E8 }, theirProps: t15, slot: P4, defaultTag: Se, name: "Menu.Item" });
}
var ve2 = D2(Me2);
var xe3 = D2(Re);
var he = D2(Ee);
var De2 = D2(Pe2);
var it2 = Object.assign(ve2, { Button: xe3, Items: he, Item: De2 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react37 = __toESM(require_react(), 1);
var De3 = ((u10) => (u10[u10.Open = 0] = "Open", u10[u10.Closed = 1] = "Closed", u10))(De3 || {});
var he2 = ((e6) => (e6[e6.TogglePopover = 0] = "TogglePopover", e6[e6.ClosePopover = 1] = "ClosePopover", e6[e6.SetButton = 2] = "SetButton", e6[e6.SetButtonId = 3] = "SetButtonId", e6[e6.SetPanel = 4] = "SetPanel", e6[e6.SetPanelId = 5] = "SetPanelId", e6))(he2 || {});
var He4 = { [0]: (t15) => {
  let o12 = { ...t15, popoverState: u(t15.popoverState, { [0]: 1, [1]: 0 }) };
  return o12.popoverState === 0 && (o12.__demoMode = false), o12;
}, [1](t15) {
  return t15.popoverState === 1 ? t15 : { ...t15, popoverState: 1 };
}, [2](t15, o12) {
  return t15.button === o12.button ? t15 : { ...t15, button: o12.button };
}, [3](t15, o12) {
  return t15.buttonId === o12.buttonId ? t15 : { ...t15, buttonId: o12.buttonId };
}, [4](t15, o12) {
  return t15.panel === o12.panel ? t15 : { ...t15, panel: o12.panel };
}, [5](t15, o12) {
  return t15.panelId === o12.panelId ? t15 : { ...t15, panelId: o12.panelId };
} };
var ue3 = (0, import_react37.createContext)(null);
ue3.displayName = "PopoverContext";
function oe2(t15) {
  let o12 = (0, import_react37.useContext)(ue3);
  if (o12 === null) {
    let u10 = new Error(`<${t15} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u10, oe2), u10;
  }
  return o12;
}
var ie2 = (0, import_react37.createContext)(null);
ie2.displayName = "PopoverAPIContext";
function fe2(t15) {
  let o12 = (0, import_react37.useContext)(ie2);
  if (o12 === null) {
    let u10 = new Error(`<${t15} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u10, fe2), u10;
  }
  return o12;
}
var Pe3 = (0, import_react37.createContext)(null);
Pe3.displayName = "PopoverGroupContext";
function Ee2() {
  return (0, import_react37.useContext)(Pe3);
}
var re3 = (0, import_react37.createContext)(null);
re3.displayName = "PopoverPanelContext";
function _e2() {
  return (0, import_react37.useContext)(re3);
}
function Ge4(t15, o12) {
  return u(o12.type, He4, t15, o12);
}
var ke2 = "div";
function we3(t15, o12) {
  var I7;
  let { __demoMode: u10 = false, ...A5 } = t15, O4 = (0, import_react37.useRef)(null), n7 = y2(o12, T2((l11) => {
    O4.current = l11;
  })), e6 = (0, import_react37.useRef)([]), T7 = (0, import_react37.useReducer)(Ge4, { __demoMode: u10, popoverState: u10 ? 0 : 1, buttons: e6, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react37.createRef)(), afterPanelSentinel: (0, import_react37.createRef)() }), [{ popoverState: P4, button: p9, buttonId: F8, panel: a13, panelId: m11, beforePanelSentinel: y9, afterPanelSentinel: s17 }, i9] = T7, d14 = n4((I7 = O4.current) != null ? I7 : p9), g5 = (0, import_react37.useMemo)(() => {
    if (!p9 || !a13)
      return false;
    for (let K4 of document.querySelectorAll("body > *"))
      if (Number(K4 == null ? void 0 : K4.contains(p9)) ^ Number(K4 == null ? void 0 : K4.contains(a13)))
        return true;
    let l11 = f(), R3 = l11.indexOf(p9), q5 = (R3 + l11.length - 1) % l11.length, W2 = (R3 + 1) % l11.length, z7 = l11[q5], ge6 = l11[W2];
    return !a13.contains(z7) && !a13.contains(ge6);
  }, [p9, a13]), L3 = s2(F8), h11 = s2(m11), _6 = (0, import_react37.useMemo)(() => ({ buttonId: L3, panelId: h11, close: () => i9({ type: 1 }) }), [L3, h11, i9]), B3 = Ee2(), D7 = B3 == null ? void 0 : B3.registerPopover, f14 = o4(() => {
    var l11;
    return (l11 = B3 == null ? void 0 : B3.isFocusWithinPopoverGroup()) != null ? l11 : (d14 == null ? void 0 : d14.activeElement) && ((p9 == null ? void 0 : p9.contains(d14.activeElement)) || (a13 == null ? void 0 : a13.contains(d14.activeElement)));
  });
  (0, import_react37.useEffect)(() => D7 == null ? void 0 : D7(_6), [D7, _6]);
  let [E8, b6] = ae2(), c15 = p8({ portals: E8, defaultContainers: [p9, a13] });
  E3(d14 == null ? void 0 : d14.defaultView, "focus", (l11) => {
    var R3, q5, W2, z7;
    l11.target !== window && l11.target instanceof HTMLElement && P4 === 0 && (f14() || p9 && a13 && (c15.contains(l11.target) || (q5 = (R3 = y9.current) == null ? void 0 : R3.contains) != null && q5.call(R3, l11.target) || (z7 = (W2 = s17.current) == null ? void 0 : W2.contains) != null && z7.call(W2, l11.target) || i9({ type: 1 })));
  }, true), h2(c15.resolveContainers, (l11, R3) => {
    i9({ type: 1 }), h(R3, T.Loose) || (l11.preventDefault(), p9 == null || p9.focus());
  }, P4 === 0);
  let M9 = o4((l11) => {
    i9({ type: 1 });
    let R3 = (() => l11 ? l11 instanceof HTMLElement ? l11 : "current" in l11 && l11.current instanceof HTMLElement ? l11.current : p9 : p9)();
    R3 == null || R3.focus();
  }), r10 = (0, import_react37.useMemo)(() => ({ close: M9, isPortalled: g5 }), [M9, g5]), v5 = (0, import_react37.useMemo)(() => ({ open: P4 === 0, close: M9 }), [P4, M9]), x7 = { ref: n7 };
  return import_react37.default.createElement(re3.Provider, { value: null }, import_react37.default.createElement(ue3.Provider, { value: T7 }, import_react37.default.createElement(ie2.Provider, { value: r10 }, import_react37.default.createElement(c5, { value: u(P4, { [0]: d5.Open, [1]: d5.Closed }) }, import_react37.default.createElement(b6, null, X({ ourProps: x7, theirProps: A5, slot: v5, defaultTag: ke2, name: "Popover" }), import_react37.default.createElement(c15.MainTreeNode, null))))));
}
var Ne4 = "button";
function Ue3(t15, o12) {
  let u10 = I(), { id: A5 = `headlessui-popover-button-${u10}`, ...O4 } = t15, [n7, e6] = oe2("Popover.Button"), { isPortalled: T7 } = fe2("Popover.Button"), P4 = (0, import_react37.useRef)(null), p9 = `headlessui-focus-sentinel-${I()}`, F8 = Ee2(), a13 = F8 == null ? void 0 : F8.closeOthers, y9 = _e2() !== null;
  (0, import_react37.useEffect)(() => {
    if (!y9)
      return e6({ type: 3, buttonId: A5 }), () => {
        e6({ type: 3, buttonId: null });
      };
  }, [y9, A5, e6]);
  let [s17] = (0, import_react37.useState)(() => Symbol()), i9 = y2(P4, o12, y9 ? null : (r10) => {
    if (r10)
      n7.buttons.current.push(s17);
    else {
      let v5 = n7.buttons.current.indexOf(s17);
      v5 !== -1 && n7.buttons.current.splice(v5, 1);
    }
    n7.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r10 && e6({ type: 2, button: r10 });
  }), d14 = y2(P4, o12), g5 = n4(P4), L3 = o4((r10) => {
    var v5, x7, I7;
    if (y9) {
      if (n7.popoverState === 1)
        return;
      switch (r10.key) {
        case o8.Space:
        case o8.Enter:
          r10.preventDefault(), (x7 = (v5 = r10.target).click) == null || x7.call(v5), e6({ type: 1 }), (I7 = n7.button) == null || I7.focus();
          break;
      }
    } else
      switch (r10.key) {
        case o8.Space:
        case o8.Enter:
          r10.preventDefault(), r10.stopPropagation(), n7.popoverState === 1 && (a13 == null || a13(n7.buttonId)), e6({ type: 0 });
          break;
        case o8.Escape:
          if (n7.popoverState !== 0)
            return a13 == null ? void 0 : a13(n7.buttonId);
          if (!P4.current || g5 != null && g5.activeElement && !P4.current.contains(g5.activeElement))
            return;
          r10.preventDefault(), r10.stopPropagation(), e6({ type: 1 });
          break;
      }
  }), h11 = o4((r10) => {
    y9 || r10.key === o8.Space && r10.preventDefault();
  }), _6 = o4((r10) => {
    var v5, x7;
    r3(r10.currentTarget) || t15.disabled || (y9 ? (e6({ type: 1 }), (v5 = n7.button) == null || v5.focus()) : (r10.preventDefault(), r10.stopPropagation(), n7.popoverState === 1 && (a13 == null || a13(n7.buttonId)), e6({ type: 0 }), (x7 = n7.button) == null || x7.focus()));
  }), B3 = o4((r10) => {
    r10.preventDefault(), r10.stopPropagation();
  }), D7 = n7.popoverState === 0, f14 = (0, import_react37.useMemo)(() => ({ open: D7 }), [D7]), E8 = s6(t15, P4), b6 = y9 ? { ref: d14, type: E8, onKeyDown: L3, onClick: _6 } : { ref: i9, id: n7.buttonId, type: E8, "aria-expanded": n7.popoverState === 0, "aria-controls": n7.panel ? n7.panelId : void 0, onKeyDown: L3, onKeyUp: h11, onClick: _6, onMouseDown: B3 }, c15 = n3(), M9 = o4(() => {
    let r10 = n7.panel;
    if (!r10)
      return;
    function v5() {
      u(c15.current, { [s10.Forwards]: () => O(r10, M.First), [s10.Backwards]: () => O(r10, M.Last) }) === N.Error && O(f().filter((I7) => I7.dataset.headlessuiFocusGuard !== "true"), u(c15.current, { [s10.Forwards]: M.Next, [s10.Backwards]: M.Previous }), { relativeTo: n7.button });
    }
    v5();
  });
  return import_react37.default.createElement(import_react37.default.Fragment, null, X({ ourProps: b6, theirProps: O4, slot: f14, defaultTag: Ne4, name: "Popover.Button" }), D7 && !y9 && T7 && import_react37.default.createElement(c4, { id: p9, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M9 }));
}
var We4 = "div";
var Ke4 = S2.RenderStrategy | S2.Static;
function je4(t15, o12) {
  let u10 = I(), { id: A5 = `headlessui-popover-overlay-${u10}`, ...O4 } = t15, [{ popoverState: n7 }, e6] = oe2("Popover.Overlay"), T7 = y2(o12), P4 = C(), p9 = (() => P4 !== null ? (P4 & d5.Open) === d5.Open : n7 === 0)(), F8 = o4((y9) => {
    if (r3(y9.currentTarget))
      return y9.preventDefault();
    e6({ type: 1 });
  }), a13 = (0, import_react37.useMemo)(() => ({ open: n7 === 0 }), [n7]);
  return X({ ourProps: { ref: T7, id: A5, "aria-hidden": true, onClick: F8 }, theirProps: O4, slot: a13, defaultTag: We4, features: Ke4, visible: p9, name: "Popover.Overlay" });
}
var Ve3 = "div";
var $e4 = S2.RenderStrategy | S2.Static;
function Je4(t15, o12) {
  let u10 = I(), { id: A5 = `headlessui-popover-panel-${u10}`, focus: O4 = false, ...n7 } = t15, [e6, T7] = oe2("Popover.Panel"), { close: P4, isPortalled: p9 } = fe2("Popover.Panel"), F8 = `headlessui-focus-sentinel-before-${I()}`, a13 = `headlessui-focus-sentinel-after-${I()}`, m11 = (0, import_react37.useRef)(null), y9 = y2(m11, o12, (f14) => {
    T7({ type: 4, panel: f14 });
  }), s17 = n4(m11);
  l(() => (T7({ type: 5, panelId: A5 }), () => {
    T7({ type: 5, panelId: null });
  }), [A5, T7]);
  let i9 = C(), d14 = (() => i9 !== null ? (i9 & d5.Open) === d5.Open : e6.popoverState === 0)(), g5 = o4((f14) => {
    var E8;
    switch (f14.key) {
      case o8.Escape:
        if (e6.popoverState !== 0 || !m11.current || s17 != null && s17.activeElement && !m11.current.contains(s17.activeElement))
          return;
        f14.preventDefault(), f14.stopPropagation(), T7({ type: 1 }), (E8 = e6.button) == null || E8.focus();
        break;
    }
  });
  (0, import_react37.useEffect)(() => {
    var f14;
    t15.static || e6.popoverState === 1 && ((f14 = t15.unmount) == null || f14) && T7({ type: 4, panel: null });
  }, [e6.popoverState, t15.unmount, t15.static, T7]), (0, import_react37.useEffect)(() => {
    if (e6.__demoMode || !O4 || e6.popoverState !== 0 || !m11.current)
      return;
    let f14 = s17 == null ? void 0 : s17.activeElement;
    m11.current.contains(f14) || O(m11.current, M.First);
  }, [e6.__demoMode, O4, m11, e6.popoverState]);
  let L3 = (0, import_react37.useMemo)(() => ({ open: e6.popoverState === 0, close: P4 }), [e6, P4]), h11 = { ref: y9, id: A5, onKeyDown: g5, onBlur: O4 && e6.popoverState === 0 ? (f14) => {
    var b6, c15, M9, r10, v5;
    let E8 = f14.relatedTarget;
    E8 && m11.current && ((b6 = m11.current) != null && b6.contains(E8) || (T7({ type: 1 }), ((M9 = (c15 = e6.beforePanelSentinel.current) == null ? void 0 : c15.contains) != null && M9.call(c15, E8) || (v5 = (r10 = e6.afterPanelSentinel.current) == null ? void 0 : r10.contains) != null && v5.call(r10, E8)) && E8.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, _6 = n3(), B3 = o4(() => {
    let f14 = m11.current;
    if (!f14)
      return;
    function E8() {
      u(_6.current, { [s10.Forwards]: () => {
        var c15;
        O(f14, M.First) === N.Error && ((c15 = e6.afterPanelSentinel.current) == null || c15.focus());
      }, [s10.Backwards]: () => {
        var b6;
        (b6 = e6.button) == null || b6.focus({ preventScroll: true });
      } });
    }
    E8();
  }), D7 = o4(() => {
    let f14 = m11.current;
    if (!f14)
      return;
    function E8() {
      u(_6.current, { [s10.Forwards]: () => {
        var x7;
        if (!e6.button)
          return;
        let b6 = f(), c15 = b6.indexOf(e6.button), M9 = b6.slice(0, c15 + 1), v5 = [...b6.slice(c15 + 1), ...M9];
        for (let I7 of v5.slice())
          if (I7.dataset.headlessuiFocusGuard === "true" || (x7 = e6.panel) != null && x7.contains(I7)) {
            let l11 = v5.indexOf(I7);
            l11 !== -1 && v5.splice(l11, 1);
          }
        O(v5, M.First, { sorted: false });
      }, [s10.Backwards]: () => {
        var c15;
        O(f14, M.Previous) === N.Error && ((c15 = e6.button) == null || c15.focus());
      } });
    }
    E8();
  });
  return import_react37.default.createElement(re3.Provider, { value: A5 }, d14 && p9 && import_react37.default.createElement(c4, { id: F8, ref: e6.beforePanelSentinel, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B3 }), X({ ourProps: h11, theirProps: n7, slot: L3, defaultTag: Ve3, features: $e4, visible: d14, name: "Popover.Panel" }), d14 && p9 && import_react37.default.createElement(c4, { id: a13, ref: e6.afterPanelSentinel, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: D7 }));
}
var Xe4 = "div";
function Ye4(t15, o12) {
  let u10 = (0, import_react37.useRef)(null), A5 = y2(u10, o12), [O4, n7] = (0, import_react37.useState)([]), e6 = o4((s17) => {
    n7((i9) => {
      let d14 = i9.indexOf(s17);
      if (d14 !== -1) {
        let g5 = i9.slice();
        return g5.splice(d14, 1), g5;
      }
      return i9;
    });
  }), T7 = o4((s17) => (n7((i9) => [...i9, s17]), () => e6(s17))), P4 = o4(() => {
    var d14;
    let s17 = e(u10);
    if (!s17)
      return false;
    let i9 = s17.activeElement;
    return (d14 = u10.current) != null && d14.contains(i9) ? true : O4.some((g5) => {
      var L3, h11;
      return ((L3 = s17.getElementById(g5.buttonId.current)) == null ? void 0 : L3.contains(i9)) || ((h11 = s17.getElementById(g5.panelId.current)) == null ? void 0 : h11.contains(i9));
    });
  }), p9 = o4((s17) => {
    for (let i9 of O4)
      i9.buttonId.current !== s17 && i9.close();
  }), F8 = (0, import_react37.useMemo)(() => ({ registerPopover: T7, unregisterPopover: e6, isFocusWithinPopoverGroup: P4, closeOthers: p9 }), [T7, e6, P4, p9]), a13 = (0, import_react37.useMemo)(() => ({}), []), m11 = t15, y9 = { ref: A5 };
  return import_react37.default.createElement(Pe3.Provider, { value: F8 }, X({ ourProps: y9, theirProps: m11, slot: a13, defaultTag: Xe4, name: "Popover.Group" }));
}
var qe4 = D2(we3);
var ze4 = D2(Ue3);
var Qe4 = D2(je4);
var Ze4 = D2(Je4);
var et2 = D2(Ye4);
var kt = Object.assign(qe4, { Button: ze4, Overlay: Qe4, Panel: Ze4, Group: et2 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react38 = __toESM(require_react(), 1);
function c11(a13 = 0) {
  let [l11, r10] = (0, import_react38.useState)(a13), t15 = f7(), o12 = (0, import_react38.useCallback)((e6) => {
    t15.current && r10((u10) => u10 | e6);
  }, [l11, t15]), m11 = (0, import_react38.useCallback)((e6) => Boolean(l11 & e6), [l11]), s17 = (0, import_react38.useCallback)((e6) => {
    t15.current && r10((u10) => u10 & ~e6);
  }, [r10, t15]), g5 = (0, import_react38.useCallback)((e6) => {
    t15.current && r10((u10) => u10 ^ e6);
  }, [r10]);
  return { flags: l11, addFlag: o12, hasFlag: m11, removeFlag: s17, toggleFlag: g5 };
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react39 = __toESM(require_react(), 1);
var d11 = (0, import_react39.createContext)(null);
function u9() {
  let o12 = (0, import_react39.useContext)(d11);
  if (o12 === null) {
    let t15 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t15, u9), t15;
  }
  return o12;
}
function H6() {
  let [o12, t15] = (0, import_react39.useState)([]);
  return [o12.length > 0 ? o12.join(" ") : void 0, (0, import_react39.useMemo)(() => function(e6) {
    let s17 = o4((r10) => (t15((l11) => [...l11, r10]), () => t15((l11) => {
      let n7 = l11.slice(), p9 = n7.indexOf(r10);
      return p9 !== -1 && n7.splice(p9, 1), n7;
    }))), a13 = (0, import_react39.useMemo)(() => ({ register: s17, slot: e6.slot, name: e6.name, props: e6.props }), [s17, e6.slot, e6.name, e6.props]);
    return import_react39.default.createElement(d11.Provider, { value: a13 }, e6.children);
  }, [t15])];
}
var A = "label";
function h10(o12, t15) {
  let i9 = I(), { id: e6 = `headlessui-label-${i9}`, passive: s17 = false, ...a13 } = o12, r10 = u9(), l11 = y2(t15);
  l(() => r10.register(e6), [e6, r10.register]);
  let n7 = { ref: l11, ...r10.props, id: e6 };
  return s17 && ("onClick" in n7 && (delete n7.htmlFor, delete n7.onClick), "onClick" in a13 && delete a13.onClick), X({ ourProps: n7, theirProps: a13, slot: r10.slot || {}, defaultTag: A, name: r10.name || "Label" });
}
var v3 = D2(h10);
var M5 = Object.assign(v3, {});

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var Ce2 = ((t15) => (t15[t15.RegisterOption = 0] = "RegisterOption", t15[t15.UnregisterOption = 1] = "UnregisterOption", t15))(Ce2 || {});
var ke3 = { [0](r10, o12) {
  let t15 = [...r10.options, { id: o12.id, element: o12.element, propsRef: o12.propsRef }];
  return { ...r10, options: I2(t15, (p9) => p9.element.current) };
}, [1](r10, o12) {
  let t15 = r10.options.slice(), p9 = r10.options.findIndex((T7) => T7.id === o12.id);
  return p9 === -1 ? r10 : (t15.splice(p9, 1), { ...r10, options: t15 });
} };
var B2 = (0, import_react40.createContext)(null);
B2.displayName = "RadioGroupDataContext";
function oe3(r10) {
  let o12 = (0, import_react40.useContext)(B2);
  if (o12 === null) {
    let t15 = new Error(`<${r10} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, oe3), t15;
  }
  return o12;
}
var $3 = (0, import_react40.createContext)(null);
$3.displayName = "RadioGroupActionsContext";
function ne2(r10) {
  let o12 = (0, import_react40.useContext)($3);
  if (o12 === null) {
    let t15 = new Error(`<${r10} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, ne2), t15;
  }
  return o12;
}
function Le(r10, o12) {
  return u(o12.type, ke3, r10, o12);
}
var he3 = "div";
function Fe(r10, o12) {
  let t15 = I(), { id: p9 = `headlessui-radiogroup-${t15}`, value: T7, defaultValue: v5, form: S9, name: m11, onChange: M9, by: G2 = (e6, i9) => e6 === i9, disabled: C5 = false, ...H8 } = r10, y9 = o4(typeof G2 == "string" ? (e6, i9) => {
    let n7 = G2;
    return (e6 == null ? void 0 : e6[n7]) === (i9 == null ? void 0 : i9[n7]);
  } : G2), [P4, h11] = (0, import_react40.useReducer)(Le, { options: [] }), a13 = P4.options, [N6, R3] = H6(), [k2, U4] = M2(), L3 = (0, import_react40.useRef)(null), W2 = y2(L3, o12), [l11, s17] = T4(T7, M9, v5), b6 = (0, import_react40.useMemo)(() => a13.find((e6) => !e6.propsRef.current.disabled), [a13]), F8 = (0, import_react40.useMemo)(() => a13.some((e6) => y9(e6.propsRef.current.value, l11)), [a13, l11]), d14 = o4((e6) => {
    var n7;
    if (C5 || y9(e6, l11))
      return false;
    let i9 = (n7 = a13.find((f14) => y9(f14.propsRef.current.value, e6))) == null ? void 0 : n7.propsRef.current;
    return i9 != null && i9.disabled ? false : (s17 == null || s17(e6), true);
  });
  F2({ container: L3.current, accept(e6) {
    return e6.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e6) {
    e6.setAttribute("role", "none");
  } });
  let x7 = o4((e6) => {
    let i9 = L3.current;
    if (!i9)
      return;
    let n7 = e(i9), f14 = a13.filter((u10) => u10.propsRef.current.disabled === false).map((u10) => u10.element.current);
    switch (e6.key) {
      case o8.Enter:
        p2(e6.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (e6.preventDefault(), e6.stopPropagation(), O(f14, M.Previous | M.WrapAround) === N.Success) {
          let g5 = a13.find((K4) => K4.element.current === (n7 == null ? void 0 : n7.activeElement));
          g5 && d14(g5.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (e6.preventDefault(), e6.stopPropagation(), O(f14, M.Next | M.WrapAround) === N.Success) {
          let g5 = a13.find((K4) => K4.element.current === (n7 == null ? void 0 : n7.activeElement));
          g5 && d14(g5.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          e6.preventDefault(), e6.stopPropagation();
          let u10 = a13.find((g5) => g5.element.current === (n7 == null ? void 0 : n7.activeElement));
          u10 && d14(u10.propsRef.current.value);
        }
        break;
    }
  }), c15 = o4((e6) => (h11({ type: 0, ...e6 }), () => h11({ type: 1, id: e6.id }))), _6 = (0, import_react40.useMemo)(() => ({ value: l11, firstOption: b6, containsCheckedOption: F8, disabled: C5, compare: y9, ...P4 }), [l11, b6, F8, C5, y9, P4]), ie4 = (0, import_react40.useMemo)(() => ({ registerOption: c15, change: d14 }), [c15, d14]), ae3 = { ref: W2, id: p9, role: "radiogroup", "aria-labelledby": N6, "aria-describedby": k2, onKeyDown: x7 }, pe3 = (0, import_react40.useMemo)(() => ({ value: l11 }), [l11]), w6 = (0, import_react40.useRef)(null), le3 = p();
  return (0, import_react40.useEffect)(() => {
    w6.current && v5 !== void 0 && le3.addEventListener(w6.current, "reset", () => {
      d14(v5);
    });
  }, [w6, d14]), import_react40.default.createElement(U4, { name: "RadioGroup.Description" }, import_react40.default.createElement(R3, { name: "RadioGroup.Label" }, import_react40.default.createElement($3.Provider, { value: ie4 }, import_react40.default.createElement(B2.Provider, { value: _6 }, m11 != null && l11 != null && e3({ [m11]: l11 }).map(([e6, i9], n7) => import_react40.default.createElement(c4, { features: p3.Hidden, ref: n7 === 0 ? (f14) => {
    var u10;
    w6.current = (u10 = f14 == null ? void 0 : f14.closest("form")) != null ? u10 : null;
  } : void 0, ...R({ key: e6, as: "input", type: "radio", checked: i9 != null, hidden: true, readOnly: true, form: S9, name: e6, value: i9 }) })), X({ ourProps: ae3, theirProps: H8, slot: pe3, defaultTag: he3, name: "RadioGroup" })))));
}
var xe4 = ((t15) => (t15[t15.Empty = 1] = "Empty", t15[t15.Active = 2] = "Active", t15))(xe4 || {});
var _e3 = "div";
function we4(r10, o12) {
  var x7;
  let t15 = I(), { id: p9 = `headlessui-radiogroup-option-${t15}`, value: T7, disabled: v5 = false, ...S9 } = r10, m11 = (0, import_react40.useRef)(null), M9 = y2(m11, o12), [G2, C5] = H6(), [H8, y9] = M2(), { addFlag: P4, removeFlag: h11, hasFlag: a13 } = c11(1), N6 = s2({ value: T7, disabled: v5 }), R3 = oe3("RadioGroup.Option"), k2 = ne2("RadioGroup.Option");
  l(() => k2.registerOption({ id: p9, element: m11, propsRef: N6 }), [p9, k2, m11, r10]);
  let U4 = o4((c15) => {
    var _6;
    if (r3(c15.currentTarget))
      return c15.preventDefault();
    k2.change(T7) && (P4(2), (_6 = m11.current) == null || _6.focus());
  }), L3 = o4((c15) => {
    if (r3(c15.currentTarget))
      return c15.preventDefault();
    P4(2);
  }), W2 = o4(() => h11(2)), l11 = ((x7 = R3.firstOption) == null ? void 0 : x7.id) === p9, s17 = R3.disabled || v5, b6 = R3.compare(R3.value, T7), F8 = { ref: M9, id: p9, role: "radio", "aria-checked": b6 ? "true" : "false", "aria-labelledby": G2, "aria-describedby": H8, "aria-disabled": s17 ? true : void 0, tabIndex: (() => s17 ? -1 : b6 || !R3.containsCheckedOption && l11 ? 0 : -1)(), onClick: s17 ? void 0 : U4, onFocus: s17 ? void 0 : L3, onBlur: s17 ? void 0 : W2 }, d14 = (0, import_react40.useMemo)(() => ({ checked: b6, disabled: s17, active: a13(2) }), [b6, s17, a13]);
  return import_react40.default.createElement(y9, { name: "RadioGroup.Description" }, import_react40.default.createElement(C5, { name: "RadioGroup.Label" }, X({ ourProps: F8, theirProps: S9, slot: d14, defaultTag: _e3, name: "RadioGroup.Option" })));
}
var Ie3 = D2(Fe);
var Se2 = D2(we4);
var yt = Object.assign(Ie3, { Option: Se2, Label: M5, Description: b2 });

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react41 = __toESM(require_react(), 1);
var y6 = (0, import_react41.createContext)(null);
y6.displayName = "GroupContext";
var Y4 = import_react41.Fragment;
function Z5(s17) {
  var d14;
  let [n7, p9] = (0, import_react41.useState)(null), [c15, f14] = H6(), [r10, h11] = M2(), l11 = (0, import_react41.useMemo)(() => ({ switch: n7, setSwitch: p9, labelledby: c15, describedby: r10 }), [n7, p9, c15, r10]), T7 = {}, b6 = s17;
  return import_react41.default.createElement(h11, { name: "Switch.Description" }, import_react41.default.createElement(f14, { name: "Switch.Label", props: { htmlFor: (d14 = l11.switch) == null ? void 0 : d14.id, onClick(t15) {
    n7 && (t15.currentTarget.tagName === "LABEL" && t15.preventDefault(), n7.click(), n7.focus({ preventScroll: true }));
  } } }, import_react41.default.createElement(y6.Provider, { value: l11 }, X({ ourProps: T7, theirProps: b6, defaultTag: Y4, name: "Switch.Group" }))));
}
var ee4 = "button";
function te3(s17, n7) {
  let p9 = I(), { id: c15 = `headlessui-switch-${p9}`, checked: f14, defaultChecked: r10 = false, onChange: h11, name: l11, value: T7, form: b6, ...d14 } = s17, t15 = (0, import_react41.useContext)(y6), u10 = (0, import_react41.useRef)(null), D7 = y2(u10, n7, t15 === null ? null : t15.setSwitch), [o12, a13] = T4(f14, h11, r10), S9 = o4(() => a13 == null ? void 0 : a13(!o12)), C5 = o4((e6) => {
    if (r3(e6.currentTarget))
      return e6.preventDefault();
    e6.preventDefault(), S9();
  }), L3 = o4((e6) => {
    e6.key === o8.Space ? (e6.preventDefault(), S9()) : e6.key === o8.Enter && p2(e6.currentTarget);
  }), v5 = o4((e6) => e6.preventDefault()), G2 = (0, import_react41.useMemo)(() => ({ checked: o12 }), [o12]), R3 = { id: c15, ref: D7, role: "switch", type: s6(s17, u10), tabIndex: 0, "aria-checked": o12, "aria-labelledby": t15 == null ? void 0 : t15.labelledby, "aria-describedby": t15 == null ? void 0 : t15.describedby, onClick: C5, onKeyUp: L3, onKeyPress: v5 }, k2 = p();
  return (0, import_react41.useEffect)(() => {
    var w6;
    let e6 = (w6 = u10.current) == null ? void 0 : w6.closest("form");
    e6 && r10 !== void 0 && k2.addEventListener(e6, "reset", () => {
      a13(r10);
    });
  }, [u10, a13]), import_react41.default.createElement(import_react41.default.Fragment, null, l11 != null && o12 && import_react41.default.createElement(c4, { features: p3.Hidden, ...R({ as: "input", type: "checkbox", hidden: true, readOnly: true, form: b6, checked: o12, name: l11, value: T7 }) }), X({ ourProps: R3, theirProps: d14, slot: G2, defaultTag: ee4, name: "Switch" }));
}
var ne3 = D2(te3);
var re4 = Z5;
var Ge5 = Object.assign(ne3, { Group: re4, Label: M5, Description: b2 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react42 = __toESM(require_react(), 1);
function A4({ onFocus: n7 }) {
  let [r10, o12] = (0, import_react42.useState)(true), u10 = f7();
  return r10 ? import_react42.default.createElement(c4, { as: "button", type: "button", features: p3.Focusable, onFocus: (a13) => {
    a13.preventDefault();
    let e6, i9 = 50;
    function t15() {
      if (i9-- <= 0) {
        e6 && cancelAnimationFrame(e6);
        return;
      }
      if (n7()) {
        if (cancelAnimationFrame(e6), !u10.current)
          return;
        o12(false);
        return;
      }
      e6 = requestAnimationFrame(t15);
    }
    e6 = requestAnimationFrame(t15);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var r9 = __toESM(require_react(), 1);
var s16 = r9.createContext(null);
function a12() {
  return { groups: /* @__PURE__ */ new Map(), get(n7, t15) {
    var c15;
    let e6 = this.groups.get(n7);
    e6 || (e6 = /* @__PURE__ */ new Map(), this.groups.set(n7, e6));
    let l11 = (c15 = e6.get(t15)) != null ? c15 : 0;
    e6.set(t15, l11 + 1);
    let o12 = Array.from(e6.keys()).indexOf(t15);
    function i9() {
      let u10 = e6.get(t15);
      u10 > 1 ? e6.set(t15, u10 - 1) : e6.delete(t15);
    }
    return [o12, i9];
  } };
}
function C4({ children: n7 }) {
  let t15 = r9.useRef(a12());
  return r9.createElement(s16.Provider, { value: t15 }, n7);
}
function d12(n7) {
  let t15 = r9.useContext(s16);
  if (!t15)
    throw new Error("You must wrap your component in a <StableCollection>");
  let e6 = f13(), [l11, o12] = t15.current.get(n7, e6);
  return r9.useEffect(() => o12, []), l11;
}
function f13() {
  var l11, o12, i9;
  let n7 = (i9 = (o12 = (l11 = r9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l11.ReactCurrentOwner) == null ? void 0 : o12.current) != null ? i9 : null;
  if (!n7)
    return Symbol();
  let t15 = [], e6 = n7;
  for (; e6; )
    t15.push(e6.index), e6 = e6.return;
  return "$." + t15.join(".");
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var ue5 = ((t15) => (t15[t15.Forwards = 0] = "Forwards", t15[t15.Backwards = 1] = "Backwards", t15))(ue5 || {});
var Te2 = ((o12) => (o12[o12.Less = -1] = "Less", o12[o12.Equal = 0] = "Equal", o12[o12.Greater = 1] = "Greater", o12))(Te2 || {});
var de3 = ((r10) => (r10[r10.SetSelectedIndex = 0] = "SetSelectedIndex", r10[r10.RegisterTab = 1] = "RegisterTab", r10[r10.UnregisterTab = 2] = "UnregisterTab", r10[r10.RegisterPanel = 3] = "RegisterPanel", r10[r10.UnregisterPanel = 4] = "UnregisterPanel", r10))(de3 || {});
var ce3 = { [0](e6, n7) {
  var u10;
  let t15 = I2(e6.tabs, (T7) => T7.current), o12 = I2(e6.panels, (T7) => T7.current), s17 = t15.filter((T7) => {
    var l11;
    return !((l11 = T7.current) != null && l11.hasAttribute("disabled"));
  }), r10 = { ...e6, tabs: t15, panels: o12 };
  if (n7.index < 0 || n7.index > t15.length - 1) {
    let T7 = u(Math.sign(n7.index - e6.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(n7.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    return s17.length === 0 ? r10 : { ...r10, selectedIndex: u(T7, { [0]: () => t15.indexOf(s17[0]), [1]: () => t15.indexOf(s17[s17.length - 1]) }) };
  }
  let i9 = t15.slice(0, n7.index), b6 = [...t15.slice(n7.index), ...i9].find((T7) => s17.includes(T7));
  if (!b6)
    return r10;
  let c15 = (u10 = t15.indexOf(b6)) != null ? u10 : e6.selectedIndex;
  return c15 === -1 && (c15 = e6.selectedIndex), { ...r10, selectedIndex: c15 };
}, [1](e6, n7) {
  var r10;
  if (e6.tabs.includes(n7.tab))
    return e6;
  let t15 = e6.tabs[e6.selectedIndex], o12 = I2([...e6.tabs, n7.tab], (i9) => i9.current), s17 = (r10 = o12.indexOf(t15)) != null ? r10 : e6.selectedIndex;
  return s17 === -1 && (s17 = e6.selectedIndex), { ...e6, tabs: o12, selectedIndex: s17 };
}, [2](e6, n7) {
  return { ...e6, tabs: e6.tabs.filter((t15) => t15 !== n7.tab) };
}, [3](e6, n7) {
  return e6.panels.includes(n7.panel) ? e6 : { ...e6, panels: I2([...e6.panels, n7.panel], (t15) => t15.current) };
}, [4](e6, n7) {
  return { ...e6, panels: e6.panels.filter((t15) => t15 !== n7.panel) };
} };
var X4 = (0, import_react43.createContext)(null);
X4.displayName = "TabsDataContext";
function M7(e6) {
  let n7 = (0, import_react43.useContext)(X4);
  if (n7 === null) {
    let t15 = new Error(`<${e6} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, M7), t15;
  }
  return n7;
}
var $4 = (0, import_react43.createContext)(null);
$4.displayName = "TabsActionsContext";
function q4(e6) {
  let n7 = (0, import_react43.useContext)($4);
  if (n7 === null) {
    let t15 = new Error(`<${e6} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, q4), t15;
  }
  return n7;
}
function fe3(e6, n7) {
  return u(n7.type, ce3, e6, n7);
}
var be3 = import_react43.Fragment;
function me3(e6, n7) {
  let { defaultIndex: t15 = 0, vertical: o12 = false, manual: s17 = false, onChange: r10, selectedIndex: i9 = null, ...R3 } = e6;
  const b6 = o12 ? "vertical" : "horizontal", c15 = s17 ? "manual" : "auto";
  let u10 = i9 !== null, T7 = y2(n7), [l11, d14] = (0, import_react43.useReducer)(fe3, { selectedIndex: i9 != null ? i9 : t15, tabs: [], panels: [] }), y9 = (0, import_react43.useMemo)(() => ({ selectedIndex: l11.selectedIndex }), [l11.selectedIndex]), m11 = s2(r10 || (() => {
  })), x7 = s2(l11.tabs), E8 = (0, import_react43.useMemo)(() => ({ orientation: b6, activation: c15, ...l11 }), [b6, c15, l11]), S9 = o4((p9) => (d14({ type: 1, tab: p9 }), () => d14({ type: 2, tab: p9 }))), A5 = o4((p9) => (d14({ type: 3, panel: p9 }), () => d14({ type: 4, panel: p9 }))), L3 = o4((p9) => {
    C5.current !== p9 && m11.current(p9), u10 || d14({ type: 0, index: p9 });
  }), C5 = s2(u10 ? e6.selectedIndex : l11.selectedIndex), N6 = (0, import_react43.useMemo)(() => ({ registerTab: S9, registerPanel: A5, change: L3 }), []);
  l(() => {
    d14({ type: 0, index: i9 != null ? i9 : t15 });
  }, [i9]), l(() => {
    if (C5.current === void 0 || l11.tabs.length <= 0)
      return;
    let p9 = I2(l11.tabs, (a13) => a13.current);
    p9.some((a13, f14) => l11.tabs[f14] !== a13) && L3(p9.indexOf(l11.tabs[C5.current]));
  });
  let B3 = { ref: T7 };
  return import_react43.default.createElement(C4, null, import_react43.default.createElement($4.Provider, { value: N6 }, import_react43.default.createElement(X4.Provider, { value: E8 }, E8.tabs.length <= 0 && import_react43.default.createElement(A4, { onFocus: () => {
    var p9, I7;
    for (let a13 of x7.current)
      if (((p9 = a13.current) == null ? void 0 : p9.tabIndex) === 0)
        return (I7 = a13.current) == null || I7.focus(), true;
    return false;
  } }), X({ ourProps: B3, theirProps: R3, slot: y9, defaultTag: be3, name: "Tabs" }))));
}
var Pe4 = "div";
function ge5(e6, n7) {
  let { orientation: t15, selectedIndex: o12 } = M7("Tab.List"), s17 = y2(n7);
  return X({ ourProps: { ref: s17, role: "tablist", "aria-orientation": t15 }, theirProps: e6, slot: { selectedIndex: o12 }, defaultTag: Pe4, name: "Tabs.List" });
}
var ye4 = "button";
function xe5(e6, n7) {
  var p9, I7;
  let t15 = I(), { id: o12 = `headlessui-tabs-tab-${t15}`, ...s17 } = e6, { orientation: r10, activation: i9, selectedIndex: R3, tabs: b6, panels: c15 } = M7("Tab"), u10 = q4("Tab"), T7 = M7("Tab"), l11 = (0, import_react43.useRef)(null), d14 = y2(l11, n7);
  l(() => u10.registerTab(l11), [u10, l11]);
  let y9 = d12("tabs"), m11 = b6.indexOf(l11);
  m11 === -1 && (m11 = y9);
  let x7 = m11 === R3, E8 = o4((a13) => {
    var j7;
    let f14 = a13();
    if (f14 === N.Success && i9 === "auto") {
      let W2 = (j7 = e(l11)) == null ? void 0 : j7.activeElement, z7 = T7.tabs.findIndex((te4) => te4.current === W2);
      z7 !== -1 && u10.change(z7);
    }
    return f14;
  }), S9 = o4((a13) => {
    let f14 = b6.map((W2) => W2.current).filter(Boolean);
    if (a13.key === o8.Space || a13.key === o8.Enter) {
      a13.preventDefault(), a13.stopPropagation(), u10.change(m11);
      return;
    }
    switch (a13.key) {
      case o8.Home:
      case o8.PageUp:
        return a13.preventDefault(), a13.stopPropagation(), E8(() => O(f14, M.First));
      case o8.End:
      case o8.PageDown:
        return a13.preventDefault(), a13.stopPropagation(), E8(() => O(f14, M.Last));
    }
    if (E8(() => u(r10, { vertical() {
      return a13.key === o8.ArrowUp ? O(f14, M.Previous | M.WrapAround) : a13.key === o8.ArrowDown ? O(f14, M.Next | M.WrapAround) : N.Error;
    }, horizontal() {
      return a13.key === o8.ArrowLeft ? O(f14, M.Previous | M.WrapAround) : a13.key === o8.ArrowRight ? O(f14, M.Next | M.WrapAround) : N.Error;
    } })) === N.Success)
      return a13.preventDefault();
  }), A5 = (0, import_react43.useRef)(false), L3 = o4(() => {
    var a13;
    A5.current || (A5.current = true, (a13 = l11.current) == null || a13.focus(), u10.change(m11), t3(() => {
      A5.current = false;
    }));
  }), C5 = o4((a13) => {
    a13.preventDefault();
  }), N6 = (0, import_react43.useMemo)(() => ({ selected: x7 }), [x7]), B3 = { ref: d14, onKeyDown: S9, onMouseDown: C5, onClick: L3, id: o12, role: "tab", type: s6(e6, l11), "aria-controls": (I7 = (p9 = c15[m11]) == null ? void 0 : p9.current) == null ? void 0 : I7.id, "aria-selected": x7, tabIndex: x7 ? 0 : -1 };
  return X({ ourProps: B3, theirProps: s17, slot: N6, defaultTag: ye4, name: "Tabs.Tab" });
}
var Ee3 = "div";
function Ae2(e6, n7) {
  let { selectedIndex: t15 } = M7("Tab.Panels"), o12 = y2(n7), s17 = (0, import_react43.useMemo)(() => ({ selectedIndex: t15 }), [t15]);
  return X({ ourProps: { ref: o12 }, theirProps: e6, slot: s17, defaultTag: Ee3, name: "Tabs.Panels" });
}
var Re2 = "div";
var Le2 = S2.RenderStrategy | S2.Static;
function De4(e6, n7) {
  var E8, S9, A5, L3;
  let t15 = I(), { id: o12 = `headlessui-tabs-panel-${t15}`, tabIndex: s17 = 0, ...r10 } = e6, { selectedIndex: i9, tabs: R3, panels: b6 } = M7("Tab.Panel"), c15 = q4("Tab.Panel"), u10 = (0, import_react43.useRef)(null), T7 = y2(u10, n7);
  l(() => c15.registerPanel(u10), [c15, u10]);
  let l11 = d12("panels"), d14 = b6.indexOf(u10);
  d14 === -1 && (d14 = l11);
  let y9 = d14 === i9, m11 = (0, import_react43.useMemo)(() => ({ selected: y9 }), [y9]), x7 = { ref: T7, id: o12, role: "tabpanel", "aria-labelledby": (S9 = (E8 = R3[d14]) == null ? void 0 : E8.current) == null ? void 0 : S9.id, tabIndex: y9 ? s17 : -1 };
  return !y9 && ((A5 = r10.unmount) == null || A5) && !((L3 = r10.static) != null && L3) ? import_react43.default.createElement(c4, { as: "span", ...x7 }) : X({ ourProps: x7, theirProps: r10, slot: m11, defaultTag: Re2, features: Le2, visible: y9, name: "Tabs.Panel" });
}
var Se3 = D2(xe5);
var Ie4 = D2(me3);
var Fe2 = D2(ge5);
var he4 = D2(Ae2);
var Me3 = D2(De4);
var rt2 = Object.assign(Se3, { Group: Ie4, List: Fe2, Panels: he4, Panel: Me3 });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react44 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l10(r10) {
  let e6 = { called: false };
  return (...t15) => {
    if (!e6.called)
      return e6.called = true, r10(...t15);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d13(t15, ...e6) {
  t15 && e6.length > 0 && t15.classList.add(...e6);
}
function v4(t15, ...e6) {
  t15 && e6.length > 0 && t15.classList.remove(...e6);
}
function F7(t15, e6) {
  let n7 = o2();
  if (!t15)
    return n7.dispose;
  let { transitionDuration: m11, transitionDelay: o12 } = getComputedStyle(t15), [u10, p9] = [m11, o12].map((a13) => {
    let [r10 = 0] = a13.split(",").filter(Boolean).map((i9) => i9.includes("ms") ? parseFloat(i9) : parseFloat(i9) * 1e3).sort((i9, f14) => f14 - i9);
    return r10;
  }), l11 = u10 + p9;
  if (l11 !== 0) {
    n7.group((r10) => {
      r10.setTimeout(() => {
        e6(), r10.dispose();
      }, l11), r10.addEventListener(t15, "transitionrun", (i9) => {
        i9.target === i9.currentTarget && r10.dispose();
      });
    });
    let a13 = n7.addEventListener(t15, "transitionend", (r10) => {
      r10.target === r10.currentTarget && (e6(), a13());
    });
  } else
    e6();
  return n7.add(() => e6()), n7.dispose;
}
function y7(t15, e6, n7, m11) {
  let o12 = n7 ? "enter" : "leave", u10 = o2(), p9 = m11 !== void 0 ? l10(m11) : () => {
  };
  o12 === "enter" && (t15.removeAttribute("hidden"), t15.style.display = "");
  let l11 = u(o12, { enter: () => e6.enter, leave: () => e6.leave }), a13 = u(o12, { enter: () => e6.enterTo, leave: () => e6.leaveTo }), r10 = u(o12, { enter: () => e6.enterFrom, leave: () => e6.leaveFrom });
  return v4(t15, ...e6.enter, ...e6.enterTo, ...e6.enterFrom, ...e6.leave, ...e6.leaveFrom, ...e6.leaveTo, ...e6.entered), d13(t15, ...l11, ...r10), u10.nextFrame(() => {
    v4(t15, ...r10), d13(t15, ...a13), F7(t15, () => (v4(t15, ...l11), d13(t15, ...e6.entered), p9()));
  }), u10.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D6({ container: i9, direction: t15, classes: o12, onStart: s17, onStop: u10 }) {
  let a13 = f7(), c15 = p(), r10 = s2(t15);
  l(() => {
    let e6 = o2();
    c15.add(e6.dispose);
    let n7 = i9.current;
    if (n7 && r10.current !== "idle" && a13.current)
      return e6.dispose(), s17.current(r10.current), e6.add(y7(n7, o12.current, r10.current === "enter", () => {
        e6.dispose(), u10.current(r10.current);
      })), e6.dispose;
  }, [t15]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x6(t15 = "") {
  return t15.split(" ").filter((n7) => n7.trim().length > 1);
}
var I6 = (0, import_react44.createContext)(null);
I6.displayName = "TransitionContext";
var Ce3 = ((r10) => (r10.Visible = "visible", r10.Hidden = "hidden", r10))(Ce3 || {});
function Ee4() {
  let t15 = (0, import_react44.useContext)(I6);
  if (t15 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t15;
}
function be4() {
  let t15 = (0, import_react44.useContext)(_5);
  if (t15 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t15;
}
var _5 = (0, import_react44.createContext)(null);
_5.displayName = "NestingContext";
function M8(t15) {
  return "children" in t15 ? M8(t15.children) : t15.current.filter(({ el: n7 }) => n7.current !== null).filter(({ state: n7 }) => n7 === "visible").length > 0;
}
function re6(t15, n7) {
  let r10 = s2(t15), o12 = (0, import_react44.useRef)([]), N6 = f7(), H8 = p(), p9 = o4((s17, e6 = j.Hidden) => {
    let a13 = o12.current.findIndex(({ el: i9 }) => i9 === s17);
    a13 !== -1 && (u(e6, { [j.Unmount]() {
      o12.current.splice(a13, 1);
    }, [j.Hidden]() {
      o12.current[a13].state = "hidden";
    } }), H8.microTask(() => {
      var i9;
      !M8(o12) && N6.current && ((i9 = r10.current) == null || i9.call(r10));
    }));
  }), P4 = o4((s17) => {
    let e6 = o12.current.find(({ el: a13 }) => a13 === s17);
    return e6 ? e6.state !== "visible" && (e6.state = "visible") : o12.current.push({ el: s17, state: "visible" }), () => p9(s17, j.Unmount);
  }), h11 = (0, import_react44.useRef)([]), v5 = (0, import_react44.useRef)(Promise.resolve()), T7 = (0, import_react44.useRef)({ enter: [], leave: [], idle: [] }), g5 = o4((s17, e6, a13) => {
    h11.current.splice(0), n7 && (n7.chains.current[e6] = n7.chains.current[e6].filter(([i9]) => i9 !== s17)), n7 == null || n7.chains.current[e6].push([s17, new Promise((i9) => {
      h11.current.push(i9);
    })]), n7 == null || n7.chains.current[e6].push([s17, new Promise((i9) => {
      Promise.all(T7.current[e6].map(([l11, R3]) => R3)).then(() => i9());
    })]), e6 === "enter" ? v5.current = v5.current.then(() => n7 == null ? void 0 : n7.wait.current).then(() => a13(e6)) : a13(e6);
  }), f14 = o4((s17, e6, a13) => {
    Promise.all(T7.current[e6].splice(0).map(([i9, l11]) => l11)).then(() => {
      var i9;
      (i9 = h11.current.shift()) == null || i9();
    }).then(() => a13(e6));
  });
  return (0, import_react44.useMemo)(() => ({ children: o12, register: P4, unregister: p9, onStart: g5, onStop: f14, wait: v5, chains: T7 }), [P4, p9, o12, g5, f14, T7, v5]);
}
function Se4() {
}
var xe6 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie3(t15) {
  var r10;
  let n7 = {};
  for (let o12 of xe6)
    n7[o12] = (r10 = t15[o12]) != null ? r10 : Se4;
  return n7;
}
function Pe5(t15) {
  let n7 = (0, import_react44.useRef)(ie3(t15));
  return (0, import_react44.useEffect)(() => {
    n7.current = ie3(t15);
  }, [t15]), n7;
}
var Re3 = "div";
var oe4 = S2.RenderStrategy;
function ye5(t15, n7) {
  let { beforeEnter: r10, afterEnter: o12, beforeLeave: N6, afterLeave: H8, enter: p9, enterFrom: P4, enterTo: h11, entered: v5, leave: T7, leaveFrom: g5, leaveTo: f14, ...s17 } = t15, e6 = (0, import_react44.useRef)(null), a13 = y2(e6, n7), i9 = s17.unmount ? j.Unmount : j.Hidden, { show: l11, appear: R3, initial: d14 } = Ee4(), [u10, U4] = (0, import_react44.useState)(l11 ? "visible" : "hidden"), K4 = be4(), { register: L3, unregister: w6 } = K4, j7 = (0, import_react44.useRef)(null);
  (0, import_react44.useEffect)(() => L3(e6), [L3, e6]), (0, import_react44.useEffect)(() => {
    if (i9 === j.Hidden && e6.current) {
      if (l11 && u10 !== "visible") {
        U4("visible");
        return;
      }
      return u(u10, { ["hidden"]: () => w6(e6), ["visible"]: () => L3(e6) });
    }
  }, [u10, e6, L3, w6, l11, i9]);
  let k2 = s2({ enter: x6(p9), enterFrom: x6(P4), enterTo: x6(h11), entered: x6(v5), leave: x6(T7), leaveFrom: x6(g5), leaveTo: x6(f14) }), O4 = Pe5({ beforeEnter: r10, afterEnter: o12, beforeLeave: N6, afterLeave: H8 }), G2 = l2();
  (0, import_react44.useEffect)(() => {
    if (G2 && u10 === "visible" && e6.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e6, u10, G2]);
  let B3 = d14 && !R3, ae3 = (() => !G2 || B3 || j7.current === l11 ? "idle" : l11 ? "enter" : "leave")(), D7 = c11(0), le3 = o4((C5) => u(C5, { enter: () => {
    D7.addFlag(d5.Opening), O4.current.beforeEnter();
  }, leave: () => {
    D7.addFlag(d5.Closing), O4.current.beforeLeave();
  }, idle: () => {
  } })), ue6 = o4((C5) => u(C5, { enter: () => {
    D7.removeFlag(d5.Opening), O4.current.afterEnter();
  }, leave: () => {
    D7.removeFlag(d5.Closing), O4.current.afterLeave();
  }, idle: () => {
  } })), V4 = re6(() => {
    U4("hidden"), w6(e6);
  }, K4);
  D6({ container: e6, classes: k2, direction: ae3, onStart: s2((C5) => {
    V4.onStart(e6, C5, le3);
  }), onStop: s2((C5) => {
    V4.onStop(e6, C5, ue6), C5 === "leave" && !M8(V4) && (U4("hidden"), w6(e6));
  }) }), (0, import_react44.useEffect)(() => {
    B3 && (i9 === j.Hidden ? j7.current = null : j7.current = l11);
  }, [l11, B3, u10]);
  let J5 = s17, Te3 = { ref: a13 };
  return R3 && l11 && d14 && (J5 = { ...J5, className: e2(s17.className, ...k2.current.enter, ...k2.current.enterFrom) }), import_react44.default.createElement(_5.Provider, { value: V4 }, import_react44.default.createElement(c5, { value: u(u10, { ["visible"]: d5.Open, ["hidden"]: d5.Closed }) | D7.flags }, X({ ourProps: Te3, theirProps: J5, defaultTag: Re3, features: oe4, visible: u10 === "visible", name: "Transition.Child" })));
}
function Ne5(t15, n7) {
  let { show: r10, appear: o12 = false, unmount: N6, ...H8 } = t15, p9 = (0, import_react44.useRef)(null), P4 = y2(p9, n7);
  l2();
  let h11 = C();
  if (r10 === void 0 && h11 !== null && (r10 = (h11 & d5.Open) === d5.Open), ![true, false].includes(r10))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v5, T7] = (0, import_react44.useState)(r10 ? "visible" : "hidden"), g5 = re6(() => {
    T7("hidden");
  }), [f14, s17] = (0, import_react44.useState)(true), e6 = (0, import_react44.useRef)([r10]);
  l(() => {
    f14 !== false && e6.current[e6.current.length - 1] !== r10 && (e6.current.push(r10), s17(false));
  }, [e6, r10]);
  let a13 = (0, import_react44.useMemo)(() => ({ show: r10, appear: o12, initial: f14 }), [r10, o12, f14]);
  (0, import_react44.useEffect)(() => {
    if (r10)
      T7("visible");
    else if (!M8(g5))
      T7("hidden");
    else {
      let d14 = p9.current;
      if (!d14)
        return;
      let u10 = d14.getBoundingClientRect();
      u10.x === 0 && u10.y === 0 && u10.width === 0 && u10.height === 0 && T7("hidden");
    }
  }, [r10, g5]);
  let i9 = { unmount: N6 }, l11 = o4(() => {
    var d14;
    f14 && s17(false), (d14 = t15.beforeEnter) == null || d14.call(t15);
  }), R3 = o4(() => {
    var d14;
    f14 && s17(false), (d14 = t15.beforeLeave) == null || d14.call(t15);
  });
  return import_react44.default.createElement(_5.Provider, { value: g5 }, import_react44.default.createElement(I6.Provider, { value: a13 }, X({ ourProps: { ...i9, as: import_react44.Fragment, children: import_react44.default.createElement(se4, { ref: P4, ...i9, ...H8, beforeEnter: l11, beforeLeave: R3 }) }, theirProps: {}, defaultTag: import_react44.Fragment, features: oe4, visible: v5 === "visible", name: "Transition" })));
}
function He5(t15, n7) {
  let r10 = (0, import_react44.useContext)(I6) !== null, o12 = C() !== null;
  return import_react44.default.createElement(import_react44.default.Fragment, null, !r10 && o12 ? import_react44.default.createElement(z6, { ref: n7, ...t15 }) : import_react44.default.createElement(se4, { ref: n7, ...t15 }));
}
var z6 = D2(Ne5);
var se4 = D2(ye5);
var De5 = D2(He5);
var $e5 = Object.assign(z6, { Child: De5, Root: z6 });
export {
  Wo as Combobox,
  _t as Dialog,
  ve as Disclosure,
  ge2 as FocusTrap,
  Nt as Listbox,
  it2 as Menu,
  kt as Popover,
  pe2 as Portal,
  yt as RadioGroup,
  Ge5 as Switch,
  rt2 as Tab,
  $e5 as Transition
};
//# sourceMappingURL=@headlessui_react.js.map
