import { todoItems } from ".";
export function deleteTodo(){
    let dltIcons = document.querySelectorAll(".taskDeleteIcon")
    dltIcons.forEach(icon => icon.addEventListener("click", (e) => {
       let listItem = e.target.parentElement
       listItem.remove();
       let listItemText = listItem.getElementsByTagName("div")[1].innerHTML;
       todoItems = todoItems.filter(td => td.title != listItemText);
       localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }))
}
