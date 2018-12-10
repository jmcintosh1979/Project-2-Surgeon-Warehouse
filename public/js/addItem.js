$(function() {
  $(".create-item").on("submit", function(event) {
    event.preventDefault();
    console.log("I've been clicked");

    newItem = {
      itemName: $("#SurgicalItemDescription").val().trim(),
      itemCatalog: $("#SurgicalItemCatalogNumber").val().trim(),
      itemCategory: $("#SurgicalItemCategory").val().trim(),
      itemCpu: $("#SurgicalItemCostPerUnit").val().trim()
    };
    $.ajax("/api/items", {
      type: "POST",
      data: newItem
    }).then(function() {
      location.reload();
    });
  });
});