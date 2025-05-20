// https://leetcode.com/problems/add-binary/

function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    const sum = (parseInt(a[i--] || "0") + parseInt(b[j--] || "0") + carry);
    result = (sum % 2).toString() + result;
    carry = Math.floor(sum / 2);
  }

  return result;
}
