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
    const edit_button = document.querySelector("#new-task-button");

    let count = 0;

    let taskList = [];

    from.addEventListener('submit', (e) => {
        e.preventDefault();
        
         if(!(inputName.value&&inputDescription.value&&inputFinalDate.value&&inputPriority.value&&inputCategory.value&&inputStatus.value)) {
            alert("Please fill out the task");
            return;
        };
        
        let child = list_el.lastElementChild;

        while (child) {
            list_el.removeChild(child);
            child = list_el.lastElementChild;
        }
        
        count++;

        let task = [];

        task[0] = inputName.value;
        task[1] = inputDescription.value;
        task[2] = inputFinalDate.value;
        task[3] = inputPriority.value;
        task[4] = inputCategory.value;
        task[5] = inputStatus.value;
        task[6] = count;

        taskList.push(task);

        let iteration = () => {

            for (let i = 0; i < taskList.length; i++) {
    
                const task_el = document.createElement("div");
                task_el.classList.add("task");
        
                const task_content_el = document.createElement("div");
                task_content_el.classList.add("content");
                task_content_el.innerText = ("Número: " + taskList[i][6] + "\n Tarefa: " + taskList[i][0] + "\n Descrição: " + taskList[i][1] + "\n Data Final: " + taskList[i][2] + "\n Prioridade: " + taskList[i][3] + "\n Categoria: " + taskList[i][4] + "\n Status: " + taskList[i][5]);
        
                task_el.appendChild(task_content_el);
        
                const task_actions_el = document.createElement("div");
                task_actions_el.classList.add("actions");
        
                const task_delete_el = document.createElement("button");
                task_delete_el.classList.add("delete");
                task_delete_el.id = taskList[i][6];
                task_delete_el.innerHTML = "Delete";
        
                task_actions_el.appendChild(task_delete_el);
                
                task_el.appendChild(task_actions_el);
        
                list_el.appendChild(task_el);
    
                task_delete_el.addEventListener('click', (a) => {

                    let t = a.target;

                    let taskId = t.id - 1

                    taskList.splice(taskId, 1);

                    let child = list_el.lastElementChild;
                    while (child) {
                        list_el.removeChild(child);
                        child = list_el.lastElementChild;
                    };

                    taskList.forEach(b => {
                        if (b[6] > t.id) b[6]--  
                    });

                    count--;

                    iteration();
                });
            };
        };

        iteration();

        inputName.value = "";
        inputDescription.value = "";
        inputFinalDate.value = "";
        inputPriority.value = "";
        inputCategory.value = "";
        inputStatus.value = "";
    });

    edit_button.addEventListener('click', (e) => {

        if(!(inputName.value||inputDescription.value||inputFinalDate.value||inputPriority.value||inputCategory.value||inputStatus.value)) {
            alert("Please fill out the task");
            return;
        }

        if(!inputId.value) {
            alert("Preencher Número da tarefa a ser Editada");
            return;
        }

        taskList.forEach(e => {
            if (e[6] == inputId.value) {
                e[0] = inputName.value;
                e[1] = inputDescription.value;
                e[2] = inputFinalDate.value;
                e[3] = inputPriority.value;
                e[4] = inputCategory.value;
                e[5] = inputStatus.value;
            }
        });

        let child = list_el.lastElementChild;
        while (child) {
            list_el.removeChild(child);
            child = list_el.lastElementChild;
        };

        let iteration = () => {

            for (let i = 0; i < taskList.length; i++) {
    
                const task_el = document.createElement("div");
                task_el.classList.add("task");
        
                const task_content_el = document.createElement("div");
                task_content_el.classList.add("content");
                task_content_el.innerText = ("Número: " + taskList[i][6] + "\n Tarefa: " + taskList[i][0] + "\n Descrição: " + taskList[i][1] + "\n Data Final: " + taskList[i][2] + "\n Prioridade: " + taskList[i][3] + "\n Categoria: " + taskList[i][4] + "\n Status: " + taskList[i][5]);
        
                task_el.appendChild(task_content_el);
        
                const task_actions_el = document.createElement("div");
                task_actions_el.classList.add("actions");
        
                const task_delete_el = document.createElement("button");
                task_delete_el.classList.add("delete");
                task_delete_el.id = taskList[i][6];
                task_delete_el.innerHTML = "Delete";
        
                task_actions_el.appendChild(task_delete_el);
                
                task_el.appendChild(task_actions_el);
        
                list_el.appendChild(task_el);
    
                task_delete_el.addEventListener('click', (a) => {

                    let t = a.target;

                    let taskId = t.id - 1

                    taskList.splice(taskId, 1);

                    let child = list_el.lastElementChild;
                    while (child) {
                        list_el.removeChild(child);
                        child = list_el.lastElementChild;
                    };

                    taskList.forEach(b => {
                        if (b[6] > t.id) b[6]--  
                    });

                    count--;

                    iteration();
                });
            };
        };


        iteration();

        inputName.value = "";
        inputDescription.value = "";
        inputFinalDate.value = "";
        inputPriority.value = "";
        inputCategory.value = "";
        inputStatus.value = "";
        inputId.value = "";

    });
})
