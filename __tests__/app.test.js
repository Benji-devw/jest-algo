const app = require("../src/app");

describe("find Longest Word Length", () => {
  it("should return 6", () => {
    expect(
      app.findLongestWordLength("The quick brown fox jumped over the lazy dog")
    ).toBe(6);
  });
});

describe("factorialize", () => {
  it("should return 120", () => {
    expect(app.factorialize(5)).toBe(120);
  });
});

describe("Largest number Array", () => {
  it("should return largest NUmbers in Arrays", () => {
    const largestOfFour = [ [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1] ];
    expect(app.largestOfFour(largestOfFour)).toEqual([5, 27, 39, 1001]);
  });
  
  it("should return negative largest NUmbers in Arrays", () => {
    const largestOfFour = [ [17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10] ];
    expect(app.largestOfFour(largestOfFour)).toEqual([25, 48, 21, -3]);
  });
});

describe("Confirm the Ending", () => {
  it("should return true", () => {
    expect(app.confirmEnding("Bastian", "n")).toEqual(true);
  });
  
  it("should return true", () => {
    expect(app.confirmEnding("Congratulation", "on")).toEqual(true);
  });
  
  it("Vérifie si une chaîne (premier argument, str) se termine par la chaîne cible donnée (deuxième argument, cible).", () => {
    expect(app.confirmEnding("Connor", "n")).toEqual(false);
  });
});

// describe("Repeat a String Repeat a String", () => {
//   it.only("should return the string ***", () => {
//     expect(app.repeatStringNumTimes("*", "3")).toEqual(true);
//   });

// });
