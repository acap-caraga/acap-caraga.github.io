(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5507],{67947:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/tenday/create",function(){return t(8822)}])},55688:function(e,n,t){"use strict";var r=t(85893),i=t(67294),o=t(45697),a=t.n(o),l=t(14866),s=t(46901);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=i.forwardRef((function(e,n){return(0,r.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function p(e){var n=e.openSnackbar,t=e.message,o=e.severity,a=e.closeHandlerCB,s=void 0===a?function(){}:a,c=(0,i.useState)(n),p=c[0],d=c[1];(0,i.useEffect)((function(){d(n)}),[n]);var f=function(){d(!1),s()};return(0,r.jsx)(l.Z,{open:p,autoHideDuration:3e3,onClose:f,children:(0,r.jsx)(u,{onClose:f,severity:o,sx:{width:"100%"},children:t})})}p.propTypes={openSnackbar:a().bool,message:a().string,severity:a().string},n.Z=p},19247:function(e,n){"use strict";n.Z={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",borderColor:"#E2E8F0"},welcome:{border:"1px solid #DCEDC8",borderRadius:function(e){return e.spacing(1)},width:"100%",display:"grid",placeContent:"center",padding:"20px",marginTop:function(e){return e.spacing(1)},textAlign:"center","& h6":{lineHeight:"20px"}},summary:{border:"1px solid #DCEDC8",borderRadius:function(e){return e.spacing(1)},marginTop:function(e){return e.spacing(1)},padding:function(e){return e.spacing(3)}},selectionSummary:{minWidth:"100%",paddingLeft:{xs:0,lg:"16px"}},conditionLegend:{borderRadius:function(e){return e.spacing(1)},width:"100%",padding:function(e){return e.spacing(1)},border:"1px solid grey",textAlign:"center",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",float:"left"},autocomplete:{marginTop:function(e){return e.spacing(1)}},recSeasonal:{marginTop:function(e){return e.spacing(1)},"& p, ul, ol":{fontSize:"14px"}},button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"50px"}},pdfcontent:{ul:{paddingLeft:3}},recSeasonalStage:{marginTop:function(e){return e.spacing(5)},marginBottom:function(e){return e.spacing(2)},textDecoration:"underline"}}},8822:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return he}});var r=t(34051),i=t.n(r),o=t(85893),a=t(67294),l=t(9473),s=t(11163),c=t(45697),u=t.n(c),p=t(41664),d=t(21023),f=t(76295),g=t(11057),m=t(56863),v=t(87357),b=t(86886),h=t(93946),y=t(61903),x=t(15861),_=t(11829),j=t(19227),S=t(22094),w=t(98456),O=t(87918),Z=t(67720),E=t(40044),k=t(88409),P=t(53063),C=t(901),D=t(24478),T=t(22228),I=t(19247);function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){F(e,n,t[n])}))}return e}function A(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function L(e){var n=function(e){var n=e.children,t=e.value,r=e.index,i=A(e,["children","value","index"]);return(0,o.jsx)("div",R({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i,{children:t===r&&(0,o.jsx)(v.Z,{sx:{p:3,whiteSpace:e.smsstyle},children:n})}))},t=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},r=e.options,i=e.smstext,s=e.sel_options,c=e.optsactivities,u=e.recommendationsData,d=e.loading,f=e.handleSave,h=e.handlePreview,y=e.show,_=void 0===y||y,j=e.isCreateDisabled,S=void 0!==j&&j,F=(0,l.I0)(),L=(0,l.v9)((function(e){return e.recommendations})),B=L.filtered_recommendations,M=L.recommendations,N=(0,T.Z)(null!==u&&void 0!==u?u:M,c).group,z=(0,l.v9)((function(e){return e.reports})),W=z.error,G=z.status,H=(0,l.v9)((function(e){return e.dashboard.isEnglish})),V=(0,a.useState)(0),U=V[0],Y=V[1],q=(0,a.useState)(!1),K=q[0],X=q[1];(0,a.useEffect)((function(){X(r.loading||G===C.G.PENDING)}),[r.loading,G]);return(0,o.jsxs)(b.ZP,{container:!0,sx:I.Z.container,gap:3,style:{marginTop:"24px",padding:d?"16px":"24px"},children:[(0,o.jsxs)(b.ZP,{item:!0,sx:I.Z.item,xs:12,lg:12,children:[(0,o.jsx)(v.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,o.jsx)(w.Z,{size:16,color:"primary",sx:{display:d?"block":"none"}})}),null!==B&&_&&(0,o.jsx)(v.Z,{children:(0,o.jsxs)(v.Z,{sx:{width:"100%",marginTop:{xs:"85px",lg:"0px"}},children:[(0,o.jsx)(v.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,o.jsxs)(k.Z,{value:U,onChange:function(e,n){Y(n)},"aria-label":"basic tabs example",children:[(0,o.jsx)(E.Z,R({label:"PDF FORM"},t(0))),(0,o.jsx)(E.Z,R({label:"SMS FORM"},t(1)))]})}),(0,o.jsxs)(n,{value:U,index:0,smsstyle:"normal",children:[(0,o.jsxs)(v.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[(0,o.jsx)(x.Z,{variant:"h4",children:"Impact Outlooks"}),(0,o.jsx)(O.Z,{size:"medium",variant:"outlined",label:H?"Tagalog":"English",onClick:function(){return F((0,P.cX)())},sx:{width:"90px"}})]}),(0,o.jsx)(v.Z,{sx:I.Z.recSeasonal,children:(0,o.jsx)(D.Z,{impactOutlookOnly:!0,isShowImpactOutlookSubtitle:!1,recommendations:N,impactOutlookEng:"impact",impactOutlookTag:"impact_tagalog",title:s.sel_crop,isTagalog:!H,isShowTitle:!1})}),(0,o.jsx)("hr",{}),(0,o.jsx)(x.Z,{variant:"h4",sx:{marginTop:"32px"},children:"Recommendations"}),Object.keys(B).map((function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x.Z,{variant:"h5",sx:I.Z.recSeasonalStage,children:e}),Object.keys(B[e]).map((function(n,t){return(0,o.jsxs)(v.Z,{sx:R({},I.Z.recSeasonal,{marginBottom:"24px","& h6":{color:"rgba(0, 0, 0, 0.67)"}}),children:[(0,o.jsx)(x.Z,{variant:"h6",children:n}),(0,o.jsx)(D.Z,{recommendations:B[e][n],isTagalog:!H,isShowTitle:!1})]},"rec-".concat(t))}))]})}))]}),(0,o.jsx)(n,{value:U,index:1,smsstyle:"pre-wrap",children:i})]})})]}),(0,o.jsxs)(v.Z,{sx:{marginBottom:"16px",width:"100%",display:null!==B&&_?"block":"none"},children:[(0,o.jsx)("br",{}),(0,o.jsx)(Z.Z,{}),(0,o.jsx)("br",{}),""!==W&&(0,o.jsxs)(x.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",W]}),(0,o.jsxs)(m.Z,{size:"large","aria-label":"large button group",sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,o.jsx)(p.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,o.jsx)(g.Z,{disabled:K,children:"Cancel"})}),(0,o.jsxs)(g.Z,{onClick:h,disabled:K,children:[(0,o.jsx)("span",{style:{display:K?"none":"block"},children:"Preview"})," ","\xa0",(0,o.jsx)(w.Z,{size:20,color:"secondary",sx:{display:K?"block":"none"}})]}),(0,o.jsx)(g.Z,{variant:"contained",onClick:f,disableElevation:!0,disabled:K||S,children:"Save"})]})]})]})}L.propTypes={options:u().object,smstext:u().string,keyEng:u().string,keyTag:u().string,formTitle:u().string,isCreateDisabled:u().bool,show:u().bool,loading:u().bool,handleSave:u().func,handlePreview:u().func};var B=L,M=t(79316),N=t(55688),z=t(12671),W=t(22757);function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){G(e,n,t[n])}))}return e}function V(e){var n=(0,a.useState)(!1),t=n[0],r=n[1],i=(0,s.useRouter)(),c=(0,l.I0)(),u=e.open,w=e.loading,O=e.isloadingreport,Z=e.isdisabled,E=e.climateRisk,k=e.optsprovinces,P=e.optsmunicipalities,C=e.optscrops,D=e.optscropstages,T=e.optsactivities,I=e.recommendationsData,F=e.sel_options,R=e.message,A=e.smstext,L=e.pageTitle,G=void 0===L?"":L,V=e.pageDescription,U=void 0===V?"":V,Y=e.pdfPreview,q=e.handlePreview,K=e.handleSave,X=e.resetSelections,$=e.togglePrompt,J=e.toggleViewerOpen,Q=e.onSelectItemChange,ee=(0,l.v9)((function(e){return e.reports})).report,ne="Invalid year";(0,a.useEffect)((function(){null===F.sel_municipality&&!0===t&&r(!1)}),[F.sel_municipality,t]);var te=function(){ee&&(c((0,z.s_)()),i.push("/admin/bulletins/crops/report/view/?docId=".concat(ee.id)))},re=function(){var e="Loading...";return k.length>0&&(e=null===F.sel_province?"Select a province":"Province"),e};return(0,o.jsxs)("div",{children:[(0,o.jsx)(j.Z,{isOpen:R.isOpen,maxWidth:"xs",openButtonText:null,title:R.title,contentText:R.msg,loading:R.loading,modalCancelHandlerCB:function(){R.savesuccess?te():$()},modalConfirmHandlerCB:function(){R.savesuccess?te():K()}}),(0,o.jsx)(S.Z,{open:u,pdfPreview:Y,error:F.error,loading:F.loading,toggleViewerOpen:J}),(0,o.jsx)(N.Z,{openSnackbar:""!==F.error,message:F.error,severity:"warning"}),(0,o.jsxs)(b.ZP,{container:!0,sx:W.Z.container,children:[(0,o.jsxs)(v.Z,{sx:W.Z.headerText,children:[(0,o.jsxs)(v.Z,{children:[(0,o.jsx)(x.Z,{variant:"h5",children:G}),(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:U}})]}),(0,o.jsx)(v.Z,{children:(0,o.jsx)(h.Z,{"aria-label":"exit",size:"medium",children:(0,o.jsx)(p.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,o.jsx)(d.Z,{fontSize:"inherit"})})})})]}),(0,o.jsxs)(b.ZP,{item:!0,sx:W.Z.item,xs:12,lg:4,children:[(0,o.jsx)(x.Z,{variant:"h6",children:"Selection Options"}),(0,o.jsx)(f.Z,{disablePortal:!0,id:"province",size:"small",value:F.sel_province,disabled:0===k.length||F.error.includes(ne)||w,options:k,sx:W.Z.autocomplete,PaperComponent:_.Z,renderInput:function(e){return(0,o.jsx)(y.Z,H({},e,{label:re()}))},getOptionDisabled:function(e){return e.disabled},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return Q(e,H({},n,{from:"province"}))}}),(0,o.jsx)(f.Z,{disablePortal:!0,id:"municipality",size:"small",value:F.sel_municipality,disabled:0===P.length||F.error.includes(ne)||w,options:P,sx:W.Z.autocomplete,PaperComponent:_.Z,renderInput:function(e){return(0,o.jsx)(y.Z,H({},e,{label:null===F.sel_municipality?"Select a municipality":"Municipality"}))},getOptionDisabled:function(e){return e.disabled||void 0!==e.iscalendar},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){Q(e,H({},n,{from:"municipality"})),r(!1)}}),(0,o.jsx)(f.Z,{disablePortal:!0,id:"crop",size:"small",value:F.sel_crop,disabled:0===C.length||w||!F.sel_municipality,options:C,sx:W.Z.autocomplete,PaperComponent:_.Z,renderInput:function(e){return(0,o.jsx)(y.Z,H({},e,{label:null===F.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){Q(e,H({},n,{from:"crop"})),r(!1)}}),null!==F.sel_municipality&&(0,o.jsxs)("div",{style:{marginTop:"16px",float:"left",textAlign:"center",border:"1px solid #DCEDC8",padding:"5px 10px",borderRadius:"5px"},children:[(0,o.jsx)(x.Z,{variant:"subtitle1",children:(0,o.jsx)("strong",{children:"Climate Risk:"})}),E]}),(0,o.jsxs)(m.Z,{disableElevation:!0,size:"small","aria-label":"outlined button controls group",disabled:O||null===F.sel_municipality||"-"===F.sel_crop,sx:{marginTop:"16px",float:"right"},children:[(0,o.jsx)(g.Z,{variant:"outlined",disabled:w||O,onClick:X,children:"Reset"}),(0,o.jsx)(g.Z,{variant:"contained",onClick:function(){return r((function(e){return!e}))},disabled:w||null===F.sel_month||0===D.length||""!==F.error||t,children:"Generate"})]})]}),(0,o.jsx)(b.ZP,{item:!0,sx:W.Z.item,xs:12,lg:8,children:(0,o.jsx)(M.Z,{climateRisk:E,selecteditems:F,cropstages:null===D||void 0===D?void 0:D.map((function(e){return e.label})).toString().split(",").join(", "),farmoperations:T.map((function(e){return e.label})).toString().split(",").join(", "),loading:w,reportType:"Special Weather Bulletin"===G?"special":"tenday"})})]}),(0,o.jsx)(B,{show:t,loading:w,keyEng:"practice",keyTag:"practice_tagalog",sel_options:F,recommendationsData:I,optsactivities:T,options:F,smstext:A,isCreateDisabled:Z,handlePreview:q,toggleViewerOpen:J,pdfPreview:Y,handleSave:$})]})}V.propTypes={climateRisk:u().string,optsprovinces:u().array,optsmunicipalities:u().array,optscrops:u().array,optscropstages:u().array,optsactivities:u().array,sel_options:u().object,loading:u().bool,isloadingreport:u().bool,isdisabled:u().bool,open:u().bool,message:u().object,smstext:u().string,pageTitle:u().string,pageDescription:u().string,pdfPreview:u().object,onSelectItemChange:u().func,handlePreview:u().func,handleSave:u().func,toggleViewerOpen:u().func,resetSelections:u().func,togglePrompt:u().func};var U=V,Y=t(66383),q=t(95243),K=t(16327),X=t(61690),$=t(87006),J=t(72216),Q=t(59390),ee=t(38885),ne=t(22856),te=t(27941),re=t(23766),ie=t(15497),oe=t(94640),ae=t(27392),le=t(59111),se=t(77715),ce=t(47426),ue=t(87784),pe=t(52955);function de(e,n,t,r,i,o,a){try{var l=e[o](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,i)}function fe(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){de(o,r,i,a,l,"next",e)}function l(e){de(o,r,i,a,l,"throw",e)}a(void 0)}))}}function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function me(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ge(e,n,t[n])}))}return e}var ve={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:[],sel_month:null,processed:!1,loading:!1,error:"",success:"",sel_condition:{id:0,from:"weather_condition",label:ce.MW.WAY_BELOW_NORMAL.label}},be={url:"",filename:""};var he=(0,q.Z)((function(e){var n=e.user,t=e.onBtnLogoutClick,r=e.loading,s=(0,a.useState)(ve),c=s[0],u=s[1],p=(0,a.useState)({}),d=p[0],f=p[1],g=(0,a.useState)({}),m=g[0],v=g[1],b=(0,a.useState)([]),h=b[0],y=b[1],x=(0,a.useState)([]),_=x[0],j=x[1],S=(0,a.useState)([]),w=S[0],O=S[1],Z=(0,a.useState)([]),E=Z[0],k=Z[1],D=(0,re.Z)(c.sel_province,w),T=(0,oe.Z)(c.sel_province,c.sel_municipality),I=T.days,F=T.loading,R=T.summary;(0,a.useEffect)((function(){if(I.length>0){var e=(0,pe.Z)(I,"tenday"),n=me({},e);["Flooding/Submergence 3M","Flooding/Submergence 2H"].includes(n.label)&&(e.label="Flooding/Submergence",e.code="flood_submergence"),f(e),v(n)}}),[I]);var A=(0,Q.Z)(c.sel_province,c.sel_crop),L=A.cropcalendar,B=A.cropStages,M=A.loading,N=(0,ee.Z)().cropList.map((function(e,n){return{disabled:!1,label:e,id:n}})),W=(0,ne.Z)(d.code,E,c.sel_crop,"tenday",!0),G=W.recommendations,H=W.farmoperations,V=W.loading,q=(0,te.Z)(c.sel_crop,m.code,"tenday_sms"),de=q.recommendationsSMS,ge=q.loading,he=(0,ie.Z)(G,B,E),ye=he.group,xe=he.error;(0,a.useEffect)((function(){if(I.length>0&&!M&&!V){var e=new Date(I[0].label_full),n=(0,se.Mn)(e);if(0!==L.length){var t=L.data1.find((function(e){return e.municipality===c.sel_municipality&&e.crop===c.sel_crop})),r=L.data2.find((function(e){return e.municipality===c.sel_municipality&&e.crop===c.sel_crop})),i=[];if(t&&r&&Object.keys(B).length>0){Object.keys(n).forEach((function(e){var o=t[e].split(",");n[e].forEach((function(e){"1st_half"===e&&"none"!==o[0]?i.includes(o[0])||i.push(o[0]):"2nd_half"===e&&"none"!==o[1]&&(i.includes(o[1])||i.push(o[1]))}));var a=r[e].split(",");n[e].forEach((function(e){"1st_half"===e&&"none"!==a[0]?i.includes(a[0])||i.push(a[0]):"2nd_half"===e&&"none"!==a[1]&&(i.includes(a[1])||i.push(a[1]))}))}));var o=i.map((function(e,n){return{id:n,label:B[e].label,code:e}}));k(o)}}}}),[B,L.length,L.data1,L.data2,I,c.sel_municipality,c.sel_crop,M,V]);var _e=(0,l.v9)((function(e){return e.reports})),je=_e.status,Se=_e.report,we=(0,l.v9)((function(e){return e.dashboard.reportType})),Oe=(0,l.v9)((function(e){return e.dashboard.isEnglish})),Ze=(0,a.useState)(!0),Ee=Ze[0],ke=Ze[1],Pe=(0,a.useState)(!1),Ce=Pe[0],De=Pe[1],Te=(0,a.useRef)(!1),Ie=(0,a.useState)(""),Fe=Ie[0],Re=Ie[1],Ae=(0,a.useState)(be),Le=Ae[0],Be=Ae[1],Me=(0,a.useState)(ae.BF),Ne=Me[0],ze=Me[1],We=(0,l.I0)();(0,a.useEffect)((function(){Te.current=!0;var e=function(){var e=fe(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,K.$m)();case 3:n=e.sent,Te&&O(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){Te.current=!1}}),[]),(0,a.useEffect)((function(){We((0,J.Km)([])),We((0,z.s_)())}),[We]),(0,a.useEffect)((function(){w.length>0&&j((0,le.m)(w))}),[w]),(0,a.useEffect)((function(){null!==R&&u((function(e){return me({},e,{sel_month:{label:R.date_range}})}))}),[R]),(0,a.useEffect)((function(){ke(r||V||M||F||ge)}),[r,V,M,F,ge]),(0,a.useEffect)((function(){Be(be)}),[Oe]),(0,a.useEffect)((function(){0!==de.length&&Re(de[0].sms.replace("{{10_day_range_identifier}}",c.sel_month.label))}),[de,c.sel_month]),(0,a.useEffect)((function(){je===C.G.FULLFILLED&&null!==Se&&Te.current&&ze((function(e){return me({},e,{msg:"Success! Bulletin report created.",loading:!1,savesuccess:!0,docId:Se.id})}))}),[je,Se]),(0,a.useEffect)((function(){xe||null===ye||We((0,J.Km)(ye))}),[ye,xe,We]);var Ge=function(){var e=fe(i().mark((function e(){var n,t,r,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===Le.url){e.next=3;break}return De(!0),e.abrupt("return");case 3:return u((function(e){return me({},e,{loading:!0,error:"",success:""})})),e.prev=4,n={region:"caraga",province:c.sel_province,municipality:c.sel_municipality,operation:"preview",language:Oe?"en":"tag",crop:null===c||void 0===c?void 0:c.sel_crop},De(!0),u((function(e){return me({},e,{loading:!0,error:""})})),e.next=10,(0,$.bM)(n);case 10:t=e.sent,r=new Blob([t],{type:"application/pdf"}),(o={}).href=URL.createObjectURL(r),o.download="".concat(c.sel_province,"_").concat(c.sel_municipality,".pdf"),Be((function(e){return me({},e,{url:o.href,filename:o.download})})),u((function(e){return me({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=25;break;case 19:return e.prev=19,e.t0=e.catch(4),e.next=23,(0,ue.fu)(e.t0);case 23:a=e.sent,u((function(e){return me({},e,{loading:!1,error:a})}));case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}(),He=function(){var e=fe(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ze(me({},Ne,{loading:!0,msg:"Saving report..."}));try{t={region:"caraga",province:c.sel_province,municipality:c.sel_municipality,operation:"create",language:Oe?"en":"tag",crop:c.sel_crop},We((0,X.a0)(t)).unwrap().then((function(){we!==ae.Ry.TEN_DAY&&(We((0,P.uq)(ae.Ry.TEN_DAY)),We((0,X.RC)({uid:n.uid,type:ae.Ry.TEN_DAY})))})).catch((function(e){Te.current&&ze((function(n){return me({},n,{msg:e,loading:!1,savesuccess:!1,docId:null})}))}))}catch(o){r="",void 0!==o.response&&(r=void 0!==o.response.data&&"[object Blob]"===((i=o.response.data)&&"undefined"!==typeof Symbol&&i.constructor===Symbol?"symbol":typeof i)?o.response.data:""),""===r&&(r=o.message),u((function(e){return me({},e,{loading:!1,error:r})}))}case 2:case"end":return e.stop()}var i}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(Y.Z,{loading:r,user:n,onBtnLogoutClick:t,accLevel:ce.DW.ADMIN,children:(0,o.jsx)(U,{climateRisk:d.label,optsprovinces:_,optsmunicipalities:D,optscrops:N,optscropstages:E,optsactivities:H,sel_options:c,loading:Ee,recommendationsData:G,isloadingreport:je===C.G.PENDING,isdisabled:!1,open:Ce,message:Ne,smstext:Fe,pageTitle:"10-Day Farm Weather Outlook and Advisory Bulletin",pageDescription:"Create <strong>10-Day Farm Weather Outlook and Advisory</strong> crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download.",pdfPreview:Le,onSelectItemChange:function(e,n){var t=n.from,r=n.label;if(Be(be),h.length>0&&y([]),""!==c.error&&u((function(e){return me({},e,{error:""})})),Object.keys(n).includes("id"))switch(t){case"province":k([]),u((function(e){return me({},e,{sel_province:r,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null})}));break;case"municipality":k([]),u((function(e){return me({},e,{sel_municipality:r,sel_crop:null,sel_stage:null,sel_activity:null})}));break;case"crop":u((function(e){return me({},e,{sel_crop:r,sel_stage:null,sel_activity:null})})),k([])}else if("province"===t){var i=c.sel_month;u(me({},ve,{sel_month:i})),k([])}else"municipality"===t&&(u(me({},c,{sel_municipality:null,sel_crop:null,sel_day:null,sel_stage:null,sel_activity:null})),k([]))},handlePreview:Ge,handleSave:He,toggleViewerOpen:function(){De((function(e){return!e}))},resetSelections:function(){var e=c.sel_month;u(me({},ve,{sel_month:e})),k([]),We((0,J.Km)([]))},togglePrompt:function(){ze((function(e){return me({},ae.BF,{isOpen:!e.isOpen})}))}})})}))},22228:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){var n=(0,r.useState)([]),t=n[0],o=n[1],a=(0,r.useState)(""),l=a[0],s=a[1];(0,r.useEffect)((function(){if(s(""),(null===e||void 0===e?void 0:e.length)>0)try{var n=e.map((function(e){return{impact:e.impact_outlook_english,impact_tagalog:e.impact_outlook_tagalog}})).filter((function(e){return""!==e.impact_outlook_english&&""!==e.impact_outlook_tagalog}));return n=u(n),void o([{impact:c(n.impact),impact_tagalog:c(n.impact_tagalog)}])}catch(t){s(t)}else o([])}),[e]);var c=function(e){var n="-",t=e.reduce((function(e,t){return t.includes("<p>")?("list"===n&&(e+="</ul>"),e+=t,n="p"):(["-","p"].includes(n)&&(e+="<ul>"),e+=t,n="list"),e}),"");return"list"===n&&(t+="</ul>"),t},u=function(e){var n={impact:[],impact_tagalog:[]};return e.reduce((function(e,t){return Object.keys(e).forEach((function(r){var i=t[r].replace(/<ul>/g,"");(i=(i=i.replace(/<\/ul>/g,"")).replace(/<li>/g,"")).split("</li>").forEach((function(t){t.includes("<p>")?t.replace(/<p>/g,"").split("</p>").forEach((function(t){n[r].includes(t)||""===t||(n[r].push(t),e[r].push("<p>".concat(t,"</p>")))})):n[r].includes(t)||""===t||(n[r].push(t),e[r].push("<li>".concat(t,"</li>")))}))})),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},e)}),{impact:[],impact_tagalog:[]})};return{group:t,error:l}}},15497:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(67294);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n,t){var i=(0,r.useState)(null),a=i[0],l=i[1],s=(0,r.useState)(""),c=s[0],u=s[1];return(0,r.useEffect)((function(){if(u(""),(null===e||void 0===e?void 0:e.length)>0&&(null===t||void 0===t?void 0:t.length)>0&&n){var r=e.map((function(e){return e.farming_activity})).filter((function(e,n,t){return t.indexOf(e)===n})),i=null===t||void 0===t?void 0:t.map((function(e){return e.code}));try{l(i.reduce((function(t,i){return null===r||void 0===r||r.forEach((function(r){var a=n[i].label,l=e.filter((function(e){return e.crop_stage===i&&e.farming_activity===r}));l.length>0&&a&&(void 0===t[a]&&(t[a]={}),void 0===t[a][r]&&(t[a][r]=[]),t[a][r]=o(t[a][r]).concat(o(l)))})),t}),{}))}catch(a){l(null),u(a)}}else l(null)}),[e,n,t]),{group:a,error:c}}},27941:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(34051),i=t.n(r),o=t(67294),a=t(1096);function l(e,n,t,r,i,o,a){try{var l=e[o](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,i)}function s(e,n,t){var r=(0,o.useState)([]),s=r[0],c=r[1],u=(0,o.useState)(!1),p=u[0],d=u[1],f=(0,o.useState)(""),g=f[0],m=f[1];return(0,o.useEffect)((function(){var r=function(){var r,o=(r=i().mark((function r(){var o,l,s,u;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=[],d(!1),m(""),r.next=6,(0,a.iR)({crop:e,climateRisk:n,type:t});case 6:o=r.sent,d(!1),c(o||[]),r.next=18;break;case 11:r.prev=11,r.t0=r.catch(0),u=null!==(s=null===r.t0||void 0===r.t0||null===(l=r.t0.response)||void 0===l?void 0:l.data)&&void 0!==s?s:r.t0.message,m(u),d(!1);case 18:case"end":return r.stop()}}),r,null,[[0,11]])})),function(){var e=this,n=arguments;return new Promise((function(t,i){var o=r.apply(e,n);function a(e){l(o,t,i,a,s,"next",e)}function s(e){l(o,t,i,a,s,"throw",e)}a(void 0)}))});return function(){return o.apply(this,arguments)}}();e&&t?r():c([])}),[e,n,t]),{recommendationsSMS:s,loading:p,error:g}}},94640:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(67294),i=t(9473),o=t(47426),a=t(56867),l=t(77715),s=t(901);function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,n){var t=(0,r.useState)([]),c=t[0],p=t[1],d=(0,r.useState)(null),f=d[0],g=d[1],m=(0,r.useState)(""),v=m[0],b=m[1],h=(0,r.useState)(""),y=h[0],x=h[1],_=(0,r.useState)(!1),j=_[0],S=_[1],w=(0,i.I0)(),O=(0,i.v9)((function(e){return e.tendayweather})),Z=O.ids,E=O.status,k=O.entities,P=O.error;return(0,r.useEffect)((function(){null!==e&&(b(""),x(""),w((0,a.R)(e)))}),[e,w]),(0,r.useEffect)((function(){b(P)}),[P]),(0,r.useEffect)((function(){S(E===s.G.PENDING)}),[E]),(0,r.useEffect)((function(){if(b(""),x(""),E===s.G.FULLFILLED&&Z.length>0&&""===P&&null!==n){var e=Object.values(k).find((function(e){return e.municipality===n}));if(void 0!==e){var t,r,i=JSON.parse(e.data),a=Object.values(o.MW);p(i.reduce((function(e,n,o){var s,c,p;return u(e).concat([{id:o,label:n.day_format,label_full:null===(s=(0,l.Ay)(n.day_format,i[9].day_format))||void 0===s?void 0:s.toDateString(),rainfall:n.rainfall,forecast:null!==(t=null===(c=a.find((function(e){return e.tenday===n.rainfall})))||void 0===c?void 0:c.sync)&&void 0!==t?t:"-",code:null!==(r=null===(p=a.find((function(e){return e.tenday===n.rainfall})))||void 0===p?void 0:p.label)&&void 0!==r?r:"-"}])}),[]));var c=new Date(1e3*i[0].date_start.seconds),d=(0,l.Mn)(c);c.getFullYear()!==(new Date).getFullYear()&&b("Invalid year detected in the 10-day validity date range: ".concat(i[0].date_range)),g({months:d,date_start:c,date_range:i[0].date_range})}else{var f=P||"Weather data for the municipality is not available at the moment, however, you can continue viewing recommendations. Please verify that the municipality name is present in the 10-Day weather forecast.";P?(p([]),g(null),b(f)):x(f)}}}),[n,k,Z,E,P]),{days:c,summary:f,loading:j,error:v,warning:y}}}},function(e){e.O(0,[5778,1709,9964,1903,8177,542,6295,7944,1433,6572,1050,2044,7655,1855,9774,2888,179],(function(){return n=67947,e(e.s=n);var n}));var n=e.O();_N_E=n}]);