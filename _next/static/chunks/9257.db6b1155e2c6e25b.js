(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9257],{27840:function(e,n,t){"use strict";var r=t(85893),i=t(15861);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(11496).ZP)((function(e){return(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({component:"p",variant:"caption"},e))}))((function(e){var n=e.theme;return{color:n.palette.text.secondary,"& a":{color:n.palette.green.dark,textDecoration:"none"},"& a:visited":{color:n.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));n.Z=o},69257:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ce}});var r=t(34051),i=t.n(r),a=t(85893),o=t(9669),c=t.n(o),l=t(67294),s=t(9473),u=t(4936),p=t(98396);const f=(0,l.createContext)(null),d=f.Provider;function h(){const e=(0,l.useContext)(f);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var m=t(45243);function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}function v(e){let{children:n,className:t,id:r,placeholder:i,style:a,whenCreated:o,...c}=e;const s=(0,l.useRef)(null),u=function(e,n){const[t,r]=(0,l.useState)(null);return(0,l.useEffect)((()=>{if(null!==e.current&&null===t){const t=new m.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),r(t)}}),[e,t,n]),t}(s,c),p=(0,l.useRef)(!1);(0,l.useEffect)((()=>{null!=u&&!1===p.current&&null!=o&&(p.current=!0,o(u))}),[u,o]),(0,l.useEffect)((()=>()=>{null==u||u.remove()}),[u]);const[f]=(0,l.useState)({className:t,id:r,style:a}),h=(0,l.useMemo)((()=>u?{__version:1,map:u}:null),[u]),v=h?l.createElement(d,{value:h},n):i??null;return l.createElement("div",y({},f,{ref:s}),v)}function x(e,n){return null==n?function(n,t){return(0,l.useRef)(e(n,t))}:function(t,r){const i=(0,l.useRef)(e(t,r)),a=(0,l.useRef)(t),{instance:o}=i.current;return(0,l.useEffect)((function(){a.current!==t&&(n(o,t,a.current),a.current=t)}),[o,t,r]),i}}var g=t(73935);function b(e){function n(n,t){const{instance:r,context:i}=e(n).current;return(0,l.useImperativeHandle)(t,(()=>r)),null==n.children?null:l.createElement(d,{value:i},n.children)}return(0,l.forwardRef)(n)}const w=x((function(e,n){let{children:t,...r}=e;const i=new m.Control.Layers(void 0,void 0,r);return{instance:i,context:{...n,layersControl:i}}}),(function(e,n,t){n.collapsed!==t.collapsed&&(!0===n.collapsed?e.collapse():e.expand())})),j=(S=w,function(e){const n=h(),t=S(e,n),{instance:r}=t.current,i=(0,l.useRef)(e.position),{position:a}=e;return(0,l.useEffect)((function(){return r.addTo(n.map),function(){r.remove()}}),[n.map,r]),(0,l.useEffect)((function(){null!=a&&a!==i.current&&(r.setPosition(a),i.current=a)}),[r,a]),t});var S;const _=b(j);function C(e){return function(n){const t=h(),r=(0,l.useRef)(n),[i,a]=(0,l.useState)(null),{layersControl:o,map:c}=t,s=(0,l.useCallback)((n=>{null!=o&&(r.current.checked&&c.addLayer(n),e(o,n,r.current.name),a(n))}),[o,c]),u=(0,l.useCallback)((e=>{null==o||o.removeLayer(e),a(null)}),[o]),p=(0,l.useMemo)((()=>({...t,layerContainer:{addLayer:s,removeLayer:u}})),[t,s,u]);return(0,l.useEffect)((()=>{null!==i&&r.current!==n&&(!0!==n.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=n.checked&&!1!==n.checked||c.removeLayer(i):c.addLayer(i),r.current=n)})),n.children?l.createElement(d,{value:p},n.children):null}}function E(e,n){const t=(0,l.useRef)(n);(0,l.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function O(e,n){const t=(0,l.useRef)();(0,l.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}function L(e,n){const t=e.pane??n.pane;return t?{...e,pane:t}:e}function k(e,n){(0,l.useEffect)((function(){return(n.layerContainer??n.map).addLayer(e.instance),function(){var t;null==(t=n.layerContainer)||t.removeLayer(e.instance),n.map.removeLayer(e.instance)}}),[n,e])}function M(e){return function(n){const t=h(),r=e(L(n,t),t);return E(t.map,n.attribution),O(r.current,n.eventHandlers),k(r.current,t),r}}function I(e){return function(n){const t=h(),r=e(L(n,t),t);return O(r.current,n.eventHandlers),k(r.current,t),function(e,n){const t=(0,l.useRef)();(0,l.useEffect)((function(){if(n.pathOptions!==t.current){const r=n.pathOptions??{};e.instance.setStyle(r),t.current=r}}),[e,n])}(r.current,n),r}}_.BaseLayer=C((function(e,n,t){e.addBaseLayer(n,t)})),_.Overlay=C((function(e,n,t){e.addOverlay(n,t)}));const A=function(e){function n(n,t){const{instance:r}=e(n).current;return(0,l.useImperativeHandle)(t,(()=>r)),null}return(0,l.forwardRef)(n)}(M(x((function(e,n){let{url:t,...r}=e;return{instance:new m.TileLayer(t,L(r,n)),context:n}}),(function(e,n,t){const{opacity:r,zIndex:i}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=i&&i!==t.zIndex&&e.setZIndex(i)}))));const R=function(e,n){return b(I(x(e,n)))}((function(e,n){let{data:t,...r}=e;const i=new m.GeoJSON(t,r);return{instance:i,context:{...n,overlayContainer:i}}}),(function(e,n,t){n.style!==t.style&&(null==n.style?e.resetStyle():e.setStyle(n.style))})),P=function(e,n){return b(M(x(e,n)))}((function(e,n){let{position:t,...r}=e;const i=new m.Marker(t,r);return{instance:i,context:{...n,overlayContainer:i}}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),z=function(e,n){const t=function(e,n){return function(t,r){const i=h(),a=e(L(t,i),i);return E(i.map,t.attribution),O(a.current,t.eventHandlers),n(a.current,i,t,r),a}}(x(e),n);return function(e){function n(n,t){const[r,i]=(0,l.useState)(!1),{instance:a}=e(n,i).current;(0,l.useImperativeHandle)(t,(()=>a)),(0,l.useEffect)((function(){r&&a.update()}),[a,r,n.children]);const o=a._contentNode;return o?(0,g.createPortal)(n.children,o):null}return(0,l.forwardRef)(n)}(t)}((function(e,n){return{instance:new m.Tooltip(e,n.overlayContainer),context:n}}),(function(e,n,t,r){const{onClose:i,onOpen:a,position:o}=t;(0,l.useEffect)((function(){const t=n.overlayContainer;if(null==t)return;const{instance:c}=e,l=e=>{e.tooltip===c&&(o&&c.setLatLng(o),c.update(),r(!0),null==a||a())},s=e=>{e.tooltip===c&&(r(!1),null==i||i())};return t.on({tooltipopen:l,tooltipclose:s}),t.bindTooltip(c),function(){t.off({tooltipopen:l,tooltipclose:s}),null!=t._map&&t.unbindTooltip()}}),[e,n,r,i,a,o])}));var N=t(87357),T=t(41664),D=t(25675),Z=t(76295),U=t(66242),H=t(98456),W=t(86886),G=t(61903),B=t(15861),Y=t(26660),F={daily:{width:{xs:"75px",sm:"65px"},minWidth:{xs:"75px",sm:"65px"},minHeight:"55px",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"rgba(255, 255, 255, 1.0)",padding:function(e){return e.spacing(1)},margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-label":{display:"flex",justifyContent:"space-between",fontSize:{xs:"8px",sm:"9px"}},"& .daily-date":{fontSize:{xs:"10px",sm:"9px"}}}},Q=t(63365),V=t(48038);var J=function(e){var n=e.dailyweather;return(0,a.jsxs)(N.Z,{sx:F.daily,children:[(0,a.jsx)("div",{className:"daily-date",children:n.day}),(0,a.jsx)("div",{children:(0,a.jsx)(D.default,{unoptimized:!0,src:n.icon,height:25,width:25,loader:Y.imageLoader,alt:n.day})}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(Q.Z,{fontSize:"12px"}),(0,a.jsxs)("strong",{children:[n.temp_mean,"\xb0"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(V.Z,{fontSize:"12px"}),n.wind_speed]})]})]})},K=t(27840);var X,q,$,ee={card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minWidth:{xs:"200px",sm:"380px"},maxWidth:"380px",marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5":{marginBottom:function(e){return e.spacing(2)},fontSize:"18px"},"& h6":{fontSize:"16px"},"& .span-source":{"& a":{color:function(e){return e.palette.primary.main},textDecoration:"none"},"& a:hover":{color:function(e){return e.palette.third.main}}}},cardInfo:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",width:"100%",maxWidth:"490px",padding:function(e){return e.spacing(1)},marginTop:function(e){return e.spacing(3)},fontSize:{xs:"11px",sm:"14px"},"& td":{padding:(X={xs:0},q="xs",$="1px",q in X?Object.defineProperty(X,q,{value:$,enumerable:!0,configurable:!0,writable:!0}):X[q]=$,X)}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},weathertoday:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",flexDirection:{xs:"column",b4xs:"row",sm:"row"},"& .icon-temp":{display:"flex",alignItems:"center",gap:"10px"},"& .temperature":{fontSize:"30px",fontWeight:"bold"},"& .weather-details":{paddingTop:"12px",marginLeft:"16px",fontSize:"10px"}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}},ne=t(901);function te(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){te(e,n,t[n])}))}return e}var ie=function(e){var n=e.sel_options,t=e.weather,r=e.forecast,i=e.record,o=e.isSmallScreen,c=void 0!==o&&o,u=e.onSelectItemChange,p=(0,l.useState)(0),f=p[0],d=p[1],h=(0,s.v9)((function(e){return e.provinces})),m=(0,s.v9)((function(e){return e.municipalities})),y=(0,s.v9)((function(e){return e.tendayweather})),v=(0,l.useState)(!0),x=v[0],g=v[1];(0,l.useEffect)((function(){var e=function(){return d((window.innerWidth-b())/2+24)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var b=function(){var e=document.getElementById("header-contents");return e?e.getBoundingClientRect().width:1200};return(0,l.useEffect)((function(){var e=h.status!==ne.G.FULLFILLED||y.status!==ne.G.FULLFILLED;g(e)}),[h.status,y.status,h.error,y.error]),(0,a.jsxs)(N.Z,{sx:{position:"absolute",top:function(e){return e.constants.navbar.outerHeight-35},right:f,marginLeft:"24px",zIndex:400},className:"mui-fixed",children:[(0,a.jsxs)(U.Z,{variant:"outlined",sx:ee.card,style:{backgroundColor:"rgba(139, 195, 74, 0.5)"},children:[(0,a.jsxs)(N.Z,{children:[(0,a.jsx)(B.Z,{variant:"h5",children:"Caraga Region Weather Today"}),(0,a.jsx)(Z.Z,{disablePortal:!0,id:"province",value:h.province,disabled:0===h.ids.length||x,options:Object.values(h.entities),size:"small",renderInput:function(e){return(0,a.jsx)(G.Z,re({},e,{label:null===h.province?"Select a province":"Province"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return u(e,re({},n,{from:"province"}))}}),(0,a.jsx)("br",{}),(0,a.jsx)(Z.Z,{disablePortal:!0,id:"municipality",value:m.municipality,disabled:0===m.ids.length||x,options:Object.values(m.entities),size:"small",renderInput:function(e){return(0,a.jsx)(G.Z,re({},e,{label:null===m.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},getOptionDisabled:function(e){return void 0!==e.iscalendar},onChange:function(e,n){return u(e,re({},n,{from:"municipality",province:h.province}))}})]}),n.loading&&(0,a.jsx)(N.Z,{sx:ee.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)(H.Z,{size:24,color:"secondary"})}),""===n.error&&!n.loading&&null!==n.sel_municipality&&""!==t.description&&(0,a.jsxs)(N.Z,{sx:ee.weathertoday,children:[(0,a.jsxs)("div",{className:"icon-temp",children:[(0,a.jsx)(D.default,{unoptimized:!0,src:t.icon,height:70,width:70,loader:Y.imageLoader,alt:t.description}),(0,a.jsxs)("div",{className:"temperature",children:[t.temp,"\xb0C"]})]}),(0,a.jsxs)("div",{className:"weather-details",children:[(0,a.jsxs)("div",{children:["Date today: ",t.datenow]}),(0,a.jsxs)("div",{children:["Humidity: ",t.humidity]}),(0,a.jsxs)("div",{children:["Wind speed: ",t.wind]}),(0,a.jsx)("div",{children:t.description?"".concat(t.description.charAt(0).toUpperCase()).concat(t.description.slice(1)):""})]})]}),""===n.error&&!n.loading&&null===n.sel_municipality&&(0,a.jsx)(N.Z,{sx:ee.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:"\xa0"})}),""!==n.error&&(0,a.jsx)(N.Z,{sx:ee.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:n.error})})]}),r.length>0&&(0,a.jsxs)(U.Z,{variant:"outlined",sx:ee.card,style:{marginTop:"10px",paddingBottom:"2px"},children:[(0,a.jsx)(B.Z,{variant:"h6",children:"10-Day Rainfall Forecast"}),(0,a.jsxs)(K.Z,{sx:{marginBottom:"16px",fontSize:"11px"},children:["View the full 10-Day Weather Forecast"," ",(0,a.jsx)(T.default,{href:"/weather-services",children:"here"}),"."]}),(0,a.jsx)(W.ZP,{container:!0,children:r.map((function(e,n){return(0,a.jsx)(W.ZP,{item:!0,children:(0,a.jsx)(J,{dailyweather:e})},"daily-".concat(n))}))}),(0,a.jsxs)(B.Z,{variant:"caption",style:{fontSize:"10px"},className:"span-source",children:["source:"," ",(0,a.jsx)(T.default,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"PAGASA's 10-Day Climate Forecast"})]})]}),c&&null!==i&&(0,a.jsx)(U.Z,{variant:"outlined",sx:ee.cardInfo,children:(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:i[e.toLowerCase()]})]},n)}))})})})]})},ae=t(18217),oe=t(23549),ce=t(56867),le=t(1902);function se(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,i)}function ue(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){se(a,r,i,o,c,"next",e)}function c(e){se(a,r,i,o,c,"throw",e)}o(void 0)}))}}function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){pe(e,n,t[n])}))}return e}var de={sel_municipality:null,sel_province:"",loading:!0,error:""},he={icon:"https://openweathermap.org/img/wn/10d@2x.png",temp:"00",pressure:"0000 hPa",humidity:"0%",wind:"00 meter/sec"};var me=function(e){var n=e.record,t=e.isSmallScreen,r=e.onSelectMunicipality,o=(0,l.useState)(de),c=o[0],u=o[1],p=(0,l.useState)(he),f=p[0],d=p[1],h=(0,l.useState)([]),m=h[0],y=h[1],v=(0,l.useState)(!1),x=v[0],g=v[1],b=(0,s.I0)(),w=(0,s.v9)((function(e){return e.provinces})),j=w.ids,S=w.entities,_=w.municipalities,C=w.province,E=(0,s.v9)((function(e){return e.municipalities})).municipality,O=(0,s.v9)((function(e){return e.tendayweather})),L=O.ids,k=O.entities,M=O.status;(0,l.useEffect)((function(){b((0,ae.QA)(null))}),[b]),(0,l.useEffect)((function(){j.length>0&&(b((0,oe.Wn)(Object.values(S)[0])),b((0,ce.R)(Object.values(S)[0].label)).unwrap().then((function(){g(!0)})))}),[b,j,S]),(0,l.useEffect)((function(){if(L.length>0&&M===ne.G.FULLFILLED&&x&&null!==C){var e=null;if(E)e=E;else{var n=Object.keys(_).find((function(e){return e===C.label}));n&&_[n].length>0&&(e=_[n][0])}b((0,ae.X4)(_[C.label]||[])),b((0,ae.QA)(e))}}),[b,L,k,M,x,E,_,C]),(0,l.useEffect)((function(){null!==E&&x&&u((function(e){return fe({},e,{sel_province:C,sel_municipality:E})}))}),[b,E,C,k,M,x]),(0,l.useEffect)((function(){if(M===ne.G.FULLFILLED&&null!==c.sel_municipality&&0===m.length)try{r(c.sel_municipality.label,c.sel_province.label);var e=Object.values(k).find((function(e){return e.municipality===c.sel_municipality.label}));if(e){var n=JSON.parse(e.data),t=void 0!==le.Sx.rainfall[n[0].rainfall]?"images/icons/weather/".concat(le.Sx.rainfall[n[0].rainfall]):"images/icons/weather/blank_weather.png",i=(new Date).toDateString(),a=n.find((function(e){return e.day_format===i.substring(0,i.length-5)}))||n[0],o={icon:t,temp:Math.round(a.tmean),precipitation:null,humidity:"".concat(R(a.humidity),"%"),datenow:i,wind:"".concat(R(a.wspeed)," mps"),description:"".concat(P(a.rainfall),", ").concat(P(a.cover))},l=[];n.forEach((function(e){var n=new Date("".concat(e.day_format,", ").concat((new Date).getFullYear())),t={day:e.day_format,wind_speed:R(e.wspeed),temp_mean:R(e.tmean),icon:void 0!==e.rainfall?"images/icons/weather/".concat(le.Sx.rainfall[e.rainfall]):"images/icons/weather/blank_weather.png",date:n.toLocaleDateString("en-US"),description:""};l.push(t)})),d(o),y(l),u((function(e){return fe({},e,{loading:!1,error:""})}))}}catch(s){u((function(e){return fe({},e,{loading:!1,error:s.message})}))}}),[M,k,S,m,c.sel_municipality,c.sel_province.label,r]);var I=(0,l.useCallback)(function(){var e=ue(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=_[t.label],void 0!==(a=r.find((function(e){return e.label===n})))){e.next=4;break}return e.abrupt("return");case 4:y([]),u(fe({},c,{sel_municipality:a,sel_province:t,loading:!0,error:""})),b((0,ce.R)(t.label));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),[_,c,b]),A=function(){var e=ue(i().mark((function e(n,t){var a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.label,o=t.from,!a){e.next=21;break}e.t0=o,e.next="province"===e.t0?5:"municipality"===e.t0?9:18;break;case 5:return b((0,oe.Wn)(t)),b((0,ce.R)(a)),b((0,ae.X4)([])),e.abrupt("break",19);case 9:if(b((0,ae.QA)({id:t.id,label:t.label,iscalendar:t.iscalendar})),void 0!==t.id){e.next=16;break}return u(fe({},c,{sel_municipality:null,loading:!1})),d(he),y([]),r(null),e.abrupt("return");case 16:return I(t.label,null===t||void 0===t?void 0:t.province),e.abrupt("break",19);case 18:return e.abrupt("break",19);case 19:e.next=30;break;case 21:e.t1=o,e.next="province"===e.t1?24:"municipality"===e.t1?27:29;break;case 24:return b((0,oe.jg)()),b((0,ae.X4)([])),e.abrupt("break",30);case 27:return b((0,ae.QA)(null)),e.abrupt("break",30);case 29:return e.abrupt("break",30);case 30:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),R=function(e){return Math.round(100*(e+Number.EPSILON))/100},P=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" ")};return(0,a.jsx)(ie,{sel_options:c,weather:f,forecast:m,record:n,isSmallScreen:t,onSelectItemChange:A})},ye=t(99108),ve=t.n(ye);var xe=function(e){var n=e.record,t=(0,l.useState)(null),r=t[0],i=t[1],o=(0,l.useState)(null),c=o[0],s=o[1];return(0,l.useEffect)((function(){i(null!==n?[n.lat,n.lon]:null),s(n)}),[n]),null===r?null:(0,a.jsx)(P,{position:r,eventHandlers:{mouseover:function(){i(null)},click:function(){i(null)}},children:(0,a.jsx)(z,{className:ve().tooltipCustom,permanent:!0,children:(0,a.jsx)("table",{style:{width:"100%"},children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:c[e.toLowerCase()]})]},n)}))})})})})},ge=[{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",name:"Street Map",attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"},{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",name:"Topography Map",attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'},{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",name:"Light",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",name:"Terrain Map",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",name:"Watercolor",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",name:"Satellite Map",attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",name:"Shaded Relief",attribution:"Tiles &copy; Esri &mdash; Source: Esri"},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}",name:"Ocean",attribution:"Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"}],be={map:{width:"100%",height:"calc(100vh - 88px - 519px)",maxWidth:function(e){return e.breakpoints.xl}}};function we(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,i)}var je=t(47426).XH.split(","),Se={lat:je[0],lng:je[1]},_e=["Barangay","Municipality","Province","Association"];var Ce=function(e){var n=e.data,t=void 0===n?{villages:[],provincesMunicipalities:[]}:n,r=(0,l.useState)({}),o=r[0],f=r[1],d=(0,l.useState)(""),h=d[0],m=d[1],y=(0,l.useState)(null),x=y[0],g=y[1],b=(0,l.useRef)(null),w=(0,p.Z)((function(e){return e.breakpoints.down("md")})),j=(0,s.v9)((function(e){return e.provinces.ids})),S=(0,l.useRef)(null),C=(0,s.I0)();return(0,l.useEffect)((function(){null===S.current&&0===j.length&&(S.current=!0,C((0,u.Q)()))}),[C,j.length]),(0,l.useEffect)((function(){var e=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,c().get("https://firebasestorage.googleapis.com/v0/b/acap-caraga-prodd.appspot.com/o/Map%2Fprovdists-region-1600000000.0.01.json?alt=media&token=c0ba8be4-2a1f-4ee0-b273-e75afb436c33");case 4:n=e.sent,f(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){we(a,r,i,o,c,"next",e)}function c(e){we(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),(0,a.jsxs)(N.Z,{sx:be.map,style:{minHeight:w?"1300px":"600px"},children:[(0,a.jsxs)(v,{style:{height:"100%"},center:Se,zoom:8,maxZoom:12,minZoom:8,tileSize:512,placeholder:(0,a.jsx)("h3",{children:"You need JavaScript to render this app."}),whenCreated:function(e){b.current=e},children:[(0,a.jsx)(_,{position:"topleft",children:ge.map((function(e,n){return(0,a.jsx)(_.BaseLayer,{name:e.name,checked:0===n,children:(0,a.jsx)(A,{zIndex:0,attribution:e.attribution,url:e.url})},"map-".concat(n))}))}),(0,a.jsx)(R,{municipality:h,data:o.features,zIndex:1,onEachFeature:function(e,n){n.setStyle(function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({fillColor:e.properties.ADM2_EN===h?"#ff6a00":"#ffa666",fillOpacity:1,weight:0},"fillOpacity","0.5"))}},Math.random().toString(36).substring(2,8)),t.villages.map((function(e,n){return(0,a.jsx)(P,{position:[e.lat,e.lon],id:"tooltip-".concat(n),eventHandlers:{mouseover:function(e){null!==x&&g(null)},click:function(e){null!==x&&g(null)}},children:(0,a.jsx)(z,{className:ve().tooltipCustom,direction:"left",children:(0,a.jsx)("table",{style:{width:"100%"},id:"tip-".concat(n),children:(0,a.jsx)("tbody",{children:_e.map((function(n,t){return["lat","lon"].includes(n)?(0,a.jsx)("tr",{},t):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[n,":"]})}),(0,a.jsx)("td",{children:e[n.toLowerCase()]})]},t)}))})})})},n)})),!w&&(0,a.jsx)(xe,{record:x})]}),(0,a.jsx)(me,{record:x,isSmallScreen:w,onSelectMunicipality:function(e,n){if(null===e&&null===n)m(""),g(null);else{var r=t.villages.find((function(t){return t.municipality===e&&t.province===n}));if(void 0!==r){var i=r.province;m((function(e){return i})),g(r),function(e,n){var t=b.current;t&&t.flyTo([e,n+4],10,{duration:2.5})}(r.lat,r.lon)}else m(""),g(null)}}})]})}},1902:function(e,n,t){"use strict";t.d(n,{J4:function(){return r},Y1:function(){return i},Sx:function(){return a}});var r=[{icon:"cc_sunny_49.svg",label:"No rain",nowrap:!0},{icon:"rainfall_light_rain_49.svg",label:"Light rain"},{icon:"rainfall_moderate_rain_49.svg",label:"Moderate rain"},{icon:"rainfall_heavy_rain_49.svg",label:"Heavy rain"},{icon:"blank_weather.png",label:"Heavy rain",hidden:!0}],i=[{icon:"cc_sunny_49.svg",label:"Sunny"},{icon:"cc_mostly_sunny_49.svg",label:"Mostly sunny"},{icon:"cc_partly_cloudy_49.svg",label:"Partly cloudy"},{icon:"cc_mostly_cloudy_49.svg",label:"Mostly cloudy"},{icon:"cc_cloudy_49.svg",label:"Cloudy"}],a={rainfall:{"NO RAIN":"cc_sunny_49.svg","LIGHT RAINS":"rainfall_light_rain_49.svg","MODERATE RAINS":"rainfall_moderate_rain_49.svg","HEAVY RAINS":"rainfall_heavy_rain_49.svg"},cloudCover:{SUNNY:"cc_sunny_49.svg","MOSTLY SUNNY":"cc_mostly_sunny_49.svg","PARTLY CLOUDY":"cc_partly_cloudy_49.svg","MOSTLY CLOUDY":"cc_mostly_cloudy_49.svg",CLOUDY:"cc_cloudy_49.svg"}}},48418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,o=(a=t(67294))&&a.__esModule?a:{default:a},c=t(76273),l=t(90387),s=t(57190);var u={};function p(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),a=o.default.useMemo((function(){var n=i(c.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),f=a.href,d=a.as,h=e.children,m=e.replace,y=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,b=i(s.useIntersection({rootMargin:"200px"}),2),w=b[0],j=b[1],S=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);o.default.useEffect((function(){var e=j&&t&&c.isLocalURL(f),n="undefined"!==typeof x?x:r&&r.locale,i=u[f+"%"+d+(n?"%"+n:"")];e&&!i&&p(r,f,d,{locale:n})}),[d,f,j,x,t,r]);var _={ref:S,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,o,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[i?"replace":"push"](t,r,{shallow:a,locale:l,scroll:o}))}(e,r,f,d,m,y,v,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(f)&&p(r,f,d,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof x?x:r&&r.locale,E=r&&r.isLocaleDomain&&c.getDomainLocale(d,C,r&&r.locales,r&&r.domainLocales);_.href=E||c.addBasePath(c.addLocale(d,C,r&&r.defaultLocale))}return o.default.cloneElement(n,_)};n.default=f},99108:function(e){e.exports={tooltipCustom:"Map_tooltipCustom___IYju"}},41664:function(e,n,t){e.exports=t(48418)}}]);