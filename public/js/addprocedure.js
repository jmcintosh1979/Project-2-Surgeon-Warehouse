$(function() {
  $(".create-procedure").on("submit", function(event) {
    event.preventDefault();
    console.log("I've been clicked");

    newProcedure = {
      procedureName: $("#procedureName").val().trim(),
      procedureTime: $("#procedureTime").val().trim(),
      procedureCptId: $("#procedureCptId").val().trim(),
      procedurePosition: $("#procedurePosition").val().trim(),
      procedureRequiredPersonnel: $("#procedureRequiredPersonnel").val().trim(),  
    };
    $.ajax("/api/procedure", {
      type: "POST",
      data: newProcedure
    }).then(function() {
      location.reload();
    });
  });
});