!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-router"),require("rxjs")):"function"==typeof define&&define.amd?define(["react","react-router","rxjs"],t):"object"==typeof exports?exports["@miluna/react-auth"]=t(require("react"),require("react-router"),require("rxjs")):e["@miluna/react-auth"]=t(e.react,e["react-router"],e.rxjs)}(global,(function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){},function(e,t){e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=o.a.createContext({isAuth:!1,checked:!1}),c=new(r(3).Subject);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(e){var t=e.getStoredAuthValue,r=e.children,a=i(Object(n.useState)(!1),2),f=a[0],l=a[1],s=i(Object(n.useState)(!1),2),d=s[0],p=s[1];return Object(n.useEffect)((function(){var e=c.subscribe((function(e){l(e)}));if(t){var r=t();Promise.resolve(r).then((function(e){l(e),p(!0)}))}else p(!0);return function(){e.unsubscribe()}}),[]),o.a.createElement(u.Provider,{value:{isAuth:f,checked:d}},r)},f=r(2),l=r.n(f),s=function(e){var t=e.children,r=e.fallbackComponent,c=Object(n.useContext)(u).isAuth;return o.a.createElement(o.a.Fragment,null,c?t:r||o.a.createElement(o.a.Fragment,null))},d=r(1);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var y=function(e){var t=e.redirectPath,r=e.component,c=e.loadingComponent,i=b(e,["redirectPath","component","loadingComponent"]),a=Object(n.useContext)(u),f=a.isAuth,l=a.checked;return o.a.createElement(d.Route,p({},i,{render:function(e){return l?f?o.a.createElement(r,e):o.a.createElement(d.Redirect,{to:t}):c||o.a.createElement(o.a.Fragment,null)}}))},m=function(){return Object(n.useContext)(u)};r.d(t,"AuthContext",(function(){return u})),r.d(t,"AuthContextProvider",(function(){return a})),r.d(t,"AuthContextState",(function(){return l.a})),r.d(t,"AuthSubject",(function(){return c})),r.d(t,"ProtectedComponent",(function(){return s})),r.d(t,"ProtectedRoute",(function(){return y})),r.d(t,"useAuth",(function(){return m}))}])}));