export function findLongestWordLength(str) {
  let result = 0;
  let tete = null;

  for (const word of str.split(" ")) {
    if (result < word.length) {
      result = word.length;
      tete = word;
    }
  }
  // console.log(tete)
  return tete.length;
};

export function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
};

export function largestOfFour(arr) {
  let result = [];

  arr.forEach((tab) => {
    let counter = 0;
    for (let j = 0; j < tab.length; j++) {
      counter = Math.max(...tab);
    }
    result.push(counter);
  });
  // console.log(result);
  return result;
};


export function confirmEnding(str, target) {
  const getLastLetters = str.slice(-target.length)
  return getLastLetters.indexOf(target) !== -1 ? true : false
  // return str.endsWith(target) ? true : false;             // Letter contains
};


// function repeatStringNumTimes(str, num) {
//   return str;
// }