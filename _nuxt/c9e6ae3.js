(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1799:function(t,e,r){"use strict";r(192),r(14),r(9),r(19),r(760),r(476);var n=r(1);var o,c=r(133);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},1820:function(t,e,r){var content=r(1896);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("db80bc9e",content,!0,{sourceMap:!1})},1895:function(t,e,r){"use strict";var n=r(1820);r.n(n).a},1896:function(t,e,r){(e=r(29)(!1)).push([t.i,".borders[data-v-6c6c3807]{max-width:600px;border-left:solid;border-right:solid;border-color:hsla(0,4.9%,88%,.84706);border-width:1px}",""]),t.exports=e},1931:function(t,e,r){"use strict";r.r(e);r(24),r(17),r(14),r(9),r(19);var n=r(2),o=r(86),c=r(1835),l=r(1834);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={components:{messagesContactlist:c.a,messagesChat:l.a},data:function(){return{chatPartnerUserName:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["getProfile"])),methods:{}},h=(r(1895),r(97)),m=r(152),v=r.n(m),y=r(1779),w=r(1799),O=r(1780),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"flex-nowrap fill-height",class:{fullscreen:t.$vuetify.breakpoint.mdAndUp,halfscreen:t.$vuetify.breakpoint.smAndDown}},[t.$vuetify.breakpoint.smAndDown?r("v-container",{staticClass:"pa-0",staticStyle:{display:"flex",height:"100%"}},[r("v-row",{staticStyle:{height:"100%",width:"100%","overflow-y":"hidden"},attrs:{"no-gutters":"",justify:"center"}},[r("v-col",{staticClass:"pa-0 borders",staticStyle:{"max-width":"600px"},attrs:{cols:"10"}},[t.$route.params.userName?t._e():r("messagesContactlist"),t._v(" "),t.$route.params.userName?r("messagesChat",{attrs:{"chat-partner-user-name":t.$route.params.userName}}):t._e()],1)],1)],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp?r("v-container",{staticClass:"pa-0 fill-height",staticStyle:{display:"flex",height:"100%"}},[r("v-row",{staticClass:"flex-nowrap pt-0 fill-height",attrs:{justify:"center"}},[r("v-col",{staticClass:"borders pa-0 fill-height",staticStyle:{"max-width":"375px"}},[r("messagesContactlist")],1),t._v(" "),r("v-col",{staticClass:"borders pa-0",staticStyle:{width:"600px"}},[t.$route.params.userName?r("messagesChat",{attrs:{"chat-partner-user-name":t.$route.params.userName}}):t._e()],1)],1)],1):t._e()],1)}),[],!1,null,"6c6c3807",null);e.default=component.exports;v()(component,{VCol:y.a,VContainer:w.a,VRow:O.a})}}]);