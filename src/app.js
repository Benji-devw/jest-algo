export function findLongestWordLength(str) {
  let result = 0;

  for (const word of str.split(" ")) {
    result < word.length && (result = word.length);
  }
  return result;
}

export function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

export function largestOfFour(arr) {
  let result = [];

  arr.forEach((tab) => {
    let checked = 0;
    for (let j = 0; j < tab.length; j++) {
      checked = Math.max(...tab);
    }
    result.push(checked);
  });
  // console.log(result);
  return result;
}

export function confirmEnding(str, target) {
  const getLastLetters = str.slice(-target.length);
  return getLastLetters.indexOf(target) !== -1 ? true : false;
  // return str.endsWith(target) ? true : false;             // Letter contains
}

export function repeatStringNumTimes(str, num) {
  let result = "";
  let counter = 0;
  do {
    num <= 0 ? (result = "") : (result += str), counter++;
  } while (counter < num);
  // console.log(str);
  return result;
}

export function truncateString(str, num) {
  let result = "";
  str.length > num ? (result = str.slice(0, num) + "...") : (result = str);

  return result;
}

export function findModulo(arr, func) {
  let num = 0;
  for (const nbr of arr) {
    if (func(nbr)) return (num = nbr);
    else num = undefined;
  }
  return num;
}


export function booWho(bool) {
  return typeof(bool) === "boolean" ? true : false;
}



export function titleCase(str) {
  let formatResult = ""
  let words = str.toLowerCase().split(" ")

  for (let i = 0; i < words.length; i++) {
    formatResult +=  words[i].concat(" ").replace(words[i][0], words[i][0].toUpperCase())
  }
  // console.log(formatResult);
  return formatResult.trim();
}



// export function frankenSplice(arr1, arr2, n) {

//   // const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   // fruits.splice(2, 0, arr1.slice(0, 3));
//   let numberArray = 0

//   for (let i = 0; i < arr1.length; i++) {
//     // numberArray = parseInt(arr1[i])
//     numberArray = arr1.slice(0, i)
//     arr2.splice(n, 0, parseInt(numberArray))
//   }

//   console.log(arr2);
//   return test;
// }