export function multiply(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  return numA * numB;
}

export function addition(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  return numA + numB;
}

export function subtraction(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  return numA - numB;
}

export function division(a: string | number, b: string | number): number {
  const numA = parseFloat(a.toString());
  const numB = parseFloat(b.toString());
  if (numB === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return numA / numB;
}
