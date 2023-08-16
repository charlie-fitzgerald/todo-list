const createProject = name => {
    const content = document.querySelector("#content");
    const project = document.createElement("div");
    project.className = "project";
    project.id = `${name}`;
    project.innerHTML = `<h1>${name}</h1>
                         <ul id=${name}-to-do-list></ul>
                         <button class='new-to-do-btn'>Make New To-Do</button>`;
    
    content.appendChild(project);
}

export { createProject };