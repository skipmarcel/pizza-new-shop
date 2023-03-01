import Pizza from "./../src/pizza.js";

describe("Pizza", () => {
  let pizza;

  beforeEach(() => {
    pizza = new Pizza("large", 1);
  });

  afterEach(() => {
    pizza = null;
  });

  test("should correctly create a pizza object with 2 properties", () => {
    expect(pizza.size).toEqual("large");
    expect(pizza.toppings).toEqual(1);
  });

  test("should correctly return a base price for extra-large pizza", () => {
    pizza = new Pizza("extra-large", 1);
    expect(pizza.getBasePrice()).toEqual(10);
  });

  test("should correctly return a base price for large pizza", () => {
    pizza = new Pizza("large", 1);
    expect(pizza.getBasePrice()).toEqual(8);
  });

  test("should correctly return a base price for extra-large pizza", () => {
    pizza = new Pizza("medium", 1);
    expect(pizza.getBasePrice()).toEqual(6);
  });

  test("should correctly return a base price for extra-large pizza", () => {
    pizza = new Pizza("small", 1);
    expect(pizza.getBasePrice()).toEqual(4);
  });

  test("should correctly return a topping price for 4 topping", () => {
    pizza = new Pizza("small", 4);
    expect(pizza.getToppingsPrice()).toEqual(4);
  });

  test("should correctly return a topping price for 4 topping", () => {
    pizza = new Pizza("small", 3);
    expect(pizza.getToppingsPrice()).toEqual(3);
  });

  test("should correctly return a topping price for 4 topping", () => {
    pizza = new Pizza("small", 2);
    expect(pizza.getToppingsPrice()).toEqual(2);
  });

  test("should correctly return a topping price for 4 topping", () => {
    pizza = new Pizza("small", 1);
    expect(pizza.getToppingsPrice()).toEqual(1);
  });

  test("should correctly return a topping price for 4 topping", () => {
    pizza = new Pizza("small", 0);
    expect(pizza.getToppingsPrice()).toEqual(0);
  });

  test("should correctly calculate a price", () => {
    expect(pizza.calculatePrice()).toEqual(9);
  });
});
