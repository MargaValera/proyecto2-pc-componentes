import './link.css'

export const link = () => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.textContent = 'options'
  li.append(a)

  ul.append(li)
}
