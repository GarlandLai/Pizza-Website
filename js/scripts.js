

function YourCart() {
  this.pizza = [];
}

function Pizza(size,toppings) {
  this.size = size;
  this.toppings = 0;
}

YourCart.prototype.addPizza = function(pizza) {
  this.pizza.push(Pizza);
}

YourCart.prototype.sizeCost = function(size) {
  if (this.size === 18) {
    this.size = 18
  } else if (this.size === 14) {
    this.size = 14
  } else {
    this.size = 10
  }
}

YourCart.prototype.toppingsCost = function(toppings) {
  if (this.toppings === 5) {
    this.toppings = 5
  } else if (this.toppings === 4) {
    this.toppings = 4
  } else if (this.toppings === 4) {
    this.toppings = 3
  } else if (this.toppings === 2) {
    this.toppings = 2
  } else if (this.toppings === 1){
    this.toppings = 1
  } else {
    this.toppings = 0
  }
}

YourCart.prototype.totalCost = function() {
    this.toppings += this.size
}

var currentCart = new YourCart();

$(document).ready(function(){
  $("#pizzaMenu").submit(function(){
  event.preventDefault();
  var sizeInput = parseInt($("#pizzaSize").val());
  var size = currentCart.sizeCost(sizeInput);

  var toppingInput = parseInt($("input:checkbox[name=numToppings]:checked").val());
  console.log(toppingInput);
  var toppings = currentCart.toppingsCost(toppingInput);
  console.log(toppings)

  currentCart.addPizza();
  console.log(currentCart);

  var pizzaPrice = currentCart.totalCost();
  console.log(pizzaPrice);

  $(".output").text("$ " + pizzaPrice + ".00");
  });
});
