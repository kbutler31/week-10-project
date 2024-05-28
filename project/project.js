
$(document).ready(function() {
  $("#addRowForm").submit(function(event) {
    event.preventDefault();
    var name = $("#nameInput").val();
    console.log("hello", name)
    var age = $("#ageInput").val();
    var newRow = "<tr><td>" + name + "</td><td>" + age + "</td></tr>";
    $("#tableBody").append(newRow);
    // Clear input fields
    $("#nameInput").val("");
    $("#ageInput").val("");
  });
});
