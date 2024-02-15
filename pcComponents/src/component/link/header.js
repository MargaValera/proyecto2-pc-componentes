import './link.css'

const navLinks = [
  {
    text: 'caracters'
  },
  {
    text: 'casa'
  },
  {
    text: 'episodes'
  },
  { text: 'caracters' },
  {
    text: 'casa'
  }
]
const Header = () => {
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  const createLink = (ul, text) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = text // Usar el texto pasado como argumento
    li.appendChild(a) // Cambiar append por appendChild

    ul.appendChild(li) // Cambiar append por appendChild
  }

  // Definir un ejemplo de navLinks
  const navLinks = [{ text: 'Link 1' }, { text: 'Link 2' }, { text: 'Link 3' }]

  // Iterar sobre los elementos de navLinks y crear enlaces
  for (const link of navLinks) {
    createLink(ul, link.text) // Pasar el texto del enlace como argumento
  }

  // Agregar enlaces adicionales
  createLink(ul, 'character')
  createLink(ul, 'location')
  createLink(ul, 'episodes')

  // Agregar ul al nav
  nav.appendChild(ul)

  // Agregar el nav al cuerpo del documento
  const firstChild = document.body.firstChild
  document.body.insertBefore(nav, firstChild)
}

// Llamar a la función Header para crear la barra de navegación
Header()
