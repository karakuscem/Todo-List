(()=>{"use strict";var e={d:(t,l)=>{for(var d in l)e.o(l,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:l[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){const t=document.querySelector(".list"),l=document.createElement("li");l.classList.add("listItem"),t.appendChild(l);const d=document.createElement("div"),n=document.createElement("input");n.type="checkbox",n.checked=e.isCompleted,n.classList.add("check"),l.appendChild(d),d.appendChild(n);const a=document.createElement("div");a.classList.add("taskTitle"),a.textContent=e.title,l.appendChild(a);const c=document.createElement("div");c.classList.add("taskDetails"),c.textContent=e.description,l.appendChild(c);const s=document.createElement("div");s.classList.add("date"),s.textContent=e.date,l.appendChild(s);const o=document.createElement("img");o.src="img/pencil-solid.svg",o.classList.add("taskEditIcon"),l.appendChild(o);const i=document.createElement("img");i.src="img/eraser-solid.svg",i.classList.add("taskDeleteIcon"),l.appendChild(i)}function l(){document.querySelectorAll(".taskDeleteIcon").forEach((e=>e.addEventListener("click",(e=>{let t=e.target.parentElement;t.remove();let l=t.getElementsByTagName("div")[1].innerHTML;d=d.filter((e=>e.title!=l)),localStorage.setItem("todoItems",JSON.stringify(d))}))))}e.d({},{y:()=>d,k:()=>n});let d=JSON.parse(localStorage.getItem("todoItems")),n=document.querySelector(".list");d?(n.innerHTML="",d.forEach((e=>{t(e)}))):localStorage.setItem("todoItems",JSON.stringify([])),function(){const e=document.querySelector("#addNewTask"),a=document.querySelector("#addNewTaskIcon"),c=document.querySelector(".addList"),s=document.querySelector("#addTaskForm");e.addEventListener("click",(e=>{c.style.display="none",s.style.display="flex"})),a.addEventListener("click",(e=>{c.style.display="none",s.style.display="flex"}));const o=document.querySelector(".taskOkay"),i=document.querySelector(".taskCancel");o.addEventListener("click",(e=>{e.preventDefault(),function(){const e=document.querySelector("#addTaskTitle"),a=document.querySelector("#addTaskDescription"),c=document.querySelector("#addTaskDate"),s=document.querySelector(".addList"),o=document.querySelector("#addTaskForm"),i={isCompleted:!1,title:e.value,description:a.value,date:c.value};""==e.value||""==a.value||""==c.value?alert("You must fill all the blanks."):(d.push(i),localStorage.setItem("todoItems",JSON.stringify(d)),n.innerHTML="",d.forEach((e=>{t(e),l()}))),o.style.display="none",s.style.display="flex"}()})),i.addEventListener("click",(e=>{e.preventDefault(),s.style.display="none",c.style.display="flex"}))}(),l()})();