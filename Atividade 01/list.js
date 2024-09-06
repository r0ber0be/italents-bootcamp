import { removeFromList, updateTask } from "./script.js"
import { todoList } from "./task.js"

export function returnList() {
  const taskList = document.getElementById('task-list')
  taskList.innerHTML = ''

  todoList.forEach((task, index) => {
    const { taskTitle, taskDate, isDone } = task

    taskList.insertAdjacentHTML('beforeend', 
      `<li id="${index}">
        <input id="is-done" type="checkbox" name="is-done" ${isDone ? 'checked' : '' }>
        ${taskTitle} - ${taskDate} 
        <button id="remove-task-${index}">Remover</button>
        <button id="edit-task-${index}">Editar</button>
      </li>`
    )

    document.getElementById(`remove-task-${index}`).addEventListener('click', () => {
      removeFromList(index)
    })

    document.getElementById(`edit-task-${index}`).addEventListener('click', () => {
      updateTask(index)
    })
  })

}
