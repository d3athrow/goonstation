!function(e){function t(t){for(var o,i,c=t[0],u=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([392,0]),n()}({392:function(e,t,n){e.exports=n(393)},393:function(e,t,n){"use strict";n(136),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(164),n(165),n(166),n(167),n(168),n(169),n(171),n(172),n(173),n(175),n(176),n(177),n(107),n(180),n(181),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(206),n(207),n(208),n(209),n(211),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(235),n(236),n(237),n(238),n(239),n(240),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(117),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(364),n(365),n(366),n(367);var o=n(2);n(368),n(369),n(370),n(371),n(372),n(373),n(410),n(411),n(412),n(413),n(414),n(415),n(416),n(417),n(418);var r,a,i=n(88),c=(n(89),n(124)),u=n(36);i.perf.mark("inception",null==(r=window.performance)||null==(a=r.timing)?void 0:a.navigationStart),i.perf.mark("init");var l=(0,u.configureStore)(),s=(0,c.createRenderer)((function(){var e=(0,n(447).getRoutedComponent)(l);return(0,o.createComponentVNode)(2,u.StoreProvider,{store:l,children:(0,o.createComponentVNode)(2,e)})}));!function d(){if("loading"!==document.readyState){for(l.subscribe(s),window.update=function(e){return l.dispatch(Byond.parseJson(e))};;){var e=window.__updateQueue__.shift();if(!e)break;window.update(e)}0}else document.addEventListener("DOMContentLoaded",d)}()},410:function(e,t,n){},411:function(e,t,n){},412:function(e,t,n){},413:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},447:function(e,t,n){"use strict";t.__esModule=!0,t.getRoutedComponent=void 0;var o=n(2),r=n(17),a=(n(91),n(51)),i=n(448),c=function(e,t){return function(){return(0,o.createComponentVNode)(2,a.Window,{resizable:!0,children:(0,o.createComponentVNode)(2,a.Window.Content,{scrollable:!0,children:["notFound"===e&&(0,o.createVNode)(1,"div",null,[(0,o.createTextVNode)("Interface "),(0,o.createVNode)(1,"b",null,t,0),(0,o.createTextVNode)(" was not found.")],4),"missingExport"===e&&(0,o.createVNode)(1,"div",null,[(0,o.createTextVNode)("Interface "),(0,o.createVNode)(1,"b",null,t,0),(0,o.createTextVNode)(" is missing an export.")],4)]})})}},u=function(){return(0,o.createComponentVNode)(2,a.Window,{resizable:!0,children:(0,o.createComponentVNode)(2,a.Window.Content,{scrollable:!0})})};t.getRoutedComponent=function(e){var t=e.getState(),n=(0,r.selectBackend)(t),o=n.suspended,a=n.config;if(o)return u;var l,s=null==a?void 0:a["interface"];try{l=i("./"+s+".js")}catch(p){if("MODULE_NOT_FOUND"===p.code)return c("notFound",s);throw p}var d=l[s];return d||c("missingExport",s)}},448:function(e,t,n){var o={"./CameraConsole.js":449,"./PaperSheet.js":450,"./SlotMachine.js":453,"./TankDispenser.js":454};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=448},449:function(e,t,n){"use strict";t.__esModule=!0,t.CameraConsoleContent=t.CameraConsole=void 0;var o=n(2),r=n(69),a=n(125),i=n(4),c=n(386),u=n(17),l=n(22),s=n(51),d=function(e,t){void 0===t&&(t="");var n=(0,c.createSearch)(t,(function(e){return e.name}));return(0,a.flow)([(0,r.filter)((function(e){return null==e?void 0:e.name})),t&&(0,r.filter)(n),(0,r.sortBy)((function(e){return e.name}))])(e)};t.CameraConsole=function(e,t){var n=(0,u.useBackend)(t),r=n.act,a=n.data,i=(n.config,a.mapRef),c=a.activeCamera,f=function(e,t){var n,o;if(!t)return[];var r=e.findIndex((function(e){return e.name===t.name}));return[null==(n=e[r-1])?void 0:n.name,null==(o=e[r+1])?void 0:o.name]}(d(a.cameras),c),m=f[0],h=f[1];return(0,o.createComponentVNode)(2,s.Window,{width:870,height:708,resizable:!0,children:[(0,o.createVNode)(1,"div","CameraConsole__left",(0,o.createComponentVNode)(2,s.Window.Content,{scrollable:!0,children:(0,o.createComponentVNode)(2,p)}),2),(0,o.createVNode)(1,"div","CameraConsole__right",[(0,o.createVNode)(1,"div","CameraConsole__toolbar",[(0,o.createVNode)(1,"b",null,"Camera: ",16),c&&c.name||"\u2014"],0),(0,o.createVNode)(1,"div","CameraConsole__toolbarRight",[(0,o.createComponentVNode)(2,l.Button,{icon:"chevron-left",disabled:!m,onClick:function(){return r("switch_camera",{name:m})}}),(0,o.createComponentVNode)(2,l.Button,{icon:"chevron-right",disabled:!h,onClick:function(){return r("switch_camera",{name:h})}})],4),(0,o.createComponentVNode)(2,l.ByondUi,{className:"CameraConsole__map",params:{id:i,type:"map"}})],4)]})};var p=function(e,t){var n=(0,u.useBackend)(t),r=n.act,a=n.data,c=(0,u.useLocalState)(t,"searchText",""),s=c[0],p=c[1],f=a.activeCamera,m=d(a.cameras,s);return(0,o.createFragment)([(0,o.createComponentVNode)(2,l.Input,{autoFocus:!0,fluid:!0,mb:1,placeholder:"Search for a camera",onInput:function(e,t){return p(t)}}),(0,o.createComponentVNode)(2,l.Section,{children:m.map((function(e){return(0,o.createVNode)(1,"div",(0,i.classes)(["Button","Button--fluid","Button--color--transparent","Button--ellipsis",f&&e.name===f.name&&"Button--selected"]),e.name,0,{title:e.name,onClick:function(){return r("switch_camera",{name:e.name})}},e.name)}))})],4)};t.CameraConsoleContent=p},450:function(e,t,n){"use strict";t.__esModule=!0,t.PaperSheet=void 0;var o=n(2),r=n(4),a=n(376),i=d(n(451)),c=d(n(452)),u=n(17),l=n(22),s=n(51);function d(e){return e&&e.__esModule?e:{"default":e}}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function f(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function v(e,t){v=function(e,t){return new a(e,undefined,t)};var n=C(RegExp),o=RegExp.prototype,r=new WeakMap;function a(e,t,o){var a=n.call(this,e,t);return r.set(a,o||r.get(e)),a}function i(e,t){var n=r.get(t);return Object.keys(n).reduce((function(t,o){return t[o]=e[n[o]],t}),Object.create(null))}return b(a,n),a.prototype.exec=function(e){var t=o.exec.call(this,e);return t&&(t.groups=i(t,this)),t},a.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var n=r.get(this);return o[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"==typeof t){var a=this;return o[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!=typeof e[e.length-1]&&e.push(i(e,a)),t.apply(this,e)}))}return o[Symbol.replace].call(this,e,t)},v.apply(this,arguments)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function C(e){var t="function"==typeof Map?new Map:undefined;return(C=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return y(e,arguments,w(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),g(o,e)})(e)}function y(e,t,n){return(y=x()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&g(r,n.prototype),r}).apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e,t,n,o){return void 0===o&&(o=!1),"<span style=\"color:'"+n+"';font-family:'"+t+"';"+(o?"font-weight: bold;":"")+'">'+e+"</span>"},N=/\[(_+)\]/g,V=v(/\[<input[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(.*?)id="(paperfield_[0-9]+)"(.*?)\/>\]/gm,{id:2}),S=/%s(?:ign)?(?=\\s|$)/gim,k=function(e,t,n,o,r){var a=e.replace(N,(function(e,a,i,c){var u=function(e,t,n){t=n+"x "+t;var o=document.createElement("canvas").getContext("2d");return o.font=t,o.measureText(e).width}(e,t,n)+"px";return function(e,t,n,o,r,a){return'[<input type="text" style="font:\''+o+"x "+n+"';color:'"+r+"';min-width:"+t+";max-width:"+t+';" id="'+a+'" maxlength='+e+" size="+e+" />]"}(a.length,u,t,n,o,"paperfield_"+r++)}));return{counter:r,text:a}},O=function(e){return e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,!1},P=function(e,t){var n=e.image,a=e.opacity,i=(f(e,["image","opacity"]),"rotate("+n.rotate+"deg) translate("+n.x+"px,"+n.y+"px)"),c={transform:i,"-ms-transform":i,"-webkit-transform":i,opacity:a||1,position:"absolute"};return(0,o.createVNode)(1,"div",(0,r.classes)(["paper121x54",n.sprite]),null,1,{style:c})},B=function(e,t){var n,r,a=e.value,i=e.stamps,c=e.backgroundColor,u=e.readOnly,s=i||[],d={__html:'<span class="paper-text">'+(n=a,r=u,(r?n.replace(/<input\s[^d]/g,"<input disabled "):n.replace(/<input\sdisabled\s/g,"<input "))+"</span>")};return(0,o.createComponentVNode)(2,l.Box,{position:"relative",backgroundColor:c,width:"100%",height:"100%",children:[(0,o.createComponentVNode)(2,l.Box,{fillPositionedParent:!0,width:"100%",height:"100%",dangerouslySetInnerHTML:d,p:"10px"}),s.map((function(e,t){return(0,o.createComponentVNode)(2,P,{image:{sprite:e[0],x:e[1],y:e[2],rotate:e[3]}},e[0]+t)}))]})},T=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={x:0,y:0,rotate:0},o}p(t,e);var n=t.prototype;return n.findStampPosition=function(e){for(var t=event.pageX,n=event.pageY,o={left:e.target.offsetLeft,top:e.target.offsetTop},r=e.target.offsetParent;r;)o.left+=r.offsetLeft,o.top+=r.offsetTop,r=r.offsetParent;var i=[t-o.left,n-o.top],c=(0,a.vecScale)([121,51],.5);return(0,a.vecSubtract)(i,c)},n.componentDidMount=function(){document.onwheel=this.handleWheel.bind(this)},n.handleMouseMove=function(e){var t=this.findStampPosition(e);O(e),this.setState({x:t[0],y:t[1]})},n.handleMouseClick=function(e){var t=this.findStampPosition(e),n=(0,u.useBackend)(this.context),o=n.act;n.data,o("stamp",{x:t[0],y:t[1],r:this.state.rotate}),this.setState({x:t[0],y:t[1]})},n.handleWheel=function(e){var t=e.deltaY>0?15:-15;if(e.deltaY<0&&0===this.state.rotate)this.setState({rotate:360+t});else if(e.deltaY>0&&360===this.state.rotate)this.setState({rotate:t});else{var n={rotate:t+this.state.rotate};this.setState((function(){return n}))}O(e)},n.render=function(){var e=this.props,t=e.value,n=e.stamp_class,r=e.stamps,a=f(e,["value","stamp_class","stamps"]),i=r||[],c={sprite:n,x:this.state.x,y:this.state.y,rotate:this.state.rotate};return(0,o.normalizeProps)((0,o.createComponentVNode)(2,l.Box,Object.assign({onClick:this.handleMouseClick.bind(this),onMouseMove:this.handleMouseMove.bind(this),onwheel:this.handleWheel.bind(this)},a,{children:[(0,o.createComponentVNode)(2,B,{readOnly:!0,value:t,stamps:i}),(0,o.createComponentVNode)(2,P,{opacity:.5,image:c})]})))},t}(o.Component),j=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={previewSelected:"Preview",old_text:t.value||"",textarea_text:"",combined_text:t.value||""},o}p(t,e);var n=t.prototype;return n.createPreview=function(e,t){void 0===t&&(t=!1);var n,o,r=(0,u.useBackend)(this.context).data,a=r.text,l=r.pen_color,s=r.pen_font,d=r.is_crayon,p=r.field_counter,f=r.edit_usr,h={text:a};if((e=e.trim()).length>0){var v=function(e){return i["default"].sanitize(e,{FORBID_ATTR:["class","style"],ALLOWED_TAGS:["br","code","li","p","pre","span","table","td","tr","th","ul","ol","menu","font","b","center","table","tr","th"]})}(e+="\n"===e[e.length]?" \n":"\n \n"),b=(n=l,o=f,v.replace(S,(function(){return _(o,"Times New Roman",n,!0)}))),C=k(b,s,12,l,p),y=function(e){return(0,c["default"])(e,{breaks:!0,smartypants:!0,smartLists:!0,walkTokens:function(e){switch(e.type){case"url":case"autolink":case"reflink":case"link":case"image":e.type="text",e.href=""}},baseUrl:"thisshouldbreakhttp"})}(C.text),x=_(y,s,l,d);h.text+=x,h.field_counter=C.counter}if(t){var g=function(e,t,n,o,r){var a;void 0===r&&(r=!1);for(var c={},u=[];null!==(a=V.exec(e));){var l=a[0],s=a.groups.id;if(s){var d=document.getElementById(s);if(0===(d&&d.value?d.value:"").length)continue;var p=i["default"].sanitize(d.value.trim(),{ALLOWED_TAGS:[]});if(0===p.length)continue;var f=d.cloneNode(!0);p.match(S)?(f.style.fontFamily="Times New Roman",r=!0,f.defaultValue=o):(f.style.fontFamily=t,f.defaultValue=p),r&&(f.style.fontWeight="bold"),f.style.color=n,f.disabled=!0;var h=document.createElement("div");h.appendChild(f),c[s]=p,u.push({value:"["+h.innerHTML+"]",raw_text:l})}}if(u.length>0)for(var v,b=m(u);!(v=b()).done;){var C=v.value;e=e.replace(C.raw_text,C.value)}return{text:e,fields:c}}(h.text,s,l,f,d);h.text=g.text,h.form_fields=g.fields}return h},n.onInputHandler=function(e,t){var n=this;if(t!==this.state.textarea_text){var o=this.state.old_text.length+this.state.textarea_text.length;if(o>5e3&&(t=o-5e3>=t.length?"":t.substr(0,t.length-(o-5e3)))===this.state.textarea_text)return;this.setState((function(){return{textarea_text:t,combined_text:n.createPreview(t)}}))}},n.finalUpdate=function(e){var t=(0,u.useBackend)(this.context).act,n=this.createPreview(e,!0);t("save",n),this.setState((function(){return{textarea_text:"",previewSelected:"save",combined_text:n.text}}))},n.render=function(){var e=this,t=this.props,n=(t.value,t.textColor),r=t.fontFamily,a=t.stamps,i=t.backgroundColor;return f(t,["value","textColor","fontFamily","stamps","backgroundColor"]),(0,o.createComponentVNode)(2,l.Flex,{direction:"column",fillPositionedParent:!0,children:[(0,o.createComponentVNode)(2,l.Flex.Item,{children:(0,o.createComponentVNode)(2,l.Tabs,{children:[(0,o.createComponentVNode)(2,l.Tabs.Tab,{textColor:"black",backgroundColor:"Edit"===this.state.previewSelected?"grey":"white",selected:"Edit"===this.state.previewSelected,onClick:function(){return e.setState({previewSelected:"Edit"})},children:"Edit"},"marked_edit"),(0,o.createComponentVNode)(2,l.Tabs.Tab,{textColor:"black",backgroundColor:"Preview"===this.state.previewSelected?"grey":"white",selected:"Preview"===this.state.previewSelected,onClick:function(){return e.setState((function(){return{previewSelected:"Preview",textarea_text:e.state.textarea_text,combined_text:e.createPreview(e.state.textarea_text).text}}))},children:"Preview"},"marked_preview"),(0,o.createComponentVNode)(2,l.Tabs.Tab,{textColor:"black",backgroundColor:"confirm"===this.state.previewSelected?"red":"save"===this.state.previewSelected?"grey":"white",selected:"confirm"===this.state.previewSelected||"save"===this.state.previewSelected,onClick:function(){"confirm"===e.state.previewSelected?e.finalUpdate(e.state.textarea_text):"Edit"===e.state.previewSelected?e.setState((function(){return{previewSelected:"confirm",textarea_text:e.state.textarea_text,combined_text:e.createPreview(e.state.textarea_text).text}})):e.setState({previewSelected:"confirm"})},children:"confirm"===this.state.previewSelected?"confirm":"save"},"marked_done")]})}),(0,o.createComponentVNode)(2,l.Flex.Item,{grow:1,basis:1,children:"Edit"===this.state.previewSelected&&(0,o.createComponentVNode)(2,l.TextArea,{value:this.state.textarea_text,textColor:n,fontFamily:r,height:window.innerHeight-80+"px",backgroundColor:i,onInput:this.onInputHandler.bind(this)})||(0,o.createComponentVNode)(2,B,{value:this.state.combined_text,stamps:a,fontFamily:r,textColor:n})})]})},t}(o.Component);t.PaperSheet=function(e,t){var n=(0,u.useBackend)(t).data,r=n.edit_mode,a=n.text,i=n.paper_color,c=n.pen_color,d=void 0===c?"black":c,p=n.pen_font,f=void 0===p?"Verdana":p,m=n.stamps,h=n.stamp_class,v=(n.stamped,i&&"white"!==i?i:"#FFFFFF"),b=m&&null!==m?m:[];return(0,o.createComponentVNode)(2,s.Window,{theme:"paper",width:400,height:500,resizable:!0,children:(0,o.createComponentVNode)(2,s.Window.Content,{children:(0,o.createComponentVNode)(2,l.Box,{fillPositionedParent:!0,backgroundColor:v,children:function(e){switch(e){case 0:return(0,o.createComponentVNode)(2,B,{value:a,stamps:b,readOnly:!0});case 1:return(0,o.createComponentVNode)(2,j,{value:a,textColor:d,fontFamily:f,stamps:b,backgroundColor:v});case 2:return(0,o.createComponentVNode)(2,T,{value:a,stamps:b,stamp_class:h});default:return"ERROR ERROR WE CANNOT BE HERE!!"}}(r)})})})}},453:function(e,t,n){"use strict";t.__esModule=!0,t.SlotMachine=void 0;var o=n(2),r=n(17),a=n(22),i=n(51);t.SlotMachine=function(e,t){var n=(0,r.useBackend)(t).data,s=n.scannedCard,d=n.busy;return(0,o.createComponentVNode)(2,i.Window,{title:"Slot Machine",width:375,height:175,resizable:!0,children:(0,o.createComponentVNode)(2,i.Window.Content,{children:s?(0,o.createComponentVNode)(2,a.Box,{children:d?(0,o.createComponentVNode)(2,l):(0,o.createComponentVNode)(2,u)}):(0,o.createComponentVNode)(2,c)})})};var c=function(e,t){var n=(0,r.useBackend)(t).act;return(0,o.createComponentVNode)(2,a.Box,{children:[(0,o.createComponentVNode)(2,a.NoticeBox,{danger:!0,children:"You must insert your ID to continue!"}),(0,o.createComponentVNode)(2,a.Button,{icon:"id-card",content:"Insert ID",onClick:function(){return n("insert_card")}})]})},u=function(e,t){var n=(0,r.useBackend)(t),i=n.act,c=n.data,u=c.scannedCard,l=c.money,s=c.plays;return(0,o.createComponentVNode)(2,a.Box,{children:[(0,o.createComponentVNode)(2,a.NoticeBox,{success:!0,children:(0,o.createVNode)(1,"marquee",null," Twenty credits to play! ",16)}),(0,o.createComponentVNode)(2,a.Box,{mb:"0.5em",children:[(0,o.createVNode)(1,"strong",null,"Your card: ",16),(0,o.createComponentVNode)(2,a.Button,{icon:"eject",content:u,tooltip:"Eject Card",tooltipPosition:"bottom-right",onClick:function(){return i("eject")}})]}),(0,o.createComponentVNode)(2,a.Box,{mb:"0.75em",children:[(0,o.createVNode)(1,"strong",null,"Credits Remaining:",16),(0,o.createComponentVNode)(2,a.Icon,{name:"dollar-sign"})," ",l]}),(0,o.createComponentVNode)(2,a.BlockQuote,{children:[s," attempts have been made today!"]}),(0,o.createComponentVNode)(2,a.Divider),(0,o.createComponentVNode)(2,a.Button,{icon:"dice",content:"Play!",tooltip:"Pull the lever",tooltipPosition:"right",onClick:function(){return i("play")}})]})},l=function(e,t){return(0,o.createComponentVNode)(2,a.NoticeBox,{warning:!0,children:"The Machine is busy, please wait!"})}},454:function(e,t,n){"use strict";t.__esModule=!0,t.TankDispenser=void 0;var o=n(2),r=n(17),a=n(22),i=n(51);t.TankDispenser=function(e,t){var n=(0,r.useBackend)(t),c=n.act,u=n.data;return(0,o.createComponentVNode)(2,i.Window,{width:280,height:110,children:(0,o.createComponentVNode)(2,i.Window.Content,{children:(0,o.createComponentVNode)(2,a.Section,{children:(0,o.createComponentVNode)(2,a.LabeledList,{children:[(0,o.createComponentVNode)(2,a.LabeledList.Item,{label:"Plasma",buttons:(0,o.createComponentVNode)(2,a.Button,{icon:u.plasma?"circle":"circle-o",content:"Dispense",disabled:!u.plasma,onClick:function(){return c("dispense-plasma")}}),children:u.plasma}),(0,o.createComponentVNode)(2,a.LabeledList.Item,{label:"Oxygen",buttons:(0,o.createComponentVNode)(2,a.Button,{icon:u.oxygen?"circle":"circle-o",content:"Dispense",disabled:!u.oxygen,onClick:function(){return c("dispense-oxygen")}}),children:u.oxygen})]})})})})}}});