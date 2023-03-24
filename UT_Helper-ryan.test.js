const MathHelper = require('./Helper-ryan');

describe('MathHelper', () => {
  test('add function should return the sum of two numbers', () => {
    expect(MathHelper.add(2, 3)).toBe(5);
  });

  test('subtract function should return the difference between two numbers', () => {
    expect(MathHelper.subtract(5, 2)).toBe(3);
  });

  test('multiply function should return the product of two numbers', () => {
    expect(MathHelper.multiply(2, 4)).toBe(8);
  });

  test('divide function should return the quotient of two numbers', () => {
    expect(MathHelper.divide(10, 5)).toBe(2);
  });

  test('divide function should throw error when the second number is zero', () => {
    expect(() => MathHelper.divide(10, 0)).toThrow('division by zero');
  });
});
