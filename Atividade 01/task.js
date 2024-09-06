export class Task {
  constructor(taskTitle, taskDate) {
    this.taskTitle = taskTitle,
    this.taskDate = taskDate,
    this.isDone = false
  }
}

export let todoList = []