import './link.css'

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

  createLink(ul, 'Home')
  createLink(ul, 'Favorites')
  createLink(ul, 'Shopping')

  nav.appendChild(ul)

  const firstChild = document.body.firstChild
  document.body.insertBefore(nav, firstChild)
}

Header()
