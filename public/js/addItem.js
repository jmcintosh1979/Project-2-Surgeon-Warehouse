$(function() {
  $(".create-item").on("submit", function(event) {
    event.preventDefault();
    console.log("I've been clicked");

    newItem = {
      itemName: $("#itemName").val().trim(),
      itemCatalog: $("#itemCatalog").val().trim(),
      itemCategory: $("#itemCategory").val().trim(),
      itemCpu: $("#itemCpu").val().trim()
    };
    $.ajax("/api/items", {
      type: "POST",
      data: newItem
    }).then(function() {
      location.reload();
    });
  });
});