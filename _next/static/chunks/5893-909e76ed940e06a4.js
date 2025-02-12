"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5893],{69132:function(e,t){t.Z={tablecontainer:{marginTop:function(e){return e.spacing(1)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},borderRadius:function(e){return e.spacing(1)},boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},table:{"& td":{border:function(e){return"1px solid ".concat(e.palette.bacap.border)}}},headerMonths:{textAlign:"center",borderBottom:"none",borderLeft:function(e){return"1px solid ".concat(e.palette.bacap.border)}},headerSub:{width:"5%",borderLeft:function(e){return"1px solid ".concat(e.palette.bacap.border)}},tablecell:{border:"1px solid",textAlign:"center"},subheader:{marginBottom:function(e){return e.spacing(3)},maxWidth:"800px",color:"gray","& a":{textDecoration:"none",color:function(e){return e.palette.green.dark}},"& a:hover":{textDecoration:"underline"},"& a:visited":{color:function(e){return e.palette.green.dark}}},labels:{fontSize:"12px",color:function(e){return e.palette.secondary.light}},legend:{margin:function(e){return e.spacing(1)},fontSize:"14px",display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{xs:"flex-start",sm:"baseline"},"& ul":{listStyle:"none","& li":{marginRight:"10px"},span:{border:"1px solid #ccc",float:"left",width:"12px",height:"12px",margin:"4px"}},"& .wb_normal":{backgroundColor:"red",color:"#fff"},"& .b_normal":{backgroundColor:"yellow"},"& .near_normal":{backgroundColor:"#00c300"},"& .above_normal":{backgroundColor:"blue",color:"#fff"}},tableRowHeader:{"& th, td":{fontSize:"11px",textAlign:"center",lineHeight:function(e){return e.spacing(2)},padding:"2px",fontWeight:500,borderTop:"none"},"& td":{border:"none"},"& td:nth-child(3n)":{borderRight:"1px solid rgb(226, 232, 240)"},"& td:last-child":{borderRight:"none"},"& td:first-child":{borderLeft:"1px solid rgb(226, 232, 240)"}},cellData:{"& td:first-child":{fontSize:"12px",textAlign:"left",borderLeft:"none",padding:"6px 16px 6px 16px"},"& td:last-child":{borderRight:"none"},"& td":{fontSize:"11px",textAlign:"center",padding:"10px",color:"rgba(0, 0, 0, 0.87)",border:"1px solid rgb(226, 232, 240)"}}}},96399:function(e,t,r){var n=r(85893),o=r(67294),a=r(9473),c=r(11163),u=r(87357),i=r(7906),s=r(295),f=r(53252),l=r(72882),p=r(53184),d=r(53816),b=r(37634),v=r(45238),h=r(47426),y=r(901),m=r(53894),x=r(27840),g=r(87784),w=r(69132);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _={updated_by:"-",date_created:"",monthLabels:[]};t.Z=function(e){var t=e.withBorder,r=void 0!==t&&t,S=(0,o.useState)(_),A=S[0],P=S[1],E=(0,o.useState)(!1),k=E[0],R=E[1],Z=(0,o.useRef)(!1),D=(0,c.useRouter)(),L=(0,a.I0)();(0,o.useEffect)((function(){return Z.current=!0,function(){Z.current=!1}}),[]);var C=(0,a.v9)((function(e){return e.seasonalweather})),T=C.ids,I=C.status,N=C.entities;(0,o.useEffect)((function(){L((0,m.Y)()).unwrap().then((function(){Z.current&&R(!0)}))}),[L]),(0,o.useEffect)((function(){if(I===y.G.FULLFILLED&&T.length>0&&k){var e=N[T[0]];if(!Z.current)return;P((function(t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}({},t,{updated_by:"/admin/weather"===D.pathname?e.updated_by:"an admin",update_method:e.update_method,date_created:e.date_created,monthLabels:e.months.map((function(e){return"".concat(e.mo.charAt(0).toUpperCase()).concat(e.mo.slice(1)," ").concat(e.year)}))})}))}}),[N,I,T,D.pathname,k]);var F=function(e){var t=e.children;return r?(0,n.jsx)(l.Z,{sx:w.Z.tablecontainer,children:t}):(0,n.jsx)(l.Z,{children:t})},G=function(e){return e===h.nQ?h.tN[h.DD]:"none"};return(0,n.jsx)("div",{children:I===y.G.PENDING?(0,n.jsx)(v.Z,{rows:7,cols:7}):T.length>0?(0,n.jsxs)(F,{sx:{width:"650px"},children:[(0,n.jsxs)(i.Z,{"aria-label":"simple table",size:"small",sx:w.Z.table,children:[(0,n.jsxs)(p.Z,{children:[(0,n.jsxs)(d.Z,{sx:w.Z.tableRowHeader,children:[(0,n.jsx)(f.Z,{sx:{width:"15%"},rowSpan:2,children:"Province"}),A.monthLabels.map((function(e,t){return(0,n.jsx)(f.Z,{sx:w.Z.headerMonths,colSpan:3,children:e},"".concat(e,"-").concat(t))}))]}),(0,n.jsx)(d.Z,{sx:w.Z.tableRowHeader,children:j(new Array(3*A.monthLabels.length)).fill("").map((function(e,t){var r=t+1;return 1===r||r%3===1?(0,n.jsx)("td",{children:"Normal (mm)"},r):r%3===2?(0,n.jsx)("td",{children:"Forecast (mm)"},r):r%3===0?(0,n.jsx)("td",{children:"% of Normal"},r):void 0}))})]}),(0,n.jsx)(s.Z,{children:Object.values(N).map((function(e){return(0,n.jsxs)(d.Z,{sx:w.Z.cellData,children:[(0,n.jsx)(f.Z,{children:e.name}),j(new Array(3*A.monthLabels.length)).fill("").map((function(t,r){var o=r+1;if(1===o)return(0,n.jsx)("td",{style:{backgroundColor:G(e.months[r].normal)},children:(0,g.aS)(e.months[0].normal)},r);if(o%3===1)return(0,n.jsx)("td",{style:{backgroundColor:G(e.months[r/3].normal)},children:(0,g.aS)(e.months[r/3].normal)},r);if(o%3===2){var a=(o+1)/3;return(0,n.jsx)("td",{style:{backgroundColor:G(e.months[a-1].mean)},children:(0,g.aS)(e.months[a-1].mean)},r)}if(o%3===0){var c=o/3-1;return(0,n.jsx)(f.Z,{sx:{backgroundColor:h.tN[e.months[c].con],textAlign:"center",color:["above_normal","wb_normal"].includes(e.months[c].con)?"#fff !important":"#000"},children:(0,g.aS)(e.months[c].val)},r)}}))]},e.name)}))})]}),(0,n.jsxs)(u.Z,{sx:w.Z.legend,children:[A.update_method===h.o7.EXCEL?(0,n.jsxs)(x.Z,{children:["Updated via file upload of PAGASA's shared seasonal weather",(0,n.jsx)("br",{})," forecast excel file by ",A.updated_by," on \xa0",A.date_created,".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Full reference is available on PAGASA's ",(0,n.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"})," web page."]}):(0,n.jsxs)(x.Z,{children:["Encoded with reference from PAGASA's ",(0,n.jsx)("a",{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/seasonal-forecast",target:"_blank",rel:"noreferrer",children:"Seasonal (Rainfall) Forecast"})," web page ",(0,n.jsx)("br",{}),"by ",A.updated_by," on \xa0",A.date_created]}),(0,n.jsx)("ul",{children:Object.values(h.MW).map((function(e){return(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{style:{backgroundColor:h.tN[e.label]}}),e.sync," (",e.content,")"]},e.id)}))})]})]}):(0,n.jsx)(b.Z,{})})}},37634:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(85893),o=r(25675),a=r(87357),c=r(15861),u=r(26660),i={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var s=function(e){var t=e.message,r=void 0===t?"Failed to load data":t,s=e.style,f=void 0===s?{}:s;return(0,n.jsxs)(a.Z,{sx:i.container,style:f,children:[(0,n.jsx)(o.default,{unoptimized:!0,src:(0,u.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:u.imageLoader,alt:"Empty data",priority:!0}),(0,n.jsx)(c.Z,{variant:"subtitle1",children:r})]})}},45238:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(85893),o=r(87357),a=r(88078),c={container:{minHeight:"200px",width:"100%",border:"2px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var u=function(e){var t=e.rows,r=void 0===t?3:t,u=e.cols,i=void 0===u?3:u;return(0,n.jsx)(o.Z,{sx:c.container,children:Array.from(Array(r).keys()).map((function(e,t){return(0,n.jsx)("div",{style:{margin:"2px",display:"flex"},children:Array.from(Array(i).keys()).map((function(e,t){return(0,n.jsx)(a.Z,{animation:"wave",variant:"rectangular",height:25,sx:{margin:"3px",width:"".concat(Math.round(100/i),"%")}},"col-".concat(t))}))},"row-".concat(t))}))})}},11427:function(e,t,r){var n=r(85893),o=r(55113);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=(0,r(11496).ZP)((function(e){return(0,n.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},e))}))((function(e){var t=e.theme;return{padding:t.spacing(3),borderRadius:t.spacing(1),boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}));t.Z=c},89646:function(e,t,r){var n=r(85893),o=r(55113);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=(0,r(11496).ZP)((function(e){return(0,n.jsx)(o.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},e))}))((function(e){var t=e.theme;return{padding:t.spacing(3),borderRadius:t.spacing(1),backgroundColor:"#fff",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",border:"1px solid ".concat(t.palette.bacap.border)}}));t.Z=c},16449:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(34051),o=r.n(n),a=r(67294),c=r(57906);function u(e,t,r,n,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(n,o)}function i(e,t){var r=(0,a.useState)([]),n=r[0],i=r[1],s=(0,a.useState)(!1),f=s[0],l=s[1],p=(0,a.useState)(!1),d=p[0],b=p[1];return(0,a.useEffect)((function(){var e=function(){var e,t=(e=o().mark((function e(){var t,r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.yZ)();case 3:t=e.sent,i(null!==t&&void 0!==t?t:[]),e.next=14;break;case 7:e.prev=7,e.t0=e.catch(0),a=null!==(n=null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.data)&&void 0!==n?n:e.t0.message,b(a),l(!1);case 14:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){u(a,n,o,c,i,"next",e)}function i(e){u(a,n,o,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();e()}),[e,t]),{services:n,loading:f,error:d}}},87682:function(e,t,r){r.d(t,{ky:function(){return b},Kx:function(){return v},m$:function(){return h},tl:function(){return y}});var n=r(34051),o=r.n(n),a=r(67294),c=r(36100),u=r(25441);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t,r,n,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(n,o)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){s(a,n,o,c,u,"next",e)}function u(e){s(a,n,o,c,u,"throw",e)}c(void 0)}))}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function d(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){var r=(0,a.useState)(null),n=r[0],i=r[1],s=(0,a.useState)(!0),l=s[0],p=s[1],d=(0,a.useState)(""),b=d[0],v=d[1],h=(0,a.useRef)(!0);return(0,a.useEffect)((function(){var r=function(){var r=f(o().mark((function r(){var n,a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=(0,c.JU)(u.db,e,t),r.next=4,(0,c.QT)(n);case 4:a=r.sent,h.current&&(a.exists()&&i(a.data()),p(!1)),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),v(r.t0.message),p(!1);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){return h.current=!1}}),[e,t]),[n,l,b]}function v(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=(0,a.useState)([]),s=i[0],l=i[1],b=(0,a.useState)(!0),v=b[0],h=b[1],y=(0,a.useState)(""),m=y[0],x=y[1],g=(0,a.useRef)(!0);return(0,a.useEffect)((function(){var a=function(){var a=f(o().mark((function a(){var i,s,f,b;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,i=[(0,c.Xo)(t,"asc")],n>0&&i.push((0,c.b9)(n)),s=(0,c.hJ)(u.db,e),f=r||c.IO.apply(void 0,[s].concat(d(i))),o.next=7,(0,c.PL)(f);case 7:b=o.sent,g.current&&(l(b.docs.map((function(e){return p({},e.data())}))),h(!1)),o.next=15;break;case 11:o.prev=11,o.t0=o.catch(0),x(o.t0.message),h(!1);case 15:case"end":return o.stop()}}),a,null,[[0,11]])})));return function(){return a.apply(this,arguments)}}();return a(),function(){return g.current=!1}}),[e,t,r,n]),{documents:s,loading:v,error:m}}function h(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(0,a.useState)([]),s=i[0],l=i[1],d=(0,a.useState)(!0),b=d[0],v=d[1],h=(0,a.useState)(""),y=h[0],m=h[1],x=(0,a.useRef)(!0);return(0,a.useEffect)((function(){var a=function(){var a=f(o().mark((function a(){var i,s;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,i=(0,c.IO)((0,c.hJ)(u.db,e,t,r),(0,c.Xo)(n)),o.next=4,(0,c.PL)(i);case 4:s=o.sent,x.current&&(l(s.docs.map((function(e){return p({},e.data())}))),v(!1)),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(0),m(o.t0.message),v(!1);case 12:case"end":return o.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return a(),function(){return x.current=!1}}),[e,t,r,n]),{documents:s,loading:b,error:y}}function y(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4?arguments[4]:void 0,s=(0,a.useState)([]),l=s[0],d=s[1],b=(0,a.useState)(!0),v=b[0],h=b[1],y=(0,a.useState)(""),m=y[0],x=y[1],g=(0,a.useRef)(!0);return(0,a.useEffect)((function(){var a=function(){var a=f(o().mark((function a(){var s,f;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,s=(0,c.hJ)(u.db,e,t,r),""!==n&&(s=(0,c.IO)(s,(0,c.Xo)(n))),i&&(s=(0,c.IO)(s,(0,c.b9)(i))),o.next=6,(0,c.PL)(s);case 6:f=o.sent,g.current&&(d(f.docs.map((function(e){return p({},e.data())}))),h(!1)),o.next=14;break;case 10:o.prev=10,o.t0=o.catch(0),x(o.t0.message),h(!1);case 14:case"end":return o.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}();return a(),function(){return g.current=!1}}),[e,t,r,n,i]),{documents:l,loading:v,error:m}}},57906:function(e,t,r){r.d(t,{Wn:function(){return w},vo:function(){return O},yZ:function(){return g},Ef:function(){return S}});var n=r(34051),o=r.n(n),a=r(94763),c=r(36100);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t,r,n,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(n,o)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){i(a,n,o,c,u,"next",e)}function u(e){i(a,n,o,c,u,"throw",e)}c(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function b(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?u(e):t}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(r,e);var t=y(r);function r(){var e;f(this,r);var n=u(e=t.apply(this,arguments));l(u(e),"getSupportServices",s(o().mark((function e(){var t,r,a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"support_services",t=n.collection(n.db,"support_services"),r=n.query(t,(0,c.Xo)("date","asc")),e.next=5,n.getDocs(r);case 5:return a=e.sent,u=a.docs.map((function(e){return d({},e.data(),{docId:e.id})})),e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)}))));var a=u(e);l(u(e),"addSupportService",function(){var e=s(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.supportService,"support_services",n=a.collection(a.db,"support_services"),e.next=5,a.addDoc(n,{data:r,date:new Date});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var i=u(e);l(u(e),"updateSupportService",function(){var e=s(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"support_services",r=i.collection(i.db,"support_services"),n=i.doc(r,t.docId),delete t.docId,e.next=6,i.updateDoc(n,t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var p=u(e);return l(u(e),"deleteSupportService",function(){var e=s(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.doc(p.db,"support_services",t),e.next=3,p.deleteDoc(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e}return r}(a.Z),x=new m,g=x.getSupportServices.bind(x),w=x.addSupportService.bind(x),S=x.updateSupportService.bind(x),O=x.deleteSupportService.bind(x)},1029:function(e,t,r){r.d(t,{K:function(){return x},d:function(){return g}});var n=r(34051),o=r.n(n),a=r(94763),c=r(25441),u=r(47426),i=r(27392);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,r,n,o,a,c){try{var u=e[a](c),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(n,o)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){f(a,n,o,c,u,"next",e)}function u(e){f(a,n,o,c,u,"throw",e)}c(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?s(e):t}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}var y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}var x={MEDIA_ASSETS:"n_page_media",ASSETS:"n_page_assets",PAGE_SEARCH:"n_page_search",GLOBAL_COLLECTIONS:"w_services",TYPHOON_ADVISORY:"typhoon_advisory",CYCLONE_ADVISORY:"cyclone_advisory"},g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,e);var t=m(r);function r(){var e;p(this,r);var n=s(e=t.apply(this,arguments));d(s(e),"getPageAssetsDoc",function(){var e=l(o().mark((function e(t,r){var a,c,u=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>2&&void 0!==u[2]&&u[2],c=[],e.prev=2,e.next=5,n.getDocumentData(x.ASSETS,t);case 5:if(c=e.sent){e.next=8;break}return e.abrupt("return",[]);case 8:if(r){e.next=10;break}return e.abrupt("return",c);case 10:if(!a){e.next=14;break}return e.abrupt("return",c.data.filter((function(e){return e.page===r})));case 14:return e.abrupt("return",c.data.filter((function(e){return e.page===r})).map((function(e){return e.url})));case 15:e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(2),console.error(e.t0.message),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,r){return e.apply(this,arguments)}}());var a=s(e);d(s(e),"getTyphoonAdvisory",l(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.doc(a.db,x.GLOBAL_COLLECTIONS,x.TYPHOON_ADVISORY),e.next=3,a.getDoc(t);case 3:if(!(r=e.sent).exists()){e.next=6;break}return e.abrupt("return",r.data());case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)}))));var f=s(e);return d(s(e),"getWeatherForecast",function(){var e=l(o().mark((function e(t,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getNestedCollectionData(x.WEATHER_FORECASTS,t,r,"name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),d(s(e),"getPdfDownloadURL",function(){var e=l(o().mark((function e(t){var r,n,a,s=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=s.length>1&&void 0!==s[1]?s[1]:i.Ry.SEASONAL,n="",e.t0=r,e.next=e.t0===i.Ry.SEASONAL?5:e.t0===i.Ry.TEN_DAY?7:e.t0===i.Ry.SPECIAL_WEATHER?9:11;break;case 5:return n=u.Do.PDF_STORAGE_SEASONAL,e.abrupt("break",12);case 7:return n=u.Do.PDF_STORAGE_TENDAY,e.abrupt("break",12);case 9:return n=u.Do.PDF_STORAGE_SPECIAL,e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:return e.prev=12,a=(0,c.iH)(c.tO,"".concat(n,"/").concat(t)),e.next=16,(0,c.Jt)(a);case 16:return e.abrupt("return",e.sent);case 19:throw e.prev=19,e.t1=e.catch(12),new Error(e.t1.message);case 22:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(t){return e.apply(this,arguments)}}()),e}return r}(a.Z)},87784:function(e,t,r){r.d(t,{aS:function(){return a},fu:function(){return c}});var n=r(47426);function o(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var a=function(e){return e===n.nQ?n.DD:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return parseFloat(e).toFixed(t)}(e)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return new Promise((function(t){if(void 0===e||"object"!==typeof e)t("Missing error response object");else{var r="";if(e.response)if(o(e.response.data,Blob)){var n=new Blob([e.response.data],{type:"application/octet-stream"}),a=new FileReader;a.onload=function(){var e=a.result;t(e)},a.readAsText(n)}else t("Error reading data");else e.request?(r=e.request,t(r)):(r=e.message,t(r))}}))}}}]);