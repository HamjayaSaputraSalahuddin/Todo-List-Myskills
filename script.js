var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTodoItem);
function addTodoItem() {
    alert("Add button clicked!");
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var todoItem = document.createElement("li");
    var todoText = document.createTextNode(itemText);

    todoItem.appendChild(todoText);

    if(completed) {
        todoItem.classList.add("completed");
    }

    toDoList.appendChild(todoItem)
    todoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addTodoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false)
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove()
    }
}

var myArray = [];
myArray.push("Something to store");
myArray.push("Something else to store");
alert(myArray[0]);

var toDoInfo =  {
    "task": "Thing I need to do",
    "completed": false
};

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };
        toDos.push(toDoInfo);
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("Masuk kesini yah")
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();