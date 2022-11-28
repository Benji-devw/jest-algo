const arrs = require('../src/arrays')


describe("Arrays", () => {

  // it("2D array", () =>  {
  //   expect(arrs.Array2D()).toEqual([
  //     ["X","X","X","X","X"],
  //     ["X","X","X","X","X"],
  //     ["X","X","X","X","X"],
  //     ["X","X","X","X","X"],
  //     ["X","X","X","X","X"],
  //   ])
  // })
  
  it("2D array", () =>  {
    expect(arrs.Array2D()).toEqual(9)
  })



} )
