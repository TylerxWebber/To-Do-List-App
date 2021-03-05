document.addEventListener('DOMContentLoaded', function() {
    var todoList = document.getElementById("todo-list");
    var todoInput = document.getElementById("todo-input");
    var addButton = document.getElementById("add-button");
    var todoCount = 0;
    var addTodo = function() {
      var todoCol = document.createElement("div");
      todoCol.setAttribute("class", "col-xs-12 todo");
      var todoRow = document.createElement('div');
      todoRow.setAttribute("class", "row");
      var h5 = document.createElement("h5");
      h5.setAttribute("class", "col-xs-8");
      h5.innerHTML = todoInput.value;
      todoRow.appendChild(h5);
      todoCol.appendChild(todoRow);
      todoList.appendChild(todoCol);
    };

    addButton.addEventListener("click", function() {
      if (todoCount < 10 && todoInput.value !== "") {
        addTodo();
        todoCount++;
        todoInput.value = "";   
      }
    })


  });