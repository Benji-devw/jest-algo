

function Array2D() {

  const N = 5
  const L = 3
  const cells = [
    'X', 'X', 'X', 'X', 'X', 
    'X', 'C', 'X', 'X', 'X', 
    'X', 'X', 'X', 'X', 'X', 
    'X', 'X', 'X', 'X', 'X', 
    'X', 'X', 'X', 'X', 'X'
]

let arr = []

// let maxSum = 25

  // for (let i = 0; i < N; i++) {
  //   for (let j = 0; j < N; j++) {
  //     let top = arr[i][j] + arr[i][j+1] + arr[i][j+2]
  //     let mid = arr[i+1][j+1]
  //     let bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
  //     let currentSom = top+mid+bot
  //     maxSum = Math.max(maxSum, currentSom)
  //   }
  // }
  // arr = maxSum



for (let i = 0; i < cells.length; i++) {
  arr[i] = [cells[i]]
  for (let j = 0; j < arr[i].length; j++) {
    // console.log(cells[i]);
    
    arr[i] = cells[i] === "C" ? L
    : 0

      // cells[i] === "C" ? L
      // : arr[i] > L ? L-1 : 0
    ;

    // maxSum = Math.max(25, currentSum)
  }
}


  for (let row = 0; row < cells.length; row++) {
    arr[row] = [cells[row]]
    for (let col = 0; col < arr[row].length; col++) {
      arr[row] = cells[row] === "C" ? 3 : 0

      // console.log('log>>>>>', arr[row]);
      // arr[row][col] = 
      // col > L ? 0
      // : row > L ? 0
      //   : col < L ? 1 
      //   : row < L ? 1
      //     : col < L && 2
          
          // : col === L ? 3 : 8
        // : row > L ? L-3
        //   : col < L ? 1
        //     : row < L ? 1 
        //       : 0
    }
  }

  
  // console.log('arr >>>>>>',arr);
  return 9
}

module.exports = {
  Array2D
};