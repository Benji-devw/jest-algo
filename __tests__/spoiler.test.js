test('displays content after click', () => {

  document.body.innerHTML = `<div>Voici mon <span class="spoiler">contenu caché</span> </div>`
  require('../src/spoiler')

  const spoilerButton = document.querySelector('.spoiler button')
  const spoilerText = document.querySelector('.spoiler span')

  expect(spoilerButton).not.toBeNull()
  expect(spoilerText).not.toBeNull()
  // expect(spoilerText.classList.contains('visible')).toBe(false)
  expect(spoilerText).not.toHaveClass('visible')
  spoilerButton.click()
  // expect(spoilerText.classList.contains('visible')).toBe(true)
  expect(spoilerText).toHaveClass('visible')

})