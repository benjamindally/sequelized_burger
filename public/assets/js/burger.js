$(function() {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = { id: $(this).attr("id") };

    $.ajax("/index", {
      type: "PUT",
      data: id,
    }).then(function(data) {
      console.log("Updated Burger");
      location.reload();
    });
  });
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
      burgerType: $("#burger_input")
        .val()
        .trim(),
      devoured: false,
    };
    $.ajax("/index", {
      type: "POST",
      data: newBurger,
    }).then(function() {
      console.log("new burger added");
      $("#burger_input").val("");
      location.reload();
    });
  });
});
