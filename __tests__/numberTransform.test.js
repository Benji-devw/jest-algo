const num = require("../src/numberTransform");

describe("Roman parse", () => {
  it("should return IV", () => {
    expect(num.decimalToRoman(4)).toBe("IV");
  });

  it("should return IX", () => {
    expect(num.decimalToRoman(9)).toBe("IX");
  });

  it("should return XCIX", () => {
    expect(num.decimalToRoman(99)).toBe("XCIX");
  });

  it("should return XXXIV", () => {
    expect(num.decimalToRoman(34)).toBe("XXXIV");
  });

  it("should return CMXCVIII", () => {
    expect(num.decimalToRoman(998)).toBe("CMXCVIII");
  });

  it("should return CMXCIX", () => {
    expect(num.decimalToRoman(999)).toBe("CMXCIX");
  });

  it("should return MMMDCCXXXVII", () => {
    expect(num.decimalToRoman(3737)).toBe("MMMDCCXXXVII");
  });

  it("should return MMMMCDXLIV", () => {
    expect(num.decimalToRoman(4444)).toBe("MMMMCDXLIV");
  });

  it("should return MMMMCDXLIV", () => {
    expect(num.decimalToRoman(4444)).toBe("MMMMCDXLIV");
  });
});






describe("ROT13 decrypt", () => {
  it("should return HELLO WORLD", () => {
    expect(num.transformToRot13("URYYB JBEYQ")).toBe("HELLO WORLD")
  })
  it("should return OPENCLASSROOMS", () => {
    expect(num.transformToRot13("BCRAPYNFFEBBZF")).toBe("OPENCLASSROOMS")
  })
  it("should return CECI EST MON CODE SECRET", () => {
    expect(num.transformToRot13("PRPV RFG ZBA PBQR FRPERG")).toBe("CECI EST MON CODE SECRET")
  })
})