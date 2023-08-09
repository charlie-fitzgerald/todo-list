const mainPageLoad = () => {
    const content = document.querySelector("#content");

    const todoList = document.createElement("div");
    todoList.innerHTML = "<ul><li>Do This</li></ul>"
    content.appendChild(todoList);
}

export { mainPageLoad };