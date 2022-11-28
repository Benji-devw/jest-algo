

const FORBIDDENWORDS = ["truffe", "truffes", "boulés", "cons"];

function containsForbiddenWords(message) {
  const messageWords = message.split(" ");
  let result;
  let detectedForbiddenWords = [];
  // console.log('>>>>>>>', detectedForbiddenWords);

  for (let index = 0; index < messageWords.length; index++) {
    const word = messageWords[index].toLowerCase();
    // if (FORBIDDENWORDS.includes(word)) {
    if (FORBIDDENWORDS.indexOf(word) !== -1)  detectedForbiddenWords.push(word);
  }

  if (detectedForbiddenWords.length > 0) result = true;
  else result = false;

  return result;
}




function removeForbiddenWords(message) {
  const hasForbiddenWords = containsForbiddenWords(message);

  if (!hasForbiddenWords) return message;

  const words = message.split(" ");
  const result = words.map((x) => {
    if (FORBIDDENWORDS.includes(x.toLowerCase())) return "xxxx";
    else return x;
  });
  // console.log('>>>>>>>>>', result.join(' ') );
  return result.join(" ");
}


module.exports = { containsForbiddenWords, removeForbiddenWords };
