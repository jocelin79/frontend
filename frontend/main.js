window.addEventListener('load', () => {
    const from = document.querySelector("#new-task-form");
    const inputName = document.querySelector("#new-task-input-name");
    const inputDescription= document.querySelector("#new-task-input-description");
    const inputFinalDate = document.querySelector("#new-task-input-finalDate");
    const inputPriority = document.querySelector("#new-task-input-priority");
    const inputCategory = document.querySelector("#new-task-input-category");
    const inputStatus = document.querySelector("#new-task-input-status");
    const inputId = document.querySelector("#new-task-input-id");
    const list_el = document.querySelector("#tasks");

    from.addEventListener('submit', (e) => {
        e.preventDefault();

        let task = [];

        task[0] = inputName.value;
        task[1] = inputDescription.value;
        task[2] = inputFinalDate.value;
        task[3] = inputPriority.value;
        task[4] = inputCategory.valeu;
        task[5] = inputStatus.value;


        if(!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);
    })
})