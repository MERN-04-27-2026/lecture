// named export
export const sum = (a: number, b: number) => a + b;

export function subtract(a: number, b: number) {
  return a - b;
}

const product = (a: number, b: number) => a * b;

const divide = (a: number, b: number) => a / b;

export const e = 2.718281828459;

const somethingPrivate = "private";

export { product, divide };
