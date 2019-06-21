function YourCart() {
  this.pizza = [];
}
function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
}
YourCart.prototype.addPizza = function(Pizza) {
  this.pizza.push(Pizza);
}
Pizza.prototype.pizzaCost = function() {
  if (this.size === "Large") {
    return (18 + this.toppings.length)
  } else if (this.size === "Medium"){
    return (14 + this.toppings.length)
  } else {
    return (10 + this.toppings.length)
  }
}
var currentCart = new YourCart();
$(document).ready(function(){
  $("#pizzaMenu").submit(function(){
  event.preventDefault();
  var sizeInput = $("#pizzaSize").val();
  var totalPicked = []
  var toppingInput =
    $("input:checkbox[name=numToppings]:checked").each(function(){
      var checked = $(this).val();
      totalPicked.push(checked);
    });
  var newPizza = new Pizza(sizeInput,totalPicked);
  currentCart.addPizza(newPizza);
  var totalCost = currentCart.pizza[0].pizzaCost();
  $(".output").text('Your total cost is $' + totalCost + ".00!");
  });
});
