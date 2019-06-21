
//stores pizzas
function YourCart() {
  this.pizza = [];
}

//pizza constructor
function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
}
//pushed the current pizze to cart
YourCart.prototype.addPizza = function(Pizza) {
  this.pizza.push(Pizza);
}

//calculate cost of pizza

Pizza.prototype.pizzaCost = function() {
  if (this.size === "Large") {
    console.log(18 + this.toppings.length)
  } else if (this.size === "Medium"){
    console.log(14 + this.toppings.length)
  } else {
    console.log(10 + this.toppings.length)
  }
}
//
//   }
//
//   if (this.toppings === 5) {
//     this.toppings = 5
//   } else if (this.toppings === 4) {
//     this.toppings = 4
//   } else if (this.toppings === 3) {
//     this.toppings = 3
//   } else if (this.toppings === 2) {
//     this.toppings = 2
//   } else if (this.toppings === 1){
//     this.toppings = 1
//   } else {
//     this.toppings = 0
//   }
// }

//
// YourCart.prototype.totalCost = function() {
//     this.toppings += this.size


var currentCart = new YourCart();
$(document).ready(function(){
  $("#pizzaMenu").submit(function(){
  event.preventDefault();
  //displays size picked
  var sizeInput = $("#pizzaSize").val();
  //displays toppings picked
  var totalPicked = []
  var toppingInput =
    $("input:checkbox[name=numToppings]:checked").each(function(){
      var checked = $(this).val();
      totalPicked.push(checked);
    });
    console.log(totalPicked);

  var newPizza = new Pizza(sizeInput,totalPicked);
  currentCart.addPizza(newPizza);
  // console.log(currentCart);

  var totalCost = currentCart.pizza[0].pizzaCost();
  // var pizzaPrice = currentCart.totalCost();
  // // console.log(pizzaPrice);

  // $(".output").text("$ " + pizzaPrice + ".00");
  console.log(currentCart.pizza[0].toppings.length);
  });
});
