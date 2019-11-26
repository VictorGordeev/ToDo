
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

  checkBox.type = "checkbox";         // Each element from the list needs to be modified
  editInput.type = "text";            //
  editButton.innerText = "Edit";      //
  editButton.className = "edit";      //
  deleteButton.innerText = "Delete";  //
  deleteButton.className = "delete";  //
  label.innerText = taskString;       //

  listItem.appendChild(checkBox);      // Each element from the list needs to be appended
  listItem.appendChild(label);         //
  listItem.appendChild(editInput);     //
  listItem.appendChild(editButton);    //
  listItem.appendChild(deleteButton);  //

  return listItem;
};

var addTask = function() {                            // Add a new task
  var listItemName = taskInput.value || "New Item";   //Here we are hold the current value or provide the default one
  var listItem = createNewTaskElement(listItemName);  // Create a new list item with the text from #new task
  incompleteTasksHolder.appendChild(listItem);        // Append listItem to incompleteTasksHolder
  bindTaskEvents(listItem, taskCompleted);            // We bind it to the incomplete holder
  taskInput.value = "";                               // Resets the field
};

var editTask = function() {                                     // Edit an existing task
  var listItem = this.parentNode;                               // Create List Item
  var editInput = listItem.querySelector("input[type=text");    // Input (text)
  var label = listItem.querySelector("label");                  // Label
  var button = listItem.getElementsByTagName("button")[0];      // Button

  var containsClass = listItem.classList.contains("editMode");  // We check for .editMode and assign it a variable
  if(containsClass) {                                           // Switch from .editMode
      label.innerText = editInput.value;                        // Label text become the input's value
      button.innerText = "Edit";                                // Buttons name modified to Edit
  } else {                                                      // Switch to .editMode
     editInput.value = label.innerText;                         // Input value becomes the label's text
     button.innerText = "Save";                                 // Button name modified to Save
  }
    listItem.classList.toggle("editMode");                      // Toggle .editMode on the parent
};

