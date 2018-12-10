$(function() {
  $(".create-surgeon").on("submit", function(event) {
    event.preventDefault();
    console.log("I've been clicked");

    newSurgeon = {
      surgeonName: $("#surgeonName").val().trim(),
      surgeonGender: $("#surgeonGender").val().trim(),
      surgeonSpecialty: $("#surgeonSpecialty").val().trim(),
      surgeonPhone: $("#surgeonPhone").val().trim(),
      surgeonEmail: $("#surgeonEmail").val().trim(), 
      surgeonGownSize: $("#surgeonGownSize").val().trim(),  
      surgeonGloveSize: $("#surgeonGloveSize").val().trim(),  
      surgeonGeneralNotes: $("#surgeonGeneralNotes").val().trim()
    };
    $.ajax("/api/surgeons", {
      type: "POST",
      data: newSurgeon
    }).then(function() {
      location.reload();
    });
  });
});