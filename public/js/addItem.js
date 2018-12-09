//ITEMS VAR
var $SurgicalItemDescription = $("#SurgicalItemDescription");
var $SurgicalItemCatalogNumber = $("#SurgicalItemCatalogNumber");
var $submitItemBtn = $("#itemSubmit");

//ITEMS EVENT LISTENERS
$submitItemBtn.on("click", handleItemFormSubmit);

// The API object contains methods for each kind of request we'll make
var API = {
  saveItem: function(Item) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/items",
      data: JSON.stringify(Item)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  },
  updateExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "UPDATE"
    });
  },
  getSurgeons: function() {
    return $.ajax({
      url: "/api/surgeons",
      type: "GET"
    });
  }
};


// Save the new example to the db and refresh the list
var handleItemFormSubmit = function(event) {
    event.preventDefault();
  
    var item = {
        SurgicalItemDescription: $SurgicalItemDescription.val().trim(),
        SurgicalItemCatalogNumber: $SurgicalItemCatalogNumber.val().trim()


    };
  
    if (!(item.SurgicalItemDescription && item.SurgicalItemCatalogNumber)) {
      alert("Please enter all data!");
      return;
    }
  
    API.saveItem(item).then(function() {
    });
  
    $SurgicalItemDescription.val("");
    $SurgicalItemCatalogNumber.val("");
  };