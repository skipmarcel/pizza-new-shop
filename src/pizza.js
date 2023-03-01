export default function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getBasePrice = function () {
  if (this.size === "extra-large") {
    return 10;
  } else if (this.size === "large") {
    return 8;
  } else if (this.size === "medium") {
    return 6;
  } else {
    return 4;
  }
};

Pizza.prototype.getToppingsPrice = function () {
  if (this.toppings === 4) {
    return 4;
  } else if (this.toppings === 3) {
    return 3;
  } else if (this.toppings === 2) {
    return 2;
  } else if (this.toppings === 1) {
    return 1;
  } else {
    return 0;
  }
};

Pizza.prototype.calculatePrice = function () {
  const basePrice = this.getBasePrice();
  const toppingsPrice = this.getToppingsPrice();
  return basePrice + toppingsPrice;
};
