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

  test("should correctly return a base price", () => {
    expect(pizza.getBasePrice()).toEqual(8);
  });

  test("should correctly return a topping price", () => {
    expect(pizza.getToppingsPrice()).toEqual(1);
  });

  test("should correctly calculate a price", () => {
    expect(pizza.calculatePrice()).toEqual(9);
  });
});
