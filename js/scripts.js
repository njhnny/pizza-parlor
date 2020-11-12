//business logic
function Pizza(size, toppings, price) {
this.size = size;
this.toppings = toppings;
this.price = price;
};
//variables to adjust base cost and price per topping
baseCost = 10;
perTopping = 1;
//add price of toppings to total
Pizza.prototype.toppingsPrice = function() {
  this.price = (((this.toppings.length) * perTopping) + this.price);
};
//modify price by pizza size
Pizza.prototype.sizePrice = function() {
  if (this.size === "medium") {
    this.price = (2 + this.price);
  } else if (this.size === "large") {
    this.price = (5 + this.price);
  };
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
  let pizzaObject = new Pizza(sizePick, toppingsPick, baseCost);
  console.log(pizzaObject);
  pizzaObject.toppingsPrice();
  pizzaObject.sizePrice();
  $("p").text("based on the toppings and size your price is $" + pizzaObject.price);
});
});