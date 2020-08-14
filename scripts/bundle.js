!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function s(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(y(r.parts[i],t))}else{for(var c=[];i<r.parts.length;i++)c.push(y(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function y(e,t){var n,r,o;if(t.singleton){var a=h++;n=m||(m=u(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e,t);return s(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a],u=o[i.id];u&&(u.refs--,r.push(u))}e&&s(c(e,t),t);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(e,t,n){"use strict";n.r(t);n(0);function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=document.getElementById("question"),a=Array.from(document.getElementsByClassName("choice-text")),i=document.getElementById("questionCounterText"),c=document.getElementById("scoreText"),s={},u=!1,l=0,f=0,d=[],p=[];fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple").then((function(e){return e.json()})).then((function(e){console.log(e.results),p=e.results.map((function(e){var t={question:e.question},n=r(e.incorrect_answers);return t.answer=Math.floor(3*Math.random())+1,n.splice(t.answer-1,0,e.correct_answer),n.forEach((function(e,n){t["choice"+(n+1)]=e})),console.log(t),t})),m()})).catch((function(e){console.error(e)}));var m=function(){f=0,l=0,d=r(p),h()},h=function(){if(0===d.length||f>=5){localStorage.setItem("mostRecentScore",l),document.body.innerHTML='<section id="end-page" class="container-end-page" style = "display:flex">\n    <h1 id="finalScore"></h1>\n    <form>\n      <input type="text" name="username" id="username" placeholder="username">\n      <button type="submit" class="button" id="saveScoreButton" disabled>Save</button>\n    </form>\n    <a id="playAgain" class="button" href="">Play Again</a>\n    <a id="goHome" class="button" href="">Go Home</a>\n  </section>';var e=document.getElementById("username"),t=document.getElementById("finalScore"),n=document.getElementById("saveScoreButton"),r=localStorage.getItem("mostRecentScore"),c=JSON.parse(localStorage.getItem("highScores"))||[];return t.innerText=r,e.addEventListener("keyup",(function(){n.disabled=!e.value})),n.addEventListener("click",(function(t){t.preventDefault();var n={username:e.value,score:l};c.push(n),c.sort((function(e,t){return t.score-e.score})),c.splice(5),localStorage.setItem("highScores",JSON.stringify(c))})),!0}f++,i.innerHTML="".concat(f," / ").concat(5);var p=Math.floor(Math.random()*d.length);s=d[p],o.innerText=s.question,a.forEach((function(e){var t=e.dataset.number;e.innerText=s["choice"+t]})),d.splice(p,1),u=!0};a.forEach((function(e){e.addEventListener("click",(function(e){if(u){u=!1;var t=e.target,n=t.dataset.number==s.answer?"correct":"incorrect";"correct"===n&&y(10),t.parentElement.classList.add(n),setTimeout((function(){t.parentElement.classList.remove(n),h()}),1e3)}}))}));var y=function(e){l+=e,c.innerHTML=l},v=m,g=document.querySelector("#play"),b=document.querySelector("#home"),S=document.querySelector("#game-page");g.addEventListener("click",(function(e){e.preventDefault(),b.style.display="none",S.style.display="flex",v()}));var E=document.querySelector("#highScores-page");document.querySelector("#highScores-btn").addEventListener("click",(function(e){e.preventDefault(),b.style.display="none",E.style.display="flex"}));document.querySelector("#goHome-btn").addEventListener("click",(function(e){e.preventDefault(),E.style.display="none",b.style.display="flex"}));var x=document.getElementById("highScoresList"),T=JSON.parse(localStorage.getItem("highScores"))||[];x.innerHTML=T.map((function(e){return'<li class="high-score">'.concat(e.username,": ").concat(e.score,"</li>")})).join("")}]);