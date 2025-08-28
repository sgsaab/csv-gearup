import { getFirstElement } from './sample';

test("always passes", () => {
  expect(true).toBe(true);
});

test("mutateNumber function", () => {
  const numbers = [1, 5, 10, 15, 20];
  const mutated = numbers.map((num) => (num * 2) / 2);
  expect(mutated).toEqual([1, 5, 10, 15, 20]);
});

test("getFirstElement with numbers", () => {
  const numbers = [1, 2, 3];
  expect(getFirstElement(numbers)).toBe(1);
});

test("getFirstElement with strings", () => {
  const strings = ["a", "b", "c"];
  expect(getFirstElement(strings)).toBe("a");
});
