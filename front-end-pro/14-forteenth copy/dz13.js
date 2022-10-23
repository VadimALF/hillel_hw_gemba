'use strict'

function Hamburger(humb) {
  this.price = humb.price
  this.calories = humb.calories

  this.addTopping = function (topping) {
    this.price += topping.price
    this.calories += topping.calories
  }
  
  this.getPrice = function () {return this.price}
  this.getCalories = function () {return this.calories}
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
  }

Hamburger.SIZE_MEDIUM = {
    price: 75,
    calories: 30,
  }

Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40,
}

Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20,
}

Hamburger.TOPPING_SALAD = {
    price: 20,
    calories: 5,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
}

Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5,
}

Hamburger.TOPPING_SPICE = {
    price: 15,
    calories: 0,
}

const hamburgerSmall = new Hamburger(Hamburger.SIZE_SMALL)
const hamburgerLarge = new Hamburger(Hamburger.SIZE_LARGE)

hamburgerSmall.addTopping(Hamburger.TOPPING_MAYO)
hamburgerSmall.addTopping(Hamburger.TOPPING_MAYO)
hamburgerSmall.addTopping(Hamburger.TOPPING_CHEESE)
hamburgerLarge.addTopping(Hamburger.TOPPING_SALAD)
hamburgerLarge.addTopping(Hamburger.TOPPING_POTATO)

console.log("Price SMALL with sauce: " + hamburgerSmall.getPrice());
console.log("Calories SMALL with sauce: " + hamburgerSmall.getCalories());
console.log("--------------")
console.log("Price LARGE with sauce: " + hamburgerLarge.getPrice());
console.log("Calories LARGE with sauce: " + hamburgerLarge.getCalories());