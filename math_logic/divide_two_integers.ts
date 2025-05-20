// https://leetcode.com/problems/divide-two-integers/

function divide(dividend: number, divisor: number): number {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;
  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);
  let result = 0;

  while (dvd >= dvs) {
    let temp = dvs, multiple = 1;
    while (dvd >= (temp << 1)) {
      temp <<= 1;
      multiple <<= 1;
    }
    dvd -= temp;
    result += multiple;
  }

  return sign * result;
}
