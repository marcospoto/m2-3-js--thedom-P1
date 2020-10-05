// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([2, 6, 8, 2, 3])).toBe(21);
  expect(sum([2, "hello", 8, 3])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
