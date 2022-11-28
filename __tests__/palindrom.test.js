const app = require("../src/palindrom");

describe('Palindrom', () => {
  it.todo("should return a sentence and to great to 0")
  // it.todo("should return a sentence and to great to 0", () => {
  //   expect(app.sentence.length).toBeGreaterThan(0)
  // })
  it('should have a of 11 length', () => {
    expect(app.sentence().length).toEqual(11)
  })

  it ("should be a word palindrom", () => {
    expect(app.isPalindrom('kayak'.toLowerCase())).toEqual(true)
  })

  it ("should be a sentence palindrom", () => {
    expect(app.isPalindrom("karinE alla, en, Irak".toLowerCase().replace(/,/g, '').replace(/ /g, ''))).toEqual(true)
    // expect(app.isPalindrom("Rose utérus, à ma masure, tu es or".toLowerCase().replace(/,/g, '').replace(/ /g, ''))).toEqual(true)
  })

  it ("should NOT be a palindrom", () => {
    expect(app.isPalindrom('azerty')).toEqual(false)
  })
})
