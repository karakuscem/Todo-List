(()=>{"use strict";var e={d:(t,l)=>{for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){const t=document.querySelector(".list"),l=document.createElement("li");l.classList.add("listItem"),t.appendChild(l);const n=document.createElement("div"),i=document.createElement("input");i.type="checkbox",i.checked=e.isCompleted,i.classList.add("check"),l.appendChild(n),n.appendChild(i);const a=document.createElement("div");a.classList.add("taskTitle"),a.textContent=e.title,l.appendChild(a);const o=document.createElement("div");o.classList.add("taskDetails"),o.textContent=e.description,l.appendChild(o);const r=document.createElement("div");r.classList.add("date"),r.textContent=e.date,l.appendChild(r);const s=document.createElement("img");s.src="img/pencil-solid.svg",s.classList.add("taskEditIcon"),l.appendChild(s);const c=document.createElement("img");c.src="img/eraser-solid.svg",c.classList.add("taskDeleteIcon"),l.appendChild(c)}function l(){let e=document.querySelectorAll(".taskDeleteIcon"),t=document.querySelector(".pageTitle");e.forEach((e=>e.addEventListener("click",(e=>{let l=e.target.parentElement;l.remove();let n=l.getElementsByTagName("div")[1].innerHTML;if(t&&t.innerHTML in localStorage){let e=JSON.parse(localStorage.getItem(`${t.innerHTML}`));e=e.filter((e=>e.title!=n)),localStorage.setItem(`${t.innerHTML}`,JSON.stringify(e))}else t||(c=c.filter((e=>e.title!=n)),localStorage.setItem("todoItems",JSON.stringify(c)))}))))}function n(){document.querySelectorAll(".taskEditIcon").forEach((e=>e.addEventListener("click",(e=>{let t=e.target.parentElement,l=t.getElementsByTagName("div")[1],n=t.getElementsByTagName("div")[2],i=t.getElementsByTagName("div")[3],a=t.getElementsByTagName("img")[0],o=t.getElementsByTagName("img")[1];l.style.display="none",n.style.display="none",i.style.display="none",a.style.display="none",o.style.display="none";let r=document.createElement("input");r.name="editTaskTitle",r.maxLength="35",r.required="true",r.placeholder=l.innerHTML,r.id="editTaskTitle",t.insertBefore(r,l);let s=document.createElement("input");s.name="editTaskDescription",s.id="editTaskDescription",s.maxLength="35",s.placeholder=n.innerHTML,t.insertBefore(s,n);let d=document.createElement("input");d.type="date",d.id="editTaskDate",d.placeholder="Due Date",d.autocomplete="off",t.insertBefore(d,i);let m=document.createElement("img");m.src="img/check-solid.svg",t.insertBefore(m,a);let u=document.createElement("img");u.src="img/ban-solid.svg",t.insertBefore(u,o),m.addEventListener("click",(e=>{let t=document.querySelector(".pageTitle"),p=JSON.parse(localStorage.getItem(`${t.innerHTML}`));if(t&&t.innerHTML in localStorage)for(let e in p)p[e].title==l.innerHTML&&p[e].description==n.innerHTML&&p[e].date==i.innerHTML&&(""==r.value&&""==s.value?alert("You must fill all the blanks."):(p[e].title=r.value,p[e].description=s.value,p[e].date=d.value,l.innerHTML=r.value,n.innerHTML=s.value,i.innerHTML=d.value,r.remove(),s.remove(),d.remove(),m.remove(),u.remove(),l.style.display="inline",n.style.display="inline",i.style.display="inline",a.style.display="inline",o.style.display="inline",localStorage.setItem(`${t.innerHTML}`,JSON.stringify(p))));else if(!t)for(let e in c)c[e].title==l.innerHTML&&c[e].description==n.innerHTML&&c[e].date==i.innerHTML&&(""==r.value&&""==s.value?alert("You must fill all the blanks."):(c[e].title=r.value,c[e].description=s.value,c[e].date=d.value,l.innerHTML=r.value,n.innerHTML=s.value,i.innerHTML=d.value,r.remove(),s.remove(),d.remove(),m.remove(),u.remove(),l.style.display="inline",n.style.display="inline",i.style.display="inline",a.style.display="inline",o.style.display="inline",localStorage.setItem("todoItems",JSON.stringify(c))))})),u.addEventListener("click",(e=>{r.remove(),s.remove(),d.remove(),m.remove(),u.remove(),l.style.display="inline",n.style.display="inline",i.style.display="inline",a.style.display="inline",o.style.display="inline"}))}))))}function i(e){const t=document.querySelector(".projectSection"),l=document.createElement("div");l.classList.add("navItem"),t.appendChild(l);const n=document.createElement("img");n.src="img/bars-solid.svg",l.appendChild(n);const i=document.createElement("h1");i.textContent=e.title,i.id="projectButton",l.appendChild(i)}function a(){document.querySelectorAll("#projectButton").forEach((e=>e.addEventListener("click",(e=>{let l=e.target.innerHTML,n=JSON.parse(localStorage.getItem(`${l}`)),i=document.querySelector(".pageTitle");if(i){i.remove();let e=document.createElement("h1");e.classList.add("pageTitle"),e.innerHTML=l;let t=document.querySelector(".listToDo"),n=document.querySelector(".list");t.insertBefore(e,n)}else{let e=document.createElement("h1");e.classList.add("pageTitle"),e.innerHTML=l;let t=document.querySelector(".listToDo"),n=document.querySelector(".list");t.insertBefore(e,n)}m.innerHTML="",n.forEach((e=>{t(e)}))}))))}e.d({},{f3:()=>d,fZ:()=>u,y4:()=>c,kx:()=>m});const o=document.querySelectorAll("#addNewProject"),r=document.querySelector("#addNew"),s=document.querySelector(".projectSection");let c=JSON.parse(localStorage.getItem("todoItems")),d=JSON.parse(localStorage.getItem("projectItems")),m=document.querySelector(".list"),u=document.querySelector(".projectSection");c?d?(m.innerHTML="",c.forEach((e=>{t(e)})),u.innerHTML="",d.forEach((e=>{i(e)}))):localStorage.setItem("projectItems",JSON.stringify([])):localStorage.setItem("todoItems",JSON.stringify([])),function(){const e=document.querySelector("#addNewTask"),i=document.querySelector("#addNewTaskIcon"),a=document.querySelector(".addList"),o=document.querySelector("#addTaskForm");e.addEventListener("click",(e=>{a.style.display="none",o.style.display="flex"})),i.addEventListener("click",(e=>{a.style.display="none",o.style.display="flex"}));const r=document.querySelector(".taskOkay"),s=document.querySelector(".taskCancel");r.addEventListener("click",(e=>{e.preventDefault(),function(){const e=document.querySelector("#addTaskTitle"),i=document.querySelector("#addTaskDescription"),a=document.querySelector("#addTaskDate"),o=document.querySelector(".addList"),r=document.querySelector("#addTaskForm"),s={isCompleted:!1,title:e.value,description:i.value,date:a.value};""!=e.value&&""!=i.value&&""!=a.value||alert("You must fill all the blanks.");let d=document.querySelector(".pageTitle");if(d&&d.innerHTML in localStorage){let e=JSON.parse(localStorage.getItem(`${d.innerHTML}`));e=e.filter((e=>e.title!=s.title)),e.push(s),localStorage.setItem(`${d.innerHTML}`,JSON.stringify(e)),m.innerHTML="",e.forEach((e=>{t(e)})),l(),n()}else d||(c.push(s),localStorage.setItem("todoItems",JSON.stringify(c)),m.innerHTML="",c.forEach((e=>{t(e)})),l(),n());r.style.display="none",o.style.display="flex"}()})),s.addEventListener("click",(e=>{e.preventDefault(),o.style.display="none",a.style.display="flex"}))}(),l(),n(),o.forEach((e=>e.addEventListener("click",(e=>{if(s.childElementCount>=5)alert("You cannot add more projects");else{u.innerHTML="",d.forEach((e=>{i(e)})),r.style.display="none";const e=document.createElement("div");e.classList.add("navItem"),s.appendChild(e);const t=document.createElement("img");t.src="img/bars-solid.svg",e.appendChild(t);const l=document.createElement("input");l.name="addProjectTitle",l.id="addProjectTitle",l.placeholder="Project Title",l.maxLength="10",l.required="true",e.appendChild(l);const n=document.createElement("img");n.id="navOkay",n.src="img/check-solid.svg",e.appendChild(n);const o=document.createElement("img");o.id="navCancel",o.src="img/ban-solid.svg",e.appendChild(o),n.addEventListener("click",(e=>{if(""==l.value)alert("You must fill the title.");else{const e=document.createElement("h1");e.innerHTML=l.value,e.classList.add("button");const t={title:l.value.toUpperCase()};d.push(t),localStorage.setItem("projectItems",JSON.stringify(d)),localStorage.setItem(`${e.innerHTML.toUpperCase()}`,JSON.stringify([])),l.remove(),n.remove(),o.remove(),u.innerHTML="",d.forEach((e=>{i(e),a()})),r.style.display="flex"}})),o.addEventListener("click",(t=>{e.remove(),r.style.display="flex"}))}})))),a()})();