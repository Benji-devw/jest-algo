import { intervalToObj } from "../src/interval";

describe("Interval", () => {
  // 1 - Doit retourner un ojbect pour 0 second
  it("should return an object for 0 second", () => {
    const o = intervalToObj(0);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });
  // 2 - Doit retourner un ojbect pour 3 second
  it("should return an object for 3 second", () => {
    const o = intervalToObj(3 * 1000);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 3,
    });
  });
  // 3 - Doit retourner un ojbect pour 15 second
  it("should return an object for 15 second", () => {
    const o = intervalToObj(15 * 1025);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 15,
    });
  });

  // 4 - Doit retourner les minutes => second supp a 6000
  it("should return handle minute", () => {
    const o = intervalToObj(3 * 60 * 1000 + 15 * 1025);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 3,
      seconds: 15,
    });
  });

  // 5 - Doit retourner 1 minutes
  it("should return handle minute", () => {
    const o = intervalToObj(60 * 1000);
    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });

  // 5 - Doit retourner 15 j + 3 h + 3 mn + 15 s
  it("should return handle 15 j + 3 h + 3 mn + 15 s", () => {
    const o = intervalToObj(
      15 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 3 * 60 * 1000 + 15 * 1025
    );

    expect(o).toEqual({
      days: 15,
      hours: 3,
      minutes: 3,
      seconds: 15,
    });
  });

  // 5 - Doit retourner nombre négative
  it("should return negative number", () => {
    const o = intervalToObj(
      -15 * 24 * 60 * 60 * 1000 +
        -3 * 60 * 60 * 1000 +
        -3 * 60 * 1000 +
        -15 * 1025
    );

    expect(o).toEqual({
      days: 15,
      hours: 3,
      minutes: 3,
      seconds: 15,
    });
  });
});
