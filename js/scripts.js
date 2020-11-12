//business logic
function Pizza(size, toppings, price) {
this.size = size;
this.toppings = toppings;
this.price = price;
};

//ui logic
$(document).ready(function() {
  $("form.form").submit(function(event) {
    event.preventDefault();
    const sizePick = $("#size").val();
    const toppingsPick = [];
    $(".toppings:checked").each(function(){
      toppingsPick.push($(this).val());
  });
  let pizzaObject = new Pizza(sizePick, toppingsPick, 10);
  console.log(pizzaObject);
  });
});