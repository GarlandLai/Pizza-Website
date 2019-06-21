

function YourCart() {
  this.pizza = [];
}

function Pizza(size,toppings) {
  this.size = size;
  this.toppings = topping;
}

YourCart.prototype.addPizza = function(pizza) {
  this.pizza.push(Pizza);
}

YourCart.prototype.sizeCost = function(size) {
  if (this.size === large) {
    this.size = 18
  } else if (this.size === medium) {
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
