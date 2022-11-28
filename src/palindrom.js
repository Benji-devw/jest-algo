const sentence = () => {
  const sent = "Hello World";
  return sent;
};


function isPalindrom(word) {
  // var regex = /[a-zA-Z0-9]/g; // only count letters and numbers
  const reverseWord = word.split("").reverse().join("");
  // const reverseWord = word.toLowerCase().replace(/,/g, '').replace(/ /g, '').split('').reverse().join('')
  const result = word === reverseWord;
  return result;
}


module.exports = { isPalindrom, sentence, };
