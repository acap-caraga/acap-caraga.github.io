(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6835],{39005:function(t,e,n){"use strict";n.d(e,{Z:function(){return O}});var r=n(87462),o=n(63366),u=n(67294),c=n(29628),i=n(16600),a=n(85893);var s=function(t){const{children:e,defer:n=!1,fallback:r=null}=t,[o,c]=u.useState(!1);return(0,i.Z)((()=>{n||c(!0)}),[n]),u.useEffect((()=>{n&&c(!0)}),[n]),(0,a.jsx)(u.Fragment,{children:o?e:r})},l=n(77533),f=n(8038),d=n(5340),p=n(2068),h=n(58974),v=n(2734),y=n(30577),m=n(86010),g=n(11496),w=n(98216);const b=["anchor","classes","className","width","style"],E=(0,g.ZP)("div")((({theme:t,ownerState:e})=>(0,r.Z)({position:"fixed",top:0,left:0,bottom:0,zIndex:t.zIndex.drawer-1},"left"===e.anchor&&{right:"auto"},"right"===e.anchor&&{left:"auto",right:0},"top"===e.anchor&&{bottom:"auto",right:0},"bottom"===e.anchor&&{top:"auto",bottom:0,right:0})));var x=u.forwardRef((function(t,e){const{anchor:n,classes:u={},className:c,width:i,style:s}=t,f=(0,o.Z)(t,b),d=t;return(0,a.jsx)(E,(0,r.Z)({className:(0,m.Z)("PrivateSwipeArea-root",u.root,u[`anchor${(0,w.Z)(n)}`],c),ref:e,style:(0,r.Z)({[(0,l.wE)(n)?"width":"height"]:i},s),ownerState:d},f))}));const L=["BackdropProps"],S=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"];let T=null;function C(t,e,n){return"right"===t?n.body.offsetWidth-e[0].pageX:e[0].pageX}function Z(t,e,n){return"bottom"===t?n.innerHeight-e[0].clientY:e[0].clientY}function R(t,e){return t?e.clientWidth:e.clientHeight}function P(t,e,n,r){return Math.min(Math.max(n?e-t:r+e-t,0),r)}const k="undefined"!==typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent);var O=u.forwardRef((function(t,e){const n=(0,c.Z)({name:"MuiSwipeableDrawer",props:t}),i=(0,v.Z)(),m={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:g="left",disableBackdropTransition:w=!1,disableDiscovery:b=!1,disableSwipeToOpen:E=k,hideBackdrop:O,hysteresis:M=.52,minFlingVelocity:I=450,ModalProps:{BackdropProps:A}={},onClose:H,onOpen:j,open:B,PaperProps:D={},SwipeAreaProps:N,swipeAreaWidth:W=20,transitionDuration:X=m,variant:Y="temporary"}=n,_=(0,o.Z)(n.ModalProps,L),z=(0,o.Z)(n,S),[U,V]=u.useState(!1),q=u.useRef({isSwiping:null}),F=u.useRef(),K=u.useRef(),$=u.useRef(),G=u.useRef(!1),J=u.useRef();(0,h.Z)((()=>{J.current=null}),[B]);const Q=u.useCallback(((t,e={})=>{const{mode:n=null,changeTransition:r=!0}=e,o=(0,l.ni)(i,g),u=-1!==["right","bottom"].indexOf(o)?1:-1,c=(0,l.wE)(g),a=c?`translate(${u*t}px, 0)`:`translate(0, ${u*t}px)`,s=$.current.style;s.webkitTransform=a,s.transform=a;let f="";if(n&&(f=i.transitions.create("all",(0,y.C)({easing:void 0,style:void 0,timeout:X},{mode:n}))),r&&(s.webkitTransition=f,s.transition=f),!w&&!O){const e=K.current.style;e.opacity=1-t/R(c,$.current),r&&(e.webkitTransition=f,e.transition=f)}}),[g,w,O,i,X]),tt=(0,p.Z)((t=>{if(!G.current)return;if(T=null,G.current=!1,V(!1),!q.current.isSwiping)return void(q.current.isSwiping=null);q.current.isSwiping=null;const e=(0,l.ni)(i,g),n=(0,l.wE)(g);let r;r=n?C(e,t.changedTouches,(0,f.Z)(t.currentTarget)):Z(e,t.changedTouches,(0,d.Z)(t.currentTarget));const o=n?q.current.startX:q.current.startY,u=R(n,$.current),c=P(r,o,B,u),a=c/u;Math.abs(q.current.velocity)>I&&(J.current=1e3*Math.abs((u-c)/q.current.velocity)),B?q.current.velocity>I||a>M?H():Q(0,{mode:"exit"}):q.current.velocity<-I||1-a>M?j():Q(R(n,$.current),{mode:"enter"})})),et=(0,p.Z)((t=>{if(!$.current||!G.current)return;if(null!==T&&T!==q.current)return;const e=(0,l.ni)(i,g),n=(0,l.wE)(g),r=C(e,t.touches,(0,f.Z)(t.currentTarget)),o=Z(e,t.touches,(0,d.Z)(t.currentTarget));if(B&&$.current.contains(t.target)&&null===T){const e=function({domTreeShapes:t,start:e,current:n,anchor:r}){const o={x:"scrollLeft",y:"scrollTop"},u={x:"scrollWidth",y:"scrollHeight"},c={x:"clientWidth",y:"clientHeight"};return t.some((t=>{let i=n>=e;"top"!==r&&"left"!==r||(i=!i);const a="left"===r||"right"===r?"x":"y",s=Math.round(t[o[a]]),l=s>0,f=s+t[c[a]]<t[u[a]];return!!(i&&f||!i&&l)}))}({domTreeShapes:function(t,e){const n=[];for(;t&&t!==e.parentElement;){const r=(0,d.Z)(e).getComputedStyle(t);"absolute"===r.getPropertyValue("position")||"hidden"===r.getPropertyValue("overflow-x")||(t.clientWidth>0&&t.scrollWidth>t.clientWidth||t.clientHeight>0&&t.scrollHeight>t.clientHeight)&&n.push(t),t=t.parentElement}return n}(t.target,$.current),start:n?q.current.startX:q.current.startY,current:n?r:o,anchor:g});if(e)return void(T=!0);T=q.current}if(null==q.current.isSwiping){const e=Math.abs(r-q.current.startX),u=Math.abs(o-q.current.startY),c=n?e>u&&e>3:u>e&&u>3;if(c&&t.cancelable&&t.preventDefault(),!0===c||(n?u>3:e>3)){if(q.current.isSwiping=c,!c)return void tt(t);q.current.startX=r,q.current.startY=o,b||B||(n?q.current.startX-=20:q.current.startY-=20)}}if(!q.current.isSwiping)return;const u=R(n,$.current);let c=n?q.current.startX:q.current.startY;B&&!q.current.paperHit&&(c=Math.min(c,u));const a=P(n?r:o,c,B,u);if(B)if(q.current.paperHit)0===a&&(q.current.startX=r,q.current.startY=o);else{if(!(n?r<u:o<u))return;q.current.paperHit=!0,q.current.startX=r,q.current.startY=o}null===q.current.lastTranslate&&(q.current.lastTranslate=a,q.current.lastTime=performance.now()+1);const s=(a-q.current.lastTranslate)/(performance.now()-q.current.lastTime)*1e3;q.current.velocity=.4*q.current.velocity+.6*s,q.current.lastTranslate=a,q.current.lastTime=performance.now(),t.cancelable&&t.preventDefault(),Q(a)})),nt=(0,p.Z)((t=>{if(t.defaultPrevented)return;if(t.defaultMuiPrevented)return;if(B&&(O||!K.current.contains(t.target))&&!$.current.contains(t.target))return;const e=(0,l.ni)(i,g),n=(0,l.wE)(g),r=C(e,t.touches,(0,f.Z)(t.currentTarget)),o=Z(e,t.touches,(0,d.Z)(t.currentTarget));if(!B){if(E||t.target!==F.current)return;if(n){if(r>W)return}else if(o>W)return}t.defaultMuiPrevented=!0,T=null,q.current.startX=r,q.current.startY=o,V(!0),!B&&$.current&&Q(R(n,$.current)+(b?15:-20),{changeTransition:!1}),q.current.velocity=0,q.current.lastTime=null,q.current.lastTranslate=null,q.current.paperHit=!1,G.current=!0}));return u.useEffect((()=>{if("temporary"===Y){const t=(0,f.Z)($.current);return t.addEventListener("touchstart",nt),t.addEventListener("touchmove",et,{passive:!B}),t.addEventListener("touchend",tt),()=>{t.removeEventListener("touchstart",nt),t.removeEventListener("touchmove",et,{passive:!B}),t.removeEventListener("touchend",tt)}}}),[Y,B,nt,et,tt]),u.useEffect((()=>()=>{T===q.current&&(T=null)}),[]),u.useEffect((()=>{B||V(!1)}),[B]),(0,a.jsxs)(u.Fragment,{children:[(0,a.jsx)(l.ZP,(0,r.Z)({open:!("temporary"!==Y||!U)||B,variant:Y,ModalProps:(0,r.Z)({BackdropProps:(0,r.Z)({},A,{ref:K})},_),hideBackdrop:O,PaperProps:(0,r.Z)({},D,{style:(0,r.Z)({pointerEvents:"temporary"!==Y||B?"":"none"},D.style),ref:$}),anchor:g,transitionDuration:J.current||X,onClose:H,ref:e},z)),!E&&"temporary"===Y&&(0,a.jsx)(s,{children:(0,a.jsx)(x,(0,r.Z)({anchor:g,ref:F,width:W},N))})]})}))},20022:function(t,e,n){"use strict";n.d(e,{RA:function(){return c},LE:function(){return i},G5:function(){return a}});var r=n(67294),o=n(73935),u=n(60557);function c(t){function e(e,n){const{instance:o,context:c}=t(e).current;return(0,r.useImperativeHandle)(n,(()=>o)),null==e.children?null:r.createElement(u.UO,{value:c},e.children)}return(0,r.forwardRef)(e)}function i(t){function e(e,n){const[u,c]=(0,r.useState)(!1),{instance:i}=t(e,c).current;(0,r.useImperativeHandle)(n,(()=>i)),(0,r.useEffect)((function(){u&&i.update()}),[i,u,e.children]);const a=i._contentNode;return a?(0,o.createPortal)(e.children,a):null}return(0,r.forwardRef)(e)}function a(t){function e(e,n){const{instance:o}=t(e).current;return(0,r.useImperativeHandle)(n,(()=>o)),null}return(0,r.forwardRef)(e)}},60557:function(t,e,n){"use strict";n.d(e,{cV:function(){return o},UO:function(){return c},mE:function(){return i}});var r=n(67294);const o=1,u=(0,r.createContext)(null),c=u.Provider;function i(){const t=(0,r.useContext)(u);if(null==t)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}},4777:function(t,e,n){"use strict";n.d(e,{I:function(){return o}});var r=n(67294);function o(t,e){return null==e?function(e,n){return(0,r.useRef)(t(e,n))}:function(n,o){const u=(0,r.useRef)(t(n,o)),c=(0,r.useRef)(n),{instance:i}=u.current;return(0,r.useEffect)((function(){c.current!==n&&(e(i,n,c.current),c.current=n)}),[i,n,o]),u}}},7496:function(t,e,n){"use strict";n.d(e,{dW:function(){return p},SO:function(){return h},Au:function(){return v},Lf:function(){return y}});var r=n(20022),o=n(4777),u=n(67294);function c(t,e){const n=(0,u.useRef)(e);(0,u.useEffect)((function(){e!==n.current&&null!=t.attributionControl&&(null!=n.current&&t.attributionControl.removeAttribution(n.current),null!=e&&t.attributionControl.addAttribution(e)),n.current=e}),[t,e])}var i=n(60557);function a(t,e){const n=(0,u.useRef)();(0,u.useEffect)((function(){return null!=e&&t.instance.on(e),n.current=e,function(){null!=n.current&&t.instance.off(n.current),n.current=null}}),[t,e])}var s=n(75828);function l(t,e){(0,u.useEffect)((function(){return(e.layerContainer??e.map).addLayer(t.instance),function(){var n;null==(n=e.layerContainer)||n.removeLayer(t.instance),e.map.removeLayer(t.instance)}}),[e,t])}function f(t){return function(e){const n=(0,i.mE)(),r=t((0,s.q)(e,n),n);return c(n.map,e.attribution),a(r.current,e.eventHandlers),l(r.current,n),r}}function d(t){return function(e){const n=(0,i.mE)(),r=t((0,s.q)(e,n),n);return a(r.current,e.eventHandlers),l(r.current,n),function(t,e){const n=(0,u.useRef)();(0,u.useEffect)((function(){if(e.pathOptions!==n.current){const r=e.pathOptions??{};t.instance.setStyle(r),n.current=r}}),[t,e])}(r.current,e),r}}function p(t,e){const n=f((0,o.I)(t,e));return(0,r.RA)(n)}function h(t,e){const n=function(t,e){return function(n,r){const o=(0,i.mE)(),u=t((0,s.q)(n,o),o);return c(o.map,n.attribution),a(u.current,n.eventHandlers),e(u.current,o,n,r),u}}((0,o.I)(t),e);return(0,r.LE)(n)}function v(t,e){const n=d((0,o.I)(t,e));return(0,r.RA)(n)}function y(t,e){const n=f((0,o.I)(t,e));return(0,r.G5)(n)}},75828:function(t,e,n){"use strict";function r(t,e){const n=t.pane??e.pane;return n?{...t,pane:n}:t}n.d(e,{q:function(){return r}})},48418:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,u=[],c=!0,i=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);c=!0);}catch(a){i=!0,o=a}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=void 0;var u,c=(u=n(67294))&&u.__esModule?u:{default:u},i=n(76273),a=n(90387),s=n(57190);var l={};function f(t,e,n,r){if(t&&i.isLocalURL(e)){t.prefetch(e,n,r).catch((function(t){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:t&&t.locale;l[e+"%"+n+(o?"%"+o:"")]=!0}}var d=function(t){var e,n=!1!==t.prefetch,r=a.useRouter(),u=c.default.useMemo((function(){var e=o(i.resolveHref(r,t.href,!0),2),n=e[0],u=e[1];return{href:n,as:t.as?i.resolveHref(r,t.as):u||n}}),[r,t.href,t.as]),d=u.href,p=u.as,h=t.children,v=t.replace,y=t.shallow,m=t.scroll,g=t.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var w=(e=c.default.Children.only(h))&&"object"===typeof e&&e.ref,b=o(s.useIntersection({rootMargin:"200px"}),2),E=b[0],x=b[1],L=c.default.useCallback((function(t){E(t),w&&("function"===typeof w?w(t):"object"===typeof w&&(w.current=t))}),[w,E]);c.default.useEffect((function(){var t=x&&n&&i.isLocalURL(d),e="undefined"!==typeof g?g:r&&r.locale,o=l[d+"%"+p+(e?"%"+e:"")];t&&!o&&f(r,d,p,{locale:e})}),[p,d,x,g,n,r]);var S={ref:L,onClick:function(t){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,u,c,a){("A"!==t.currentTarget.nodeName.toUpperCase()||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&i.isLocalURL(n))&&(t.preventDefault(),e[o?"replace":"push"](n,r,{shallow:u,locale:a,scroll:c}))}(t,r,d,p,v,y,m,g)},onMouseEnter:function(t){e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(t),i.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(t.passHref||"a"===e.type&&!("href"in e.props)){var T="undefined"!==typeof g?g:r&&r.locale,C=r&&r.isLocaleDomain&&i.getDomainLocale(p,T,r&&r.locales,r&&r.domainLocales);S.href=C||i.addBasePath(i.addLocale(p,T,r&&r.defaultLocale))}return c.default.cloneElement(e,S)};e.default=d},41664:function(t,e,n){t.exports=n(48418)},72471:function(t,e,n){"use strict";n.d(e,{Q:function(){return u}});var r=n(7496),o=n(45243);const u=(0,r.Au)((function(t,e){let{data:n,...r}=t;const u=new o.GeoJSON(n,r);return{instance:u,context:{...e,overlayContainer:u}}}),(function(t,e,n){e.style!==n.style&&(null==e.style?t.resetStyle():t.setStyle(e.style))}))},86105:function(t,e,n){"use strict";n.d(e,{et:function(){return f}});var r=n(67294),o=n(60557);var u=n(4777),c=n(20022),i=n(45243);const a=(0,u.I)((function(t,e){let{children:n,...r}=t;const o=new i.Control.Layers(void 0,void 0,r);return{instance:o,context:{...e,layersControl:o}}}),(function(t,e,n){e.collapsed!==n.collapsed&&(!0===e.collapsed?t.collapse():t.expand())})),s=(l=a,function(t){const e=(0,o.mE)(),n=l(t,e),{instance:u}=n.current,c=(0,r.useRef)(t.position),{position:i}=t;return(0,r.useEffect)((function(){return u.addTo(e.map),function(){u.remove()}}),[e.map,u]),(0,r.useEffect)((function(){null!=i&&i!==c.current&&(u.setPosition(i),c.current=i)}),[u,i]),n});var l;const f=(0,c.RA)(s);function d(t){return function(e){const n=(0,o.mE)(),u=(0,r.useRef)(e),[c,i]=(0,r.useState)(null),{layersControl:a,map:s}=n,l=(0,r.useCallback)((e=>{null!=a&&(u.current.checked&&s.addLayer(e),t(a,e,u.current.name),i(e))}),[a,s]),f=(0,r.useCallback)((t=>{null==a||a.removeLayer(t),i(null)}),[a]),d=(0,r.useMemo)((()=>({...n,layerContainer:{addLayer:l,removeLayer:f}})),[n,l,f]);return(0,r.useEffect)((()=>{null!==c&&u.current!==e&&(!0!==e.checked||null!=u.current.checked&&!1!==u.current.checked?!0!==u.current.checked||null!=e.checked&&!1!==e.checked||s.removeLayer(c):s.addLayer(c),u.current=e)})),e.children?r.createElement(o.UO,{value:d},e.children):null}}f.BaseLayer=d((function(t,e,n){t.addBaseLayer(e,n)})),f.Overlay=d((function(t,e,n){t.addOverlay(e,n)}))},60795:function(t,e,n){"use strict";n.d(e,{h:function(){return i}});var r=n(60557),o=n(45243),u=n(67294);function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function i(t){let{children:e,className:n,id:i,placeholder:a,style:s,whenCreated:l,...f}=t;const d=(0,u.useRef)(null),p=function(t,e){const[n,r]=(0,u.useState)(null);return(0,u.useEffect)((()=>{if(null!==t.current&&null===n){const n=new o.Map(t.current,e);null!=e.center&&null!=e.zoom?n.setView(e.center,e.zoom):null!=e.bounds&&n.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&n.whenReady(e.whenReady),r(n)}}),[t,n,e]),n}(d,f),h=(0,u.useRef)(!1);(0,u.useEffect)((()=>{null!=p&&!1===h.current&&null!=l&&(h.current=!0,l(p))}),[p,l]),(0,u.useEffect)((()=>()=>{null==p||p.remove()}),[p]);const[v]=(0,u.useState)({className:n,id:i,style:s}),y=(0,u.useMemo)((()=>p?{__version:r.cV,map:p}:null),[p]),m=y?u.createElement(r.UO,{value:y},e):a??null;return u.createElement("div",c({},v,{ref:d}),m)}},27409:function(t,e,n){"use strict";n.d(e,{J:function(){return u}});var r=n(7496),o=n(45243);const u=(0,r.dW)((function(t,e){let{position:n,...r}=t;const u=new o.Marker(n,r);return{instance:u,context:{...e,overlayContainer:u}}}),(function(t,e,n){e.position!==n.position&&t.setLatLng(e.position),null!=e.icon&&e.icon!==n.icon&&t.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==n.zIndexOffset&&t.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==n.opacity&&t.setOpacity(e.opacity),null!=t.dragging&&e.draggable!==n.draggable&&(!0===e.draggable?t.dragging.enable():t.dragging.disable())}))},38303:function(t,e,n){"use strict";n.d(e,{I:function(){return c}});var r=n(7496),o=n(75828),u=n(45243);const c=(0,r.Lf)((function(t,e){let{url:n,...r}=t;return{instance:new u.TileLayer(n,(0,o.q)(r,e)),context:e}}),(function(t,e,n){const{opacity:r,zIndex:o}=e;null!=r&&r!==n.opacity&&t.setOpacity(r),null!=o&&o!==n.zIndex&&t.setZIndex(o)}))},97651:function(t,e,n){"use strict";n.d(e,{u:function(){return c}});var r=n(7496),o=n(45243),u=n(67294);const c=(0,r.SO)((function(t,e){return{instance:new o.Tooltip(t,e.overlayContainer),context:e}}),(function(t,e,n,r){const{onClose:o,onOpen:c,position:i}=n;(0,u.useEffect)((function(){const n=e.overlayContainer;if(null==n)return;const{instance:u}=t,a=t=>{t.tooltip===u&&(i&&u.setLatLng(i),u.update(),r(!0),null==c||c())},s=t=>{t.tooltip===u&&(r(!1),null==o||o())};return n.on({tooltipopen:a,tooltipclose:s}),n.bindTooltip(u),function(){n.off({tooltipopen:a,tooltipclose:s}),null!=n._map&&n.unbindTooltip()}}),[t,e,r,o,c,i])}))}}]);