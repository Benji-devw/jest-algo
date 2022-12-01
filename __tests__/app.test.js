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
    expect(app.confirmEnding("Bastian", "n")).toBe(true);
  });
  
  it("should return true", () => {
    expect(app.confirmEnding("Congratulation", "on")).toBe(true);
  });
  
  it("Vérifie si une chaîne (premier argument, str) se termine par la chaîne cible donnée (deuxième argument, cible).", () => {
    expect(app.confirmEnding("Connor", "n")).toBe(false);
  });
});

describe("Repeat a String Repeat a String", () => {
  it("should return the string ***", () => {
    expect(app.repeatStringNumTimes("*", "3")).toBe("***");
  });

  it("should return ''", () => {
    expect(app.repeatStringNumTimes("abc", "0")).toBe('');
  });
});

describe("Truncate a String", () => {
  const str = "A-tisket a-tasket A green"
  it("should return the string 'A-tisket...'", () => {
    expect(app.truncateString(str, 8)).toBe("A-tisket...");
  });

  it("should return 'str' ", () => {
    const str = "A-tisket a-tasket A green and yellow basket"
    expect(app.truncateString(str, str.length)).toEqual(str);
  });
});

describe("Finders Keepers", () => {
  it("should return 8'", () => {
    expect(app.findModulo([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).toBe(8);
  });
});

describe("True false => booWho", () => {
  it("should return true'", () => {
    expect(app.booWho(true)).toBe(true);
  });
  it("should return true'", () => {
    expect(app.booWho(false)).toBe(true);
  });
  it("should return false'", () => {
    expect(app.booWho([1, 2, 3])).toBe(false);
  });
});

describe("Title Case a Sentence", () => {
  it("should return =>  I'm a little tea pot ", () => {
    expect(app.titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  });
  it("should return sHoRt AnD sToUt", () => {
    expect(app.titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
  });
});

// describe("Slice & splice", () => {
//   it.only("should return [4, 1, 2, 3, 5] ", () => {
//     expect(app.frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
//   });
// });
