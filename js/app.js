
var taskInput = document.getElementById("new task");                      // New task
var addButton = document.getElementsByTagName("button")[0];               // First button
var incompleteTasksHolder = document.getElementById("incomplete tasks");  // Incomplete tasks
var completedTasksHolder = document.getElementById("completed tasks");    // Completed tasks

var createNewTaskElement = function(taskString) {       // New Task List Item
  var listItem = document.createElement("li");          // Create List Item
  var checkBox = document.createElement("input");       // Input (checkbox)
  var label = document.createElement("label");          // Label
  var editInput = document.createElement("input");      // Input (text)
  var editButton = document.createElement("button");    // Button.edit
  var deleteButton = document.createElement("button");  // Button.delete

 }