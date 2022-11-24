const removeSNames = require('../src/foodsArray');

describe('removeSNames', () => {

  // Test 1 - names avec S ne doit pas être present dans le tab
  it('should remove all S names', () => {
    const names = ['Apple', "Strawberry", "Star fruit"];
    expect(removeSNames(names)).not.toContain("Strawberry");
    expect(removeSNames(names)).not.toContain("Star fruit");
  })

  // Test 2 - names avec S ne doit pas être touché
  it('should not remove other names', () => {
    const names = ['Apple', "Strawberry", "PineApple"];
    expect(removeSNames(names)).toContain("Apple");
    expect(removeSNames(names)).toContain("PineApple");
  })

  // Test 3 - names with S or s should not be present
  it('should mind the case', () => {
    const names = ['Apple', "Strawberry", "PineApple", "strawberry"];
    expect(removeSNames(names)).not.toContain("Strawberry");
    expect(removeSNames(names)).not.toContain("Strawberry");
  })


})


describe('should match', () => {
  const expect = ["Alice", ""]
})