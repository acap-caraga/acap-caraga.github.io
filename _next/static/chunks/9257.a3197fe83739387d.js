(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9257],{27840:function(e,n,t){"use strict";var r=t(85893),i=t(15861);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(11496).ZP)((function(e){return(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({component:"p",variant:"caption"},e))}))((function(e){var n=e.theme;return{color:n.palette.text.secondary,"& a":{color:n.palette.green.dark,textDecoration:"none"},"& a:visited":{color:n.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));n.Z=o},69257:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ke}});var r=t(34051),i=t.n(r),a=t(85893),o=t(9669),c=t.n(o),l=t(67294),u=t(9473),s=t(4936),p=t(98396);const d=(0,l.createContext)(null),f=d.Provider;function h(){const e=(0,l.useContext)(d);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var m=t(45243),v=t.n(m);function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function y(e){let{children:n,className:t,id:r,placeholder:i,style:a,whenCreated:o,...c}=e;const u=(0,l.useRef)(null),s=function(e,n){const[t,r]=(0,l.useState)(null);return(0,l.useEffect)((()=>{if(null!==e.current&&null===t){const t=new m.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),r(t)}}),[e,t,n]),t}(u,c),p=(0,l.useRef)(!1);(0,l.useEffect)((()=>{null!=s&&!1===p.current&&null!=o&&(p.current=!0,o(s))}),[s,o]),(0,l.useEffect)((()=>()=>{null==s||s.remove()}),[s]);const[d]=(0,l.useState)({className:t,id:r,style:a}),h=(0,l.useMemo)((()=>s?{__version:1,map:s}:null),[s]),v=h?l.createElement(f,{value:h},n):i??null;return l.createElement("div",x({},d,{ref:u}),v)}function g(e,n){return null==n?function(n,t){return(0,l.useRef)(e(n,t))}:function(t,r){const i=(0,l.useRef)(e(t,r)),a=(0,l.useRef)(t),{instance:o}=i.current;return(0,l.useEffect)((function(){a.current!==t&&(n(o,t,a.current),a.current=t)}),[o,t,r]),i}}var b=t(73935);function w(e){function n(n,t){const{instance:r,context:i}=e(n).current;return(0,l.useImperativeHandle)(t,(()=>r)),null==n.children?null:l.createElement(f,{value:i},n.children)}return(0,l.forwardRef)(n)}const j=g((function(e,n){let{children:t,...r}=e;const i=new m.Control.Layers(void 0,void 0,r);return{instance:i,context:{...n,layersControl:i}}}),(function(e,n,t){n.collapsed!==t.collapsed&&(!0===n.collapsed?e.collapse():e.expand())})),_=(S=j,function(e){const n=h(),t=S(e,n),{instance:r}=t.current,i=(0,l.useRef)(e.position),{position:a}=e;return(0,l.useEffect)((function(){return r.addTo(n.map),function(){r.remove()}}),[n.map,r]),(0,l.useEffect)((function(){null!=a&&a!==i.current&&(r.setPosition(a),i.current=a)}),[r,a]),t});var S;const L=w(_);function O(e){return function(n){const t=h(),r=(0,l.useRef)(n),[i,a]=(0,l.useState)(null),{layersControl:o,map:c}=t,u=(0,l.useCallback)((n=>{null!=o&&(r.current.checked&&c.addLayer(n),e(o,n,r.current.name),a(n))}),[o,c]),s=(0,l.useCallback)((e=>{null==o||o.removeLayer(e),a(null)}),[o]),p=(0,l.useMemo)((()=>({...t,layerContainer:{addLayer:u,removeLayer:s}})),[t,u,s]);return(0,l.useEffect)((()=>{null!==i&&r.current!==n&&(!0!==n.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=n.checked&&!1!==n.checked||c.removeLayer(i):c.addLayer(i),r.current=n)})),n.children?l.createElement(f,{value:p},n.children):null}}function C(e,n){const t=(0,l.useRef)(n);(0,l.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function E(e,n){const t=(0,l.useRef)();(0,l.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}function k(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function I(e,n){(0,l.useEffect)((function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){var t;null==(t=n.layerContainer)||t.removeLayer(e.instance),n.map.removeLayer(e.instance)}}),[n,e])}function z(e){return function(n){const t=h(),r=e(k(n,t),t);return C(t.map,n.attribution),E(r.current,n.eventHandlers),I(r.current,t),r}}function M(e){return function(n){const t=h(),r=e(k(n,t),t);return E(r.current,n.eventHandlers),I(r.current,t),function(e,n){const t=(0,l.useRef)();(0,l.useEffect)((function(){if(n.pathOptions!==t.current){const r=n.pathOptions??{};e.instance.setStyle(r),t.current=r}}),[e,n])}(r.current,n),r}}L.BaseLayer=O((function(e,n,t){e.addBaseLayer(n,t)})),L.Overlay=O((function(e,n,t){e.addOverlay(n,t)}));const R=function(e){function n(n,t){const{instance:r}=e(n).current;return(0,l.useImperativeHandle)(t,(()=>r)),null}return(0,l.forwardRef)(n)}(z(g((function(e,n){let{url:t,...r}=e;return{instance:new m.TileLayer(t,k(r,n)),context:n}}),(function(e,n,t){const{opacity:r,zIndex:i}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=i&&i!==t.zIndex&&e.setZIndex(i)}))));const P=function(e,n){return w(M(g(e,n)))}((function(e,n){let{data:t,...r}=e;const i=new m.GeoJSON(t,r);return{instance:i,context:{...n,overlayContainer:i}}}),(function(e,n,t){n.style!==t.style&&(null==n.style?e.resetStyle():e.setStyle(n.style))})),A=function(e,n){return w(z(g(e,n)))}((function(e,n){let{position:t,...r}=e;const i=new m.Marker(t,r);return{instance:i,context:{...n,overlayContainer:i}}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),Z=function(e,n){const t=function(e,n){return function(t,r){const i=h(),a=e(k(t,i),i);return C(i.map,t.attribution),E(a.current,t.eventHandlers),n(a.current,i,t,r),a}}(g(e),n);return function(e){function n(n,t){const[r,i]=(0,l.useState)(!1),{instance:a}=e(n,i).current;(0,l.useImperativeHandle)(t,(()=>a)),(0,l.useEffect)((function(){r&&a.update()}),[a,r,n.children]);const o=a._contentNode;return o?(0,b.createPortal)(n.children,o):null}return(0,l.forwardRef)(n)}(t)}((function(e,n){return{instance:new m.Tooltip(e,n.overlayContainer),context:n}}),(function(e,n,t,r){const{onClose:i,onOpen:a,position:o}=t;(0,l.useEffect)((function(){const t=n.overlayContainer;if(null==t)return;const{instance:c}=e,l=e=>{e.tooltip===c&&(o&&c.setLatLng(o),c.update(),r(!0),null==a||a())},u=e=>{e.tooltip===c&&(r(!1),null==i||i())};return t.on({tooltipopen:l,tooltipclose:u}),t.bindTooltip(c),function(){t.off({tooltipopen:l,tooltipclose:u}),null!=t._map&&t.unbindTooltip()}}),[e,n,r,i,a,o])}));var N=t(87357),D=t(41664),T=t(25675),W=t(76295),H=t(66242),U=t(98456),B=t(86886),F=t(61903),Y=t(15861),G=t(26660),Q={daily:{width:{xs:"76px",sm:"66px"},minWidth:{xs:"76px",sm:"66px"},minHeight:"88px",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"rgba(255, 255, 245, 1.0)",padding:function(e){return e.spacing(1)},margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-label":{display:"flex",justifyContent:"space-between",fontSize:{xs:"8px",sm:"9px"}},"& .daily-date":{fontSize:{xs:"10px",sm:"9px"}}}},V=t(63365),q=t(48038);var J=function(e){var n=e.dailyweather;return(0,a.jsxs)(N.Z,{sx:Q.daily,children:[(0,a.jsx)("div",{className:"daily-date",children:n.day}),(0,a.jsx)("div",{children:(0,a.jsx)(T.default,{unoptimized:!0,src:n.icon,height:25,width:25,loader:G.imageLoader,alt:n.day})}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(V.Z,{fontSize:"12px"}),(0,a.jsxs)("strong",{children:[n.temp_mean,"\xb0"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(q.Z,{fontSize:"12px"}),n.wind_speed]})]})]})},K=t(27840);var X,$,ee,ne={card:{backgroundColor:"rgba(255, 255, 255, 0.85)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minWidth:{xs:"200px",sm:"385px"},maxWidth:"385px",marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5":{marginBottom:function(e){return e.spacing(2)},fontSize:"18px"},"& h6":{fontSize:"16px"},"& .span-source":{"& a":{color:function(e){return e.palette.primary.main},textDecoration:"none"},"& a:hover":{color:function(e){return e.palette.third.main}}}},cardInfo:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",width:"100%",maxWidth:"490px",padding:function(e){return e.spacing(1)},marginTop:function(e){return e.spacing(3)},fontSize:{xs:"11px",sm:"14px"},"& td":{padding:(X={xs:0},$="xs",ee="1px",$ in X?Object.defineProperty(X,$,{value:ee,enumerable:!0,configurable:!0,writable:!0}):X[$]=ee,X)}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},weathertoday:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",flexDirection:{xs:"column",b4xs:"row",sm:"row"},"& .icon-temp":{display:"flex",alignItems:"center",gap:"10px"},"& .temperature":{fontSize:"30px",fontWeight:"bold"},"& .weather-details":{paddingTop:"12px",marginLeft:"16px",fontSize:"10px"}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}},te=t(901);function re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){re(e,n,t[n])}))}return e}var ae=function(e){var n=e.sel_options,t=e.weather,r=e.forecast,i=e.record,o=e.isSmallScreen,c=void 0!==o&&o,s=e.onSelectItemChange,p=(0,l.useState)(0),d=p[0],f=p[1],h=(0,u.v9)((function(e){return e.provinces})),m=(0,u.v9)((function(e){return e.municipalities})),v=(0,u.v9)((function(e){return e.tendayweather})),x=(0,l.useState)(!0),y=x[0],g=x[1];(0,l.useEffect)((function(){var e=function(){return f((window.innerWidth-b())/2+24)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var b=function(){var e=document.getElementById("header-contents");return e?e.getBoundingClientRect().width:1200};return(0,l.useEffect)((function(){var e=h.status!==te.G.FULLFILLED||v.status!==te.G.FULLFILLED;g(e)}),[h.status,v.status,h.error,v.error]),(0,a.jsxs)(N.Z,{sx:{position:"absolute",top:function(e){return e.constants.navbar.outerHeight-35},right:d,marginLeft:"24px",zIndex:400},className:"mui-fixed",children:[(0,a.jsxs)(H.Z,{variant:"outlined",sx:ne.card,children:[(0,a.jsxs)(N.Z,{children:[(0,a.jsx)(Y.Z,{variant:"h6",style:{fontWeight:600,marginBottom:"20px"},children:"Caraga Region Weather Today"}),(0,a.jsx)(W.Z,{disablePortal:!0,id:"province",value:h.province,disabled:0===h.ids.length||y,options:Object.values(h.entities),size:"small",renderInput:function(e){return(0,a.jsx)(F.Z,ie({},e,{label:null===h.province?"Select a province":"Province"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return s(e,ie({},n,{from:"province"}))}}),(0,a.jsx)("br",{}),(0,a.jsx)(W.Z,{disablePortal:!0,id:"municipality",value:m.municipality,disabled:0===m.ids.length||y,options:Object.values(m.entities),size:"small",renderInput:function(e){return(0,a.jsx)(F.Z,ie({},e,{label:null===m.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},getOptionDisabled:function(e){return void 0!==e.iscalendar},onChange:function(e,n){return s(e,ie({},n,{from:"municipality",province:h.province}))}})]}),n.loading&&(0,a.jsx)(N.Z,{sx:ne.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)(U.Z,{size:24,color:"secondary"})}),""===n.error&&!n.loading&&null!==n.sel_municipality&&""!==t.description&&(0,a.jsxs)(N.Z,{sx:ne.weathertoday,children:[(0,a.jsxs)("div",{className:"icon-temp",children:[(0,a.jsx)(T.default,{unoptimized:!0,src:t.icon,height:70,width:70,loader:G.imageLoader,alt:t.description}),(0,a.jsxs)("div",{className:"temperature",children:[t.temp,"\xb0C"]})]}),(0,a.jsxs)("div",{className:"weather-details",children:[(0,a.jsxs)("div",{children:["Date today: ",t.datenow]}),(0,a.jsxs)("div",{children:["Humidity: ",t.humidity]}),(0,a.jsxs)("div",{children:["Wind speed: ",t.wind]}),(0,a.jsx)("div",{children:t.description?"".concat(t.description.charAt(0).toUpperCase()).concat(t.description.slice(1)):""})]})]}),""===n.error&&!n.loading&&null===n.sel_municipality&&(0,a.jsx)(N.Z,{sx:ne.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:"\xa0"})}),""!==n.error&&(0,a.jsx)(N.Z,{sx:ne.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:n.error})})]}),r.length>0&&(0,a.jsxs)(H.Z,{variant:"outlined",sx:ne.card,style:{marginTop:"10px",paddingBottom:"2px"},children:[(0,a.jsx)(Y.Z,{variant:"h6",children:"10-Day Rainfall Forecast"}),(0,a.jsxs)(K.Z,{sx:{marginBottom:"16px",fontSize:"11px"},children:["View the full 10-Day Weather Forecast"," ",(0,a.jsx)(D.default,{href:"/weather-services",children:"here"}),"."]}),(0,a.jsx)(B.ZP,{container:!0,children:r.map((function(e,n){return(0,a.jsx)(B.ZP,{item:!0,children:(0,a.jsx)(J,{dailyweather:e})},"daily-".concat(n))}))}),(0,a.jsxs)(Y.Z,{variant:"caption",style:{fontSize:"10px"},className:"span-source",children:["source:"," ",(0,a.jsx)(D.default,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"PAGASA's 10-Day Climate Forecast"})]})]}),c&&null!==i&&(0,a.jsx)(H.Z,{variant:"outlined",sx:ne.cardInfo,children:(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:i[e.toLowerCase()]})]},n)}))})})})]})},oe=t(18217),ce=t(23549),le=t(56867),ue=t(1902);function se(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(u){return void t(u)}c.done?n(l):Promise.resolve(l).then(r,i)}function pe(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){se(a,r,i,o,c,"next",e)}function c(e){se(a,r,i,o,c,"throw",e)}o(void 0)}))}}function de(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){de(e,n,t[n])}))}return e}var he={sel_municipality:null,sel_province:"",loading:!0,error:""},me={icon:"https://openweathermap.org/img/wn/10d@2x.png",temp:"00",pressure:"0000 hPa",humidity:"0%",wind:"00 meter/sec"};var ve=function(e){var n=e.record,t=e.isSmallScreen,r=e.onSelectMunicipality,o=(0,l.useState)(he),c=o[0],s=o[1],p=(0,l.useState)(me),d=p[0],f=p[1],h=(0,l.useState)([]),m=h[0],v=h[1],x=(0,l.useState)(!1),y=x[0],g=x[1],b=(0,u.I0)(),w=(0,u.v9)((function(e){return e.provinces})),j=w.ids,_=w.entities,S=w.municipalities,L=w.province,O=(0,u.v9)((function(e){return e.municipalities})).municipality,C=(0,u.v9)((function(e){return e.tendayweather})),E=C.ids,k=C.entities,I=C.status;(0,l.useEffect)((function(){b((0,oe.QA)(null))}),[b]),(0,l.useEffect)((function(){j.length>0&&(b((0,ce.Wn)(Object.values(_)[0])),b((0,le.R)(Object.values(_)[0].label)).unwrap().then((function(){g(!0)})))}),[b,j,_]),(0,l.useEffect)((function(){if(E.length>0&&I===te.G.FULLFILLED&&y&&null!==L){var e=null;if(O)e=O;else{var n=Object.keys(S).find((function(e){return e===L.label}));n&&S[n].length>0&&(e=S[n][0])}b((0,oe.X4)(S[L.label]||[])),b((0,oe.QA)(e))}}),[b,E,k,I,y,O,S,L]),(0,l.useEffect)((function(){null!==O&&y&&s((function(e){return fe({},e,{sel_province:L,sel_municipality:O})}))}),[b,O,L,k,I,y]),(0,l.useEffect)((function(){if(I===te.G.FULLFILLED&&null!==c.sel_municipality&&0===m.length)try{r(c.sel_municipality.label,c.sel_province.label);var e=Object.values(k).find((function(e){return e.municipality===c.sel_municipality.label}));if(e){var n=JSON.parse(e.data),t=(new Date).toDateString(),i=n.find((function(e){return e.day_format===t.substring(0,t.length-5)}))||n[0],a={icon:void 0!==ue.Sx.rainfall[i.rainfall]?"images/icons/weather/".concat(ue.Sx.rainfall[i.rainfall]):"images/icons/weather/blank_weather.png",temp:Math.round(i.tmean),precipitation:null,humidity:"".concat(R(i.humidity),"%"),datenow:t,wind:"".concat(R(i.wspeed)," mps"),description:"".concat(P(i.rainfall),", ").concat(P(i.cover))},o=[];n.forEach((function(e){var n=new Date("".concat(e.day_format,", ").concat((new Date).getFullYear())),t={day:e.day_format,wind_speed:R(e.wspeed),temp_mean:R(e.tmean),icon:void 0!==e.rainfall?"images/icons/weather/".concat(ue.Sx.rainfall[e.rainfall]):"images/icons/weather/blank_weather.png",date:n.toLocaleDateString("en-US"),description:""};o.push(t)})),f(a),v(o),s((function(e){return fe({},e,{loading:!1,error:""})}))}}catch(l){s((function(e){return fe({},e,{loading:!1,error:l.message})}))}}),[I,k,_,m,c.sel_municipality,c.sel_province.label,r]);var z=(0,l.useCallback)(function(){var e=pe(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=S[t.label],void 0!==(a=r.find((function(e){return e.label===n})))){e.next=4;break}return e.abrupt("return");case 4:v([]),s(fe({},c,{sel_municipality:a,sel_province:t,loading:!0,error:""})),b((0,le.R)(t.label));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),[S,c,b]),M=function(){var e=pe(i().mark((function e(n,t){var a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.label,o=t.from,!a){e.next=21;break}e.t0=o,e.next="province"===e.t0?5:"municipality"===e.t0?9:18;break;case 5:return b((0,ce.Wn)(t)),b((0,le.R)(a)),b((0,oe.X4)([])),e.abrupt("break",19);case 9:if(b((0,oe.QA)({id:t.id,label:t.label,iscalendar:t.iscalendar})),void 0!==t.id){e.next=16;break}return s(fe({},c,{sel_municipality:null,loading:!1})),f(me),v([]),r(null),e.abrupt("return");case 16:return z(t.label,null===t||void 0===t?void 0:t.province),e.abrupt("break",19);case 18:return e.abrupt("break",19);case 19:e.next=30;break;case 21:e.t1=o,e.next="province"===e.t1?24:"municipality"===e.t1?27:29;break;case 24:return b((0,ce.jg)()),b((0,oe.X4)([])),e.abrupt("break",30);case 27:return b((0,oe.QA)(null)),e.abrupt("break",30);case 29:return e.abrupt("break",30);case 30:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),R=function(e){return Math.round(100*(e+Number.EPSILON))/100},P=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" ")};return(0,a.jsx)(ae,{sel_options:c,weather:d,forecast:m,record:n,isSmallScreen:t,onSelectItemChange:M})},xe=t(99108),ye=t.n(xe),ge=new(v().Icon)({iconUrl:"https://firebasestorage.googleapis.com/v0/b/acap-caraga-prodd.appspot.com/o/marker.png?alt=media&token=285dab94-d6ff-4b04-97f9-cc31a3de624a",iconSize:[32,32],iconAnchor:[16,32]});var be=function(e){var n=e.record,t=(0,l.useState)(null),r=t[0],i=t[1],o=(0,l.useState)(null),c=o[0],u=o[1];return(0,l.useEffect)((function(){i(null!==n?[n.lat,n.lon]:null),u(n)}),[n]),null===r?null:(0,a.jsx)(A,{position:r,icon:ge,eventHandlers:{mouseover:function(){i(null)},click:function(){i(null)}},children:(0,a.jsx)(Z,{className:ye().tooltipCustom,permanent:!0,children:(0,a.jsx)("table",{style:{width:"100%"},children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:c[e.toLowerCase()]})]},n)}))})})})})},we=[{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",name:"Street Map",attribution:""},{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",name:"Topography Map",attribution:""},{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",name:"Light",attribution:""},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",name:"Terrain Map",attribution:""},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",name:"Watercolor",attribution:""},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",name:"Satellite Map",attribution:""},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",name:"Shaded Relief",attribution:""},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}",name:"Ocean",attribution:""}],je={map:{width:"100%",height:"calc(100vh - 88px - 519px)",maxWidth:function(e){return e.breakpoints.xl}}};function _e(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(u){return void t(u)}c.done?n(l):Promise.resolve(l).then(r,i)}var Se=t(47426).XH.split(","),Le={lat:Se[0],lng:Se[1]},Oe=["Image","Barangay","Municipality","Province","Association"],Ce=new(v().Icon)({iconUrl:"https://firebasestorage.googleapis.com/v0/b/acap-caraga-dev.appspot.com/o/marker.svg?alt=media&token=be340150-598b-4ae0-9ce2-503beb6b0487",iconSize:[43,50],iconAnchor:[16,32]}),Ee=function(e){var n=e.src,t=e.width,r=e.quality;return"".concat(n,"?w=").concat(t,"&q=").concat(r||75)};var ke=function(e){var n=e.data,t=void 0===n?{villages:[],provincesMunicipalities:[]}:n,r=(0,l.useState)({}),o=r[0],d=r[1],f=(0,l.useState)(""),h=f[0],m=f[1],v=(0,l.useState)(null),x=v[0],g=v[1],b=(0,l.useRef)(null),w=(0,p.Z)((function(e){return e.breakpoints.down("md")})),j=(0,u.v9)((function(e){return e.provinces.ids})),_=(0,l.useRef)(null),S=(0,u.I0)();return(0,l.useEffect)((function(){null===_.current&&0===j.length&&(_.current=!0,S((0,s.Q)()))}),[S,j.length]),(0,l.useEffect)((function(){var e=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,c().get("https://firebasestorage.googleapis.com/v0/b/acap-caraga-prodd.appspot.com/o/Map%2Fprovdists-region-1600000000.0.01.json?alt=media&token=c0ba8be4-2a1f-4ee0-b273-e75afb436c33");case 4:n=e.sent,d(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){_e(a,r,i,o,c,"next",e)}function c(e){_e(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),(0,a.jsxs)(N.Z,{sx:je.map,style:{minHeight:w?"1300px":"600px"},children:[(0,a.jsxs)(y,{style:{height:"100%"},center:Le,zoom:8,maxZoom:12,minZoom:8,tileSize:512,placeholder:(0,a.jsx)("h3",{children:"You need JavaScript to render this app."}),whenCreated:function(e){b.current=e},children:[(0,a.jsx)(L,{position:"topleft",children:we.map((function(e,n){return(0,a.jsx)(L.BaseLayer,{name:e.name,checked:0===n,children:(0,a.jsx)(R,{zIndex:0,attribution:e.attribution,url:e.url})},"map-".concat(n))}))}),(0,a.jsx)(P,{municipality:h,data:o.features,zIndex:1,onEachFeature:function(e,n){n.setStyle(function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({fillColor:e.properties.ADM2_EN===h?"#ff6a00":"#ffa666",fillOpacity:1,weight:0},"fillOpacity","0.5"))}},Math.random().toString(36).substring(2,8)),t.villages.map((function(e,n){return(0,a.jsx)(A,{position:[e.lat,e.lon],icon:Ce,eventHandlers:{mouseover:function(e){null!==x&&g(null)},click:function(e){null!==x&&g(null)}},children:(0,a.jsx)(Z,{className:ye().tooltipCustom,direction:"left",children:(0,a.jsx)("table",{style:{width:"100%"},id:"tip-".concat(n),children:(0,a.jsx)("tbody",{children:Oe.map((function(n,t){return["lat","lon"].includes(n)?(0,a.jsx)("tr",{},t):"Image"!==n?(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[n,":"]})}),(0,a.jsx)("td",{children:e[n.toLowerCase()]})]},t):(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:"2",children:(0,a.jsx)(T.default,{src:e.imageUrl,alt:"".concat(e.barangay," image"),width:500,height:300,layout:"responsive",loader:Ee})})},t)}))})})})},n)})),!w&&(0,a.jsx)(be,{record:x})]}),(0,a.jsx)(ve,{record:x,isSmallScreen:w,onSelectMunicipality:function(e,n){if(null===e&&null===n)m(""),g(null);else{var r=t.villages.find((function(t){return t.municipality===e&&t.province===n}));if(void 0!==r){var i=r.province;m((function(e){return i})),g(r),function(e,n){var t=b.current;t&&t.flyTo([e,n+4],10,{duration:2.5})}(r.lat,r.lon)}else m(""),g(null)}}})]})}},1902:function(e,n,t){"use strict";t.d(n,{J4:function(){return r},Y1:function(){return i},Sx:function(){return a}});var r=[{icon:"cc_sunny_49.svg",label:"No rain",nowrap:!0},{icon:"rainfall_light_rain_49.svg",label:"Light rain"},{icon:"rainfall_moderate_rain_49.svg",label:"Moderate rain"},{icon:"rainfall_heavy_rain_49.svg",label:"Heavy rain"},{icon:"blank_weather.png",label:"Heavy rain",hidden:!0}],i=[{icon:"cc_sunny_49.svg",label:"Sunny"},{icon:"cc_mostly_sunny_49.svg",label:"Mostly sunny"},{icon:"cc_partly_cloudy_49.svg",label:"Partly cloudy"},{icon:"cc_mostly_cloudy_49.svg",label:"Mostly cloudy"},{icon:"cc_cloudy_49.svg",label:"Cloudy"}],a={rainfall:{"NO RAIN":"cc_sunny_49.svg","LIGHT RAINS":"rainfall_light_rain_49.svg","MODERATE RAINS":"rainfall_moderate_rain_49.svg","HEAVY RAINS":"rainfall_heavy_rain_49.svg"},cloudCover:{SUNNY:"cc_sunny_49.svg","MOSTLY SUNNY":"cc_mostly_sunny_49.svg","PARTLY CLOUDY":"cc_partly_cloudy_49.svg","MOSTLY CLOUDY":"cc_mostly_cloudy_49.svg",CLOUDY:"cc_cloudy_49.svg"}}},48418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,o=(a=t(67294))&&a.__esModule?a:{default:a},c=t(76273),l=t(90387),u=t(57190);var s={};function p(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),a=o.default.useMemo((function(){var n=i(c.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),d=a.href,f=a.as,h=e.children,m=e.replace,v=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,b=i(u.useIntersection({rootMargin:"200px"}),2),w=b[0],j=b[1],_=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);o.default.useEffect((function(){var e=j&&t&&c.isLocalURL(d),n="undefined"!==typeof y?y:r&&r.locale,i=s[d+"%"+f+(n?"%"+n:"")];e&&!i&&p(r,d,f,{locale:n})}),[f,d,j,y,t,r]);var S={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,o,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[i?"replace":"push"](t,r,{shallow:a,locale:l,scroll:o}))}(e,r,d,f,m,v,x,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&p(r,d,f,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof y?y:r&&r.locale,O=r&&r.isLocaleDomain&&c.getDomainLocale(f,L,r&&r.locales,r&&r.domainLocales);S.href=O||c.addBasePath(c.addLocale(f,L,r&&r.defaultLocale))}return o.default.cloneElement(n,S)};n.default=d},99108:function(e){e.exports={tooltipCustom:"Map_tooltipCustom___IYju"}},41664:function(e,n,t){e.exports=t(48418)}}]);