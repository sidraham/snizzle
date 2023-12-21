/** Snizzle is advance feature-rich CSS Selector Engine @version 1.2.3 Date: 28 November 2023 02:30 GMT+0530 */
!function(e){var t,n,r,o,u,s,i,c,a,l,f,d,p="Snizzle"+1*Date.now(),m=e.document,g={}.hasOwnProperty,h=[],x=h.indexOf,y=h.push,v=h.slice,b=h.flat?function(e){return h.flat.call(e)}:function(e){return h.concat.apply([],e)},N="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",w="[\\x20\\t\\r\\n\\f]",E="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",C="\\[[\\x20\\t\\r\\n\\f]*("+E+")(?:"+w+"*([*^$|!~]?=)"+w+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+E+"))|)"+w+"*\\]",A=new RegExp(w+"+","g"),T=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),S=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~=<]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),L=new RegExp("^"+E+"$"),R={ID:new RegExp("^#("+E+")"),CLASS:new RegExp("^\\.("+E+")"),TAG:new RegExp("^("+E+"|[*])"),ATTR:new RegExp("^"+C),PSEUDO:new RegExp("^:((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+N+")$","i"),nocloseTags:new RegExp("^(?:img|input|meta|area|keygen|base|link|br|hr|command|col|param|track|wbr)$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~=<]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},B=/HTML$/i,D=/^(?:input|select|textarea|button)/i,q=/^h\d$/i,$=/^(?:input|textarea)/i,I=/^[^{]+\{\s*\[native \w/,z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,O=/^[>+~=<]+$/,P=/^-ms-/,k=/-([a-z])/g,F=/^ms/,H=/([A-Z])/g,U=/(^,|,$|\s+)/g,G=/^(none)\s*(0s)\s*(ease)\s*(0s).*(running)/;function M(e,t,n,r){var o,u,s,c=t&&t.ownerDocument,f=t?t.nodeType:9;if(n=n||[],1!==f&&11!==f&&9!==f||"string"!=typeof e||!e)return l;if(!r&&(a(t),t=t||l,d&&11!==f&&(u=z.exec(e))))if(o=u[1]){if(9===f){if(s=t.getElementById(o))return n.push(s),n}else if(c&&(s=c.getElementById(o)))return n.push(s),n}else if(o=u[2]){if(s=t.getElementsByTagName(e))return y.apply(n,s),n}else if((o=u[3])&&(s=t.getElementsByClassName(o)))return y.apply(n,s),n;return i(e.replace(T,"$1"),t,n,r)}function j(e){return e[p]=!0,e}function Q(e){var t=l.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function V(e,t){return!0===e?function(e){for(var n,r=[],o=0,u=e.length;o<u;o++)(n=t(e[o],e,e.length))&&r.push(n);return r}:(t=e||t,function(e){return t(e,e.length,[])||[]})}function X(e,t,n){return e[t]&&e[t](n)||e[n]}function Y(t){return access((function(n){return("hidden"===e.getComputedStyle(n).visibility||n.hidden)===t}))}function Z(e){return access((function(t){return"form"===(t.nodeName&&t.nodeName.toLowerCase())&&X(t,"getAttribute","method").toUpperCase()===e}))}function J(e){return access((function(t){return"input"===(t.nodeName&&t.nodeName.toLowerCase())&&t.type===e}))}function K(e){return access((function(t){return"button"===(t.nodeName&&t.nodeName.toLowerCase())&&t.type===e}))}function W(e){return access((function(t){return t&&!!X(t,"getAttribute",e)}))}function _(e){return access((function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.disabled===e||t.disabled!==!e:t.disabled===e:"label"in t&&t.disabled===e}))}function ee(e,t){return("-"+t).toLowerCase()}function te(e,t){return t.toUpperCase()}function ne(e){return e.replace(F,"-ms").replace(H,ee)}function re(e,t,n){return!0===n&&(t="data-"+t),e.getAttribute&&null!=e.getAttribute(ne(t))}for(t in n=M.support={},M.dashed=ne,M.camelCase=function(e){return e.replace(P,"ms-").replace(k,te)},M.version="1.2.3",u=M.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!B.test(t||n&&n.nodeName||"HTML")},M.matches=function(e,t){return M(e,null,null,t)},M.error=function(e){throw new Error("Syntax Error: unrecognized expression: "+e)},M.contains=function(e,t){return(e.ownerDocument||e)!==l&&a(e),c(e,t)},M.attr=function(e,t){(e.ownerDocument||e)!==l&&a(e);var o=r.attrHandle[t.toLowerCase()],u=o&&g.call(r.attrHandle,t.toLowerCase())?o(e):void 0;return void 0!==u&&u.length?u:n.attributes||!d?X(e,"getAttribute",t):(u=X(e,"getAttributeNode",t))&&u.specified?u.value:null},a=M.setDocument=function(e){var t,o=e?e.ownerDocument||e:m;return o!=l&&9===o.nodeType&&o.documentElement?(f=(l=o).documentElement,d=!u(l),n.scope=Q((function(e){return f.appendChild(e).appendChild(l.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=Q((function(e){return e.className="j",!e.getAttribute("className")})),n.getElementsByTagName=Q((function(e){return e.appendChild(l.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=I.test(l.getElementsByClassName),n.qsa=I.test(l.querySelectorAll),n.getById=Q((function(e){return f.appendChild(e).id=p,!l.getElementsByName||l.getElementsByName(p).length})),n.getById?r.filter.ID=j((function(e){return access((function(t){return t&&t.id===e||re(t,"id")===e}))})):r.filter.ID=j((function(e){return access((function(t){var n=X(t,"getAttributeNode","id");return n&&n.nodeValue===e}))})),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,u=t.getElementsByTagName(e);if("*"===e){for(;n=u[o++];)1===n.nodeType&&r.push(n);return r}return u},r.find.CLASS=n.getElementsByClassName&&function(e,t){return d&&(t.getElementsByClassName(e),1)?t.getElementsByClassName(e):n.qsa?t.querySelectorAll(e):void 0},t=I.test(f.compaireDocumentPosition),c=t||I.test(f.contains)?function(e,t){return htmlNode=9===e.nodeType?e.documentElement:e,elemPnode=t&&t.parentNode,htmlNode===elemPnode||!(!elemPnode||1!==elemPnode.nodeType||!(e.contains?e.contains(t):e.compaireDocumentPosition&&e.compaireDocumentPosition(t)))}:function(e,t){if(t)for(;t=t.parentNode;)if(e===t)return!0;return!1},l):l},o=M.getText=function(e){var t,n="",r=0,u=e.nodeType;if(u){if(1===u||9===u||11===u){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===u||4===u)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},access=M.access=function(e,t){return function(n){var r,o=0,u=n.length,s=[];for("function"==typeof e&&(t=t||e,e=!1);o<u;o++)r=t(n[o],o,n,u),!0===e&&null!=r&&s.push(r)||r&&s.push(n[o]);return function(e){var t,n=0,r=[];if(!Array.isArray(e)&&!e.version)return e;for(;n<e.length;n++)t=e[n],v.call(e).indexOf(t)===n&&r.push(t);return e.splice(0,e.length),e.length=0,[].push.apply(e,r),e||r}(b(s))}},r=M.selectors={pseudosLength:this.length,match:R,attrHandle:{},find:{},preFilter:{},createPseudo:j,filter:{TAG:j((function(e){return access((function(t){return"*"===(e=e&&e.toLowerCase())||t.nodeName.toLowerCase()===e}))})),CLASS:j((function(e){return access((function(t){var n;return(n=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+w+"|$)"))&&n.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))})),ATTR:j((function(e,t,n){return access((function(r){var o=M.attr(r,e)||r.hasAttribute(e)&&e||"";return null==o?t="!=":t?(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace(A," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-")):!!o}))})),CHILD:j((function(e){return access(!0,(function(t){return!!(t.querySelectorAll(e)||[]).length}))})),PSEUDO:function(e,t){var n=r.pseudos[e]||r.setFilters[e.toLowerCase()]||M.error("Unsupported pseudo: Compilation failed your '"+e+"' is not supported.");return n[p]?n(t):n}},exprRelative:{" ":access(!0,(function(e){return v.call(r.find.TAG("*",e))})),">":access(!0,(function(e){return v.call(e.children.length&&e.children)})),"+":access(!0,(function(e){var t;if(t=e.nextElementSibling)return t})),"~":access(!0,(function(e){for(var t=[];e=e.nextElementSibling;)t.push(e);return t})),"=":access(!0,(function(e){var t;if(t=e.previousElementSibling)return t})),"<":access(!0,(function(e){for(var t=[];e=e.previousElementSibling;)t.push(e);return t}))},pseudos:{not:j((function(e){var t=jQrony(e);return access((function(e){return x.call(t,e)>-1==!1}))})),has:j((function(e){return access((function(t){return M(e,t).length>0}))})),filter:j((function(e){return access((function(t){var n=jQrony(e);return x.call(n,t)>-1==!0}))})),theme:access((function(e){var t=X(e,"getAttributeNode","name")||e.name,n=e.nodeName;if(t&&"META"===n)return"theme-color"===(t.nodeValue||t)})),iscript:access((function(e){return!("SCRIPT"!==e.nodeName||X(e,"getAttribute","src")&&e.src)})),guard:access((function(t){return"BODY"===t.nodeName||e.document.body===t})),nocloser:access((function(e){return e.nodeName&&R.nocloseTags.test(e.nodeName)})),closer:access((function(e){return e.nodeName&&!R.nocloseTags.test(e.nodeName)})),title:access((function(e){return X(e,"hasAttribute","title")})),contains:j((function(e){return access((function(t){return(t.textContent||o(t)).indexOf(e)>-1}))})),lang:j((function(e){return L.test(e||"")||M.error("Unsupported Language: "+e),e=(e+"").toLocaleLowerCase(),access((function(t){do{var n;if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}))})),target:access((function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id})),root:access((function(e){return e===f})),focus:access((function(e){return e===e.activeElement&&(!l.hasFocus||l.hasFocus())||!!(e.type||e.href||~e.tabIndex)})),visible:Y(!1),hidden:Y(!0),get:Z("GET"),post:Z("POST"),enabled:_(!1),disabled:_(!0),checked:access((function(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected})),selected:access((function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected})),empty:access((function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0})),parent:access((function(e,t,n){return!r.pseudos.empty(n)[t]})),editable:access((function(e){return $.test(e.nodeName)&&!e.disabled&&!e.readOnly||X(e,"getAttribute","contenteditable")})),header:access((function(e){return q.test(e.nodeName)})),input:access((function(e){return D.test(e.nodeName)})),button:access((function(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"button"===t||"input"===t&&"button"===e.type})),text:access((function(e){var t;return"input"===(e.nodeName&&e.nodeName.toLowerCase())&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())})),ctx:V(!0,(function(e){return I.test(e.getContext)&&e.getContext("2d")})),eq:j((function(e){return V((function(t,n){return[t[+e<0?+e+n:+e]]}))})),first:function(e){return r.pseudos.eq(0)(e)},last:function(e){return r.pseudos.eq(-1)(e)},center:V((function(e,t){return r.pseudos.eq(parseInt(t/2))(e)})),even:access((function(e,t){return(t+1)%2})),odd:access((function(e,t){return t%2})),lt:j((function(e){return V((function(t,n,r){for(var o=+e<0?+e+n:+e>n?n:+e;--o>=0;)r.push(t[o]);return r.reverse()}))})),gt:j((function(e){return V((function(t,n,r){for(var o=+e<0?+e+n:+e;++o<n;)r.push(t[o]);return r}))})),skip:j((function(e){return V((function(t,n,r){var o=0;for(e=+e<n&&+e>0?+e:n;o<n;o+=e)r.push(t[o]);return r}))})),offset:access((function(t){return t.nodeType&&9!==t.nodeType&&"static"!==e.getComputedStyle(t).position||t===f})),data:j((function(e){return access((function(t){return null!=t.dataset[e]||re(t,e,!0)}))})),animated:access((function(t){var n=t.nodeType&&e.getComputedStyle(t).animation;return!G.test(n)||"MARQUEE"===t.nodeName}))}},r.pseudos.ignore=r.pseudos.skip,r.pseudos.middle=r.pseudos.center,r.pseudos.is=r.pseudos.filter,r.pseudos.nth=r.pseudos.eq,r.pseudos.context=r.pseudos.get2d=r.pseudos.ctx,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0,search:!0,url:!0,range:!0})r.pseudos[t]=J(t);for(t in{submit:!0,reset:!0,menu:!0})r.pseudos[t]=K(t);for(t in{src:!0,href:!0})r.pseudos[t]=W(t);function oe(){}function ue(e,t){for(var n,o=e||[],u=0,s=t&&r.find.TAG("*",t),i=s.length;u!=i&&null!=(n=s[u]);u++)n&&n.nodeType&&o.push(n);return o}access((function(e){r.attrHandle[e]=access((function(t){return!!X(t,"hasAttribute",e)}))}))(N.match(/\w+/g)),oe.prototype=r.filters=r.pseudos,r.setFilters=new oe,s=M.tokenize=function(e){var t,n,o,u,s;for(n=e.trim(),u=[];n;){for(s in t=!1,(o=S.exec(n))&&(t=o.shift(),u.push({value:t,type:o[0].replace(T," ")}),n=n.slice(t.length)),r.filter)(o=R[s].exec(n))&&(t=o.shift(),u.push({type:s,value:t,matches:o,unique:o[0]}),n=n.slice(t.length));if(!t)break}return n.length&&n?M.error(n):u.slice(0)},i=M.select=function(e,t,n,o){var u,i,c,a,l,f,d=0;for(e=e.replace(U," ").trim().split(","),n=n||[];u=e[d++];){for(f=o,null==o&&ue(f=[],t||m),i=s(u),c=0;a=i[c++];)f=(l=O.exec(u))?r.exprRelative[l[0]]([t]):r.exprRelative[a.type]?r.exprRelative[a.type](f):r.filter[a.type](a.matches[0],a.matches[1],a.matches[2]||a.matches[3]||a.matches[4])(f);y.apply(n,f)}return n},a();var se=e.Snizzle;M.noConflict=function(){return e.Snizzle===M&&(e.Snizzle=se),M},"function"==typeof define&&define.amd?define((function(){return M})):"object"==typeof module&&module.exports?module.exports=M:e.Snizzle=M}(window);