(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[1495],{80117:(e,t,n)=>{"use strict";e.exports=n(41706)},41706:function(e,t,n){var r,a;e.exports=(r=n(53547),a=n(78384),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=109)}({0:function(e,t,n){e.exports=n(17)()},1:function(e,t){e.exports=r},10:function(e,t,n){var r=n(23),a=n(24),o=n(20),i=n(25);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},109:function(e,t,n){"use strict";n.r(t),n.d(t,"Main",(function(){return b})),n.d(t,"SkipToContent",(function(){return S}));var r,a=n(6),o=n.n(a),i=n(5),u=n.n(i),l=n(3),s=n.n(l),d=n(1),f=n.n(d),c=n(0),p=n.n(c),m=n(2),g=n.n(m),v=["labelledBy"],h=g.a.main(r||(r=s()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),b=function(e){var t=e.labelledBy,n=u()(e,v),r=t||"main-content-title";return f.a.createElement(h,o()({"aria-labelledby":r,id:"main-content",tabIndex:-1},n))};b.defaultProps={labelledBy:void 0},b.propTypes={labelledBy:p.a.string};var y,x=n(4),O=g()(x.Box)(y||(y=s()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.spaces[3]})),S=function(e){var t=e.children;return f.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},t)};S.propTypes={children:p.a.node.isRequired}},13:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},17:function(e,t,n){"use strict";var r=n(18);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},18:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=a},20:function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t,n){"use strict";n.r(t),n.d(t,"Box",(function(){return c}));var r,a=n(3),o=n.n(a),i=n(0),u=n.n(i),l=n(2),s=n.n(l),d=n(7),f={color:!0},c=s.a.div.withConfig({shouldForwardProp:function(e,t){return!f[e]&&t(e)}})(r||(r=o()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t}),(function(e){var t=e.theme,n=e.background;return t.colors[n]}),(function(e){var t=e.theme,n=e.color;return t.colors[n]}),(function(e){var t=e.theme,n=e.padding;return Object(d.a)("padding",n,t)}),(function(e){var t=e.theme,n=e.paddingTop;return Object(d.a)("padding-top",n,t)}),(function(e){var t=e.theme,n=e.paddingRight;return Object(d.a)("padding-right",n,t)}),(function(e){var t=e.theme,n=e.paddingBottom;return Object(d.a)("padding-bottom",n,t)}),(function(e){var t=e.theme,n=e.paddingLeft;return Object(d.a)("padding-left",n,t)}),(function(e){var t=e.theme,n=e.marginLeft;return Object(d.a)("margin-left",n,t)}),(function(e){var t=e.theme,n=e.marginRight;return Object(d.a)("margin-right",n,t)}),(function(e){var t=e.theme,n=e.marginTop;return Object(d.a)("margin-top",n,t)}),(function(e){var t=e.theme,n=e.marginBottom;return Object(d.a)("margin-bottom",n,t)}),(function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var t=e.theme,n=e.hasRadius,r=e.borderRadius;return n?t.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var t=e.borderColor;return e.theme.colors[t]}),(function(e){var t=e.theme,n=e.borderColor,r=e.borderStyle,a=e.borderWidth;if(n&&!r&&!a)return"1px solid ".concat(t.colors[n])}),(function(e){var t=e.theme,n=e.shadow;return t.shadows[n]}),(function(e){return e.pointerEvents}),(function(e){var t=e._hover,n=e.theme;return t?t(n):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var t=e.left;return e.theme.spaces[t]||t}),(function(e){var t=e.right;return e.theme.spaces[t]||t}),(function(e){var t=e.top;return e.theme.spaces[t]||t}),(function(e){var t=e.bottom;return e.theme.spaces[t]||t}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var t=e.width;return e.theme.spaces[t]||t}),(function(e){var t=e.maxWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.minWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.height;return e.theme.spaces[t]||t}),(function(e){var t=e.maxHeight;return e.theme.spaces[t]||t}),(function(e){var t=e.minHeight;return e.theme.spaces[t]||t}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));c.displayName="Box",c.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},c.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(e,t,n){var r=n(22);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(13),i=n.n(o);t.a=function(e,t,n){var r=t;if(Array.isArray(t)||"object"!==i()(t)||(r=[null==t?void 0:t.desktop,null==t?void 0:t.tablet,null==t?void 0:t.mobile]),void 0!==r){if(Array.isArray(r)){var o=r,u=a()(o,3),l=u[0],s=u[1],d=u[2],f="".concat(e,": ").concat(n.spaces[l],";");return void 0!==s&&(f+="".concat(n.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(n.spaces[s],";\n        }")),void 0!==d&&(f+="".concat(n.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(n.spaces[d],";\n        }")),f}var c=n.spaces[r]||r;return"".concat(e,": ").concat(c,";")}}}}))},14319:function(e,t,n){var r;e.exports=(r=n(53547),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=67)}({0:function(e,t){e.exports=r},67:function(e,t,n){"use strict";n.r(t);var r=n(0);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.default=function(e){return r.createElement("svg",a({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),r.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),r.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}}))},39338:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53547)),o=r(n(45697)),i=n(97132),u=n(9524),l=n(39272),s=n(33483),d=n(99136),f=n(2632),c=r(n(11236)),p=function(e){var t=e.config,n=(0,i.useIntl)().formatMessage;return a.default.createElement(u.Stack,{spacing:4},a.default.createElement(u.Stack,{spacing:1},a.default.createElement(s.Typography,{variant:"delta",as:"h2"},n({id:(0,c.default)("Settings.email.plugin.title.config"),defaultMessage:"Configuration"})),a.default.createElement(s.Typography,null,n({id:(0,c.default)("Settings.email.plugin.text.configuration"),defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:a.default.createElement("a",{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},"link")}))),a.default.createElement(l.Grid,{gap:5},a.default.createElement(l.GridItem,{col:6,s:12},a.default.createElement(d.TextInput,{name:"shipper-email",label:n({id:(0,c.default)("Settings.email.plugin.label.defaultFrom"),defaultMessage:"Default sender email"}),placeholder:n({id:(0,c.default)("Settings.email.plugin.placeholder.defaultFrom"),defaultMessage:"ex: Strapi No-Reply <no-reply@strapi.io>"}),disabled:!0,onChange:function(){},value:t.settings.defaultFrom})),a.default.createElement(l.GridItem,{col:6,s:12},a.default.createElement(d.TextInput,{name:"response-email",label:n({id:(0,c.default)("Settings.email.plugin.label.defaultReplyTo"),defaultMessage:"Default response email"}),placeholder:n({id:(0,c.default)("Settings.email.plugin.placeholder.defaultReplyTo"),defaultMessage:"ex: Strapi <example@strapi.io>"}),disabled:!0,onChange:function(){},value:t.settings.defaultReplyTo})),a.default.createElement(l.GridItem,{col:6,s:12},a.default.createElement(f.Select,{name:"email-provider",label:n({id:(0,c.default)("Settings.email.plugin.label.provider"),defaultMessage:"Email provider"}),disabled:!0,onChange:function(){},value:t.provider},a.default.createElement(f.Option,{value:t.provider},t.provider)))))};p.propTypes={config:o.default.shape({provider:o.default.string,settings:o.default.shape({defaultFrom:o.default.string,defaultReplyTo:o.default.string})}).isRequired};var m=p;t.default=m},58711:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(53547)),o=n(97132),i=n(68547),u=n(35395),l=r(n(11236)),s=function(){var e=(0,o.useIntl)().formatMessage;return a.default.createElement(a.default.Fragment,null,a.default.createElement(i.SettingsPageTitle,{name:e({id:(0,l.default)("Settings.email.plugin.title"),defaultMessage:"Configuration"})}),a.default.createElement(u.HeaderLayout,{id:"title",title:e({id:(0,l.default)("Settings.email.plugin.title"),defaultMessage:"Configuration"}),subtitle:e({id:(0,l.default)("Settings.email.plugin.subTitle"),defaultMessage:"Test the settings for the Email plugin"})}))};t.default=s},30996:(e,t,n)=>{"use strict";var r=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(87757)),i=r(n(48926)),u=r(n(63038)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=T(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(53547)),s=n(97132),d=n(96486),f=n(68547),c=n(80117),p=n(35395),m=n(9524),g=n(94117),v=n(39272),h=n(33483),b=n(99136),y=n(64459),x=n(67422),O=r(n(14319)),S=r(n(39338)),E=r(n(41130)),_=r(n(71546)),w=n(25143),M=r(n(58711)),j=r(n(11236));function T(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(T=function(e){return e?n:t})(e)}var k=function(){var e,t,n=(0,f.useNotification)(),r=(0,s.useIntl)().formatMessage,a=(0,f.useOverlayBlocker)(),_=a.lockApp,T=a.unlockApp,k=(0,x.useNotifyAT)().notifyStatus;(0,f.useFocusWhenNavigate)();var P=(0,l.useState)({}),R=(0,u.default)(P,2),C=R[0],I=R[1],A=(0,l.useState)(!1),B=(0,u.default)(A,2),z=B[0],L=B[1],W=(0,l.useState)(!1),D=(0,u.default)(W,2),F=D[0],H=D[1],q=(0,l.useState)(""),G=(0,u.default)(q,2),N=G[0],Q=G[1],U=(0,l.useState)(!1),V=(0,u.default)(U,2),X=V[0],Y=V[1],$=(0,l.useState)({provider:"",settings:{defaultFrom:"",defaultReplyTo:"",testAddress:""}}),J=(0,u.default)($,2),K=J[0],Z=J[1];(0,l.useEffect)((function(){L(!0),(0,w.fetchEmailSettings)().then((function(e){k(r({id:(0,j.default)("Settings.email.plugin.notification.data.loaded"),defaultMessage:"Email settings data has been loaded"})),Z(e);var t=(0,d.get)(e,"settings.testAddress");t&&Q(t)})).catch((function(){return n({type:"warning",message:r({id:(0,j.default)("Settings.email.plugin.notification.config.error"),defaultMessage:"Failed to retrieve the email config"})})})).finally((function(){return L(!1)}))}),[r,n,k]),(0,l.useEffect)((function(){C.email&&document.querySelector("#test-address-input").focus()}),[C]),(0,l.useEffect)((function(){E.default.validate({email:N},{abortEarly:!1}).then((function(){return Y(!0)})).catch((function(){return Y(!1)}))}),[N]);var ee=function(){var e=(0,i.default)(o.default.mark((function e(t){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,E.default.validate({email:N},{abortEarly:!1});case 4:H(!0),_(),(0,w.postEmailTest)({to:N}).then((function(){n({type:"success",message:r({id:(0,j.default)("Settings.email.plugin.notification.test.success"),defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:N})})})).catch((function(){n({type:"warning",message:r({id:(0,j.default)("Settings.email.plugin.notification.test.error"),defaultMessage:"Failed to send a test mail to {to}"},{to:N})})})).finally((function(){H(!1),T()})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),I((0,f.getYupInnerErrors)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return z?l.default.createElement(c.Main,{labelledBy:"title","aria-busy":"true"},l.default.createElement(M.default,null),l.default.createElement(p.ContentLayout,null,l.default.createElement(f.LoadingIndicatorPage,null))):l.default.createElement(c.Main,{labelledBy:"title","aria-busy":F},l.default.createElement(M.default,null),l.default.createElement(p.ContentLayout,null,l.default.createElement("form",{onSubmit:ee},l.default.createElement(m.Stack,{spacing:7},l.default.createElement(g.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},l.default.createElement(S.default,{config:K})),l.default.createElement(g.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},l.default.createElement(m.Stack,{spacing:4},l.default.createElement(h.Typography,{variant:"delta",as:"h2"},r({id:(0,j.default)("Settings.email.plugin.title.test"),defaultMessage:"Test email delivery"})),l.default.createElement(v.Grid,{gap:5,alignItems:"end"},l.default.createElement(v.GridItem,{col:6,s:12},l.default.createElement(b.TextInput,{id:"test-address-input",name:"test-address",onChange:function(e){Q((function(){return e.target.value}))},label:r({id:(0,j.default)("Settings.email.plugin.label.testAddress"),defaultMessage:"Recipient email"}),value:N,error:(null===(e=C.email)||void 0===e?void 0:e.id)&&r({id:(0,j.default)("".concat(null===(t=C.email)||void 0===t?void 0:t.id)),defaultMessage:"This is an invalid email"}),placeholder:r({id:(0,j.default)("Settings.email.plugin.placeholder.testAddress"),defaultMessage:"ex: developer@example.com"})})),l.default.createElement(v.GridItem,{col:7,s:12},l.default.createElement(y.Button,{loading:F,disabled:!X,type:"submit",startIcon:l.default.createElement(O.default,null)},r({id:(0,j.default)("Settings.email.plugin.button.test-email"),defaultMessage:"Send test email"}))))))))))},P=function(){return l.default.createElement(f.CheckPagePermissions,{permissions:_.default.settings},l.default.createElement(k,null))};t.default=P},25143:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.postEmailTest=t.fetchEmailSettings=void 0;var a=r(n(87757)),o=r(n(48926)),i=r(n(2789)),u=function(){var e=(0,o.default)(a.default.mark((function e(){var t,n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.get("/email/settings");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.config);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchEmailSettings=u;var l=function(){var e=(0,o.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.post("/email/test",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.postEmailTest=l},2789:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(87757)),o=r(n(48926)),i=r(n(9669)),u=n(68547),l=i.default.create({baseURL:""});l.interceptors.request.use(function(){var e=(0,o.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers={Authorization:"Bearer ".concat(u.auth.getToken()),Accept:"application/json","Content-Type":"application/json"},e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),l.interceptors.response.use((function(e){return e}),(function(e){var t;throw 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&(u.auth.clearAppStorage(),window.location.reload()),e}));var s=l;t.default=s},41130:(e,t,n)=>{"use strict";var r=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(53209)),o=n(68547);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var u=a.object().shape({email:a.string().email(o.translatedErrors.email).required(o.translatedErrors.required)});t.default=u}}]);