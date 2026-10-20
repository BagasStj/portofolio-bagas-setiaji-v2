var S1=Object.defineProperty;var M1=(o,e,t)=>e in o?S1(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var nt=(o,e,t)=>M1(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var dp={exports:{}},fu={},pp={exports:{}},Nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function E1(){if(Iv)return Nt;Iv=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(k,oe,Ne){this.props=k,this.context=oe,this.refs=M,this.updater=Ne||v}y.prototype.isReactComponent={},y.prototype.setState=function(k,oe){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,oe,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=y.prototype;function R(k,oe,Ne){this.props=k,this.context=oe,this.refs=M,this.updater=Ne||v}var b=R.prototype=new x;b.constructor=R,E(b,y.prototype),b.isPureReactComponent=!0;var T=Array.isArray,F=Object.prototype.hasOwnProperty,U={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function O(k,oe,Ne){var Z,X={},pe=null,fe=null;if(oe!=null)for(Z in oe.ref!==void 0&&(fe=oe.ref),oe.key!==void 0&&(pe=""+oe.key),oe)F.call(oe,Z)&&!D.hasOwnProperty(Z)&&(X[Z]=oe[Z]);var ye=arguments.length-2;if(ye===1)X.children=Ne;else if(1<ye){for(var Ae=Array(ye),Qe=0;Qe<ye;Qe++)Ae[Qe]=arguments[Qe+2];X.children=Ae}if(k&&k.defaultProps)for(Z in ye=k.defaultProps,ye)X[Z]===void 0&&(X[Z]=ye[Z]);return{$$typeof:o,type:k,key:pe,ref:fe,props:X,_owner:U.current}}function C(k,oe){return{$$typeof:o,type:k.type,key:oe,ref:k.ref,props:k.props,_owner:k._owner}}function w(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function B(k){var oe={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ne){return oe[Ne]})}var j=/\/+/g;function K(k,oe){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):oe.toString(36)}function se(k,oe,Ne,Z,X){var pe=typeof k;(pe==="undefined"||pe==="boolean")&&(k=null);var fe=!1;if(k===null)fe=!0;else switch(pe){case"string":case"number":fe=!0;break;case"object":switch(k.$$typeof){case o:case e:fe=!0}}if(fe)return fe=k,X=X(fe),k=Z===""?"."+K(fe,0):Z,T(X)?(Ne="",k!=null&&(Ne=k.replace(j,"$&/")+"/"),se(X,oe,Ne,"",function(Qe){return Qe})):X!=null&&(w(X)&&(X=C(X,Ne+(!X.key||fe&&fe.key===X.key?"":(""+X.key).replace(j,"$&/")+"/")+k)),oe.push(X)),1;if(fe=0,Z=Z===""?".":Z+":",T(k))for(var ye=0;ye<k.length;ye++){pe=k[ye];var Ae=Z+K(pe,ye);fe+=se(pe,oe,Ne,Ae,X)}else if(Ae=g(k),typeof Ae=="function")for(k=Ae.call(k),ye=0;!(pe=k.next()).done;)pe=pe.value,Ae=Z+K(pe,ye++),fe+=se(pe,oe,Ne,Ae,X);else if(pe==="object")throw oe=String(k),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return fe}function ce(k,oe,Ne){if(k==null)return k;var Z=[],X=0;return se(k,Z,"","",function(pe){return oe.call(Ne,pe,X++)}),Z}function ee(k){if(k._status===-1){var oe=k._result;oe=oe(),oe.then(function(Ne){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ne)},function(Ne){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ne)}),k._status===-1&&(k._status=0,k._result=oe)}if(k._status===1)return k._result.default;throw k._result}var Q={current:null},H={transition:null},le={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function N(){throw Error("act(...) is not supported in production builds of React.")}return Nt.Children={map:ce,forEach:function(k,oe,Ne){ce(k,function(){oe.apply(this,arguments)},Ne)},count:function(k){var oe=0;return ce(k,function(){oe++}),oe},toArray:function(k){return ce(k,function(oe){return oe})||[]},only:function(k){if(!w(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Nt.Component=y,Nt.Fragment=t,Nt.Profiler=r,Nt.PureComponent=R,Nt.StrictMode=n,Nt.Suspense=f,Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Nt.act=N,Nt.cloneElement=function(k,oe,Ne){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Z=E({},k.props),X=k.key,pe=k.ref,fe=k._owner;if(oe!=null){if(oe.ref!==void 0&&(pe=oe.ref,fe=U.current),oe.key!==void 0&&(X=""+oe.key),k.type&&k.type.defaultProps)var ye=k.type.defaultProps;for(Ae in oe)F.call(oe,Ae)&&!D.hasOwnProperty(Ae)&&(Z[Ae]=oe[Ae]===void 0&&ye!==void 0?ye[Ae]:oe[Ae])}var Ae=arguments.length-2;if(Ae===1)Z.children=Ne;else if(1<Ae){ye=Array(Ae);for(var Qe=0;Qe<Ae;Qe++)ye[Qe]=arguments[Qe+2];Z.children=ye}return{$$typeof:o,type:k.type,key:X,ref:pe,props:Z,_owner:fe}},Nt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},Nt.createElement=O,Nt.createFactory=function(k){var oe=O.bind(null,k);return oe.type=k,oe},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(k){return{$$typeof:c,render:k}},Nt.isValidElement=w,Nt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:ee}},Nt.memo=function(k,oe){return{$$typeof:d,type:k,compare:oe===void 0?null:oe}},Nt.startTransition=function(k){var oe=H.transition;H.transition={};try{k()}finally{H.transition=oe}},Nt.unstable_act=N,Nt.useCallback=function(k,oe){return Q.current.useCallback(k,oe)},Nt.useContext=function(k){return Q.current.useContext(k)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(k){return Q.current.useDeferredValue(k)},Nt.useEffect=function(k,oe){return Q.current.useEffect(k,oe)},Nt.useId=function(){return Q.current.useId()},Nt.useImperativeHandle=function(k,oe,Ne){return Q.current.useImperativeHandle(k,oe,Ne)},Nt.useInsertionEffect=function(k,oe){return Q.current.useInsertionEffect(k,oe)},Nt.useLayoutEffect=function(k,oe){return Q.current.useLayoutEffect(k,oe)},Nt.useMemo=function(k,oe){return Q.current.useMemo(k,oe)},Nt.useReducer=function(k,oe,Ne){return Q.current.useReducer(k,oe,Ne)},Nt.useRef=function(k){return Q.current.useRef(k)},Nt.useState=function(k){return Q.current.useState(k)},Nt.useSyncExternalStore=function(k,oe,Ne){return Q.current.useSyncExternalStore(k,oe,Ne)},Nt.useTransition=function(){return Q.current.useTransition()},Nt.version="18.3.1",Nt}var Uv;function wg(){return Uv||(Uv=1,pp.exports=E1()),pp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function T1(){if(Fv)return fu;Fv=1;var o=wg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,d){var p,_={},g=null,v=null;d!==void 0&&(g=""+d),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(v=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(_[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)_[p]===void 0&&(_[p]=f[p]);return{$$typeof:e,type:c,key:g,ref:v,props:_,_owner:r.current}}return fu.Fragment=t,fu.jsx=u,fu.jsxs=u,fu}var Ov;function w1(){return Ov||(Ov=1,dp.exports=T1()),dp.exports}var xe=w1(),uf={},mp={exports:{}},Ri={},gp={exports:{}},_p={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function A1(){return kv||(kv=1,(function(o){function e(H,le){var N=H.length;H.push(le);e:for(;0<N;){var k=N-1>>>1,oe=H[k];if(0<r(oe,le))H[k]=le,H[N]=oe,N=k;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var le=H[0],N=H.pop();if(N!==le){H[0]=N;e:for(var k=0,oe=H.length,Ne=oe>>>1;k<Ne;){var Z=2*(k+1)-1,X=H[Z],pe=Z+1,fe=H[pe];if(0>r(X,N))pe<oe&&0>r(fe,X)?(H[k]=fe,H[pe]=N,k=pe):(H[k]=X,H[Z]=N,k=Z);else if(pe<oe&&0>r(fe,N))H[k]=fe,H[pe]=N,k=pe;else break e}}return le}function r(H,le){var N=H.sortIndex-le.sortIndex;return N!==0?N:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();o.unstable_now=function(){return u.now()-c}}var f=[],d=[],p=1,_=null,g=3,v=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(H){for(var le=t(d);le!==null;){if(le.callback===null)n(d);else if(le.startTime<=H)n(d),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(d)}}function T(H){if(M=!1,b(H),!E)if(t(f)!==null)E=!0,ee(F);else{var le=t(d);le!==null&&Q(T,le.startTime-H)}}function F(H,le){E=!1,M&&(M=!1,x(O),O=-1),v=!0;var N=g;try{for(b(le),_=t(f);_!==null&&(!(_.expirationTime>le)||H&&!B());){var k=_.callback;if(typeof k=="function"){_.callback=null,g=_.priorityLevel;var oe=k(_.expirationTime<=le);le=o.unstable_now(),typeof oe=="function"?_.callback=oe:_===t(f)&&n(f),b(le)}else n(f);_=t(f)}if(_!==null)var Ne=!0;else{var Z=t(d);Z!==null&&Q(T,Z.startTime-le),Ne=!1}return Ne}finally{_=null,g=N,v=!1}}var U=!1,D=null,O=-1,C=5,w=-1;function B(){return!(o.unstable_now()-w<C)}function j(){if(D!==null){var H=o.unstable_now();w=H;var le=!0;try{le=D(!0,H)}finally{le?K():(U=!1,D=null)}}else U=!1}var K;if(typeof R=="function")K=function(){R(j)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=j,K=function(){ce.postMessage(null)}}else K=function(){y(j,0)};function ee(H){D=H,U||(U=!0,K())}function Q(H,le){O=y(function(){H(o.unstable_now())},le)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){E||v||(E=!0,ee(F))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(H){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var N=g;g=le;try{return H()}finally{g=N}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var N=g;g=H;try{return le()}finally{g=N}},o.unstable_scheduleCallback=function(H,le,N){var k=o.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?k+N:k):N=k,H){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=N+oe,H={id:p++,callback:le,priorityLevel:H,startTime:N,expirationTime:oe,sortIndex:-1},N>k?(H.sortIndex=N,e(d,H),t(f)===null&&H===t(d)&&(M?(x(O),O=-1):M=!0,Q(T,N-k))):(H.sortIndex=oe,e(f,H),E||v||(E=!0,ee(F))),H},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(H){var le=g;return function(){var N=g;g=le;try{return H.apply(this,arguments)}finally{g=N}}}})(_p)),_p}var zv;function C1(){return zv||(zv=1,gp.exports=A1()),gp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function R1(){if(Bv)return Ri;Bv=1;var o=wg(),e=C1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(r[i]=s,i=0;i<s.length;i++)n.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(i){return f.call(_,i)?!0:f.call(p,i)?!1:d.test(i)?_[i]=!0:(p[i]=!0,!1)}function v(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,h){if(s===null||typeof s>"u"||v(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,h,m,S,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=S,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,R);y[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,R);y[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,R);y[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,l,h){var m=y.hasOwnProperty(s)?y[s]:null;(m!==null?m.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,m,h)&&(l=null),h||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,h=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var T=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),U=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),B=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var N=Object.assign,k;function oe(i){if(k===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||""}return`
`+k+i}var Ne=!1;function Z(i,s){if(!i||Ne)return"";Ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(he){var h=he}Reflect.construct(i,[],s)}else{try{s.call()}catch(he){h=he}i.call(s.prototype)}else{try{throw Error()}catch(he){h=he}i()}}catch(he){if(he&&h&&typeof he.stack=="string"){for(var m=he.stack.split(`
`),S=h.stack.split(`
`),A=m.length-1,z=S.length-1;1<=A&&0<=z&&m[A]!==S[z];)z--;for(;1<=A&&0<=z;A--,z--)if(m[A]!==S[z]){if(A!==1||z!==1)do if(A--,z--,0>z||m[A]!==S[z]){var G=`
`+m[A].replace(" at new "," at ");return i.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",i.displayName)),G}while(1<=A&&0<=z);break}}}finally{Ne=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?oe(i):""}function X(i){switch(i.tag){case 5:return oe(i.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return i=Z(i.type,!1),i;case 11:return i=Z(i.type.render,!1),i;case 1:return i=Z(i.type,!0),i;default:return""}}function pe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case U:return"Portal";case C:return"Profiler";case O:return"StrictMode";case K:return"Suspense";case se:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case w:return(i._context.displayName||"Context")+".Provider";case j:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ce:return s=i.displayName||null,s!==null?s:pe(i.type)||"Memo";case ee:s=i._payload,i=i._init;try{return pe(i(s))}catch{}}return null}function fe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(s);case 8:return s===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ye(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ae(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qe(i){var s=Ae(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,S=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(A){h=""+A,S.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(A){h=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function _t(i){i._valueTracker||(i._valueTracker=Qe(i))}function ot(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Ae(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function $e(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function W(i,s){var l=s.checked;return N({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function kt(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=ye(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ht(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function J(i,s){ht(i,s);var l=ye(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Rt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Rt(i,s.type,ye(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function We(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Rt(i,s,l){(s!=="number"||$e(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var je=Array.isArray;function I(i,s,l,h){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&h&&(i[l].defaultSelected=!0)}else{for(l=""+ye(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,h&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function P(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return N({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ie(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(je(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:ye(l)}}function ve(i,s){var l=ye(s.value),h=ye(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function _e(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function ge(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?ge(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var be,Fe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=be.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function mt(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(i){Pe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Te[s]=Te[i]})});function st(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Te.hasOwnProperty(i)&&Te[i]?(""+s).trim():s+"px"}function it(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,m=st(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,m):i[l]=m}}var Ve=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function St(i,s){if(s){if(Ve[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function at(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function V(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var De=null,de=null,me=null;function Le(i){if(i=Kl(i)){if(typeof De!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ec(s),De(i.stateNode,i.type,s))}}function Ue(i){de?me?me.push(i):me=[i]:de=i}function dt(){if(de){var i=de,s=me;if(me=de=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function zt(i,s){return i(s)}function an(){}var ze=!1;function Ke(i,s,l){if(ze)return i(s,l);ze=!0;try{return zt(i,s,l)}finally{ze=!1,(de!==null||me!==null)&&(an(),dt())}}function vt(i,s){var l=i.stateNode;if(l===null)return null;var h=Ec(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Oe=!1;if(c)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{Oe=!1}function Je(i,s,l,h,m,S,A,z,G){var he=Array.prototype.slice.call(arguments,3);try{s.apply(l,he)}catch(Ee){this.onError(Ee)}}var lt=!1,sn=null,Mt=!1,Xt=null,Mn={onError:function(i){lt=!0,sn=i}};function jt(i,s,l,h,m,S,A,z,G){lt=!1,sn=null,Je.apply(Mn,arguments)}function qt(i,s,l,h,m,S,A,z,G){if(jt.apply(this,arguments),lt){if(lt){var he=sn;lt=!1,sn=null}else throw Error(t(198));Mt||(Mt=!0,Xt=he)}}function Lt(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Kn(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Zt(i){if(Lt(i)!==i)throw Error(t(188))}function Xn(i){var s=i.alternate;if(!s){if(s=Lt(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,h=s;;){var m=l.return;if(m===null)break;var S=m.alternate;if(S===null){if(h=m.return,h!==null){l=h;continue}break}if(m.child===S.child){for(S=m.child;S;){if(S===l)return Zt(m),i;if(S===h)return Zt(m),s;S=S.sibling}throw Error(t(188))}if(l.return!==h.return)l=m,h=S;else{for(var A=!1,z=m.child;z;){if(z===l){A=!0,l=m,h=S;break}if(z===h){A=!0,h=m,l=S;break}z=z.sibling}if(!A){for(z=S.child;z;){if(z===l){A=!0,l=S,h=m;break}if(z===h){A=!0,h=S,l=m;break}z=z.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function L(i){return i=Xn(i),i!==null?Y(i):null}function Y(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Y(i);if(s!==null)return s;i=i.sibling}return null}var ne=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,$=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Se=e.unstable_now,ke=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,pt=e.unstable_UserBlockingPriority,gt=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Ft=null,Tt=null;function ln(i){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Ft,i,void 0,(i.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Gt,rt=Math.log,Er=Math.LN2;function Gt(i){return i>>>=0,i===0?32:31-(rt(i)/Er|0)|0}var Zn=64,Tr=4194304;function Dn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function kr(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,m=i.suspendedLanes,S=i.pingedLanes,A=l&268435455;if(A!==0){var z=A&~m;z!==0?h=Dn(z):(S&=A,S!==0&&(h=Dn(S)))}else A=l&~m,A!==0?h=Dn(A):S!==0&&(h=Dn(S));if(h===0)return 0;if(s!==0&&s!==h&&(s&m)===0&&(m=h&-h,S=s&-s,m>=S||m===16&&(S&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-Et(s),m=1<<l,h|=i[l],s&=~m;return h}function en(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rr(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,m=i.expirationTimes,S=i.pendingLanes;0<S;){var A=31-Et(S),z=1<<A,G=m[A];G===-1?((z&l)===0||(z&h)!==0)&&(m[A]=en(z,s)):G<=s&&(i.expiredLanes|=z),S&=~z}}function es(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ci(){var i=Zn;return Zn<<=1,(Zn&4194240)===0&&(Zn=64),i}function sr(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Mi(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Et(s),i[s]=l}function ac(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-Et(l),S=1<<m;s[m]=0,h[m]=-1,i[m]=-1,l&=~S}}function Fh(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-Et(l),m=1<<h;m&s|i[h]&s&&(i[h]|=s),l&=~m}}var $t=0;function h_(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var d_,Oh,p_,m_,g_,kh=!1,lc=[],As=null,Cs=null,Rs=null,Il=new Map,Ul=new Map,bs=[],GM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function __(i,s){switch(i){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":Cs=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":Il.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(s.pointerId)}}function Fl(i,s,l,h,m,S){return i===null||i.nativeEvent!==S?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:S,targetContainers:[m]},s!==null&&(s=Kl(s),s!==null&&Oh(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function WM(i,s,l,h,m){switch(s){case"focusin":return As=Fl(As,i,s,l,h,m),!0;case"dragenter":return Cs=Fl(Cs,i,s,l,h,m),!0;case"mouseover":return Rs=Fl(Rs,i,s,l,h,m),!0;case"pointerover":var S=m.pointerId;return Il.set(S,Fl(Il.get(S)||null,i,s,l,h,m)),!0;case"gotpointercapture":return S=m.pointerId,Ul.set(S,Fl(Ul.get(S)||null,i,s,l,h,m)),!0}return!1}function v_(i){var s=vo(i.target);if(s!==null){var l=Lt(s);if(l!==null){if(s=l.tag,s===13){if(s=Kn(l),s!==null){i.blockedOn=s,g_(i.priority,function(){p_(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function uc(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Bh(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Dt=h,l.target.dispatchEvent(h),Dt=null}else return s=Kl(l),s!==null&&Oh(s),i.blockedOn=l,!1;s.shift()}return!0}function x_(i,s,l){uc(i)&&l.delete(s)}function XM(){kh=!1,As!==null&&uc(As)&&(As=null),Cs!==null&&uc(Cs)&&(Cs=null),Rs!==null&&uc(Rs)&&(Rs=null),Il.forEach(x_),Ul.forEach(x_)}function Ol(i,s){i.blockedOn===s&&(i.blockedOn=null,kh||(kh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,XM)))}function kl(i){function s(m){return Ol(m,i)}if(0<lc.length){Ol(lc[0],i);for(var l=1;l<lc.length;l++){var h=lc[l];h.blockedOn===i&&(h.blockedOn=null)}}for(As!==null&&Ol(As,i),Cs!==null&&Ol(Cs,i),Rs!==null&&Ol(Rs,i),Il.forEach(s),Ul.forEach(s),l=0;l<bs.length;l++)h=bs[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<bs.length&&(l=bs[0],l.blockedOn===null);)v_(l),l.blockedOn===null&&bs.shift()}var fa=T.ReactCurrentBatchConfig,cc=!0;function YM(i,s,l,h){var m=$t,S=fa.transition;fa.transition=null;try{$t=1,zh(i,s,l,h)}finally{$t=m,fa.transition=S}}function jM(i,s,l,h){var m=$t,S=fa.transition;fa.transition=null;try{$t=4,zh(i,s,l,h)}finally{$t=m,fa.transition=S}}function zh(i,s,l,h){if(cc){var m=Bh(i,s,l,h);if(m===null)id(i,s,h,fc,l),__(i,h);else if(WM(m,i,s,l,h))h.stopPropagation();else if(__(i,h),s&4&&-1<GM.indexOf(i)){for(;m!==null;){var S=Kl(m);if(S!==null&&d_(S),S=Bh(i,s,l,h),S===null&&id(i,s,h,fc,l),S===m)break;m=S}m!==null&&h.stopPropagation()}else id(i,s,h,null,l)}}var fc=null;function Bh(i,s,l,h){if(fc=null,i=V(h),i=vo(i),i!==null)if(s=Lt(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Kn(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return fc=i,null}function y_(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ke()){case He:return 1;case pt:return 4;case gt:case Xe:return 16;case yt:return 536870912;default:return 16}default:return 16}}var Ps=null,Hh=null,hc=null;function S_(){if(hc)return hc;var i,s=Hh,l=s.length,h,m="value"in Ps?Ps.value:Ps.textContent,S=m.length;for(i=0;i<l&&s[i]===m[i];i++);var A=l-i;for(h=1;h<=A&&s[l-h]===m[S-h];h++);return hc=m.slice(i,1<h?1-h:void 0)}function dc(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function pc(){return!0}function M_(){return!1}function ki(i){function s(l,h,m,S,A){this._reactName=l,this._targetInst=m,this.type=h,this.nativeEvent=S,this.target=A,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(S):S[z]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?pc:M_,this.isPropagationStopped=M_,this}return N(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),s}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=ki(ha),zl=N({},ha,{view:0,detail:0}),qM=ki(zl),Gh,Wh,Bl,mc=N({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Bl&&(Bl&&i.type==="mousemove"?(Gh=i.screenX-Bl.screenX,Wh=i.screenY-Bl.screenY):Wh=Gh=0,Bl=i),Gh)},movementY:function(i){return"movementY"in i?i.movementY:Wh}}),E_=ki(mc),$M=N({},mc,{dataTransfer:0}),KM=ki($M),ZM=N({},zl,{relatedTarget:0}),Xh=ki(ZM),QM=N({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),JM=ki(QM),eE=N({},ha,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),tE=ki(eE),nE=N({},ha,{data:0}),T_=ki(nE),iE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oE(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=sE[i])?!!s[i]:!1}function Yh(){return oE}var aE=N({},zl,{key:function(i){if(i.key){var s=iE[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=dc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?rE[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(i){return i.type==="keypress"?dc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?dc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),lE=ki(aE),uE=N({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w_=ki(uE),cE=N({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),fE=ki(cE),hE=N({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),dE=ki(hE),pE=N({},mc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),mE=ki(pE),gE=[9,13,27,32],jh=c&&"CompositionEvent"in window,Hl=null;c&&"documentMode"in document&&(Hl=document.documentMode);var _E=c&&"TextEvent"in window&&!Hl,A_=c&&(!jh||Hl&&8<Hl&&11>=Hl),C_=" ",R_=!1;function b_(i,s){switch(i){case"keyup":return gE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var da=!1;function vE(i,s){switch(i){case"compositionend":return P_(s);case"keypress":return s.which!==32?null:(R_=!0,C_);case"textInput":return i=s.data,i===C_&&R_?null:i;default:return null}}function xE(i,s){if(da)return i==="compositionend"||!jh&&b_(i,s)?(i=S_(),hc=Hh=Ps=null,da=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return A_&&s.locale!=="ko"?null:s.data;default:return null}}var yE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D_(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!yE[i.type]:s==="textarea"}function L_(i,s,l,h){Ue(h),s=yc(s,"onChange"),0<s.length&&(l=new Vh("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var Vl=null,Gl=null;function SE(i){K_(i,0)}function gc(i){var s=va(i);if(ot(s))return i}function ME(i,s){if(i==="change")return s}var N_=!1;if(c){var qh;if(c){var $h="oninput"in document;if(!$h){var I_=document.createElement("div");I_.setAttribute("oninput","return;"),$h=typeof I_.oninput=="function"}qh=$h}else qh=!1;N_=qh&&(!document.documentMode||9<document.documentMode)}function U_(){Vl&&(Vl.detachEvent("onpropertychange",F_),Gl=Vl=null)}function F_(i){if(i.propertyName==="value"&&gc(Gl)){var s=[];L_(s,Gl,i,V(i)),Ke(SE,s)}}function EE(i,s,l){i==="focusin"?(U_(),Vl=s,Gl=l,Vl.attachEvent("onpropertychange",F_)):i==="focusout"&&U_()}function TE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return gc(Gl)}function wE(i,s){if(i==="click")return gc(s)}function AE(i,s){if(i==="input"||i==="change")return gc(s)}function CE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var wr=typeof Object.is=="function"?Object.is:CE;function Wl(i,s){if(wr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var m=l[h];if(!f.call(s,m)||!wr(i[m],s[m]))return!1}return!0}function O_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function k_(i,s){var l=O_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=O_(l)}}function z_(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?z_(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function B_(){for(var i=window,s=$e();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=$e(i.document)}return s}function Kh(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function RE(i){var s=B_(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&z_(l.ownerDocument.documentElement,l)){if(h!==null&&Kh(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,S=Math.min(h.start,m);h=h.end===void 0?S:Math.min(h.end,m),!i.extend&&S>h&&(m=h,h=S,S=m),m=k_(l,S);var A=k_(l,h);m&&A&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),S>h?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var bE=c&&"documentMode"in document&&11>=document.documentMode,pa=null,Zh=null,Xl=null,Qh=!1;function H_(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qh||pa==null||pa!==$e(h)||(h=pa,"selectionStart"in h&&Kh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Xl&&Wl(Xl,h)||(Xl=h,h=yc(Zh,"onSelect"),0<h.length&&(s=new Vh("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=pa)))}function _c(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var ma={animationend:_c("Animation","AnimationEnd"),animationiteration:_c("Animation","AnimationIteration"),animationstart:_c("Animation","AnimationStart"),transitionend:_c("Transition","TransitionEnd")},Jh={},V_={};c&&(V_=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function vc(i){if(Jh[i])return Jh[i];if(!ma[i])return i;var s=ma[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in V_)return Jh[i]=s[l];return i}var G_=vc("animationend"),W_=vc("animationiteration"),X_=vc("animationstart"),Y_=vc("transitionend"),j_=new Map,q_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ds(i,s){j_.set(i,s),a(s,[i])}for(var ed=0;ed<q_.length;ed++){var td=q_[ed],PE=td.toLowerCase(),DE=td[0].toUpperCase()+td.slice(1);Ds(PE,"on"+DE)}Ds(G_,"onAnimationEnd"),Ds(W_,"onAnimationIteration"),Ds(X_,"onAnimationStart"),Ds("dblclick","onDoubleClick"),Ds("focusin","onFocus"),Ds("focusout","onBlur"),Ds(Y_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yl));function $_(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,qt(h,s,void 0,i),i.currentTarget=null}function K_(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],m=h.event;h=h.listeners;e:{var S=void 0;if(s)for(var A=h.length-1;0<=A;A--){var z=h[A],G=z.instance,he=z.currentTarget;if(z=z.listener,G!==S&&m.isPropagationStopped())break e;$_(m,z,he),S=G}else for(A=0;A<h.length;A++){if(z=h[A],G=z.instance,he=z.currentTarget,z=z.listener,G!==S&&m.isPropagationStopped())break e;$_(m,z,he),S=G}}}if(Mt)throw i=Xt,Mt=!1,Xt=null,i}function un(i,s){var l=s[ud];l===void 0&&(l=s[ud]=new Set);var h=i+"__bubble";l.has(h)||(Z_(s,i,2,!1),l.add(h))}function nd(i,s,l){var h=0;s&&(h|=4),Z_(l,i,h,s)}var xc="_reactListening"+Math.random().toString(36).slice(2);function jl(i){if(!i[xc]){i[xc]=!0,n.forEach(function(l){l!=="selectionchange"&&(LE.has(l)||nd(l,!1,i),nd(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[xc]||(s[xc]=!0,nd("selectionchange",!1,s))}}function Z_(i,s,l,h){switch(y_(s)){case 1:var m=YM;break;case 4:m=jM;break;default:m=zh}l=m.bind(null,s,l,i),m=void 0,!Oe||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),h?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function id(i,s,l,h,m){var S=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var A=h.tag;if(A===3||A===4){var z=h.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(A===4)for(A=h.return;A!==null;){var G=A.tag;if((G===3||G===4)&&(G=A.stateNode.containerInfo,G===m||G.nodeType===8&&G.parentNode===m))return;A=A.return}for(;z!==null;){if(A=vo(z),A===null)return;if(G=A.tag,G===5||G===6){h=S=A;continue e}z=z.parentNode}}h=h.return}Ke(function(){var he=S,Ee=V(l),we=[];e:{var Me=j_.get(i);if(Me!==void 0){var Ge=Vh,Ze=i;switch(i){case"keypress":if(dc(l)===0)break e;case"keydown":case"keyup":Ge=lE;break;case"focusin":Ze="focus",Ge=Xh;break;case"focusout":Ze="blur",Ge=Xh;break;case"beforeblur":case"afterblur":Ge=Xh;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=E_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=KM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=fE;break;case G_:case W_:case X_:Ge=JM;break;case Y_:Ge=dE;break;case"scroll":Ge=qM;break;case"wheel":Ge=mE;break;case"copy":case"cut":case"paste":Ge=tE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=w_}var et=(s&4)!==0,En=!et&&i==="scroll",te=et?Me!==null?Me+"Capture":null:Me;et=[];for(var q=he,ae;q!==null;){ae=q;var Re=ae.stateNode;if(ae.tag===5&&Re!==null&&(ae=Re,te!==null&&(Re=vt(q,te),Re!=null&&et.push(ql(q,Re,ae)))),En)break;q=q.return}0<et.length&&(Me=new Ge(Me,Ze,null,l,Ee),we.push({event:Me,listeners:et}))}}if((s&7)===0){e:{if(Me=i==="mouseover"||i==="pointerover",Ge=i==="mouseout"||i==="pointerout",Me&&l!==Dt&&(Ze=l.relatedTarget||l.fromElement)&&(vo(Ze)||Ze[ts]))break e;if((Ge||Me)&&(Me=Ee.window===Ee?Ee:(Me=Ee.ownerDocument)?Me.defaultView||Me.parentWindow:window,Ge?(Ze=l.relatedTarget||l.toElement,Ge=he,Ze=Ze?vo(Ze):null,Ze!==null&&(En=Lt(Ze),Ze!==En||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Ge=null,Ze=he),Ge!==Ze)){if(et=E_,Re="onMouseLeave",te="onMouseEnter",q="mouse",(i==="pointerout"||i==="pointerover")&&(et=w_,Re="onPointerLeave",te="onPointerEnter",q="pointer"),En=Ge==null?Me:va(Ge),ae=Ze==null?Me:va(Ze),Me=new et(Re,q+"leave",Ge,l,Ee),Me.target=En,Me.relatedTarget=ae,Re=null,vo(Ee)===he&&(et=new et(te,q+"enter",Ze,l,Ee),et.target=ae,et.relatedTarget=En,Re=et),En=Re,Ge&&Ze)t:{for(et=Ge,te=Ze,q=0,ae=et;ae;ae=ga(ae))q++;for(ae=0,Re=te;Re;Re=ga(Re))ae++;for(;0<q-ae;)et=ga(et),q--;for(;0<ae-q;)te=ga(te),ae--;for(;q--;){if(et===te||te!==null&&et===te.alternate)break t;et=ga(et),te=ga(te)}et=null}else et=null;Ge!==null&&Q_(we,Me,Ge,et,!1),Ze!==null&&En!==null&&Q_(we,En,Ze,et,!0)}}e:{if(Me=he?va(he):window,Ge=Me.nodeName&&Me.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&Me.type==="file")var tt=ME;else if(D_(Me))if(N_)tt=AE;else{tt=TE;var ct=EE}else(Ge=Me.nodeName)&&Ge.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(tt=wE);if(tt&&(tt=tt(i,he))){L_(we,tt,l,Ee);break e}ct&&ct(i,Me,he),i==="focusout"&&(ct=Me._wrapperState)&&ct.controlled&&Me.type==="number"&&Rt(Me,"number",Me.value)}switch(ct=he?va(he):window,i){case"focusin":(D_(ct)||ct.contentEditable==="true")&&(pa=ct,Zh=he,Xl=null);break;case"focusout":Xl=Zh=pa=null;break;case"mousedown":Qh=!0;break;case"contextmenu":case"mouseup":case"dragend":Qh=!1,H_(we,l,Ee);break;case"selectionchange":if(bE)break;case"keydown":case"keyup":H_(we,l,Ee)}var ft;if(jh)e:{switch(i){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else da?b_(i,l)&&(xt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(xt="onCompositionStart");xt&&(A_&&l.locale!=="ko"&&(da||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&da&&(ft=S_()):(Ps=Ee,Hh="value"in Ps?Ps.value:Ps.textContent,da=!0)),ct=yc(he,xt),0<ct.length&&(xt=new T_(xt,i,null,l,Ee),we.push({event:xt,listeners:ct}),ft?xt.data=ft:(ft=P_(l),ft!==null&&(xt.data=ft)))),(ft=_E?vE(i,l):xE(i,l))&&(he=yc(he,"onBeforeInput"),0<he.length&&(Ee=new T_("onBeforeInput","beforeinput",null,l,Ee),we.push({event:Ee,listeners:he}),Ee.data=ft))}K_(we,s)})}function ql(i,s,l){return{instance:i,listener:s,currentTarget:l}}function yc(i,s){for(var l=s+"Capture",h=[];i!==null;){var m=i,S=m.stateNode;m.tag===5&&S!==null&&(m=S,S=vt(i,l),S!=null&&h.unshift(ql(i,S,m)),S=vt(i,s),S!=null&&h.push(ql(i,S,m))),i=i.return}return h}function ga(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Q_(i,s,l,h,m){for(var S=s._reactName,A=[];l!==null&&l!==h;){var z=l,G=z.alternate,he=z.stateNode;if(G!==null&&G===h)break;z.tag===5&&he!==null&&(z=he,m?(G=vt(l,S),G!=null&&A.unshift(ql(l,G,z))):m||(G=vt(l,S),G!=null&&A.push(ql(l,G,z)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var NE=/\r\n?/g,IE=/\u0000|\uFFFD/g;function J_(i){return(typeof i=="string"?i:""+i).replace(NE,`
`).replace(IE,"")}function Sc(i,s,l){if(s=J_(s),J_(i)!==s&&l)throw Error(t(425))}function Mc(){}var rd=null,sd=null;function od(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,UE=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,FE=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(i){return e0.resolve(null).then(i).catch(OE)}:ad;function OE(i){setTimeout(function(){throw i})}function ld(i,s){var l=s,h=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(h===0){i.removeChild(m),kl(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=m}while(l);kl(s)}function Ls(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function t0(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var _a=Math.random().toString(36).slice(2),zr="__reactFiber$"+_a,$l="__reactProps$"+_a,ts="__reactContainer$"+_a,ud="__reactEvents$"+_a,kE="__reactListeners$"+_a,zE="__reactHandles$"+_a;function vo(i){var s=i[zr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ts]||l[zr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=t0(i);i!==null;){if(l=i[zr])return l;i=t0(i)}return s}i=l,l=i.parentNode}return null}function Kl(i){return i=i[zr]||i[ts],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function va(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ec(i){return i[$l]||null}var cd=[],xa=-1;function Ns(i){return{current:i}}function cn(i){0>xa||(i.current=cd[xa],cd[xa]=null,xa--)}function on(i,s){xa++,cd[xa]=i.current,i.current=s}var Is={},Qn=Ns(Is),Ei=Ns(!1),xo=Is;function ya(i,s){var l=i.type.contextTypes;if(!l)return Is;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var m={},S;for(S in l)m[S]=s[S];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Ti(i){return i=i.childContextTypes,i!=null}function Tc(){cn(Ei),cn(Qn)}function n0(i,s,l){if(Qn.current!==Is)throw Error(t(168));on(Qn,s),on(Ei,l)}function i0(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var m in h)if(!(m in s))throw Error(t(108,fe(i)||"Unknown",m));return N({},l,h)}function wc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Is,xo=Qn.current,on(Qn,i),on(Ei,Ei.current),!0}function r0(i,s,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=i0(i,s,xo),h.__reactInternalMemoizedMergedChildContext=i,cn(Ei),cn(Qn),on(Qn,i)):cn(Ei),on(Ei,l)}var ns=null,Ac=!1,fd=!1;function s0(i){ns===null?ns=[i]:ns.push(i)}function BE(i){Ac=!0,s0(i)}function Us(){if(!fd&&ns!==null){fd=!0;var i=0,s=$t;try{var l=ns;for($t=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}ns=null,Ac=!1}catch(m){throw ns!==null&&(ns=ns.slice(i+1)),ne(He,Us),m}finally{$t=s,fd=!1}}return null}var Sa=[],Ma=0,Cc=null,Rc=0,or=[],ar=0,yo=null,is=1,rs="";function So(i,s){Sa[Ma++]=Rc,Sa[Ma++]=Cc,Cc=i,Rc=s}function o0(i,s,l){or[ar++]=is,or[ar++]=rs,or[ar++]=yo,yo=i;var h=is;i=rs;var m=32-Et(h)-1;h&=~(1<<m),l+=1;var S=32-Et(s)+m;if(30<S){var A=m-m%5;S=(h&(1<<A)-1).toString(32),h>>=A,m-=A,is=1<<32-Et(s)+m|l<<m|h,rs=S+i}else is=1<<S|l<<m|h,rs=i}function hd(i){i.return!==null&&(So(i,1),o0(i,1,0))}function dd(i){for(;i===Cc;)Cc=Sa[--Ma],Sa[Ma]=null,Rc=Sa[--Ma],Sa[Ma]=null;for(;i===yo;)yo=or[--ar],or[ar]=null,rs=or[--ar],or[ar]=null,is=or[--ar],or[ar]=null}var zi=null,Bi=null,hn=!1,Ar=null;function a0(i,s){var l=fr(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function l0(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,zi=i,Bi=Ls(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,zi=i,Bi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=yo!==null?{id:is,overflow:rs}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=fr(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,zi=i,Bi=null,!0):!1;default:return!1}}function pd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function md(i){if(hn){var s=Bi;if(s){var l=s;if(!l0(i,s)){if(pd(i))throw Error(t(418));s=Ls(l.nextSibling);var h=zi;s&&l0(i,s)?a0(h,l):(i.flags=i.flags&-4097|2,hn=!1,zi=i)}}else{if(pd(i))throw Error(t(418));i.flags=i.flags&-4097|2,hn=!1,zi=i}}}function u0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;zi=i}function bc(i){if(i!==zi)return!1;if(!hn)return u0(i),hn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!od(i.type,i.memoizedProps)),s&&(s=Bi)){if(pd(i))throw c0(),Error(t(418));for(;s;)a0(i,s),s=Ls(s.nextSibling)}if(u0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Bi=Ls(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Bi=null}}else Bi=zi?Ls(i.stateNode.nextSibling):null;return!0}function c0(){for(var i=Bi;i;)i=Ls(i.nextSibling)}function Ea(){Bi=zi=null,hn=!1}function gd(i){Ar===null?Ar=[i]:Ar.push(i)}var HE=T.ReactCurrentBatchConfig;function Zl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var m=h,S=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(A){var z=m.refs;A===null?delete z[S]:z[S]=A},s._stringRef=S,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Pc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function f0(i){var s=i._init;return s(i._payload)}function h0(i){function s(te,q){if(i){var ae=te.deletions;ae===null?(te.deletions=[q],te.flags|=16):ae.push(q)}}function l(te,q){if(!i)return null;for(;q!==null;)s(te,q),q=q.sibling;return null}function h(te,q){for(te=new Map;q!==null;)q.key!==null?te.set(q.key,q):te.set(q.index,q),q=q.sibling;return te}function m(te,q){return te=Gs(te,q),te.index=0,te.sibling=null,te}function S(te,q,ae){return te.index=ae,i?(ae=te.alternate,ae!==null?(ae=ae.index,ae<q?(te.flags|=2,q):ae):(te.flags|=2,q)):(te.flags|=1048576,q)}function A(te){return i&&te.alternate===null&&(te.flags|=2),te}function z(te,q,ae,Re){return q===null||q.tag!==6?(q=ap(ae,te.mode,Re),q.return=te,q):(q=m(q,ae),q.return=te,q)}function G(te,q,ae,Re){var tt=ae.type;return tt===D?Ee(te,q,ae.props.children,Re,ae.key):q!==null&&(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ee&&f0(tt)===q.type)?(Re=m(q,ae.props),Re.ref=Zl(te,q,ae),Re.return=te,Re):(Re=ef(ae.type,ae.key,ae.props,null,te.mode,Re),Re.ref=Zl(te,q,ae),Re.return=te,Re)}function he(te,q,ae,Re){return q===null||q.tag!==4||q.stateNode.containerInfo!==ae.containerInfo||q.stateNode.implementation!==ae.implementation?(q=lp(ae,te.mode,Re),q.return=te,q):(q=m(q,ae.children||[]),q.return=te,q)}function Ee(te,q,ae,Re,tt){return q===null||q.tag!==7?(q=bo(ae,te.mode,Re,tt),q.return=te,q):(q=m(q,ae),q.return=te,q)}function we(te,q,ae){if(typeof q=="string"&&q!==""||typeof q=="number")return q=ap(""+q,te.mode,ae),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case F:return ae=ef(q.type,q.key,q.props,null,te.mode,ae),ae.ref=Zl(te,null,q),ae.return=te,ae;case U:return q=lp(q,te.mode,ae),q.return=te,q;case ee:var Re=q._init;return we(te,Re(q._payload),ae)}if(je(q)||le(q))return q=bo(q,te.mode,ae,null),q.return=te,q;Pc(te,q)}return null}function Me(te,q,ae,Re){var tt=q!==null?q.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return tt!==null?null:z(te,q,""+ae,Re);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:return ae.key===tt?G(te,q,ae,Re):null;case U:return ae.key===tt?he(te,q,ae,Re):null;case ee:return tt=ae._init,Me(te,q,tt(ae._payload),Re)}if(je(ae)||le(ae))return tt!==null?null:Ee(te,q,ae,Re,null);Pc(te,ae)}return null}function Ge(te,q,ae,Re,tt){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return te=te.get(ae)||null,z(q,te,""+Re,tt);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case F:return te=te.get(Re.key===null?ae:Re.key)||null,G(q,te,Re,tt);case U:return te=te.get(Re.key===null?ae:Re.key)||null,he(q,te,Re,tt);case ee:var ct=Re._init;return Ge(te,q,ae,ct(Re._payload),tt)}if(je(Re)||le(Re))return te=te.get(ae)||null,Ee(q,te,Re,tt,null);Pc(q,Re)}return null}function Ze(te,q,ae,Re){for(var tt=null,ct=null,ft=q,xt=q=0,Bn=null;ft!==null&&xt<ae.length;xt++){ft.index>xt?(Bn=ft,ft=null):Bn=ft.sibling;var Wt=Me(te,ft,ae[xt],Re);if(Wt===null){ft===null&&(ft=Bn);break}i&&ft&&Wt.alternate===null&&s(te,ft),q=S(Wt,q,xt),ct===null?tt=Wt:ct.sibling=Wt,ct=Wt,ft=Bn}if(xt===ae.length)return l(te,ft),hn&&So(te,xt),tt;if(ft===null){for(;xt<ae.length;xt++)ft=we(te,ae[xt],Re),ft!==null&&(q=S(ft,q,xt),ct===null?tt=ft:ct.sibling=ft,ct=ft);return hn&&So(te,xt),tt}for(ft=h(te,ft);xt<ae.length;xt++)Bn=Ge(ft,te,xt,ae[xt],Re),Bn!==null&&(i&&Bn.alternate!==null&&ft.delete(Bn.key===null?xt:Bn.key),q=S(Bn,q,xt),ct===null?tt=Bn:ct.sibling=Bn,ct=Bn);return i&&ft.forEach(function(Ws){return s(te,Ws)}),hn&&So(te,xt),tt}function et(te,q,ae,Re){var tt=le(ae);if(typeof tt!="function")throw Error(t(150));if(ae=tt.call(ae),ae==null)throw Error(t(151));for(var ct=tt=null,ft=q,xt=q=0,Bn=null,Wt=ae.next();ft!==null&&!Wt.done;xt++,Wt=ae.next()){ft.index>xt?(Bn=ft,ft=null):Bn=ft.sibling;var Ws=Me(te,ft,Wt.value,Re);if(Ws===null){ft===null&&(ft=Bn);break}i&&ft&&Ws.alternate===null&&s(te,ft),q=S(Ws,q,xt),ct===null?tt=Ws:ct.sibling=Ws,ct=Ws,ft=Bn}if(Wt.done)return l(te,ft),hn&&So(te,xt),tt;if(ft===null){for(;!Wt.done;xt++,Wt=ae.next())Wt=we(te,Wt.value,Re),Wt!==null&&(q=S(Wt,q,xt),ct===null?tt=Wt:ct.sibling=Wt,ct=Wt);return hn&&So(te,xt),tt}for(ft=h(te,ft);!Wt.done;xt++,Wt=ae.next())Wt=Ge(ft,te,xt,Wt.value,Re),Wt!==null&&(i&&Wt.alternate!==null&&ft.delete(Wt.key===null?xt:Wt.key),q=S(Wt,q,xt),ct===null?tt=Wt:ct.sibling=Wt,ct=Wt);return i&&ft.forEach(function(y1){return s(te,y1)}),hn&&So(te,xt),tt}function En(te,q,ae,Re){if(typeof ae=="object"&&ae!==null&&ae.type===D&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:e:{for(var tt=ae.key,ct=q;ct!==null;){if(ct.key===tt){if(tt=ae.type,tt===D){if(ct.tag===7){l(te,ct.sibling),q=m(ct,ae.props.children),q.return=te,te=q;break e}}else if(ct.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ee&&f0(tt)===ct.type){l(te,ct.sibling),q=m(ct,ae.props),q.ref=Zl(te,ct,ae),q.return=te,te=q;break e}l(te,ct);break}else s(te,ct);ct=ct.sibling}ae.type===D?(q=bo(ae.props.children,te.mode,Re,ae.key),q.return=te,te=q):(Re=ef(ae.type,ae.key,ae.props,null,te.mode,Re),Re.ref=Zl(te,q,ae),Re.return=te,te=Re)}return A(te);case U:e:{for(ct=ae.key;q!==null;){if(q.key===ct)if(q.tag===4&&q.stateNode.containerInfo===ae.containerInfo&&q.stateNode.implementation===ae.implementation){l(te,q.sibling),q=m(q,ae.children||[]),q.return=te,te=q;break e}else{l(te,q);break}else s(te,q);q=q.sibling}q=lp(ae,te.mode,Re),q.return=te,te=q}return A(te);case ee:return ct=ae._init,En(te,q,ct(ae._payload),Re)}if(je(ae))return Ze(te,q,ae,Re);if(le(ae))return et(te,q,ae,Re);Pc(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,q!==null&&q.tag===6?(l(te,q.sibling),q=m(q,ae),q.return=te,te=q):(l(te,q),q=ap(ae,te.mode,Re),q.return=te,te=q),A(te)):l(te,q)}return En}var Ta=h0(!0),d0=h0(!1),Dc=Ns(null),Lc=null,wa=null,_d=null;function vd(){_d=wa=Lc=null}function xd(i){var s=Dc.current;cn(Dc),i._currentValue=s}function yd(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Aa(i,s){Lc=i,_d=wa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(wi=!0),i.firstContext=null)}function lr(i){var s=i._currentValue;if(_d!==i)if(i={context:i,memoizedValue:s,next:null},wa===null){if(Lc===null)throw Error(t(308));wa=i,Lc.dependencies={lanes:0,firstContext:i}}else wa=wa.next=i;return s}var Mo=null;function Sd(i){Mo===null?Mo=[i]:Mo.push(i)}function p0(i,s,l,h){var m=s.interleaved;return m===null?(l.next=l,Sd(s)):(l.next=m.next,m.next=l),s.interleaved=l,ss(i,h)}function ss(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Fs=!1;function Md(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function os(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Os(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Vt&2)!==0){var m=h.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),h.pending=s,ss(i,l)}return m=h.interleaved,m===null?(s.next=s,Sd(h)):(s.next=m.next,m.next=s),h.interleaved=s,ss(i,l)}function Nc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Fh(i,l)}}function g0(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var m=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?m=S=A:S=S.next=A,l=l.next}while(l!==null);S===null?m=S=s:S=S.next=s}else m=S=s;l={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:S,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Ic(i,s,l,h){var m=i.updateQueue;Fs=!1;var S=m.firstBaseUpdate,A=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var G=z,he=G.next;G.next=null,A===null?S=he:A.next=he,A=G;var Ee=i.alternate;Ee!==null&&(Ee=Ee.updateQueue,z=Ee.lastBaseUpdate,z!==A&&(z===null?Ee.firstBaseUpdate=he:z.next=he,Ee.lastBaseUpdate=G))}if(S!==null){var we=m.baseState;A=0,Ee=he=G=null,z=S;do{var Me=z.lane,Ge=z.eventTime;if((h&Me)===Me){Ee!==null&&(Ee=Ee.next={eventTime:Ge,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ze=i,et=z;switch(Me=s,Ge=l,et.tag){case 1:if(Ze=et.payload,typeof Ze=="function"){we=Ze.call(Ge,we,Me);break e}we=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=et.payload,Me=typeof Ze=="function"?Ze.call(Ge,we,Me):Ze,Me==null)break e;we=N({},we,Me);break e;case 2:Fs=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,Me=m.effects,Me===null?m.effects=[z]:Me.push(z))}else Ge={eventTime:Ge,lane:Me,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ee===null?(he=Ee=Ge,G=we):Ee=Ee.next=Ge,A|=Me;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;Me=z,z=Me.next,Me.next=null,m.lastBaseUpdate=Me,m.shared.pending=null}}while(!0);if(Ee===null&&(G=we),m.baseState=G,m.firstBaseUpdate=he,m.lastBaseUpdate=Ee,s=m.shared.interleaved,s!==null){m=s;do A|=m.lane,m=m.next;while(m!==s)}else S===null&&(m.shared.lanes=0);wo|=A,i.lanes=A,i.memoizedState=we}}function _0(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],m=h.callback;if(m!==null){if(h.callback=null,h=l,typeof m!="function")throw Error(t(191,m));m.call(h)}}}var Ql={},Br=Ns(Ql),Jl=Ns(Ql),eu=Ns(Ql);function Eo(i){if(i===Ql)throw Error(t(174));return i}function Ed(i,s){switch(on(eu,s),on(Jl,i),on(Br,Ql),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ie(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ie(s,i)}cn(Br),on(Br,s)}function Ca(){cn(Br),cn(Jl),cn(eu)}function v0(i){Eo(eu.current);var s=Eo(Br.current),l=Ie(s,i.type);s!==l&&(on(Jl,i),on(Br,l))}function Td(i){Jl.current===i&&(cn(Br),cn(Jl))}var pn=Ns(0);function Uc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var wd=[];function Ad(){for(var i=0;i<wd.length;i++)wd[i]._workInProgressVersionPrimary=null;wd.length=0}var Fc=T.ReactCurrentDispatcher,Cd=T.ReactCurrentBatchConfig,To=0,mn=null,Ln=null,kn=null,Oc=!1,tu=!1,nu=0,VE=0;function Jn(){throw Error(t(321))}function Rd(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!wr(i[l],s[l]))return!1;return!0}function bd(i,s,l,h,m,S){if(To=S,mn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Fc.current=i===null||i.memoizedState===null?YE:jE,i=l(h,m),tu){S=0;do{if(tu=!1,nu=0,25<=S)throw Error(t(301));S+=1,kn=Ln=null,s.updateQueue=null,Fc.current=qE,i=l(h,m)}while(tu)}if(Fc.current=Bc,s=Ln!==null&&Ln.next!==null,To=0,kn=Ln=mn=null,Oc=!1,s)throw Error(t(300));return i}function Pd(){var i=nu!==0;return nu=0,i}function Hr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?mn.memoizedState=kn=i:kn=kn.next=i,kn}function ur(){if(Ln===null){var i=mn.alternate;i=i!==null?i.memoizedState:null}else i=Ln.next;var s=kn===null?mn.memoizedState:kn.next;if(s!==null)kn=s,Ln=i;else{if(i===null)throw Error(t(310));Ln=i,i={memoizedState:Ln.memoizedState,baseState:Ln.baseState,baseQueue:Ln.baseQueue,queue:Ln.queue,next:null},kn===null?mn.memoizedState=kn=i:kn=kn.next=i}return kn}function iu(i,s){return typeof s=="function"?s(i):s}function Dd(i){var s=ur(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Ln,m=h.baseQueue,S=l.pending;if(S!==null){if(m!==null){var A=m.next;m.next=S.next,S.next=A}h.baseQueue=m=S,l.pending=null}if(m!==null){S=m.next,h=h.baseState;var z=A=null,G=null,he=S;do{var Ee=he.lane;if((To&Ee)===Ee)G!==null&&(G=G.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),h=he.hasEagerState?he.eagerState:i(h,he.action);else{var we={lane:Ee,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};G===null?(z=G=we,A=h):G=G.next=we,mn.lanes|=Ee,wo|=Ee}he=he.next}while(he!==null&&he!==S);G===null?A=h:G.next=z,wr(h,s.memoizedState)||(wi=!0),s.memoizedState=h,s.baseState=A,s.baseQueue=G,l.lastRenderedState=h}if(i=l.interleaved,i!==null){m=i;do S=m.lane,mn.lanes|=S,wo|=S,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Ld(i){var s=ur(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,m=l.pending,S=s.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do S=i(S,A.action),A=A.next;while(A!==m);wr(S,s.memoizedState)||(wi=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),l.lastRenderedState=S}return[S,h]}function x0(){}function y0(i,s){var l=mn,h=ur(),m=s(),S=!wr(h.memoizedState,m);if(S&&(h.memoizedState=m,wi=!0),h=h.queue,Nd(E0.bind(null,l,h,i),[i]),h.getSnapshot!==s||S||kn!==null&&kn.memoizedState.tag&1){if(l.flags|=2048,ru(9,M0.bind(null,l,h,m,s),void 0,null),zn===null)throw Error(t(349));(To&30)!==0||S0(l,s,m)}return m}function S0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=mn.updateQueue,s===null?(s={lastEffect:null,stores:null},mn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function M0(i,s,l,h){s.value=l,s.getSnapshot=h,T0(s)&&w0(i)}function E0(i,s,l){return l(function(){T0(s)&&w0(i)})}function T0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!wr(i,l)}catch{return!0}}function w0(i){var s=ss(i,1);s!==null&&Pr(s,i,1,-1)}function A0(i){var s=Hr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:iu,lastRenderedState:i},s.queue=i,i=i.dispatch=XE.bind(null,mn,i),[s.memoizedState,i]}function ru(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=mn.updateQueue,s===null?(s={lastEffect:null,stores:null},mn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function C0(){return ur().memoizedState}function kc(i,s,l,h){var m=Hr();mn.flags|=i,m.memoizedState=ru(1|s,l,void 0,h===void 0?null:h)}function zc(i,s,l,h){var m=ur();h=h===void 0?null:h;var S=void 0;if(Ln!==null){var A=Ln.memoizedState;if(S=A.destroy,h!==null&&Rd(h,A.deps)){m.memoizedState=ru(s,l,S,h);return}}mn.flags|=i,m.memoizedState=ru(1|s,l,S,h)}function R0(i,s){return kc(8390656,8,i,s)}function Nd(i,s){return zc(2048,8,i,s)}function b0(i,s){return zc(4,2,i,s)}function P0(i,s){return zc(4,4,i,s)}function D0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function L0(i,s,l){return l=l!=null?l.concat([i]):null,zc(4,4,D0.bind(null,s,i),l)}function Id(){}function N0(i,s){var l=ur();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Rd(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function I0(i,s){var l=ur();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Rd(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function U0(i,s,l){return(To&21)===0?(i.baseState&&(i.baseState=!1,wi=!0),i.memoizedState=l):(wr(l,s)||(l=ci(),mn.lanes|=l,wo|=l,i.baseState=!0),s)}function GE(i,s){var l=$t;$t=l!==0&&4>l?l:4,i(!0);var h=Cd.transition;Cd.transition={};try{i(!1),s()}finally{$t=l,Cd.transition=h}}function F0(){return ur().memoizedState}function WE(i,s,l){var h=Hs(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},O0(i))k0(s,l);else if(l=p0(i,s,l,h),l!==null){var m=hi();Pr(l,i,h,m),z0(l,s,h)}}function XE(i,s,l){var h=Hs(i),m={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(O0(i))k0(s,m);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var A=s.lastRenderedState,z=S(A,l);if(m.hasEagerState=!0,m.eagerState=z,wr(z,A)){var G=s.interleaved;G===null?(m.next=m,Sd(s)):(m.next=G.next,G.next=m),s.interleaved=m;return}}catch{}finally{}l=p0(i,s,m,h),l!==null&&(m=hi(),Pr(l,i,h,m),z0(l,s,h))}}function O0(i){var s=i.alternate;return i===mn||s!==null&&s===mn}function k0(i,s){tu=Oc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function z0(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Fh(i,l)}}var Bc={readContext:lr,useCallback:Jn,useContext:Jn,useEffect:Jn,useImperativeHandle:Jn,useInsertionEffect:Jn,useLayoutEffect:Jn,useMemo:Jn,useReducer:Jn,useRef:Jn,useState:Jn,useDebugValue:Jn,useDeferredValue:Jn,useTransition:Jn,useMutableSource:Jn,useSyncExternalStore:Jn,useId:Jn,unstable_isNewReconciler:!1},YE={readContext:lr,useCallback:function(i,s){return Hr().memoizedState=[i,s===void 0?null:s],i},useContext:lr,useEffect:R0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,kc(4194308,4,D0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return kc(4194308,4,i,s)},useInsertionEffect:function(i,s){return kc(4,2,i,s)},useMemo:function(i,s){var l=Hr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=Hr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=WE.bind(null,mn,i),[h.memoizedState,i]},useRef:function(i){var s=Hr();return i={current:i},s.memoizedState=i},useState:A0,useDebugValue:Id,useDeferredValue:function(i){return Hr().memoizedState=i},useTransition:function(){var i=A0(!1),s=i[0];return i=GE.bind(null,i[1]),Hr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=mn,m=Hr();if(hn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),zn===null)throw Error(t(349));(To&30)!==0||S0(h,s,l)}m.memoizedState=l;var S={value:l,getSnapshot:s};return m.queue=S,R0(E0.bind(null,h,S,i),[i]),h.flags|=2048,ru(9,M0.bind(null,h,S,l,s),void 0,null),l},useId:function(){var i=Hr(),s=zn.identifierPrefix;if(hn){var l=rs,h=is;l=(h&~(1<<32-Et(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=nu++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=VE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},jE={readContext:lr,useCallback:N0,useContext:lr,useEffect:Nd,useImperativeHandle:L0,useInsertionEffect:b0,useLayoutEffect:P0,useMemo:I0,useReducer:Dd,useRef:C0,useState:function(){return Dd(iu)},useDebugValue:Id,useDeferredValue:function(i){var s=ur();return U0(s,Ln.memoizedState,i)},useTransition:function(){var i=Dd(iu)[0],s=ur().memoizedState;return[i,s]},useMutableSource:x0,useSyncExternalStore:y0,useId:F0,unstable_isNewReconciler:!1},qE={readContext:lr,useCallback:N0,useContext:lr,useEffect:Nd,useImperativeHandle:L0,useInsertionEffect:b0,useLayoutEffect:P0,useMemo:I0,useReducer:Ld,useRef:C0,useState:function(){return Ld(iu)},useDebugValue:Id,useDeferredValue:function(i){var s=ur();return Ln===null?s.memoizedState=i:U0(s,Ln.memoizedState,i)},useTransition:function(){var i=Ld(iu)[0],s=ur().memoizedState;return[i,s]},useMutableSource:x0,useSyncExternalStore:y0,useId:F0,unstable_isNewReconciler:!1};function Cr(i,s){if(i&&i.defaultProps){s=N({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Ud(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:N({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Hc={isMounted:function(i){return(i=i._reactInternals)?Lt(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=hi(),m=Hs(i),S=os(h,m);S.payload=s,l!=null&&(S.callback=l),s=Os(i,S,m),s!==null&&(Pr(s,i,m,h),Nc(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=hi(),m=Hs(i),S=os(h,m);S.tag=1,S.payload=s,l!=null&&(S.callback=l),s=Os(i,S,m),s!==null&&(Pr(s,i,m,h),Nc(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=hi(),h=Hs(i),m=os(l,h);m.tag=2,s!=null&&(m.callback=s),s=Os(i,m,h),s!==null&&(Pr(s,i,h,l),Nc(s,i,h))}};function B0(i,s,l,h,m,S,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,S,A):s.prototype&&s.prototype.isPureReactComponent?!Wl(l,h)||!Wl(m,S):!0}function H0(i,s,l){var h=!1,m=Is,S=s.contextType;return typeof S=="object"&&S!==null?S=lr(S):(m=Ti(s)?xo:Qn.current,h=s.contextTypes,S=(h=h!=null)?ya(i,m):Is),s=new s(l,S),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Hc,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=S),s}function V0(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&Hc.enqueueReplaceState(s,s.state,null)}function Fd(i,s,l,h){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},Md(i);var S=s.contextType;typeof S=="object"&&S!==null?m.context=lr(S):(S=Ti(s)?xo:Qn.current,m.context=ya(i,S)),m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Ud(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Hc.enqueueReplaceState(m,m.state,null),Ic(i,l,m,h),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Ra(i,s){try{var l="",h=s;do l+=X(h),h=h.return;while(h);var m=l}catch(S){m=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:s,stack:m,digest:null}}function Od(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function kd(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var $E=typeof WeakMap=="function"?WeakMap:Map;function G0(i,s,l){l=os(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){qc||(qc=!0,Jd=h),kd(i,s)},l}function W0(i,s,l){l=os(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var m=s.value;l.payload=function(){return h(m)},l.callback=function(){kd(i,s)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){kd(i,s),typeof h!="function"&&(zs===null?zs=new Set([this]):zs.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function X0(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new $E;var m=new Set;h.set(s,m)}else m=h.get(s),m===void 0&&(m=new Set,h.set(s,m));m.has(l)||(m.add(l),i=u1.bind(null,i,s,l),s.then(i,i))}function Y0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function j0(i,s,l,h,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=os(-1,1),s.tag=2,Os(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var KE=T.ReactCurrentOwner,wi=!1;function fi(i,s,l,h){s.child=i===null?d0(s,null,l,h):Ta(s,i.child,l,h)}function q0(i,s,l,h,m){l=l.render;var S=s.ref;return Aa(s,m),h=bd(i,s,l,h,S,m),l=Pd(),i!==null&&!wi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,as(i,s,m)):(hn&&l&&hd(s),s.flags|=1,fi(i,s,h,m),s.child)}function $0(i,s,l,h,m){if(i===null){var S=l.type;return typeof S=="function"&&!op(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=S,K0(i,s,S,h,m)):(i=ef(l.type,null,h,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(S=i.child,(i.lanes&m)===0){var A=S.memoizedProps;if(l=l.compare,l=l!==null?l:Wl,l(A,h)&&i.ref===s.ref)return as(i,s,m)}return s.flags|=1,i=Gs(S,h),i.ref=s.ref,i.return=s,s.child=i}function K0(i,s,l,h,m){if(i!==null){var S=i.memoizedProps;if(Wl(S,h)&&i.ref===s.ref)if(wi=!1,s.pendingProps=h=S,(i.lanes&m)!==0)(i.flags&131072)!==0&&(wi=!0);else return s.lanes=i.lanes,as(i,s,m)}return zd(i,s,l,h,m)}function Z0(i,s,l){var h=s.pendingProps,m=h.children,S=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},on(Pa,Hi),Hi|=l;else{if((l&1073741824)===0)return i=S!==null?S.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,on(Pa,Hi),Hi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=S!==null?S.baseLanes:l,on(Pa,Hi),Hi|=h}else S!==null?(h=S.baseLanes|l,s.memoizedState=null):h=l,on(Pa,Hi),Hi|=h;return fi(i,s,m,l),s.child}function Q0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function zd(i,s,l,h,m){var S=Ti(l)?xo:Qn.current;return S=ya(s,S),Aa(s,m),l=bd(i,s,l,h,S,m),h=Pd(),i!==null&&!wi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,as(i,s,m)):(hn&&h&&hd(s),s.flags|=1,fi(i,s,l,m),s.child)}function J0(i,s,l,h,m){if(Ti(l)){var S=!0;wc(s)}else S=!1;if(Aa(s,m),s.stateNode===null)Gc(i,s),H0(s,l,h),Fd(s,l,h,m),h=!0;else if(i===null){var A=s.stateNode,z=s.memoizedProps;A.props=z;var G=A.context,he=l.contextType;typeof he=="object"&&he!==null?he=lr(he):(he=Ti(l)?xo:Qn.current,he=ya(s,he));var Ee=l.getDerivedStateFromProps,we=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";we||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==h||G!==he)&&V0(s,A,h,he),Fs=!1;var Me=s.memoizedState;A.state=Me,Ic(s,h,A,m),G=s.memoizedState,z!==h||Me!==G||Ei.current||Fs?(typeof Ee=="function"&&(Ud(s,l,Ee,h),G=s.memoizedState),(z=Fs||B0(s,l,z,h,Me,G,he))?(we||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=G),A.props=h,A.state=G,A.context=he,h=z):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{A=s.stateNode,m0(i,s),z=s.memoizedProps,he=s.type===s.elementType?z:Cr(s.type,z),A.props=he,we=s.pendingProps,Me=A.context,G=l.contextType,typeof G=="object"&&G!==null?G=lr(G):(G=Ti(l)?xo:Qn.current,G=ya(s,G));var Ge=l.getDerivedStateFromProps;(Ee=typeof Ge=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==we||Me!==G)&&V0(s,A,h,G),Fs=!1,Me=s.memoizedState,A.state=Me,Ic(s,h,A,m);var Ze=s.memoizedState;z!==we||Me!==Ze||Ei.current||Fs?(typeof Ge=="function"&&(Ud(s,l,Ge,h),Ze=s.memoizedState),(he=Fs||B0(s,l,he,h,Me,Ze,G)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(h,Ze,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(h,Ze,G)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&Me===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Me===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=Ze),A.props=h,A.state=Ze,A.context=G,h=he):(typeof A.componentDidUpdate!="function"||z===i.memoizedProps&&Me===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&Me===i.memoizedState||(s.flags|=1024),h=!1)}return Bd(i,s,l,h,S,m)}function Bd(i,s,l,h,m,S){Q0(i,s);var A=(s.flags&128)!==0;if(!h&&!A)return m&&r0(s,l,!1),as(i,s,S);h=s.stateNode,KE.current=s;var z=A&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&A?(s.child=Ta(s,i.child,null,S),s.child=Ta(s,null,z,S)):fi(i,s,z,S),s.memoizedState=h.state,m&&r0(s,l,!0),s.child}function ev(i){var s=i.stateNode;s.pendingContext?n0(i,s.pendingContext,s.pendingContext!==s.context):s.context&&n0(i,s.context,!1),Ed(i,s.containerInfo)}function tv(i,s,l,h,m){return Ea(),gd(m),s.flags|=256,fi(i,s,l,h),s.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Vd(i){return{baseLanes:i,cachePool:null,transitions:null}}function nv(i,s,l){var h=s.pendingProps,m=pn.current,S=!1,A=(s.flags&128)!==0,z;if((z=A)||(z=i!==null&&i.memoizedState===null?!1:(m&2)!==0),z?(S=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),on(pn,m&1),i===null)return md(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=h.children,i=h.fallback,S?(h=s.mode,S=s.child,A={mode:"hidden",children:A},(h&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=A):S=tf(A,h,0,null),i=bo(i,h,l,null),S.return=s,i.return=s,S.sibling=i,s.child=S,s.child.memoizedState=Vd(l),s.memoizedState=Hd,i):Gd(s,A));if(m=i.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return ZE(i,s,A,h,z,m,l);if(S){S=h.fallback,A=s.mode,m=i.child,z=m.sibling;var G={mode:"hidden",children:h.children};return(A&1)===0&&s.child!==m?(h=s.child,h.childLanes=0,h.pendingProps=G,s.deletions=null):(h=Gs(m,G),h.subtreeFlags=m.subtreeFlags&14680064),z!==null?S=Gs(z,S):(S=bo(S,A,l,null),S.flags|=2),S.return=s,h.return=s,h.sibling=S,s.child=h,h=S,S=s.child,A=i.child.memoizedState,A=A===null?Vd(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},S.memoizedState=A,S.childLanes=i.childLanes&~l,s.memoizedState=Hd,h}return S=i.child,i=S.sibling,h=Gs(S,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function Gd(i,s){return s=tf({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Vc(i,s,l,h){return h!==null&&gd(h),Ta(s,i.child,null,l),i=Gd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function ZE(i,s,l,h,m,S,A){if(l)return s.flags&256?(s.flags&=-257,h=Od(Error(t(422))),Vc(i,s,A,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(S=h.fallback,m=s.mode,h=tf({mode:"visible",children:h.children},m,0,null),S=bo(S,m,A,null),S.flags|=2,h.return=s,S.return=s,h.sibling=S,s.child=h,(s.mode&1)!==0&&Ta(s,i.child,null,A),s.child.memoizedState=Vd(A),s.memoizedState=Hd,S);if((s.mode&1)===0)return Vc(i,s,A,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var z=h.dgst;return h=z,S=Error(t(419)),h=Od(S,h,void 0),Vc(i,s,A,h)}if(z=(A&i.childLanes)!==0,wi||z){if(h=zn,h!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(h.suspendedLanes|A))!==0?0:m,m!==0&&m!==S.retryLane&&(S.retryLane=m,ss(i,m),Pr(h,i,m,-1))}return sp(),h=Od(Error(t(421))),Vc(i,s,A,h)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=c1.bind(null,i),m._reactRetry=s,null):(i=S.treeContext,Bi=Ls(m.nextSibling),zi=s,hn=!0,Ar=null,i!==null&&(or[ar++]=is,or[ar++]=rs,or[ar++]=yo,is=i.id,rs=i.overflow,yo=s),s=Gd(s,h.children),s.flags|=4096,s)}function iv(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),yd(i.return,s,l)}function Wd(i,s,l,h,m){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:m}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=h,S.tail=l,S.tailMode=m)}function rv(i,s,l){var h=s.pendingProps,m=h.revealOrder,S=h.tail;if(fi(i,s,h.children,l),h=pn.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&iv(i,l,s);else if(i.tag===19)iv(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(on(pn,h),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Uc(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Wd(s,!1,m,l,S);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Uc(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Wd(s,!0,l,null,S);break;case"together":Wd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Gc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function as(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),wo|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Gs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Gs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function QE(i,s,l){switch(s.tag){case 3:ev(s),Ea();break;case 5:v0(s);break;case 1:Ti(s.type)&&wc(s);break;case 4:Ed(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,m=s.memoizedProps.value;on(Dc,h._currentValue),h._currentValue=m;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(on(pn,pn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?nv(i,s,l):(on(pn,pn.current&1),i=as(i,s,l),i!==null?i.sibling:null);on(pn,pn.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return rv(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),on(pn,pn.current),h)break;return null;case 22:case 23:return s.lanes=0,Z0(i,s,l)}return as(i,s,l)}var sv,Xd,ov,av;sv=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Xd=function(){},ov=function(i,s,l,h){var m=i.memoizedProps;if(m!==h){i=s.stateNode,Eo(Br.current);var S=null;switch(l){case"input":m=W(i,m),h=W(i,h),S=[];break;case"select":m=N({},m,{value:void 0}),h=N({},h,{value:void 0}),S=[];break;case"textarea":m=P(i,m),h=P(i,h),S=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Mc)}St(l,h);var A;l=null;for(he in m)if(!h.hasOwnProperty(he)&&m.hasOwnProperty(he)&&m[he]!=null)if(he==="style"){var z=m[he];for(A in z)z.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(r.hasOwnProperty(he)?S||(S=[]):(S=S||[]).push(he,null));for(he in h){var G=h[he];if(z=m!=null?m[he]:void 0,h.hasOwnProperty(he)&&G!==z&&(G!=null||z!=null))if(he==="style")if(z){for(A in z)!z.hasOwnProperty(A)||G&&G.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in G)G.hasOwnProperty(A)&&z[A]!==G[A]&&(l||(l={}),l[A]=G[A])}else l||(S||(S=[]),S.push(he,l)),l=G;else he==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,z=z?z.__html:void 0,G!=null&&z!==G&&(S=S||[]).push(he,G)):he==="children"?typeof G!="string"&&typeof G!="number"||(S=S||[]).push(he,""+G):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(r.hasOwnProperty(he)?(G!=null&&he==="onScroll"&&un("scroll",i),S||z===G||(S=[])):(S=S||[]).push(he,G))}l&&(S=S||[]).push("style",l);var he=S;(s.updateQueue=he)&&(s.flags|=4)}},av=function(i,s,l,h){l!==h&&(s.flags|=4)};function su(i,s){if(!hn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function ei(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function JE(i,s,l){var h=s.pendingProps;switch(dd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ei(s),null;case 1:return Ti(s.type)&&Tc(),ei(s),null;case 3:return h=s.stateNode,Ca(),cn(Ei),cn(Qn),Ad(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(bc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ar!==null&&(np(Ar),Ar=null))),Xd(i,s),ei(s),null;case 5:Td(s);var m=Eo(eu.current);if(l=s.type,i!==null&&s.stateNode!=null)ov(i,s,l,h,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return ei(s),null}if(i=Eo(Br.current),bc(s)){h=s.stateNode,l=s.type;var S=s.memoizedProps;switch(h[zr]=s,h[$l]=S,i=(s.mode&1)!==0,l){case"dialog":un("cancel",h),un("close",h);break;case"iframe":case"object":case"embed":un("load",h);break;case"video":case"audio":for(m=0;m<Yl.length;m++)un(Yl[m],h);break;case"source":un("error",h);break;case"img":case"image":case"link":un("error",h),un("load",h);break;case"details":un("toggle",h);break;case"input":kt(h,S),un("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!S.multiple},un("invalid",h);break;case"textarea":ie(h,S),un("invalid",h)}St(l,S),m=null;for(var A in S)if(S.hasOwnProperty(A)){var z=S[A];A==="children"?typeof z=="string"?h.textContent!==z&&(S.suppressHydrationWarning!==!0&&Sc(h.textContent,z,i),m=["children",z]):typeof z=="number"&&h.textContent!==""+z&&(S.suppressHydrationWarning!==!0&&Sc(h.textContent,z,i),m=["children",""+z]):r.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&un("scroll",h)}switch(l){case"input":_t(h),We(h,S,!0);break;case"textarea":_t(h),_e(h);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(h.onclick=Mc)}h=m,s.updateQueue=h,h!==null&&(s.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=ge(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=A.createElement(l,{is:h.is}):(i=A.createElement(l),l==="select"&&(A=i,h.multiple?A.multiple=!0:h.size&&(A.size=h.size))):i=A.createElementNS(i,l),i[zr]=s,i[$l]=h,sv(i,s,!1,!1),s.stateNode=i;e:{switch(A=at(l,h),l){case"dialog":un("cancel",i),un("close",i),m=h;break;case"iframe":case"object":case"embed":un("load",i),m=h;break;case"video":case"audio":for(m=0;m<Yl.length;m++)un(Yl[m],i);m=h;break;case"source":un("error",i),m=h;break;case"img":case"image":case"link":un("error",i),un("load",i),m=h;break;case"details":un("toggle",i),m=h;break;case"input":kt(i,h),m=W(i,h),un("invalid",i);break;case"option":m=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},m=N({},h,{value:void 0}),un("invalid",i);break;case"textarea":ie(i,h),m=P(i,h),un("invalid",i);break;default:m=h}St(l,m),z=m;for(S in z)if(z.hasOwnProperty(S)){var G=z[S];S==="style"?it(i,G):S==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Fe(i,G)):S==="children"?typeof G=="string"?(l!=="textarea"||G!=="")&&mt(i,G):typeof G=="number"&&mt(i,""+G):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(r.hasOwnProperty(S)?G!=null&&S==="onScroll"&&un("scroll",i):G!=null&&b(i,S,G,A))}switch(l){case"input":_t(i),We(i,h,!1);break;case"textarea":_t(i),_e(i);break;case"option":h.value!=null&&i.setAttribute("value",""+ye(h.value));break;case"select":i.multiple=!!h.multiple,S=h.value,S!=null?I(i,!!h.multiple,S,!1):h.defaultValue!=null&&I(i,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Mc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return ei(s),null;case 6:if(i&&s.stateNode!=null)av(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=Eo(eu.current),Eo(Br.current),bc(s)){if(h=s.stateNode,l=s.memoizedProps,h[zr]=s,(S=h.nodeValue!==l)&&(i=zi,i!==null))switch(i.tag){case 3:Sc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Sc(h.nodeValue,l,(i.mode&1)!==0)}S&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[zr]=s,s.stateNode=h}return ei(s),null;case 13:if(cn(pn),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(hn&&Bi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)c0(),Ea(),s.flags|=98560,S=!1;else if(S=bc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[zr]=s}else Ea(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ei(s),S=!1}else Ar!==null&&(np(Ar),Ar=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(pn.current&1)!==0?Nn===0&&(Nn=3):sp())),s.updateQueue!==null&&(s.flags|=4),ei(s),null);case 4:return Ca(),Xd(i,s),i===null&&jl(s.stateNode.containerInfo),ei(s),null;case 10:return xd(s.type._context),ei(s),null;case 17:return Ti(s.type)&&Tc(),ei(s),null;case 19:if(cn(pn),S=s.memoizedState,S===null)return ei(s),null;if(h=(s.flags&128)!==0,A=S.rendering,A===null)if(h)su(S,!1);else{if(Nn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Uc(i),A!==null){for(s.flags|=128,su(S,!1),h=A.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)S=l,i=h,S.flags&=14680066,A=S.alternate,A===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=A.childLanes,S.lanes=A.lanes,S.child=A.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=A.memoizedProps,S.memoizedState=A.memoizedState,S.updateQueue=A.updateQueue,S.type=A.type,i=A.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return on(pn,pn.current&1|2),s.child}i=i.sibling}S.tail!==null&&Se()>Da&&(s.flags|=128,h=!0,su(S,!1),s.lanes=4194304)}else{if(!h)if(i=Uc(A),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),su(S,!0),S.tail===null&&S.tailMode==="hidden"&&!A.alternate&&!hn)return ei(s),null}else 2*Se()-S.renderingStartTime>Da&&l!==1073741824&&(s.flags|=128,h=!0,su(S,!1),s.lanes=4194304);S.isBackwards?(A.sibling=s.child,s.child=A):(l=S.last,l!==null?l.sibling=A:s.child=A,S.last=A)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=Se(),s.sibling=null,l=pn.current,on(pn,h?l&1|2:l&1),s):(ei(s),null);case 22:case 23:return rp(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(Hi&1073741824)!==0&&(ei(s),s.subtreeFlags&6&&(s.flags|=8192)):ei(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function e1(i,s){switch(dd(s),s.tag){case 1:return Ti(s.type)&&Tc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ca(),cn(Ei),cn(Qn),Ad(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Td(s),null;case 13:if(cn(pn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ea()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return cn(pn),null;case 4:return Ca(),null;case 10:return xd(s.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var Wc=!1,ti=!1,t1=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ba(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){xn(i,s,h)}else l.current=null}function Yd(i,s,l){try{l()}catch(h){xn(i,s,h)}}var lv=!1;function n1(i,s){if(rd=cc,i=B_(),Kh(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var m=h.anchorOffset,S=h.focusNode;h=h.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var A=0,z=-1,G=-1,he=0,Ee=0,we=i,Me=null;t:for(;;){for(var Ge;we!==l||m!==0&&we.nodeType!==3||(z=A+m),we!==S||h!==0&&we.nodeType!==3||(G=A+h),we.nodeType===3&&(A+=we.nodeValue.length),(Ge=we.firstChild)!==null;)Me=we,we=Ge;for(;;){if(we===i)break t;if(Me===l&&++he===m&&(z=A),Me===S&&++Ee===h&&(G=A),(Ge=we.nextSibling)!==null)break;we=Me,Me=we.parentNode}we=Ge}l=z===-1||G===-1?null:{start:z,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(sd={focusedElem:i,selectionRange:l},cc=!1,Ye=s;Ye!==null;)if(s=Ye,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ye=i;else for(;Ye!==null;){s=Ye;try{var Ze=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var et=Ze.memoizedProps,En=Ze.memoizedState,te=s.stateNode,q=te.getSnapshotBeforeUpdate(s.elementType===s.type?et:Cr(s.type,et),En);te.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){xn(s,s.return,Re)}if(i=s.sibling,i!==null){i.return=s.return,Ye=i;break}Ye=s.return}return Ze=lv,lv=!1,Ze}function ou(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&i)===i){var S=m.destroy;m.destroy=void 0,S!==void 0&&Yd(s,l,S)}m=m.next}while(m!==h)}}function Xc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function jd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function uv(i){var s=i.alternate;s!==null&&(i.alternate=null,uv(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[zr],delete s[$l],delete s[ud],delete s[kE],delete s[zE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function cv(i){return i.tag===5||i.tag===3||i.tag===4}function fv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||cv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function qd(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Mc));else if(h!==4&&(i=i.child,i!==null))for(qd(i,s,l),i=i.sibling;i!==null;)qd(i,s,l),i=i.sibling}function $d(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for($d(i,s,l),i=i.sibling;i!==null;)$d(i,s,l),i=i.sibling}var Yn=null,Rr=!1;function ks(i,s,l){for(l=l.child;l!==null;)hv(i,s,l),l=l.sibling}function hv(i,s,l){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Ft,l)}catch{}switch(l.tag){case 5:ti||ba(l,s);case 6:var h=Yn,m=Rr;Yn=null,ks(i,s,l),Yn=h,Rr=m,Yn!==null&&(Rr?(i=Yn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Yn.removeChild(l.stateNode));break;case 18:Yn!==null&&(Rr?(i=Yn,l=l.stateNode,i.nodeType===8?ld(i.parentNode,l):i.nodeType===1&&ld(i,l),kl(i)):ld(Yn,l.stateNode));break;case 4:h=Yn,m=Rr,Yn=l.stateNode.containerInfo,Rr=!0,ks(i,s,l),Yn=h,Rr=m;break;case 0:case 11:case 14:case 15:if(!ti&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var S=m,A=S.destroy;S=S.tag,A!==void 0&&((S&2)!==0||(S&4)!==0)&&Yd(l,s,A),m=m.next}while(m!==h)}ks(i,s,l);break;case 1:if(!ti&&(ba(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(z){xn(l,s,z)}ks(i,s,l);break;case 21:ks(i,s,l);break;case 22:l.mode&1?(ti=(h=ti)||l.memoizedState!==null,ks(i,s,l),ti=h):ks(i,s,l);break;default:ks(i,s,l)}}function dv(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new t1),s.forEach(function(h){var m=f1.bind(null,i,h);l.has(h)||(l.add(h),h.then(m,m))})}}function br(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var m=l[h];try{var S=i,A=s,z=A;e:for(;z!==null;){switch(z.tag){case 5:Yn=z.stateNode,Rr=!1;break e;case 3:Yn=z.stateNode.containerInfo,Rr=!0;break e;case 4:Yn=z.stateNode.containerInfo,Rr=!0;break e}z=z.return}if(Yn===null)throw Error(t(160));hv(S,A,m),Yn=null,Rr=!1;var G=m.alternate;G!==null&&(G.return=null),m.return=null}catch(he){xn(m,s,he)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)pv(s,i),s=s.sibling}function pv(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(br(s,i),Vr(i),h&4){try{ou(3,i,i.return),Xc(3,i)}catch(et){xn(i,i.return,et)}try{ou(5,i,i.return)}catch(et){xn(i,i.return,et)}}break;case 1:br(s,i),Vr(i),h&512&&l!==null&&ba(l,l.return);break;case 5:if(br(s,i),Vr(i),h&512&&l!==null&&ba(l,l.return),i.flags&32){var m=i.stateNode;try{mt(m,"")}catch(et){xn(i,i.return,et)}}if(h&4&&(m=i.stateNode,m!=null)){var S=i.memoizedProps,A=l!==null?l.memoizedProps:S,z=i.type,G=i.updateQueue;if(i.updateQueue=null,G!==null)try{z==="input"&&S.type==="radio"&&S.name!=null&&ht(m,S),at(z,A);var he=at(z,S);for(A=0;A<G.length;A+=2){var Ee=G[A],we=G[A+1];Ee==="style"?it(m,we):Ee==="dangerouslySetInnerHTML"?Fe(m,we):Ee==="children"?mt(m,we):b(m,Ee,we,he)}switch(z){case"input":J(m,S);break;case"textarea":ve(m,S);break;case"select":var Me=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!S.multiple;var Ge=S.value;Ge!=null?I(m,!!S.multiple,Ge,!1):Me!==!!S.multiple&&(S.defaultValue!=null?I(m,!!S.multiple,S.defaultValue,!0):I(m,!!S.multiple,S.multiple?[]:"",!1))}m[$l]=S}catch(et){xn(i,i.return,et)}}break;case 6:if(br(s,i),Vr(i),h&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,S=i.memoizedProps;try{m.nodeValue=S}catch(et){xn(i,i.return,et)}}break;case 3:if(br(s,i),Vr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{kl(s.containerInfo)}catch(et){xn(i,i.return,et)}break;case 4:br(s,i),Vr(i);break;case 13:br(s,i),Vr(i),m=i.child,m.flags&8192&&(S=m.memoizedState!==null,m.stateNode.isHidden=S,!S||m.alternate!==null&&m.alternate.memoizedState!==null||(Qd=Se())),h&4&&dv(i);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,i.mode&1?(ti=(he=ti)||Ee,br(s,i),ti=he):br(s,i),Vr(i),h&8192){if(he=i.memoizedState!==null,(i.stateNode.isHidden=he)&&!Ee&&(i.mode&1)!==0)for(Ye=i,Ee=i.child;Ee!==null;){for(we=Ye=Ee;Ye!==null;){switch(Me=Ye,Ge=Me.child,Me.tag){case 0:case 11:case 14:case 15:ou(4,Me,Me.return);break;case 1:ba(Me,Me.return);var Ze=Me.stateNode;if(typeof Ze.componentWillUnmount=="function"){h=Me,l=Me.return;try{s=h,Ze.props=s.memoizedProps,Ze.state=s.memoizedState,Ze.componentWillUnmount()}catch(et){xn(h,l,et)}}break;case 5:ba(Me,Me.return);break;case 22:if(Me.memoizedState!==null){_v(we);continue}}Ge!==null?(Ge.return=Me,Ye=Ge):_v(we)}Ee=Ee.sibling}e:for(Ee=null,we=i;;){if(we.tag===5){if(Ee===null){Ee=we;try{m=we.stateNode,he?(S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(z=we.stateNode,G=we.memoizedProps.style,A=G!=null&&G.hasOwnProperty("display")?G.display:null,z.style.display=st("display",A))}catch(et){xn(i,i.return,et)}}}else if(we.tag===6){if(Ee===null)try{we.stateNode.nodeValue=he?"":we.memoizedProps}catch(et){xn(i,i.return,et)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===i)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===i)break e;for(;we.sibling===null;){if(we.return===null||we.return===i)break e;Ee===we&&(Ee=null),we=we.return}Ee===we&&(Ee=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:br(s,i),Vr(i),h&4&&dv(i);break;case 21:break;default:br(s,i),Vr(i)}}function Vr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(cv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(mt(m,""),h.flags&=-33);var S=fv(i);$d(i,S,m);break;case 3:case 4:var A=h.stateNode.containerInfo,z=fv(i);qd(i,z,A);break;default:throw Error(t(161))}}catch(G){xn(i,i.return,G)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function i1(i,s,l){Ye=i,mv(i)}function mv(i,s,l){for(var h=(i.mode&1)!==0;Ye!==null;){var m=Ye,S=m.child;if(m.tag===22&&h){var A=m.memoizedState!==null||Wc;if(!A){var z=m.alternate,G=z!==null&&z.memoizedState!==null||ti;z=Wc;var he=ti;if(Wc=A,(ti=G)&&!he)for(Ye=m;Ye!==null;)A=Ye,G=A.child,A.tag===22&&A.memoizedState!==null?vv(m):G!==null?(G.return=A,Ye=G):vv(m);for(;S!==null;)Ye=S,mv(S),S=S.sibling;Ye=m,Wc=z,ti=he}gv(i)}else(m.subtreeFlags&8772)!==0&&S!==null?(S.return=m,Ye=S):gv(i)}}function gv(i){for(;Ye!==null;){var s=Ye;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:ti||Xc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!ti)if(l===null)h.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Cr(s.type,l.memoizedProps);h.componentDidUpdate(m,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&_0(s,S,h);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}_0(s,A,l)}break;case 5:var z=s.stateNode;if(l===null&&s.flags&4){l=z;var G=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&l.focus();break;case"img":G.src&&(l.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var he=s.alternate;if(he!==null){var Ee=he.memoizedState;if(Ee!==null){var we=Ee.dehydrated;we!==null&&kl(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ti||s.flags&512&&jd(s)}catch(Me){xn(s,s.return,Me)}}if(s===i){Ye=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function _v(i){for(;Ye!==null;){var s=Ye;if(s===i){Ye=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function vv(i){for(;Ye!==null;){var s=Ye;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Xc(4,s)}catch(G){xn(s,l,G)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var m=s.return;try{h.componentDidMount()}catch(G){xn(s,m,G)}}var S=s.return;try{jd(s)}catch(G){xn(s,S,G)}break;case 5:var A=s.return;try{jd(s)}catch(G){xn(s,A,G)}}}catch(G){xn(s,s.return,G)}if(s===i){Ye=null;break}var z=s.sibling;if(z!==null){z.return=s.return,Ye=z;break}Ye=s.return}}var r1=Math.ceil,Yc=T.ReactCurrentDispatcher,Kd=T.ReactCurrentOwner,cr=T.ReactCurrentBatchConfig,Vt=0,zn=null,An=null,jn=0,Hi=0,Pa=Ns(0),Nn=0,au=null,wo=0,jc=0,Zd=0,lu=null,Ai=null,Qd=0,Da=1/0,ls=null,qc=!1,Jd=null,zs=null,$c=!1,Bs=null,Kc=0,uu=0,ep=null,Zc=-1,Qc=0;function hi(){return(Vt&6)!==0?Se():Zc!==-1?Zc:Zc=Se()}function Hs(i){return(i.mode&1)===0?1:(Vt&2)!==0&&jn!==0?jn&-jn:HE.transition!==null?(Qc===0&&(Qc=ci()),Qc):(i=$t,i!==0||(i=window.event,i=i===void 0?16:y_(i.type)),i)}function Pr(i,s,l,h){if(50<uu)throw uu=0,ep=null,Error(t(185));Mi(i,l,h),((Vt&2)===0||i!==zn)&&(i===zn&&((Vt&2)===0&&(jc|=l),Nn===4&&Vs(i,jn)),Ci(i,h),l===1&&Vt===0&&(s.mode&1)===0&&(Da=Se()+500,Ac&&Us()))}function Ci(i,s){var l=i.callbackNode;rr(i,s);var h=kr(i,i===zn?jn:0);if(h===0)l!==null&&re(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&re(l),s===1)i.tag===0?BE(yv.bind(null,i)):s0(yv.bind(null,i)),FE(function(){(Vt&6)===0&&Us()}),l=null;else{switch(h_(h)){case 1:l=He;break;case 4:l=pt;break;case 16:l=gt;break;case 536870912:l=yt;break;default:l=gt}l=Rv(l,xv.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function xv(i,s){if(Zc=-1,Qc=0,(Vt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(La()&&i.callbackNode!==l)return null;var h=kr(i,i===zn?jn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=Jc(i,h);else{s=h;var m=Vt;Vt|=2;var S=Mv();(zn!==i||jn!==s)&&(ls=null,Da=Se()+500,Co(i,s));do try{a1();break}catch(z){Sv(i,z)}while(!0);vd(),Yc.current=S,Vt=m,An!==null?s=0:(zn=null,jn=0,s=Nn)}if(s!==0){if(s===2&&(m=es(i),m!==0&&(h=m,s=tp(i,m))),s===1)throw l=au,Co(i,0),Vs(i,h),Ci(i,Se()),l;if(s===6)Vs(i,h);else{if(m=i.current.alternate,(h&30)===0&&!s1(m)&&(s=Jc(i,h),s===2&&(S=es(i),S!==0&&(h=S,s=tp(i,S))),s===1))throw l=au,Co(i,0),Vs(i,h),Ci(i,Se()),l;switch(i.finishedWork=m,i.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ro(i,Ai,ls);break;case 3:if(Vs(i,h),(h&130023424)===h&&(s=Qd+500-Se(),10<s)){if(kr(i,0)!==0)break;if(m=i.suspendedLanes,(m&h)!==h){hi(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=ad(Ro.bind(null,i,Ai,ls),s);break}Ro(i,Ai,ls);break;case 4:if(Vs(i,h),(h&4194240)===h)break;for(s=i.eventTimes,m=-1;0<h;){var A=31-Et(h);S=1<<A,A=s[A],A>m&&(m=A),h&=~S}if(h=m,h=Se()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*r1(h/1960))-h,10<h){i.timeoutHandle=ad(Ro.bind(null,i,Ai,ls),h);break}Ro(i,Ai,ls);break;case 5:Ro(i,Ai,ls);break;default:throw Error(t(329))}}}return Ci(i,Se()),i.callbackNode===l?xv.bind(null,i):null}function tp(i,s){var l=lu;return i.current.memoizedState.isDehydrated&&(Co(i,s).flags|=256),i=Jc(i,s),i!==2&&(s=Ai,Ai=l,s!==null&&np(s)),i}function np(i){Ai===null?Ai=i:Ai.push.apply(Ai,i)}function s1(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var m=l[h],S=m.getSnapshot;m=m.value;try{if(!wr(S(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Vs(i,s){for(s&=~Zd,s&=~jc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Et(s),h=1<<l;i[l]=-1,s&=~h}}function yv(i){if((Vt&6)!==0)throw Error(t(327));La();var s=kr(i,0);if((s&1)===0)return Ci(i,Se()),null;var l=Jc(i,s);if(i.tag!==0&&l===2){var h=es(i);h!==0&&(s=h,l=tp(i,h))}if(l===1)throw l=au,Co(i,0),Vs(i,s),Ci(i,Se()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ro(i,Ai,ls),Ci(i,Se()),null}function ip(i,s){var l=Vt;Vt|=1;try{return i(s)}finally{Vt=l,Vt===0&&(Da=Se()+500,Ac&&Us())}}function Ao(i){Bs!==null&&Bs.tag===0&&(Vt&6)===0&&La();var s=Vt;Vt|=1;var l=cr.transition,h=$t;try{if(cr.transition=null,$t=1,i)return i()}finally{$t=h,cr.transition=l,Vt=s,(Vt&6)===0&&Us()}}function rp(){Hi=Pa.current,cn(Pa)}function Co(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,UE(l)),An!==null)for(l=An.return;l!==null;){var h=l;switch(dd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Tc();break;case 3:Ca(),cn(Ei),cn(Qn),Ad();break;case 5:Td(h);break;case 4:Ca();break;case 13:cn(pn);break;case 19:cn(pn);break;case 10:xd(h.type._context);break;case 22:case 23:rp()}l=l.return}if(zn=i,An=i=Gs(i.current,null),jn=Hi=s,Nn=0,au=null,Zd=jc=wo=0,Ai=lu=null,Mo!==null){for(s=0;s<Mo.length;s++)if(l=Mo[s],h=l.interleaved,h!==null){l.interleaved=null;var m=h.next,S=l.pending;if(S!==null){var A=S.next;S.next=m,h.next=A}l.pending=h}Mo=null}return i}function Sv(i,s){do{var l=An;try{if(vd(),Fc.current=Bc,Oc){for(var h=mn.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}Oc=!1}if(To=0,kn=Ln=mn=null,tu=!1,nu=0,Kd.current=null,l===null||l.return===null){Nn=1,au=s,An=null;break}e:{var S=i,A=l.return,z=l,G=s;if(s=jn,z.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var he=G,Ee=z,we=Ee.tag;if((Ee.mode&1)===0&&(we===0||we===11||we===15)){var Me=Ee.alternate;Me?(Ee.updateQueue=Me.updateQueue,Ee.memoizedState=Me.memoizedState,Ee.lanes=Me.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ge=Y0(A);if(Ge!==null){Ge.flags&=-257,j0(Ge,A,z,S,s),Ge.mode&1&&X0(S,he,s),s=Ge,G=he;var Ze=s.updateQueue;if(Ze===null){var et=new Set;et.add(G),s.updateQueue=et}else Ze.add(G);break e}else{if((s&1)===0){X0(S,he,s),sp();break e}G=Error(t(426))}}else if(hn&&z.mode&1){var En=Y0(A);if(En!==null){(En.flags&65536)===0&&(En.flags|=256),j0(En,A,z,S,s),gd(Ra(G,z));break e}}S=G=Ra(G,z),Nn!==4&&(Nn=2),lu===null?lu=[S]:lu.push(S),S=A;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var te=G0(S,G,s);g0(S,te);break e;case 1:z=G;var q=S.type,ae=S.stateNode;if((S.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(zs===null||!zs.has(ae)))){S.flags|=65536,s&=-s,S.lanes|=s;var Re=W0(S,z,s);g0(S,Re);break e}}S=S.return}while(S!==null)}Tv(l)}catch(tt){s=tt,An===l&&l!==null&&(An=l=l.return);continue}break}while(!0)}function Mv(){var i=Yc.current;return Yc.current=Bc,i===null?Bc:i}function sp(){(Nn===0||Nn===3||Nn===2)&&(Nn=4),zn===null||(wo&268435455)===0&&(jc&268435455)===0||Vs(zn,jn)}function Jc(i,s){var l=Vt;Vt|=2;var h=Mv();(zn!==i||jn!==s)&&(ls=null,Co(i,s));do try{o1();break}catch(m){Sv(i,m)}while(!0);if(vd(),Vt=l,Yc.current=h,An!==null)throw Error(t(261));return zn=null,jn=0,Nn}function o1(){for(;An!==null;)Ev(An)}function a1(){for(;An!==null&&!$();)Ev(An)}function Ev(i){var s=Cv(i.alternate,i,Hi);i.memoizedProps=i.pendingProps,s===null?Tv(i):An=s,Kd.current=null}function Tv(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=JE(l,s,Hi),l!==null){An=l;return}}else{if(l=e1(l,s),l!==null){l.flags&=32767,An=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Nn=6,An=null;return}}if(s=s.sibling,s!==null){An=s;return}An=s=i}while(s!==null);Nn===0&&(Nn=5)}function Ro(i,s,l){var h=$t,m=cr.transition;try{cr.transition=null,$t=1,l1(i,s,l,h)}finally{cr.transition=m,$t=h}return null}function l1(i,s,l,h){do La();while(Bs!==null);if((Vt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=l.lanes|l.childLanes;if(ac(i,S),i===zn&&(An=zn=null,jn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||$c||($c=!0,Rv(gt,function(){return La(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=cr.transition,cr.transition=null;var A=$t;$t=1;var z=Vt;Vt|=4,Kd.current=null,n1(i,l),pv(l,i),RE(sd),cc=!!rd,sd=rd=null,i.current=l,i1(l),Ce(),Vt=z,$t=A,cr.transition=S}else i.current=l;if($c&&($c=!1,Bs=i,Kc=m),S=i.pendingLanes,S===0&&(zs=null),ln(l.stateNode),Ci(i,Se()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],h(m.value,{componentStack:m.stack,digest:m.digest});if(qc)throw qc=!1,i=Jd,Jd=null,i;return(Kc&1)!==0&&i.tag!==0&&La(),S=i.pendingLanes,(S&1)!==0?i===ep?uu++:(uu=0,ep=i):uu=0,Us(),null}function La(){if(Bs!==null){var i=h_(Kc),s=cr.transition,l=$t;try{if(cr.transition=null,$t=16>i?16:i,Bs===null)var h=!1;else{if(i=Bs,Bs=null,Kc=0,(Vt&6)!==0)throw Error(t(331));var m=Vt;for(Vt|=4,Ye=i.current;Ye!==null;){var S=Ye,A=S.child;if((Ye.flags&16)!==0){var z=S.deletions;if(z!==null){for(var G=0;G<z.length;G++){var he=z[G];for(Ye=he;Ye!==null;){var Ee=Ye;switch(Ee.tag){case 0:case 11:case 15:ou(8,Ee,S)}var we=Ee.child;if(we!==null)we.return=Ee,Ye=we;else for(;Ye!==null;){Ee=Ye;var Me=Ee.sibling,Ge=Ee.return;if(uv(Ee),Ee===he){Ye=null;break}if(Me!==null){Me.return=Ge,Ye=Me;break}Ye=Ge}}}var Ze=S.alternate;if(Ze!==null){var et=Ze.child;if(et!==null){Ze.child=null;do{var En=et.sibling;et.sibling=null,et=En}while(et!==null)}}Ye=S}}if((S.subtreeFlags&2064)!==0&&A!==null)A.return=S,Ye=A;else e:for(;Ye!==null;){if(S=Ye,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:ou(9,S,S.return)}var te=S.sibling;if(te!==null){te.return=S.return,Ye=te;break e}Ye=S.return}}var q=i.current;for(Ye=q;Ye!==null;){A=Ye;var ae=A.child;if((A.subtreeFlags&2064)!==0&&ae!==null)ae.return=A,Ye=ae;else e:for(A=q;Ye!==null;){if(z=Ye,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Xc(9,z)}}catch(tt){xn(z,z.return,tt)}if(z===A){Ye=null;break e}var Re=z.sibling;if(Re!==null){Re.return=z.return,Ye=Re;break e}Ye=z.return}}if(Vt=m,Us(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Ft,i)}catch{}h=!0}return h}finally{$t=l,cr.transition=s}}return!1}function wv(i,s,l){s=Ra(l,s),s=G0(i,s,1),i=Os(i,s,1),s=hi(),i!==null&&(Mi(i,1,s),Ci(i,s))}function xn(i,s,l){if(i.tag===3)wv(i,i,l);else for(;s!==null;){if(s.tag===3){wv(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(zs===null||!zs.has(h))){i=Ra(l,i),i=W0(s,i,1),s=Os(s,i,1),i=hi(),s!==null&&(Mi(s,1,i),Ci(s,i));break}}s=s.return}}function u1(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=hi(),i.pingedLanes|=i.suspendedLanes&l,zn===i&&(jn&l)===l&&(Nn===4||Nn===3&&(jn&130023424)===jn&&500>Se()-Qd?Co(i,0):Zd|=l),Ci(i,s)}function Av(i,s){s===0&&((i.mode&1)===0?s=1:(s=Tr,Tr<<=1,(Tr&130023424)===0&&(Tr=4194304)));var l=hi();i=ss(i,s),i!==null&&(Mi(i,s,l),Ci(i,l))}function c1(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Av(i,l)}function f1(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Av(i,l)}var Cv;Cv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Ei.current)wi=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return wi=!1,QE(i,s,l);wi=(i.flags&131072)!==0}else wi=!1,hn&&(s.flags&1048576)!==0&&o0(s,Rc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Gc(i,s),i=s.pendingProps;var m=ya(s,Qn.current);Aa(s,l),m=bd(null,s,h,i,m,l);var S=Pd();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Ti(h)?(S=!0,wc(s)):S=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Md(s),m.updater=Hc,s.stateNode=m,m._reactInternals=s,Fd(s,h,i,l),s=Bd(null,s,h,!0,S,l)):(s.tag=0,hn&&S&&hd(s),fi(null,s,m,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Gc(i,s),i=s.pendingProps,m=h._init,h=m(h._payload),s.type=h,m=s.tag=d1(h),i=Cr(h,i),m){case 0:s=zd(null,s,h,i,l);break e;case 1:s=J0(null,s,h,i,l);break e;case 11:s=q0(null,s,h,i,l);break e;case 14:s=$0(null,s,h,Cr(h.type,i),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:Cr(h,m),zd(i,s,h,m,l);case 1:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:Cr(h,m),J0(i,s,h,m,l);case 3:e:{if(ev(s),i===null)throw Error(t(387));h=s.pendingProps,S=s.memoizedState,m=S.element,m0(i,s),Ic(s,h,null,l);var A=s.memoizedState;if(h=A.element,S.isDehydrated)if(S={element:h,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){m=Ra(Error(t(423)),s),s=tv(i,s,h,l,m);break e}else if(h!==m){m=Ra(Error(t(424)),s),s=tv(i,s,h,l,m);break e}else for(Bi=Ls(s.stateNode.containerInfo.firstChild),zi=s,hn=!0,Ar=null,l=d0(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ea(),h===m){s=as(i,s,l);break e}fi(i,s,h,l)}s=s.child}return s;case 5:return v0(s),i===null&&md(s),h=s.type,m=s.pendingProps,S=i!==null?i.memoizedProps:null,A=m.children,od(h,m)?A=null:S!==null&&od(h,S)&&(s.flags|=32),Q0(i,s),fi(i,s,A,l),s.child;case 6:return i===null&&md(s),null;case 13:return nv(i,s,l);case 4:return Ed(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=Ta(s,null,h,l):fi(i,s,h,l),s.child;case 11:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:Cr(h,m),q0(i,s,h,m,l);case 7:return fi(i,s,s.pendingProps,l),s.child;case 8:return fi(i,s,s.pendingProps.children,l),s.child;case 12:return fi(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,m=s.pendingProps,S=s.memoizedProps,A=m.value,on(Dc,h._currentValue),h._currentValue=A,S!==null)if(wr(S.value,A)){if(S.children===m.children&&!Ei.current){s=as(i,s,l);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var z=S.dependencies;if(z!==null){A=S.child;for(var G=z.firstContext;G!==null;){if(G.context===h){if(S.tag===1){G=os(-1,l&-l),G.tag=2;var he=S.updateQueue;if(he!==null){he=he.shared;var Ee=he.pending;Ee===null?G.next=G:(G.next=Ee.next,Ee.next=G),he.pending=G}}S.lanes|=l,G=S.alternate,G!==null&&(G.lanes|=l),yd(S.return,l,s),z.lanes|=l;break}G=G.next}}else if(S.tag===10)A=S.type===s.type?null:S.child;else if(S.tag===18){if(A=S.return,A===null)throw Error(t(341));A.lanes|=l,z=A.alternate,z!==null&&(z.lanes|=l),yd(A,l,s),A=S.sibling}else A=S.child;if(A!==null)A.return=S;else for(A=S;A!==null;){if(A===s){A=null;break}if(S=A.sibling,S!==null){S.return=A.return,A=S;break}A=A.return}S=A}fi(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,h=s.pendingProps.children,Aa(s,l),m=lr(m),h=h(m),s.flags|=1,fi(i,s,h,l),s.child;case 14:return h=s.type,m=Cr(h,s.pendingProps),m=Cr(h.type,m),$0(i,s,h,m,l);case 15:return K0(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:Cr(h,m),Gc(i,s),s.tag=1,Ti(h)?(i=!0,wc(s)):i=!1,Aa(s,l),H0(s,h,m),Fd(s,h,m,l),Bd(null,s,h,!0,i,l);case 19:return rv(i,s,l);case 22:return Z0(i,s,l)}throw Error(t(156,s.tag))};function Rv(i,s){return ne(i,s)}function h1(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fr(i,s,l,h){return new h1(i,s,l,h)}function op(i){return i=i.prototype,!(!i||!i.isReactComponent)}function d1(i){if(typeof i=="function")return op(i)?1:0;if(i!=null){if(i=i.$$typeof,i===j)return 11;if(i===ce)return 14}return 2}function Gs(i,s){var l=i.alternate;return l===null?(l=fr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function ef(i,s,l,h,m,S){var A=2;if(h=i,typeof i=="function")op(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case D:return bo(l.children,m,S,s);case O:A=8,m|=8;break;case C:return i=fr(12,l,s,m|2),i.elementType=C,i.lanes=S,i;case K:return i=fr(13,l,s,m),i.elementType=K,i.lanes=S,i;case se:return i=fr(19,l,s,m),i.elementType=se,i.lanes=S,i;case Q:return tf(l,m,S,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case w:A=10;break e;case B:A=9;break e;case j:A=11;break e;case ce:A=14;break e;case ee:A=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=fr(A,l,s,m),s.elementType=i,s.type=h,s.lanes=S,s}function bo(i,s,l,h){return i=fr(7,i,h,s),i.lanes=l,i}function tf(i,s,l,h){return i=fr(22,i,h,s),i.elementType=Q,i.lanes=l,i.stateNode={isHidden:!1},i}function ap(i,s,l){return i=fr(6,i,null,s),i.lanes=l,i}function lp(i,s,l){return s=fr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function p1(i,s,l,h,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sr(0),this.expirationTimes=sr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sr(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function up(i,s,l,h,m,S,A,z,G){return i=new p1(i,s,l,z,G),s===1?(s=1,S===!0&&(s|=8)):s=0,S=fr(3,null,null,s),i.current=S,S.stateNode=i,S.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(S),i}function m1(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function bv(i){if(!i)return Is;i=i._reactInternals;e:{if(Lt(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Ti(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Ti(l))return i0(i,l,s)}return s}function Pv(i,s,l,h,m,S,A,z,G){return i=up(l,h,!0,i,m,S,A,z,G),i.context=bv(null),l=i.current,h=hi(),m=Hs(l),S=os(h,m),S.callback=s??null,Os(l,S,m),i.current.lanes=m,Mi(i,m,h),Ci(i,h),i}function nf(i,s,l,h){var m=s.current,S=hi(),A=Hs(m);return l=bv(l),s.context===null?s.context=l:s.pendingContext=l,s=os(S,A),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Os(m,s,A),i!==null&&(Pr(i,m,A,S),Nc(i,m,A)),A}function rf(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Dv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function cp(i,s){Dv(i,s),(i=i.alternate)&&Dv(i,s)}function g1(){return null}var Lv=typeof reportError=="function"?reportError:function(i){console.error(i)};function fp(i){this._internalRoot=i}sf.prototype.render=fp.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));nf(i,s,null,null)},sf.prototype.unmount=fp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ao(function(){nf(null,i,null,null)}),s[ts]=null}};function sf(i){this._internalRoot=i}sf.prototype.unstable_scheduleHydration=function(i){if(i){var s=m_();i={blockedOn:null,target:i,priority:s};for(var l=0;l<bs.length&&s!==0&&s<bs[l].priority;l++);bs.splice(l,0,i),l===0&&v_(i)}};function hp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function of(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Nv(){}function _1(i,s,l,h,m){if(m){if(typeof h=="function"){var S=h;h=function(){var he=rf(A);S.call(he)}}var A=Pv(s,h,i,0,null,!1,!1,"",Nv);return i._reactRootContainer=A,i[ts]=A.current,jl(i.nodeType===8?i.parentNode:i),Ao(),A}for(;m=i.lastChild;)i.removeChild(m);if(typeof h=="function"){var z=h;h=function(){var he=rf(G);z.call(he)}}var G=up(i,0,!1,null,null,!1,!1,"",Nv);return i._reactRootContainer=G,i[ts]=G.current,jl(i.nodeType===8?i.parentNode:i),Ao(function(){nf(s,G,l,h)}),G}function af(i,s,l,h,m){var S=l._reactRootContainer;if(S){var A=S;if(typeof m=="function"){var z=m;m=function(){var G=rf(A);z.call(G)}}nf(s,A,i,m)}else A=_1(l,s,i,m,h);return rf(A)}d_=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Dn(s.pendingLanes);l!==0&&(Fh(s,l|1),Ci(s,Se()),(Vt&6)===0&&(Da=Se()+500,Us()))}break;case 13:Ao(function(){var h=ss(i,1);if(h!==null){var m=hi();Pr(h,i,1,m)}}),cp(i,1)}},Oh=function(i){if(i.tag===13){var s=ss(i,134217728);if(s!==null){var l=hi();Pr(s,i,134217728,l)}cp(i,134217728)}},p_=function(i){if(i.tag===13){var s=Hs(i),l=ss(i,s);if(l!==null){var h=hi();Pr(l,i,s,h)}cp(i,s)}},m_=function(){return $t},g_=function(i,s){var l=$t;try{return $t=i,s()}finally{$t=l}},De=function(i,s,l){switch(s){case"input":if(J(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var m=Ec(h);if(!m)throw Error(t(90));ot(h),J(h,m)}}}break;case"textarea":ve(i,l);break;case"select":s=l.value,s!=null&&I(i,!!l.multiple,s,!1)}},zt=ip,an=Ao;var v1={usingClientEntryPoint:!1,Events:[Kl,va,Ec,Ue,dt,ip]},cu={findFiberByHostInstance:vo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x1={bundleType:cu.bundleType,version:cu.version,rendererPackageName:cu.rendererPackageName,rendererConfig:cu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=L(i),i===null?null:i.stateNode},findFiberByHostInstance:cu.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lf.isDisabled&&lf.supportsFiber)try{Ft=lf.inject(x1),Tt=lf}catch{}}return Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1,Ri.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(s))throw Error(t(200));return m1(i,s,null,l)},Ri.createRoot=function(i,s){if(!hp(i))throw Error(t(299));var l=!1,h="",m=Lv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=up(i,1,!1,null,null,l,!1,h,m),i[ts]=s.current,jl(i.nodeType===8?i.parentNode:i),new fp(s)},Ri.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=L(s),i=i===null?null:i.stateNode,i},Ri.flushSync=function(i){return Ao(i)},Ri.hydrate=function(i,s,l){if(!of(s))throw Error(t(200));return af(null,i,s,!0,l)},Ri.hydrateRoot=function(i,s,l){if(!hp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,m=!1,S="",A=Lv;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=Pv(s,null,i,1,l??null,m,!1,S,A),i[ts]=s.current,jl(i),h)for(i=0;i<h.length;i++)l=h[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new sf(s)},Ri.render=function(i,s,l){if(!of(s))throw Error(t(200));return af(null,i,s,!1,l)},Ri.unmountComponentAtNode=function(i){if(!of(i))throw Error(t(40));return i._reactRootContainer?(Ao(function(){af(null,null,i,!1,function(){i._reactRootContainer=null,i[ts]=null})}),!0):!1},Ri.unstable_batchedUpdates=ip,Ri.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!of(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return af(i,s,l,!1,h)},Ri.version="18.3.1-next-f1338f8080-20240426",Ri}var Hv;function b1(){if(Hv)return mp.exports;Hv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mp.exports=R1(),mp.exports}var Vv;function P1(){if(Vv)return uf;Vv=1;var o=b1();return uf.createRoot=o.createRoot,uf.hydrateRoot=o.hydrateRoot,uf}var D1=P1(),ph=wg();function ms(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function zy(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ji={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Yu={duration:.5,overwrite:!1,delay:0},Ag,$n,dn,xr=1e8,nn=1/xr,fm=Math.PI*2,L1=fm/4,N1=0,By=Math.sqrt,I1=Math.cos,U1=Math.sin,Wn=function(e){return typeof e=="string"},Sn=function(e){return typeof e=="function"},Ms=function(e){return typeof e=="number"},Cg=function(e){return typeof e>"u"},Jr=function(e){return typeof e=="object"},Li=function(e){return e!==!1},Rg=function(){return typeof window<"u"},cf=function(e){return Sn(e)||Wn(e)},Hy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},li=Array.isArray,F1=/random\([^)]+\)/g,O1=/,\s*/g,Gv=/(?:-?\.?\d|\.)+/gi,Vy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gy=/[+-]=-?[.\d]+/,k1=/[^,'"\[\]\s]+/gi,z1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_n,Gr,hm,bg,nr={},mh={},Wy,Xy=function(e){return(mh=vl(e,nr))&&Oi},Pg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ju=function(e,t){return!t&&console.warn(e)},Yy=function(e,t){return e&&(nr[e]=t)&&mh&&(mh[e]=t)||nr},qu=function(){return 0},B1={suppressEvents:!0,isStart:!0,kill:!1},Jf={suppressEvents:!0,kill:!1},H1={suppressEvents:!0},Dg={},so=[],dm={},jy,Yi={},xp={},Wv=30,eh=[],Lg="",Ng=function(e){var t=e[0],n,r;if(Jr(t)||Sn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=eh.length;r--&&!eh[r].targetTest(t););n=eh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new mS(e[r],n)))||e.splice(r,1);return e},$o=function(e){return e._gsap||Ng(yr(e))[0]._gsap},qy=function(e,t,n){return(n=e[t])&&Sn(n)?e[t]():Cg(n)&&e.getAttribute&&e.getAttribute(t)||n},Ni=function(e,t){return(e=e.split(",")).forEach(t)||e},Tn=function(e){return Math.round(e*1e5)/1e5||0},gn=function(e){return Math.round(e*1e7)/1e7||0},ll=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},V1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},gh=function(){var e=so.length,t=so.slice(0),n,r;for(dm={},so.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ig=function(e){return!!(e._initted||e._startAt||e.add)},$y=function(e,t,n,r){so.length&&!$n&&gh(),e.render(t,n,!!($n&&t<0&&Ig(e))),so.length&&!$n&&gh()},Ky=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(k1).length<2?t:Wn(e)?e.trim():e},Zy=function(e){return e},ir=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},G1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},vl=function(e,t){for(var n in t)e[n]=t[n];return e},Xv=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Jr(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},_h=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Iu=function(e){var t=e.parent||_n,n=e.keyframes?G1(li(e.keyframes)):ir;if(Li(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},W1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Qy=function(e,t,n,r,a){var u=e[r],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=u,t.parent=t._dp=e,t},bh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},fo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ko=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},X1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},pm=function(e,t,n,r){return e._startAt&&($n?e._startAt.revert(Jf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Y1=function o(e){return!e||e._ts&&o(e.parent)},Yv=function(e){return e._repeat?xl(e._tTime,e=e.duration()+e._rDelay)*e:0},xl=function(e,t){var n=Math.floor(e=gn(e/t));return e&&n===e?n-1:n},vh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ph=function(e){return e._end=gn(e._start+(e._tDur/Math.abs(e._ts||e._rts||nn)||0))},Dh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=gn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ph(e),n._dirty||Ko(n,e)),e},Jy=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=vh(e.rawTime(),t),(!t._dur||ic(0,t.totalDuration(),n)-t._tTime>nn)&&t.render(n,!0)),Ko(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-nn}},Yr=function(e,t,n,r){return t.parent&&fo(t),t._start=gn((Ms(n)?n:n||e!==_n?dr(e,n,t):e._time)+t._delay),t._end=gn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qy(e,t,"_first","_last",e._sort?"_start":0),mm(t)||(e._recent=t),r||Jy(e,t),e._ts<0&&Dh(e,e._tTime),e},eS=function(e,t){return(nr.ScrollTrigger||Pg("scrollTrigger",t))&&nr.ScrollTrigger.create(t,e)},tS=function(e,t,n,r,a){if(Fg(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!$n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jy!==qi.frame)return so.push(e),e._lazy=[a,r],1},j1=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},mm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},q1=function(e,t,n,r){var a=e.ratio,u=t<0||!t&&(!e._start&&j1(e)&&!(!e._initted&&mm(e))||(e._ts<0||e._dp._ts<0)&&!mm(e))?0:1,c=e._rDelay,f=0,d,p,_;if(c&&e._repeat&&(f=ic(0,e._tDur,t),p=xl(f,c),e._yoyo&&p&1&&(u=1-u),p!==xl(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||$n||r||e._zTime===nn||!t&&e._zTime){if(!e._initted&&tS(e,t,r,n,f))return;for(_=e._zTime,e._zTime=t||(n?nn:0),n||(n=t&&!_),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=f,d=e._pt;d;)d.r(u,d.d),d=d._next;t<0&&pm(e,t,n,!0),e._onUpdate&&!n&&Ki(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&Ki(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&fo(e,1),!n&&!$n&&(Ki(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},yl=function(e,t,n,r){var a=e._repeat,u=gn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:gn(u*(a+1)+e._rDelay*a):u,c>0&&!r&&Dh(e,e._tTime=e._tDur*c),e.parent&&Ph(e),n||Ko(e.parent,e),e},jv=function(e){return e instanceof Di?Ko(e):yl(e,e._dur)},K1={_start:0,endTime:qu,totalDuration:qu},dr=function o(e,t,n){var r=e.labels,a=e._recent||K1,u=e.duration()>=xr?a.endTime(!1):e._dur,c,f,d;return Wn(t)&&(isNaN(t)||t in r)?(f=t.charAt(0),d=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=u),r[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),d&&n&&(f=f/100*(li(n)?n[0]:n).totalDuration()),c>1?o(e,t.substr(0,c-1),n)+f:u+f)):t==null?u:+t},Uu=function(e,t,n){var r=Ms(t[1]),a=(r?2:1)+(e<2?0:1),u=t[a],c,f;if(r&&(u.duration=t[1]),u.parent=n,e){for(c=u,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=Li(f.vars.inherit)&&f.parent;u.immediateRender=Li(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new bn(t[0],u,t[a+1])},_o=function(e,t){return e||e===0?t(e):t},ic=function(e,t,n){return n<e?e:n>t?t:n},oi=function(e,t){return!Wn(e)||!(t=z1.exec(e))?"":t[1]},Z1=function(e,t,n){return _o(n,function(r){return ic(e,t,r)})},gm=[].slice,nS=function(e,t){return e&&Jr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Jr(e[0]))&&!e.nodeType&&e!==Gr},Q1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return Wn(r)&&!t||nS(r,1)?(a=n).push.apply(a,yr(r)):n.push(r)})||n},yr=function(e,t,n){return dn&&!t&&dn.selector?dn.selector(e):Wn(e)&&!n&&(hm||!Sl())?gm.call((t||bg).querySelectorAll(e),0):li(e)?Q1(e,n):nS(e)?gm.call(e,0):e?[e]:[]},_m=function(e){return e=yr(e)[0]||ju("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yr(t,n.querySelectorAll?n:n===e?ju("Invalid scope")||bg.createElement("div"):e)}},iS=function(e){return e.sort(function(){return .5-Math.random()})},rS=function(e){if(Sn(e))return e;var t=Jr(e)?e:{each:e},n=Zo(t.ease),r=t.from||0,a=parseFloat(t.base)||0,u={},c=r>0&&r<1,f=isNaN(r)||c,d=t.axis,p=r,_=r;return Wn(r)?p=_={center:.5,edges:.5,end:1}[r]||0:!c&&f&&(p=r[0],_=r[1]),function(g,v,E){var M=(E||t).length,y=u[M],x,R,b,T,F,U,D,O,C;if(!y){if(C=t.grid==="auto"?0:(t.grid||[1,xr])[1],!C){for(D=-xr;D<(D=E[C++].getBoundingClientRect().left)&&C<M;);C<M&&C--}for(y=u[M]=[],x=f?Math.min(C,M)*p-.5:r%C,R=C===xr?0:f?M*_/C-.5:r/C|0,D=0,O=xr,U=0;U<M;U++)b=U%C-x,T=R-(U/C|0),y[U]=F=d?Math.abs(d==="y"?T:b):By(b*b+T*T),F>D&&(D=F),F<O&&(O=F);r==="random"&&iS(y),y.max=D-O,y.min=O,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(C>M?M-1:d?d==="y"?M/C:C:Math.max(C,M/C))||0)*(r==="edges"?-1:1),y.b=M<0?a-M:a,y.u=oi(t.amount||t.each)||0,n=n&&M<0?fT(n):n}return M=(y[g]-y.min)/y.max||0,gn(y.b+(n?n(M):M)*y.v)+y.u}},vm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=gn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ms(n)?0:oi(n))}},sS=function(e,t){var n=li(e),r,a;return!n&&Jr(e)&&(r=n=e.radius||xr,e.values?(e=yr(e.values),(a=!Ms(e[0]))&&(r*=r)):e=vm(e.increment)),_o(t,n?Sn(e)?function(u){return a=e(u),Math.abs(a-u)<=r?a:u}:function(u){for(var c=parseFloat(a?u.x:u),f=parseFloat(a?u.y:0),d=xr,p=0,_=e.length,g,v;_--;)a?(g=e[_].x-c,v=e[_].y-f,g=g*g+v*v):g=Math.abs(e[_]-c),g<d&&(d=g,p=_);return p=!r||d<=r?e[p]:u,a||p===u||Ms(u)?p:p+oi(u)}:vm(e))},oS=function(e,t,n,r){return _o(li(e)?!t:n===!0?!!(n=0):!r,function(){return li(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},J1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,u){return u(a)},r)}},eT=function(e,t){return function(n){return e(parseFloat(n))+(t||oi(n))}},tT=function(e,t,n){return lS(e,t,0,1,n)},aS=function(e,t,n){return _o(n,function(r){return e[~~t(r)]})},nT=function o(e,t,n){var r=t-e;return li(e)?aS(e,o(0,e.length),t):_o(n,function(a){return(r+(a-e)%r)%r+e})},iT=function o(e,t,n){var r=t-e,a=r*2;return li(e)?aS(e,o(0,e.length-1),t):_o(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>r?a-u:u)})},$u=function(e){return e.replace(F1,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(O1);return oS(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},lS=function(e,t,n,r,a){var u=t-e,c=r-n;return _o(a,function(f){return n+((f-e)/u*c||0)})},rT=function o(e,t,n,r){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var u=Wn(e),c={},f,d,p,_,g;if(n===!0&&(r=1)&&(n=null),u)e={p:e},t={p:t};else if(li(e)&&!li(t)){for(p=[],_=e.length,g=_-2,d=1;d<_;d++)p.push(o(e[d-1],e[d]));_--,a=function(E){E*=_;var M=Math.min(g,~~E);return p[M](E-M)},n=t}else r||(e=vl(li(e)?[]:{},e));if(!p){for(f in t)Ug.call(c,e,f,"get",t[f]);a=function(E){return zg(E,c)||(u?e.p:e)}}}return _o(n,a)},qv=function(e,t,n){var r=e.labels,a=xr,u,c,f;for(u in r)c=r[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=u,a=c);return f},Ki=function(e,t,n){var r=e.vars,a=r[t],u=dn,c=e._ctx,f,d,p;if(a)return f=r[t+"Params"],d=r.callbackScope||e,n&&so.length&&gh(),c&&(dn=c),p=f?a.apply(d,f):a.call(d),dn=u,p},wu=function(e){return fo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$n),e.progress()<1&&Ki(e,"onInterrupt"),e},sl,uS=[],cS=function(e){if(e)if(e=!e.name&&e.default||e,Rg()||e.headless){var t=e.name,n=Sn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:qu,render:zg,add:Ug,kill:ST,modifier:yT,rawVars:0},u={targetTest:0,get:0,getSetter:kg,aliases:{},register:0};if(Sl(),e!==r){if(Yi[t])return;ir(r,ir(_h(e,a),u)),vl(r.prototype,vl(a,_h(e,u))),Yi[r.prop=t]=r,e.targetTest&&(eh.push(r),Dg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yy(t,r),e.register&&e.register(Oi,r,Ii)}else uS.push(e)},tn=255,Au={aqua:[0,tn,tn],lime:[0,tn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tn],navy:[0,0,128],white:[tn,tn,tn],olive:[128,128,0],yellow:[tn,tn,0],orange:[tn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tn,0,0],pink:[tn,192,203],cyan:[0,tn,tn],transparent:[tn,tn,tn,0]},yp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tn+.5|0},fS=function(e,t,n){var r=e?Ms(e)?[e>>16,e>>8&tn,e&tn]:0:Au.black,a,u,c,f,d,p,_,g,v,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Au[e])r=Au[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&tn,r&tn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&tn,e&tn]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(Gv),!t)f=+r[0]%360/360,d=+r[1]/100,p=+r[2]/100,u=p<=.5?p*(d+1):p+d-p*d,a=p*2-u,r.length>3&&(r[3]*=1),r[0]=yp(f+1/3,a,u),r[1]=yp(f,a,u),r[2]=yp(f-1/3,a,u);else if(~e.indexOf("="))return r=e.match(Vy),n&&r.length<4&&(r[3]=1),r}else r=e.match(Gv)||Au.transparent;r=r.map(Number)}return t&&!E&&(a=r[0]/tn,u=r[1]/tn,c=r[2]/tn,_=Math.max(a,u,c),g=Math.min(a,u,c),p=(_+g)/2,_===g?f=d=0:(v=_-g,d=p>.5?v/(2-_-g):v/(_+g),f=_===a?(u-c)/v+(u<c?6:0):_===u?(c-a)/v+2:(a-u)/v+4,f*=60),r[0]=~~(f+.5),r[1]=~~(d*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},hS=function(e){var t=[],n=[],r=-1;return e.split(oo).forEach(function(a){var u=a.match(rl)||[];t.push.apply(t,u),n.push(r+=u.length+1)}),t.c=n,t},$v=function(e,t,n){var r="",a=(e+r).match(oo),u=t?"hsla(":"rgba(",c=0,f,d,p,_;if(!a)return e;if(a=a.map(function(g){return(g=fS(g,t,1))&&u+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=hS(e),f=n.c,f.join(r)!==p.c.join(r)))for(d=e.replace(oo,"1").split(rl),_=d.length-1;c<_;c++)r+=d[c]+(~f.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!d)for(d=e.split(oo),_=d.length-1;c<_;c++)r+=d[c]+a[c];return r+d[_]},oo=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Au)o+="|"+e+"\\b";return new RegExp(o+")","gi")})(),sT=/hsl[a]?\(/,dS=function(e){var t=e.join(" "),n;if(oo.lastIndex=0,oo.test(t))return n=sT.test(t),e[1]=$v(e[1],n),e[0]=$v(e[0],n,hS(e[1])),!0},Ku,qi=(function(){var o=Date.now,e=500,t=33,n=o(),r=n,a=1e3/240,u=a,c=[],f,d,p,_,g,v,E=function M(y){var x=o()-r,R=y===!0,b,T,F,U;if((x>e||x<0)&&(n+=x-t),r+=x,F=r-n,b=F-u,(b>0||R)&&(U=++_.frame,g=F-_.time*1e3,_.time=F=F/1e3,u+=b+(b>=a?4:a-b),T=1),R||(f=d(M)),T)for(v=0;v<c.length;v++)c[v](F,g,U,y)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){Wy&&(!hm&&Rg()&&(Gr=hm=window,bg=Gr.document||{},nr.gsap=Oi,(Gr.gsapVersions||(Gr.gsapVersions=[])).push(Oi.version),Xy(mh||Gr.GreenSockGlobals||!Gr.gsap&&Gr||{}),uS.forEach(cS)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&_.sleep(),d=p||function(y){return setTimeout(y,u-_.time*1e3+1|0)},Ku=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),Ku=0,d=qu},lagSmoothing:function(y,x){e=y||1/0,t=Math.min(x||33,e)},fps:function(y){a=1e3/(y||240),u=_.time*1e3+a},add:function(y,x,R){var b=x?function(T,F,U,D){y(T,F,U,D),_.remove(b)}:y;return _.remove(y),c[R?"unshift":"push"](b),Sl(),b},remove:function(y,x){~(x=c.indexOf(y))&&c.splice(x,1)&&v>=x&&v--},_listeners:c},_})(),Sl=function(){return!Ku&&qi.wake()},Bt={},oT=/^[\d.\-M][\d.\-,\s]/,aT=/["']/g,lT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,u=n.length,c,f,d;a<u;a++)f=n[a],c=a!==u-1?f.lastIndexOf(","):f.length,d=f.substr(0,c),t[r]=isNaN(d)?d.replace(aT,"").trim():+d,r=f.substr(c+1).trim();return t},uT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},cT=function(e){var t=(e+"").split("("),n=Bt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[lT(t[1])]:uT(e).split(",").map(Ky)):Bt._CE&&oT.test(e)?Bt._CE("",e):n},fT=function(e){return function(t){return 1-e(1-t)}},Zo=function(e,t){return e&&(Sn(e)?e:Bt[e]||cT(e))||t},aa=function(e,t,n,r){n===void 0&&(n=function(f){return 1-t(1-f)}),r===void 0&&(r=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},u;return Ni(e,function(c){Bt[c]=nr[c]=a,Bt[u=c.toLowerCase()]=n;for(var f in a)Bt[u+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Bt[c+"."+f]=a[f]}),a},pS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sp=function o(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/fm*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*U1((p-u)*a)+1},f=e==="out"?c:e==="in"?function(d){return 1-c(1-d)}:pS(c);return a=fm/a,f.config=function(d,p){return o(e,d,p)},f},Mp=function o(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:pS(n);return r.config=function(a){return o(e,a)},r};Ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;aa(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;aa("Elastic",Sp("in"),Sp("out"),Sp());(function(o,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?o*c*c:c<n?o*Math.pow(c-1.5/e,2)+.75:c<r?o*(c-=2.25/e)*c+.9375:o*Math.pow(c-2.625/e,2)+.984375};aa("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);aa("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});aa("Circ",function(o){return-(By(1-o*o)-1)});aa("Sine",function(o){return o===1?1:-I1(o*L1)+1});aa("Back",Mp("in"),Mp("out"),Mp());Bt.SteppedEase=Bt.steps=nr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,u=1-nn;return function(c){return((r*ic(0,u,c)|0)+a)*n}}};Yu.ease=Bt["quad.out"];Ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Lg+=o+","+o+"Params,"});var mS=function(e,t){this.id=N1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qy,this.set=t?t.getSetter:kg},Zu=(function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yl(this,+t.duration,1,1),this.data=t.data,dn&&(this._ctx=dn,dn.data.push(this)),Ku||qi.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,yl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Sl(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Dh(this,n),!a._dp||a.parent||Jy(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===nn||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$y(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yv(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?xl(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-nn?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?vh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-nn?0:this._rts,this.totalTime(ic(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),Ph(this),X1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Sl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nn&&(this._tTime-=nn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=gn(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Li(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vh(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=H1);var r=$n;return $n=n,Ig(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$n=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,jv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(dr(this,n),Li(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Li(r)),this._dur||(this._zTime=-nn),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-nn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nn,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-nn)},e.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(u){var c=Sn(n)?n:Zy,f=function(){var p=r.then;r.then=null,a&&a(),Sn(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),u(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},e.kill=function(){wu(this)},o})();ir(Zu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nn,_prom:0,_ps:!1,_rts:1});var Di=(function(o){zy(e,o);function e(n,r){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Li(n.sortChildren),_n&&Yr(n.parent||_n,ms(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&eS(ms(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,u){return Uu(0,arguments,this),this},t.from=function(r,a,u){return Uu(1,arguments,this),this},t.fromTo=function(r,a,u,c){return Uu(2,arguments,this),this},t.set=function(r,a,u){return a.duration=0,a.parent=this,Iu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new bn(r,a,dr(this,u),1),this},t.call=function(r,a,u){return Yr(this,bn.delayedCall(0,r,a),u)},t.staggerTo=function(r,a,u,c,f,d,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=d,u.onCompleteParams=p,u.parent=this,new bn(r,u,dr(this,f)),this},t.staggerFrom=function(r,a,u,c,f,d,p){return u.runBackwards=1,Iu(u).immediateRender=Li(u.immediateRender),this.staggerTo(r,a,u,c,f,d,p)},t.staggerFromTo=function(r,a,u,c,f,d,p,_){return c.startAt=u,Iu(c).immediateRender=Li(c.immediateRender),this.staggerTo(r,a,c,f,d,p,_)},t.render=function(r,a,u){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=r<=0?0:gn(r),_=this._zTime<0!=r<0&&(this._initted||!d),g,v,E,M,y,x,R,b,T,F,U,D;if(this!==_n&&p>f&&r>=0&&(p=f),p!==this._tTime||u||_){if(c!==this._time&&d&&(p+=this._time-c,r+=this._time-c),g=p,T=this._start,b=this._ts,x=!b,_&&(d||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(U=this._yoyo,y=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,a,u);if(g=gn(p%y),p===f?(M=this._repeat,g=d):(F=gn(p/y),M=~~F,M&&M===F&&(g=d,M--),g>d&&(g=d)),F=xl(this._tTime,y),!c&&this._tTime&&F!==M&&this._tTime-F*y-this._dur<=0&&(F=M),U&&M&1&&(g=d-g,D=1),M!==F&&!this._lock){var O=U&&F&1,C=O===(U&&M&1);if(M<F&&(O=!O),c=O?0:p%d?d:p,this._lock=1,this.render(c||(D?0:gn(M*y)),a,!d)._lock=0,this._tTime=p,!a&&this.parent&&Ki(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,F=M),c&&c!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,f=this._tDur,C&&(this._lock=2,c=O?d:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=$1(this,gn(c),gn(g)),R&&(p-=g-(g=R._start))),this._tTime=p,this._time=g,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&d&&!a&&!F&&(Ki(this,"onStart"),this._tTime!==p))return this;if(g>=c&&r>=0)for(v=this._first;v;){if(E=v._next,(v._act||g>=v._start)&&v._ts&&R!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,a,u),g!==this._time||!this._ts&&!x){R=0,E&&(p+=this._zTime=-nn);break}}v=E}else{v=this._last;for(var w=r<0?r:g;v;){if(E=v._prev,(v._act||w<=v._end)&&v._ts&&R!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(w-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(w-v._start)*v._ts,a,u||$n&&Ig(v)),g!==this._time||!this._ts&&!x){R=0,E&&(p+=this._zTime=w?-nn:nn);break}}v=E}}if(R&&!a&&(this.pause(),R.render(g>=c?0:-nn)._zTime=g>=c?1:-1,this._ts))return this._start=T,Ph(this),this.render(r,a,u);this._onUpdate&&!a&&Ki(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(T===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(p===f&&this._ts>0||!p&&this._ts<0)&&fo(this,1),!a&&!(r<0&&!c)&&(p||c||!f)&&(Ki(this,p===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var u=this;if(Ms(a)||(a=dr(this,a,r)),!(r instanceof Zu)){if(li(r))return r.forEach(function(c){return u.add(c,a)}),this;if(Wn(r))return this.addLabel(r,a);if(Sn(r))r=bn.delayedCall(0,r);else return this}return this!==r?Yr(this,r,a):this},t.getChildren=function(r,a,u,c){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-xr);for(var f=[],d=this._first;d;)d._start>=c&&(d instanceof bn?a&&f.push(d):(u&&f.push(d),r&&f.push.apply(f,d.getChildren(!0,a,u)))),d=d._next;return f},t.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},t.remove=function(r){return Wn(r)?this.removeLabel(r):Sn(r)?this.killTweensOf(r):(r.parent===this&&bh(this,r),r===this._recent&&(this._recent=this._last),Ko(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gn(qi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=dr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,u){var c=bn.delayedCall(0,a||qu,u);return c.data="isPause",this._hasPause=1,Yr(this,c,dr(this,r))},t.removePause=function(r){var a=this._first;for(r=dr(this,r);a;)a._start===r&&a.data==="isPause"&&fo(a),a=a._next},t.killTweensOf=function(r,a,u){for(var c=this.getTweensOf(r,u),f=c.length;f--;)eo!==c[f]&&c[f].kill(r,a);return this},t.getTweensOf=function(r,a){for(var u=[],c=yr(r),f=this._first,d=Ms(a),p;f;)f instanceof bn?V1(f._targets,c)&&(d?(!eo||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&u.push(f):(p=f.getTweensOf(c,a)).length&&u.push.apply(u,p),f=f._next;return u},t.tweenTo=function(r,a){a=a||{};var u=this,c=dr(u,r),f=a,d=f.startAt,p=f.onStart,_=f.onStartParams,g=f.immediateRender,v,E=bn.to(u,ir({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale())||nn,onStart:function(){if(u.pause(),!v){var y=a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale());E._dur!==y&&yl(E,y,0,1).render(E._time,!0,!0),v=1}p&&p.apply(E,_||[])}},a));return g?E.render(0):E},t.tweenFromTo=function(r,a,u){return this.tweenTo(a,ir({startAt:{time:dr(this,r)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),qv(this,dr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),qv(this,dr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+nn)},t.shiftChildren=function(r,a,u){u===void 0&&(u=0);var c=this._first,f=this.labels,d;for(r=gn(r);c;)c._start>=u&&(c._start+=r,c._end+=r),c=c._next;if(a)for(d in f)f[d]>=u&&(f[d]+=r);return Ko(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return o.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ko(this)},t.totalDuration=function(r){var a=0,u=this,c=u._last,f=xr,d,p,_;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(_=u.parent;c;)d=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&u._sort&&c._ts&&!u._lock?(u._lock=1,Yr(u,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!_&&!u._dp||_&&_.smoothChildTiming)&&(u._start+=gn(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=d;yl(u,u===_n&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(r){if(_n._ts&&($y(_n,vh(r,_n)),jy=qi.frame),qi.frame>=Wv){Wv+=Ji.autoSleep||120;var a=_n._first;if((!a||!a._ts)&&Ji.autoSleep&&qi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||qi.sleep()}}},e})(Zu);ir(Di.prototype,{_lock:0,_hasPause:0,_forcing:0});var hT=function(e,t,n,r,a,u,c){var f=new Ii(this._pt,e,t,0,1,SS,null,a),d=0,p=0,_,g,v,E,M,y,x,R;for(f.b=n,f.e=r,n+="",r+="",(x=~r.indexOf("random("))&&(r=$u(r)),u&&(R=[n,r],u(R,e,t),n=R[0],r=R[1]),g=n.match(vp)||[];_=vp.exec(r);)E=_[0],M=r.substring(d,_.index),v?v=(v+1)%5:M.substr(-5)==="rgba("&&(v=1),E!==g[p++]&&(y=parseFloat(g[p-1])||0,f._pt={_next:f._pt,p:M||p===1?M:",",s:y,c:E.charAt(1)==="="?ll(y,E)-y:parseFloat(E)-y,m:v&&v<4?Math.round:0},d=vp.lastIndex);return f.c=d<r.length?r.substring(d,r.length):"",f.fp=c,(Gy.test(r)||x)&&(f.e=0),this._pt=f,f},Ug=function(e,t,n,r,a,u,c,f,d,p){Sn(r)&&(r=r(a||0,e,u));var _=e[t],g=n!=="get"?n:Sn(_)?d?e[t.indexOf("set")||!Sn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():_,v=Sn(_)?d?_T:xS:Og,E;if(Wn(r)&&(~r.indexOf("random(")&&(r=$u(r)),r.charAt(1)==="="&&(E=ll(g,r)+(oi(g)||0),(E||E===0)&&(r=E))),!p||g!==r||xm)return!isNaN(g*r)&&r!==""?(E=new Ii(this._pt,e,t,+g||0,r-(g||0),typeof _=="boolean"?xT:yS,0,v),d&&(E.fp=d),c&&E.modifier(c,this,e),this._pt=E):(!_&&!(t in e)&&Pg(t,r),hT.call(this,e,t,g,r,v,f||Ji.stringFilter,d))},dT=function(e,t,n,r,a){if(Sn(e)&&(e=Fu(e,a,t,n,r)),!Jr(e)||e.style&&e.nodeType||li(e)||Hy(e))return Wn(e)?Fu(e,a,t,n,r):e;var u={},c;for(c in e)u[c]=Fu(e[c],a,t,n,r);return u},gS=function(e,t,n,r,a,u){var c,f,d,p;if(Yi[e]&&(c=new Yi[e]).init(a,c.rawVars?t[e]:dT(t[e],r,a,u,n),n,r,u)!==!1&&(n._pt=f=new Ii(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==sl))for(d=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)d[c._props[p]]=f;return c},eo,xm,Fg=function o(e,t,n){var r=e.vars,a=r.ease,u=r.startAt,c=r.immediateRender,f=r.lazy,d=r.onUpdate,p=r.runBackwards,_=r.yoyoEase,g=r.keyframes,v=r.autoRevert,E=e._dur,M=e._startAt,y=e._targets,x=e.parent,R=x&&x.data==="nested"?x.vars.targets:y,b=e._overwrite==="auto"&&!Ag,T=e.timeline,F=r.easeReverse||_,U,D,O,C,w,B,j,K,se,ce,ee,Q,H;if(T&&(!g||!a)&&(a="none"),e._ease=Zo(a,Yu.ease),e._rEase=F&&(Zo(F)||e._ease),e._from=!T&&!!r.runBackwards,e._from&&(e.ratio=1),!T||g&&!r.stagger){if(K=y[0]?$o(y[0]).harness:0,Q=K&&r[K.prop],U=_h(r,Dg),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!v?M.render(-1,!0):M.revert(p&&E?Jf:B1),M._lazy=0),u){if(fo(e._startAt=bn.set(y,ir({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&Li(f),startAt:null,delay:0,onUpdate:d&&function(){return Ki(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($n||!c&&!v)&&e._startAt.revert(Jf),c&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),O=ir({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Li(f),immediateRender:c,stagger:0,parent:x},U),Q&&(O[K.prop]=Q),fo(e._startAt=bn.set(y,O)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($n?e._startAt.revert(Jf):e._startAt.render(-1,!0)),e._zTime=t,!c)o(e._startAt,nn,nn);else if(!t)return}for(e._pt=e._ptCache=0,f=E&&Li(f)||f&&!E,D=0;D<y.length;D++){if(w=y[D],j=w._gsap||Ng(y)[D]._gsap,e._ptLookup[D]=ce={},dm[j.id]&&so.length&&gh(),ee=R===y?D:R.indexOf(w),K&&(se=new K).init(w,Q||U,e,ee,R)!==!1&&(e._pt=C=new Ii(e._pt,w,se.name,0,1,se.render,se,0,se.priority),se._props.forEach(function(le){ce[le]=C}),se.priority&&(B=1)),!K||Q)for(O in U)Yi[O]&&(se=gS(O,U,e,ee,w,R))?se.priority&&(B=1):ce[O]=C=Ug.call(e,w,O,"get",U[O],ee,R,0,r.stringFilter);e._op&&e._op[D]&&e.kill(w,e._op[D]),b&&e._pt&&(eo=e,_n.killTweensOf(w,ce,e.globalTime(t)),H=!e.parent,eo=0),e._pt&&f&&(dm[j.id]=1)}B&&MS(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!H,g&&t<=0&&T.render(xr,!0,!0)},pT=function(e,t,n,r,a,u,c,f){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,_,g,v;if(!d)for(d=e._ptCache[t]=[],g=e._ptLookup,v=e._targets.length;v--;){if(p=g[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return xm=1,e.vars[t]="+=0",Fg(e,c),xm=0,f?ju(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(p)}for(v=d.length;v--;)_=d[v],p=_._pt||_,p.s=(r||r===0)&&!a?r:p.s+(r||0)+u*p.c,p.c=n-p.s,_.e&&(_.e=Tn(n)+oi(_.e)),_.b&&(_.b=p.s+oi(_.b))},mT=function(e,t){var n=e[0]?$o(e[0]).harness:0,r=n&&n.aliases,a,u,c,f;if(!r)return t;a=vl({},t);for(u in r)if(u in a)for(f=r[u].split(","),c=f.length;c--;)a[f[c]]=a[u];return a},gT=function(e,t,n,r){var a=t.ease||r||"power1.inOut",u,c;if(li(t))c=n[e]||(n[e]=[]),t.forEach(function(f,d){return c.push({t:d/(t.length-1)*100,v:f,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Fu=function(e,t,n,r,a){return Sn(e)?e.call(t,n,r,a):Wn(e)&&~e.indexOf("random(")?$u(e):e},_S=Lg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",vS={};Ni(_S+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return vS[o]=1});var bn=(function(o){zy(e,o);function e(n,r,a,u){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=o.call(this,u?r:Iu(r))||this;var f=c.vars,d=f.duration,p=f.delay,_=f.immediateRender,g=f.stagger,v=f.overwrite,E=f.keyframes,M=f.defaults,y=f.scrollTrigger,x=r.parent||_n,R=(li(n)||Hy(n)?Ms(n[0]):"length"in r)?[n]:yr(n),b,T,F,U,D,O,C,w;if(c._targets=R.length?Ng(R):ju("GSAP target "+n+" not found. https://gsap.com",!Ji.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=v,E||g||cf(d)||cf(p)){r=c.vars;var B=r.easeReverse||r.yoyoEase;if(b=c.timeline=new Di({data:"nested",defaults:M||{},targets:x&&x.data==="nested"?x.vars.targets:R}),b.kill(),b.parent=b._dp=ms(c),b._start=0,g||cf(d)||cf(p)){if(U=R.length,C=g&&rS(g),Jr(g))for(D in g)~_S.indexOf(D)&&(w||(w={}),w[D]=g[D]);for(T=0;T<U;T++)F=_h(r,vS),F.stagger=0,B&&(F.easeReverse=B),w&&vl(F,w),O=R[T],F.duration=+Fu(d,ms(c),T,O,R),F.delay=(+Fu(p,ms(c),T,O,R)||0)-c._delay,!g&&U===1&&F.delay&&(c._delay=p=F.delay,c._start+=p,F.delay=0),b.to(O,F,C?C(T,O,R):0),b._ease=Bt.none;b.duration()?d=p=0:c.timeline=0}else if(E){Iu(ir(b.vars.defaults,{ease:"none"})),b._ease=Zo(E.ease||r.ease||"none");var j=0,K,se,ce;if(li(E))E.forEach(function(ee){return b.to(R,ee,">")}),b.duration();else{F={};for(D in E)D==="ease"||D==="easeEach"||gT(D,E[D],F,E.easeEach);for(D in F)for(K=F[D].sort(function(ee,Q){return ee.t-Q.t}),j=0,T=0;T<K.length;T++)se=K[T],ce={ease:se.e,duration:(se.t-(T?K[T-1].t:0))/100*d},ce[D]=se.v,b.to(R,ce,j),j+=ce.duration;b.duration()<d&&b.to({},{duration:d-b.duration()})}}d||c.duration(d=b.duration())}else c.timeline=0;return v===!0&&!Ag&&(eo=ms(c),_n.killTweensOf(R),eo=0),Yr(x,ms(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(_||!d&&!E&&c._start===gn(x._time)&&Li(_)&&Y1(ms(c))&&x.data!=="nested")&&(c._tTime=-nn,c.render(Math.max(0,-p)||0)),y&&eS(ms(c),y),c}var t=e.prototype;return t.render=function(r,a,u){var c=this._time,f=this._tDur,d=this._dur,p=r<0,_=r>f-nn&&!p?f:r<nn?0:r,g,v,E,M,y,x,R,b;if(!d)q1(this,r,a,u);else if(_!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=_,b=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+r,a,u);if(g=gn(_%M),_===f?(E=this._repeat,g=d):(y=gn(_/M),E=~~y,E&&E===y?(g=d,E--):g>d&&(g=d)),x=this._yoyo&&E&1,x&&(g=d-g),y=xl(this._tTime,M),g===c&&!u&&this._initted&&E===y)return this._tTime=_,this;E!==y&&this.vars.repeatRefresh&&!x&&!this._lock&&g!==M&&this._initted&&(this._lock=u=1,this.render(gn(M*E),!0).invalidate()._lock=0)}if(!this._initted){if(tS(this,p?r:g,u,a,_))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==y))return this;if(d!==this._dur)return this.render(r,a,u)}if(this._rEase){var T=g<c;if(T!==this._inv){var F=T?c:d-c;this._inv=T,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=F?(T?-1:1)/F:0,this._invScale=T?-this.ratio:1-this.ratio,this._invEase=T?this._rEase:this._ease}this.ratio=R=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=R=this._ease(g/d);if(this._from&&(this.ratio=R=1-R),this._tTime=_,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&_&&!a&&!y&&(Ki(this,"onStart"),this._tTime!==_))return this;for(v=this._pt;v;)v.r(R,v.d),v=v._next;b&&b.render(r<0?r:b._dur*b._ease(g/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&pm(this,r,a,u),Ki(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!a&&this.parent&&Ki(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(p&&!this._onUpdate&&pm(this,r,!0,!0),(r||!d)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&fo(this,1),!a&&!(p&&!c)&&(_||c||x)&&(Ki(this,_===f?"onComplete":"onReverseComplete",!0),this._prom&&!(_<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,u,c,f){Ku||qi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Fg(this,d),p=this._ease(d/this._dur),pT(this,r,a,u,c,p,d,f)?this.resetTo(r,a,u,c,1):(Dh(this,0),this.parent||Qy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?wu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$n),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,eo&&eo.vars.overwrite!==!0)._first||wu(this),this.parent&&u!==this.timeline.totalDuration()&&yl(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,f=r?yr(r):c,d=this._ptLookup,p=this._pt,_,g,v,E,M,y,x;if((!a||a==="all")&&W1(c,f))return a==="all"&&(this._pt=0),wu(this);for(_=this._op=this._op||[],a!=="all"&&(Wn(a)&&(M={},Ni(a,function(R){return M[R]=1}),a=M),a=mT(c,a)),x=c.length;x--;)if(~f.indexOf(c[x])){g=d[x],a==="all"?(_[x]=a,E=g,v={}):(v=_[x]=_[x]||{},E=a);for(M in E)y=g&&g[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&bh(this,y,"_pt"),delete g[M]),v!=="all"&&(v[M]=1)}return this._initted&&!this._pt&&p&&wu(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Uu(1,arguments)},e.delayedCall=function(r,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(r,a,u){return Uu(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,u){return _n.killTweensOf(r,a,u)},e})(Zu);ir(bn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ni("staggerTo,staggerFrom,staggerFromTo",function(o){bn[o]=function(){var e=new Di,t=gm.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Og=function(e,t,n){return e[t]=n},xS=function(e,t,n){return e[t](n)},_T=function(e,t,n,r){return e[t](r.fp,n)},vT=function(e,t,n){return e.setAttribute(t,n)},kg=function(e,t){return Sn(e[t])?xS:Cg(e[t])&&e.setAttribute?vT:Og},yS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},xT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},SS=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},zg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},yT=function(e,t,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(e,t,n),a=u},ST=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?bh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},MT=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},MS=function(e){for(var t=e._pt,n,r,a,u;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:u)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:u=t,t=n}e._pt=a},Ii=(function(){function o(t,n,r,a,u,c,f,d,p){this.t=n,this.s=a,this.c=u,this.p=r,this.r=c||yS,this.d=f||this,this.set=d||Og,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=MT,this.m=n,this.mt=a,this.tween=r},o})();Ni(Lg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return Dg[o]=1});nr.TweenMax=nr.TweenLite=bn;nr.TimelineLite=nr.TimelineMax=Di;_n=new Di({sortChildren:!1,defaults:Yu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ji.stringFilter=dS;var Qo=[],th={},ET=[],Kv=0,TT=0,Ep=function(e){return(th[e]||ET).map(function(t){return t()})},ym=function(){var e=Date.now(),t=[];e-Kv>2&&(Ep("matchMediaInit"),Qo.forEach(function(n){var r=n.queries,a=n.conditions,u,c,f,d;for(c in r)u=Gr.matchMedia(r[c]).matches,u&&(f=1),u!==a[c]&&(a[c]=u,d=1);d&&(n.revert(),f&&t.push(n))}),Ep("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Kv=e,Ep("matchMedia"))},ES=(function(){function o(t,n){this.selector=n&&_m(n),this.data=[],this._r=[],this.isReverted=!1,this.id=TT++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,r,a){Sn(n)&&(a=r,r=n,n=Sn);var u=this,c=function(){var d=dn,p=u.selector,_;return d&&d!==u&&d.data.push(u),a&&(u.selector=_m(a)),dn=u,_=r.apply(u,arguments),Sn(_)&&u._r.push(_),dn=d,u.selector=p,u.isReverted=!1,_};return u.last=c,n===Sn?c(u,function(f){return u.add(null,f)}):n?u[n]=c:c},e.ignore=function(n){var r=dn;dn=null,n(this),dn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof o?n.push.apply(n,r.getTweens()):r instanceof bn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),f=a.data.length,d;f--;)d=a.data[f],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,_){return _.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)d=a.data[f],d instanceof Di?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof bn)&&d.revert&&d.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var u=Qo.length;u--;)Qo[u].id===this.id&&Qo.splice(u,1)},e.revert=function(n){this.kill(n||{})},o})(),wT=(function(){function o(t){this.contexts=[],this.scope=t,dn&&dn.data.push(this)}var e=o.prototype;return e.add=function(n,r,a){Jr(n)||(n={matches:n});var u=new ES(0,a||this.scope),c=u.conditions={},f,d,p;dn&&!u.selector&&(u.selector=dn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=n;for(d in n)d==="all"?p=1:(f=Gr.matchMedia(n[d]),f&&(Qo.indexOf(u)<0&&Qo.push(u),(c[d]=f.matches)&&(p=1),f.addListener?f.addListener(ym):f.addEventListener("change",ym)));return p&&r(u,function(_){return u.add(null,_)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},o})(),xh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return cS(r)})},timeline:function(e){return new Di(e)},getTweensOf:function(e,t){return _n.getTweensOf(e,t)},getProperty:function(e,t,n,r){Wn(e)&&(e=yr(e)[0]);var a=$o(e||{}).get,u=n?Zy:Ky;return n==="native"&&(n=""),e&&(t?u((Yi[t]&&Yi[t].get||a)(e,t,n,r)):function(c,f,d){return u((Yi[c]&&Yi[c].get||a)(e,c,f,d))})},quickSetter:function(e,t,n){if(e=yr(e),e.length>1){var r=e.map(function(p){return Oi.quickSetter(p,t,n)}),a=r.length;return function(p){for(var _=a;_--;)r[_](p)}}e=e[0]||{};var u=Yi[t],c=$o(e),f=c.harness&&(c.harness.aliases||{})[t]||t,d=u?function(p){var _=new u;sl._pt=0,_.init(e,n?p+n:p,sl,0,[e]),_.render(1,_),sl._pt&&zg(1,sl)}:c.set(e,f);return u?d:function(p){return d(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=Oi.to(e,ir((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),u=function(f,d,p){return a.resetTo(t,f,d,p)};return u.tween=a,u},isTweening:function(e){return _n.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zo(e.ease,Yu.ease)),Xv(Yu,e||{})},config:function(e){return Xv(Ji,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,u=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!Yi[c]&&!nr[c]&&ju(t+" effect requires "+c+" plugin.")}),xp[t]=function(c,f,d){return n(yr(c),ir(f||{},a),d)},u&&(Di.prototype[t]=function(c,f,d){return this.add(xp[t](c,Jr(f)?f:(d=f)&&{},this),d)})},registerEase:function(e,t){Bt[e]=Zo(t)},parseEase:function(e,t){return arguments.length?Zo(e,t):Bt},getById:function(e){return _n.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Di(e),r,a;for(n.smoothChildTiming=Li(e.smoothChildTiming),_n.remove(n),n._dp=0,n._time=n._tTime=_n._time,r=_n._first;r;)a=r._next,(t||!(!r._dur&&r instanceof bn&&r.vars.onComplete===r._targets[0]))&&Yr(n,r,r._start-r._delay),r=a;return Yr(_n,n,0),n},context:function(e,t){return e?new ES(e,t):dn},matchMedia:function(e){return new wT(e)},matchMediaRefresh:function(){return Qo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ym()},addEventListener:function(e,t){var n=th[e]||(th[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=th[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:nT,wrapYoyo:iT,distribute:rS,random:oS,snap:sS,normalize:tT,getUnit:oi,clamp:Z1,splitColor:fS,toArray:yr,selector:_m,mapRange:lS,pipe:J1,unitize:eT,interpolate:rT,shuffle:iS},install:Xy,effects:xp,ticker:qi,updateRoot:Di.updateRoot,plugins:Yi,globalTimeline:_n,core:{PropTween:Ii,globals:Yy,Tween:bn,Timeline:Di,Animation:Zu,getCache:$o,_removeLinkedListItem:bh,reverting:function(){return $n},context:function(e){return e&&dn&&(dn.data.push(e),e._ctx=dn),dn},suppressOverwrites:function(e){return Ag=e}}};Ni("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return xh[o]=bn[o]});qi.add(Di.updateRoot);sl=xh.to({},{duration:0});var AT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},CT=function(e,t){var n=e._targets,r,a,u;for(r in t)for(a=n.length;a--;)u=e._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=AT(u,r)),u&&u.modifier&&u.modifier(t[r],e,n[a],r))},Tp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,u){u._onInit=function(c){var f,d;if(Wn(a)&&(f={},Ni(a,function(p){return f[p]=1}),a=f),t){f={};for(d in a)f[d]=t(a[d]);a=f}CT(c,a)}}}},Oi=xh.registerPlugin({name:"attr",init:function(e,t,n,r,a){var u,c,f;this.tween=n;for(u in t)f=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(f||0)+"",t[u],r,a,0,0,u),c.op=u,c.b=f,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)$n?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Tp("roundProps",vm),Tp("modifiers"),Tp("snap",sS))||xh;bn.version=Di.version=Oi.version="3.15.0";Wy=1;Rg()&&Sl();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Zv,to,ul,Bg,Xo,Qv,Hg,RT=function(){return typeof window<"u"},Es={},ko=180/Math.PI,cl=Math.PI/180,Na=Math.atan2,Jv=1e8,Vg=/([A-Z])/g,bT=/(left|right|width|margin|padding|x)/i,PT=/[\s,\(]\S/,qr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},DT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},NT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},IT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},TS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},UT=function(e,t,n){return e.style[t]=n},FT=function(e,t,n){return e.style.setProperty(t,n)},OT=function(e,t,n){return e._gsap[t]=n},kT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zT=function(e,t,n,r,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},BT=function(e,t,n,r,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},vn="transform",Ui=vn+"Origin",HT=function o(e,t){var n=this,r=this.target,a=r.style,u=r._gsap;if(e in Es&&a){if(this.tfm=this.tfm||{},e!=="transform")e=qr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=gs(r,c)}):this.tfm[e]=u.x?u[e]:gs(r,e),e===Ui&&(this.tfm.zOrigin=u.zOrigin);else return qr.transform.split(",").forEach(function(c){return o.call(n,c,t)});if(this.props.indexOf(vn)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ui,t,"")),e=vn}(a||t)&&this.props.push(e,t,a[e])},AS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},VT=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Vg,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Hg(),(!a||!a.isStart)&&!n[vn]&&(AS(n),r.zOrigin&&n[Ui]&&(n[Ui]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},CS=function(e,t){var n={target:e,props:[],revert:VT,save:HT};return e._gsap||Oi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},RS,Mm=function(e,t){var n=to.createElementNS?to.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):to.createElement(e);return n&&n.style?n:to.createElement(e)},Zi=function o(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Vg,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&o(e,Ml(t)||t,1)||""},ex="O,Moz,ms,Ms,Webkit".split(","),Ml=function(e,t,n){var r=t||Xo,a=r.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(ex[u]+e in a););return u<0?null:(u===3?"ms":u>=0?ex[u]:"")+e},Em=function(){RT()&&window.document&&(Zv=window,to=Zv.document,ul=to.documentElement,Xo=Mm("div")||{style:{}},Mm("div"),vn=Ml(vn),Ui=vn+"Origin",Xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",RS=!!Ml("perspective"),Hg=Oi.core.reverting,Bg=1)},tx=function(e){var t=e.ownerSVGElement,n=Mm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),ul.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),ul.removeChild(n),a},nx=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},bS=function(e){var t,n;try{t=e.getBBox()}catch{t=tx(e),n=1}return t&&(t.width||t.height)||n||(t=tx(e)),t&&!t.width&&!t.x&&!t.y?{x:+nx(e,["x","cx","x1"])||0,y:+nx(e,["y","cy","y1"])||0,width:0,height:0}:t},PS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bS(e))},ho=function(e,t){if(t){var n=e.style,r;t in Es&&t!==Ui&&(t=vn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Vg,"-$1").toLowerCase())):n.removeAttribute(t)}},no=function(e,t,n,r,a,u){var c=new Ii(e._pt,t,n,0,1,u?wS:TS);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},ix={deg:1,rad:1,turn:1},GT={grid:1,flex:1},po=function o(e,t,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=Xo.style,f=bT.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(f?"Width":"Height"),_=100,g=r==="px",v=r==="%",E,M,y,x;if(r===u||!a||ix[r]||ix[u])return a;if(u!=="px"&&!g&&(a=o(e,t,n,"px")),x=e.getCTM&&PS(e),(v||u==="%")&&(Es[t]||~t.indexOf("adius")))return E=x?e.getBBox()[f?"width":"height"]:e[p],Tn(v?a/E*_:a/100*E);if(c[f?"width":"height"]=_+(g?u:r),M=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!d?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===to||!M.appendChild)&&(M=to.body),y=M._gsap,y&&v&&y.width&&f&&y.time===qi.time&&!y.uncache)return Tn(a/y.width*_);if(v&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=_+r,E=e[p],R?e.style[t]=R:ho(e,t)}else(v||u==="%")&&!GT[Zi(M,"display")]&&(c.position=Zi(e,"position")),M===e&&(c.position="static"),M.appendChild(Xo),E=Xo[p],M.removeChild(Xo),c.position="absolute";return f&&v&&(y=$o(M),y.time=qi.time,y.width=M[p]),Tn(g?E*a/_:E&&a?_/E*a:0)},gs=function(e,t,n,r){var a;return Bg||Em(),t in qr&&t!=="transform"&&(t=qr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Es[t]&&t!=="transform"?(a=Ju(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Sh(Zi(e,Ui))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=yh[t]&&yh[t](e,t,n)||Zi(e,t)||qy(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?po(e,t,a,n)+n:a},WT=function(e,t,n,r){if(!n||n==="none"){var a=Ml(t,e,1),u=a&&Zi(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=Zi(e,"borderTopColor"))}var c=new Ii(this._pt,e.style,t,0,1,SS),f=0,d=0,p,_,g,v,E,M,y,x,R,b,T,F;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Zi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=e.style[t],e.style[t]=r,r=Zi(e,t)||r,M?e.style[t]=M:ho(e,t)),p=[n,r],dS(p),n=p[0],r=p[1],g=n.match(rl)||[],F=r.match(rl)||[],F.length){for(;_=rl.exec(r);)y=_[0],R=r.substring(f,_.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),y!==(M=g[d++]||"")&&(v=parseFloat(M)||0,T=M.substr((v+"").length),y.charAt(1)==="="&&(y=ll(v,y)+T),x=parseFloat(y),b=y.substr((x+"").length),f=rl.lastIndex-b.length,b||(b=b||Ji.units[t]||T,f===r.length&&(r+=b,c.e+=b)),T!==b&&(v=po(e,t,M,b)||0),c._pt={_next:c._pt,p:R||d===1?R:",",s:v,c:x-v,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=f<r.length?r.substring(f,r.length):""}else c.r=t==="display"&&r==="none"?wS:TS;return Gy.test(r)&&(c.e=0),this._pt=c,c},rx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},XT=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=rx[n]||n,t[1]=rx[r]||r,t.join(" ")},YT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,u=n._gsap,c,f,d;if(a==="all"||a===!0)r.cssText="",f=1;else for(a=a.split(","),d=a.length;--d>-1;)c=a[d],Es[c]&&(f=1,c=c==="transformOrigin"?Ui:vn),ho(n,c);f&&(ho(n,vn),u&&(u.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ju(n,1),u.uncache=1,AS(r)))}},yh={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var u=e._pt=new Ii(e._pt,t,n,0,0,YT);return u.u=r,u.pr=-10,u.tween=a,e._props.push(n),1}}},Qu=[1,0,0,1,0,0],DS={},LS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},sx=function(e){var t=Zi(e,vn);return LS(t)?Qu:t.substr(7).match(Vy).map(Tn)},Gg=function(e,t){var n=e._gsap||$o(e),r=e.style,a=sx(e),u,c,f,d;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?Qu:a):(a===Qu&&!e.offsetParent&&e!==ul&&!n.svg&&(f=r.display,r.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,c=e.nextElementSibling,ul.appendChild(e)),a=sx(e),f?r.display=f:ho(e,"display"),d&&(c?u.insertBefore(e,c):u?u.appendChild(e):ul.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Tm=function(e,t,n,r,a,u){var c=e._gsap,f=a||Gg(e,!0),d=c.xOrigin||0,p=c.yOrigin||0,_=c.xOffset||0,g=c.yOffset||0,v=f[0],E=f[1],M=f[2],y=f[3],x=f[4],R=f[5],b=t.split(" "),T=parseFloat(b[0])||0,F=parseFloat(b[1])||0,U,D,O,C;n?f!==Qu&&(D=v*y-E*M)&&(O=T*(y/D)+F*(-M/D)+(M*R-y*x)/D,C=T*(-E/D)+F*(v/D)-(v*R-E*x)/D,T=O,F=C):(U=bS(e),T=U.x+(~b[0].indexOf("%")?T/100*U.width:T),F=U.y+(~(b[1]||b[0]).indexOf("%")?F/100*U.height:F)),r||r!==!1&&c.smooth?(x=T-d,R=F-p,c.xOffset=_+(x*v+R*M)-x,c.yOffset=g+(x*E+R*y)-R):c.xOffset=c.yOffset=0,c.xOrigin=T,c.yOrigin=F,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Ui]="0px 0px",u&&(no(u,c,"xOrigin",d,T),no(u,c,"yOrigin",p,F),no(u,c,"xOffset",_,c.xOffset),no(u,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",T+" "+F)},Ju=function(e,t){var n=e._gsap||new mS(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,u="px",c="deg",f=getComputedStyle(e),d=Zi(e,Ui)||"0",p,_,g,v,E,M,y,x,R,b,T,F,U,D,O,C,w,B,j,K,se,ce,ee,Q,H,le,N,k,oe,Ne,Z,X;return p=_=g=M=y=x=R=b=T=0,v=E=1,n.svg=!!(e.getCTM&&PS(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[vn]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[vn]!=="none"?f[vn]:"")),r.scale=r.rotate=r.translate="none"),D=Gg(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),d=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),Tm(e,Q||d,!!Q||n.originIsAbsolute,n.smooth!==!1,D)),F=n.xOrigin||0,U=n.yOrigin||0,D!==Qu&&(B=D[0],j=D[1],K=D[2],se=D[3],p=ce=D[4],_=ee=D[5],D.length===6?(v=Math.sqrt(B*B+j*j),E=Math.sqrt(se*se+K*K),M=B||j?Na(j,B)*ko:0,R=K||se?Na(K,se)*ko+M:0,R&&(E*=Math.abs(Math.cos(R*cl))),n.svg&&(p-=F-(F*B+U*K),_-=U-(F*j+U*se))):(X=D[6],Ne=D[7],N=D[8],k=D[9],oe=D[10],Z=D[11],p=D[12],_=D[13],g=D[14],O=Na(X,oe),y=O*ko,O&&(C=Math.cos(-O),w=Math.sin(-O),Q=ce*C+N*w,H=ee*C+k*w,le=X*C+oe*w,N=ce*-w+N*C,k=ee*-w+k*C,oe=X*-w+oe*C,Z=Ne*-w+Z*C,ce=Q,ee=H,X=le),O=Na(-K,oe),x=O*ko,O&&(C=Math.cos(-O),w=Math.sin(-O),Q=B*C-N*w,H=j*C-k*w,le=K*C-oe*w,Z=se*w+Z*C,B=Q,j=H,K=le),O=Na(j,B),M=O*ko,O&&(C=Math.cos(O),w=Math.sin(O),Q=B*C+j*w,H=ce*C+ee*w,j=j*C-B*w,ee=ee*C-ce*w,B=Q,ce=H),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),v=Tn(Math.sqrt(B*B+j*j+K*K)),E=Tn(Math.sqrt(ee*ee+X*X)),O=Na(ce,ee),R=Math.abs(O)>2e-4?O*ko:0,T=Z?1/(Z<0?-Z:Z):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!LS(Zi(e,vn)),Q&&e.setAttribute("transform",Q))),Math.abs(R)>90&&Math.abs(R)<270&&(a?(v*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=_-((n.yPercent=_&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=g+u,n.scaleX=Tn(v),n.scaleY=Tn(E),n.rotation=Tn(M)+c,n.rotationX=Tn(y)+c,n.rotationY=Tn(x)+c,n.skewX=R+c,n.skewY=b+c,n.transformPerspective=T+u,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Ui]=Sh(d)),n.xOffset=n.yOffset=0,n.force3D=Ji.force3D,n.renderTransform=n.svg?qT:RS?NS:jT,n.uncache=0,n},Sh=function(e){return(e=e.split(" "))[0]+" "+e[1]},wp=function(e,t,n){var r=oi(t);return Tn(parseFloat(t)+parseFloat(po(e,"x",n+"px",r)))+r},jT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,NS(e,t)},Po="0deg",hu="0px",Do=") ",NS=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,f=n.z,d=n.rotation,p=n.rotationY,_=n.rotationX,g=n.skewX,v=n.skewY,E=n.scaleX,M=n.scaleY,y=n.transformPerspective,x=n.force3D,R=n.target,b=n.zOrigin,T="",F=x==="auto"&&e&&e!==1||x===!0;if(b&&(_!==Po||p!==Po)){var U=parseFloat(p)*cl,D=Math.sin(U),O=Math.cos(U),C;U=parseFloat(_)*cl,C=Math.cos(U),u=wp(R,u,D*C*-b),c=wp(R,c,-Math.sin(U)*-b),f=wp(R,f,O*C*-b+b)}y!==hu&&(T+="perspective("+y+Do),(r||a)&&(T+="translate("+r+"%, "+a+"%) "),(F||u!==hu||c!==hu||f!==hu)&&(T+=f!==hu||F?"translate3d("+u+", "+c+", "+f+") ":"translate("+u+", "+c+Do),d!==Po&&(T+="rotate("+d+Do),p!==Po&&(T+="rotateY("+p+Do),_!==Po&&(T+="rotateX("+_+Do),(g!==Po||v!==Po)&&(T+="skew("+g+", "+v+Do),(E!==1||M!==1)&&(T+="scale("+E+", "+M+Do),R.style[vn]=T||"translate(0, 0)"},qT=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,f=n.rotation,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,v=n.target,E=n.xOrigin,M=n.yOrigin,y=n.xOffset,x=n.yOffset,R=n.forceCSS,b=parseFloat(u),T=parseFloat(c),F,U,D,O,C;f=parseFloat(f),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,f+=p),f||d?(f*=cl,d*=cl,F=Math.cos(f)*_,U=Math.sin(f)*_,D=Math.sin(f-d)*-g,O=Math.cos(f-d)*g,d&&(p*=cl,C=Math.tan(d-p),C=Math.sqrt(1+C*C),D*=C,O*=C,p&&(C=Math.tan(p),C=Math.sqrt(1+C*C),F*=C,U*=C)),F=Tn(F),U=Tn(U),D=Tn(D),O=Tn(O)):(F=_,O=g,U=D=0),(b&&!~(u+"").indexOf("px")||T&&!~(c+"").indexOf("px"))&&(b=po(v,"x",u,"px"),T=po(v,"y",c,"px")),(E||M||y||x)&&(b=Tn(b+E-(E*F+M*D)+y),T=Tn(T+M-(E*U+M*O)+x)),(r||a)&&(C=v.getBBox(),b=Tn(b+r/100*C.width),T=Tn(T+a/100*C.height)),C="matrix("+F+","+U+","+D+","+O+","+b+","+T+")",v.setAttribute("transform",C),R&&(v.style[vn]=C)},$T=function(e,t,n,r,a){var u=360,c=Wn(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?ko:1),d=f-r,p=r+d+"deg",_,g;return c&&(_=a.split("_")[1],_==="short"&&(d%=u,d!==d%(u/2)&&(d+=d<0?u:-u)),_==="cw"&&d<0?d=(d+u*Jv)%u-~~(d/u)*u:_==="ccw"&&d>0&&(d=(d-u*Jv)%u-~~(d/u)*u)),e._pt=g=new Ii(e._pt,t,n,r,d,DT),g.e=p,g.u="deg",e._props.push(n),g},ox=function(e,t){for(var n in t)e[n]=t[n];return e},KT=function(e,t,n){var r=ox({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,f,d,p,_,g,v,E;r.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),u[vn]=t,c=Ju(n,1),ho(n,vn),n.setAttribute("transform",d)):(d=getComputedStyle(n)[vn],u[vn]=t,c=Ju(n,1),u[vn]=d);for(f in Es)d=r[f],p=c[f],d!==p&&a.indexOf(f)<0&&(v=oi(d),E=oi(p),_=v!==E?po(n,f,d,E):parseFloat(d),g=parseFloat(p),e._pt=new Ii(e._pt,c,f,_,g-_,Sm),e._pt.u=E||0,e._props.push(f));ox(c,r)};Ni("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",r="Bottom",a="Left",u=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?o+c:"border"+c+o});yh[e>1?"border"+o:o]=function(c,f,d,p,_){var g,v;if(arguments.length<4)return g=u.map(function(E){return gs(c,E,d)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(p+"").split(" "),v={},u.forEach(function(E,M){return v[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(f,v,_)}});var IS={name:"css",register:Em,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var u=this._props,c=e.style,f=n.vars.startAt,d,p,_,g,v,E,M,y,x,R,b,T,F,U,D,O,C;Bg||Em(),this.styles=this.styles||CS(e),O=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(Yi[M]&&gS(M,t,n,r,e,a)))){if(v=typeof p,E=yh[M],v==="function"&&(p=p.call(n,r,e,a),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=$u(p)),E)E(this,e,M,p,n)&&(D=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",oo.lastIndex=0,oo.test(d)||(y=oi(d),x=oi(p),x?y!==x&&(d=po(e,M,d,x)+x):y&&(p+=y)),this.add(c,"setProperty",d,p,r,a,0,0,M),u.push(M),O.push(M,0,c[M]);else if(v!=="undefined"){if(f&&M in f?(d=typeof f[M]=="function"?f[M].call(n,r,e,a):f[M],Wn(d)&&~d.indexOf("random(")&&(d=$u(d)),oi(d+"")||d==="auto"||(d+=Ji.units[M]||oi(gs(e,M))||""),(d+"").charAt(1)==="="&&(d=gs(e,M))):d=gs(e,M),g=parseFloat(d),R=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),_=parseFloat(p),M in qr&&(M==="autoAlpha"&&(g===1&&gs(e,"visibility")==="hidden"&&_&&(g=0),O.push("visibility",0,c.visibility),no(this,c,"visibility",g?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=qr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),b=M in Es,b){if(this.styles.save(M),C=p,v==="string"&&p.substring(0,6)==="var(--"){if(p=Zi(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var w=e.style.perspective;e.style.perspective=p,p=Zi(e,"perspective"),w?e.style.perspective=w:ho(e,"perspective")}_=parseFloat(p)}if(T||(F=e._gsap,F.renderTransform&&!t.parseTransform||Ju(e,t.parseTransform),U=t.smoothOrigin!==!1&&F.smooth,T=this._pt=new Ii(this._pt,c,vn,0,1,F.renderTransform,F,0,-1),T.dep=1),M==="scale")this._pt=new Ii(this._pt,F,"scaleY",F.scaleY,(R?ll(F.scaleY,R+_):_)-F.scaleY||0,Sm),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){O.push(Ui,0,c[Ui]),p=XT(p),F.svg?Tm(e,p,0,U,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==F.zOrigin&&no(this,F,"zOrigin",F.zOrigin,x),no(this,c,M,Sh(d),Sh(p)));continue}else if(M==="svgOrigin"){Tm(e,p,1,U,0,this);continue}else if(M in DS){$T(this,F,M,g,R?ll(g,R+p):p);continue}else if(M==="smoothOrigin"){no(this,F,"smooth",F.smooth,p);continue}else if(M==="force3D"){F[M]=p;continue}else if(M==="transform"){KT(this,p,e);continue}}else M in c||(M=Ml(M)||M);if(b||(_||_===0)&&(g||g===0)&&!PT.test(p)&&M in c)y=(d+"").substr((g+"").length),_||(_=0),x=oi(p)||(M in Ji.units?Ji.units[M]:y),y!==x&&(g=po(e,M,d,x)),this._pt=new Ii(this._pt,b?F:c,M,g,(R?ll(g,R+_):_)-g,!b&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?IT:Sm),this._pt.u=x||0,b&&C!==p?(this._pt.b=d,this._pt.e=C,this._pt.r=NT):y!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=LT);else if(M in c)WT.call(this,e,M,d,R?R+p:p);else if(M in e)this.add(e,M,d||e[M],R?R+p:p,r,a);else if(M!=="parseTransform"){Pg(M,p);continue}b||(M in c?O.push(M,0,c[M]):typeof e[M]=="function"?O.push(M,2,e[M]()):O.push(M,1,d||e[M])),u.push(M)}}D&&MS(this)},render:function(e,t){if(t.tween._time||!Hg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gs,aliases:qr,getSetter:function(e,t,n){var r=qr[t];return r&&r.indexOf(",")<0&&(t=r),t in Es&&t!==Ui&&(e._gsap.x||gs(e,"x"))?n&&Qv===n?t==="scale"?kT:OT:(Qv=n||{})&&(t==="scale"?zT:BT):e.style&&!Cg(e.style[t])?UT:~t.indexOf("-")?FT:kg(e,t)},core:{_removeProperty:ho,_getMatrix:Gg}};Oi.utils.checkPrefix=Ml;Oi.core.getStyleSaver=CS;(function(o,e,t,n){var r=Ni(o+","+e+","+t,function(a){Es[a]=1});Ni(e,function(a){Ji.units[a]="deg",DS[a]=1}),qr[r[13]]=o+","+e,Ni(n,function(a){var u=a.split(":");qr[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ji.units[o]="px"});Oi.registerPlugin(IS);var fn=Oi.registerPlugin(IS)||Oi;fn.core.Tween;function ZT(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function QT(o,e,t){return e&&ZT(o.prototype,e),o}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn,nh,$i,io,ro,fl,US,zo,hl,FS,vs,Ir,OS,kS=function(){return qn||typeof window<"u"&&(qn=window.gsap)&&qn.registerPlugin&&qn},zS=1,ol=[],Ut=[],Qr=[],Ou=Date.now,wm=function(e,t){return t},JT=function(){var e=hl.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Ut),r.push.apply(r,Qr),Ut=n,Qr=r,wm=function(u,c){return t[u](c)}},ao=function(e,t){return~Qr.indexOf(e)&&Qr[Qr.indexOf(e)+1][t]},ku=function(e){return!!~FS.indexOf(e)},mi=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},di=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ff="scrollLeft",hf="scrollTop",Am=function(){return vs&&vs.isPressed||Ut.cache++},Mh=function(e,t){var n=function r(a){if(a||a===0){zS&&($i.history.scrollRestoration="manual");var u=vs&&vs.isPressed;a=r.v=Math.round(a)||(vs&&vs.iOS?1:0),e(a),r.cacheID=Ut.cache,u&&wm("ss",a)}else(t||Ut.cache!==r.cacheID||wm("ref"))&&(r.cacheID=Ut.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},yi={s:ff,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Mh(function(o){return arguments.length?$i.scrollTo(o,Un.sc()):$i.pageXOffset||io[ff]||ro[ff]||fl[ff]||0})},Un={s:hf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yi,sc:Mh(function(o){return arguments.length?$i.scrollTo(yi.sc(),o):$i.pageYOffset||io[hf]||ro[hf]||fl[hf]||0})},bi=function(e,t){return(t&&t._ctx&&t._ctx.selector||qn.utils.toArray)(e)[0]||(typeof e=="string"&&qn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ew=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},mo=function(e,t){var n=t.s,r=t.sc;ku(e)&&(e=io.scrollingElement||ro);var a=Ut.indexOf(e),u=r===Un.sc?1:2;!~a&&(a=Ut.push(e)-1),Ut[a+u]||mi(e,"scroll",Am);var c=Ut[a+u],f=c||(Ut[a+u]=Mh(ao(e,n),!0)||(ku(e)?r:Mh(function(d){return arguments.length?e[n]=d:e[n]})));return f.target=e,c||(f.smooth=qn.getProperty(e,"scrollBehavior")==="smooth"),f},Cm=function(e,t,n){var r=e,a=e,u=Ou(),c=u,f=t||50,d=Math.max(500,f*3),p=function(E,M){var y=Ou();M||y-u>f?(a=r,r=E,c=u,u=y):n?r+=E:r=a+(E-a)/(y-c)*(u-c)},_=function(){a=r=n?0:r,c=u=0},g=function(E){var M=c,y=a,x=Ou();return(E||E===0)&&E!==r&&p(E),u===c||x-c>d?0:(r+(n?y:-y))/((n?x:u)-M)*1e3};return{update:p,reset:_,getVelocity:g}},du=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ax=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},BS=function(){hl=qn.core.globals().ScrollTrigger,hl&&hl.core&&JT()},HS=function(e){return qn=e||kS(),!nh&&qn&&typeof document<"u"&&document.body&&($i=window,io=document,ro=io.documentElement,fl=io.body,FS=[$i,io,ro,fl],qn.utils.clamp,OS=qn.core.context||function(){},zo="onpointerenter"in fl?"pointer":"mouse",US=wn.isTouch=$i.matchMedia&&$i.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $i||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ir=wn.eventTypes=("ontouchstart"in ro?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ro?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zS=0},500),nh=1),hl||BS(),nh};yi.op=Un;Ut.cache=0;var wn=(function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){nh||HS(qn)||console.warn("Please gsap.registerPlugin(Observer)"),hl||BS();var r=n.tolerance,a=n.dragMinimum,u=n.type,c=n.target,f=n.lineHeight,d=n.debounce,p=n.preventDefault,_=n.onStop,g=n.onStopDelay,v=n.ignore,E=n.wheelSpeed,M=n.event,y=n.onDragStart,x=n.onDragEnd,R=n.onDrag,b=n.onPress,T=n.onRelease,F=n.onRight,U=n.onLeft,D=n.onUp,O=n.onDown,C=n.onChangeX,w=n.onChangeY,B=n.onChange,j=n.onToggleX,K=n.onToggleY,se=n.onHover,ce=n.onHoverEnd,ee=n.onMove,Q=n.ignoreCheck,H=n.isNormalizer,le=n.onGestureStart,N=n.onGestureEnd,k=n.onWheel,oe=n.onEnable,Ne=n.onDisable,Z=n.onClick,X=n.scrollSpeed,pe=n.capture,fe=n.allowClicks,ye=n.lockAxis,Ae=n.onLockAxis;this.target=c=bi(c)||ro,this.vars=n,v&&(v=qn.utils.toArray(v)),r=r||1e-9,a=a||0,E=E||1,X=X||1,u=u||"wheel,touch,pointer",d=d!==!1,f||(f=parseFloat($i.getComputedStyle(fl).lineHeight)||22);var Qe,_t,ot,$e,W,kt,ht,J=this,We=0,Rt=0,je=n.passive||!p&&n.passive!==!1,I=mo(c,yi),P=mo(c,Un),ie=I(),ve=P(),_e=~u.indexOf("touch")&&!~u.indexOf("pointer")&&Ir[0]==="pointerdown",ge=ku(c),Ie=c.ownerDocument||io,be=[0,0,0],Fe=[0,0,0],mt=0,Te=function(){return mt=Ou()},Pe=function(Ke,vt){return(J.event=Ke)&&v&&ew(Ke.target,v)||vt&&_e&&Ke.pointerType!=="touch"||Q&&Q(Ke,vt)},st=function(){J._vx.reset(),J._vy.reset(),_t.pause(),_&&_(J)},it=function(){var Ke=J.deltaX=ax(be),vt=J.deltaY=ax(Fe),Oe=Math.abs(Ke)>=r,ut=Math.abs(vt)>=r;B&&(Oe||ut)&&B(J,Ke,vt,be,Fe),Oe&&(F&&J.deltaX>0&&F(J),U&&J.deltaX<0&&U(J),C&&C(J),j&&J.deltaX<0!=We<0&&j(J),We=J.deltaX,be[0]=be[1]=be[2]=0),ut&&(O&&J.deltaY>0&&O(J),D&&J.deltaY<0&&D(J),w&&w(J),K&&J.deltaY<0!=Rt<0&&K(J),Rt=J.deltaY,Fe[0]=Fe[1]=Fe[2]=0),($e||ot)&&(ee&&ee(J),ot&&(y&&ot===1&&y(J),R&&R(J),ot=0),$e=!1),kt&&!(kt=!1)&&Ae&&Ae(J),W&&(k(J),W=!1),Qe=0},Ve=function(Ke,vt,Oe){be[Oe]+=Ke,Fe[Oe]+=vt,J._vx.update(Ke),J._vy.update(vt),d?Qe||(Qe=requestAnimationFrame(it)):it()},St=function(Ke,vt){ye&&!ht&&(J.axis=ht=Math.abs(Ke)>Math.abs(vt)?"x":"y",kt=!0),ht!=="y"&&(be[2]+=Ke,J._vx.update(Ke,!0)),ht!=="x"&&(Fe[2]+=vt,J._vy.update(vt,!0)),d?Qe||(Qe=requestAnimationFrame(it)):it()},at=function(Ke){if(!Pe(Ke,1)){Ke=du(Ke,p);var vt=Ke.clientX,Oe=Ke.clientY,ut=vt-J.x,Je=Oe-J.y,lt=J.isDragging;J.x=vt,J.y=Oe,(lt||(ut||Je)&&(Math.abs(J.startX-vt)>=a||Math.abs(J.startY-Oe)>=a))&&(ot||(ot=lt?2:1),lt||(J.isDragging=!0),St(ut,Je))}},Dt=J.onPress=function(ze){Pe(ze,1)||ze&&ze.button||(J.axis=ht=null,_t.pause(),J.isPressed=!0,ze=du(ze),We=Rt=0,J.startX=J.x=ze.clientX,J.startY=J.y=ze.clientY,J._vx.reset(),J._vy.reset(),mi(H?c:Ie,Ir[1],at,je,!0),J.deltaX=J.deltaY=0,b&&b(J))},V=J.onRelease=function(ze){if(!Pe(ze,1)){di(H?c:Ie,Ir[1],at,!0);var Ke=!isNaN(J.y-J.startY),vt=J.isDragging,Oe=vt&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),ut=du(ze);!Oe&&Ke&&(J._vx.reset(),J._vy.reset(),p&&fe&&qn.delayedCall(.08,function(){if(Ou()-mt>300&&!ze.defaultPrevented){if(ze.target.click)ze.target.click();else if(Ie.createEvent){var Je=Ie.createEvent("MouseEvents");Je.initMouseEvent("click",!0,!0,$i,1,ut.screenX,ut.screenY,ut.clientX,ut.clientY,!1,!1,!1,!1,0,null),ze.target.dispatchEvent(Je)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,_&&vt&&!H&&_t.restart(!0),ot&&it(),x&&vt&&x(J),T&&T(J,Oe)}},De=function(Ke){return Ke.touches&&Ke.touches.length>1&&(J.isGesturing=!0)&&le(Ke,J.isDragging)},de=function(){return(J.isGesturing=!1)||N(J)},me=function(Ke){if(!Pe(Ke)){var vt=I(),Oe=P();Ve((vt-ie)*X,(Oe-ve)*X,1),ie=vt,ve=Oe,_&&_t.restart(!0)}},Le=function(Ke){if(!Pe(Ke)){Ke=du(Ke,p),k&&(W=!0);var vt=(Ke.deltaMode===1?f:Ke.deltaMode===2?$i.innerHeight:1)*E;Ve(Ke.deltaX*vt,Ke.deltaY*vt,0),_&&!H&&_t.restart(!0)}},Ue=function(Ke){if(!Pe(Ke)){var vt=Ke.clientX,Oe=Ke.clientY,ut=vt-J.x,Je=Oe-J.y;J.x=vt,J.y=Oe,$e=!0,_&&_t.restart(!0),(ut||Je)&&St(ut,Je)}},dt=function(Ke){J.event=Ke,se(J)},zt=function(Ke){J.event=Ke,ce(J)},an=function(Ke){return Pe(Ke)||du(Ke,p)&&Z(J)};_t=J._dc=qn.delayedCall(g||.25,st).pause(),J.deltaX=J.deltaY=0,J._vx=Cm(0,50,!0),J._vy=Cm(0,50,!0),J.scrollX=I,J.scrollY=P,J.isDragging=J.isGesturing=J.isPressed=!1,OS(this),J.enable=function(ze){return J.isEnabled||(mi(ge?Ie:c,"scroll",Am),u.indexOf("scroll")>=0&&mi(ge?Ie:c,"scroll",me,je,pe),u.indexOf("wheel")>=0&&mi(c,"wheel",Le,je,pe),(u.indexOf("touch")>=0&&US||u.indexOf("pointer")>=0)&&(mi(c,Ir[0],Dt,je,pe),mi(Ie,Ir[2],V),mi(Ie,Ir[3],V),fe&&mi(c,"click",Te,!0,!0),Z&&mi(c,"click",an),le&&mi(Ie,"gesturestart",De),N&&mi(Ie,"gestureend",de),se&&mi(c,zo+"enter",dt),ce&&mi(c,zo+"leave",zt),ee&&mi(c,zo+"move",Ue)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=$e=ot=!1,J._vx.reset(),J._vy.reset(),ie=I(),ve=P(),ze&&ze.type&&Dt(ze),oe&&oe(J)),J},J.disable=function(){J.isEnabled&&(ol.filter(function(ze){return ze!==J&&ku(ze.target)}).length||di(ge?Ie:c,"scroll",Am),J.isPressed&&(J._vx.reset(),J._vy.reset(),di(H?c:Ie,Ir[1],at,!0)),di(ge?Ie:c,"scroll",me,pe),di(c,"wheel",Le,pe),di(c,Ir[0],Dt,pe),di(Ie,Ir[2],V),di(Ie,Ir[3],V),di(c,"click",Te,!0),di(c,"click",an),di(Ie,"gesturestart",De),di(Ie,"gestureend",de),di(c,zo+"enter",dt),di(c,zo+"leave",zt),di(c,zo+"move",Ue),J.isEnabled=J.isPressed=J.isDragging=!1,Ne&&Ne(J))},J.kill=J.revert=function(){J.disable();var ze=ol.indexOf(J);ze>=0&&ol.splice(ze,1),vs===J&&(vs=0)},ol.push(J),H&&ku(c)&&(vs=J),J.enable(M)},QT(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();wn.version="3.15.0";wn.create=function(o){return new wn(o)};wn.register=HS;wn.getAll=function(){return ol.slice()};wn.getById=function(o){return ol.filter(function(e){return e.vars.id===o})[0]};kS()&&qn.registerPlugin(wn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qe,nl,It,Kt,ji,Yt,Wg,Eh,ec,zu,Cu,df,ri,Lh,Rm,vi,lx,ux,il,VS,Ap,GS,_i,bm,WS,XS,Qs,Pm,Xg,dl,Yg,Bu,Dm,Cp,pf=1,si=Date.now,Rp=si(),Sr=0,Ru=0,cx=function(e,t,n){var r=Xi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},fx=function(e,t){return t&&(!Xi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},tw=function o(){return Ru&&requestAnimationFrame(o)},hx=function(){return Lh=1},dx=function(){return Lh=0},Wr=function(e){return e},bu=function(e){return Math.round(e*1e5)/1e5||0},YS=function(){return typeof window<"u"},jS=function(){return qe||YS()&&(qe=window.gsap)&&qe.registerPlugin&&qe},na=function(e){return!!~Wg.indexOf(e)},qS=function(e){return(e==="Height"?Yg:It["inner"+e])||ji["client"+e]||Yt["client"+e]},$S=function(e){return ao(e,"getBoundingClientRect")||(na(e)?function(){return ah.width=It.innerWidth,ah.height=Yg,ah}:function(){return _s(e)})},nw=function(e,t,n){var r=n.d,a=n.d2,u=n.a;return(u=ao(e,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(t?qS(a):e["client"+a])||0}},iw=function(e,t){return!t||~Qr.indexOf(e)?$S(e):function(){return ah}},$r=function(e,t){var n=t.s,r=t.d2,a=t.d,u=t.a;return Math.max(0,(n="scroll"+r)&&(u=ao(e,n))?u()-$S(e)()[a]:na(e)?(ji[n]||Yt[n])-qS(r):e[n]-e["offset"+r])},mf=function(e,t){for(var n=0;n<il.length;n+=3)(!t||~t.indexOf(il[n+1]))&&e(il[n],il[n+1],il[n+2])},Xi=function(e){return typeof e=="string"},ai=function(e){return typeof e=="function"},Pu=function(e){return typeof e=="number"},Bo=function(e){return typeof e=="object"},pu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ia=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Ua=Math.abs,KS="left",ZS="top",jg="right",qg="bottom",Jo="width",ea="height",Hu="Right",Vu="Left",Gu="Top",Wu="Bottom",Rn="padding",mr="margin",El="Width",$g="Height",In="px",gr=function(e){return It.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},rw=function(e){var t=gr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},px=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_s=function(e,t){var n=t&&gr(e)[Rm]!=="matrix(1, 0, 0, 1, 0, 0)"&&qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Th=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},QS=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},sw=function(e){return function(t){return qe.utils.snap(QS(e),t)}},Kg=function(e){var t=qe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,u){u===void 0&&(u=.001);var c;if(!a)return t(r);if(a>0){for(r-=u,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=u;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,u){u===void 0&&(u=.001);var c=t(r);return!a||Math.abs(c-r)<u||c-r<0==a<0?c:t(a<0?r-e:r+e)}},ow=function(e){return function(t,n){return Kg(QS(e))(t,n.direction)}},gf=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},Gn=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},Vn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},_f=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},mx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},vf={toggleActions:"play",anticipatePin:0},wh={top:0,left:0,center:.5,bottom:1,right:1},ih=function(e,t){if(Xi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in wh?wh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},xf=function(e,t,n,r,a,u,c,f){var d=a.startColor,p=a.endColor,_=a.fontSize,g=a.indent,v=a.fontWeight,E=Kt.createElement("div"),M=na(n)||ao(n,"pinType")==="fixed",y=e.indexOf("scroller")!==-1,x=M?Yt:n.tagName==="IFRAME"?n.contentDocument.body:n,R=e.indexOf("start")!==-1,b=R?d:p,T="border-color:"+b+";font-size:"+_+";color:"+b+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return T+="position:"+((y||f)&&M?"fixed;":"absolute;"),(y||f||!M)&&(T+=(r===Un?jg:qg)+":"+(u+parseFloat(g))+"px;"),c&&(T+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),E._isStart=R,E.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),E.style.cssText=T,E.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(E,x.children[0]):x.appendChild(E),E._offset=E["offset"+r.op.d2],rh(E,0,r,R),E},rh=function(e,t,n,r){var a={display:"block"},u=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+u+El]=1,a["border"+c+El]=0,a[n.p]=t+"px",qe.set(e,a)},bt=[],Lm={},tc,gx=function(){return si()-Sr>34&&(tc||(tc=requestAnimationFrame(ys)))},Fa=function(){(!_i||!_i.isPressed||_i.startX>Yt.clientWidth)&&(Ut.cache++,_i?tc||(tc=requestAnimationFrame(ys)):ys(),Sr||ra("scrollStart"),Sr=si())},bp=function(){XS=It.innerWidth,WS=It.innerHeight},Du=function(e){Ut.cache++,(e===!0||!ri&&!GS&&!Kt.fullscreenElement&&!Kt.webkitFullscreenElement&&(!bm||XS!==It.innerWidth||Math.abs(It.innerHeight-WS)>It.innerHeight*.25))&&Eh.restart(!0)},ia={},aw=[],JS=function o(){return Vn(Pt,"scrollEnd",o)||Yo(!0)},ra=function(e){return ia[e]&&ia[e].map(function(t){return t()})||aw},Wi=[],eM=function(e){for(var t=0;t<Wi.length;t+=5)(!e||Wi[t+4]&&Wi[t+4].query===e)&&(Wi[t].style.cssText=Wi[t+1],Wi[t].getBBox&&Wi[t].setAttribute("transform",Wi[t+2]||""),Wi[t+3].uncache=1)},tM=function(){return Ut.forEach(function(e){return ai(e)&&++e.cacheID&&(e.rec=e())})},Zg=function(e,t){var n;for(vi=0;vi<bt.length;vi++)n=bt[vi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Bu=!0,t&&eM(t),t||ra("revert")},nM=function(e,t){Ut.cache++,(t||!xi)&&Ut.forEach(function(n){return ai(n)&&n.cacheID++&&(n.rec=0)}),Xi(e)&&(It.history.scrollRestoration=Xg=e)},xi,ta=0,_x,lw=function(){if(_x!==ta){var e=_x=ta;requestAnimationFrame(function(){return e===ta&&Yo(!0)})}},iM=function(){Yt.appendChild(dl),Yg=!_i&&dl.offsetHeight||It.innerHeight,Yt.removeChild(dl)},vx=function(e){return ec(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Yo=function(e,t){if(ji=Kt.documentElement,Yt=Kt.body,Wg=[It,Kt,ji,Yt],Sr&&!e&&!Bu){Gn(Pt,"scrollEnd",JS);return}iM(),xi=Pt.isRefreshing=!0,Bu||tM();var n=ra("refreshInit");VS&&Pt.sort(),t||Zg(),Ut.forEach(function(r){ai(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),bt.slice(0).forEach(function(r){return r.refresh()}),Bu=!1,bt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",u=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-u),r.refresh()}}),Dm=1,vx(!0),bt.forEach(function(r){var a=$r(r.scroller,r._dir),u=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(u||c)&&r.setPositions(c?a-1:r.start,u?Math.max(c?a:r.start+1,a):r.end,!0)}),vx(!1),Dm=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Ut.forEach(function(r){ai(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),nM(Xg,1),Eh.pause(),ta++,xi=2,ys(2),bt.forEach(function(r){return ai(r.vars.onRefresh)&&r.vars.onRefresh(r)}),xi=Pt.isRefreshing=!1,ra("refresh")},Nm=0,sh=1,Xu,ys=function(e){if(e===2||!xi&&!Bu){Pt.isUpdating=!0,Xu&&Xu.update(0);var t=bt.length,n=si(),r=n-Rp>=50,a=t&&bt[0].scroll();if(sh=Nm>a?-1:1,xi||(Nm=a),r&&(Sr&&!Lh&&n-Sr>200&&(Sr=0,ra("scrollEnd")),Cu=Rp,Rp=n),sh<0){for(vi=t;vi-- >0;)bt[vi]&&bt[vi].update(0,r);sh=1}else for(vi=0;vi<t;vi++)bt[vi]&&bt[vi].update(0,r);Pt.isUpdating=!1}tc=0},Im=[KS,ZS,qg,jg,mr+Wu,mr+Hu,mr+Gu,mr+Vu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],oh=Im.concat([Jo,ea,"boxSizing","max"+El,"max"+$g,"position",mr,Rn,Rn+Gu,Rn+Hu,Rn+Wu,Rn+Vu]),uw=function(e,t,n){pl(n);var r=e._gsap;if(r.spacerIsNative)pl(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},Pp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=Im.length,u=t.style,c=e.style,f;a--;)f=Im[a],u[f]=n[f];u.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(u.display="inline-block"),c[qg]=c[jg]="auto",u.flexBasis=n.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[Jo]=Th(e,yi)+In,u[ea]=Th(e,Un)+In,u[Rn]=c[mr]=c[ZS]=c[KS]="0",pl(r),c[Jo]=c["max"+El]=n[Jo],c[ea]=c["max"+$g]=n[ea],c[Rn]=n[Rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},cw=/([A-Z])/g,pl=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,u;for((e.t._gsap||qe.core.getCache(e.t)).uncache=1;r<n;r+=2)u=e[r+1],a=e[r],u?t[a]=u:t[a]&&t.removeProperty(a.replace(cw,"-$1").toLowerCase())}},yf=function(e){for(var t=oh.length,n=e.style,r=[],a=0;a<t;a++)r.push(oh[a],n[oh[a]]);return r.t=e,r},fw=function(e,t,n){for(var r=[],a=e.length,u=n?8:0,c;u<a;u+=2)c=e[u],r.push(c,c in t?t[c]:e[u+1]);return r.t=e.t,r},ah={left:0,top:0},xx=function(e,t,n,r,a,u,c,f,d,p,_,g,v,E){ai(e)&&(e=e(f)),Xi(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?ih("0"+e.substr(3),n):0));var M=v?v.time():0,y,x,R;if(v&&v.seek(0),isNaN(e)||(e=+e),Pu(e))v&&(e=qe.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,g,e)),c&&rh(c,n,r,!0);else{ai(t)&&(t=t(f));var b=(e||"0").split(" "),T,F,U,D;R=bi(t,f)||Yt,T=_s(R)||{},(!T||!T.left&&!T.top)&&gr(R).display==="none"&&(D=R.style.display,R.style.display="block",T=_s(R),D?R.style.display=D:R.style.removeProperty("display")),F=ih(b[0],T[r.d]),U=ih(b[1]||"0",n),e=T[r.p]-d[r.p]-p+F+a-U,c&&rh(c,U,r,n-U<20||c._isStart&&U>20),n-=n-U}if(E&&(f[E]=e||-.001,e<0&&(e=0)),u){var O=e+n,C=u._isStart;y="scroll"+r.d2,rh(u,O,r,C&&O>20||!C&&(_?Math.max(Yt[y],ji[y]):u.parentNode[y])<=O+1),_&&(d=_s(c),_&&(u.style[r.op.p]=d[r.op.p]-r.op.m-u._offset+In))}return v&&R&&(y=_s(R),v.seek(g),x=_s(R),v._caScrollDist=y[r.p]-x[r.p],e=e/v._caScrollDist*g),v&&v.seek(M),v?e:Math.round(e)},hw=/(webkit|moz|length|cssText|inset)/i,yx=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,u,c;if(t===Yt){e._stOrig=a.cssText,c=gr(e);for(u in c)!+u&&!hw.test(u)&&c[u]&&typeof a[u]=="string"&&u!=="0"&&(a[u]=c[u]);a.top=n,a.left=r}else a.cssText=e._stOrig;qe.core.getCache(e).uncache=1,t.appendChild(e)}},rM=function(e,t,n){var r=t,a=r;return function(u){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(u=c,n&&n()),a=r,r=Math.round(u),r}},Sf=function(e,t,n){var r={};r[t.p]="+="+n,qe.set(e,r)},Sx=function(e,t){var n=mo(e,t),r="_scroll"+t.p2,a=function u(c,f,d,p,_){var g=u.tween,v=f.onComplete,E={};d=d||n();var M=rM(n,d,function(){g.kill(),u.tween=0});return _=p&&_||0,p=p||c-d,g&&g.kill(),f[r]=c,f.inherit=!1,f.modifiers=E,E[r]=function(){return M(d+p*g.ratio+_*g.ratio*g.ratio)},f.onUpdate=function(){Ut.cache++,u.tween&&ys()},f.onComplete=function(){u.tween=0,v&&v.call(g)},g=u.tween=qe.to(e,f),g};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Gn(e,"wheel",n.wheelHandler),Pt.isTouch&&Gn(e,"touchmove",n.wheelHandler),a},Pt=(function(){function o(t,n){nl||o.register(qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Pm(this),this.init(t,n)}var e=o.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ru){this.update=this.refresh=this.kill=Wr;return}n=px(Xi(n)||Pu(n)||n.nodeType?{trigger:n}:n,vf);var a=n,u=a.onUpdate,c=a.toggleClass,f=a.id,d=a.onToggle,p=a.onRefresh,_=a.scrub,g=a.trigger,v=a.pin,E=a.pinSpacing,M=a.invalidateOnRefresh,y=a.anticipatePin,x=a.onScrubComplete,R=a.onSnapComplete,b=a.once,T=a.snap,F=a.pinReparent,U=a.pinSpacer,D=a.containerAnimation,O=a.fastScrollEnd,C=a.preventOverlaps,w=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yi:Un,B=!_&&_!==0,j=bi(n.scroller||It),K=qe.core.getCache(j),se=na(j),ce=("pinType"in n?n.pinType:ao(j,"pinType")||se&&"fixed")==="fixed",ee=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Q=B&&n.toggleActions.split(" "),H="markers"in n?n.markers:vf.markers,le=se?0:parseFloat(gr(j)["border"+w.p2+El])||0,N=this,k=n.onRefreshInit&&function(){return n.onRefreshInit(N)},oe=nw(j,se,w),Ne=iw(j,se),Z=0,X=0,pe=0,fe=mo(j,w),ye,Ae,Qe,_t,ot,$e,W,kt,ht,J,We,Rt,je,I,P,ie,ve,_e,ge,Ie,be,Fe,mt,Te,Pe,st,it,Ve,St,at,Dt,V,De,de,me,Le,Ue,dt,zt;if(N._startClamp=N._endClamp=!1,N._dir=w,y*=45,N.scroller=j,N.scroll=D?D.time.bind(D):fe,_t=fe(),N.vars=n,r=r||n.animation,"refreshPriority"in n&&(VS=1,n.refreshPriority===-9999&&(Xu=N)),K.tweenScroll=K.tweenScroll||{top:Sx(j,Un),left:Sx(j,yi)},N.tweenTo=ye=K.tweenScroll[w.p],N.scrubDuration=function(Oe){De=Pu(Oe)&&Oe,De?V?V.duration(Oe):V=qe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:De,paused:!0,onComplete:function(){return x&&x(N)}}):(V&&V.progress(1).kill(),V=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(_),at=0,f||(f=r.vars.id)),T&&((!Bo(T)||T.push)&&(T={snapTo:T}),"scrollBehavior"in Yt.style&&qe.set(se?[Yt,ji]:j,{scrollBehavior:"auto"}),Ut.forEach(function(Oe){return ai(Oe)&&Oe.target===(se?Kt.scrollingElement||ji:j)&&(Oe.smooth=!1)}),Qe=ai(T.snapTo)?T.snapTo:T.snapTo==="labels"?sw(r):T.snapTo==="labelsDirectional"?ow(r):T.directional!==!1?function(Oe,ut){return Kg(T.snapTo)(Oe,si()-X<500?0:ut.direction)}:qe.utils.snap(T.snapTo),de=T.duration||{min:.1,max:2},de=Bo(de)?zu(de.min,de.max):zu(de,de),me=qe.delayedCall(T.delay||De/2||.1,function(){var Oe=fe(),ut=si()-X<500,Je=ye.tween;if((ut||Math.abs(N.getVelocity())<10)&&!Je&&!Lh&&Z!==Oe){var lt=(Oe-$e)/I,sn=r&&!B?r.totalProgress():lt,Mt=ut?0:(sn-Dt)/(si()-Cu)*1e3||0,Xt=qe.utils.clamp(-lt,1-lt,Ua(Mt/2)*Mt/.185),Mn=lt+(T.inertia===!1?0:Xt),jt,qt,Lt=T,Kn=Lt.onStart,Zt=Lt.onInterrupt,Xn=Lt.onComplete;if(jt=Qe(Mn,N),Pu(jt)||(jt=Mn),qt=Math.max(0,Math.round($e+jt*I)),Oe<=W&&Oe>=$e&&qt!==Oe){if(Je&&!Je._initted&&Je.data<=Ua(qt-Oe))return;T.inertia===!1&&(Xt=jt-lt),ye(qt,{duration:de(Ua(Math.max(Ua(Mn-sn),Ua(jt-sn))*.185/Mt/.05||0)),ease:T.ease||"power3",data:Ua(qt-Oe),onInterrupt:function(){return me.restart(!0)&&Zt&&Ia(N,Zt)},onComplete:function(){N.update(),Z=fe(),r&&!B&&(V?V.resetTo("totalProgress",jt,r._tTime/r._tDur):r.progress(jt)),at=Dt=r&&!B?r.totalProgress():N.progress,R&&R(N),Xn&&Ia(N,Xn)}},Oe,Xt*I,qt-Oe-Xt*I),Kn&&Ia(N,Kn,ye.tween)}}else N.isActive&&Z!==Oe&&me.restart(!0)}).pause()),f&&(Lm[f]=N),g=N.trigger=bi(g||v!==!0&&v),zt=g&&g._gsap&&g._gsap.stRevert,zt&&(zt=zt(N)),v=v===!0?g:bi(v),Xi(c)&&(c={targets:g,className:c}),v&&(E===!1||E===mr||(E=!E&&v.parentNode&&v.parentNode.style&&gr(v.parentNode).display==="flex"?!1:Rn),N.pin=v,Ae=qe.core.getCache(v),Ae.spacer?P=Ae.pinState:(U&&(U=bi(U),U&&!U.nodeType&&(U=U.current||U.nativeElement),Ae.spacerIsNative=!!U,U&&(Ae.spacerState=yf(U))),Ae.spacer=_e=U||Kt.createElement("div"),_e.classList.add("pin-spacer"),f&&_e.classList.add("pin-spacer-"+f),Ae.pinState=P=yf(v)),n.force3D!==!1&&qe.set(v,{force3D:!0}),N.spacer=_e=Ae.spacer,St=gr(v),Te=St[E+w.os2],Ie=qe.getProperty(v),be=qe.quickSetter(v,w.a,In),Pp(v,_e,St),ve=yf(v)),H){Rt=Bo(H)?px(H,mx):mx,J=xf("scroller-start",f,j,w,Rt,0),We=xf("scroller-end",f,j,w,Rt,0,J),ge=J["offset"+w.op.d2];var an=bi(ao(j,"content")||j);kt=this.markerStart=xf("start",f,an,w,Rt,ge,0,D),ht=this.markerEnd=xf("end",f,an,w,Rt,ge,0,D),D&&(dt=qe.quickSetter([kt,ht],w.a,In)),!ce&&!(Qr.length&&ao(j,"fixedMarkers")===!0)&&(rw(se?Yt:j),qe.set([J,We],{force3D:!0}),st=qe.quickSetter(J,w.a,In),Ve=qe.quickSetter(We,w.a,In))}if(D){var ze=D.vars.onUpdate,Ke=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){N.update(0,0,1),ze&&ze.apply(D,Ke||[])})}if(N.previous=function(){return bt[bt.indexOf(N)-1]},N.next=function(){return bt[bt.indexOf(N)+1]},N.revert=function(Oe,ut){if(!ut)return N.kill(!0);var Je=Oe!==!1||!N.enabled,lt=ri;Je!==N.isReverted&&(Je&&(Le=Math.max(fe(),N.scroll.rec||0),pe=N.progress,Ue=r&&r.progress()),kt&&[kt,ht,J,We].forEach(function(sn){return sn.style.display=Je?"none":"block"}),Je&&(ri=N,N.update(Je)),v&&(!F||!N.isActive)&&(Je?uw(v,_e,P):Pp(v,_e,gr(v),Pe)),Je||N.update(Je),ri=lt,N.isReverted=Je)},N.refresh=function(Oe,ut,Je,lt){if(!((ri||!N.enabled)&&!ut)){if(v&&Oe&&Sr){Gn(o,"scrollEnd",JS);return}!xi&&k&&k(N),ri=N,ye.tween&&!Je&&(ye.tween.kill(),ye.tween=0),V&&V.pause(),M&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ln){return ln.vars.immediateRender&&ln.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var sn=oe(),Mt=Ne(),Xt=D?D.duration():$r(j,w),Mn=I<=.01||!I,jt=0,qt=lt||0,Lt=Bo(Je)?Je.end:n.end,Kn=n.endTrigger||g,Zt=Bo(Je)?Je.start:n.start||(n.start===0||!g?0:v?"0 0":"0 100%"),Xn=N.pinnedContainer=n.pinnedContainer&&bi(n.pinnedContainer,N),L=g&&Math.max(0,bt.indexOf(N))||0,Y=L,ne,re,$,Ce,Se,ke,He,pt,gt,Xe,yt,Ft,Tt;for(H&&Bo(Je)&&(Ft=qe.getProperty(J,w.p),Tt=qe.getProperty(We,w.p));Y-- >0;)ke=bt[Y],ke.end||ke.refresh(0,1)||(ri=N),He=ke.pin,He&&(He===g||He===v||He===Xn)&&!ke.isReverted&&(Xe||(Xe=[]),Xe.unshift(ke),ke.revert(!0,!0)),ke!==bt[Y]&&(L--,Y--);for(ai(Zt)&&(Zt=Zt(N)),Zt=cx(Zt,"start",N),$e=xx(Zt,g,sn,w,fe(),kt,J,N,Mt,le,ce,Xt,D,N._startClamp&&"_startClamp")||(v?-.001:0),ai(Lt)&&(Lt=Lt(N)),Xi(Lt)&&!Lt.indexOf("+=")&&(~Lt.indexOf(" ")?Lt=(Xi(Zt)?Zt.split(" ")[0]:"")+Lt:(jt=ih(Lt.substr(2),sn),Lt=Xi(Zt)?Zt:(D?qe.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,$e):$e)+jt,Kn=g)),Lt=cx(Lt,"end",N),W=Math.max($e,xx(Lt||(Kn?"100% 0":Xt),Kn,sn,w,fe()+jt,ht,We,N,Mt,le,ce,Xt,D,N._endClamp&&"_endClamp"))||-.001,jt=0,Y=L;Y--;)ke=bt[Y]||{},He=ke.pin,He&&ke.start-ke._pinPush<=$e&&!D&&ke.end>0&&(ne=ke.end-(N._startClamp?Math.max(0,ke.start):ke.start),(He===g&&ke.start-ke._pinPush<$e||He===Xn)&&isNaN(Zt)&&(jt+=ne*(1-ke.progress)),He===v&&(qt+=ne));if($e+=jt,W+=jt,N._startClamp&&(N._startClamp+=jt),N._endClamp&&!xi&&(N._endClamp=W||-.001,W=Math.min(W,$r(j,w))),I=W-$e||($e-=.01)&&.001,Mn&&(pe=qe.utils.clamp(0,1,qe.utils.normalize($e,W,Le))),N._pinPush=qt,kt&&jt&&(ne={},ne[w.a]="+="+jt,Xn&&(ne[w.p]="-="+fe()),qe.set([kt,ht],ne)),v&&!(Dm&&N.end>=$r(j,w)))ne=gr(v),Ce=w===Un,$=fe(),Fe=parseFloat(Ie(w.a))+qt,!Xt&&W>1&&(yt=(se?Kt.scrollingElement||ji:j).style,yt={style:yt,value:yt["overflow"+w.a.toUpperCase()]},se&&gr(Yt)["overflow"+w.a.toUpperCase()]!=="scroll"&&(yt.style["overflow"+w.a.toUpperCase()]="scroll")),Pp(v,_e,ne),ve=yf(v),re=_s(v,!0),pt=ce&&mo(j,Ce?yi:Un)(),E?(Pe=[E+w.os2,I+qt+In],Pe.t=_e,Y=E===Rn?Th(v,w)+I+qt:0,Y&&(Pe.push(w.d,Y+In),_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=Y+In)),pl(Pe),Xn&&bt.forEach(function(ln){ln.pin===Xn&&ln.vars.pinSpacing!==!1&&(ln._subPinOffset=!0)}),ce&&fe(Le)):(Y=Th(v,w),Y&&_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=Y+In)),ce&&(Se={top:re.top+(Ce?$-$e:pt)+In,left:re.left+(Ce?pt:$-$e)+In,boxSizing:"border-box",position:"fixed"},Se[Jo]=Se["max"+El]=Math.ceil(re.width)+In,Se[ea]=Se["max"+$g]=Math.ceil(re.height)+In,Se[mr]=Se[mr+Gu]=Se[mr+Hu]=Se[mr+Wu]=Se[mr+Vu]="0",Se[Rn]=ne[Rn],Se[Rn+Gu]=ne[Rn+Gu],Se[Rn+Hu]=ne[Rn+Hu],Se[Rn+Wu]=ne[Rn+Wu],Se[Rn+Vu]=ne[Rn+Vu],ie=fw(P,Se,F),xi&&fe(0)),r?(gt=r._initted,Ap(1),r.render(r.duration(),!0,!0),mt=Ie(w.a)-Fe+I+qt,it=Math.abs(I-mt)>1,ce&&it&&ie.splice(ie.length-2,2),r.render(0,!0,!0),gt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ap(0)):mt=I,yt&&(yt.value?yt.style["overflow"+w.a.toUpperCase()]=yt.value:yt.style.removeProperty("overflow-"+w.a));else if(g&&fe()&&!D)for(re=g.parentNode;re&&re!==Yt;)re._pinOffset&&($e-=re._pinOffset,W-=re._pinOffset),re=re.parentNode;Xe&&Xe.forEach(function(ln){return ln.revert(!1,!0)}),N.start=$e,N.end=W,_t=ot=xi?Le:fe(),!D&&!xi&&(_t<Le&&fe(Le),N.scroll.rec=0),N.revert(!1,!0),X=si(),me&&(Z=-1,me.restart(!0)),ri=0,r&&B&&(r._initted||Ue)&&r.progress()!==Ue&&r.progress(Ue||0,!0).render(r.time(),!0,!0),(Mn||pe!==N.progress||D||M||r&&!r._initted)&&(r&&!B&&(r._initted||pe||r.vars.immediateRender!==!1)&&r.totalProgress(D&&$e<-.001&&!pe?qe.utils.normalize($e,W,0):pe,!0),N.progress=Mn||(_t-$e)/I===pe?0:pe),v&&E&&(_e._pinOffset=Math.round(N.progress*mt)),V&&V.invalidate(),isNaN(Ft)||(Ft-=qe.getProperty(J,w.p),Tt-=qe.getProperty(We,w.p),Sf(J,w,Ft),Sf(kt,w,Ft-(lt||0)),Sf(We,w,Tt),Sf(ht,w,Tt-(lt||0))),Mn&&!xi&&N.update(),p&&!xi&&!je&&(je=!0,p(N),je=!1)}},N.getVelocity=function(){return(fe()-ot)/(si()-Cu)*1e3||0},N.endAnimation=function(){pu(N.callbackAnimation),r&&(V?V.progress(1):r.paused()?B||pu(r,N.direction<0,1):pu(r,r.reversed()))},N.labelToScroll=function(Oe){return r&&r.labels&&($e||N.refresh()||$e)+r.labels[Oe]/r.duration()*I||0},N.getTrailing=function(Oe){var ut=bt.indexOf(N),Je=N.direction>0?bt.slice(0,ut).reverse():bt.slice(ut+1);return(Xi(Oe)?Je.filter(function(lt){return lt.vars.preventOverlaps===Oe}):Je).filter(function(lt){return N.direction>0?lt.end<=$e:lt.start>=W})},N.update=function(Oe,ut,Je){if(!(D&&!Je&&!Oe)){var lt=xi===!0?Le:N.scroll(),sn=Oe?0:(lt-$e)/I,Mt=sn<0?0:sn>1?1:sn||0,Xt=N.progress,Mn,jt,qt,Lt,Kn,Zt,Xn,L;if(ut&&(ot=_t,_t=D?fe():lt,T&&(Dt=at,at=r&&!B?r.totalProgress():Mt)),y&&v&&!ri&&!pf&&Sr&&(!Mt&&$e<lt+(lt-ot)/(si()-Cu)*y?Mt=1e-4:Mt===1&&W>lt+(lt-ot)/(si()-Cu)*y&&(Mt=.9999)),Mt!==Xt&&N.enabled){if(Mn=N.isActive=!!Mt&&Mt<1,jt=!!Xt&&Xt<1,Zt=Mn!==jt,Kn=Zt||!!Mt!=!!Xt,N.direction=Mt>Xt?1:-1,N.progress=Mt,Kn&&!ri&&(qt=Mt&&!Xt?0:Mt===1?1:Xt===1?2:3,B&&(Lt=!Zt&&Q[qt+1]!=="none"&&Q[qt+1]||Q[qt],L=r&&(Lt==="complete"||Lt==="reset"||Lt in r))),C&&(Zt||L)&&(L||_||!r)&&(ai(C)?C(N):N.getTrailing(C).forEach(function($){return $.endAnimation()})),B||(V&&!ri&&!pf?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo("totalProgress",Mt,r._tTime/r._tDur):(V.vars.totalProgress=Mt,V.invalidate().restart())):r&&r.totalProgress(Mt,!!(ri&&(X||Oe)))),v){if(Oe&&E&&(_e.style[E+w.os2]=Te),!ce)be(bu(Fe+mt*Mt));else if(Kn){if(Xn=!Oe&&Mt>Xt&&W+1>lt&&lt+1>=$r(j,w),F)if(!Oe&&(Mn||Xn)){var Y=_s(v,!0),ne=lt-$e;yx(v,Yt,Y.top+(w===Un?ne:0)+In,Y.left+(w===Un?0:ne)+In)}else yx(v,_e);pl(Mn||Xn?ie:ve),it&&Mt<1&&Mn||be(Fe+(Mt===1&&!Xn?mt:0))}}T&&!ye.tween&&!ri&&!pf&&me.restart(!0),c&&(Zt||b&&Mt&&(Mt<1||!Cp))&&ec(c.targets).forEach(function($){return $.classList[Mn||b?"add":"remove"](c.className)}),u&&!B&&!Oe&&u(N),Kn&&!ri?(B&&(L&&(Lt==="complete"?r.pause().totalProgress(1):Lt==="reset"?r.restart(!0).pause():Lt==="restart"?r.restart(!0):r[Lt]()),u&&u(N)),(Zt||!Cp)&&(d&&Zt&&Ia(N,d),ee[qt]&&Ia(N,ee[qt]),b&&(Mt===1?N.kill(!1,1):ee[qt]=0),Zt||(qt=Mt===1?1:3,ee[qt]&&Ia(N,ee[qt]))),O&&!Mn&&Math.abs(N.getVelocity())>(Pu(O)?O:2500)&&(pu(N.callbackAnimation),V?V.progress(1):pu(r,Lt==="reverse"?1:!Mt,1))):B&&u&&!ri&&u(N)}if(Ve){var re=D?lt/D.duration()*(D._caScrollDist||0):lt;st(re+(J._isFlipped?1:0)),Ve(re)}dt&&dt(-lt/D.duration()*(D._caScrollDist||0))}},N.enable=function(Oe,ut){N.enabled||(N.enabled=!0,Gn(j,"resize",Du),se||Gn(j,"scroll",Fa),k&&Gn(o,"refreshInit",k),Oe!==!1&&(N.progress=pe=0,_t=ot=Z=fe()),ut!==!1&&N.refresh())},N.getTween=function(Oe){return Oe&&ye?ye.tween:V},N.setPositions=function(Oe,ut,Je,lt){if(D){var sn=D.scrollTrigger,Mt=D.duration(),Xt=sn.end-sn.start;Oe=sn.start+Xt*Oe/Mt,ut=sn.start+Xt*ut/Mt}N.refresh(!1,!1,{start:fx(Oe,Je&&!!N._startClamp),end:fx(ut,Je&&!!N._endClamp)},lt),N.update()},N.adjustPinSpacing=function(Oe){if(Pe&&Oe){var ut=Pe.indexOf(w.d)+1;Pe[ut]=parseFloat(Pe[ut])+Oe+In,Pe[1]=parseFloat(Pe[1])+Oe+In,pl(Pe)}},N.disable=function(Oe,ut){if(Oe!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,ut||V&&V.pause(),Le=0,Ae&&(Ae.uncache=1),k&&Vn(o,"refreshInit",k),me&&(me.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!se)){for(var Je=bt.length;Je--;)if(bt[Je].scroller===j&&bt[Je]!==N)return;Vn(j,"resize",Du),se||Vn(j,"scroll",Fa)}},N.kill=function(Oe,ut){N.disable(Oe,ut),V&&!ut&&V.kill(),f&&delete Lm[f];var Je=bt.indexOf(N);Je>=0&&bt.splice(Je,1),Je===vi&&sh>0&&vi--,Je=0,bt.forEach(function(lt){return lt.scroller===N.scroller&&(Je=1)}),Je||xi||(N.scroll.rec=0),r&&(r.scrollTrigger=null,Oe&&r.revert({kill:!1}),ut||r.kill()),kt&&[kt,ht,J,We].forEach(function(lt){return lt.parentNode&&lt.parentNode.removeChild(lt)}),Xu===N&&(Xu=0),v&&(Ae&&(Ae.uncache=1),Je=0,bt.forEach(function(lt){return lt.pin===v&&Je++}),Je||(Ae.spacer=0)),n.onKill&&n.onKill(N)},bt.push(N),N.enable(!1,!1),zt&&zt(N),r&&r.add&&!I){var vt=N.update;N.update=function(){N.update=vt,Ut.cache++,$e||W||N.refresh()},qe.delayedCall(.01,N.update),I=.01,$e=W=0}else N.refresh();v&&lw()},o.register=function(n){return nl||(qe=n||jS(),YS()&&window.document&&o.enable(),nl=Ru),nl},o.defaults=function(n){if(n)for(var r in n)vf[r]=n[r];return vf},o.disable=function(n,r){Ru=0,bt.forEach(function(u){return u[r?"kill":"disable"](n)}),Vn(It,"wheel",Fa),Vn(Kt,"scroll",Fa),clearInterval(df),Vn(Kt,"touchcancel",Wr),Vn(Yt,"touchstart",Wr),gf(Vn,Kt,"pointerdown,touchstart,mousedown",hx),gf(Vn,Kt,"pointerup,touchend,mouseup",dx),Eh.kill(),mf(Vn);for(var a=0;a<Ut.length;a+=3)_f(Vn,Ut[a],Ut[a+1]),_f(Vn,Ut[a],Ut[a+2])},o.enable=function(){if(It=window,Kt=document,ji=Kt.documentElement,Yt=Kt.body,qe){if(ec=qe.utils.toArray,zu=qe.utils.clamp,Pm=qe.core.context||Wr,Ap=qe.core.suppressOverwrites||Wr,Xg=It.history.scrollRestoration||"auto",Nm=It.pageYOffset||0,qe.core.globals("ScrollTrigger",o),Yt){Ru=1,dl=document.createElement("div"),dl.style.height="100vh",dl.style.position="absolute",iM(),tw(),wn.register(qe),o.isTouch=wn.isTouch,Qs=wn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),bm=wn.isTouch===1,Gn(It,"wheel",Fa),Wg=[It,Kt,ji,Yt],qe.matchMedia?(o.matchMedia=function(p){var _=qe.matchMedia(),g;for(g in p)_.add(g,p[g]);return _},qe.addEventListener("matchMediaInit",function(){tM(),Zg()}),qe.addEventListener("matchMediaRevert",function(){return eM()}),qe.addEventListener("matchMedia",function(){Yo(0,1),ra("matchMedia")}),qe.matchMedia().add("(orientation: portrait)",function(){return bp(),bp})):console.warn("Requires GSAP 3.11.0 or later"),bp(),Gn(Kt,"scroll",Fa);var n=Yt.hasAttribute("style"),r=Yt.style,a=r.borderTopStyle,u=qe.core.Animation.prototype,c,f;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=_s(Yt),Un.m=Math.round(c.top+Un.sc())||0,yi.m=Math.round(c.left+yi.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(Yt.setAttribute("style",""),Yt.removeAttribute("style")),df=setInterval(gx,250),qe.delayedCall(.5,function(){return pf=0}),Gn(Kt,"touchcancel",Wr),Gn(Yt,"touchstart",Wr),gf(Gn,Kt,"pointerdown,touchstart,mousedown",hx),gf(Gn,Kt,"pointerup,touchend,mouseup",dx),Rm=qe.utils.checkPrefix("transform"),oh.push(Rm),nl=si(),Eh=qe.delayedCall(.2,Yo).pause(),il=[Kt,"visibilitychange",function(){var p=It.innerWidth,_=It.innerHeight;Kt.hidden?(lx=p,ux=_):(lx!==p||ux!==_)&&Du()},Kt,"DOMContentLoaded",Yo,It,"load",Yo,It,"resize",Du],mf(Gn),bt.forEach(function(p){return p.enable(0,1)}),f=0;f<Ut.length;f+=3)_f(Vn,Ut[f],Ut[f+1]),_f(Vn,Ut[f],Ut[f+2])}else if(Kt){var d=function p(){o.enable(),Kt.removeEventListener("DOMContentLoaded",p)};Kt.addEventListener("DOMContentLoaded",d)}}},o.config=function(n){"limitCallbacks"in n&&(Cp=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(df)||(df=r)&&setInterval(gx,r),"ignoreMobileResize"in n&&(bm=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(mf(Vn)||mf(Gn,n.autoRefreshEvents||"none"),GS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,r){var a=bi(n),u=Ut.indexOf(a),c=na(a);~u&&Ut.splice(u,c?6:2),r&&(c?Qr.unshift(It,r,Yt,r,ji,r):Qr.unshift(a,r))},o.clearMatchMedia=function(n){bt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},o.isInViewport=function(n,r,a){var u=(Xi(n)?bi(n):n).getBoundingClientRect(),c=u[a?Jo:ea]*r||0;return a?u.right-c>0&&u.left+c<It.innerWidth:u.bottom-c>0&&u.top+c<It.innerHeight},o.positionInViewport=function(n,r,a){Xi(n)&&(n=bi(n));var u=n.getBoundingClientRect(),c=u[a?Jo:ea],f=r==null?c/2:r in wh?wh[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(u.left+f)/It.innerWidth:(u.top+f)/It.innerHeight},o.killAll=function(n){if(bt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=ia.killAll||[];ia={},r.forEach(function(a){return a()})}},o})();Pt.version="3.15.0";Pt.saveStyles=function(o){return o?ec(o).forEach(function(e){if(e&&e.style){var t=Wi.indexOf(e);t>=0&&Wi.splice(t,5),Wi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),qe.core.getCache(e),Pm())}}):Wi};Pt.revert=function(o,e){return Zg(!o,e)};Pt.create=function(o,e){return new Pt(o,e)};Pt.refresh=function(o){return o?Du(!0):(nl||Pt.register())&&Yo(!0)};Pt.update=function(o){return++Ut.cache&&ys(o===!0?2:0)};Pt.clearScrollMemory=nM;Pt.maxScroll=function(o,e){return $r(o,e?yi:Un)};Pt.getScrollFunc=function(o,e){return mo(bi(o),e?yi:Un)};Pt.getById=function(o){return Lm[o]};Pt.getAll=function(){return bt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Pt.isScrolling=function(){return!!Sr};Pt.snapDirectional=Kg;Pt.addEventListener=function(o,e){var t=ia[o]||(ia[o]=[]);~t.indexOf(e)||t.push(e)};Pt.removeEventListener=function(o,e){var t=ia[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Pt.batch=function(o,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,u=function(d,p){var _=[],g=[],v=qe.delayedCall(r,function(){p(_,g),_=[],g=[]}).pause();return function(E){_.length||v.restart(!0),_.push(E.trigger),g.push(E),a<=_.length&&v.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&ai(e[c])&&c!=="onRefreshInit"?u(c,e[c]):e[c];return ai(a)&&(a=a(),Gn(Pt,"refresh",function(){return a=e.batchMax()})),ec(o).forEach(function(f){var d={};for(c in n)d[c]=n[c];d.trigger=f,t.push(Pt.create(d))}),t};var Mx=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Dp=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(wn.isTouch?" pinch-zoom":""):"none",e===ji&&o(Yt,t)},Mf={auto:1,scroll:1},dw=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,u=a._gsap||qe.core.getCache(a),c=si(),f;if(!u._isScrollT||c-u._isScrollT>2e3){for(;a&&a!==Yt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(Mf[(f=gr(a)).overflowY]||Mf[f.overflowX]));)a=a.parentNode;u._isScroll=a&&a!==n&&!na(a)&&(Mf[(f=gr(a)).overflowY]||Mf[f.overflowX]),u._isScrollT=c}(u._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},sM=function(e,t,n,r){return wn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&dw,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Gn(Kt,wn.eventTypes[0],Tx,!1,!0)},onDisable:function(){return Vn(Kt,wn.eventTypes[0],Tx,!0)}})},pw=/(input|label|select|textarea)/i,Ex,Tx=function(e){var t=pw.test(e.target.tagName);(t||Ex)&&(e._gsapAllow=!0,Ex=t)},mw=function(e){Bo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,u=t.onRelease,c,f,d=bi(e.target)||ji,p=qe.core.globals().ScrollSmoother,_=p&&p.get(),g=Qs&&(e.content&&bi(e.content)||_&&e.content!==!1&&!_.smooth()&&_.content()),v=mo(d,Un),E=mo(d,yi),M=1,y=(wn.isTouch&&It.visualViewport?It.visualViewport.scale*It.visualViewport.width:It.outerWidth)/It.innerWidth,x=0,R=ai(r)?function(){return r(c)}:function(){return r||2.8},b,T,F=sM(d,e.type,!0,a),U=function(){return T=!1},D=Wr,O=Wr,C=function(){f=$r(d,Un),O=zu(Qs?1:0,f),n&&(D=zu(0,$r(d,yi))),b=ta},w=function(){g._gsap.y=bu(parseFloat(g._gsap.y)+v.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},B=function(){if(T){requestAnimationFrame(U);var H=bu(c.deltaY/2),le=O(v.v-H);if(g&&le!==v.v+v.offset){v.offset=le-v.v;var N=bu((parseFloat(g&&g._gsap.y)||0)-v.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",g._gsap.y=N+"px",v.cacheID=Ut.cache,ys()}return!0}v.offset&&w(),T=!0},j,K,se,ce,ee=function(){C(),j.isActive()&&j.vars.scrollY>f&&(v()>f?j.progress(1)&&v(f):j.resetTo("scrollY",f))};return g&&qe.set(g,{y:"+=0"}),e.ignoreCheck=function(Q){return Qs&&Q.type==="touchmove"&&B()||M>1.05&&Q.type!=="touchstart"||c.isGesturing||Q.touches&&Q.touches.length>1},e.onPress=function(){T=!1;var Q=M;M=bu((It.visualViewport&&It.visualViewport.scale||1)/y),j.pause(),Q!==M&&Dp(d,M>1.01?!0:n?!1:"x"),K=E(),se=v(),C(),b=ta},e.onRelease=e.onGestureStart=function(Q,H){if(v.offset&&w(),!H)ce.restart(!0);else{Ut.cache++;var le=R(),N,k;n&&(N=E(),k=N+le*.05*-Q.velocityX/.227,le*=Mx(E,N,k,$r(d,yi)),j.vars.scrollX=D(k)),N=v(),k=N+le*.05*-Q.velocityY/.227,le*=Mx(v,N,k,$r(d,Un)),j.vars.scrollY=O(k),j.invalidate().duration(le).play(.01),(Qs&&j.vars.scrollY>=f||N>=f-1)&&qe.to({},{onUpdate:ee,duration:le})}u&&u(Q)},e.onWheel=function(){j._ts&&j.pause(),si()-x>1e3&&(b=0,x=si())},e.onChange=function(Q,H,le,N,k){if(ta!==b&&C(),H&&n&&E(D(N[2]===H?K+(Q.startX-Q.x):E()+H-N[1])),le){v.offset&&w();var oe=k[2]===le,Ne=oe?se+Q.startY-Q.y:v()+le-k[1],Z=O(Ne);oe&&Ne!==Z&&(se+=Z-Ne),v(Z)}(le||H)&&ys()},e.onEnable=function(){Dp(d,n?!1:"x"),Pt.addEventListener("refresh",ee),Gn(It,"resize",ee),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=E.smooth=!1),F.enable()},e.onDisable=function(){Dp(d,!0),Vn(It,"resize",ee),Pt.removeEventListener("refresh",ee),F.kill()},e.lockAxis=e.lockAxis!==!1,c=new wn(e),c.iOS=Qs,Qs&&!v()&&v(1),Qs&&qe.ticker.add(Wr),ce=c._dc,j=qe.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:rM(v,v(),function(){return j.pause()})},onUpdate:ys,onComplete:ce.vars.onComplete}),c};Pt.sort=function(o){if(ai(o))return bt.sort(o);var e=It.pageYOffset||0;return Pt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+It.innerHeight}),bt.sort(o||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Pt.observe=function(o){return new wn(o)};Pt.normalizeScroll=function(o){if(typeof o>"u")return _i;if(o===!0&&_i)return _i.enable();if(o===!1){_i&&_i.kill(),_i=o;return}var e=o instanceof wn?o:mw(o);return _i&&_i.target===e.target&&_i.kill(),na(e.target)&&(_i=e),e};Pt.core={_getVelocityProp:Cm,_inputObserver:sM,_scrollers:Ut,_proxies:Qr,bridge:{ss:function(){Sr||ra("scrollStart"),Sr=si()},ref:function(){return ri}}};jS()&&qe.registerPlugin(Pt);var wx="1.3.27";function oM(o,e,t){return Math.max(o,Math.min(e,t))}function gw(o,e,t){return(1-t)*o+t*e}function _w(o,e,t,n){return gw(o,e,1-Math.exp(-t*n))}function vw(o,e){return(o%e+e)%e}var xw=class{constructor(){nt(this,"isRunning",!1);nt(this,"value",0);nt(this,"from",0);nt(this,"to",0);nt(this,"currentTime",0);nt(this,"lerp");nt(this,"duration");nt(this,"easing");nt(this,"onUpdate")}advance(o){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=o;const n=oM(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=_w(this.value,this.to,this.lerp*60,o),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(o,e,{lerp:t,duration:n,easing:r,onStart:a,onUpdate:u}){this.from=this.value=o,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=u}};function yw(o,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,o.apply(this,n)},e)}}var Sw=class{constructor(o,e,{autoResize:t=!0,debounce:n=250}={}){nt(this,"width",0);nt(this,"height",0);nt(this,"scrollHeight",0);nt(this,"scrollWidth",0);nt(this,"debouncedResize");nt(this,"wrapperResizeObserver");nt(this,"contentResizeObserver");nt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});nt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});nt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=o,this.content=e,t&&(this.debouncedResize=yw(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var o,e;(o=this.wrapperResizeObserver)==null||o.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},aM=class{constructor(){nt(this,"events",{})}emit(o,...e){var n;const t=this.events[o]||[];for(let r=0,a=t.length;r<a;r++)(n=t[r])==null||n.call(t,...e)}on(o,e){return this.events[o]?this.events[o].push(e):this.events[o]=[e],()=>{var t;this.events[o]=(t=this.events[o])==null?void 0:t.filter(n=>e!==n)}}off(o,e){var t;this.events[o]=(t=this.events[o])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Mw=100/6,Xs={passive:!1};function Ax(o,e){return o===1?Mw:o===2?e:1}var Ew=class{constructor(o,e={wheelMultiplier:1,touchMultiplier:1}){nt(this,"touchStart",{x:0,y:0});nt(this,"lastDelta",{x:0,y:0});nt(this,"window",{width:0,height:0});nt(this,"emitter",new aM);nt(this,"onTouchStart",o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:o})});nt(this,"onTouchMove",o=>{const{clientX:e,clientY:t}=o.targetTouches?o.targetTouches[0]:o,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:o})});nt(this,"onTouchEnd",o=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})});nt(this,"onWheel",o=>{let{deltaX:e,deltaY:t,deltaMode:n}=o;const r=Ax(n,this.window.width),a=Ax(n,this.window.height);e*=r,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:o})});nt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=o,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Xs),this.element.addEventListener("touchstart",this.onTouchStart,Xs),this.element.addEventListener("touchmove",this.onTouchMove,Xs),this.element.addEventListener("touchend",this.onTouchEnd,Xs)}on(o,e){return this.emitter.on(o,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Xs),this.element.removeEventListener("touchstart",this.onTouchStart,Xs),this.element.removeEventListener("touchmove",this.onTouchMove,Xs),this.element.removeEventListener("touchend",this.onTouchEnd,Xs)}};const Cx=o=>Math.min(1,1.001-2**(-10*o));var Tw=class{constructor({wrapper:o=window,content:e=document.documentElement,eventsTarget:t=o,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:a=.075,touchInertiaExponent:u=1.7,duration:c,easing:f,lerp:d=.1,infinite:p=!1,orientation:_="vertical",gestureOrientation:g=_==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:E=1,autoResize:M=!0,prevent:y,virtualScroll:x,overscroll:R=!0,autoRaf:b=!1,anchors:T=!1,autoToggle:F=!1,allowNestedScroll:U=!1,__experimental__naiveDimensions:D=!1,naiveDimensions:O=D,stopInertiaOnNavigate:C=!1,respectReducedMotion:w=!0}={}){nt(this,"_isScrolling",!1);nt(this,"_isStopped",!1);nt(this,"_isLocked",!1);nt(this,"_preventNextNativeScrollEvent",!1);nt(this,"_resetVelocityTimeout",null);nt(this,"_rafId",null);nt(this,"_isDraggingSelection",!1);nt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));nt(this,"isTouching");nt(this,"isIos");nt(this,"time",0);nt(this,"userData",{});nt(this,"lastVelocity",0);nt(this,"velocity",0);nt(this,"direction",0);nt(this,"options");nt(this,"targetScroll");nt(this,"animatedScroll");nt(this,"animate",new xw);nt(this,"emitter",new aM);nt(this,"dimensions");nt(this,"virtualScroll");nt(this,"onScrollEnd",o=>{o instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&o.stopPropagation()});nt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});nt(this,"onTransitionEnd",o=>{var e;(e=o.propertyName)!=null&&e.includes("overflow")&&o.target===this.rootElement&&this.checkOverflow()});nt(this,"onClick",o=>{const e=o.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(n.hash);this.scrollTo(a,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});nt(this,"onPointerDown",o=>{o.button===1&&this.reset()});nt(this,"onVirtualScroll",o=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(o)===!1)return;const{deltaX:e,deltaY:t,event:n}=o;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),a=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const u=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||c)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const d=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(f.find(E=>{var M,y,x,R,b;return E instanceof HTMLElement&&(typeof d=="function"&&(d==null?void 0:d(E))||((M=E.hasAttribute)==null?void 0:M.call(E,"data-lenis-prevent"))||p==="vertical"&&((y=E.hasAttribute)==null?void 0:y.call(E,"data-lenis-prevent-vertical"))||p==="horizontal"&&((x=E.hasAttribute)==null?void 0:x.call(E,"data-lenis-prevent-horizontal"))||r&&((R=E.hasAttribute)==null?void 0:R.call(E,"data-lenis-prevent-touch"))||a&&((b=E.hasAttribute)==null?void 0:b.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let _=t;this.options.gestureOrientation==="both"?_=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(_=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const g=r&&this.options.syncTouch,v=r&&n.type==="touchend";v&&(_=Math.sign(_)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+_,{programmatic:!1,...g?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});nt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const o=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-o,this.direction=Math.sign(this.animatedScroll-o),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});nt(this,"raf",o=>{const e=o-(this.time||o);this.time=o,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=wx,window.lenis||(window.lenis={}),window.lenis.version=wx,_==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!o||o===document.documentElement)&&(o=window),typeof c=="number"&&typeof f!="function"?f=Cx:typeof f=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:o,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:a,touchInertiaExponent:u,duration:c,easing:f,lerp:d,infinite:p,gestureOrientation:g,orientation:_,touchMultiplier:v,wheelMultiplier:E,autoResize:M,prevent:y,virtualScroll:x,overscroll:R,autoRaf:b,anchors:T,autoToggle:F,allowNestedScroll:U,naiveDimensions:O,stopInertiaOnNavigate:C,respectReducedMotion:w},this.dimensions=new Sw(o,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ew(t,{touchMultiplier:v,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(o,e){return this.emitter.on(o,e)}off(o,e){return this.emitter.off(o,e)}get overflow(){const o=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[o]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(o){this.isHorizontal?this.options.wrapper.scrollTo({left:o,behavior:"instant"}):this.options.wrapper.scrollTo({top:o,behavior:"instant"})}isTouchOnSelectionHandle(o){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=o.targetTouches[0]??o.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],a=n[n.length-1],u=40,c=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=u,f=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=u;return c||f}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(o,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:a=r?this.options.lerp:void 0,duration:u=r?this.options.duration:void 0,easing:c=r?this.options.easing:void 0,onStart:f,onComplete:d,force:p=!1,userData:_}={}){if(this.prefersReducedMotion&&(r?t=!0:(a=1,u=void 0,c=void 0)),(this.isStopped||this.isLocked)&&!p)return;let g=o,v=e;if(typeof g=="string"&&["top","left","start","#"].includes(g))g=0;else if(typeof g=="string"&&["bottom","right","end"].includes(g))g=this.limit;else{let E=null;if(typeof g=="string"?(E=g.startsWith("#")?document.getElementById(g.slice(1)):document.querySelector(g),E||(g==="#top"?g=0:console.warn("Lenis: Target not found",g))):g instanceof Element&&(E=g),E){if(this.options.wrapper!==window){const T=this.rootElement.getBoundingClientRect();v-=this.isHorizontal?T.left:T.top}const M=E.getBoundingClientRect(),y=getComputedStyle(E),x=this.isHorizontal?Number.parseFloat(y.scrollMarginLeft):Number.parseFloat(y.scrollMarginTop),R=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(R.scrollPaddingLeft):Number.parseFloat(R.scrollPaddingTop);g=(this.isHorizontal?M.left:M.top)+this.animatedScroll-(Number.isNaN(x)?0:x)-(Number.isNaN(b)?0:b)}}if(typeof g=="number"){if(g+=v,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const E=g-this.animatedScroll;E>this.limit/2?g-=this.limit:E<-this.limit/2&&(g+=this.limit)}}else g=oM(0,g,this.limit);if(g===this.targetScroll){f==null||f(this),d==null||d(this);return}if(this.userData=_??{},t){this.animatedScroll=this.targetScroll=g,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=g),typeof u=="number"&&typeof c!="function"?c=Cx:typeof c=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,g,{duration:u,easing:c,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",f==null||f(this)},onUpdate:(E,M)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),r&&(this.targetScroll=E),M||this.emit(),M&&(this.reset(),this.emit(),d==null||d(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(o,{deltaX:e,deltaY:t}){const n=Date.now();o._lenis||(o._lenis={});const r=o._lenis;let a,u,c,f,d,p,_,g,v,E;if(n-(r.time??0)>2e3){r.time=Date.now();const U=window.getComputedStyle(o);if(r.computedStyle=U,a=["auto","overlay","scroll"].includes(U.overflowX),u=["auto","overlay","scroll"].includes(U.overflowY),d=["auto"].includes(U.overscrollBehaviorX),p=["auto"].includes(U.overscrollBehaviorY),r.hasOverflowX=a,r.hasOverflowY=u,!(a||u))return!1;_=o.scrollWidth,g=o.scrollHeight,v=o.clientWidth,E=o.clientHeight,c=_>v,f=g>E,r.isScrollableX=c,r.isScrollableY=f,r.scrollWidth=_,r.scrollHeight=g,r.clientWidth=v,r.clientHeight=E,r.hasOverscrollBehaviorX=d,r.hasOverscrollBehaviorY=p}else c=r.isScrollableX,f=r.isScrollableY,a=r.hasOverflowX,u=r.hasOverflowY,_=r.scrollWidth,g=r.scrollHeight,v=r.clientWidth,E=r.clientHeight,d=r.hasOverscrollBehaviorX,p=r.hasOverscrollBehaviorY;if(!(a&&c||u&&f))return!1;const M=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let y,x,R,b,T,F;if(M==="horizontal")y=Math.round(o.scrollLeft),x=_-v,R=e,b=a,T=c,F=d;else if(M==="vertical")y=Math.round(o.scrollTop),x=g-E,R=t,b=u,T=f,F=p;else return!1;return!F&&(y>=x||y<=0)?!0:(R>0?y<x:y>0)&&b&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const o=this.options.wrapper;return this.isHorizontal?o.scrollX??o.scrollLeft:o.scrollY??o.scrollTop}get scroll(){return this.options.infinite?vw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(o){this._isScrolling!==o&&(this._isScrolling=o,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(o){this._isStopped!==o&&(this._isStopped=o,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(o){this._isLocked!==o&&(this._isLocked=o,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let o="lenis";return this.options.autoToggle&&(o+=" lenis-autoToggle"),this.isStopped&&(o+=" lenis-stopped"),this.isLocked&&(o+=" lenis-locked"),this.isScrolling&&(o+=" lenis-scrolling"),this.isScrolling==="smooth"&&(o+=" lenis-smooth"),o}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(o=>{this.rootElement.classList.add(o)})}cleanUpClassName(){for(const o of Array.from(this.rootElement.classList))(o==="lenis"||o.startsWith("lenis-"))&&this.rootElement.classList.remove(o)}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qg="170",ww=0,Rx=1,Aw=2,lM=1,Cw=2,ps=3,go=0,Si=1,Ur=2,lo=0,ml=1,Um=2,bx=3,Px=4,Rw=5,Go=100,bw=101,Pw=102,Dw=103,Lw=104,Nw=200,Iw=201,Uw=202,Fw=203,Fm=204,Om=205,Ow=206,kw=207,zw=208,Bw=209,Hw=210,Vw=211,Gw=212,Ww=213,Xw=214,km=0,zm=1,Bm=2,Tl=3,Hm=4,Vm=5,Gm=6,Wm=7,uM=0,Yw=1,jw=2,uo=0,qw=1,$w=2,Kw=3,Zw=4,Qw=5,Jw=6,eA=7,cM=300,wl=301,Al=302,Xm=303,Ym=304,Nh=306,jm=1e3,jo=1001,qm=1002,er=1003,tA=1004,Ef=1005,Kr=1006,Lp=1007,qo=1008,Ts=1009,fM=1010,hM=1011,nc=1012,Jg=1013,sa=1014,Zr=1015,rc=1016,e_=1017,t_=1018,Cl=1020,dM=35902,pM=1021,mM=1022,Fr=1023,gM=1024,_M=1025,gl=1026,Rl=1027,n_=1028,i_=1029,vM=1030,r_=1031,s_=1033,lh=33776,uh=33777,ch=33778,fh=33779,$m=35840,Km=35841,Zm=35842,Qm=35843,Jm=36196,eg=37492,tg=37496,ng=37808,ig=37809,rg=37810,sg=37811,og=37812,ag=37813,lg=37814,ug=37815,cg=37816,fg=37817,hg=37818,dg=37819,pg=37820,mg=37821,hh=36492,gg=36494,_g=36495,xM=36283,vg=36284,xg=36285,yg=36286,nA=3200,iA=3201,yM=0,rA=1,Js="",pr="srgb",la="srgb-linear",Ih="linear",Qt="srgb",Oa=7680,Dx=519,sA=512,oA=513,aA=514,SM=515,lA=516,uA=517,cA=518,fA=519,Sg=35044,Lx="300 es",xs=2e3,Ah=2001;class Dl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Np=Math.PI/180,Mg=180/Math.PI;function co(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ni[o&255]+ni[o>>8&255]+ni[o>>16&255]+ni[o>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[n&255]+ni[n>>8&255]+ni[n>>16&255]+ni[n>>24&255]).toLowerCase()}function Pi(o,e,t){return Math.max(e,Math.min(t,o))}function hA(o,e){return(o%e+e)%e}function Ip(o,e,t){return(1-t)*o+t*e}function jr(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,n,r,a,u,c,f,d){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,f,d)}set(e,t,n,r,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[3],f=n[6],d=n[1],p=n[4],_=n[7],g=n[2],v=n[5],E=n[8],M=r[0],y=r[3],x=r[6],R=r[1],b=r[4],T=r[7],F=r[2],U=r[5],D=r[8];return a[0]=u*M+c*R+f*F,a[3]=u*y+c*b+f*U,a[6]=u*x+c*T+f*D,a[1]=d*M+p*R+_*F,a[4]=d*y+p*b+_*U,a[7]=d*x+p*T+_*D,a[2]=g*M+v*R+E*F,a[5]=g*y+v*b+E*U,a[8]=g*x+v*T+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-n*a*p+n*c*f+r*a*d-r*u*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=p*u-c*d,g=c*f-p*a,v=d*a-u*f,E=t*_+n*g+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(r*d-p*n)*M,e[2]=(c*n-r*u)*M,e[3]=g*M,e[4]=(p*t-r*f)*M,e[5]=(r*a-c*t)*M,e[6]=v*M,e[7]=(n*f-d*t)*M,e[8]=(u*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(n*f,n*d,-n*(f*u+d*c)+u+e,-r*d,r*f,-r*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Up.makeScale(e,t)),this}rotate(e){return this.premultiply(Up.makeRotation(-e)),this}translate(e,t){return this.premultiply(Up.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Up=new wt;function MM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ch(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dA(){const o=Ch("canvas");return o.style.display="block",o}const Nx={};function Lu(o){o in Nx||(Nx[o]=!0,console.warn(o))}function pA(o,e,t){return new Promise(function(n,r){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function mA(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gA(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ht={enabled:!0,workingColorSpace:la,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qt&&(o.r=Ss(o.r),o.g=Ss(o.g),o.b=Ss(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qt&&(o.r=_l(o.r),o.g=_l(o.g),o.b=_l(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Js?Ih:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Ss(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _l(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ix=[.64,.33,.3,.6,.15,.06],Ux=[.2126,.7152,.0722],Fx=[.3127,.329],Ox=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kx=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ht.define({[la]:{primaries:Ix,whitePoint:Fx,transfer:Ih,toXYZ:Ox,fromXYZ:kx,luminanceCoefficients:Ux,workingColorSpaceConfig:{unpackColorSpace:pr},outputColorSpaceConfig:{drawingBufferColorSpace:pr}},[pr]:{primaries:Ix,whitePoint:Fx,transfer:Qt,toXYZ:Ox,fromXYZ:kx,luminanceCoefficients:Ux,outputColorSpaceConfig:{drawingBufferColorSpace:pr}}});let ka;class _A{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ka===void 0&&(ka=Ch("canvas")),ka.width=e.width,ka.height=e.height;const n=ka.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ka}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ch("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=Ss(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vA=0;class EM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(Fp(r[u].image)):a.push(Fp(r[u]))}else a=Fp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Fp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_A.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xA=0;class ui extends Dl{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,n=jo,r=jo,a=Kr,u=qo,c=Fr,f=Ts,d=ui.DEFAULT_ANISOTROPY,p=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=co(),this.name="",this.source=new EM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jm:e.x=e.x-Math.floor(e.x);break;case jo:e.x=e.x<0?0:1;break;case qm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jm:e.y=e.y-Math.floor(e.y);break;case jo:e.y=e.y<0?0:1;break;case qm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=cM;ui.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,t=0,n=0,r=1){yn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,d=f[0],p=f[4],_=f[8],g=f[1],v=f[5],E=f[9],M=f[2],y=f[6],x=f[10];if(Math.abs(p-g)<.01&&Math.abs(_-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+M)<.1&&Math.abs(E+y)<.1&&Math.abs(d+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,T=(v+1)/2,F=(x+1)/2,U=(p+g)/4,D=(_+M)/4,O=(E+y)/4;return b>T&&b>F?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=U/n,a=D/n):T>F?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=U/r,a=O/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=D/a,r=O/a),this.set(n,r,a,t),this}let R=Math.sqrt((y-E)*(y-E)+(_-M)*(_-M)+(g-p)*(g-p));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(_-M)/R,this.z=(g-p)/R,this.w=Math.acos((d+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yA extends Dl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yn(0,0,e,t),this.scissorTest=!1,this.viewport=new yn(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ui(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new EM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends yA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class TM extends ui{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=er,this.minFilter=er,this.wrapR=jo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SA extends ui{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=er,this.minFilter=er,this.wrapR=jo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sc{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,u,c){let f=n[r+0],d=n[r+1],p=n[r+2],_=n[r+3];const g=a[u+0],v=a[u+1],E=a[u+2],M=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=g,e[t+1]=v,e[t+2]=E,e[t+3]=M;return}if(_!==M||f!==g||d!==v||p!==E){let y=1-c;const x=f*g+d*v+p*E+_*M,R=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const F=Math.sqrt(b),U=Math.atan2(F,x*R);y=Math.sin(y*U)/F,c=Math.sin(c*U)/F}const T=c*R;if(f=f*y+g*T,d=d*y+v*T,p=p*y+E*T,_=_*y+M*T,y===1-c){const F=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=F,d*=F,p*=F,_*=F}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,a,u){const c=n[r],f=n[r+1],d=n[r+2],p=n[r+3],_=a[u],g=a[u+1],v=a[u+2],E=a[u+3];return e[t]=c*E+p*_+f*v-d*g,e[t+1]=f*E+p*g+d*_-c*v,e[t+2]=d*E+p*v+c*g-f*_,e[t+3]=p*E-c*_-f*g-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(n/2),p=c(r/2),_=c(a/2),g=f(n/2),v=f(r/2),E=f(a/2);switch(u){case"XYZ":this._x=g*p*_+d*v*E,this._y=d*v*_-g*p*E,this._z=d*p*E+g*v*_,this._w=d*p*_-g*v*E;break;case"YXZ":this._x=g*p*_+d*v*E,this._y=d*v*_-g*p*E,this._z=d*p*E-g*v*_,this._w=d*p*_+g*v*E;break;case"ZXY":this._x=g*p*_-d*v*E,this._y=d*v*_+g*p*E,this._z=d*p*E+g*v*_,this._w=d*p*_-g*v*E;break;case"ZYX":this._x=g*p*_-d*v*E,this._y=d*v*_+g*p*E,this._z=d*p*E-g*v*_,this._w=d*p*_+g*v*E;break;case"YZX":this._x=g*p*_+d*v*E,this._y=d*v*_+g*p*E,this._z=d*p*E-g*v*_,this._w=d*p*_-g*v*E;break;case"XZY":this._x=g*p*_-d*v*E,this._y=d*v*_-g*p*E,this._z=d*p*E+g*v*_,this._w=d*p*_+g*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],_=t[10],g=n+c+_;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(a-d)*v,this._z=(u-r)*v}else if(n>c&&n>_){const v=2*Math.sqrt(1+n-c-_);this._w=(p-f)/v,this._x=.25*v,this._y=(r+u)/v,this._z=(a+d)/v}else if(c>_){const v=2*Math.sqrt(1+c-n-_);this._w=(a-d)/v,this._x=(r+u)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+_-n-c);this._w=(u-r)/v,this._x=(a+d)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pi(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=n*p+u*c+r*d-a*f,this._y=r*p+u*f+a*c-n*d,this._z=a*p+u*d+n*f-r*c,this._w=u*p-n*c-r*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=r,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const v=1-t;return this._w=v*u+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,g=Math.sin(t*p)/d;return this._w=u*_+this._w*g,this._x=n*_+this._x*g,this._y=r*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,n=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*r-c*n),p=2*(c*t-a*r),_=2*(a*n-u*t);return this.x=t+f*d+u*_-c*p,this.y=n+f*p+c*d-a*_,this.z=r+f*_+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=r*f-a*c,this.y=a*u-n*f,this.z=n*c-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Op.copy(this).projectOnVector(e),this.sub(Op)}reflect(e){return this.sub(Op.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pi(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Op=new ue,zx=new sc;class ua{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Dr):Dr.fromBufferAttribute(a,u),Dr.applyMatrix4(e.matrixWorld),this.expandByPoint(Dr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tf.copy(n.boundingBox)),Tf.applyMatrix4(e.matrixWorld),this.union(Tf)}const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dr),Dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mu),wf.subVectors(this.max,mu),za.subVectors(e.a,mu),Ba.subVectors(e.b,mu),Ha.subVectors(e.c,mu),Ys.subVectors(Ba,za),js.subVectors(Ha,Ba),Lo.subVectors(za,Ha);let t=[0,-Ys.z,Ys.y,0,-js.z,js.y,0,-Lo.z,Lo.y,Ys.z,0,-Ys.x,js.z,0,-js.x,Lo.z,0,-Lo.x,-Ys.y,Ys.x,0,-js.y,js.x,0,-Lo.y,Lo.x,0];return!kp(t,za,Ba,Ha,wf)||(t=[1,0,0,0,1,0,0,0,1],!kp(t,za,Ba,Ha,wf))?!1:(Af.crossVectors(Ys,js),t=[Af.x,Af.y,Af.z],kp(t,za,Ba,Ha,wf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const us=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Dr=new ue,Tf=new ua,za=new ue,Ba=new ue,Ha=new ue,Ys=new ue,js=new ue,Lo=new ue,mu=new ue,wf=new ue,Af=new ue,No=new ue;function kp(o,e,t,n,r){for(let a=0,u=o.length-3;a<=u;a+=3){No.fromArray(o,a);const c=r.x*Math.abs(No.x)+r.y*Math.abs(No.y)+r.z*Math.abs(No.z),f=e.dot(No),d=t.dot(No),p=n.dot(No);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const MA=new ua,gu=new ue,zp=new ue;class Ll{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):MA.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gu.subVectors(e,this.center);const t=gu.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(gu,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gu.copy(e.center).add(zp)),this.expandByPoint(gu.copy(e.center).sub(zp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cs=new ue,Bp=new ue,Cf=new ue,qs=new ue,Hp=new ue,Rf=new ue,Vp=new ue;class wM{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bp.copy(e).add(t).multiplyScalar(.5),Cf.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(Bp);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Cf),c=qs.dot(this.direction),f=-qs.dot(Cf),d=qs.lengthSq(),p=Math.abs(1-u*u);let _,g,v,E;if(p>0)if(_=u*f-c,g=u*c-f,E=a*p,_>=0)if(g>=-E)if(g<=E){const M=1/p;_*=M,g*=M,v=_*(_+u*g+2*c)+g*(u*_+g+2*f)+d}else g=a,_=Math.max(0,-(u*g+c)),v=-_*_+g*(g+2*f)+d;else g=-a,_=Math.max(0,-(u*g+c)),v=-_*_+g*(g+2*f)+d;else g<=-E?(_=Math.max(0,-(-u*a+c)),g=_>0?-a:Math.min(Math.max(-a,-f),a),v=-_*_+g*(g+2*f)+d):g<=E?(_=0,g=Math.min(Math.max(-a,-f),a),v=g*(g+2*f)+d):(_=Math.max(0,-(u*a+c)),g=_>0?a:Math.min(Math.max(-a,-f),a),v=-_*_+g*(g+2*f)+d);else g=u>0?-a:a,_=Math.max(0,-(u*g+c)),v=-_*_+g*(g+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Bp).addScaledVector(Cf,g),v}intersectSphere(e,t){cs.subVectors(e.center,this.origin);const n=cs.dot(this.direction),r=cs.dot(cs)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,f=n+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(n=(e.min.x-g.x)*d,r=(e.max.x-g.x)*d):(n=(e.max.x-g.x)*d,r=(e.min.x-g.x)*d),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),_>=0?(c=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(c=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,n,r,a){Hp.subVectors(t,e),Rf.subVectors(n,e),Vp.crossVectors(Hp,Rf);let u=this.direction.dot(Vp),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;qs.subVectors(this.origin,e);const f=c*this.direction.dot(Rf.crossVectors(qs,Rf));if(f<0)return null;const d=c*this.direction.dot(Hp.cross(qs));if(d<0||f+d>u)return null;const p=-c*qs.dot(Vp);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,n,r,a,u,c,f,d,p,_,g,v,E,M,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,f,d,p,_,g,v,E,M,y)}set(e,t,n,r,a,u,c,f,d,p,_,g,v,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=a,x[5]=u,x[9]=c,x[13]=f,x[2]=d,x[6]=p,x[10]=_,x[14]=g,x[3]=v,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Va.setFromMatrixColumn(e,0).length(),a=1/Va.setFromMatrixColumn(e,1).length(),u=1/Va.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=u*p,v=u*_,E=c*p,M=c*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=v+E*d,t[5]=g-M*d,t[9]=-c*f,t[2]=M-g*d,t[6]=E+v*d,t[10]=u*f}else if(e.order==="YXZ"){const g=f*p,v=f*_,E=d*p,M=d*_;t[0]=g+M*c,t[4]=E*c-v,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=v*c-E,t[6]=M+g*c,t[10]=u*f}else if(e.order==="ZXY"){const g=f*p,v=f*_,E=d*p,M=d*_;t[0]=g-M*c,t[4]=-u*_,t[8]=E+v*c,t[1]=v+E*c,t[5]=u*p,t[9]=M-g*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const g=u*p,v=u*_,E=c*p,M=c*_;t[0]=f*p,t[4]=E*d-v,t[8]=g*d+M,t[1]=f*_,t[5]=M*d+g,t[9]=v*d-E,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,v=u*d,E=c*f,M=c*d;t[0]=f*p,t[4]=M-g*_,t[8]=E*_+v,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=v*_+E,t[10]=g-M*_}else if(e.order==="XZY"){const g=u*f,v=u*d,E=c*f,M=c*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=g*_+M,t[5]=u*p,t[9]=v*_-E,t[2]=E*_-v,t[6]=c*p,t[10]=M*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EA,e,TA)}lookAt(e,t,n){const r=this.elements;return Vi.subVectors(e,t),Vi.lengthSq()===0&&(Vi.z=1),Vi.normalize(),$s.crossVectors(n,Vi),$s.lengthSq()===0&&(Math.abs(n.z)===1?Vi.x+=1e-4:Vi.z+=1e-4,Vi.normalize(),$s.crossVectors(n,Vi)),$s.normalize(),bf.crossVectors(Vi,$s),r[0]=$s.x,r[4]=bf.x,r[8]=Vi.x,r[1]=$s.y,r[5]=bf.y,r[9]=Vi.y,r[2]=$s.z,r[6]=bf.z,r[10]=Vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[4],f=n[8],d=n[12],p=n[1],_=n[5],g=n[9],v=n[13],E=n[2],M=n[6],y=n[10],x=n[14],R=n[3],b=n[7],T=n[11],F=n[15],U=r[0],D=r[4],O=r[8],C=r[12],w=r[1],B=r[5],j=r[9],K=r[13],se=r[2],ce=r[6],ee=r[10],Q=r[14],H=r[3],le=r[7],N=r[11],k=r[15];return a[0]=u*U+c*w+f*se+d*H,a[4]=u*D+c*B+f*ce+d*le,a[8]=u*O+c*j+f*ee+d*N,a[12]=u*C+c*K+f*Q+d*k,a[1]=p*U+_*w+g*se+v*H,a[5]=p*D+_*B+g*ce+v*le,a[9]=p*O+_*j+g*ee+v*N,a[13]=p*C+_*K+g*Q+v*k,a[2]=E*U+M*w+y*se+x*H,a[6]=E*D+M*B+y*ce+x*le,a[10]=E*O+M*j+y*ee+x*N,a[14]=E*C+M*K+y*Q+x*k,a[3]=R*U+b*w+T*se+F*H,a[7]=R*D+b*B+T*ce+F*le,a[11]=R*O+b*j+T*ee+F*N,a[15]=R*C+b*K+T*Q+F*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],_=e[6],g=e[10],v=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+a*f*_-r*d*_-a*c*g+n*d*g+r*c*v-n*f*v)+M*(+t*f*v-t*d*g+a*u*g-r*u*v+r*d*p-a*f*p)+y*(+t*d*_-t*c*v-a*u*_+n*u*v+a*c*p-n*d*p)+x*(-r*c*p-t*f*_+t*c*g+r*u*_-n*u*g+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=e[9],g=e[10],v=e[11],E=e[12],M=e[13],y=e[14],x=e[15],R=_*y*d-M*g*d+M*f*v-c*y*v-_*f*x+c*g*x,b=E*g*d-p*y*d-E*f*v+u*y*v+p*f*x-u*g*x,T=p*M*d-E*_*d+E*c*v-u*M*v-p*c*x+u*_*x,F=E*_*f-p*M*f-E*c*g+u*M*g+p*c*y-u*_*y,U=t*R+n*b+r*T+a*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=R*D,e[1]=(M*g*a-_*y*a-M*r*v+n*y*v+_*r*x-n*g*x)*D,e[2]=(c*y*a-M*f*a+M*r*d-n*y*d-c*r*x+n*f*x)*D,e[3]=(_*f*a-c*g*a-_*r*d+n*g*d+c*r*v-n*f*v)*D,e[4]=b*D,e[5]=(p*y*a-E*g*a+E*r*v-t*y*v-p*r*x+t*g*x)*D,e[6]=(E*f*a-u*y*a-E*r*d+t*y*d+u*r*x-t*f*x)*D,e[7]=(u*g*a-p*f*a+p*r*d-t*g*d-u*r*v+t*f*v)*D,e[8]=T*D,e[9]=(E*_*a-p*M*a-E*n*v+t*M*v+p*n*x-t*_*x)*D,e[10]=(u*M*a-E*c*a+E*n*d-t*M*d-u*n*x+t*c*x)*D,e[11]=(p*c*a-u*_*a-p*n*d+t*_*d+u*n*v-t*c*v)*D,e[12]=F*D,e[13]=(p*M*r-E*_*r+E*n*g-t*M*g-p*n*y+t*_*y)*D,e[14]=(E*c*r-u*M*r-E*n*f+t*M*f+u*n*y-t*c*y)*D,e[15]=(u*_*r-p*c*r+p*n*f-t*_*f-u*n*g+t*c*g)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+n,d*c-r*f,d*f+r*c,0,d*c+r*f,p*c+n,p*f-r*u,0,d*f-r*c,p*f+r*u,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,_=c+c,g=a*d,v=a*p,E=a*_,M=u*p,y=u*_,x=c*_,R=f*d,b=f*p,T=f*_,F=n.x,U=n.y,D=n.z;return r[0]=(1-(M+x))*F,r[1]=(v+T)*F,r[2]=(E-b)*F,r[3]=0,r[4]=(v-T)*U,r[5]=(1-(g+x))*U,r[6]=(y+R)*U,r[7]=0,r[8]=(E+b)*D,r[9]=(y-R)*D,r[10]=(1-(g+M))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Va.set(r[0],r[1],r[2]).length();const u=Va.set(r[4],r[5],r[6]).length(),c=Va.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Lr.copy(this);const d=1/a,p=1/u,_=1/c;return Lr.elements[0]*=d,Lr.elements[1]*=d,Lr.elements[2]*=d,Lr.elements[4]*=p,Lr.elements[5]*=p,Lr.elements[6]*=p,Lr.elements[8]*=_,Lr.elements[9]*=_,Lr.elements[10]*=_,t.setFromRotationMatrix(Lr),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,r,a,u,c=xs){const f=this.elements,d=2*a/(t-e),p=2*a/(n-r),_=(t+e)/(t-e),g=(n+r)/(n-r);let v,E;if(c===xs)v=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Ah)v=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,u,c=xs){const f=this.elements,d=1/(t-e),p=1/(n-r),_=1/(u-a),g=(t+e)*d,v=(n+r)*p;let E,M;if(c===xs)E=(u+a)*_,M=-2*_;else if(c===Ah)E=a*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-v,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Va=new ue,Lr=new rn,EA=new ue(0,0,0),TA=new ue(1,1,1),$s=new ue,bf=new ue,Vi=new ue,Bx=new rn,Hx=new sc;class ws{constructor(e=0,t=0,n=0,r=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],c=r[8],f=r[1],d=r[5],p=r[9],_=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Pi(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Pi(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pi(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Pi(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Pi(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Pi(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hx.setFromEuler(this),this.setFromQuaternion(Hx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class AM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wA=0;const Vx=new ue,Ga=new sc,fs=new rn,Pf=new ue,_u=new ue,AA=new ue,CA=new sc,Gx=new ue(1,0,0),Wx=new ue(0,1,0),Xx=new ue(0,0,1),Yx={type:"added"},RA={type:"removed"},Wa={type:"childadded",child:null},Gp={type:"childremoved",child:null};class Pn extends Dl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ue,t=new ws,n=new sc,r=new ue(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rn},normalMatrix:{value:new wt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new AM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ga.setFromAxisAngle(e,t),this.quaternion.multiply(Ga),this}rotateOnWorldAxis(e,t){return Ga.setFromAxisAngle(e,t),this.quaternion.premultiply(Ga),this}rotateX(e){return this.rotateOnAxis(Gx,e)}rotateY(e){return this.rotateOnAxis(Wx,e)}rotateZ(e){return this.rotateOnAxis(Xx,e)}translateOnAxis(e,t){return Vx.copy(e).applyQuaternion(this.quaternion),this.position.add(Vx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gx,e)}translateY(e){return this.translateOnAxis(Wx,e)}translateZ(e){return this.translateOnAxis(Xx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pf.copy(e):Pf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_u.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(_u,Pf,this.up):fs.lookAt(Pf,_u,this.up),this.quaternion.setFromRotationMatrix(fs),r&&(fs.extractRotation(r.matrixWorld),Ga.setFromRotationMatrix(fs),this.quaternion.premultiply(Ga.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yx),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RA),Gp.child=e,this.dispatchEvent(Gp),Gp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(fs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yx),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_u,e,AA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_u,CA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),g=u(e.skeletons),v=u(e.animations),E=u(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),E.length>0&&(n.nodes=E)}return n.object=r,n;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new ue(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nr=new ue,hs=new ue,Wp=new ue,ds=new ue,Xa=new ue,Ya=new ue,jx=new ue,Xp=new ue,Yp=new ue,jp=new ue,qp=new yn,$p=new yn,Kp=new yn;class vr{constructor(e=new ue,t=new ue,n=new ue){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nr.subVectors(e,t),r.cross(Nr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Nr.subVectors(r,t),hs.subVectors(n,t),Wp.subVectors(e,t);const u=Nr.dot(Nr),c=Nr.dot(hs),f=Nr.dot(Wp),d=hs.dot(hs),p=hs.dot(Wp),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const g=1/_,v=(d*f-c*p)*g,E=(u*p-c*f)*g;return a.set(1-v-E,E,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ds)===null?!1:ds.x>=0&&ds.y>=0&&ds.x+ds.y<=1}static getInterpolation(e,t,n,r,a,u,c,f){return this.getBarycoord(e,t,n,r,ds)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,ds.x),f.addScaledVector(u,ds.y),f.addScaledVector(c,ds.z),f)}static getInterpolatedAttribute(e,t,n,r,a,u){return qp.setScalar(0),$p.setScalar(0),Kp.setScalar(0),qp.fromBufferAttribute(e,t),$p.fromBufferAttribute(e,n),Kp.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(qp,a.x),u.addScaledVector($p,a.y),u.addScaledVector(Kp,a.z),u}static isFrontFacing(e,t,n,r){return Nr.subVectors(n,t),hs.subVectors(e,t),Nr.cross(hs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nr.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Nr.cross(hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return vr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return vr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,c;Xa.subVectors(r,n),Ya.subVectors(a,n),Xp.subVectors(e,n);const f=Xa.dot(Xp),d=Ya.dot(Xp);if(f<=0&&d<=0)return t.copy(n);Yp.subVectors(e,r);const p=Xa.dot(Yp),_=Ya.dot(Yp);if(p>=0&&_<=p)return t.copy(r);const g=f*_-p*d;if(g<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(n).addScaledVector(Xa,u);jp.subVectors(e,a);const v=Xa.dot(jp),E=Ya.dot(jp);if(E>=0&&v<=E)return t.copy(a);const M=v*d-f*E;if(M<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(n).addScaledVector(Ya,c);const y=p*E-v*_;if(y<=0&&_-p>=0&&v-E>=0)return jx.subVectors(a,r),c=(_-p)/(_-p+(v-E)),t.copy(r).addScaledVector(jx,c);const x=1/(y+M+g);return u=M*x,c=g*x,t.copy(n).addScaledVector(Xa,u).addScaledVector(Ya,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const CM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},Df={h:0,s:0,l:0};function Zp(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=hA(e,1),t=Pi(t,0,1),n=Pi(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Zp(u,a,e+1/3),this.g=Zp(u,a,e),this.b=Zp(u,a,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=pr){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pr){const n=CM[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pr){return Ht.fromWorkingColorSpace(ii.copy(this),e),Math.round(Pi(ii.r*255,0,255))*65536+Math.round(Pi(ii.g*255,0,255))*256+Math.round(Pi(ii.b*255,0,255))}getHexString(e=pr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(ii.copy(this),t);const n=ii.r,r=ii.g,a=ii.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case n:f=(r-a)/_+(r<a?6:0);break;case r:f=(a-n)/_+2;break;case a:f=(n-r)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=pr){Ht.fromWorkingColorSpace(ii.copy(this),e);const t=ii.r,n=ii.g,r=ii.b;return e!==pr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ks),this.setHSL(Ks.h+e,Ks.s+t,Ks.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ks),e.getHSL(Df);const n=Ip(Ks.h,Df.h,t),r=Ip(Ks.s,Df.s,t),a=Ip(Ks.l,Df.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ii=new Ot;Ot.NAMES=CM;let bA=0;class ca extends Dl{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=co(),this.name="",this.blending=ml,this.side=go,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fm,this.blendDst=Om,this.blendEquation=Go,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ml&&(n.blending=this.blending),this.side!==go&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fm&&(n.blendSrc=this.blendSrc),this.blendDst!==Om&&(n.blendDst=this.blendDst),this.blendEquation!==Go&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class o_ extends ca{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.combine=uM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=new ue,Lf=new Ct;class Fi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sg,this.updateRanges=[],this.gpuType=Zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lf.fromBufferAttribute(this,t),Lf.applyMatrix3(e),this.setXY(t,Lf.x,Lf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array),a=Jt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sg&&(e.usage=this.usage),e}}class RM extends Fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bM extends Fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tr extends Fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let PA=0;const hr=new rn,Qp=new Pn,ja=new ue,Gi=new ua,vu=new ua,Hn=new ue;class Mr extends Dl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(MM(e)?bM:RM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new wt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hr.makeRotationFromQuaternion(e),this.applyMatrix4(hr),this}rotateX(e){return hr.makeRotationX(e),this.applyMatrix4(hr),this}rotateY(e){return hr.makeRotationY(e),this.applyMatrix4(hr),this}rotateZ(e){return hr.makeRotationZ(e),this.applyMatrix4(hr),this}translate(e,t,n){return hr.makeTranslation(e,t,n),this.applyMatrix4(hr),this}scale(e,t,n){return hr.makeScale(e,t,n),this.applyMatrix4(hr),this}lookAt(e){return Qp.lookAt(e),Qp.updateMatrix(),this.applyMatrix4(Qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ja).negate(),this.translate(ja.x,ja.y,ja.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new tr(n,3))}else{for(let n=0,r=t.count;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const n=this.boundingSphere.center;if(Gi.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];vu.setFromBufferAttribute(c),this.morphTargetsRelative?(Hn.addVectors(Gi.min,vu.min),Gi.expandByPoint(Hn),Hn.addVectors(Gi.max,vu.max),Gi.expandByPoint(Hn)):(Gi.expandByPoint(vu.min),Gi.expandByPoint(vu.max))}Gi.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)Hn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Hn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)Hn.fromBufferAttribute(c,d),f&&(ja.fromBufferAttribute(e,d),Hn.add(ja)),r=Math.max(r,n.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let O=0;O<n.count;O++)c[O]=new ue,f[O]=new ue;const d=new ue,p=new ue,_=new ue,g=new Ct,v=new Ct,E=new Ct,M=new ue,y=new ue;function x(O,C,w){d.fromBufferAttribute(n,O),p.fromBufferAttribute(n,C),_.fromBufferAttribute(n,w),g.fromBufferAttribute(a,O),v.fromBufferAttribute(a,C),E.fromBufferAttribute(a,w),p.sub(d),_.sub(d),v.sub(g),E.sub(g);const B=1/(v.x*E.y-E.x*v.y);isFinite(B)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(_,-v.y).multiplyScalar(B),y.copy(_).multiplyScalar(v.x).addScaledVector(p,-E.x).multiplyScalar(B),c[O].add(M),c[C].add(M),c[w].add(M),f[O].add(y),f[C].add(y),f[w].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let O=0,C=R.length;O<C;++O){const w=R[O],B=w.start,j=w.count;for(let K=B,se=B+j;K<se;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const b=new ue,T=new ue,F=new ue,U=new ue;function D(O){F.fromBufferAttribute(r,O),U.copy(F);const C=c[O];b.copy(C),b.sub(F.multiplyScalar(F.dot(C))).normalize(),T.crossVectors(U,C);const B=T.dot(f[O])<0?-1:1;u.setXYZW(O,b.x,b.y,b.z,B)}for(let O=0,C=R.length;O<C;++O){const w=R[O],B=w.start,j=w.count;for(let K=B,se=B+j;K<se;K+=3)D(e.getX(K+0)),D(e.getX(K+1)),D(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new ue,a=new ue,u=new ue,c=new ue,f=new ue,d=new ue,p=new ue,_=new ue;if(e)for(let g=0,v=e.count;g<v;g+=3){const E=e.getX(g+0),M=e.getX(g+1),y=e.getX(g+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,y),p.subVectors(u,a),_.subVectors(r,a),p.cross(_),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),c.add(p),f.add(p),d.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),_.subVectors(r,a),p.cross(_),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Hn.fromBufferAttribute(e,t),Hn.normalize(),e.setXYZ(t,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,_=c.normalized,g=new d.constructor(f.length*p);let v=0,E=0;for(let M=0,y=f.length;M<y;M++){c.isInterleavedBufferAttribute?v=f[M]*c.data.stride+c.offset:v=f[M]*p;for(let x=0;x<p;x++)g[E++]=d[v++]}return new Fi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mr,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],d=e(f,n);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,_=d.length;p<_;p++){const g=d[p],v=e(g,n);f.push(v)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,g=d.length;_<g;_++){const v=d[_];p.push(v.toJSON(e.data))}p.length>0&&(r[f]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let g=0,v=_.length;g<v;g++)p.push(_[g].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qx=new rn,Io=new wM,Nf=new Ll,$x=new ue,If=new ue,Uf=new ue,Ff=new ue,Jp=new ue,Of=new ue,Kx=new ue,kf=new ue;class Qi extends Pn{constructor(e=new Mr,t=new o_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Of.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],_=a[f];p!==0&&(Jp.fromBufferAttribute(_,e),u?Of.addScaledVector(Jp,p):Of.addScaledVector(Jp.sub(t),p))}t.add(Of)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nf.copy(n.boundingSphere),Nf.applyMatrix4(a),Io.copy(e.ray).recast(e.near),!(Nf.containsPoint(Io.origin)===!1&&(Io.intersectSphere(Nf,$x)===null||Io.origin.distanceToSquared($x)>(e.far-e.near)**2))&&(qx.copy(a).invert(),Io.copy(e.ray).applyMatrix4(qx),!(n.boundingBox!==null&&Io.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Io)))}_computeIntersections(e,t,n){let r;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=u[y.materialIndex],R=Math.max(y.start,v.start),b=Math.min(c.count,Math.min(y.start+y.count,v.start+v.count));for(let T=R,F=b;T<F;T+=3){const U=c.getX(T),D=c.getX(T+1),O=c.getX(T+2);r=zf(this,x,e,n,d,p,_,U,D,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let y=E,x=M;y<x;y+=3){const R=c.getX(y),b=c.getX(y+1),T=c.getX(y+2);r=zf(this,u,e,n,d,p,_,R,b,T),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=u[y.materialIndex],R=Math.max(y.start,v.start),b=Math.min(f.count,Math.min(y.start+y.count,v.start+v.count));for(let T=R,F=b;T<F;T+=3){const U=T,D=T+1,O=T+2;r=zf(this,x,e,n,d,p,_,U,D,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(f.count,v.start+v.count);for(let y=E,x=M;y<x;y+=3){const R=y,b=y+1,T=y+2;r=zf(this,u,e,n,d,p,_,R,b,T),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function DA(o,e,t,n,r,a,u,c){let f;if(e.side===Si?f=n.intersectTriangle(u,a,r,!0,c):f=n.intersectTriangle(r,a,u,e.side===go,c),f===null)return null;kf.copy(c),kf.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(kf);return d<t.near||d>t.far?null:{distance:d,point:kf.clone(),object:o}}function zf(o,e,t,n,r,a,u,c,f,d){o.getVertexPosition(c,If),o.getVertexPosition(f,Uf),o.getVertexPosition(d,Ff);const p=DA(o,e,t,n,If,Uf,Ff,Kx);if(p){const _=new ue;vr.getBarycoord(Kx,If,Uf,Ff,_),r&&(p.uv=vr.getInterpolatedAttribute(r,c,f,d,_,new Ct)),a&&(p.uv1=vr.getInterpolatedAttribute(a,c,f,d,_,new Ct)),u&&(p.normal=vr.getInterpolatedAttribute(u,c,f,d,_,new ue),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:f,c:d,normal:new ue,materialIndex:0};vr.getNormal(If,Uf,Ff,g.normal),p.face=g,p.barycoord=_}return p}class oc extends Mr{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],_=[];let g=0,v=0;E("z","y","x",-1,-1,n,t,e,u,a,0),E("z","y","x",1,-1,n,t,-e,u,a,1),E("x","z","y",1,1,e,n,t,r,u,2),E("x","z","y",1,-1,e,n,-t,r,u,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new tr(d,3)),this.setAttribute("normal",new tr(p,3)),this.setAttribute("uv",new tr(_,2));function E(M,y,x,R,b,T,F,U,D,O,C){const w=T/D,B=F/O,j=T/2,K=F/2,se=U/2,ce=D+1,ee=O+1;let Q=0,H=0;const le=new ue;for(let N=0;N<ee;N++){const k=N*B-K;for(let oe=0;oe<ce;oe++){const Ne=oe*w-j;le[M]=Ne*R,le[y]=k*b,le[x]=se,d.push(le.x,le.y,le.z),le[M]=0,le[y]=0,le[x]=U>0?1:-1,p.push(le.x,le.y,le.z),_.push(oe/D),_.push(1-N/O),Q+=1}}for(let N=0;N<O;N++)for(let k=0;k<D;k++){const oe=g+k+ce*N,Ne=g+k+ce*(N+1),Z=g+(k+1)+ce*(N+1),X=g+(k+1)+ce*N;f.push(oe,Ne,X),f.push(Ne,Z,X),H+=6}c.addGroup(v,H,C),v+=H,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bl(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const r=o[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function gi(o){const e={};for(let t=0;t<o.length;t++){const n=bl(o[t]);for(const r in n)e[r]=n[r]}return e}function LA(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function PM(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const NA={clone:bl,merge:gi};var IA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends ca{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IA,this.fragmentShader=UA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bl(e.uniforms),this.uniformsGroups=LA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class DM extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=xs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zs=new ue,Zx=new Ct,Qx=new Ct;class _r extends DM{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Np*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mg*2*Math.atan(Math.tan(Np*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z)}getViewSize(e,t){return this.getViewBounds(e,Zx,Qx),t.subVectors(Qx,Zx)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Np*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*r/f,t-=u.offsetY*n/d,r*=u.width/f,n*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qa=-90,$a=1;class FA extends Pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _r(qa,$a,e,t);r.layers=this.layers,this.add(r);const a=new _r(qa,$a,e,t);a.layers=this.layers,this.add(a);const u=new _r(qa,$a,e,t);u.layers=this.layers,this.add(u);const c=new _r(qa,$a,e,t);c.layers=this.layers,this.add(c);const f=new _r(qa,$a,e,t);f.layers=this.layers,this.add(f);const d=new _r(qa,$a,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===xs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ah)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,u),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(_,g,v),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class LM extends ui{constructor(e,t,n,r,a,u,c,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:wl,super(e,t,n,r,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OA extends oa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new LM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oc(5,5,5),a=new Or({name:"CubemapFromEquirect",uniforms:bl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Si,blending:lo});a.uniforms.tEquirect.value=t;const u=new Qi(r,a),c=t.minFilter;return t.minFilter===qo&&(t.minFilter=Kr),new FA(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}const em=new ue,kA=new ue,zA=new wt;class Ho{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=em.subVectors(n,t).cross(kA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(em),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zA.getNormalMatrix(e),r=this.coplanarPoint(em).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Uo=new Ll,Bf=new ue;class a_{constructor(e=new Ho,t=new Ho,n=new Ho,r=new Ho,a=new Ho,u=new Ho){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xs){const n=this.planes,r=e.elements,a=r[0],u=r[1],c=r[2],f=r[3],d=r[4],p=r[5],_=r[6],g=r[7],v=r[8],E=r[9],M=r[10],y=r[11],x=r[12],R=r[13],b=r[14],T=r[15];if(n[0].setComponents(f-a,g-d,y-v,T-x).normalize(),n[1].setComponents(f+a,g+d,y+v,T+x).normalize(),n[2].setComponents(f+u,g+p,y+E,T+R).normalize(),n[3].setComponents(f-u,g-p,y-E,T-R).normalize(),n[4].setComponents(f-c,g-_,y-M,T-b).normalize(),t===xs)n[5].setComponents(f+c,g+_,y+M,T+b).normalize();else if(t===Ah)n[5].setComponents(c,_,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Uo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Uo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Uo)}intersectsSprite(e){return Uo.center.set(0,0,0),Uo.radius=.7071067811865476,Uo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Uo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bf.x=r.normal.x>0?e.max.x:e.min.x,Bf.y=r.normal.y>0?e.max.y:e.min.y,Bf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function NM(){let o=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function BA(o){const e=new WeakMap;function t(c,f){const d=c.array,p=c.usage,_=d.byteLength,g=o.createBuffer();o.bindBuffer(f,g),o.bufferData(f,d,p),c.onUploadCallback();let v;if(d instanceof Float32Array)v=o.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=o.SHORT;else if(d instanceof Uint32Array)v=o.UNSIGNED_INT;else if(d instanceof Int32Array)v=o.INT;else if(d instanceof Int8Array)v=o.BYTE;else if(d instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function n(c,f,d){const p=f.array,_=f.updateRanges;if(o.bindBuffer(d,c),_.length===0)o.bufferSubData(d,0,p);else{_.sort((v,E)=>v.start-E.start);let g=0;for(let v=1;v<_.length;v++){const E=_[g],M=_[v];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,_[g]=M)}_.length=g+1;for(let v=0,E=_.length;v<E;v++){const M=_[v];o.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(o.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,f),d.version=c.version}}return{get:r,remove:a,update:u}}class Pl extends Mr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,c=Math.floor(n),f=Math.floor(r),d=c+1,p=f+1,_=e/c,g=t/f,v=[],E=[],M=[],y=[];for(let x=0;x<p;x++){const R=x*g-u;for(let b=0;b<d;b++){const T=b*_-a;E.push(T,-R,0),M.push(0,0,1),y.push(b/c),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let R=0;R<c;R++){const b=R+d*x,T=R+d*(x+1),F=R+1+d*(x+1),U=R+1+d*x;v.push(b,T,U),v.push(T,F,U)}this.setIndex(v),this.setAttribute("position",new tr(E,3)),this.setAttribute("normal",new tr(M,3)),this.setAttribute("uv",new tr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.widthSegments,e.heightSegments)}}var HA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$A=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,KA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_C="gl_FragColor = linearToOutputTexel( gl_FragColor );",vC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$C=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$R=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ab=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,At={alphahash_fragment:HA,alphahash_pars_fragment:VA,alphamap_fragment:GA,alphamap_pars_fragment:WA,alphatest_fragment:XA,alphatest_pars_fragment:YA,aomap_fragment:jA,aomap_pars_fragment:qA,batching_pars_vertex:$A,batching_vertex:KA,begin_vertex:ZA,beginnormal_vertex:QA,bsdfs:JA,iridescence_fragment:eC,bumpmap_pars_fragment:tC,clipping_planes_fragment:nC,clipping_planes_pars_fragment:iC,clipping_planes_pars_vertex:rC,clipping_planes_vertex:sC,color_fragment:oC,color_pars_fragment:aC,color_pars_vertex:lC,color_vertex:uC,common:cC,cube_uv_reflection_fragment:fC,defaultnormal_vertex:hC,displacementmap_pars_vertex:dC,displacementmap_vertex:pC,emissivemap_fragment:mC,emissivemap_pars_fragment:gC,colorspace_fragment:_C,colorspace_pars_fragment:vC,envmap_fragment:xC,envmap_common_pars_fragment:yC,envmap_pars_fragment:SC,envmap_pars_vertex:MC,envmap_physical_pars_fragment:NC,envmap_vertex:EC,fog_vertex:TC,fog_pars_vertex:wC,fog_fragment:AC,fog_pars_fragment:CC,gradientmap_pars_fragment:RC,lightmap_pars_fragment:bC,lights_lambert_fragment:PC,lights_lambert_pars_fragment:DC,lights_pars_begin:LC,lights_toon_fragment:IC,lights_toon_pars_fragment:UC,lights_phong_fragment:FC,lights_phong_pars_fragment:OC,lights_physical_fragment:kC,lights_physical_pars_fragment:zC,lights_fragment_begin:BC,lights_fragment_maps:HC,lights_fragment_end:VC,logdepthbuf_fragment:GC,logdepthbuf_pars_fragment:WC,logdepthbuf_pars_vertex:XC,logdepthbuf_vertex:YC,map_fragment:jC,map_pars_fragment:qC,map_particle_fragment:$C,map_particle_pars_fragment:KC,metalnessmap_fragment:ZC,metalnessmap_pars_fragment:QC,morphinstance_vertex:JC,morphcolor_vertex:eR,morphnormal_vertex:tR,morphtarget_pars_vertex:nR,morphtarget_vertex:iR,normal_fragment_begin:rR,normal_fragment_maps:sR,normal_pars_fragment:oR,normal_pars_vertex:aR,normal_vertex:lR,normalmap_pars_fragment:uR,clearcoat_normal_fragment_begin:cR,clearcoat_normal_fragment_maps:fR,clearcoat_pars_fragment:hR,iridescence_pars_fragment:dR,opaque_fragment:pR,packing:mR,premultiplied_alpha_fragment:gR,project_vertex:_R,dithering_fragment:vR,dithering_pars_fragment:xR,roughnessmap_fragment:yR,roughnessmap_pars_fragment:SR,shadowmap_pars_fragment:MR,shadowmap_pars_vertex:ER,shadowmap_vertex:TR,shadowmask_pars_fragment:wR,skinbase_vertex:AR,skinning_pars_vertex:CR,skinning_vertex:RR,skinnormal_vertex:bR,specularmap_fragment:PR,specularmap_pars_fragment:DR,tonemapping_fragment:LR,tonemapping_pars_fragment:NR,transmission_fragment:IR,transmission_pars_fragment:UR,uv_pars_fragment:FR,uv_pars_vertex:OR,uv_vertex:kR,worldpos_vertex:zR,background_vert:BR,background_frag:HR,backgroundCube_vert:VR,backgroundCube_frag:GR,cube_vert:WR,cube_frag:XR,depth_vert:YR,depth_frag:jR,distanceRGBA_vert:qR,distanceRGBA_frag:$R,equirect_vert:KR,equirect_frag:ZR,linedashed_vert:QR,linedashed_frag:JR,meshbasic_vert:eb,meshbasic_frag:tb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:rb,meshmatcap_frag:sb,meshnormal_vert:ob,meshnormal_frag:ab,meshphong_vert:lb,meshphong_frag:ub,meshphysical_vert:cb,meshphysical_frag:fb,meshtoon_vert:hb,meshtoon_frag:db,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:_b,sprite_vert:vb,sprite_frag:xb},Be={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Xr={basic:{uniforms:gi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:gi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:gi([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:gi([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:gi([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ot(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:gi([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:gi([Be.points,Be.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:gi([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:gi([Be.common,Be.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:gi([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:gi([Be.sprite,Be.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:gi([Be.common,Be.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:gi([Be.lights,Be.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Xr.physical={uniforms:gi([Xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Hf={r:0,b:0,g:0},Fo=new ws,yb=new rn;function Sb(o,e,t,n,r,a,u){const c=new Ot(0);let f=a===!0?0:1,d,p,_=null,g=0,v=null;function E(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?t:e).get(b)),b}function M(R){let b=!1;const T=E(R);T===null?x(c,f):T&&T.isColor&&(x(T,1),b=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(o.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(R,b){const T=E(b);T&&(T.isCubeTexture||T.mapping===Nh)?(p===void 0&&(p=new Qi(new oc(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:bl(Xr.backgroundCube.uniforms),vertexShader:Xr.backgroundCube.vertexShader,fragmentShader:Xr.backgroundCube.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Fo.copy(b.backgroundRotation),Fo.x*=-1,Fo.y*=-1,Fo.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fo.y*=-1,Fo.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(yb.makeRotationFromEuler(Fo)),p.material.toneMapped=Ht.getTransfer(T.colorSpace)!==Qt,(_!==T||g!==T.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,_=T,g=T.version,v=o.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new Qi(new Pl(2,2),new Or({name:"BackgroundMaterial",uniforms:bl(Xr.background.uniforms),vertexShader:Xr.background.vertexShader,fragmentShader:Xr.background.fragmentShader,side:go,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Ht.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||g!==T.version||v!==o.toneMapping)&&(d.material.needsUpdate=!0,_=T,g=T.version,v=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function x(R,b){R.getRGB(Hf,PM(o)),n.buffers.color.setClear(Hf.r,Hf.g,Hf.b,b,u)}return{getClearColor:function(){return c},setClearColor:function(R,b=1){c.set(R),f=b,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(c,f)},render:M,addToRenderList:y}}function Mb(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},r=g(null);let a=r,u=!1;function c(w,B,j,K,se){let ce=!1;const ee=_(K,j,B);a!==ee&&(a=ee,d(a.object)),ce=v(w,K,j,se),ce&&E(w,K,j,se),se!==null&&e.update(se,o.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,T(w,B,j,K),se!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function f(){return o.createVertexArray()}function d(w){return o.bindVertexArray(w)}function p(w){return o.deleteVertexArray(w)}function _(w,B,j){const K=j.wireframe===!0;let se=n[w.id];se===void 0&&(se={},n[w.id]=se);let ce=se[B.id];ce===void 0&&(ce={},se[B.id]=ce);let ee=ce[K];return ee===void 0&&(ee=g(f()),ce[K]=ee),ee}function g(w){const B=[],j=[],K=[];for(let se=0;se<t;se++)B[se]=0,j[se]=0,K[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:K,object:w,attributes:{},index:null}}function v(w,B,j,K){const se=a.attributes,ce=B.attributes;let ee=0;const Q=j.getAttributes();for(const H in Q)if(Q[H].location>=0){const N=se[H];let k=ce[H];if(k===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(k=w.instanceColor)),N===void 0||N.attribute!==k||k&&N.data!==k.data)return!0;ee++}return a.attributesNum!==ee||a.index!==K}function E(w,B,j,K){const se={},ce=B.attributes;let ee=0;const Q=j.getAttributes();for(const H in Q)if(Q[H].location>=0){let N=ce[H];N===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const k={};k.attribute=N,N&&N.data&&(k.data=N.data),se[H]=k,ee++}a.attributes=se,a.attributesNum=ee,a.index=K}function M(){const w=a.newAttributes;for(let B=0,j=w.length;B<j;B++)w[B]=0}function y(w){x(w,0)}function x(w,B){const j=a.newAttributes,K=a.enabledAttributes,se=a.attributeDivisors;j[w]=1,K[w]===0&&(o.enableVertexAttribArray(w),K[w]=1),se[w]!==B&&(o.vertexAttribDivisor(w,B),se[w]=B)}function R(){const w=a.newAttributes,B=a.enabledAttributes;for(let j=0,K=B.length;j<K;j++)B[j]!==w[j]&&(o.disableVertexAttribArray(j),B[j]=0)}function b(w,B,j,K,se,ce,ee){ee===!0?o.vertexAttribIPointer(w,B,j,se,ce):o.vertexAttribPointer(w,B,j,K,se,ce)}function T(w,B,j,K){M();const se=K.attributes,ce=j.getAttributes(),ee=B.defaultAttributeValues;for(const Q in ce){const H=ce[Q];if(H.location>=0){let le=se[Q];if(le===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),le!==void 0){const N=le.normalized,k=le.itemSize,oe=e.get(le);if(oe===void 0)continue;const Ne=oe.buffer,Z=oe.type,X=oe.bytesPerElement,pe=Z===o.INT||Z===o.UNSIGNED_INT||le.gpuType===Jg;if(le.isInterleavedBufferAttribute){const fe=le.data,ye=fe.stride,Ae=le.offset;if(fe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<H.locationSize;Qe++)x(H.location+Qe,fe.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Qe=0;Qe<H.locationSize;Qe++)y(H.location+Qe);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Qe=0;Qe<H.locationSize;Qe++)b(H.location+Qe,k/H.locationSize,Z,N,ye*X,(Ae+k/H.locationSize*Qe)*X,pe)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<H.locationSize;fe++)x(H.location+fe,le.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<H.locationSize;fe++)y(H.location+fe);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let fe=0;fe<H.locationSize;fe++)b(H.location+fe,k/H.locationSize,Z,N,k*X,k/H.locationSize*fe*X,pe)}}else if(ee!==void 0){const N=ee[Q];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(H.location,N);break;case 3:o.vertexAttrib3fv(H.location,N);break;case 4:o.vertexAttrib4fv(H.location,N);break;default:o.vertexAttrib1fv(H.location,N)}}}}R()}function F(){O();for(const w in n){const B=n[w];for(const j in B){const K=B[j];for(const se in K)p(K[se].object),delete K[se];delete B[j]}delete n[w]}}function U(w){if(n[w.id]===void 0)return;const B=n[w.id];for(const j in B){const K=B[j];for(const se in K)p(K[se].object),delete K[se];delete B[j]}delete n[w.id]}function D(w){for(const B in n){const j=n[B];if(j[w.id]===void 0)continue;const K=j[w.id];for(const se in K)p(K[se].object),delete K[se];delete j[w.id]}}function O(){C(),u=!0,a!==r&&(a=r,d(a.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:O,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:R}}function Eb(o,e,t){let n;function r(d){n=d}function a(d,p){o.drawArrays(n,d,p),t.update(p,n,1)}function u(d,p,_){_!==0&&(o.drawArraysInstanced(n,d,p,_),t.update(p,n,_))}function c(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,_);let v=0;for(let E=0;E<_;E++)v+=p[E];t.update(v,n,1)}function f(d,p,_,g){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<d.length;E++)u(d[E],p[E],g[E]);else{v.multiDrawArraysInstancedWEBGL(n,d,0,p,0,g,0,_);let E=0;for(let M=0;M<_;M++)E+=p[M]*g[M];t.update(E,n,1)}}this.setMode=r,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Tb(o,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(D){return!(D!==Fr&&n.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const O=D===rc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Ts&&n.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Zr&&!O)}function f(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),T=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:v,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:T,vertexTextures:F,maxSamples:U}}function wb(o){const e=this;let t=null,n=0,r=!1,a=!1;const u=new Ho,c=new wt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||n!==0||r;return r=g,n=_.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,v){const E=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!r||E===null||E.length===0||a&&!y)a?p(null):d();else{const R=a?0:n,b=R*4;let T=x.clippingState||null;f.value=T,T=p(E,g,b,v);for(let F=0;F!==b;++F)T[F]=t[F];x.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(_,g,v,E){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=f.value,E!==!0||y===null){const x=v+M*4,R=g.matrixWorldInverse;c.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let b=0,T=v;b!==M;++b,T+=4)u.copy(_[b]).applyMatrix4(R,c),u.normal.toArray(y,T),y[T+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function Ab(o){let e=new WeakMap;function t(u,c){return c===Xm?u.mapping=wl:c===Ym&&(u.mapping=Al),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Xm||c===Ym)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new OA(f.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",r),t(d.texture,u.mapping)}else return null}}return u}function r(u){const c=u.target;c.removeEventListener("dispose",r);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class IM extends DM{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const al=4,Jx=[.125,.215,.35,.446,.526,.582],Wo=20,tm=new IM,ey=new Ot;let nm=null,im=0,rm=0,sm=!1;const Vo=(1+Math.sqrt(5))/2,Ka=1/Vo,ty=[new ue(-Vo,Ka,0),new ue(Vo,Ka,0),new ue(-Ka,0,Vo),new ue(Ka,0,Vo),new ue(0,Vo,-Ka),new ue(0,Vo,Ka),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)];class ny{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){nm=this._renderer.getRenderTarget(),im=this._renderer.getActiveCubeFace(),rm=this._renderer.getActiveMipmapLevel(),sm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ry(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nm,im,rm),this._renderer.xr.enabled=sm,e.scissorTest=!1,Vf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wl||e.mapping===Al?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nm=this._renderer.getRenderTarget(),im=this._renderer.getActiveCubeFace(),rm=this._renderer.getActiveMipmapLevel(),sm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kr,minFilter:Kr,generateMipmaps:!1,type:rc,format:Fr,colorSpace:la,depthBuffer:!1},r=iy(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iy(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(a)),this._blurMaterial=Rb(a,e,t)}return r}_compileMaterial(e){const t=new Qi(this._lodPlanes[0],e);this._renderer.compile(t,tm)}_sceneToCubeUV(e,t,n,r){const c=new _r(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(ey),p.toneMapping=uo,p.autoClear=!1;const v=new o_({name:"PMREM.Background",side:Si,depthWrite:!1,depthTest:!1}),E=new Qi(new oc,v);let M=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,M=!0):(v.color.copy(ey),M=!0);for(let x=0;x<6;x++){const R=x%3;R===0?(c.up.set(0,f[x],0),c.lookAt(d[x],0,0)):R===1?(c.up.set(0,0,f[x]),c.lookAt(0,d[x],0)):(c.up.set(0,f[x],0),c.lookAt(0,0,d[x]));const b=this._cubeSize;Vf(r,R*b,x>2?b:0,b,b),p.setRenderTarget(r),M&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===wl||e.mapping===Al;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ry());const a=r?this._cubemapMaterial:this._equirectMaterial,u=new Qi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Vf(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(u,tm)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=ty[(r-a-1)%ty.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Qi(this._lodPlanes[r],d),g=d.uniforms,v=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Wo-1),M=a/E,y=isFinite(a)?1+Math.floor(p*M):Wo;y>Wo&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wo}`);const x=[];let R=0;for(let D=0;D<Wo;++D){const O=D/M,C=Math.exp(-O*O/2);x.push(C),D===0?R+=C:D<y&&(R+=2*C)}for(let D=0;D<x.length;D++)x[D]=x[D]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:b}=this;g.dTheta.value=E,g.mipInt.value=b-n;const T=this._sizeLods[r],F=3*T*(r>b-al?r-b+al:0),U=4*(this._cubeSize-T);Vf(t,F,U,3*T,2*T),f.setRenderTarget(t),f.render(_,tm)}}function Cb(o){const e=[],t=[],n=[];let r=o;const a=o-al+1+Jx.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);t.push(c);let f=1/c;u>o-al?f=Jx[u-o+al-1]:u===0&&(f=0),n.push(f);const d=1/(c-2),p=-d,_=1+d,g=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,E=6,M=3,y=2,x=1,R=new Float32Array(M*E*v),b=new Float32Array(y*E*v),T=new Float32Array(x*E*v);for(let U=0;U<v;U++){const D=U%3*2/3-1,O=U>2?0:-1,C=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];R.set(C,M*E*U),b.set(g,y*E*U);const w=[U,U,U,U,U,U];T.set(w,x*E*U)}const F=new Mr;F.setAttribute("position",new Fi(R,M)),F.setAttribute("uv",new Fi(b,y)),F.setAttribute("faceIndex",new Fi(T,x)),e.push(F),r>al&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function iy(o,e,t){const n=new oa(o,e,t);return n.texture.mapping=Nh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vf(o,e,t,n,r){o.viewport.set(e,t,n,r),o.scissor.set(e,t,n,r)}function Rb(o,e,t){const n=new Float32Array(Wo),r=new ue(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:Wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:l_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lo,depthTest:!1,depthWrite:!1})}function ry(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:l_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lo,depthTest:!1,depthWrite:!1})}function sy(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:l_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lo,depthTest:!1,depthWrite:!1})}function l_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bb(o){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,d=f===Xm||f===Ym,p=f===wl||f===Al;if(d||p){let _=e.get(c);const g=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new ny(o)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const v=c.image;return d&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new ny(o)),_=d?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",a),_.texture):null}}}return c}function r(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Pb(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Lu("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Db(o,e,t,n){const r={},a=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);for(const E in g.morphAttributes){const M=g.morphAttributes[E];for(let y=0,x=M.length;y<x;y++)e.remove(M[y])}g.removeEventListener("dispose",u),delete r[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(_,g){return r[g.id]===!0||(g.addEventListener("dispose",u),r[g.id]=!0,t.memory.geometries++),g}function f(_){const g=_.attributes;for(const E in g)e.update(g[E],o.ARRAY_BUFFER);const v=_.morphAttributes;for(const E in v){const M=v[E];for(let y=0,x=M.length;y<x;y++)e.update(M[y],o.ARRAY_BUFFER)}}function d(_){const g=[],v=_.index,E=_.attributes.position;let M=0;if(v!==null){const R=v.array;M=v.version;for(let b=0,T=R.length;b<T;b+=3){const F=R[b+0],U=R[b+1],D=R[b+2];g.push(F,U,U,D,D,F)}}else if(E!==void 0){const R=E.array;M=E.version;for(let b=0,T=R.length/3-1;b<T;b+=3){const F=b+0,U=b+1,D=b+2;g.push(F,U,U,D,D,F)}}else return;const y=new(MM(g)?bM:RM)(g,1);y.version=M;const x=a.get(_);x&&e.remove(x),a.set(_,y)}function p(_){const g=a.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:p}}function Lb(o,e,t){let n;function r(g){n=g}let a,u;function c(g){a=g.type,u=g.bytesPerElement}function f(g,v){o.drawElements(n,v,a,g*u),t.update(v,n,1)}function d(g,v,E){E!==0&&(o.drawElementsInstanced(n,v,a,g*u,E),t.update(v,n,E))}function p(g,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,E);let y=0;for(let x=0;x<E;x++)y+=v[x];t.update(y,n,1)}function _(g,v,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)d(g[x]/u,v[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,M,0,E);let x=0;for(let R=0;R<E;R++)x+=v[R]*M[R];t.update(x,n,1)}}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function Nb(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case o.TRIANGLES:t.triangles+=c*(a/3);break;case o.LINES:t.lines+=c*(a/2);break;case o.LINE_STRIP:t.lines+=c*(a-1);break;case o.LINE_LOOP:t.lines+=c*a;break;case o.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ib(o,e,t){const n=new WeakMap,r=new yn;function a(u,c,f){const d=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==_){let w=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",w)};var v=w;g!==void 0&&g.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let T=0;E===!0&&(T=1),M===!0&&(T=2),y===!0&&(T=3);let F=c.attributes.position.count*T,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const D=new Float32Array(F*U*4*_),O=new TM(D,F,U,_);O.type=Zr,O.needsUpdate=!0;const C=T*4;for(let B=0;B<_;B++){const j=x[B],K=R[B],se=b[B],ce=F*U*4*B;for(let ee=0;ee<j.count;ee++){const Q=ee*C;E===!0&&(r.fromBufferAttribute(j,ee),D[ce+Q+0]=r.x,D[ce+Q+1]=r.y,D[ce+Q+2]=r.z,D[ce+Q+3]=0),M===!0&&(r.fromBufferAttribute(K,ee),D[ce+Q+4]=r.x,D[ce+Q+5]=r.y,D[ce+Q+6]=r.z,D[ce+Q+7]=0),y===!0&&(r.fromBufferAttribute(se,ee),D[ce+Q+8]=r.x,D[ce+Q+9]=r.y,D[ce+Q+10]=r.z,D[ce+Q+11]=se.itemSize===4?r.w:1)}}g={count:_,texture:O,size:new Ct(F,U)},n.set(c,g),c.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const M=c.morphTargetsRelative?1:1-E;f.getUniforms().setValue(o,"morphTargetBaseInfluence",M),f.getUniforms().setValue(o,"morphTargetInfluences",d)}f.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:a}}function Ub(o,e,t,n){let r=new WeakMap;function a(f){const d=n.render.frame,p=f.geometry,_=e.get(f,p);if(r.get(_)!==d&&(e.update(_),r.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),r.get(f)!==d&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),r.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return _}function u(){r=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}class UM extends ui{constructor(e,t,n,r,a,u,c,f,d,p=gl){if(p!==gl&&p!==Rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===gl&&(n=sa),n===void 0&&p===Rl&&(n=Cl),super(null,r,a,u,c,f,p,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:er,this.minFilter=f!==void 0?f:er,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const FM=new ui,oy=new UM(1,1),OM=new TM,kM=new SA,zM=new LM,ay=[],ly=[],uy=new Float32Array(16),cy=new Float32Array(9),fy=new Float32Array(4);function Nl(o,e,t){const n=o[0];if(n<=0||n>0)return o;const r=e*t;let a=ay[r];if(a===void 0&&(a=new Float32Array(r),ay[r]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,o[u].toArray(a,c)}return a}function Fn(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function On(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Uh(o,e){let t=ly[e];t===void 0&&(t=new Int32Array(e),ly[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Fb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Ob(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;o.uniform2fv(this.addr,e),On(t,e)}}function kb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;o.uniform3fv(this.addr,e),On(t,e)}}function zb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;o.uniform4fv(this.addr,e),On(t,e)}}function Bb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,n))return;fy.set(n),o.uniformMatrix2fv(this.addr,!1,fy),On(t,n)}}function Hb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,n))return;cy.set(n),o.uniformMatrix3fv(this.addr,!1,cy),On(t,n)}}function Vb(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Fn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,n))return;uy.set(n),o.uniformMatrix4fv(this.addr,!1,uy),On(t,n)}}function Gb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Wb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;o.uniform2iv(this.addr,e),On(t,e)}}function Xb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;o.uniform3iv(this.addr,e),On(t,e)}}function Yb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;o.uniform4iv(this.addr,e),On(t,e)}}function jb(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function qb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;o.uniform2uiv(this.addr,e),On(t,e)}}function $b(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;o.uniform3uiv(this.addr,e),On(t,e)}}function Kb(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;o.uniform4uiv(this.addr,e),On(t,e)}}function Zb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r);let a;this.type===o.SAMPLER_2D_SHADOW?(oy.compareFunction=SM,a=oy):a=FM,t.setTexture2D(e||a,r)}function Qb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||kM,r)}function Jb(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zM,r)}function eP(o,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(o.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||OM,r)}function tP(o){switch(o){case 5126:return Fb;case 35664:return Ob;case 35665:return kb;case 35666:return zb;case 35674:return Bb;case 35675:return Hb;case 35676:return Vb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return Yb;case 5125:return jb;case 36294:return qb;case 36295:return $b;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return eP}}function nP(o,e){o.uniform1fv(this.addr,e)}function iP(o,e){const t=Nl(e,this.size,2);o.uniform2fv(this.addr,t)}function rP(o,e){const t=Nl(e,this.size,3);o.uniform3fv(this.addr,t)}function sP(o,e){const t=Nl(e,this.size,4);o.uniform4fv(this.addr,t)}function oP(o,e){const t=Nl(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function aP(o,e){const t=Nl(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function lP(o,e){const t=Nl(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function uP(o,e){o.uniform1iv(this.addr,e)}function cP(o,e){o.uniform2iv(this.addr,e)}function fP(o,e){o.uniform3iv(this.addr,e)}function hP(o,e){o.uniform4iv(this.addr,e)}function dP(o,e){o.uniform1uiv(this.addr,e)}function pP(o,e){o.uniform2uiv(this.addr,e)}function mP(o,e){o.uniform3uiv(this.addr,e)}function gP(o,e){o.uniform4uiv(this.addr,e)}function _P(o,e,t){const n=this.cache,r=e.length,a=Uh(t,r);Fn(n,a)||(o.uniform1iv(this.addr,a),On(n,a));for(let u=0;u!==r;++u)t.setTexture2D(e[u]||FM,a[u])}function vP(o,e,t){const n=this.cache,r=e.length,a=Uh(t,r);Fn(n,a)||(o.uniform1iv(this.addr,a),On(n,a));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||kM,a[u])}function xP(o,e,t){const n=this.cache,r=e.length,a=Uh(t,r);Fn(n,a)||(o.uniform1iv(this.addr,a),On(n,a));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||zM,a[u])}function yP(o,e,t){const n=this.cache,r=e.length,a=Uh(t,r);Fn(n,a)||(o.uniform1iv(this.addr,a),On(n,a));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||OM,a[u])}function SP(o){switch(o){case 5126:return nP;case 35664:return iP;case 35665:return rP;case 35666:return sP;case 35674:return oP;case 35675:return aP;case 35676:return lP;case 5124:case 35670:return uP;case 35667:case 35671:return cP;case 35668:case 35672:return fP;case 35669:case 35673:return hP;case 5125:return dP;case 36294:return pP;case 36295:return mP;case 36296:return gP;case 35678:case 36198:case 36298:case 36306:case 35682:return _P;case 35679:case 36299:case 36307:return vP;case 35680:case 36300:case 36308:case 36293:return xP;case 36289:case 36303:case 36311:case 36292:return yP}}class MP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tP(t.type)}}class EP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SP(t.type)}}class TP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const om=/(\w+)(\])?(\[|\.)?/g;function hy(o,e){o.seq.push(e),o.map[e.id]=e}function wP(o,e,t){const n=o.name,r=n.length;for(om.lastIndex=0;;){const a=om.exec(n),u=om.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===r){hy(t,d===void 0?new MP(c,o,e):new EP(c,o,e));break}else{let _=t.map[c];_===void 0&&(_=new TP(c),hy(t,_)),t=_}}}class dh{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),u=e.getUniformLocation(t,a.name);wP(a,u,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function dy(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const AP=37297;let CP=0;function RP(o,e){const t=o.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const py=new wt;function bP(o){Ht._getMatrix(py,Ht.workingColorSpace,o);const e=`mat3( ${py.elements.map(t=>t.toFixed(4))} )`;switch(Ht.getTransfer(o)){case Ih:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function my(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),r=o.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+RP(o.getShaderSource(e),u)}else return r}function PP(o,e){const t=bP(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function DP(o,e){let t;switch(e){case qw:t="Linear";break;case $w:t="Reinhard";break;case Kw:t="Cineon";break;case Zw:t="ACESFilmic";break;case Jw:t="AgX";break;case eA:t="Neutral";break;case Qw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gf=new ue;function LP(){Ht.getLuminanceCoefficients(Gf);const o=Gf.x.toFixed(4),e=Gf.y.toFixed(4),t=Gf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NP(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nu).join(`
`)}function IP(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function UP(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=o.getActiveAttrib(e,r),u=a.name;let c=1;a.type===o.FLOAT_MAT2&&(c=2),a.type===o.FLOAT_MAT3&&(c=3),a.type===o.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:o.getAttribLocation(e,u),locationSize:c}}return t}function Nu(o){return o!==""}function gy(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _y(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eg(o){return o.replace(FP,kP)}const OP=new Map;function kP(o,e){let t=At[e];if(t===void 0){const n=OP.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eg(t)}const zP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vy(o){return o.replace(zP,BP)}function BP(o,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function xy(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HP(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===lM?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Cw?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ps&&(e="SHADOWMAP_TYPE_VSM"),e}function VP(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case wl:case Al:e="ENVMAP_TYPE_CUBE";break;case Nh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GP(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Al:e="ENVMAP_MODE_REFRACTION";break}return e}function WP(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case uM:e="ENVMAP_BLENDING_MULTIPLY";break;case Yw:e="ENVMAP_BLENDING_MIX";break;case jw:e="ENVMAP_BLENDING_ADD";break}return e}function XP(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YP(o,e,t,n){const r=o.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=HP(t),d=VP(t),p=GP(t),_=WP(t),g=XP(t),v=NP(t),E=IP(a),M=r.createProgram();let y,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Nu).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Nu).join(`
`),x.length>0&&(x+=`
`)):(y=[xy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nu).join(`
`),x=[xy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==uo?"#define TONE_MAPPING":"",t.toneMapping!==uo?At.tonemapping_pars_fragment:"",t.toneMapping!==uo?DP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,PP("linearToOutputTexel",t.outputColorSpace),LP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nu).join(`
`)),u=Eg(u),u=gy(u,t),u=_y(u,t),c=Eg(c),c=gy(c,t),c=_y(c,t),u=vy(u),c=vy(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Lx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=R+y+u,T=R+x+c,F=dy(r,r.VERTEX_SHADER,b),U=dy(r,r.FRAGMENT_SHADER,T);r.attachShader(M,F),r.attachShader(M,U),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function D(B){if(o.debug.checkShaderErrors){const j=r.getProgramInfoLog(M).trim(),K=r.getShaderInfoLog(F).trim(),se=r.getShaderInfoLog(U).trim();let ce=!0,ee=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,F,U);else{const Q=my(r,F,"vertex"),H=my(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+j+`
`+Q+`
`+H)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(K===""||se==="")&&(ee=!1);ee&&(B.diagnostics={runnable:ce,programLog:j,vertexShader:{log:K,prefix:y},fragmentShader:{log:se,prefix:x}})}r.deleteShader(F),r.deleteShader(U),O=new dh(r,M),C=UP(r,M)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(M,AP)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CP++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=U,this}let jP=0;class qP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $P(e),t.set(e,n)),n}}class $P{constructor(e){this.id=jP++,this.code=e,this.usedTimes=0}}function KP(o,e,t,n,r,a,u){const c=new AM,f=new qP,d=new Set,p=[],_=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(C){return d.add(C),C===0?"uv":`uv${C}`}function y(C,w,B,j,K){const se=j.fog,ce=K.geometry,ee=C.isMeshStandardMaterial?j.environment:null,Q=(C.isMeshStandardMaterial?t:e).get(C.envMap||ee),H=Q&&Q.mapping===Nh?Q.image.height:null,le=E[C.type];C.precision!==null&&(v=r.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const N=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,k=N!==void 0?N.length:0;let oe=0;ce.morphAttributes.position!==void 0&&(oe=1),ce.morphAttributes.normal!==void 0&&(oe=2),ce.morphAttributes.color!==void 0&&(oe=3);let Ne,Z,X,pe;if(le){const ze=Xr[le];Ne=ze.vertexShader,Z=ze.fragmentShader}else Ne=C.vertexShader,Z=C.fragmentShader,f.update(C),X=f.getVertexShaderID(C),pe=f.getFragmentShaderID(C);const fe=o.getRenderTarget(),ye=o.state.buffers.depth.getReversed(),Ae=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,_t=!!C.map,ot=!!C.matcap,$e=!!Q,W=!!C.aoMap,kt=!!C.lightMap,ht=!!C.bumpMap,J=!!C.normalMap,We=!!C.displacementMap,Rt=!!C.emissiveMap,je=!!C.metalnessMap,I=!!C.roughnessMap,P=C.anisotropy>0,ie=C.clearcoat>0,ve=C.dispersion>0,_e=C.iridescence>0,ge=C.sheen>0,Ie=C.transmission>0,be=P&&!!C.anisotropyMap,Fe=ie&&!!C.clearcoatMap,mt=ie&&!!C.clearcoatNormalMap,Te=ie&&!!C.clearcoatRoughnessMap,Pe=_e&&!!C.iridescenceMap,st=_e&&!!C.iridescenceThicknessMap,it=ge&&!!C.sheenColorMap,Ve=ge&&!!C.sheenRoughnessMap,St=!!C.specularMap,at=!!C.specularColorMap,Dt=!!C.specularIntensityMap,V=Ie&&!!C.transmissionMap,De=Ie&&!!C.thicknessMap,de=!!C.gradientMap,me=!!C.alphaMap,Le=C.alphaTest>0,Ue=!!C.alphaHash,dt=!!C.extensions;let zt=uo;C.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(zt=o.toneMapping);const an={shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:Ne,fragmentShader:Z,defines:C.defines,customVertexShaderID:X,customFragmentShaderID:pe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&K.instanceColor!==null,instancingMorph:Ae&&K.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:fe===null?o.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:la,alphaToCoverage:!!C.alphaToCoverage,map:_t,matcap:ot,envMap:$e,envMapMode:$e&&Q.mapping,envMapCubeUVHeight:H,aoMap:W,lightMap:kt,bumpMap:ht,normalMap:J,displacementMap:g&&We,emissiveMap:Rt,normalMapObjectSpace:J&&C.normalMapType===rA,normalMapTangentSpace:J&&C.normalMapType===yM,metalnessMap:je,roughnessMap:I,anisotropy:P,anisotropyMap:be,clearcoat:ie,clearcoatMap:Fe,clearcoatNormalMap:mt,clearcoatRoughnessMap:Te,dispersion:ve,iridescence:_e,iridescenceMap:Pe,iridescenceThicknessMap:st,sheen:ge,sheenColorMap:it,sheenRoughnessMap:Ve,specularMap:St,specularColorMap:at,specularIntensityMap:Dt,transmission:Ie,transmissionMap:V,thicknessMap:De,gradientMap:de,opaque:C.transparent===!1&&C.blending===ml&&C.alphaToCoverage===!1,alphaMap:me,alphaTest:Le,alphaHash:Ue,combine:C.combine,mapUv:_t&&M(C.map.channel),aoMapUv:W&&M(C.aoMap.channel),lightMapUv:kt&&M(C.lightMap.channel),bumpMapUv:ht&&M(C.bumpMap.channel),normalMapUv:J&&M(C.normalMap.channel),displacementMapUv:We&&M(C.displacementMap.channel),emissiveMapUv:Rt&&M(C.emissiveMap.channel),metalnessMapUv:je&&M(C.metalnessMap.channel),roughnessMapUv:I&&M(C.roughnessMap.channel),anisotropyMapUv:be&&M(C.anisotropyMap.channel),clearcoatMapUv:Fe&&M(C.clearcoatMap.channel),clearcoatNormalMapUv:mt&&M(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&M(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&M(C.iridescenceMap.channel),iridescenceThicknessMapUv:st&&M(C.iridescenceThicknessMap.channel),sheenColorMapUv:it&&M(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&M(C.sheenRoughnessMap.channel),specularMapUv:St&&M(C.specularMap.channel),specularColorMapUv:at&&M(C.specularColorMap.channel),specularIntensityMapUv:Dt&&M(C.specularIntensityMap.channel),transmissionMapUv:V&&M(C.transmissionMap.channel),thicknessMapUv:De&&M(C.thicknessMap.channel),alphaMapUv:me&&M(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(J||P),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ce.attributes.uv&&(_t||me),fog:!!se,useFog:C.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ye,skinning:K.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:zt,decodeVideoTexture:_t&&C.map.isVideoTexture===!0&&Ht.getTransfer(C.map.colorSpace)===Qt,decodeVideoTextureEmissive:Rt&&C.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(C.emissiveMap.colorSpace)===Qt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ur,flipSided:C.side===Si,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:dt&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&C.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return an.vertexUv1s=d.has(1),an.vertexUv2s=d.has(2),an.vertexUv3s=d.has(3),d.clear(),an}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)w.push(B),w.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(R(w,C),b(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function R(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function b(C,w){c.disableAll(),w.supportsVertexTextures&&c.enable(0),w.instancing&&c.enable(1),w.instancingColor&&c.enable(2),w.instancingMorph&&c.enable(3),w.matcap&&c.enable(4),w.envMap&&c.enable(5),w.normalMapObjectSpace&&c.enable(6),w.normalMapTangentSpace&&c.enable(7),w.clearcoat&&c.enable(8),w.iridescence&&c.enable(9),w.alphaTest&&c.enable(10),w.vertexColors&&c.enable(11),w.vertexAlphas&&c.enable(12),w.vertexUv1s&&c.enable(13),w.vertexUv2s&&c.enable(14),w.vertexUv3s&&c.enable(15),w.vertexTangents&&c.enable(16),w.anisotropy&&c.enable(17),w.alphaHash&&c.enable(18),w.batching&&c.enable(19),w.dispersion&&c.enable(20),w.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reverseDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),C.push(c.mask)}function T(C){const w=E[C.type];let B;if(w){const j=Xr[w];B=NA.clone(j.uniforms)}else B=C.uniforms;return B}function F(C,w){let B;for(let j=0,K=p.length;j<K;j++){const se=p[j];if(se.cacheKey===w){B=se,++B.usedTimes;break}}return B===void 0&&(B=new YP(o,w,C,a),p.push(B)),B}function U(C){if(--C.usedTimes===0){const w=p.indexOf(C);p[w]=p[p.length-1],p.pop(),C.destroy()}}function D(C){f.remove(C)}function O(){f.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:T,acquireProgram:F,releaseProgram:U,releaseShaderCache:D,programs:p,dispose:O}}function ZP(){let o=new WeakMap;function e(u){return o.has(u)}function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function n(u){o.delete(u)}function r(u,c,f){o.get(u)[c]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function QP(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function yy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Sy(){const o=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(_,g,v,E,M,y){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:g,material:v,groupOrder:E,renderOrder:_.renderOrder,z:M,group:y},o[e]=x):(x.id=_.id,x.object=_,x.geometry=g,x.material=v,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=M,x.group=y),e++,x}function c(_,g,v,E,M,y){const x=u(_,g,v,E,M,y);v.transmission>0?n.push(x):v.transparent===!0?r.push(x):t.push(x)}function f(_,g,v,E,M,y){const x=u(_,g,v,E,M,y);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function d(_,g){t.length>1&&t.sort(_||QP),n.length>1&&n.sort(g||yy),r.length>1&&r.sort(g||yy)}function p(){for(let _=e,g=o.length;_<g;_++){const v=o[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:f,finish:p,sort:d}}function JP(){let o=new WeakMap;function e(n,r){const a=o.get(n);let u;return a===void 0?(u=new Sy,o.set(n,[u])):r>=a.length?(u=new Sy,a.push(u)):u=a[r],u}function t(){o=new WeakMap}return{get:e,dispose:t}}function e2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new Ot};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return o[e.id]=t,t}}}function t2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let n2=0;function i2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function r2(o){const e=new e2,t=t2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new ue);const r=new ue,a=new rn,u=new rn;function c(d){let p=0,_=0,g=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,E=0,M=0,y=0,x=0,R=0,b=0,T=0,F=0,U=0,D=0;d.sort(i2);for(let C=0,w=d.length;C<w;C++){const B=d[C],j=B.color,K=B.intensity,se=B.distance,ce=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=j.r*K,_+=j.g*K,g+=j.b*K;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(B.sh.coefficients[ee],K);D++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,H=t.get(B);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[v]=H,n.directionalShadowMap[v]=ce,n.directionalShadowMatrix[v]=B.shadow.matrix,R++}n.directional[v]=ee,v++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(j).multiplyScalar(K),ee.distance=se,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,n.spot[M]=ee;const Q=B.shadow;if(B.map&&(n.spotLightMap[F]=B.map,F++,Q.updateMatrices(B),B.castShadow&&U++),n.spotLightMatrix[M]=Q.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=ce,T++}M++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy(j).multiplyScalar(K),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),n.rectArea[y]=ee,y++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const Q=B.shadow,H=t.get(B);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[E]=H,n.pointShadowMap[E]=ce,n.pointShadowMatrix[E]=B.shadow.matrix,b++}n.point[E]=ee,E++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(K),ee.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[x]=ee,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=g;const O=n.hash;(O.directionalLength!==v||O.pointLength!==E||O.spotLength!==M||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==R||O.numPointShadows!==b||O.numSpotShadows!==T||O.numSpotMaps!==F||O.numLightProbes!==D)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=y,n.point.length=E,n.hemi.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=T+F-U,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=D,O.directionalLength=v,O.pointLength=E,O.spotLength=M,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=R,O.numPointShadows=b,O.numSpotShadows=T,O.numSpotMaps=F,O.numLightProbes=D,n.version=n2++)}function f(d,p){let _=0,g=0,v=0,E=0,M=0;const y=p.matrixWorldInverse;for(let x=0,R=d.length;x<R;x++){const b=d[x];if(b.isDirectionalLight){const T=n.directional[_];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(y),_++}else if(b.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(y),v++}else if(b.isRectAreaLight){const T=n.rectArea[E];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),u.identity(),a.copy(b.matrixWorld),a.premultiply(y),u.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(y),g++}else if(b.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(y),M++}}}return{setup:c,setupView:f,state:n}}function My(o){const e=new r2(o),t=[],n=[];function r(p){d.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:u}}function s2(o){let e=new WeakMap;function t(r,a=0){const u=e.get(r);let c;return u===void 0?(c=new My(o),e.set(r,[c])):a>=u.length?(c=new My(o),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class o2 extends ca{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a2 extends ca{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c2(o,e,t){let n=new a_;const r=new Ct,a=new Ct,u=new yn,c=new o2({depthPacking:iA}),f=new a2,d={},p=t.maxTextureSize,_={[go]:Si,[Si]:go,[Ur]:Ur},g=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:l2,fragmentShader:u2}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const E=new Mr;E.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qi(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lM;let x=this.type;this.render=function(U,D,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const C=o.getRenderTarget(),w=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),j=o.state;j.setBlending(lo),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=x!==ps&&this.type===ps,se=x===ps&&this.type!==ps;for(let ce=0,ee=U.length;ce<ee;ce++){const Q=U[ce],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();if(r.multiply(le),a.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/le.x),r.x=a.x*le.x,H.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/le.y),r.y=a.y*le.y,H.mapSize.y=a.y)),H.map===null||K===!0||se===!0){const k=this.type!==ps?{minFilter:er,magFilter:er}:{};H.map!==null&&H.map.dispose(),H.map=new oa(r.x,r.y,k),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const N=H.getViewportCount();for(let k=0;k<N;k++){const oe=H.getViewport(k);u.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),j.viewport(u),H.updateMatrices(Q,k),n=H.getFrustum(),T(D,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===ps&&R(H,O),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(C,w,B)};function R(U,D){const O=e.update(M);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new oa(r.x,r.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(D,null,O,g,M,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(D,null,O,v,M,null)}function b(U,D,O,C){let w=null;const B=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)w=B;else if(w=O.isPointLight===!0?f:c,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const j=w.uuid,K=D.uuid;let se=d[j];se===void 0&&(se={},d[j]=se);let ce=se[K];ce===void 0&&(ce=w.clone(),se[K]=ce,D.addEventListener("dispose",F)),w=ce}if(w.visible=D.visible,w.wireframe=D.wireframe,C===ps?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:_[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const j=o.properties.get(w);j.light=O}return w}function T(U,D,O,C,w){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===ps)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const K=e.update(U),se=U.material;if(Array.isArray(se)){const ce=K.groups;for(let ee=0,Q=ce.length;ee<Q;ee++){const H=ce[ee],le=se[H.materialIndex];if(le&&le.visible){const N=b(U,le,C,w);U.onBeforeShadow(o,U,D,O,K,N,H),o.renderBufferDirect(O,null,K,N,U,H),U.onAfterShadow(o,U,D,O,K,N,H)}}}else if(se.visible){const ce=b(U,se,C,w);U.onBeforeShadow(o,U,D,O,K,ce,null),o.renderBufferDirect(O,null,K,ce,U,null),U.onAfterShadow(o,U,D,O,K,ce,null)}}const j=U.children;for(let K=0,se=j.length;K<se;K++)T(j[K],D,O,C,w)}function F(U){U.target.removeEventListener("dispose",F);for(const O in d){const C=d[O],w=U.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const f2={[km]:zm,[Bm]:Gm,[Hm]:Wm,[Tl]:Vm,[zm]:km,[Gm]:Bm,[Wm]:Hm,[Vm]:Tl};function h2(o,e){function t(){let V=!1;const De=new yn;let de=null;const me=new yn(0,0,0,0);return{setMask:function(Le){de!==Le&&!V&&(o.colorMask(Le,Le,Le,Le),de=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Ue,dt,zt,an){an===!0&&(Le*=zt,Ue*=zt,dt*=zt),De.set(Le,Ue,dt,zt),me.equals(De)===!1&&(o.clearColor(Le,Ue,dt,zt),me.copy(De))},reset:function(){V=!1,de=null,me.set(-1,0,0,0)}}}function n(){let V=!1,De=!1,de=null,me=null,Le=null;return{setReversed:function(Ue){if(De!==Ue){const dt=e.get("EXT_clip_control");De?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const zt=Le;Le=null,this.setClear(zt)}De=Ue},getReversed:function(){return De},setTest:function(Ue){Ue?fe(o.DEPTH_TEST):ye(o.DEPTH_TEST)},setMask:function(Ue){de!==Ue&&!V&&(o.depthMask(Ue),de=Ue)},setFunc:function(Ue){if(De&&(Ue=f2[Ue]),me!==Ue){switch(Ue){case km:o.depthFunc(o.NEVER);break;case zm:o.depthFunc(o.ALWAYS);break;case Bm:o.depthFunc(o.LESS);break;case Tl:o.depthFunc(o.LEQUAL);break;case Hm:o.depthFunc(o.EQUAL);break;case Vm:o.depthFunc(o.GEQUAL);break;case Gm:o.depthFunc(o.GREATER);break;case Wm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}me=Ue}},setLocked:function(Ue){V=Ue},setClear:function(Ue){Le!==Ue&&(De&&(Ue=1-Ue),o.clearDepth(Ue),Le=Ue)},reset:function(){V=!1,de=null,me=null,Le=null,De=!1}}}function r(){let V=!1,De=null,de=null,me=null,Le=null,Ue=null,dt=null,zt=null,an=null;return{setTest:function(ze){V||(ze?fe(o.STENCIL_TEST):ye(o.STENCIL_TEST))},setMask:function(ze){De!==ze&&!V&&(o.stencilMask(ze),De=ze)},setFunc:function(ze,Ke,vt){(de!==ze||me!==Ke||Le!==vt)&&(o.stencilFunc(ze,Ke,vt),de=ze,me=Ke,Le=vt)},setOp:function(ze,Ke,vt){(Ue!==ze||dt!==Ke||zt!==vt)&&(o.stencilOp(ze,Ke,vt),Ue=ze,dt=Ke,zt=vt)},setLocked:function(ze){V=ze},setClear:function(ze){an!==ze&&(o.clearStencil(ze),an=ze)},reset:function(){V=!1,De=null,de=null,me=null,Le=null,Ue=null,dt=null,zt=null,an=null}}}const a=new t,u=new n,c=new r,f=new WeakMap,d=new WeakMap;let p={},_={},g=new WeakMap,v=[],E=null,M=!1,y=null,x=null,R=null,b=null,T=null,F=null,U=null,D=new Ot(0,0,0),O=0,C=!1,w=null,B=null,j=null,K=null,se=null;const ce=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Q=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),ee=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ee=Q>=2);let le=null,N={};const k=o.getParameter(o.SCISSOR_BOX),oe=o.getParameter(o.VIEWPORT),Ne=new yn().fromArray(k),Z=new yn().fromArray(oe);function X(V,De,de,me){const Le=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(V,Ue),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let dt=0;dt<de;dt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,me,0,o.RGBA,o.UNSIGNED_BYTE,Le):o.texImage2D(De+dt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Le);return Ue}const pe={};pe[o.TEXTURE_2D]=X(o.TEXTURE_2D,o.TEXTURE_2D,1),pe[o.TEXTURE_CUBE_MAP]=X(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[o.TEXTURE_2D_ARRAY]=X(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pe[o.TEXTURE_3D]=X(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),fe(o.DEPTH_TEST),u.setFunc(Tl),ht(!1),J(Rx),fe(o.CULL_FACE),W(lo);function fe(V){p[V]!==!0&&(o.enable(V),p[V]=!0)}function ye(V){p[V]!==!1&&(o.disable(V),p[V]=!1)}function Ae(V,De){return _[V]!==De?(o.bindFramebuffer(V,De),_[V]=De,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=De),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=De),!0):!1}function Qe(V,De){let de=v,me=!1;if(V){de=g.get(De),de===void 0&&(de=[],g.set(De,de));const Le=V.textures;if(de.length!==Le.length||de[0]!==o.COLOR_ATTACHMENT0){for(let Ue=0,dt=Le.length;Ue<dt;Ue++)de[Ue]=o.COLOR_ATTACHMENT0+Ue;de.length=Le.length,me=!0}}else de[0]!==o.BACK&&(de[0]=o.BACK,me=!0);me&&o.drawBuffers(de)}function _t(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const ot={[Go]:o.FUNC_ADD,[bw]:o.FUNC_SUBTRACT,[Pw]:o.FUNC_REVERSE_SUBTRACT};ot[Dw]=o.MIN,ot[Lw]=o.MAX;const $e={[Nw]:o.ZERO,[Iw]:o.ONE,[Uw]:o.SRC_COLOR,[Fm]:o.SRC_ALPHA,[Hw]:o.SRC_ALPHA_SATURATE,[zw]:o.DST_COLOR,[Ow]:o.DST_ALPHA,[Fw]:o.ONE_MINUS_SRC_COLOR,[Om]:o.ONE_MINUS_SRC_ALPHA,[Bw]:o.ONE_MINUS_DST_COLOR,[kw]:o.ONE_MINUS_DST_ALPHA,[Vw]:o.CONSTANT_COLOR,[Gw]:o.ONE_MINUS_CONSTANT_COLOR,[Ww]:o.CONSTANT_ALPHA,[Xw]:o.ONE_MINUS_CONSTANT_ALPHA};function W(V,De,de,me,Le,Ue,dt,zt,an,ze){if(V===lo){M===!0&&(ye(o.BLEND),M=!1);return}if(M===!1&&(fe(o.BLEND),M=!0),V!==Rw){if(V!==y||ze!==C){if((x!==Go||T!==Go)&&(o.blendEquation(o.FUNC_ADD),x=Go,T=Go),ze)switch(V){case ml:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Um:o.blendFunc(o.ONE,o.ONE);break;case bx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Px:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ml:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Um:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case bx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Px:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,b=null,F=null,U=null,D.set(0,0,0),O=0,y=V,C=ze}return}Le=Le||De,Ue=Ue||de,dt=dt||me,(De!==x||Le!==T)&&(o.blendEquationSeparate(ot[De],ot[Le]),x=De,T=Le),(de!==R||me!==b||Ue!==F||dt!==U)&&(o.blendFuncSeparate($e[de],$e[me],$e[Ue],$e[dt]),R=de,b=me,F=Ue,U=dt),(zt.equals(D)===!1||an!==O)&&(o.blendColor(zt.r,zt.g,zt.b,an),D.copy(zt),O=an),y=V,C=!1}function kt(V,De){V.side===Ur?ye(o.CULL_FACE):fe(o.CULL_FACE);let de=V.side===Si;De&&(de=!de),ht(de),V.blending===ml&&V.transparent===!1?W(lo):W(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const me=V.stencilWrite;c.setTest(me),me&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Rt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(o.SAMPLE_ALPHA_TO_COVERAGE):ye(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){w!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),w=V)}function J(V){V!==ww?(fe(o.CULL_FACE),V!==B&&(V===Rx?o.cullFace(o.BACK):V===Aw?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ye(o.CULL_FACE),B=V}function We(V){V!==j&&(ee&&o.lineWidth(V),j=V)}function Rt(V,De,de){V?(fe(o.POLYGON_OFFSET_FILL),(K!==De||se!==de)&&(o.polygonOffset(De,de),K=De,se=de)):ye(o.POLYGON_OFFSET_FILL)}function je(V){V?fe(o.SCISSOR_TEST):ye(o.SCISSOR_TEST)}function I(V){V===void 0&&(V=o.TEXTURE0+ce-1),le!==V&&(o.activeTexture(V),le=V)}function P(V,De,de){de===void 0&&(le===null?de=o.TEXTURE0+ce-1:de=le);let me=N[de];me===void 0&&(me={type:void 0,texture:void 0},N[de]=me),(me.type!==V||me.texture!==De)&&(le!==de&&(o.activeTexture(de),le=de),o.bindTexture(V,De||pe[V]),me.type=V,me.texture=De)}function ie(){const V=N[le];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ve(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(V){Ne.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ne.copy(V))}function Ve(V){Z.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function St(V,De){let de=d.get(De);de===void 0&&(de=new WeakMap,d.set(De,de));let me=de.get(V);me===void 0&&(me=o.getUniformBlockIndex(De,V.name),de.set(V,me))}function at(V,De){const me=d.get(De).get(V);f.get(De)!==me&&(o.uniformBlockBinding(De,me,V.__bindingPointIndex),f.set(De,me))}function Dt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},le=null,N={},_={},g=new WeakMap,v=[],E=null,M=!1,y=null,x=null,R=null,b=null,T=null,F=null,U=null,D=new Ot(0,0,0),O=0,C=!1,w=null,B=null,j=null,K=null,se=null,Ne.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:fe,disable:ye,bindFramebuffer:Ae,drawBuffers:Qe,useProgram:_t,setBlending:W,setMaterial:kt,setFlipSided:ht,setCullFace:J,setLineWidth:We,setPolygonOffset:Rt,setScissorTest:je,activeTexture:I,bindTexture:P,unbindTexture:ie,compressedTexImage2D:ve,compressedTexImage3D:_e,texImage2D:Pe,texImage3D:st,updateUBOMapping:St,uniformBlockBinding:at,texStorage2D:mt,texStorage3D:Te,texSubImage2D:ge,texSubImage3D:Ie,compressedTexSubImage2D:be,compressedTexSubImage3D:Fe,scissor:it,viewport:Ve,reset:Dt}}function Ey(o,e,t,n){const r=d2(n);switch(t){case pM:return o*e;case gM:return o*e;case _M:return o*e*2;case n_:return o*e/r.components*r.byteLength;case i_:return o*e/r.components*r.byteLength;case vM:return o*e*2/r.components*r.byteLength;case r_:return o*e*2/r.components*r.byteLength;case mM:return o*e*3/r.components*r.byteLength;case Fr:return o*e*4/r.components*r.byteLength;case s_:return o*e*4/r.components*r.byteLength;case lh:case uh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ch:case fh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Km:case Qm:return Math.max(o,16)*Math.max(e,8)/4;case $m:case Zm:return Math.max(o,8)*Math.max(e,8)/2;case Jm:case eg:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case tg:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ng:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ig:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case rg:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case sg:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case og:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ag:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case lg:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ug:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case cg:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fg:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hg:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dg:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pg:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case mg:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case hh:case gg:case _g:return Math.ceil(o/4)*Math.ceil(e/4)*16;case xM:case vg:return Math.ceil(o/4)*Math.ceil(e/4)*8;case xg:case yg:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d2(o){switch(o){case Ts:case fM:return{byteLength:1,components:1};case nc:case hM:case rc:return{byteLength:2,components:1};case e_:case t_:return{byteLength:2,components:4};case sa:case Jg:case Zr:return{byteLength:4,components:1};case dM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function p2(o,e,t,n,r,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ct,p=new WeakMap;let _;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,P){return v?new OffscreenCanvas(I,P):Ch("canvas")}function M(I,P,ie){let ve=1;const _e=je(I);if((_e.width>ie||_e.height>ie)&&(ve=ie/Math.max(_e.width,_e.height)),ve<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ge=Math.floor(ve*_e.width),Ie=Math.floor(ve*_e.height);_===void 0&&(_=E(ge,Ie));const be=P?E(ge,Ie):_;return be.width=ge,be.height=Ie,be.getContext("2d").drawImage(I,0,0,ge,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ge+"x"+Ie+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){o.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(I,P,ie,ve,_e=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ge=P;if(P===o.RED&&(ie===o.FLOAT&&(ge=o.R32F),ie===o.HALF_FLOAT&&(ge=o.R16F),ie===o.UNSIGNED_BYTE&&(ge=o.R8)),P===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(ge=o.R8UI),ie===o.UNSIGNED_SHORT&&(ge=o.R16UI),ie===o.UNSIGNED_INT&&(ge=o.R32UI),ie===o.BYTE&&(ge=o.R8I),ie===o.SHORT&&(ge=o.R16I),ie===o.INT&&(ge=o.R32I)),P===o.RG&&(ie===o.FLOAT&&(ge=o.RG32F),ie===o.HALF_FLOAT&&(ge=o.RG16F),ie===o.UNSIGNED_BYTE&&(ge=o.RG8)),P===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(ge=o.RG8UI),ie===o.UNSIGNED_SHORT&&(ge=o.RG16UI),ie===o.UNSIGNED_INT&&(ge=o.RG32UI),ie===o.BYTE&&(ge=o.RG8I),ie===o.SHORT&&(ge=o.RG16I),ie===o.INT&&(ge=o.RG32I)),P===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(ge=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(ge=o.RGB16UI),ie===o.UNSIGNED_INT&&(ge=o.RGB32UI),ie===o.BYTE&&(ge=o.RGB8I),ie===o.SHORT&&(ge=o.RGB16I),ie===o.INT&&(ge=o.RGB32I)),P===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(ge=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(ge=o.RGBA16UI),ie===o.UNSIGNED_INT&&(ge=o.RGBA32UI),ie===o.BYTE&&(ge=o.RGBA8I),ie===o.SHORT&&(ge=o.RGBA16I),ie===o.INT&&(ge=o.RGBA32I)),P===o.RGB&&ie===o.UNSIGNED_INT_5_9_9_9_REV&&(ge=o.RGB9_E5),P===o.RGBA){const Ie=_e?Ih:Ht.getTransfer(ve);ie===o.FLOAT&&(ge=o.RGBA32F),ie===o.HALF_FLOAT&&(ge=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(ge=Ie===Qt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(ge=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(ge=o.RGB5_A1)}return(ge===o.R16F||ge===o.R32F||ge===o.RG16F||ge===o.RG32F||ge===o.RGBA16F||ge===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function T(I,P){let ie;return I?P===null||P===sa||P===Cl?ie=o.DEPTH24_STENCIL8:P===Zr?ie=o.DEPTH32F_STENCIL8:P===nc&&(ie=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===sa||P===Cl?ie=o.DEPTH_COMPONENT24:P===Zr?ie=o.DEPTH_COMPONENT32F:P===nc&&(ie=o.DEPTH_COMPONENT16),ie}function F(I,P){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==er&&I.minFilter!==Kr?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function U(I){const P=I.target;P.removeEventListener("dispose",U),O(P),P.isVideoTexture&&p.delete(P)}function D(I){const P=I.target;P.removeEventListener("dispose",D),w(P)}function O(I){const P=n.get(I);if(P.__webglInit===void 0)return;const ie=I.source,ve=g.get(ie);if(ve){const _e=ve[P.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(I),Object.keys(ve).length===0&&g.delete(ie)}n.remove(I)}function C(I){const P=n.get(I);o.deleteTexture(P.__webglTexture);const ie=I.source,ve=g.get(ie);delete ve[P.__cacheKey],u.memory.textures--}function w(I){const P=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(P.__webglFramebuffer[ve]))for(let _e=0;_e<P.__webglFramebuffer[ve].length;_e++)o.deleteFramebuffer(P.__webglFramebuffer[ve][_e]);else o.deleteFramebuffer(P.__webglFramebuffer[ve]);P.__webglDepthbuffer&&o.deleteRenderbuffer(P.__webglDepthbuffer[ve])}else{if(Array.isArray(P.__webglFramebuffer))for(let ve=0;ve<P.__webglFramebuffer.length;ve++)o.deleteFramebuffer(P.__webglFramebuffer[ve]);else o.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&o.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&o.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ve=0;ve<P.__webglColorRenderbuffer.length;ve++)P.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(P.__webglColorRenderbuffer[ve]);P.__webglDepthRenderbuffer&&o.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ie=I.textures;for(let ve=0,_e=ie.length;ve<_e;ve++){const ge=n.get(ie[ve]);ge.__webglTexture&&(o.deleteTexture(ge.__webglTexture),u.memory.textures--),n.remove(ie[ve])}n.remove(I)}let B=0;function j(){B=0}function K(){const I=B;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),B+=1,I}function se(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function ce(I,P){const ie=n.get(I);if(I.isVideoTexture&&We(I),I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){const ve=I.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(ie,I,P);return}}t.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+P)}function ee(I,P){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Z(ie,I,P);return}t.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+P)}function Q(I,P){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Z(ie,I,P);return}t.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+P)}function H(I,P){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){X(ie,I,P);return}t.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+P)}const le={[jm]:o.REPEAT,[jo]:o.CLAMP_TO_EDGE,[qm]:o.MIRRORED_REPEAT},N={[er]:o.NEAREST,[tA]:o.NEAREST_MIPMAP_NEAREST,[Ef]:o.NEAREST_MIPMAP_LINEAR,[Kr]:o.LINEAR,[Lp]:o.LINEAR_MIPMAP_NEAREST,[qo]:o.LINEAR_MIPMAP_LINEAR},k={[sA]:o.NEVER,[fA]:o.ALWAYS,[oA]:o.LESS,[SM]:o.LEQUAL,[aA]:o.EQUAL,[cA]:o.GEQUAL,[lA]:o.GREATER,[uA]:o.NOTEQUAL};function oe(I,P){if(P.type===Zr&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Kr||P.magFilter===Lp||P.magFilter===Ef||P.magFilter===qo||P.minFilter===Kr||P.minFilter===Lp||P.minFilter===Ef||P.minFilter===qo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,le[P.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,le[P.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,le[P.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,N[P.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,N[P.minFilter]),P.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,k[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===er||P.minFilter!==Ef&&P.minFilter!==qo||P.type===Zr&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Ne(I,P){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",U));const ve=P.source;let _e=g.get(ve);_e===void 0&&(_e={},g.set(ve,_e));const ge=se(P);if(ge!==I.__cacheKey){_e[ge]===void 0&&(_e[ge]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),_e[ge].usedTimes++;const Ie=_e[I.__cacheKey];Ie!==void 0&&(_e[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&C(P)),I.__cacheKey=ge,I.__webglTexture=_e[ge].texture}return ie}function Z(I,P,ie){let ve=o.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ve=o.TEXTURE_3D);const _e=Ne(I,P),ge=P.source;t.bindTexture(ve,I.__webglTexture,o.TEXTURE0+ie);const Ie=n.get(ge);if(ge.version!==Ie.__version||_e===!0){t.activeTexture(o.TEXTURE0+ie);const be=Ht.getPrimaries(Ht.workingColorSpace),Fe=P.colorSpace===Js?null:Ht.getPrimaries(P.colorSpace),mt=P.colorSpace===Js||be===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,P.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,P.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Te=M(P.image,!1,r.maxTextureSize);Te=Rt(P,Te);const Pe=a.convert(P.format,P.colorSpace),st=a.convert(P.type);let it=b(P.internalFormat,Pe,st,P.colorSpace,P.isVideoTexture);oe(ve,P);let Ve;const St=P.mipmaps,at=P.isVideoTexture!==!0,Dt=Ie.__version===void 0||_e===!0,V=ge.dataReady,De=F(P,Te);if(P.isDepthTexture)it=T(P.format===Rl,P.type),Dt&&(at?t.texStorage2D(o.TEXTURE_2D,1,it,Te.width,Te.height):t.texImage2D(o.TEXTURE_2D,0,it,Te.width,Te.height,0,Pe,st,null));else if(P.isDataTexture)if(St.length>0){at&&Dt&&t.texStorage2D(o.TEXTURE_2D,De,it,St[0].width,St[0].height);for(let de=0,me=St.length;de<me;de++)Ve=St[de],at?V&&t.texSubImage2D(o.TEXTURE_2D,de,0,0,Ve.width,Ve.height,Pe,st,Ve.data):t.texImage2D(o.TEXTURE_2D,de,it,Ve.width,Ve.height,0,Pe,st,Ve.data);P.generateMipmaps=!1}else at?(Dt&&t.texStorage2D(o.TEXTURE_2D,De,it,Te.width,Te.height),V&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Te.width,Te.height,Pe,st,Te.data)):t.texImage2D(o.TEXTURE_2D,0,it,Te.width,Te.height,0,Pe,st,Te.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){at&&Dt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,it,St[0].width,St[0].height,Te.depth);for(let de=0,me=St.length;de<me;de++)if(Ve=St[de],P.format!==Fr)if(Pe!==null)if(at){if(V)if(P.layerUpdates.size>0){const Le=Ey(Ve.width,Ve.height,P.format,P.type);for(const Ue of P.layerUpdates){const dt=Ve.data.subarray(Ue*Le/Ve.data.BYTES_PER_ELEMENT,(Ue+1)*Le/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,Ue,Ve.width,Ve.height,1,Pe,dt)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,0,Ve.width,Ve.height,Te.depth,Pe,Ve.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,de,it,Ve.width,Ve.height,Te.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?V&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,0,Ve.width,Ve.height,Te.depth,Pe,st,Ve.data):t.texImage3D(o.TEXTURE_2D_ARRAY,de,it,Ve.width,Ve.height,Te.depth,0,Pe,st,Ve.data)}else{at&&Dt&&t.texStorage2D(o.TEXTURE_2D,De,it,St[0].width,St[0].height);for(let de=0,me=St.length;de<me;de++)Ve=St[de],P.format!==Fr?Pe!==null?at?V&&t.compressedTexSubImage2D(o.TEXTURE_2D,de,0,0,Ve.width,Ve.height,Pe,Ve.data):t.compressedTexImage2D(o.TEXTURE_2D,de,it,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?V&&t.texSubImage2D(o.TEXTURE_2D,de,0,0,Ve.width,Ve.height,Pe,st,Ve.data):t.texImage2D(o.TEXTURE_2D,de,it,Ve.width,Ve.height,0,Pe,st,Ve.data)}else if(P.isDataArrayTexture)if(at){if(Dt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,it,Te.width,Te.height,Te.depth),V)if(P.layerUpdates.size>0){const de=Ey(Te.width,Te.height,P.format,P.type);for(const me of P.layerUpdates){const Le=Te.data.subarray(me*de/Te.data.BYTES_PER_ELEMENT,(me+1)*de/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,Pe,st,Le)}P.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Pe,st,Te.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,it,Te.width,Te.height,Te.depth,0,Pe,st,Te.data);else if(P.isData3DTexture)at?(Dt&&t.texStorage3D(o.TEXTURE_3D,De,it,Te.width,Te.height,Te.depth),V&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Pe,st,Te.data)):t.texImage3D(o.TEXTURE_3D,0,it,Te.width,Te.height,Te.depth,0,Pe,st,Te.data);else if(P.isFramebufferTexture){if(Dt)if(at)t.texStorage2D(o.TEXTURE_2D,De,it,Te.width,Te.height);else{let de=Te.width,me=Te.height;for(let Le=0;Le<De;Le++)t.texImage2D(o.TEXTURE_2D,Le,it,de,me,0,Pe,st,null),de>>=1,me>>=1}}else if(St.length>0){if(at&&Dt){const de=je(St[0]);t.texStorage2D(o.TEXTURE_2D,De,it,de.width,de.height)}for(let de=0,me=St.length;de<me;de++)Ve=St[de],at?V&&t.texSubImage2D(o.TEXTURE_2D,de,0,0,Pe,st,Ve):t.texImage2D(o.TEXTURE_2D,de,it,Pe,st,Ve);P.generateMipmaps=!1}else if(at){if(Dt){const de=je(Te);t.texStorage2D(o.TEXTURE_2D,De,it,de.width,de.height)}V&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,st,Te)}else t.texImage2D(o.TEXTURE_2D,0,it,Pe,st,Te);y(P)&&x(ve),Ie.__version=ge.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function X(I,P,ie){if(P.image.length!==6)return;const ve=Ne(I,P),_e=P.source;t.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+ie);const ge=n.get(_e);if(_e.version!==ge.__version||ve===!0){t.activeTexture(o.TEXTURE0+ie);const Ie=Ht.getPrimaries(Ht.workingColorSpace),be=P.colorSpace===Js?null:Ht.getPrimaries(P.colorSpace),Fe=P.colorSpace===Js||Ie===be?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,P.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,P.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const mt=P.isCompressedTexture||P.image[0].isCompressedTexture,Te=P.image[0]&&P.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!mt&&!Te?Pe[me]=M(P.image[me],!0,r.maxCubemapSize):Pe[me]=Te?P.image[me].image:P.image[me],Pe[me]=Rt(P,Pe[me]);const st=Pe[0],it=a.convert(P.format,P.colorSpace),Ve=a.convert(P.type),St=b(P.internalFormat,it,Ve,P.colorSpace),at=P.isVideoTexture!==!0,Dt=ge.__version===void 0||ve===!0,V=_e.dataReady;let De=F(P,st);oe(o.TEXTURE_CUBE_MAP,P);let de;if(mt){at&&Dt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,De,St,st.width,st.height);for(let me=0;me<6;me++){de=Pe[me].mipmaps;for(let Le=0;Le<de.length;Le++){const Ue=de[Le];P.format!==Fr?it!==null?at?V&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,Ue.width,Ue.height,it,Ue.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,St,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,0,0,Ue.width,Ue.height,it,Ve,Ue.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le,St,Ue.width,Ue.height,0,it,Ve,Ue.data)}}}else{if(de=P.mipmaps,at&&Dt){de.length>0&&De++;const me=je(Pe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,De,St,me.width,me.height)}for(let me=0;me<6;me++)if(Te){at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,it,Ve,Pe[me].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,St,Pe[me].width,Pe[me].height,0,it,Ve,Pe[me].data);for(let Le=0;Le<de.length;Le++){const dt=de[Le].image[me].image;at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,dt.width,dt.height,it,Ve,dt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,St,dt.width,dt.height,0,it,Ve,dt.data)}}else{at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,it,Ve,Pe[me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,St,it,Ve,Pe[me]);for(let Le=0;Le<de.length;Le++){const Ue=de[Le];at?V&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,0,0,it,Ve,Ue.image[me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le+1,St,it,Ve,Ue.image[me])}}}y(P)&&x(o.TEXTURE_CUBE_MAP),ge.__version=_e.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function pe(I,P,ie,ve,_e,ge){const Ie=a.convert(ie.format,ie.colorSpace),be=a.convert(ie.type),Fe=b(ie.internalFormat,Ie,be,ie.colorSpace),mt=n.get(P),Te=n.get(ie);if(Te.__renderTarget=P,!mt.__hasExternalTextures){const Pe=Math.max(1,P.width>>ge),st=Math.max(1,P.height>>ge);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,ge,Fe,Pe,st,P.depth,0,Ie,be,null):t.texImage2D(_e,ge,Fe,Pe,st,0,Ie,be,null)}t.bindFramebuffer(o.FRAMEBUFFER,I),J(P)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,_e,Te.__webglTexture,0,ht(P)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,_e,Te.__webglTexture,ge),t.bindFramebuffer(o.FRAMEBUFFER,null)}function fe(I,P,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,I),P.depthBuffer){const ve=P.depthTexture,_e=ve&&ve.isDepthTexture?ve.type:null,ge=T(P.stencilBuffer,_e),Ie=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,be=ht(P);J(P)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,be,ge,P.width,P.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,be,ge,P.width,P.height):o.renderbufferStorage(o.RENDERBUFFER,ge,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,I)}else{const ve=P.textures;for(let _e=0;_e<ve.length;_e++){const ge=ve[_e],Ie=a.convert(ge.format,ge.colorSpace),be=a.convert(ge.type),Fe=b(ge.internalFormat,Ie,be,ge.colorSpace),mt=ht(P);ie&&J(P)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,Fe,P.width,P.height):J(P)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt,Fe,P.width,P.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,P.width,P.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ye(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=n.get(P.depthTexture);ve.__renderTarget=P,(!ve.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ce(P.depthTexture,0);const _e=ve.__webglTexture,ge=ht(P);if(P.depthTexture.format===gl)J(P)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(P.depthTexture.format===Rl)J(P)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ae(I){const P=n.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==I.depthTexture){const ve=I.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ve){const _e=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ve.removeEventListener("dispose",_e)};ve.addEventListener("dispose",_e),P.__depthDisposeCallback=_e}P.__boundDepthTexture=ve}if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");ye(P.__webglFramebuffer,I)}else if(ie){P.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(o.FRAMEBUFFER,P.__webglFramebuffer[ve]),P.__webglDepthbuffer[ve]===void 0)P.__webglDepthbuffer[ve]=o.createRenderbuffer(),fe(P.__webglDepthbuffer[ve],I,!1);else{const _e=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=P.__webglDepthbuffer[ve];o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=o.createRenderbuffer(),fe(P.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=P.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,_e)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(I,P,ie){const ve=n.get(I);P!==void 0&&pe(ve.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&Ae(I)}function _t(I){const P=I.texture,ie=n.get(I),ve=n.get(P);I.addEventListener("dispose",D);const _e=I.textures,ge=I.isWebGLCubeRenderTarget===!0,Ie=_e.length>1;if(Ie||(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=P.version,u.memory.textures++),ge){ie.__webglFramebuffer=[];for(let be=0;be<6;be++)if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer[be]=[];for(let Fe=0;Fe<P.mipmaps.length;Fe++)ie.__webglFramebuffer[be][Fe]=o.createFramebuffer()}else ie.__webglFramebuffer[be]=o.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer=[];for(let be=0;be<P.mipmaps.length;be++)ie.__webglFramebuffer[be]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let be=0,Fe=_e.length;be<Fe;be++){const mt=n.get(_e[be]);mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture(),u.memory.textures++)}if(I.samples>0&&J(I)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let be=0;be<_e.length;be++){const Fe=_e[be];ie.__webglColorRenderbuffer[be]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[be]);const mt=a.convert(Fe.format,Fe.colorSpace),Te=a.convert(Fe.type),Pe=b(Fe.internalFormat,mt,Te,Fe.colorSpace,I.isXRRenderTarget===!0),st=ht(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,st,Pe,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+be,o.RENDERBUFFER,ie.__webglColorRenderbuffer[be])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),fe(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ge){t.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),oe(o.TEXTURE_CUBE_MAP,P);for(let be=0;be<6;be++)if(P.mipmaps&&P.mipmaps.length>0)for(let Fe=0;Fe<P.mipmaps.length;Fe++)pe(ie.__webglFramebuffer[be][Fe],I,P,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe);else pe(ie.__webglFramebuffer[be],I,P,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(P)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let be=0,Fe=_e.length;be<Fe;be++){const mt=_e[be],Te=n.get(mt);t.bindTexture(o.TEXTURE_2D,Te.__webglTexture),oe(o.TEXTURE_2D,mt),pe(ie.__webglFramebuffer,I,mt,o.COLOR_ATTACHMENT0+be,o.TEXTURE_2D,0),y(mt)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let be=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(be,ve.__webglTexture),oe(be,P),P.mipmaps&&P.mipmaps.length>0)for(let Fe=0;Fe<P.mipmaps.length;Fe++)pe(ie.__webglFramebuffer[Fe],I,P,o.COLOR_ATTACHMENT0,be,Fe);else pe(ie.__webglFramebuffer,I,P,o.COLOR_ATTACHMENT0,be,0);y(P)&&x(be),t.unbindTexture()}I.depthBuffer&&Ae(I)}function ot(I){const P=I.textures;for(let ie=0,ve=P.length;ie<ve;ie++){const _e=P[ie];if(y(_e)){const ge=R(I),Ie=n.get(_e).__webglTexture;t.bindTexture(ge,Ie),x(ge),t.unbindTexture()}}}const $e=[],W=[];function kt(I){if(I.samples>0){if(J(I)===!1){const P=I.textures,ie=I.width,ve=I.height;let _e=o.COLOR_BUFFER_BIT;const ge=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=n.get(I),be=P.length>1;if(be)for(let Fe=0;Fe<P.length;Fe++)t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Fe=0;Fe<P.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),be){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Fe]);const mt=n.get(P[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,mt,0)}o.blitFramebuffer(0,0,ie,ve,0,0,ie,ve,_e,o.NEAREST),f===!0&&($e.length=0,W.length=0,$e.push(o.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&($e.push(ge),W.push(ge),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,W)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<P.length;Fe++){t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Fe]);const mt=n.get(P[Fe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,mt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const P=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[P])}}}function ht(I){return Math.min(r.maxSamples,I.samples)}function J(I){const P=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function We(I){const P=u.render.frame;p.get(I)!==P&&(p.set(I,P),I.update())}function Rt(I,P){const ie=I.colorSpace,ve=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ie!==la&&ie!==Js&&(Ht.getTransfer(ie)===Qt?(ve!==Fr||_e!==Ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),P}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.setTexture2D=ce,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Qe,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=J}function m2(o,e){function t(n,r=Js){let a;const u=Ht.getTransfer(r);if(n===Ts)return o.UNSIGNED_BYTE;if(n===e_)return o.UNSIGNED_SHORT_4_4_4_4;if(n===t_)return o.UNSIGNED_SHORT_5_5_5_1;if(n===dM)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===fM)return o.BYTE;if(n===hM)return o.SHORT;if(n===nc)return o.UNSIGNED_SHORT;if(n===Jg)return o.INT;if(n===sa)return o.UNSIGNED_INT;if(n===Zr)return o.FLOAT;if(n===rc)return o.HALF_FLOAT;if(n===pM)return o.ALPHA;if(n===mM)return o.RGB;if(n===Fr)return o.RGBA;if(n===gM)return o.LUMINANCE;if(n===_M)return o.LUMINANCE_ALPHA;if(n===gl)return o.DEPTH_COMPONENT;if(n===Rl)return o.DEPTH_STENCIL;if(n===n_)return o.RED;if(n===i_)return o.RED_INTEGER;if(n===vM)return o.RG;if(n===r_)return o.RG_INTEGER;if(n===s_)return o.RGBA_INTEGER;if(n===lh||n===uh||n===ch||n===fh)if(u===Qt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===lh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ch)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===lh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ch)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$m||n===Km||n===Zm||n===Qm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===$m)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Km)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jm||n===eg||n===tg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Jm||n===eg)return u===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===tg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ng||n===ig||n===rg||n===sg||n===og||n===ag||n===lg||n===ug||n===cg||n===fg||n===hg||n===dg||n===pg||n===mg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ng)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ig)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===og)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ag)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ug)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mg)return u===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hh||n===gg||n===_g)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===hh)return u===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_g)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xM||n===vg||n===xg||n===yg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===hh)return a.COMPRESSED_RED_RGTC1_EXT;if(n===vg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cl?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class g2 extends _r{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wf extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _2={type:"move"};class am{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),x=this._getHandJoint(d,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=p.position.distanceTo(_.position),v=.02,E=.005;d.inputState.pinching&&g>v+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=v-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(_2)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const v2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ui,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Or({vertexShader:v2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qi(new Pl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S2 extends Dl{constructor(e,t){super();const n=this;let r=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,_=null,g=null,v=null,E=null;const M=new y2,y=t.getContextAttributes();let x=null,R=null;const b=[],T=[],F=new Ct;let U=null;const D=new _r;D.viewport=new yn;const O=new _r;O.viewport=new yn;const C=[D,O],w=new g2;let B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let X=b[Z];return X===void 0&&(X=new am,b[Z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(Z){let X=b[Z];return X===void 0&&(X=new am,b[Z]=X),X.getGripSpace()},this.getHand=function(Z){let X=b[Z];return X===void 0&&(X=new am,b[Z]=X),X.getHandSpace()};function K(Z){const X=T.indexOf(Z.inputSource);if(X===-1)return;const pe=b[X];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,d||u),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function se(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",ce);for(let Z=0;Z<b.length;Z++){const X=T[Z];X!==null&&(T[Z]=null,b[Z].disconnect(X))}B=null,j=null,M.reset(),e.setRenderTarget(x),v=null,g=null,_=null,r=null,R=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Z){d=Z},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",se),r.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const X={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),R=new oa(v.framebufferWidth,v.framebufferHeight,{format:Fr,type:Ts,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let X=null,pe=null,fe=null;y.depth&&(fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=y.stencil?Rl:gl,pe=y.stencil?Cl:sa);const ye={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:a};_=new XRWebGLBinding(r,t),g=_.createProjectionLayer(ye),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new oa(g.textureWidth,g.textureHeight,{format:Fr,type:Ts,depthTexture:new UM(g.textureWidth,g.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await r.requestReferenceSpace(c),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(Z){for(let X=0;X<Z.removed.length;X++){const pe=Z.removed[X],fe=T.indexOf(pe);fe>=0&&(T[fe]=null,b[fe].disconnect(pe))}for(let X=0;X<Z.added.length;X++){const pe=Z.added[X];let fe=T.indexOf(pe);if(fe===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=T.length){T.push(pe),fe=Ae;break}else if(T[Ae]===null){T[Ae]=pe,fe=Ae;break}if(fe===-1)break}const ye=b[fe];ye&&ye.connect(pe)}}const ee=new ue,Q=new ue;function H(Z,X,pe){ee.setFromMatrixPosition(X.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const fe=ee.distanceTo(Q),ye=X.projectionMatrix.elements,Ae=pe.projectionMatrix.elements,Qe=ye[14]/(ye[10]-1),_t=ye[14]/(ye[10]+1),ot=(ye[9]+1)/ye[5],$e=(ye[9]-1)/ye[5],W=(ye[8]-1)/ye[0],kt=(Ae[8]+1)/Ae[0],ht=Qe*W,J=Qe*kt,We=fe/(-W+kt),Rt=We*-W;if(X.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(We),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ye[10]===-1)Z.projectionMatrix.copy(X.projectionMatrix),Z.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const je=Qe+We,I=_t+We,P=ht-Rt,ie=J+(fe-Rt),ve=ot*_t/I*je,_e=$e*_t/I*je;Z.projectionMatrix.makePerspective(P,ie,ve,_e,je,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,X){X===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(X.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let X=Z.near,pe=Z.far;M.texture!==null&&(M.depthNear>0&&(X=M.depthNear),M.depthFar>0&&(pe=M.depthFar)),w.near=O.near=D.near=X,w.far=O.far=D.far=pe,(B!==w.near||j!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,j=w.far),D.layers.mask=Z.layers.mask|2,O.layers.mask=Z.layers.mask|4,w.layers.mask=D.layers.mask|O.layers.mask;const fe=Z.parent,ye=w.cameras;le(w,fe);for(let Ae=0;Ae<ye.length;Ae++)le(ye[Ae],fe);ye.length===2?H(w,D,O):w.projectionMatrix.copy(D.projectionMatrix),N(Z,w,fe)};function N(Z,X,pe){pe===null?Z.matrix.copy(X.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(X.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(X.projectionMatrix),Z.projectionMatrixInverse.copy(X.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mg*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(Z){f=Z,g!==null&&(g.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(w)};let k=null;function oe(Z,X){if(p=X.getViewerPose(d||u),E=X,p!==null){const pe=p.views;v!==null&&(e.setRenderTargetFramebuffer(R,v.framebuffer),e.setRenderTarget(R));let fe=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,fe=!0);for(let Ae=0;Ae<pe.length;Ae++){const Qe=pe[Ae];let _t=null;if(v!==null)_t=v.getViewport(Qe);else{const $e=_.getViewSubImage(g,Qe);_t=$e.viewport,Ae===0&&(e.setRenderTargetTextures(R,$e.colorTexture,g.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(R))}let ot=C[Ae];ot===void 0&&(ot=new _r,ot.layers.enable(Ae),ot.viewport=new yn,C[Ae]=ot),ot.matrix.fromArray(Qe.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Qe.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(_t.x,_t.y,_t.width,_t.height),Ae===0&&(w.matrix.copy(ot.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),fe===!0&&w.cameras.push(ot)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Ae=_.getDepthInformation(pe[0]);Ae&&Ae.isValid&&Ae.texture&&M.init(e,Ae,r.renderState)}}for(let pe=0;pe<b.length;pe++){const fe=T[pe],ye=b[pe];fe!==null&&ye!==void 0&&ye.update(fe,X,d||u)}k&&k(Z,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),E=null}const Ne=new NM;Ne.setAnimationLoop(oe),this.setAnimationLoop=function(Z){k=Z},this.dispose=function(){}}}const Oo=new ws,M2=new rn;function E2(o,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,PM(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function r(y,x,R,b,T){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),_(y,x)):x.isMeshPhongMaterial?(a(y,x),p(y,x)):x.isMeshStandardMaterial?(a(y,x),g(y,x),x.isMeshPhysicalMaterial&&v(y,x,T)):x.isMeshMatcapMaterial?(a(y,x),E(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),M(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?f(y,x,R,b):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Si&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Si&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=e.get(x),b=R.envMap,T=R.envMapRotation;b&&(y.envMap.value=b,Oo.copy(T),Oo.x*=-1,Oo.y*=-1,Oo.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oo.y*=-1,Oo.z*=-1),y.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(Oo)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,R,b){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=b*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function v(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Si&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const R=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function T2(o,e,t,n){let r={},a={},u=[];const c=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,b){const T=b.program;n.uniformBlockBinding(R,T)}function d(R,b){let T=r[R.id];T===void 0&&(E(R),T=p(R),r[R.id]=T,R.addEventListener("dispose",y));const F=b.program;n.updateUBOMapping(R,F);const U=e.render.frame;a[R.id]!==U&&(g(R),a[R.id]=U)}function p(R){const b=_();R.__bindingPointIndex=b;const T=o.createBuffer(),F=R.__size,U=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,T),o.bufferData(o.UNIFORM_BUFFER,F,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,T),T}function _(){for(let R=0;R<c;R++)if(u.indexOf(R)===-1)return u.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const b=r[R.id],T=R.uniforms,F=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let U=0,D=T.length;U<D;U++){const O=Array.isArray(T[U])?T[U]:[T[U]];for(let C=0,w=O.length;C<w;C++){const B=O[C];if(v(B,U,C,F)===!0){const j=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let se=0;for(let ce=0;ce<K.length;ce++){const ee=K[ce],Q=M(ee);typeof ee=="number"||typeof ee=="boolean"?(B.__data[0]=ee,o.bufferSubData(o.UNIFORM_BUFFER,j+se,B.__data)):ee.isMatrix3?(B.__data[0]=ee.elements[0],B.__data[1]=ee.elements[1],B.__data[2]=ee.elements[2],B.__data[3]=0,B.__data[4]=ee.elements[3],B.__data[5]=ee.elements[4],B.__data[6]=ee.elements[5],B.__data[7]=0,B.__data[8]=ee.elements[6],B.__data[9]=ee.elements[7],B.__data[10]=ee.elements[8],B.__data[11]=0):(ee.toArray(B.__data,se),se+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(R,b,T,F){const U=R.value,D=b+"_"+T;if(F[D]===void 0)return typeof U=="number"||typeof U=="boolean"?F[D]=U:F[D]=U.clone(),!0;{const O=F[D];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return F[D]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function E(R){const b=R.uniforms;let T=0;const F=16;for(let D=0,O=b.length;D<O;D++){const C=Array.isArray(b[D])?b[D]:[b[D]];for(let w=0,B=C.length;w<B;w++){const j=C[w],K=Array.isArray(j.value)?j.value:[j.value];for(let se=0,ce=K.length;se<ce;se++){const ee=K[se],Q=M(ee),H=T%F,le=H%Q.boundary,N=H+le;T+=le,N!==0&&F-N<Q.storage&&(T+=F-N),j.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=T,T+=Q.storage}}}const U=T%F;return U>0&&(T+=F-U),R.__size=T,R.__cache={},this}function M(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function y(R){const b=R.target;b.removeEventListener("dispose",y);const T=u.indexOf(b.__bindingPointIndex);u.splice(T,1),o.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function x(){for(const R in r)o.deleteBuffer(r[R]);u=[],r={},a={}}return{bind:f,update:d,dispose:x}}class w2{constructor(e={}){const{canvas:t=dA(),context:n=null,depth:r=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=u;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const R=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pr,this.toneMapping=uo,this.toneMappingExposure=1;const T=this;let F=!1,U=0,D=0,O=null,C=-1,w=null;const B=new yn,j=new yn;let K=null;const se=new Ot(0);let ce=0,ee=t.width,Q=t.height,H=1,le=null,N=null;const k=new yn(0,0,ee,Q),oe=new yn(0,0,ee,Q);let Ne=!1;const Z=new a_;let X=!1,pe=!1;const fe=new rn,ye=new rn,Ae=new ue,Qe=new yn,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function $e(){return O===null?H:1}let W=n;function kt(L,Y){return t.getContext(L,Y)}try{const L={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qg}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),W===null){const Y="webgl2";if(W=kt(Y,L),W===null)throw kt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ht,J,We,Rt,je,I,P,ie,ve,_e,ge,Ie,be,Fe,mt,Te,Pe,st,it,Ve,St,at,Dt,V;function De(){ht=new Pb(W),ht.init(),at=new m2(W,ht),J=new Tb(W,ht,e,at),We=new h2(W,ht),J.reverseDepthBuffer&&g&&We.buffers.depth.setReversed(!0),Rt=new Nb(W),je=new ZP,I=new p2(W,ht,We,je,J,at,Rt),P=new Ab(T),ie=new bb(T),ve=new BA(W),Dt=new Mb(W,ve),_e=new Db(W,ve,Rt,Dt),ge=new Ub(W,_e,ve,Rt),it=new Ib(W,J,I),Te=new wb(je),Ie=new KP(T,P,ie,ht,J,Dt,Te),be=new E2(T,je),Fe=new JP,mt=new s2(ht),st=new Sb(T,P,ie,We,ge,v,f),Pe=new c2(T,ge,J),V=new T2(W,Rt,J,We),Ve=new Eb(W,ht,Rt),St=new Lb(W,ht,Rt),Rt.programs=Ie.programs,T.capabilities=J,T.extensions=ht,T.properties=je,T.renderLists=Fe,T.shadowMap=Pe,T.state=We,T.info=Rt}De();const de=new S2(T,W);this.xr=de,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=ht.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ht.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(ee,Q,!1))},this.getSize=function(L){return L.set(ee,Q)},this.setSize=function(L,Y,ne=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=L,Q=Y,t.width=Math.floor(L*H),t.height=Math.floor(Y*H),ne===!0&&(t.style.width=L+"px",t.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(ee*H,Q*H).floor()},this.setDrawingBufferSize=function(L,Y,ne){ee=L,Q=Y,H=ne,t.width=Math.floor(L*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,Y,ne,re){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,Y,ne,re),We.viewport(B.copy(k).multiplyScalar(H).round())},this.getScissor=function(L){return L.copy(oe)},this.setScissor=function(L,Y,ne,re){L.isVector4?oe.set(L.x,L.y,L.z,L.w):oe.set(L,Y,ne,re),We.scissor(j.copy(oe).multiplyScalar(H).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(L){We.setScissorTest(Ne=L)},this.setOpaqueSort=function(L){le=L},this.setTransparentSort=function(L){N=L},this.getClearColor=function(L){return L.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(L=!0,Y=!0,ne=!0){let re=0;if(L){let $=!1;if(O!==null){const Ce=O.texture.format;$=Ce===s_||Ce===r_||Ce===i_}if($){const Ce=O.texture.type,Se=Ce===Ts||Ce===sa||Ce===nc||Ce===Cl||Ce===e_||Ce===t_,ke=st.getClearColor(),He=st.getClearAlpha(),pt=ke.r,gt=ke.g,Xe=ke.b;Se?(E[0]=pt,E[1]=gt,E[2]=Xe,E[3]=He,W.clearBufferuiv(W.COLOR,0,E)):(M[0]=pt,M[1]=gt,M[2]=Xe,M[3]=He,W.clearBufferiv(W.COLOR,0,M))}else re|=W.COLOR_BUFFER_BIT}Y&&(re|=W.DEPTH_BUFFER_BIT),ne&&(re|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Fe.dispose(),mt.dispose(),je.dispose(),P.dispose(),ie.dispose(),ge.dispose(),Dt.dispose(),V.dispose(),Ie.dispose(),de.dispose(),de.removeEventListener("sessionstart",Oe),de.removeEventListener("sessionend",ut),Je.stop()};function me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const L=Rt.autoReset,Y=Pe.enabled,ne=Pe.autoUpdate,re=Pe.needsUpdate,$=Pe.type;De(),Rt.autoReset=L,Pe.enabled=Y,Pe.autoUpdate=ne,Pe.needsUpdate=re,Pe.type=$}function Ue(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function dt(L){const Y=L.target;Y.removeEventListener("dispose",dt),zt(Y)}function zt(L){an(L),je.remove(L)}function an(L){const Y=je.get(L).programs;Y!==void 0&&(Y.forEach(function(ne){Ie.releaseProgram(ne)}),L.isShaderMaterial&&Ie.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,ne,re,$,Ce){Y===null&&(Y=_t);const Se=$.isMesh&&$.matrixWorld.determinant()<0,ke=Kn(L,Y,ne,re,$);We.setMaterial(re,Se);let He=ne.index,pt=1;if(re.wireframe===!0){if(He=_e.getWireframeAttribute(ne),He===void 0)return;pt=2}const gt=ne.drawRange,Xe=ne.attributes.position;let yt=gt.start*pt,Ft=(gt.start+gt.count)*pt;Ce!==null&&(yt=Math.max(yt,Ce.start*pt),Ft=Math.min(Ft,(Ce.start+Ce.count)*pt)),He!==null?(yt=Math.max(yt,0),Ft=Math.min(Ft,He.count)):Xe!=null&&(yt=Math.max(yt,0),Ft=Math.min(Ft,Xe.count));const Tt=Ft-yt;if(Tt<0||Tt===1/0)return;Dt.setup($,re,ke,ne,He);let ln,Et=Ve;if(He!==null&&(ln=ve.get(He),Et=St,Et.setIndex(ln)),$.isMesh)re.wireframe===!0?(We.setLineWidth(re.wireframeLinewidth*$e()),Et.setMode(W.LINES)):Et.setMode(W.TRIANGLES);else if($.isLine){let rt=re.linewidth;rt===void 0&&(rt=1),We.setLineWidth(rt*$e()),$.isLineSegments?Et.setMode(W.LINES):$.isLineLoop?Et.setMode(W.LINE_LOOP):Et.setMode(W.LINE_STRIP)}else $.isPoints?Et.setMode(W.POINTS):$.isSprite&&Et.setMode(W.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Et.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const rt=$._multiDrawStarts,Er=$._multiDrawCounts,Gt=$._multiDrawCount,Zn=He?ve.get(He).bytesPerElement:1,Tr=je.get(re).currentProgram.getUniforms();for(let Dn=0;Dn<Gt;Dn++)Tr.setValue(W,"_gl_DrawID",Dn),Et.render(rt[Dn]/Zn,Er[Dn])}else if($.isInstancedMesh)Et.renderInstances(yt,Tt,$.count);else if(ne.isInstancedBufferGeometry){const rt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Er=Math.min(ne.instanceCount,rt);Et.renderInstances(yt,Tt,Er)}else Et.render(yt,Tt)};function ze(L,Y,ne){L.transparent===!0&&L.side===Ur&&L.forceSinglePass===!1?(L.side=Si,L.needsUpdate=!0,jt(L,Y,ne),L.side=go,L.needsUpdate=!0,jt(L,Y,ne),L.side=Ur):jt(L,Y,ne)}this.compile=function(L,Y,ne=null){ne===null&&(ne=L),x=mt.get(ne),x.init(Y),b.push(x),ne.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),L!==ne&&L.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const re=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ce=$.material;if(Ce)if(Array.isArray(Ce))for(let Se=0;Se<Ce.length;Se++){const ke=Ce[Se];ze(ke,ne,$),re.add(ke)}else ze(Ce,ne,$),re.add(Ce)}),b.pop(),x=null,re},this.compileAsync=function(L,Y,ne=null){const re=this.compile(L,Y,ne);return new Promise($=>{function Ce(){if(re.forEach(function(Se){je.get(Se).currentProgram.isReady()&&re.delete(Se)}),re.size===0){$(L);return}setTimeout(Ce,10)}ht.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ke=null;function vt(L){Ke&&Ke(L)}function Oe(){Je.stop()}function ut(){Je.start()}const Je=new NM;Je.setAnimationLoop(vt),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(L){Ke=L,de.setAnimationLoop(L),L===null?Je.stop():Je.start()},de.addEventListener("sessionstart",Oe),de.addEventListener("sessionend",ut),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(Y),Y=de.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,Y,O),x=mt.get(L,b.length),x.init(Y),b.push(x),ye.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Z.setFromProjectionMatrix(ye),pe=this.localClippingEnabled,X=Te.init(this.clippingPlanes,pe),y=Fe.get(L,R.length),y.init(),R.push(y),de.enabled===!0&&de.isPresenting===!0){const Ce=T.xr.getDepthSensingMesh();Ce!==null&&lt(Ce,Y,-1/0,T.sortObjects)}lt(L,Y,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(le,N),ot=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ot&&st.addToRenderList(y,L),this.info.render.frame++,X===!0&&Te.beginShadows();const ne=x.state.shadowsArray;Pe.render(ne,L,Y),X===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,$=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const Ce=Y.cameras;if($.length>0)for(let Se=0,ke=Ce.length;Se<ke;Se++){const He=Ce[Se];Mt(re,$,L,He)}ot&&st.render(L);for(let Se=0,ke=Ce.length;Se<ke;Se++){const He=Ce[Se];sn(y,L,He,He.viewport)}}else $.length>0&&Mt(re,$,L,Y),ot&&st.render(L),sn(y,L,Y);O!==null&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(T,L,Y),Dt.resetDefaultState(),C=-1,w=null,b.pop(),b.length>0?(x=b[b.length-1],X===!0&&Te.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function lt(L,Y,ne,re){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)ne=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Z.intersectsSprite(L)){re&&Qe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ye);const Se=ge.update(L),ke=L.material;ke.visible&&y.push(L,Se,ke,ne,Qe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Z.intersectsObject(L))){const Se=ge.update(L),ke=L.material;if(re&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Qe.copy(L.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Qe.copy(Se.boundingSphere.center)),Qe.applyMatrix4(L.matrixWorld).applyMatrix4(ye)),Array.isArray(ke)){const He=Se.groups;for(let pt=0,gt=He.length;pt<gt;pt++){const Xe=He[pt],yt=ke[Xe.materialIndex];yt&&yt.visible&&y.push(L,Se,yt,ne,Qe.z,Xe)}}else ke.visible&&y.push(L,Se,ke,ne,Qe.z,null)}}const Ce=L.children;for(let Se=0,ke=Ce.length;Se<ke;Se++)lt(Ce[Se],Y,ne,re)}function sn(L,Y,ne,re){const $=L.opaque,Ce=L.transmissive,Se=L.transparent;x.setupLightsView(ne),X===!0&&Te.setGlobalState(T.clippingPlanes,ne),re&&We.viewport(B.copy(re)),$.length>0&&Xt($,Y,ne),Ce.length>0&&Xt(Ce,Y,ne),Se.length>0&&Xt(Se,Y,ne),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Mt(L,Y,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[re.id]===void 0&&(x.state.transmissionRenderTarget[re.id]=new oa(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?rc:Ts,minFilter:qo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const Ce=x.state.transmissionRenderTarget[re.id],Se=re.viewport||B;Ce.setSize(Se.z,Se.w);const ke=T.getRenderTarget();T.setRenderTarget(Ce),T.getClearColor(se),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),ot&&st.render(ne);const He=T.toneMapping;T.toneMapping=uo;const pt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),x.setupLightsView(re),X===!0&&Te.setGlobalState(T.clippingPlanes,re),Xt(L,ne,re),I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce),ht.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Xe=0,yt=Y.length;Xe<yt;Xe++){const Ft=Y[Xe],Tt=Ft.object,ln=Ft.geometry,Et=Ft.material,rt=Ft.group;if(Et.side===Ur&&Tt.layers.test(re.layers)){const Er=Et.side;Et.side=Si,Et.needsUpdate=!0,Mn(Tt,ne,re,ln,Et,rt),Et.side=Er,Et.needsUpdate=!0,gt=!0}}gt===!0&&(I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce))}T.setRenderTarget(ke),T.setClearColor(se,ce),pt!==void 0&&(re.viewport=pt),T.toneMapping=He}function Xt(L,Y,ne){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ce=L.length;$<Ce;$++){const Se=L[$],ke=Se.object,He=Se.geometry,pt=re===null?Se.material:re,gt=Se.group;ke.layers.test(ne.layers)&&Mn(ke,Y,ne,He,pt,gt)}}function Mn(L,Y,ne,re,$,Ce){L.onBeforeRender(T,Y,ne,re,$,Ce),L.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(T,Y,ne,re,L,Ce),$.transparent===!0&&$.side===Ur&&$.forceSinglePass===!1?($.side=Si,$.needsUpdate=!0,T.renderBufferDirect(ne,Y,re,$,L,Ce),$.side=go,$.needsUpdate=!0,T.renderBufferDirect(ne,Y,re,$,L,Ce),$.side=Ur):T.renderBufferDirect(ne,Y,re,$,L,Ce),L.onAfterRender(T,Y,ne,re,$,Ce)}function jt(L,Y,ne){Y.isScene!==!0&&(Y=_t);const re=je.get(L),$=x.state.lights,Ce=x.state.shadowsArray,Se=$.state.version,ke=Ie.getParameters(L,$.state,Ce,Y,ne),He=Ie.getProgramCacheKey(ke);let pt=re.programs;re.environment=L.isMeshStandardMaterial?Y.environment:null,re.fog=Y.fog,re.envMap=(L.isMeshStandardMaterial?ie:P).get(L.envMap||re.environment),re.envMapRotation=re.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,pt===void 0&&(L.addEventListener("dispose",dt),pt=new Map,re.programs=pt);let gt=pt.get(He);if(gt!==void 0){if(re.currentProgram===gt&&re.lightsStateVersion===Se)return Lt(L,ke),gt}else ke.uniforms=Ie.getUniforms(L),L.onBeforeCompile(ke,T),gt=Ie.acquireProgram(ke,He),pt.set(He,gt),re.uniforms=ke.uniforms;const Xe=re.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Xe.clippingPlanes=Te.uniform),Lt(L,ke),re.needsLights=Xn(L),re.lightsStateVersion=Se,re.needsLights&&(Xe.ambientLightColor.value=$.state.ambient,Xe.lightProbe.value=$.state.probe,Xe.directionalLights.value=$.state.directional,Xe.directionalLightShadows.value=$.state.directionalShadow,Xe.spotLights.value=$.state.spot,Xe.spotLightShadows.value=$.state.spotShadow,Xe.rectAreaLights.value=$.state.rectArea,Xe.ltc_1.value=$.state.rectAreaLTC1,Xe.ltc_2.value=$.state.rectAreaLTC2,Xe.pointLights.value=$.state.point,Xe.pointLightShadows.value=$.state.pointShadow,Xe.hemisphereLights.value=$.state.hemi,Xe.directionalShadowMap.value=$.state.directionalShadowMap,Xe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xe.spotShadowMap.value=$.state.spotShadowMap,Xe.spotLightMatrix.value=$.state.spotLightMatrix,Xe.spotLightMap.value=$.state.spotLightMap,Xe.pointShadowMap.value=$.state.pointShadowMap,Xe.pointShadowMatrix.value=$.state.pointShadowMatrix),re.currentProgram=gt,re.uniformsList=null,gt}function qt(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=dh.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function Lt(L,Y){const ne=je.get(L);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function Kn(L,Y,ne,re,$){Y.isScene!==!0&&(Y=_t),I.resetTextureUnits();const Ce=Y.fog,Se=re.isMeshStandardMaterial?Y.environment:null,ke=O===null?T.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:la,He=(re.isMeshStandardMaterial?ie:P).get(re.envMap||Se),pt=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,gt=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Xe=!!ne.morphAttributes.position,yt=!!ne.morphAttributes.normal,Ft=!!ne.morphAttributes.color;let Tt=uo;re.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Tt=T.toneMapping);const ln=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Et=ln!==void 0?ln.length:0,rt=je.get(re),Er=x.state.lights;if(X===!0&&(pe===!0||L!==w)){const ci=L===w&&re.id===C;Te.setState(re,L,ci)}let Gt=!1;re.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Er.state.version||rt.outputColorSpace!==ke||$.isBatchedMesh&&rt.batching===!1||!$.isBatchedMesh&&rt.batching===!0||$.isBatchedMesh&&rt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&rt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&rt.instancing===!1||!$.isInstancedMesh&&rt.instancing===!0||$.isSkinnedMesh&&rt.skinning===!1||!$.isSkinnedMesh&&rt.skinning===!0||$.isInstancedMesh&&rt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&rt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&rt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&rt.instancingMorph===!1&&$.morphTexture!==null||rt.envMap!==He||re.fog===!0&&rt.fog!==Ce||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Te.numPlanes||rt.numIntersection!==Te.numIntersection)||rt.vertexAlphas!==pt||rt.vertexTangents!==gt||rt.morphTargets!==Xe||rt.morphNormals!==yt||rt.morphColors!==Ft||rt.toneMapping!==Tt||rt.morphTargetsCount!==Et)&&(Gt=!0):(Gt=!0,rt.__version=re.version);let Zn=rt.currentProgram;Gt===!0&&(Zn=jt(re,Y,$));let Tr=!1,Dn=!1,kr=!1;const en=Zn.getUniforms(),rr=rt.uniforms;if(We.useProgram(Zn.program)&&(Tr=!0,Dn=!0,kr=!0),re.id!==C&&(C=re.id,Dn=!0),Tr||w!==L){We.buffers.depth.getReversed()?(fe.copy(L.projectionMatrix),mA(fe),gA(fe),en.setValue(W,"projectionMatrix",fe)):en.setValue(W,"projectionMatrix",L.projectionMatrix),en.setValue(W,"viewMatrix",L.matrixWorldInverse);const sr=en.map.cameraPosition;sr!==void 0&&sr.setValue(W,Ae.setFromMatrixPosition(L.matrixWorld)),J.logarithmicDepthBuffer&&en.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&en.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,Dn=!0,kr=!0)}if($.isSkinnedMesh){en.setOptional(W,$,"bindMatrix"),en.setOptional(W,$,"bindMatrixInverse");const ci=$.skeleton;ci&&(ci.boneTexture===null&&ci.computeBoneTexture(),en.setValue(W,"boneTexture",ci.boneTexture,I))}$.isBatchedMesh&&(en.setOptional(W,$,"batchingTexture"),en.setValue(W,"batchingTexture",$._matricesTexture,I),en.setOptional(W,$,"batchingIdTexture"),en.setValue(W,"batchingIdTexture",$._indirectTexture,I),en.setOptional(W,$,"batchingColorTexture"),$._colorsTexture!==null&&en.setValue(W,"batchingColorTexture",$._colorsTexture,I));const es=ne.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&it.update($,ne,Zn),(Dn||rt.receiveShadow!==$.receiveShadow)&&(rt.receiveShadow=$.receiveShadow,en.setValue(W,"receiveShadow",$.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(rr.envMap.value=He,rr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Y.environment!==null&&(rr.envMapIntensity.value=Y.environmentIntensity),Dn&&(en.setValue(W,"toneMappingExposure",T.toneMappingExposure),rt.needsLights&&Zt(rr,kr),Ce&&re.fog===!0&&be.refreshFogUniforms(rr,Ce),be.refreshMaterialUniforms(rr,re,H,Q,x.state.transmissionRenderTarget[L.id]),dh.upload(W,qt(rt),rr,I)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(dh.upload(W,qt(rt),rr,I),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&en.setValue(W,"center",$.center),en.setValue(W,"modelViewMatrix",$.modelViewMatrix),en.setValue(W,"normalMatrix",$.normalMatrix),en.setValue(W,"modelMatrix",$.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const ci=re.uniformsGroups;for(let sr=0,Mi=ci.length;sr<Mi;sr++){const ac=ci[sr];V.update(ac,Zn),V.bind(ac,Zn)}}return Zn}function Zt(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function Xn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,Y,ne){je.get(L.texture).__webglTexture=Y,je.get(L.depthTexture).__webglTexture=ne;const re=je.get(L);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ne===void 0,re.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Y){const ne=je.get(L);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,ne=0){O=L,U=Y,D=ne;let re=!0,$=null,Ce=!1,Se=!1;if(L){const He=je.get(L);if(He.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(W.FRAMEBUFFER,null),re=!1;else if(He.__webglFramebuffer===void 0)I.setupRenderTarget(L);else if(He.__hasExternalTextures)I.rebindTextures(L,je.get(L.texture).__webglTexture,je.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Xe=L.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(L.width!==Xe.image.width||L.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(L)}}const pt=L.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Se=!0);const gt=je.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(gt[Y])?$=gt[Y][ne]:$=gt[Y],Ce=!0):L.samples>0&&I.useMultisampledRTT(L)===!1?$=je.get(L).__webglMultisampledFramebuffer:Array.isArray(gt)?$=gt[ne]:$=gt,B.copy(L.viewport),j.copy(L.scissor),K=L.scissorTest}else B.copy(k).multiplyScalar(H).floor(),j.copy(oe).multiplyScalar(H).floor(),K=Ne;if(We.bindFramebuffer(W.FRAMEBUFFER,$)&&re&&We.drawBuffers(L,$),We.viewport(B),We.scissor(j),We.setScissorTest(K),Ce){const He=je.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,He.__webglTexture,ne)}else if(Se){const He=je.get(L.texture),pt=Y||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.__webglTexture,ne||0,pt)}C=-1},this.readRenderTargetPixels=function(L,Y,ne,re,$,Ce,Se){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=je.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Se!==void 0&&(ke=ke[Se]),ke){We.bindFramebuffer(W.FRAMEBUFFER,ke);try{const He=L.texture,pt=He.format,gt=He.type;if(!J.textureFormatReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-re&&ne>=0&&ne<=L.height-$&&W.readPixels(Y,ne,re,$,at.convert(pt),at.convert(gt),Ce)}finally{const He=O!==null?je.get(O).__webglFramebuffer:null;We.bindFramebuffer(W.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(L,Y,ne,re,$,Ce,Se){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=je.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Se!==void 0&&(ke=ke[Se]),ke){const He=L.texture,pt=He.format,gt=He.type;if(!J.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=L.width-re&&ne>=0&&ne<=L.height-$){We.bindFramebuffer(W.FRAMEBUFFER,ke);const Xe=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Xe),W.bufferData(W.PIXEL_PACK_BUFFER,Ce.byteLength,W.STREAM_READ),W.readPixels(Y,ne,re,$,at.convert(pt),at.convert(gt),0);const yt=O!==null?je.get(O).__webglFramebuffer:null;We.bindFramebuffer(W.FRAMEBUFFER,yt);const Ft=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await pA(W,Ft,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Xe),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ce),W.deleteBuffer(Xe),W.deleteSync(Ft),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Y=null,ne=0){L.isTexture!==!0&&(Lu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,L=arguments[1]);const re=Math.pow(2,-ne),$=Math.floor(L.image.width*re),Ce=Math.floor(L.image.height*re),Se=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;I.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,ne,0,0,Se,ke,$,Ce),We.unbindTexture()},this.copyTextureToTexture=function(L,Y,ne=null,re=null,$=0){L.isTexture!==!0&&(Lu("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,L=arguments[1],Y=arguments[2],$=arguments[3]||0,ne=null);let Ce,Se,ke,He,pt,gt,Xe,yt,Ft;const Tt=L.isCompressedTexture?L.mipmaps[$]:L.image;ne!==null?(Ce=ne.max.x-ne.min.x,Se=ne.max.y-ne.min.y,ke=ne.isBox3?ne.max.z-ne.min.z:1,He=ne.min.x,pt=ne.min.y,gt=ne.isBox3?ne.min.z:0):(Ce=Tt.width,Se=Tt.height,ke=Tt.depth||1,He=0,pt=0,gt=0),re!==null?(Xe=re.x,yt=re.y,Ft=re.z):(Xe=0,yt=0,Ft=0);const ln=at.convert(Y.format),Et=at.convert(Y.type);let rt;Y.isData3DTexture?(I.setTexture3D(Y,0),rt=W.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),rt=W.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),rt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment);const Er=W.getParameter(W.UNPACK_ROW_LENGTH),Gt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Zn=W.getParameter(W.UNPACK_SKIP_PIXELS),Tr=W.getParameter(W.UNPACK_SKIP_ROWS),Dn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Tt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,He),W.pixelStorei(W.UNPACK_SKIP_ROWS,pt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,gt);const kr=L.isDataArrayTexture||L.isData3DTexture,en=Y.isDataArrayTexture||Y.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const rr=je.get(L),es=je.get(Y),ci=je.get(rr.__renderTarget),sr=je.get(es.__renderTarget);We.bindFramebuffer(W.READ_FRAMEBUFFER,ci.__webglFramebuffer),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let Mi=0;Mi<ke;Mi++)kr&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,je.get(L).__webglTexture,$,gt+Mi),L.isDepthTexture?(en&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,je.get(Y).__webglTexture,$,Ft+Mi),W.blitFramebuffer(He,pt,Ce,Se,Xe,yt,Ce,Se,W.DEPTH_BUFFER_BIT,W.NEAREST)):en?W.copyTexSubImage3D(rt,$,Xe,yt,Ft+Mi,He,pt,Ce,Se):W.copyTexSubImage2D(rt,$,Xe,yt,Ft+Mi,He,pt,Ce,Se);We.bindFramebuffer(W.READ_FRAMEBUFFER,null),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else en?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(rt,$,Xe,yt,Ft,Ce,Se,ke,ln,Et,Tt.data):Y.isCompressedArrayTexture?W.compressedTexSubImage3D(rt,$,Xe,yt,Ft,Ce,Se,ke,ln,Tt.data):W.texSubImage3D(rt,$,Xe,yt,Ft,Ce,Se,ke,ln,Et,Tt):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,$,Xe,yt,Ce,Se,ln,Et,Tt.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,$,Xe,yt,Tt.width,Tt.height,ln,Tt.data):W.texSubImage2D(W.TEXTURE_2D,$,Xe,yt,Ce,Se,ln,Et,Tt);W.pixelStorei(W.UNPACK_ROW_LENGTH,Er),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Gt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Zn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Tr),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Dn),$===0&&Y.generateMipmaps&&W.generateMipmap(rt),We.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,ne=null,re=null,$=0){return L.isTexture!==!0&&(Lu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,re=arguments[1]||null,L=arguments[2],Y=arguments[3],$=arguments[4]||0),Lu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Y,ne,re,$)},this.initRenderTarget=function(L){je.get(L).__webglFramebuffer===void 0&&I.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),We.unbindTexture()},this.resetState=function(){U=0,D=0,O=null,We.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}}class u_{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(e),this.near=t,this.far=n}clone(){return new u_(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let A2=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ws,this.environmentIntensity=1,this.environmentRotation=new ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class C2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sg,this.updateRanges=[],this.version=0,this.uuid=co()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=co()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=co()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pi=new ue;class Rh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array),a=Jt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Fi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class BM extends ca{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Za;const xu=new ue,Qa=new ue,Ja=new ue,el=new Ct,yu=new Ct,HM=new rn,Xf=new ue,Su=new ue,Yf=new ue,Ty=new Ct,lm=new Ct,wy=new Ct;class R2 extends Pn{constructor(e=new BM){if(super(),this.isSprite=!0,this.type="Sprite",Za===void 0){Za=new Mr;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new C2(t,5);Za.setIndex([0,1,2,0,2,3]),Za.setAttribute("position",new Rh(n,3,0,!1)),Za.setAttribute("uv",new Rh(n,2,3,!1))}this.geometry=Za,this.material=e,this.center=new Ct(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qa.setFromMatrixScale(this.matrixWorld),HM.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ja.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qa.multiplyScalar(-Ja.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const u=this.center;jf(Xf.set(-.5,-.5,0),Ja,u,Qa,r,a),jf(Su.set(.5,-.5,0),Ja,u,Qa,r,a),jf(Yf.set(.5,.5,0),Ja,u,Qa,r,a),Ty.set(0,0),lm.set(1,0),wy.set(1,1);let c=e.ray.intersectTriangle(Xf,Su,Yf,!1,xu);if(c===null&&(jf(Su.set(-.5,.5,0),Ja,u,Qa,r,a),lm.set(0,1),c=e.ray.intersectTriangle(Xf,Yf,Su,!1,xu),c===null))return;const f=e.ray.origin.distanceTo(xu);f<e.near||f>e.far||t.push({distance:f,point:xu.clone(),uv:vr.getInterpolation(xu,Xf,Su,Yf,Ty,lm,wy,new Ct),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jf(o,e,t,n,r,a){el.subVectors(o,t).addScalar(.5).multiply(n),r!==void 0?(yu.x=a*el.x-r*el.y,yu.y=r*el.x+a*el.y):yu.copy(el),o.copy(e),o.x+=yu.x,o.y+=yu.y,o.applyMatrix4(HM)}class b2 extends ui{constructor(e=null,t=1,n=1,r,a,u,c,f,d=er,p=er,_,g){super(null,u,c,f,d,p,r,a,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ay extends Fi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tl=new rn,Cy=new rn,qf=[],Ry=new ua,P2=new rn,Mu=new Qi,Eu=new Ll;class by extends Qi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ay(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,P2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ua),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tl),Ry.copy(e.boundingBox).applyMatrix4(tl),this.boundingBox.union(Ry)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ll),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tl),Eu.copy(e.boundingSphere).applyMatrix4(tl),this.boundingSphere.union(Eu)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=n.length+1,u=e*a+1;for(let c=0;c<n.length;c++)n[c]=r[u+c]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Mu.geometry=this.geometry,Mu.material=this.material,Mu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eu.copy(this.boundingSphere),Eu.applyMatrix4(n),e.ray.intersectsSphere(Eu)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,tl),Cy.multiplyMatrices(n,tl),Mu.matrixWorld=Cy,Mu.raycast(e,qf);for(let u=0,c=qf.length;u<c;u++){const f=qf[u];f.instanceId=a,f.object=this,t.push(f)}qf.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ay(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new b2(new Float32Array(r*this.count),r,this.count,n_,Zr));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<n.length;d++)u+=n[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=r*e;a[f]=c,a.set(n,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class D2 extends ca{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Py=new rn,Tg=new wM,$f=new Ll,Kf=new ue;class L2 extends Pn{constructor(e=new Mr,t=new D2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$f.copy(n.boundingSphere),$f.applyMatrix4(r),$f.radius+=a,e.ray.intersectsSphere($f)===!1)return;Py.copy(r).invert(),Tg.copy(e.ray).applyMatrix4(Py);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=n.index,_=n.attributes.position;if(d!==null){const g=Math.max(0,u.start),v=Math.min(d.count,u.start+u.count);for(let E=g,M=v;E<M;E++){const y=d.getX(E);Kf.fromBufferAttribute(_,y),Dy(Kf,y,f,r,e,t,this)}}else{const g=Math.max(0,u.start),v=Math.min(_.count,u.start+u.count);for(let E=g,M=v;E<M;E++)Kf.fromBufferAttribute(_,E),Dy(Kf,E,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Dy(o,e,t,n,r,a,u){const c=Tg.distanceSqToPoint(o);if(c<t){const f=new ue;Tg.closestPointToPoint(o,f),f.applyMatrix4(n);const d=r.ray.origin.distanceTo(f);if(d<r.near||d>r.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class N2 extends ui{constructor(e,t,n,r,a,u,c,f,d){super(e,t,n,r,a,u,c,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class c_ extends Mr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],u=[],c=[],f=[],d=new ue,p=new Ct;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let _=0,g=3;_<=t;_++,g+=3){const v=n+_/t*r;d.x=e*Math.cos(v),d.y=e*Math.sin(v),u.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(u[g]/e+1)/2,p.y=(u[g+1]/e+1)/2,f.push(p.x,p.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new tr(u,3)),this.setAttribute("normal",new tr(c,3)),this.setAttribute("uv",new tr(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new c_(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class f_ extends Mr{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(u+c,Math.PI);let d=0;const p=[],_=new ue,g=new ue,v=[],E=[],M=[],y=[];for(let x=0;x<=n;x++){const R=[],b=x/n;let T=0;x===0&&u===0?T=.5/t:x===n&&f===Math.PI&&(T=-.5/t);for(let F=0;F<=t;F++){const U=F/t;_.x=-e*Math.cos(r+U*a)*Math.sin(u+b*c),_.y=e*Math.cos(u+b*c),_.z=e*Math.sin(r+U*a)*Math.sin(u+b*c),E.push(_.x,_.y,_.z),g.copy(_).normalize(),M.push(g.x,g.y,g.z),y.push(U+T,1-b),R.push(d++)}p.push(R)}for(let x=0;x<n;x++)for(let R=0;R<t;R++){const b=p[x][R+1],T=p[x][R],F=p[x+1][R],U=p[x+1][R+1];(x!==0||u>0)&&v.push(b,T,U),(x!==n-1||f<Math.PI)&&v.push(T,F,U)}this.setIndex(v),this.setAttribute("position",new tr(E,3)),this.setAttribute("normal",new tr(M,3)),this.setAttribute("uv",new tr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new f_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class I2 extends ca{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yM,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class VM extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class U2 extends VM{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const um=new rn,Ly=new ue,Ny=new ue;class F2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new a_,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ly.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ly),Ny.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ny),t.updateMatrixWorld(),um.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(um),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(um)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O2 extends F2{constructor(){super(new IM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k2 extends VM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new O2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class z2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Iy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Iy(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qg);fn.registerPlugin(Pt);Ht.enabled=!1;const Zf=(o,e)=>Math.sin(o*.15)*1.2+Math.cos(e*.12+o*.05)*1.5+Math.sin((o+e)*.3)*.3-1,Uy=[{top:"#1f7fb8",bottom:"#bfe5f0",base:"#2e7d2a",tip:"#b9e34d",ground:"#5aa832",cloud:"#ffffff",flower:"#ffffff",sun:[.3,.6,-1],glow:.35},{top:"#4f8fc4",bottom:"#f9d49a",base:"#3c6e28",tip:"#e2d45a",ground:"#7a9a38",cloud:"#ffe0bc",flower:"#f2d8b0",sun:[.35,.12,-1],glow:.6},{top:"#2b3566",bottom:"#ef9a72",base:"#243a25",tip:"#b88d5c",ground:"#4a5c34",cloud:"#e8a0a0",flower:"#a88a8a",sun:[.4,-.03,-1],glow:1}],Fy=["#f6e85a","#fffbe8","#8fd3c7","#f3c6b5","#e9f27a","#f6e85a"],B2=`
  uniform float uTime;
  varying float vH;
  varying float vDist;
  void main() {
    vH = uv.y;
    vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
    float wind = sin(uTime * 1.6 + world.x * 0.35 + world.z * 0.25) * 0.5 + sin(uTime * 2.7 + world.x * 1.3) * 0.15;
    world.x += wind * vH * vH * 0.35;
    world.z += wind * vH * vH * 0.15;
    vec4 mv = viewMatrix * world;
    vDist = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,H2=`
  uniform vec3 uBase, uTip, uFog;
  uniform float uNear, uFar;
  varying float vH;
  varying float vDist;
  void main() {
    vec3 c = mix(uBase, uTip, vH);
    gl_FragColor = vec4(mix(c, uFog, smoothstep(uNear, uFar, vDist)), 1.0);
  }
`,V2=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,G2=`
  uniform vec3 uTop, uBottom, uSun;
  varying vec3 vDir;
  void main() {
    vec3 c = mix(uBottom, uTop, smoothstep(-0.02, 0.45, vDir.y));
    float d = max(dot(vDir, normalize(uSun)), 0.0);
    c += vec3(1.0, 0.93, 0.75) * (smoothstep(0.9985, 0.999, d) + pow(d, 60.0) * 0.35);
    gl_FragColor = vec4(c, 1.0);
  }
`,W2=`
  uniform float uTime;
  attribute float aRand;
  varying float vA;
  void main() {
    vec3 p = position;
    p.x += sin(uTime * 0.5 + aRand * 20.0) * 0.6;
    p.y += sin(uTime * 0.8 + aRand * 10.0) * 0.4;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (4.0 + aRand * 6.0) * (12.0 / -mv.z);
    vA = 0.5 + 0.5 * sin(uTime * 2.0 + aRand * 30.0);
  }
`,X2=`
  uniform float uGlow;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    gl_FragColor = vec4(1.0, 0.97, 0.8, smoothstep(0.5, 0.0, d) * vA * uGlow);
  }
`,Y2=`
  uniform float uTime;
  attribute float aRand;
  varying float vRot;
  void main() {
    vec3 p = position;
    p.x = mod(p.x + uTime * (1.2 + aRand * 1.5) + 20.0, 40.0) - 20.0;
    p.y += sin(uTime * 1.3 + aRand * 12.0) * 0.6;
    p.z += cos(uTime * 0.7 + aRand * 8.0) * 0.5;
    vRot = uTime * (1.0 + aRand * 2.0) + aRand * 6.28;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (10.0 + aRand * 10.0) * (6.0 / -mv.z);
  }
`,j2=`
  varying float vRot;
  void main() {
    vec2 q = gl_PointCoord - 0.5;
    float s = sin(vRot), c = cos(vRot);
    q = mat2(c, -s, s, c) * q;
    float d = length(q * vec2(1.0, 2.6));
    if (d > 0.45) discard;
    gl_FragColor = vec4(mix(vec3(0.98, 0.62, 0.4), vec3(0.93, 0.45, 0.3), q.x + 0.5), 0.9);
  }
`;function cm(){const o=document.createElement("canvas");o.width=512,o.height=320;const e=o.getContext("2d"),t=[];for(let a=0;a<30;a++){const u=70+Math.random()*372,c=24+Math.random()*46,f=290-Math.sin((u-70)/372*Math.PI)*(150+Math.random()*70);t.push([u,Math.min(f+c*.7,290-c*.4),c])}const n=(a,u,c,f)=>{e.fillStyle=a,t.forEach(([d,p,_])=>{e.beginPath(),e.arc(d+u,p+c,_*f,0,7),e.fill()})};e.filter="blur(1.2px)",n("#aebfd2",0,6,1),n("#d5dee8",-4,-4,.92),n("#ffffff",-9,-13,.78),e.fillStyle="#ffffff";for(let a=0;a<260;a++){const[u,c,f]=t[a%t.length],d=Math.PI+Math.random()*Math.PI;e.beginPath(),e.arc(u-9+Math.cos(d)*f*.8,c-13+Math.sin(d)*f*.8,1+Math.random()*3,0,7),e.fill()}e.clearRect(0,292,512,28);const r=new N2(o);return r.anisotropy=4,r}function q2(){const o=ph.useRef(null);return ph.useEffect(()=>{const e=o.current,t=innerWidth<768,n=new w2({antialias:!0});n.outputColorSpace=la,n.setPixelRatio(Math.min(devicePixelRatio,1.75)),n.setSize(innerWidth,innerHeight),e.appendChild(n.domElement);const r=new A2,a=new _r(55,innerWidth/innerHeight,.1,250),u=X=>new Ot(X),c=Uy[0],f=Object.fromEntries(["top","bottom","base","tip","ground","cloud","flower"].map(X=>[X,u(c[X])])),d=new ue(...c.sun);r.fog=new u_(f.bottom,18,80);const p=new Or({vertexShader:V2,fragmentShader:G2,side:Si,depthWrite:!1,fog:!1,uniforms:{uTop:{value:f.top},uBottom:{value:f.bottom},uSun:{value:d}}}),_=new Qi(new f_(200,32,16),p);r.add(_);const g=new U2("#fff6e0","#5a7a3e",1.2),v=new k2("#fff1d0",1.6);v.position.set(10,20,-10),r.add(g,v);const E=new Pl(220,220,160,160).rotateX(-Math.PI/2),M=E.attributes.position;for(let X=0;X<M.count;X++)M.setY(X,Zf(M.getX(X),M.getZ(X)-20));E.translate(0,0,-20),E.computeVertexNormals(),r.add(new Qi(E,new I2({color:f.ground})));const y=(X,pe,fe)=>{const ye=new Pn;for(let Ae=0;Ae<pe;Ae++)fe(ye,Ae),ye.updateMatrix(),X.setMatrixAt(Ae,ye.matrix);X.frustumCulled=!1,r.add(X)},x=()=>{const X=(Math.random()-.5)*50,pe=14-Math.random()*62;return[X,Zf(X,pe),pe]},R=new Pl(.09,1,1,4),b=R.attributes.position;for(let X=0;X<b.count;X++)b.setX(X,b.getX(X)*(.5-b.getY(X))*2);R.translate(0,.5,0);const T={uTime:{value:0},uBase:{value:f.base},uTip:{value:f.tip},uFog:{value:f.bottom},uNear:{value:18},uFar:{value:80}},F=new Or({vertexShader:B2,fragmentShader:H2,uniforms:T,side:Ur});y(new by(R,F,t?18e3:45e3),t?18e3:45e3,X=>{const[pe,fe,ye]=x();X.position.set(pe,fe-.05,ye),X.rotation.set(0,Math.random()*Math.PI,(Math.random()-.5)*.3),X.scale.set(1,.4+Math.random()*.8,1)});const U=t?2500:6e3,D=new o_({color:f.flower,side:Ur}),O=new by(new c_(.08,7),D,U);y(O,U,(X,pe)=>{const[fe,ye,Ae]=x();X.position.set(fe,ye+.25+Math.random()*.45,Ae),X.rotation.set(-Math.PI/2+(Math.random()-.5)*.8,0,Math.random()*6),X.scale.setScalar(.6+Math.random()*.9),O.setColorAt(pe,u(Fy[pe%Fy.length]))});const C=[cm(),cm(),cm()],w=[];for(let X=0;X<11;X++){const pe=new BM({map:C[X%3],color:f.cloud,depthWrite:!1,fog:!1}),fe=new R2(pe),ye=X===0?120:40+Math.random()*45;fe.scale.set(ye,ye*.625,1),fe.position.set(X===0?15:(Math.random()-.5)*200,X===0?22:14+Math.random()*26,-110-Math.random()*50),w.push(fe),r.add(fe)}const B=(X,pe,fe,ye,Ae,Qe)=>{const _t=new Float32Array(X*3),ot=new Float32Array(X);for(let kt=0;kt<X;kt++)_t.set(pe(),kt*3),ot[kt]=Math.random();const $e=new Mr;$e.setAttribute("position",new Fi(_t,3)),$e.setAttribute("aRand",new Fi(ot,1));const W=new L2($e,new Or({vertexShader:fe,fragmentShader:ye,uniforms:Ae,transparent:!0,depthWrite:!1,...Qe}));W.frustumCulled=!1,r.add(W)},j={uTime:{value:0},uGlow:{value:c.glow}};B(350,()=>{const[X,pe,fe]=x();return[X*.6,pe+.3+Math.random()*4,fe]},W2,X2,j,{blending:Um});const K={uTime:{value:0}};B(t?120:260,()=>{const[X,pe,fe]=x();return[X*.8,pe+.5+Math.random()*3.5,fe]},Y2,j2,K);const se={p:0},ce=X=>{const pe=u(X);return{r:pe.r,g:pe.g,b:pe.b,ease:"none",duration:1}},ee=fn.timeline({scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:1.5}});ee.to(se,{p:1,ease:"none",duration:2},0),Uy.slice(1).forEach((X,pe)=>{for(const fe of Object.keys(f))ee.to(f[fe],ce(X[fe]),pe);ee.to(d,{x:X.sun[0],y:X.sun[1],ease:"none",duration:1},pe).to(j.uGlow,{value:X.glow,ease:"none",duration:1},pe).to(v,{intensity:1.6-(pe+1)*.55,ease:"none",duration:1},pe).to(g,{intensity:1.2-(pe+1)*.35,ease:"none",duration:1},pe)});const Q={y:-1.6};fn.to(Q,{y:0,duration:3,ease:"power3.out",delay:1.4});const H=new Ct,le=new Ct,N=X=>H.set(X.clientX/innerWidth*2-1,-(X.clientY/innerHeight)*2+1),k=()=>{a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix(),n.setSize(innerWidth,innerHeight)};addEventListener("pointermove",N),addEventListener("resize",k);const oe=new z2;let Ne;const Z=()=>{const X=oe.getDelta(),pe=oe.elapsedTime;T.uTime.value=pe,j.uTime.value=pe,K.uTime.value=pe,le.lerp(H,.04);const fe=12-se.p*34;a.position.set(le.x*.6,Zf(0,fe)+1.6+Q.y+le.y*.3,fe),a.lookAt(le.x*2,Zf(0,fe-10)+2.4+le.y,fe-10),_.position.copy(a.position),w.forEach(ye=>{ye.position.x+=X*.8,ye.position.x>130&&(ye.position.x=-130)}),n.render(r,a),Ne=requestAnimationFrame(Z)};return Z(),()=>{cancelAnimationFrame(Ne),removeEventListener("pointermove",N),removeEventListener("resize",k),ee.scrollTrigger.kill(),ee.kill(),r.traverse(X=>{var pe,fe;(pe=X.geometry)==null||pe.dispose(),(fe=X.material)==null||fe.dispose()}),C.forEach(X=>X.dispose()),n.dispose(),e.removeChild(n.domElement)}},[]),xe.jsx("div",{ref:o,className:"scene","aria-hidden":"true"})}fn.registerPlugin(Pt);const Oy=[{role:"Software Engineer",company:"PT. Decom Feno Mahaka",place:"Indonesia",date:"Dec 2025 — Present",points:["Golf scoring platform for web, mobile & tablet with real-time score tracking and player statistics.","Tournament management system: registration, scheduling, scoring, and live leaderboard sync.","Golf course management for daily operations and tee-time scheduling."],tech:["SolidJS","Go","React","React Native","Convex","PostgreSQL","Docker"]},{role:"Fullstack Software Engineer",company:"PT. Smartelco Solusi Teknologi",place:"Purwokerto",date:"Dec 2024 — Present",points:["Native Workspace Management app built with Kotlin & Jetpack Compose.","Real-time enterprise communication platform with React and Go.","AI-powered document processing combining OCR with Large Language Models.","Telegram & WhatsApp automation bots in Python."],tech:["React","SolidJS","Go","Kotlin","Python","PostgreSQL","Docker"]},{role:"Fullstack Software Engineer (Freelance)",company:"Abisatya Bangun Iman",place:"Remote",date:"Feb 2026 — Mar 2026",points:["End-to-end Hajj & Umrah management app built with Flutter.","Scalable NestJS backend and a CMS for packages, schedules, and announcements.","Third-party API integrations for real-time notifications."],tech:["Flutter","Dart","NestJS","TypeScript","Supabase","PostgreSQL"]},{role:"Frontend Developer",company:"PT. Braincode Solutions",place:"Jakarta / Cilacap",date:"Jul 2022 — Nov 2024",points:["Enterprise dashboards with Angular & Angular Material.","Interactive data visualisation: AG Grid, AmCharts, Highcharts, DevExtreme, Google Maps.","Modern interfaces with SolidJS, Tailwind CSS, and DaisyUI."],tech:["Angular","SolidJS","TypeScript","Tailwind CSS","Highcharts"]}],$2=[{title:"GolfScore ID",img:"/projects/golfscoreid-pangkalanjati.png",desc:"Professional golf scoring system for tablets on the course — start rounds, call a marshal, and sync scores live.",tech:["SolidJS","Go","Convex"]},{title:"Kartini Fun Tournament",img:"/projects/kartini-leaderboard.jpeg",desc:"Branded tournament app for Jatinangor National Golf with scorecards and a live leaderboard.",tech:["React","Go","Real-time"]},{title:"Atlas Hutan Kalimantan",url:"https://project-atlas-hutan.vercel.app/#kehidupan",desc:"Interactive atlas for exploring the life and biodiversity of the Borneo rainforest.",tech:["React","Three.js","GSAP"]},{title:"Kinetiq Energy Dashboard",url:"https://dashboard-energy-iota.vercel.app/",desc:"Plant operations dashboard with a 3D solar array, generation charts, system health, and weather forecast.",tech:["React","Three.js","Charts"]},{title:"SmartGuard",img:"/projects/smartguard-mobile-home.png",desc:"Security patrol management: checkpoint routes, live monitoring, incident and patrol reports on web and mobile.",tech:["React","Kotlin","Go"]},{title:"Smart WFM",img:"/projects/smartwfm-dashboard.png",desc:"Workforce management for fiber-optic (OSP) projects — vendor performance, daily progress, and a KML editor.",tech:["React","Go","PostgreSQL"]},{title:"WMS Resto",img:"/projects/wms-dashboard.png",desc:"Warehouse management for restaurants: raw materials, recipes, stock opname, transfers, and waste tracking.",tech:["React","Go","PostgreSQL"]}],K2={Languages:["JavaScript","TypeScript","Go","Python","Kotlin","Java","C++","Dart"],Frontend:["React","SolidJS","Angular","Next.js","Tailwind CSS"],"Backend & Data":["Go","NestJS","REST API","PostgreSQL","Supabase","SurrealDB","MySQL"],"Mobile & Tools":["Flutter","Jetpack Compose","Docker","Git","Linux","Nginx"],"AI & Network":["LLM Integration","OCR","Wireshark"]},Z2=[{school:"Telkom University",short:"TU",detail:"B.Sc. Informatics Engineering",city:"Bandung",date:"2024 — Present"},{school:"SMK Telkom Purwokerto",short:"SMK",detail:"Network Access Engineering · Teaching Factory at WITEL Purwokerto",city:"Purwokerto",date:"2019 — 2022"}],Q2="I'm a fullstack engineer with 3+ years of building scalable web and mobile apps — from React, SolidJS and Angular interfaces to Go backend services. I care about software that is clean, easy to maintain, and genuinely pleasant to use.",ky=["-1.4deg","1.1deg","-0.6deg","1.6deg","-1deg","0.8deg","-1.8deg"],Tu=o=>({"--r":ky[o%ky.length]}),Qf=o=>o.split("").map((e,t)=>xe.jsx("span",{className:"char",children:e===" "?" ":e},t));function J2(){const o=ph.useRef(null);return ph.useEffect(()=>{const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=new Tw({lerp:.08});t.on("scroll",Pt.update);const n=a=>t.raf(a*1e3);fn.ticker.add(n),fn.ticker.lagSmoothing(0);const r=fn.context(()=>{const a={v:0};fn.timeline().to(a,{v:100,duration:e?0:1.4,ease:"power2.inOut",onUpdate:()=>document.querySelector(".loader-num").textContent=Math.round(a.v)}).to(".loader",{clipPath:"circle(0% at 50% 50%)",duration:1.3,ease:"expo.inOut"}).from(".hero .char",{yPercent:110,rotate:6,duration:1.3,stagger:.03,ease:"expo.out"},"-=0.5").from(".hero-jp, .hero-meta > *",{y:20,opacity:0,stagger:.1,duration:.9,ease:"power3.out"},"-=1");const u=(p,_,g={})=>fn.from(p,{y:90,rotate:()=>fn.utils.random(-8,8),opacity:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:_,start:"top 80%"},...g});u(".letter",".about"),fn.from(".letter .stamp",{scale:1.8,opacity:0,rotate:-25,duration:.6,ease:"back.out(2)",scrollTrigger:{trigger:".letter",start:"top 60%"}}),fn.fromTo(".about .word",{opacity:.15},{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:".about-text",start:"top 75%",end:"bottom 55%",scrub:!0}}),fn.fromTo(".timeline-line",{scaleY:0},{scaleY:1,ease:"none",scrollTrigger:{trigger:".timeline",start:"top 70%",end:"bottom 70%",scrub:!0}}),fn.utils.toArray(".exp").forEach(p=>{u(p.querySelector(".ticket"),p),fn.from(p.querySelector(".postmark"),{scale:2,opacity:0,duration:.5,ease:"power4.in",delay:.5,scrollTrigger:{trigger:p,start:"top 80%"}}),fn.from(p.querySelector(".dot"),{scale:0,duration:.8,ease:"back.out(3)",scrollTrigger:{trigger:p,start:"top 75%"}})}),fn.utils.toArray(".polaroid").forEach(p=>u(p,p)),u(".sheet",".skills"),fn.from(".sticker",{scale:0,opacity:0,stagger:.02,duration:.6,ease:"back.out(2.5)",scrollTrigger:{trigger:".sheet",start:"top 65%"}}),u(".postcard",".edu",{stagger:.15}),u(".note",".contact"),fn.from(".contact .char",{yPercent:110,stagger:.03,duration:1,ease:"expo.out",scrollTrigger:{trigger:".contact",start:"top 65%"}});const c=fn.quickTo(".cursor","x",{duration:.5,ease:"power3"}),f=fn.quickTo(".cursor","y",{duration:.5,ease:"power3"}),d=p=>{c(p.clientX),f(p.clientY)};return addEventListener("pointermove",d),document.querySelectorAll("a, .sticker, .polaroid").forEach(p=>{p.addEventListener("pointerenter",()=>fn.to(".cursor",{scale:3,duration:.3})),p.addEventListener("pointerleave",()=>fn.to(".cursor",{scale:1,duration:.3}))}),()=>removeEventListener("pointermove",d)},o);return()=>{r.revert(),fn.ticker.remove(n),t.destroy()}},[]),xe.jsxs("div",{ref:o,children:[xe.jsxs("div",{className:"loader",children:[xe.jsx("p",{className:"loader-name",children:"バガス・セティアジ"}),xe.jsxs("p",{children:[xe.jsx("span",{className:"loader-num",children:"0"}),"%"]})]}),xe.jsx("div",{className:"cursor"}),xe.jsx(q2,{}),xe.jsxs("header",{className:"nav",children:[xe.jsxs("a",{href:"#top",className:"logo",children:["Bagas",xe.jsx("span",{children:"."})]}),xe.jsxs("nav",{children:[xe.jsx("a",{href:"#about",children:"About"}),xe.jsx("a",{href:"#experience",children:"Experience"}),xe.jsx("a",{href:"#projects",children:"Projects"}),xe.jsx("a",{href:"#contact",children:"Contact"})]})]}),xe.jsxs("main",{children:[xe.jsxs("section",{className:"hero",id:"top",children:[xe.jsx("p",{className:"hero-jp",children:"バガス・セティアジ"}),xe.jsxs("h1",{children:[xe.jsx("span",{className:"line",children:Qf("Bagas")}),xe.jsx("span",{className:"line",children:Qf("Setiaji")})]}),xe.jsxs("div",{className:"hero-meta",children:[xe.jsx("p",{children:"Fullstack Software Engineer from Cilacap — building web & mobile apps with React, SolidJS, and Go."}),xe.jsx("p",{className:"hand",children:"scroll slowly, enjoy the breeze ↓"})]})]}),xe.jsx("section",{className:"about",id:"about",children:xe.jsxs("div",{className:"letter",children:[xe.jsx("span",{className:"tape tape-l"}),xe.jsx("span",{className:"tape tape-r"}),xe.jsxs("div",{className:"stamp",children:[xe.jsx("b",{children:"ID"}),xe.jsx("small",{children:"2026"})]}),xe.jsx("p",{className:"jp",children:"自己紹介"}),xe.jsx("p",{className:"hand greet",children:"Hello, nice to meet you!"}),xe.jsx("p",{className:"about-text",children:Q2.split(" ").map((e,t)=>xe.jsxs("span",{className:"word",children:[e," "]},t))}),xe.jsx("p",{className:"hand sign",children:"— Bagas"})]})}),xe.jsxs("section",{className:"experience",id:"experience",children:[xe.jsxs("h2",{className:"section-title",children:[xe.jsx("span",{className:"jp",children:"経歴"}),"Experience"]}),xe.jsxs("div",{className:"timeline",children:[xe.jsx("div",{className:"timeline-line"}),Oy.map((e,t)=>xe.jsxs("article",{className:"exp",style:Tu(t),children:[xe.jsx("span",{className:"dot"}),xe.jsxs("div",{className:"ticket",children:[xe.jsx("span",{className:`tape tape-${t%3}`}),xe.jsxs("div",{className:"stub",children:[xe.jsxs("span",{className:"stub-no",children:["No.",String(Oy.length-t).padStart(2,"0")]}),xe.jsx("span",{className:"stub-date",children:e.date})]}),xe.jsxs("div",{className:"ticket-body",children:[xe.jsxs("span",{className:"postmark",children:[e.place,xe.jsx("b",{children:e.date.split(" ")[1]})]}),xe.jsx("h3",{children:e.role}),xe.jsx("p",{className:"company",children:e.company}),xe.jsx("ul",{children:e.points.map(n=>xe.jsx("li",{children:n},n))}),xe.jsx("div",{className:"tags",children:e.tech.map(n=>xe.jsx("span",{children:n},n))})]})]})]},e.company))]})]}),xe.jsxs("section",{className:"projects",id:"projects",children:[xe.jsxs("h2",{className:"section-title",children:[xe.jsx("span",{className:"jp",children:"作品"}),"Projects"]}),xe.jsx("div",{className:"board",children:$2.map((e,t)=>{const n=e.url?"a":"div";return xe.jsxs(n,{className:"polaroid",style:Tu(t+2),...e.url&&{href:e.url,target:"_blank",rel:"noreferrer"},children:[xe.jsx("span",{className:`tape tape-${t%3}`}),xe.jsxs("div",{className:"photo",children:[e.img?xe.jsx("img",{src:e.img,alt:`${e.title} screenshot`,loading:"lazy"}):xe.jsx("iframe",{src:e.url,title:e.title,loading:"lazy",tabIndex:-1}),e.url&&xe.jsx("span",{className:"live",children:"live ↗"})]}),xe.jsx("h3",{className:"hand",children:e.title}),xe.jsx("p",{children:e.desc}),xe.jsx("div",{className:"tags",children:e.tech.map(r=>xe.jsx("span",{children:r},r))})]},e.title)})})]}),xe.jsxs("section",{className:"skills",id:"skills",children:[xe.jsxs("h2",{className:"section-title",children:[xe.jsx("span",{className:"jp",children:"技術"}),"Skills"]}),xe.jsxs("div",{className:"sheet",children:[xe.jsx("span",{className:"tape tape-1"}),Object.entries(K2).map(([e,t],n)=>xe.jsxs("div",{className:"skill-row",children:[xe.jsx("p",{className:"hand",children:e}),xe.jsx("div",{className:"stickers",children:t.map((r,a)=>xe.jsx("span",{className:`sticker c${(a+n)%5}`,style:Tu(a+n),children:r},r))})]},e))]})]}),xe.jsxs("section",{className:"edu",children:[xe.jsxs("h2",{className:"section-title",children:[xe.jsx("span",{className:"jp",children:"学歴"}),"Education"]}),xe.jsx("div",{className:"edu-grid",children:Z2.map((e,t)=>xe.jsxs("div",{className:"postcard",style:Tu(t+1),children:[xe.jsxs("div",{className:"pc-msg",children:[xe.jsx("p",{className:"label",children:e.date}),xe.jsx("h3",{children:e.school}),xe.jsx("p",{children:e.detail})]}),xe.jsxs("div",{className:"pc-addr",children:[xe.jsx("div",{className:"stamp small",children:xe.jsx("b",{children:e.short})}),xe.jsx("span",{className:"hand",children:e.city}),xe.jsx("i",{}),xe.jsx("i",{}),xe.jsx("i",{})]})]},e.school))})]}),xe.jsxs("section",{className:"contact",id:"contact",children:[xe.jsxs("h2",{className:"section-title",children:[xe.jsx("span",{className:"jp",children:"連絡"}),"Contact"]}),xe.jsxs("h2",{className:"contact-big",children:[xe.jsx("span",{className:"line",children:Qf("Let's talk")}),xe.jsx("span",{className:"line",children:Qf("at sunset.")})]}),xe.jsxs("div",{className:"note",style:Tu(0),children:[xe.jsx("span",{className:"tape tape-2"}),xe.jsx("p",{className:"hand",children:"See you again!"}),xe.jsx("p",{className:"jp-note",children:"またね ✿"}),xe.jsxs("div",{className:"contact-links",children:[xe.jsx("a",{href:"mailto:stjbagas28@gmail.com",children:"stjbagas28@gmail.com"}),xe.jsx("a",{href:"tel:+6287729723438",children:"+62 877 2972 3438"})]})]}),xe.jsxs("footer",{className:"label",children:[xe.jsx("span",{children:"© 2026 Bagas Setiaji"}),xe.jsx("span",{children:"Indonesia · ID / EN"})]})]})]})]})}D1.createRoot(document.getElementById("root")).render(xe.jsx(J2,{}));
