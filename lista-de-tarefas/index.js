
const addButton = document.querySelector('.add-button');
const tasksContainer = document.querySelector('.tasks');
const taskNameInput = document.querySelector('input[placeholder="Nome da tarefa"]');
const tagInput = document.querySelector('input[placeholder="Etiqueta"]');
const footer = document.querySelector('.footer');

let completedTasks = 0;


function updateCompletedCounter() {
    footer.textContent = `${completedTasks} tarefa${completedTasks !== 1 ? 's' : ''} concluída${completedTasks !== 1 ? 's' : ''}`;
}


function concludeTask(taskElement, taskSpan) {
    if (!taskSpan.classList.contains('completed')) {
        taskSpan.classList.add('completed');

      
        const button = taskElement.querySelector('.conclude-button');
        if (button) {
            button.remove();
        }

       
        const checkCircle = document.createElement('div');
        checkCircle.classList.add('check-circle');


        taskElement.appendChild(checkCircle);

     
        completedTasks++;
        updateCompletedCounter();
    }
}


addButton.addEventListener('click', () => {
    const taskName = taskNameInput.value.trim();
    const tag = tagInput.value.trim();

    if (taskName === '') {
        alert('Por favor, insira o nome da tarefa.');
        return;
    }

    const currentDate = new Date().toLocaleDateString('pt-BR');
    
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    taskElement.innerHTML = `
        <div>
            <span>${taskName}</span>
            <span class="tag">${tag}</span>
            <small>Criado em: ${currentDate}</small>
        </div>
        <button class="conclude-button">Concluir</button>
    `;

    const concludeButton = taskElement.querySelector('.conclude-button');
    const taskSpan = taskElement.querySelector('span');
    
    concludeButton.addEventListener('click', () => {
        concludeTask(taskElement, taskSpan);
    });

    tasksContainer.appendChild(taskElement);

    taskNameInput.value = '';
    tagInput.value = '';
});


document.addEventListener('DOMContentLoaded', () => {
    const completedElements = document.querySelectorAll('.completed');
    completedTasks = completedElements.length;
    updateCompletedCounter();
});let completedCount = 0;

function addTask() {
    let taskName = document.getElementById("taskName").value;
    let taskTag = document.getElementById("taskTag").value;
    if (taskName === "") return;
    
    let taskList = document.getElementById("taskList");
    let taskItem = document.createElement("div");
    taskItem.classList.add("task");
    
    let taskText = document.createElement("span");
    taskText.textContent = taskName;
    
    let taskTagSpan = document.createElement("span");
    taskTagSpan.classList.add("task-tag");
    taskTagSpan.textContent = taskTag;
    
    let completeButton = document.createElement("button");
    completeButton.textContent = "Concluir";
    completeButton.onclick = function() {
        if (!taskText.classList.contains("completed")) {
            taskText.classList.add("completed");
            completedCount++;
        }
        updateTaskCount();
    };
    
    taskItem.appendChild(taskTagSpan);
    taskItem.appendChild(taskText);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);
    
    document.getElementById("taskName").value = "";
    document.getElementById("taskTag").value = "";
}

function updateTaskCount() {
    document.getElementById("taskCount").textContent = `${completedCount} tarefas concluídas`;
}
