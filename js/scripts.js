//business logic
function Pizza(size, toppings, price) {
this.size = size;
this.toppings = toppings;
this.price = price;
};

Pizza.prototype.toppingsPrice = function() {
  this.price = ((this.toppings.length) + this.price);
};

Pizza.prototype.sizePrice = function() {

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
  
  pizzaObject.toppingsPrice();
  console.log("based on the toppings your price is " + pizzaObject.price)
});
});