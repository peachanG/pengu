/*! For license information please see 13.95160855.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,14],{113:function(e,t,n){"use strict";n.r(t);n(12);var a=n(0),r=n.n(a),o=n(119),i=n(114),l=n(46),c=n(120),s=n(92),u=n(2),m=n(115),d=n.n(m),p=n(126),f=n(129),h=n(130),y=n(128),g=n(117),b=n(118),v=n(100),E=n.n(v);function k({item:e,onItemClick:t,collapsible:n,activePath:o,...i}){const{items:l,href:c,label:s,type:m}=e,[p,f]=Object(a.useState)(e.collapsed),[h,y]=Object(a.useState)(null);e.collapsed!==h&&(y(e.collapsed),f(e.collapsed));const v=Object(a.useCallback)(e=>{e.preventDefault(),e.target.blur(),f(e=>!e)});switch(m){case"category":return l.length>0&&r.a.createElement("li",{className:d()("menu__list-item",{"menu__list-item--collapsed":p}),key:s},r.a.createElement("a",Object(u.a)({className:d()("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&!e.collapsed}),href:"#!",onClick:n?v:void 0},i),s),r.a.createElement("ul",{className:"menu__list"},l.map(e=>r.a.createElement(k,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:n,activePath:o}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:s},r.a.createElement(g.a,Object(u.a)({className:d()("menu__link",{"menu__link--active":c===o}),to:c},Object(b.a)(c)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},i),s))}}var j=function(e){const[t,n]=Object(a.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:o,hideOnScroll:l=!1}={}}}={},isClient:c}=Object(i.a)(),{logoLink:s,logoLinkProps:m,logoImageUrl:b,logoAlt:v}=Object(h.a)(),{isAnnouncementBarClosed:j}=Object(p.a)(),{scrollY:_}=Object(y.a)(),{docsSidebars:w,path:N,sidebar:O,sidebarCollapsible:x}=e;if(Object(f.a)(t),!O)return null;const C=w[O];if(!C)throw new Error(`Cannot find the sidebar "${O}" in the sidebar config!`);return x&&C.forEach(e=>function e(t,n){const{items:a,href:r,type:o}=t;switch(o){case"category":{const r=a.map(t=>e(t,n)).filter(e=>e).length>0;return t.collapsed=!r,r}case"link":default:return r===n}}(e,N)),r.a.createElement("div",{className:d()(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:l})},l&&r.a.createElement(g.a,Object(u.a)({tabIndex:"-1",className:E.a.sidebarLogo,to:s},m),null!=b&&r.a.createElement("img",{key:c,src:b,alt:v}),null!=o&&r.a.createElement("strong",null,o)),r.a.createElement("div",{className:d()("menu","menu--responsive",E.a.menu,{"menu--show":t,[E.a.menuWithAnnouncementBar]:!j&&0===_})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{n(!t)}},t?r.a.createElement("span",{className:d()(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:E.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},C.map(e=>r.a.createElement(k,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),n(!1)},collapsible:x,activePath:N})))))},_={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},w={Prism:n(34).a,theme:_};function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var x=/\r\n|\r|\n/,C=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},T=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=O({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=O({},n,{backgroundColor:null}),r};function L(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var A=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),N(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?T(e.theme,e.language):void 0;return t.themeDict=n})),N(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=O({},L(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==r&&(o.style=void 0!==o.style?O({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),N(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var i=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),N(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,i=O({},L(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?O({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=a[i]++)<r[i];){var s=void 0,u=t[i],m=n[i][o];if("string"==typeof m?(u=i>0?u:["plain"],s=m):(u=S(u,m.type),m.alias&&(u=S(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(x),p=d.length;l.push({types:u,content:d[0]});for(var f=1;f<p;f++)C(l),c.push(l=[]),l.push({types:u,content:d[f]})}else i++,t.push(u),n.push(s),a.push(0),r.push(s.length)}i--,t.pop(),n.pop(),a.pop(),r.pop()}return C(l),c}(void 0!==i?t.tokenize(a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),P=n(138),M=n.n(P),I=n(139),B=n.n(I),F={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},R=n(122);var D=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(i.a)(),{isDarkTheme:t}=Object(R.a)(),n=e.theme||F,a=e.darkTheme||n;return t?a:n},$=n(101),H=n.n($);const U=/{([\d,-]+)}/,W=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map(e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},q=/title=".*"/;var z=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(i.a)(),[l,c]=Object(a.useState)(!1),[s,m]=Object(a.useState)(!1);Object(a.useEffect)(()=>{m(!0)},[]);const p=Object(a.useRef)(null),f=Object(a.useRef)(null);let h=[],y="";const g=D();if(n&&U.test(n)){const e=n.match(U)[1];h=B.a.parse(e).filter(e=>e>0)}n&&q.test(n)&&(y=n.match(q)[0].split("title=")[1].replace(/"+/g,"")),Object(a.useEffect)(()=>{let e;return f.current&&(e=new M.a(f.current,{target:()=>p.current})),()=>{e&&e.destroy()}},[f.current,p.current]);let b=t&&t.replace(/language-/,"");!b&&o.defaultLanguage&&(b=o.defaultLanguage);let v=e.replace(/\n$/,"");if(0===h.length&&void 0!==b){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return W(["js","jsBlock"]);case"jsx":case"tsx":return W(["js","jsBlock","jsx"]);case"html":return W(["js","jsBlock","html"]);case"python":case"py":return W(["python"]);default:return W()}})(b),a=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<a.length;){const o=e+1,i=a[e].match(n);if(null!==i){switch(i.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=o+",";break;case"highlight-start":r=o;break;case"highlight-end":t+=`${r}-${o-1},`}a.splice(e,1)}else e+=1}h=B.a.parse(t),v=a.join("\n")}const E=()=>{window.getSelection().empty(),c(!0),setTimeout(()=>c(!1),2e3)};return r.a.createElement(A,Object(u.a)({},w,{key:s,theme:g,code:v,language:b}),({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:o})=>r.a.createElement(r.a.Fragment,null,y&&r.a.createElement("div",{style:t,className:H.a.codeBlockTitle},y),r.a.createElement("div",{className:H.a.codeBlockContent},r.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:d()(H.a.copyButton,{[H.a.copyButtonWithTitle]:y}),onClick:E},l?"Copied":"Copy"),r.a.createElement("div",{tabIndex:"0",className:d()(e,H.a.codeBlock,{[H.a.codeBlockWithTitle]:y})},r.a.createElement("div",{ref:p,className:H.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return h.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(u.a)({key:t},n),e.map((e,t)=>r.a.createElement("span",Object(u.a)({key:t},o({token:e,key:t})))))}))))))},Y=(n(102),n(103)),J=n.n(Y);var V=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:a=!1}={}}={}}={}}=Object(i.a)();return t?r.a.createElement(e,n,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:d()("anchor",{[J.a.enhancedAnchor]:!a}),id:t}),n.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):r.a.createElement(e,n)},X=n(104),G=n.n(X),K={code:e=>{const{children:t}=e;return"string"==typeof t?r.a.createElement(z,e):t},a:e=>/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(g.a,e),pre:e=>r.a.createElement("div",Object(u.a)({className:G.a.mdxCodeBlock},e)),h1:V("h1"),h2:V("h2"),h3:V("h3"),h4:V("h4"),h5:V("h5"),h6:V("h6")},Q=n(123),Z=n(127),ee=n(105),te=n.n(ee);t.default=function(e){const{route:t,docsMetadata:n,location:a,content:u}=e,{permalinkToSidebar:m,docsSidebars:d,version:p,isHomePage:f,homePagePath:h}=n,y=f?{}:t.routes.find(e=>Object(Z.a)(a.pathname,e))||{},g=f?u.metadata.sidebar:m[y.path],{siteConfig:{themeConfig:{sidebarCollapsible:b=!0}={}}={},isClient:v}=Object(i.a)();return f||0!==Object.keys(y).length?r.a.createElement(c.a,{version:p,key:v},r.a.createElement("div",{className:te.a.docPage},g&&r.a.createElement("div",{className:te.a.docSidebarContainer},r.a.createElement(j,{docsSidebars:d,path:f?h:y.path,sidebar:g,sidebarCollapsible:b})),r.a.createElement("main",{className:te.a.docMainContainer},r.a.createElement(o.a,{components:K},f?r.a.createElement(s.default,{content:u}):Object(l.a)(t.routes))))):r.a.createElement(Q.default,e)}},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(120);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},138:function(e,t,n){var a;a=function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(e),a.removeAllRanges(),a.addRange(r),t=a.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var a=this.e||(this.e={});return(a[e]||(a[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var a=this;function r(){a.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),a=0,r=n.length;a<r;a++)n[a].fn.apply(n[a].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),a=n[e],r=[];if(a&&t)for(var o=0,i=a.length;o<i;o++)a[o].fn!==t&&a[o].fn._!==t&&r.push(a[o]);return r.length?n[e]=r:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var a=n(3),r=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!a.string(t))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(a.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(a.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var a=n(5);function r(e,t,n,a,r){var i=o.apply(this,arguments);return e.addEventListener(n,i,r),{destroy:function(){e.removeEventListener(n,i,r)}}}function o(e,t,n,r){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,a,o){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,a,o)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),s=n.n(c),u=n(2),m=n.n(u),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.resolveOptions(n),a.listenClick(e),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),p(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=m()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return h("action",e)}},{key:"defaultTarget",value:function(e){var t=h("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return h("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function h(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=f}]).default},e.exports=a()},139:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],i=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=i);for(var l=n;l!=r;l+=i)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(121),i=n(118),l=n(114),c=n(116),s=n(117);var u=function(e){const{metadata:t}=e;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var m=function(e,t,n){const[r,o]=Object(a.useState)(void 0);Object(a.useEffect)(()=>{let a=[],i=[];function l(){const l=function(){let e=0,t=null;for(a=document.getElementsByClassName("anchor");e<a.length&&!t;){const r=a[e],{top:o}=r.getBoundingClientRect();o>=0&&o<=n&&(t=r),e+=1}return t}();if(l){let n=0,a=!1;for(i=document.getElementsByClassName(e);n<i.length&&!a;){const e=i[n],{href:c}=e,s=decodeURIComponent(c.substring(c.indexOf("#")+1));l.id===s&&(r&&r.classList.remove(t),e.classList.add(t),o(e),a=!0),n+=1}}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}})},d=n(115),p=n.n(d),f=n(93),h=n.n(f);function y({headings:e}){return m("table-of-contents__link","table-of-contents__link--active",100),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:h.a.tableOfContents},r.a.createElement(g,{headings:e})))}function g({headings:e,isChild:t}){return e.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(g,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(l.a)(),{url:n,title:a}=t,{content:s}=e,{metadata:m}=s,{description:d,title:f,permalink:g,editUrl:b,lastUpdatedAt:v,lastUpdatedBy:E,version:k}=m,{frontMatter:{image:j,keywords:_,hide_title:w,hide_table_of_contents:N}}=s,O=f?`${f} | ${a}`:a;let x=n+Object(c.a)(j);return Object(i.a)(j)||(x=j),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("title",null,O),r.a.createElement("meta",{property:"og:title",content:O}),d&&r.a.createElement("meta",{name:"description",content:d}),d&&r.a.createElement("meta",{property:"og:description",content:d}),_&&_.length&&r.a.createElement("meta",{name:"keywords",content:_.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:x}),j&&r.a.createElement("meta",{property:"twitter:image",content:x}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+f}),g&&r.a.createElement("meta",{property:"og:url",content:n+g}),g&&r.a.createElement("link",{rel:"canonical",href:n+g})),r.a.createElement("div",{className:p()("container padding-vert--lg",h.a.docItemWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:p()("col",{[h.a.docItemCol]:!N})},r.a.createElement("div",{className:h.a.docItemContainer},r.a.createElement("article",null,k&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",k)),!w&&r.a.createElement("header",null,r.a.createElement("h1",{className:h.a.docTitle},f)),r.a.createElement("div",{className:"markdown"},r.a.createElement(s,null))),(b||v||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},b&&r.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(v||E)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",v&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*v).toISOString(),className:h.a.docLastUpdatedAt},new Date(1e3*v).toLocaleDateString()),E&&" "),E&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,E)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(u,{metadata:m})))),!N&&s.rightToc&&r.a.createElement(y,{headings:s.rightToc}))))}}}]);