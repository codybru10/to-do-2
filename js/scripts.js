//Business logic
function ToDo (task) {
  debugger;
  this.task = task
}





//User Interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
debugger;
    var userTask = $("#inputTask").val();
    var newTask = new ToDo(userTask);

    $("ul#output").append("<li><span class='task'>" + newTask.task + "</span></li>");

    $("input#inputTask").val("");
  });
});
