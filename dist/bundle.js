(()=>{"use strict";var e={200:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,".welcom{width:100%;height:400px;display:flex;justify-content:center;align-items:center;background-color:#fff8dc;font-size:50px}",""]);const c=i},424:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"body {\n    margin: 0;\n    height: 100%;\n}",""]);const c=i},150:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"main {\n    text-align: center;\n    margin: 10px;\n}",""]);const c=i},83:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"nav{\n    display: flex;\n    justify-content:space-between;\n    height: 50px;\n    background-color: rgb(2, 0, 139);\n    margin: 0;\n}\n\nnav .title {\n    font-size: 20px;\n    font-weight: bolder;\n    color: white;\n    margin: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nnav .manu-trigger {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 10px;\n}\n\nnav .manu-trigger .menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nnav .manu-trigger .menu .item {\n    width: 50px;\n    margin: 5px;\n    color: white;\n}\n\n\n@media (max-width:500px) {\n    nav .manu-trigger .menu {\n        background-color: black;\n    }\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(424),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var v=t(83),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),n()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;let y=document.createElement("nav"),g=document.createElement("div");g.textContent="My Website",g.className="title";let x=document.createElement("div");x.className="manu-trigger";let b=document.createElement("div");b.className="menu";let C=document.createElement("div");C.textContent="Item 1",C.className="item";let E=document.createElement("div");E.textContent="Item 2",E.className="item";let Z=document.createElement("div");Z.textContent="Item 3",Z.className="item",b.appendChild(C),b.appendChild(E),b.appendChild(Z);let T=document.createElement("button");T.textContent=">",T.className="manu-btn",T.addEventListener("click",(function(){" &gt; "==T.innerHTML?(T.innerHTML=" < ",b.style.display="none"):(T.innerHTML=" > ",b.style.display="flex")})),x.appendChild(b),x.appendChild(T),y.appendChild(g),y.appendChild(x);const w=y;var M=t(200),I={};I.styleTagTransform=p(),I.setAttributes=s(),I.insert=i().bind(null,"head"),I.domAPI=a(),I.insertStyleElement=d(),n()(M.Z,I),M.Z&&M.Z.locals&&M.Z.locals;let N=document.createElement("div");N.textContent="Welcom",N.className="welcom",N.addEventListener("click",(function(){N.style.fontSize="55px",window.setTimeout((function(){N.style.fontSize="50px"}),500)}));const S=N;var A=t(150),j={};j.styleTagTransform=p(),j.setAttributes=s(),j.insert=i().bind(null,"head"),j.domAPI=a(),j.insertStyleElement=d(),n()(A.Z,j),A.Z&&A.Z.locals&&A.Z.locals;let L=document.createElement("main");L.textContent="Main Content";const k=L;document.body.appendChild(w),document.body.appendChild(S),document.body.appendChild(k)})()})();