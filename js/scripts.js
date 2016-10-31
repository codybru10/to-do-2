//Business logic
function ToDo (task,deadline) {
  debugger;
  this.task = task
  this.deadline = deadline
  }






//User Interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
debugger;
    var userTask = $("#inputTask").val();
    var userDeadline = $("#inputDeadline").val();
    var newTask = new ToDo(userTask,userDeadline);
    $("#header").show();

    $("ul#output").append('<li><span class="task" id="' + newTask.task + '">' + newTask.task + "</span></li>");

    $("input#inputTask").val("");
    $("input#inputDeadline").val("");

    $(".task").last().click(function() {
    $("#show-task").show();
    $("#show-task h2").text(newTask.task);
    $(".taskShow").text(newTask.task);
    $(".taskDeadline").text(newTask.deadline);

  });
  });
  $("button#complete").click(function(event) {
    debugger;
    event.preventDefault();
    $("#output li span#" + newTask.task).parent().remove();
  });
});
