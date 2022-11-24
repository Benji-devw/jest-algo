const app = require('../src/app');
 
// describe('Palindrom', () => {

//   it.todo("should return a sentence and to great to 0")
//   // it.todo("should return a sentence and to great to 0", () => {
//   //   expect(app.sentence.length).toBeGreaterThan(0)
//   // })
//   it('should have a of 11 length', () => {
//     expect(app.sentence().length).toEqual(11)
//   })

//   it ("should be a word palindrom", () => {
//     expect(app.isPalindrom('kayak'.toLowerCase())).toEqual(true)
//   })

//   it ("should be a sentence palindrom", () => {
//     expect(app.isPalindrom("karinE alla, en, Irak".toLowerCase().replace(/,/g, '').replace(/ /g, ''))).toEqual(true)
//     // expect(app.isPalindrom("Rose utérus, à ma masure, tu es or".toLowerCase().replace(/,/g, '').replace(/ /g, ''))).toEqual(true)
//   })

//   it ("should NOT be a palindrom", () => {
//     expect(app.isPalindrom('azerty')).toEqual(false)
//   })
// })



describe('Moderator', () => {
  it('if contains forbidden words', () => {
    expect(app.containsForbiddenWords('Vous êtes tous des truffes et des boulés les gars')).toEqual(true)
  })

  it('remove all forbidden words', () => {
    expect(app.removeForbiddenWords('Vous êtes tous des cons band de truffes les gars')).toEqual('Vous êtes tous des xxxx band de xxxx les gars')
  })

  it('return the sentence if no forbidden detect', () => {
    expect(app.removeForbiddenWords('Vous êtes des gentils les gars')).toEqual('Vous êtes des gentils les gars')
  })

  it('If detect cases haks', () => {
    expect(app.removeForbiddenWords('Vous êtes tous des TruffEs')).toBe('Vous êtes tous des xxxx')
    // expect(app.removeForbiddenWords('Vous êtes tous des Tr**uffEs')).toEqual('Vous êtes tous des xxxx')
  })
})
