(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){let e=document.querySelectorAll(".taskDeleteIcon"),t=document.querySelector(".pageTitle");e.forEach((e=>e.addEventListener("click",(e=>{let n=e.target.parentElement;n.remove();let r=n.getElementsByTagName("div")[1].innerHTML;if(t&&t.innerHTML in localStorage){let e=JSON.parse(localStorage.getItem(`${t.innerHTML}`));e=e.filter((e=>e.title!=r)),localStorage.setItem(`${t.innerHTML}`,JSON.stringify(e))}else t||(Ue=Ue.filter((e=>e.title!=r)),localStorage.setItem("todoItems",JSON.stringify(Ue)))}))))}function n(){document.querySelectorAll(".taskEditIcon").forEach((e=>e.addEventListener("click",(e=>{let t=e.target.parentElement,n=t.getElementsByTagName("div")[1],r=t.getElementsByTagName("div")[2],a=t.getElementsByTagName("div")[3],i=t.getElementsByTagName("img")[0],o=t.getElementsByTagName("img")[1];n.style.display="none",r.style.display="none",a.style.display="none",i.style.display="none",o.style.display="none";let l=document.createElement("input");l.name="editTaskTitle",l.maxLength="35",l.required="true",l.placeholder=n.innerHTML,l.id="editTaskTitle",t.insertBefore(l,n);let s=document.createElement("input");s.name="editTaskDescription",s.id="editTaskDescription",s.maxLength="35",s.placeholder=r.innerHTML,t.insertBefore(s,r);let d=document.createElement("input");d.type="date",d.id="editTaskDate",d.placeholder="Due Date",d.autocomplete="off",t.insertBefore(d,a);let c=document.createElement("img");c.src="img/check-solid.svg",t.insertBefore(c,i);let u=document.createElement("img");u.src="img/ban-solid.svg",t.insertBefore(u,o),c.addEventListener("click",(e=>{let t,m=document.querySelector(".pageTitle");if(m&&(t=JSON.parse(localStorage.getItem(`${m.innerHTML}`))),m&&m.innerHTML in localStorage)for(let e in t)t[e].title==n.innerHTML&&t[e].description==r.innerHTML&&t[e].date==a.innerHTML&&(""==l.value||""==s.value?alert("You must fill all the blanks."):(t[e].title=l.value,t[e].description=s.value,t[e].date=d.value,n.innerHTML=l.value,r.innerHTML=s.value,a.innerHTML=d.value,l.remove(),s.remove(),d.remove(),c.remove(),u.remove(),n.style.display="inline",r.style.display="inline",a.style.display="inline",i.style.display="inline",o.style.display="inline",localStorage.setItem(`${m.innerHTML}`,JSON.stringify(t))));else if(!m)for(let e in Ue)Ue[e].title==n.innerHTML&&Ue[e].description==r.innerHTML&&Ue[e].date==a.innerHTML&&(""==l.value&&""==s.value?alert("You must fill all the blanks."):(Ue[e].title=l.value,Ue[e].description=s.value,Ue[e].date=d.value,n.innerHTML=l.value,r.innerHTML=s.value,a.innerHTML=d.value,l.remove(),s.remove(),d.remove(),c.remove(),u.remove(),n.style.display="inline",r.style.display="inline",a.style.display="inline",i.style.display="inline",o.style.display="inline",localStorage.setItem("todoItems",JSON.stringify(Ue))))})),u.addEventListener("click",(e=>{l.remove(),s.remove(),d.remove(),c.remove(),u.remove(),n.style.display="inline",r.style.display="inline",a.style.display="inline",i.style.display="inline",o.style.display="inline"}))}))))}function r(){let e=document.querySelectorAll("#checkTodo"),r=document.querySelector(".pageTitle");e.forEach((e=>e.addEventListener("click",(e=>{let i=e.target.parentElement.parentElement,o=i.getElementsByTagName("div")[1],l=i.getElementsByTagName("div")[2],s=i.getElementsByTagName("div")[3];if(r&&r.innerHTML in localStorage){let e=JSON.parse(localStorage.getItem(`${r.innerHTML}`));e.forEach((e=>{e.title==o.innerHTML&&e.description==l.innerHTML&&e.date==s.innerHTML&&(e.isCompleted=!e.isCompleted)})),localStorage.setItem(`${r.innerHTML}`,JSON.stringify(e)),We.innerHTML="",e.forEach((e=>{a(e)})),n(),t()}else r||(Ue.forEach((e=>{e.title==o.innerHTML&&e.description==l.innerHTML&&e.date==s.innerHTML&&(e.isCompleted=!e.isCompleted)})),localStorage.setItem("todoItems",JSON.stringify(Ue)),We.innerHTML="",Ue.forEach((e=>{a(e)})),n(),t())}))))}function a(e){const t=document.querySelector(".list"),n=document.createElement("li");n.classList.add("listItem"),t.appendChild(n);const a=document.createElement("div"),i=document.createElement("input");i.type="checkbox",i.id="checkTodo",i.classList.add("check"),n.appendChild(a),a.appendChild(i);const o=document.createElement("div");o.classList.add("taskTitle"),o.textContent=e.title,n.appendChild(o);const l=document.createElement("div");l.classList.add("taskDetails"),l.textContent=e.description,n.appendChild(l);const s=document.createElement("div");s.classList.add("date"),s.textContent=e.date,n.appendChild(s);const d=document.createElement("img");d.src="img/pencil-solid.svg",d.classList.add("taskEditIcon"),n.appendChild(d);const c=document.createElement("img");c.src="img/eraser-solid.svg",c.classList.add("taskDeleteIcon"),n.appendChild(c),1==e.isCompleted?(i.checked=!0,o.style.textDecoration="line-through",o.style.color="gray",l.style.textDecoration="line-through",l.style.color="gray",s.style.textDecoration="line-through",s.style.color="gray"):0==e.isCompleted&&(i.checked=!1,o.style.textDecoration="none",o.style.color="black",l.style.textDecoration="none",l.style.color="black",s.style.textDecoration="none",s.style.color="black"),r()}function i(){document.querySelectorAll("#projectDelete").forEach((e=>e.addEventListener("click",(e=>{let t=e.target.parentElement,n=t.getElementsByTagName("h1")[0].innerHTML;Ye=Ye.filter((e=>e.title!=n)),localStorage.removeItem(`${n}`),localStorage.setItem("projectItems",JSON.stringify(Ye)),t.remove()}))))}function o(e){const t=document.querySelector(".projectSection"),n=document.createElement("div");n.classList.add("navItem"),t.appendChild(n);const r=document.createElement("img");r.src="img/bars-solid.svg",n.appendChild(r);const a=document.createElement("h1");a.textContent=e.title,a.id="projectButton",n.appendChild(a);const i=document.createElement("img");i.id="projectEdit",i.src="img/pencil-solid.svg",n.appendChild(i);const o=document.createElement("img");o.id="projectDelete",o.src="img/eraser-solid.svg",n.appendChild(o)}function l(){document.querySelectorAll("#projectEdit").forEach((e=>e.addEventListener("click",(e=>{let t=e.target.parentElement,n=t.getElementsByTagName("h1")[0],r=t.getElementsByTagName("img")[1],a=t.getElementsByTagName("img")[2],i=n.innerHTML;n.style.display="none",a.style.display="none",r.style.display="none";const l=document.createElement("input");l.name="editProjectTitle",l.id="editProjectTitle",l.placeholder=i,l.maxLength="10",l.required="true",t.appendChild(l);const s=document.createElement("img");s.id="navOkay",s.src="img/check-solid.svg",t.appendChild(s);const d=document.createElement("img");d.id="navCancel",d.src="img/ban-solid.svg",t.appendChild(d),s.addEventListener("click",(e=>{if(""==l.value)alert("You must fill the title.");else if(l.value.toUpperCase()in localStorage)alert("You cannot add same project twice.");else{let e=[],t=JSON.parse(localStorage.getItem(`${i.toUpperCase()}`));console.log(t),"null"==t?e=[]:t.forEach((t=>{e.push(t)})),localStorage.setItem(`${l.value.toUpperCase()}`,JSON.stringify(e)),localStorage.removeItem(`${i}`),i=l.value,n.style.display="inline",a.style.display="inline",r.style.display="inline",l.remove(),s.remove(),d.remove(),Ye=Ye.forEach((e=>{e.title==n.innerHTML&&(e.title=l.value.toUpperCase(),localStorage.setItem("projectItems",JSON.stringify(Ye))),je.innerHTML="",Ye.forEach((e=>{o(e)}))}))}})),d.addEventListener("click",(e=>{n.style.display="inline",a.style.display="inline",r.style.display="inline",l.remove(),s.remove(),d.remove()}))}))))}function s(){document.querySelectorAll("#projectButton").forEach((e=>e.addEventListener("click",(e=>{let i=e.target.innerHTML,o=JSON.parse(localStorage.getItem(`${i}`)),l=document.querySelector(".pageTitle");if(l){l.remove();let e=document.createElement("h1");e.classList.add("pageTitle"),e.innerHTML=i;let t=document.querySelector(".listToDo"),n=document.querySelector(".list");t.insertBefore(e,n),document.querySelector(".addList").style.display="flex"}else{let e=document.createElement("h1");e.classList.add("pageTitle"),e.innerHTML=i;let t=document.querySelector(".listToDo"),n=document.querySelector(".list");t.insertBefore(e,n),document.querySelector(".addList").style.display="flex"}We.innerHTML="",o.forEach((e=>{a(e)})),r(),n(),t()}))))}e.d({},{f3:()=>Ye,fZ:()=>je,y4:()=>Ue,kx:()=>We});const d=document.querySelectorAll("#addNewProject"),c=document.querySelector("#addNew"),u=document.querySelector(".projectSection"),m=document.querySelector(".addList"),g=document.querySelectorAll("#tasksBtn"),f=document.querySelector(".addList"),h=document.querySelectorAll("#homeBtn"),v=document.querySelectorAll("#todayBtn");let y=new Date,p=String(y.getDate()).padStart(2,"0"),w=String(y.getMonth()+1).padStart(2,"0"),T=y.getFullYear();y=T+"-"+w+"-"+p;const S=document.querySelector(".addList");function b(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function M(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function E(e){M(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function k(e,t){M(2,arguments);var n=E(e),r=b(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function C(e,t){M(2,arguments);var n=E(e),r=b(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var o=i.getDate();return a>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),a),n)}function L(e,t){if(M(2,arguments),!t||"object"!=typeof t)return new Date(NaN);var n=t.years?b(t.years):0,r=t.months?b(t.months):0,a=t.weeks?b(t.weeks):0,i=t.days?b(t.days):0,o=t.hours?b(t.hours):0,l=t.minutes?b(t.minutes):0,s=t.seconds?b(t.seconds):0,d=E(e),c=r||n?C(d,r+12*n):d,u=i||a?k(c,i+7*a):c,m=l+60*o,g=s+60*m,f=1e3*g,h=new Date(u.getTime()+f);return h}function D(e){return M(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function N(e){if(M(1,arguments),!D(e)&&"number"!=typeof e)return!1;var t=E(e);return!isNaN(Number(t))}function x(e,t){M(2,arguments);var n=E(e).getTime(),r=b(t);return new Date(n+r)}function q(e,t){M(2,arguments);var n=b(t);return x(e,-n)}var H=864e5;function I(e){M(1,arguments);var t=1,n=E(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function O(e){M(1,arguments);var t=E(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=I(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=I(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function P(e){M(1,arguments);var t=O(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=I(n);return r}var U=6048e5,Y={};function W(){return Y}function j(e,t){var n,r,a,i,o,l,s,d;M(1,arguments);var c=W(),u=b(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(l=o.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=E(e),g=m.getUTCDay(),f=(g<u?7:0)+g-u;return m.setUTCDate(m.getUTCDate()-f),m.setUTCHours(0,0,0,0),m}function J(e,t){var n,r,a,i,o,l,s,d;M(1,arguments);var c=E(e),u=c.getUTCFullYear(),m=W(),g=b(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(l=o.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(s=m.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(u+1,0,g),f.setUTCHours(0,0,0,0);var h=j(f,t),v=new Date(0);v.setUTCFullYear(u,0,g),v.setUTCHours(0,0,0,0);var y=j(v,t);return c.getTime()>=h.getTime()?u+1:c.getTime()>=y.getTime()?u:u-1}function B(e,t){var n,r,a,i,o,l,s,d;M(1,arguments);var c=W(),u=b(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(l=o.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),m=J(e,t),g=new Date(0);g.setUTCFullYear(m,0,u),g.setUTCHours(0,0,0,0);var f=j(g,t);return f}var F=6048e5;function A(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const z=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return A("yy"===t?r%100:r,t.length)},$=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):A(n+1,2)},Q=function(e,t){return A(e.getUTCDate(),t.length)},G=function(e,t){return A(e.getUTCHours()%12||12,t.length)},X=function(e,t){return A(e.getUTCHours(),t.length)},R=function(e,t){return A(e.getUTCMinutes(),t.length)},_=function(e,t){return A(e.getUTCSeconds(),t.length)},V=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return A(Math.floor(r*Math.pow(10,n-3)),t.length)};function K(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+A(i,2)}function Z(e,t){return e%60==0?(e>0?"-":"+")+A(Math.abs(e)/60,2):ee(e,t)}function ee(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+A(Math.floor(a/60),2)+n+A(a%60,2)}const te={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return z(e,t)},Y:function(e,t,n,r){var a=J(e,r),i=a>0?a:1-a;return"YY"===t?A(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):A(i,t.length)},R:function(e,t){return A(O(e),t.length)},u:function(e,t){return A(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return A(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return A(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return $(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return A(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){M(1,arguments);var n=E(e),r=j(n,t).getTime()-B(n,t).getTime();return Math.round(r/F)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):A(a,t.length)},I:function(e,t,n){var r=function(e){M(1,arguments);var t=E(e),n=I(t).getTime()-P(t).getTime();return Math.round(n/U)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):A(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):Q(e,t)},D:function(e,t,n){var r=function(e){M(1,arguments);var t=E(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/H)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):A(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return A(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return A(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return A(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return G(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):X(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):A(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):A(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):R(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):_(e,t)},S:function(e,t){return V(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Z(a);case"XXXX":case"XX":return ee(a);default:return ee(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Z(a);case"xxxx":case"xx":return ee(a);default:return ee(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+K(a,":");default:return"GMT"+ee(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+K(a,":");default:return"GMT"+ee(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return A(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return A((r._originalDate||e).getTime(),t.length)}};var ne=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},re=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},ae={p:re,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return ne(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",ne(a,t)).replace("{{time}}",re(i,t))}};const ie=ae;function oe(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var le=["D","DD"],se=["YY","YYYY"];function de(e){return-1!==le.indexOf(e)}function ce(e){return-1!==se.indexOf(e)}function ue(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var me={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function ge(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var fe,he={date:ge({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ge({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ge({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},ve={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ye(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=e.formattingValues[i]||e.formattingValues[a]}else{var o=e.defaultWidth,l=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function pe(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,l=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?Te(s,(function(e){return e.test(l)})):we(s,(function(e){return e.test(l)}));o=e.valueCallback?e.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var c=t.slice(l.length);return{value:o,rest:c}}}function we(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function Te(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const Se={code:"en-US",formatDistance:function(e,t,n){var r,a=me[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:he,formatRelative:function(e,t,n,r){return ve[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:ye({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ye({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:ye({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ye({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ye({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(fe={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(fe.matchPattern);if(!n)return null;var r=n[0],a=e.match(fe.parsePattern);if(!a)return null;var i=fe.valueCallback?fe.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;var o=e.slice(r.length);return{value:i,rest:o}}),era:pe({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:pe({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:pe({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:pe({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:pe({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var be=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Me=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ee=/^'([^]*?)'?$/,ke=/''/g,Ce=/[a-zA-Z]/;function Le(e,t,n){var r,a,i,o,l,s,d,c,u,m,g,f,h,v,y,p,w,T;M(2,arguments);var S=String(t),k=W(),C=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:k.locale)&&void 0!==r?r:Se,L=b(null!==(i=null!==(o=null!==(l=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==l?l:k.firstWeekContainsDate)&&void 0!==o?o:null===(u=k.locale)||void 0===u||null===(m=u.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var D=b(null!==(g=null!==(f=null!==(h=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(y=n.locale)||void 0===y||null===(p=y.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==h?h:k.weekStartsOn)&&void 0!==f?f:null===(w=k.locale)||void 0===w||null===(T=w.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==g?g:0);if(!(D>=0&&D<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!C.localize)throw new RangeError("locale must contain localize property");if(!C.formatLong)throw new RangeError("locale must contain formatLong property");var x=E(e);if(!N(x))throw new RangeError("Invalid time value");var H=oe(x),I=q(x,H),O={firstWeekContainsDate:L,weekStartsOn:D,locale:C,_originalDate:x},P=S.match(Me).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,ie[t])(e,C.formatLong):e})).join("").match(be).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return De(r);var i=te[a];if(i)return null!=n&&n.useAdditionalWeekYearTokens||!ce(r)||ue(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!de(r)||ue(r,t,String(e)),i(I,r,C.localize,O);if(a.match(Ce))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return P}function De(e){var t=e.match(Ee);return t?t[1].replace(ke,"'"):e}const Ne=document.querySelectorAll("#weekBtn");let xe=[],qe=new Date,He=String(qe.getDate()).padStart(2,"0"),Ie=String(qe.getMonth()).padStart(2,"0"),Oe=qe.getFullYear();for(let e=0;e<7;e++){let t=L(new Date(parseInt(Oe),parseInt(Ie),parseInt(He)),{days:e}),n=Le(new Date(t),"yyyy-MM-dd");xe.push(n)}const Pe=document.querySelector(".addList");let Ue=JSON.parse(localStorage.getItem("todoItems")),Ye=JSON.parse(localStorage.getItem("projectItems")),We=document.querySelector(".list"),je=document.querySelector(".projectSection");Ue?Ye?(We.innerHTML="",Ue.forEach((e=>{a(e)})),je.innerHTML="",Ye.forEach((e=>{o(e)}))):Ye=localStorage.setItem("projectItems",JSON.stringify([])):Ue=localStorage.setItem("todoItems",JSON.stringify([])),function(){const e=document.querySelector("#addNewTask"),i=document.querySelector("#addNewTaskIcon"),o=document.querySelector(".addList"),l=document.querySelector("#addTaskForm");e.addEventListener("click",(e=>{o.style.display="none",l.style.display="flex"})),i.addEventListener("click",(e=>{o.style.display="none",l.style.display="flex"}));const s=document.querySelector(".taskOkay"),d=document.querySelector(".taskCancel");s.addEventListener("click",(e=>{e.preventDefault(),function(){const e=document.querySelector("#addTaskTitle"),i=document.querySelector("#addTaskDescription"),o=document.querySelector("#addTaskDate"),l=document.querySelector(".addList"),s=document.querySelector("#addTaskForm"),d={isCompleted:!1,title:e.value,description:i.value,date:o.value};if(""==e.value||""==i.value||""==o.value)return void alert("You must fill all the blanks.");let c=document.querySelector(".pageTitle");if(c&&c.innerHTML in localStorage){let e=JSON.parse(localStorage.getItem(`${c.innerHTML}`));e||(localStorage.setItem(`${c.innerHTML}`,JSON.stringify([])),e=JSON.parse(localStorage.getItem(`${c.innerHTML}`))),e=e.filter((e=>e.title!=d.title)),e.push(d),localStorage.setItem(`${c.innerHTML}`,JSON.stringify(e)),We.innerHTML="",e.forEach((e=>{a(e)})),t(),n(),r()}else c||(Ue||(localStorage.setItem("todoItems",JSON.stringify([])),Ue=JSON.parse(localStorage.getItem("todoItems"))),Ue.push(d),localStorage.setItem("todoItems",JSON.stringify(Ue)),We.innerHTML="",Ue.forEach((e=>{a(e)})),t(),n(),r());s.style.display="none",l.style.display="flex"}()})),d.addEventListener("click",(e=>{e.preventDefault(),l.style.display="none",o.style.display="flex"}))}(),t(),n(),d.forEach((e=>e.addEventListener("click",(e=>{if(5!=u.childElementCount||5!=Ye.length){je.innerHTML="",Ye&&(Ye.forEach((e=>{o(e)})),i()),c.style.display="none";const e=document.createElement("div");e.classList.add("navItem"),u.appendChild(e);const t=document.createElement("img");t.src="img/bars-solid.svg",e.appendChild(t);const n=document.createElement("input");n.name="addProjectTitle",n.id="addProjectTitle",n.placeholder="Project Title",n.maxLength="15",n.required="true",e.appendChild(n);const r=document.createElement("img");r.id="navOkay",r.src="img/check-solid.svg",e.appendChild(r);const a=document.createElement("img");a.id="navCancel",a.src="img/ban-solid.svg",e.appendChild(a),r.addEventListener("click",(e=>{if(""==n.value)alert("You must fill the title.");else if(n.value.toUpperCase()in localStorage)alert("You cannot add same project twice.");else{const e=document.createElement("h1");e.innerHTML=n.value;const t={title:n.value.toUpperCase()};Ye||(localStorage.setItem("projectItems",JSON.stringify([])),Ye=JSON.parse(localStorage.getItem("projectItems"))),Ye.push(t),e.classList.add("button"),localStorage.setItem("projectItems",JSON.stringify(Ye)),localStorage.setItem(`${e.innerHTML.toUpperCase()}`,JSON.stringify([])),n.remove(),r.remove(),a.remove(),je.innerHTML="",Ye.forEach((e=>{o(e),s()})),l(),i(),c.style.display="flex"}})),a.addEventListener("click",(t=>{e.remove(),c.style.display="flex"}))}else alert("You cannot add more projects")})))),s(),g.forEach((e=>e.addEventListener("click",(()=>{let e=document.querySelector(".pageTitle");e&&e.remove(),We.innerHTML="",m.style.display="none",Ue||(localStorage.setItem("todoItems",JSON.stringify([])),Ue=JSON.parse(localStorage.getItem("todoItems"))),Ue.forEach((e=>{a(e)})),t(),n(),r()})))),h.forEach((e=>e.addEventListener("click",(()=>{let e=document.querySelector(".pageTitle");e&&e.remove(),We.innerHTML="",f.style.display="flex",Ue||(localStorage.setItem("todoItems",JSON.stringify([])),Ue=JSON.parse(localStorage.getItem("todoItems"))),Ue.forEach((e=>{a(e)})),t(),n(),r()})))),v.forEach((e=>e.addEventListener("click",(()=>{let e=document.querySelector(".pageTitle");e&&e.remove(),S.style.display="none",We.innerHTML="",Ue||(localStorage.setItem("todoItems",JSON.stringify([])),Ue=JSON.parse(localStorage.getItem("todoItems")));let i=Ue;i=i.filter((e=>e.date==y)),i.forEach((e=>{a(e)})),t(),n(),r()})))),Ne.forEach((e=>e.addEventListener("click",(()=>{let e=document.querySelector(".pageTitle");e&&e.remove(),Pe.style.display="none",We.innerHTML="";for(let e=0;e<6;e++){Ue||(localStorage.setItem("todoItems",JSON.stringify([])),Ue=JSON.parse(localStorage.getItem("todoItems")));let t=Ue;t=t.filter((t=>t.date==xe[e])),t.forEach((e=>{a(e)}))}t(),n(),r()})))),i(),l()})();