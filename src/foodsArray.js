const removeSNames = (names) => {

  // let expectedOutput = names;
  //   names.forEach(element => {
  //     if (element.toLowerCase().charAt(0) === "s") {
  //         const index = expectedOutput.indexOf(element)
  //         expectedOutput.splice(index, 1)
  //     }
  //   });
  // return expectedOutput
 
  return names.filter(name => name.toLowerCase().charAt(0) !== "s")
}

module.exports = removeSNames





// const removeSnames = (names) => {

//   let expectedOutput = names;
//   const test = ['Apple', "Strawberry", "PineApple"]

//   test.forEach(element => {

//     if (element.charAt(0) === "S") {
//       const index = test.indexOf(element)
//       console.log(index);
//       test.splice(index, 1)
//     }
    
//   });
//   return test
// }
// console.log(removeSnames())
// module.exports = removeSnames