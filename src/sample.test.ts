import { getFirstElement } from './sample';

test("always passes", () => {
  expect(true).toBe(true);
});

test("mutateNumber function", () => {
  const numbers = [1, 5, 10, 15, 20];
  const mutated = numbers.map((num) => (num * 2) / 2);
  expect(mutated).toEqual([1, 5, 10, 15, 20]);
});
