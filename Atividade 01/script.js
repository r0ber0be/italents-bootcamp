import { Task, todoList } from "./task.js";
import { returnList } from "./list.js";

var button = document.getElementById('add-button')
button.addEventListener('click', (e) => {
  e.preventDefault()
  const taskInput = document.getElementById('new-task').value
  const dateInput = document.getElementById('task-date').value

  taskInput == '' || dateInput == '' 
    ? alert('Insira alguma coisa')
    : createNewTask(taskInput, dateInput)
  }
)

function createNewTask(taskInput, dateInput) {
  let canAdd = taskExists(taskInput)
  if(canAdd) {
    alert('Já existe uma tarefa com este nome')
    throw new Error('Já existe uma tarefa com este nome')
  }
    const newTask = new Task(taskInput, dateInput)
    addToList(newTask)
  
}

function taskExists(taskInput) {
  let result = todoList.find(task => { 
    if(task.taskTitle == taskInput) {
      return true
    }
  })
  return result;
}
  
function addToList(newTask) {
  todoList.push(newTask)
  document.getElementById('new-task').value = ''
  returnList()
}

export function removeFromList(index) {
  todoList.splice(index, 1)
  returnList()
}

export function updateTask(index) {
  const task = todoList[index]
  const newTitle = prompt("Altere o título:", task.taskTitle)

  newTitle == '' ? alert('Insira alguma coisa') : task.taskTitle = newTitle
  returnList();
}
