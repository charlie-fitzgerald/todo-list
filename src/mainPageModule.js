import { ToDoFactory } from './todoFactoryModule';
import { createProject } from './createProjectModule';

const mainPageLoad = () => {
    createProject('default');
    const defaultList = document.querySelector("#default-to-do-list")
    const defaultToDo = ToDoFactory("default title", "first to-do", new Date(), false);
    const listItem = document.createElement("li");
    listItem.innerHTML = `<h2>${defaultToDo.title}</h2> <p>${defaultToDo.description}</p> <p>Due: ${defaultToDo.dueDate}</p>`;

    defaultList.appendChild(listItem);
    
}

export { mainPageLoad };