const elements = document.querySelectorAll('.spoiler')

const createSpoilerButton = (element) => {

  // On crée le span.spoiler-content
  let span = document.createElement('span')
  span.className = 'spoiler-content'
  span.innerHTML = element.innerHTML

  // On crée le button
  let button = document.createElement('button')
  button.textContent = 'Afficher le spoiler'

  // On ajoute les élément au DOM
  element.innerHTML = ''
  element.appendChild(button)
  element.appendChild(span)

  // On met l'écouteur au click
  button.addEventListener('click', () => {
    button.parentNode.removeChild(button)
    span.classList.add('visible')
  })
}

for(let i = 0; i < elements.length; i++){
  createSpoilerButton(elements[i])
}