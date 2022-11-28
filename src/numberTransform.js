export function decimalToRoman(num) {

  const decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  const roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  let newVal = "";

  for (let i = 0; i < decimal.length; i++) {
    while (num % decimal[i] < num) {
      newVal += roman[i]
      num -= decimal[i]
    }
  }
  // console.log(newVal)
  return newVal.toString()
}







export function transformToRot13(str) {

  const strFormat = str.split('')
  let result = ""

  for (const char of strFormat) {
    const code = char.charCodeAt(char)

    code < 65 || code > 90
    ? result += String.fromCharCode(code)
    : code < 78
      ? result += String.fromCharCode(code + 13)
      : result += String.fromCharCode(code - 13)
  }
  
  // console.log(result);
  return result
}