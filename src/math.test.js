const math = require("./math");

// const actual = math.sum(2, 3);
// const expected = 5;

// if (actual !== expected) {
//   throw new Error(`Expected ${expected}, but got ${actual}!`);
// }
// console.log("All tests have passed!");

// simple way to do it
test("add numbers together with sum()", () => {
  expect(math.sum(2, 3)).toBe(5);
});

// Also there is another way to do that

// describe("unit tests for our math functions", () => {
//   it("add numbers together with sum()", () => {
//     expect(math.sum(2, 3)).toBe(5);
//   });
// });
