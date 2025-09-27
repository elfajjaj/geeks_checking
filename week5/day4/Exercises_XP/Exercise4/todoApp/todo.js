
export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
    console.log(`➕ Task added: "${task}"`);
  }

  completeTask(taskName) {
    const task = this.tasks.find((t) => t.task === taskName);
    if (task) {
      task.completed = true;
      console.log(`✅ Task completed: "${taskName}"`);
    } else {
      console.log(`❌ Task not found: "${taskName}"`);
    }
  }

  listTasks() {
    console.log("\n📋 Todo List:");
    this.tasks.forEach((t, index) => {
      const status = t.completed ? "✔ Done" : "❌ Pending";
      console.log(`${index + 1}. ${t.task} - ${status}`);
    });
  }
}



